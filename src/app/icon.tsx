import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
        border: "2px solid #87cefa",
        fontSize: 15,
        fontWeight: 700,
      }}
    >
      PL
    </div>,
    size,
  );
}
