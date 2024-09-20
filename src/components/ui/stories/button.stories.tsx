import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  tags: ["autodocs"],
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button>Primary button</Button>,
};

export const Secondary: Story = {
  render: () => <Button variant="secondary">Secondary button</Button>,
};

export const Ghost: Story = {
  render: () => <Button variant="ghost">Ghost button</Button>,
};

export const Destructive: Story = {
  render: () => <Button variant="destructive">Destructive button</Button>,
};

export const Link: Story = {
  render: () => <Button variant="link">Link button</Button>,
};

export const Outline: Story = {
  render: () => <Button variant="outline">Outline button</Button>,
};

export const Small: Story = {
  render: () => <Button size="sm">Small button</Button>,
};

export const Large: Story = {
  render: () => <Button size="lg">Large button</Button>,
};
