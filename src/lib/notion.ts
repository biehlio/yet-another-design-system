import { DesignToken, Component } from "./types";

const fetchNotionData = async (url: string, body: string): Promise<any> => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      authorization: `Bearer ${process.env.NOTION_API_KEY}`,
    },
    next: {
      revalidate: 900,
    },
    body,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data from Notion:", error);
    throw error;
  }
};

export const getDesignTokens = async (): Promise<DesignToken[]> => {
  try {
    const data = await fetchNotionData(
      `https://api.notion.com/v1/databases/${process.env.NOTION_DB_DESIGN_TOKENS}/query`,
      JSON.stringify({
        filter: {
          property: "status",
          status: {
            equals: "published",
          },
        },
        sorts: [
          {
            property: "name",
            direction: "ascending",
          },
        ],
      }),
    );

    // Map the results to an array of DesignToken objects
    const designTokens: DesignToken[] = data.results.map((result: any) => ({
      status: result.properties.status.status.name,
      name: result.properties.name.title[0].text.content,
      slug: result.properties.slug.formula.string,
      href: result.properties.href.formula.string,
      pageId: result.id,
    }));

    return designTokens;
  } catch (error) {
    console.error("Error getting design tokens:", error);
    throw error;
  }
};

export const getComponents = async (): Promise<Component[]> => {
  try {
    const data = await fetchNotionData(
      `https://api.notion.com/v1/databases/${process.env.NOTION_DB_COMPONENTS}/query`,
      JSON.stringify({
        filter: {
          property: "status",
          status: {
            equals: "published",
          },
        },
        sorts: [
          {
            property: "name",
            direction: "ascending",
          },
        ],
      }),
    );

    // Map the results to an array of Component objects
    const components: Component[] = data.results.map((result: any) => ({
      status: result.properties.status.status.name,
      name: result.properties.name.title[0].text.content,
      slug: result.properties.slug.formula.string,
      href: result.properties.href.formula.string,
      pageId: result.id,
    }));

    return components;
  } catch (error) {
    console.error("Error getting components:", error);
    throw error;
  }
};

export const getPageMD = async (pageId: string): Promise<string> => {
  try {
    const data = await fetchNotionData(
      `https://api.notion.com/v1/pages/${pageId}`,
      JSON.stringify({
        include: "children",
      }),
    );

    const page = data.results[0];

    // Extract the Markdown content from the page
    const markdownContent = page.properties.Content.rich_text[0].plain_text;

    return markdownContent;
  } catch (error) {
    console.error("Error getting page MD:", error);
    throw error;
  }
};
