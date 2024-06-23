import { ImageResponse } from "next/og";
import Logo from "../components/Logo";

export function generateImageMetadata() {
  return [
    {
      contentType: "image/png",
      size: { width: 48, height: 48 },
      id: "small",
    },
    {
      contentType: "image/png",
      size: { width: 72, height: 72 },
      id: "medium",
    },
  ];
}

export default function Icon({ id }: { id: string }) {
  return new ImageResponse(<Logo />);
}
