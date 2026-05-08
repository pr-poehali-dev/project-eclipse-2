import { useState } from "react"

const RIBBON_URL = "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/3a2cea08-7300-4203-89f2-5676d8fcb6f1.png"
const BANNER_URL = "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/452c2306-4a07-472a-ab3d-fa90a8945bc4.png"

const RIBBON_W = 44

const SideRibbon = ({ side }: { side: "left" | "right" }) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      [side]: 0,
      width: RIBBON_W,
      height: "100vh",
      zIndex: 9990,
      pointerEvents: "none",
      backgroundImage: `url(${RIBBON_URL})`,
      backgroundRepeat: "repeat-y",
      backgroundSize: `${RIBBON_W}px auto`,
    }}
  />
)

export default function VictoryDayDecoration() {
  const [bannerVisible, setBannerVisible] = useState(true)

  return (
    <>
      <SideRibbon side="left" />
      <SideRibbon side="right" />

      {bannerVisible && (
        <div style={{ position: "relative", width: "100%", lineHeight: 0, flexShrink: 0 }}>
          <img
            src={BANNER_URL}
            alt="С Днём Победы! 9 мая 1941–1945"
            style={{
              width: "100%",
              display: "block",
              maxHeight: 100,
              objectFit: "cover",
              objectPosition: "center 30%",
            }}
          />
          <button
            onClick={() => setBannerVisible(false)}
            aria-label="Закрыть баннер"
            style={{
              position: "absolute",
              top: 6,
              right: RIBBON_W + 8,
              background: "rgba(0,0,0,0.55)",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: 13,
              lineHeight: 1,
              borderRadius: "50%",
              width: 24,
              height: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>
      )}
    </>
  )
}