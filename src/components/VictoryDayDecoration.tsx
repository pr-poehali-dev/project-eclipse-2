import { useEffect, useState } from "react"

const STARS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${5 + Math.floor((i * 37 + i * i * 13) % 90)}%`,
  top: `${10 + Math.floor((i * 53 + i * 7) % 80)}%`,
  size: 10 + (i % 3) * 6,
  delay: `${(i * 0.4) % 3}s`,
  duration: `${2.5 + (i % 4) * 0.5}s`,
}))

const Ribbon = ({ side }: { side: "left" | "right" }) => {
  const stripes = [
    "#F4A500", "#F4A500",
    "#111111",
    "#F4A500", "#F4A500",
    "#111111",
    "#F4A500", "#F4A500",
    "#111111",
    "#F4A500",
  ]
  const w = 28
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        [side]: 0,
        width: w,
        height: "100vh",
        zIndex: 9998,
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          style={{
            width: "100%",
            height: "calc(100vh / 80)",
            backgroundColor: stripes[i % stripes.length],
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  )
}

const Star = ({ x, y, size, delay, duration }: { x: string; y: string; size: number; delay: string; duration: string }) => (
  <div
    style={{
      position: "fixed",
      left: x,
      top: y,
      width: size,
      height: size,
      zIndex: 9997,
      pointerEvents: "none",
      animation: `victoryStarPulse ${duration} ${delay} ease-in-out infinite`,
      color: "#F4A500",
      fontSize: size,
      lineHeight: 1,
      userSelect: "none",
    }}
  >
    ★
  </div>
)

export default function VictoryDayDecoration() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <>
      <style>{`
        @keyframes victoryStarPulse {
          0%, 100% { opacity: 0.18; transform: scale(0.9); }
          50% { opacity: 0.55; transform: scale(1.15); }
        }
        @keyframes victoryBannerIn {
          from { opacity: 0; transform: translateY(-32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes victoryBannerFade {
          0% { opacity: 1; }
          85% { opacity: 1; }
          100% { opacity: 0; pointer-events: none; }
        }
      `}</style>

      {/* Георгиевские ленты по бокам */}
      <Ribbon side="left" />
      <Ribbon side="right" />

      {/* Звёзды */}
      {STARS.map((s) => (
        <Star key={s.id} x={s.left} y={s.top} size={s.size} delay={s.delay} duration={s.duration} />
      ))}

      {/* Баннер сверху */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: "linear-gradient(90deg, #8B0000 0%, #CC0000 40%, #8B0000 100%)",
          borderBottom: "3px solid #F4A500",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "14px",
          padding: "8px 48px",
          animation: "victoryBannerIn 0.7s ease-out both",
          pointerEvents: "auto",
          boxShadow: "0 2px 12px rgba(0,0,0,0.5)",
        }}
      >
        <span style={{ color: "#F4A500", fontSize: 22, lineHeight: 1 }}>★</span>
        <span
          style={{
            color: "#fff",
            fontWeight: 700,
            fontSize: "clamp(13px, 2.2vw, 18px)",
            letterSpacing: "0.08em",
            textShadow: "0 1px 4px rgba(0,0,0,0.6)",
            textAlign: "center",
          }}
        >
          С Днём Победы! 9 мая — День Великой Победы 🎖️
        </span>
        <span style={{ color: "#F4A500", fontSize: 22, lineHeight: 1 }}>★</span>

        {/* Закрыть */}
        <button
          onClick={() => setVisible(false)}
          style={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            background: "transparent",
            border: "none",
            color: "#ffcccc",
            cursor: "pointer",
            fontSize: 18,
            lineHeight: 1,
            padding: "2px 6px",
            opacity: 0.7,
          }}
          aria-label="Закрыть"
        >
          ✕
        </button>
      </div>
    </>
  )
}
