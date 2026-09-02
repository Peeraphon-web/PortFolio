import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#05070d",
        color: "#87cefa",
        border: "8px solid #87cefa",
        fontSize: 74,
        fontWeight: 700,
      }}
    >
      PL
    </div>,
    size,
  );
}
