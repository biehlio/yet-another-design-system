import {
  IconColorSwatch,
  IconHandFinger,
  IconTypography,
} from "@tabler/icons-react";

export default function Icon({ name }: { name: string }) {
  switch (name) {
    case "Colors":
      return (
        <IconColorSwatch className="h-5 w-5 flex-shrink-0 text-neutral-700" />
      );
    case "Typography":
      return (
        <IconTypography className="h-5 w-5 flex-shrink-0 text-neutral-700" />
      );
    case "Button":
      return (
        <IconHandFinger className="h-5 w-5 flex-shrink-0 text-neutral-700" />
      );
    default:
      return <></>;
  }
}
