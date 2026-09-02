import { ImageResponse } from "next/og";

export const alt = "Peeraphon Laoha - Software Engineer and Full-stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#05070d",
          color: "#f5f8ff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#87cefa", fontSize: 22, letterSpacing: "0.22em" }}>
          SOFTWARE ENGINEER / FULL-STACK DEVELOPER
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: 76, fontWeight: 600, letterSpacing: "-0.04em" }}>PEERAPHON LAOHA</div>
          <div style={{ color: "#97a3b6", fontSize: 28 }}>Practical web and cross-platform software products.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "18px", color: "#87cefa", fontSize: 20 }}>
          <span style={{ width: 96, height: 1, background: "#87cefa" }} />
          SIGNAL / SYSTEM / BUILDING
        </div>
      </div>
    ),
    size,
  );
}
