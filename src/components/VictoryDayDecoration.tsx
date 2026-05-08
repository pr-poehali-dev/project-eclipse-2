import { useState } from "react"

const BANNER_URL =
  "https://cdn.poehali.dev/projects/f76cda14-7429-4cfa-98c1-c5a650df2ebc/bucket/452c2306-4a07-472a-ab3d-fa90a8945bc4.png"

const RIBBON_W = 48

// Звёзды — фиксированные позиции, не рандом
const STARS = [
  { id: 0,  left: "8%",  top: "12%", size: 18, delay: "0s",    dur: "2.4s" },
  { id: 1,  left: "15%", top: "55%", size: 12, delay: "0.6s",  dur: "3.0s" },
  { id: 2,  left: "7%",  top: "80%", size: 22, delay: "1.2s",  dur: "2.7s" },
  { id: 3,  left: "22%", top: "30%", size: 14, delay: "0.3s",  dur: "2.2s" },
  { id: 4,  left: "30%", top: "70%", size: 10, delay: "1.8s",  dur: "3.2s" },
  { id: 5,  left: "45%", top: "8%",  size: 16, delay: "0.9s",  dur: "2.5s" },
  { id: 6,  left: "50%", top: "88%", size: 20, delay: "0.4s",  dur: "2.8s" },
  { id: 7,  left: "62%", top: "22%", size: 12, delay: "1.5s",  dur: "3.1s" },
  { id: 8,  left: "70%", top: "65%", size: 18, delay: "0.7s",  dur: "2.3s" },
  { id: 9,  left: "78%", top: "40%", size: 14, delay: "2.1s",  dur: "2.9s" },
  { id: 10, left: "85%", top: "15%", size: 22, delay: "0.2s",  dur: "2.6s" },
  { id: 11, left: "88%", top: "75%", size: 10, delay: "1.0s",  dur: "3.3s" },
  { id: 12, left: "92%", top: "50%", size: 16, delay: "1.6s",  dur: "2.1s" },
  { id: 13, left: "55%", top: "48%", size: 12, delay: "2.4s",  dur: "2.7s" },
  { id: 14, left: "38%", top: "90%", size: 20, delay: "0.8s",  dur: "3.0s" },
  { id: 15, left: "20%", top: "10%", size: 14, delay: "1.3s",  dur: "2.4s" },
  { id: 16, left: "75%", top: "92%", size: 18, delay: "0.5s",  dur: "2.9s" },
  { id: 17, left: "95%", top: "28%", size: 12, delay: "1.9s",  dur: "2.2s" },
]

// Полосы георгиевской ленты: 3 оранжевых, 2 чёрных
const STRIPE_PATTERN = [
  { color: "#E8820C", h: 18 }, // оранж широкий
  { color: "#1a1a1a", h: 12 }, // чёрный
  { color: "#E8820C", h: 12 }, // оранж средний
  { color: "#1a1a1a", h: 12 }, // чёрный
  { color: "#E8820C", h: 18 }, // оранж широкий
]
const STRIPE_TOTAL = STRIPE_PATTERN.reduce((s, p) => s + p.h, 0) // 72px — один повтор

export default function VictoryDayDecoration() {
  const [bannerVisible, setBannerVisible] = useState(true)

  return (
    <>
      <style>{`
        @keyframes ribbonScroll {
          from { transform: translateY(0); }
          to   { transform: translateY(-${STRIPE_TOTAL}px); }
        }
        @keyframes starBlink {
          0%, 100% { opacity: 0.12; transform: scale(0.85); }
          50%       { opacity: 0.7;  transform: scale(1.2);  }
        }
        @keyframes topBarShimmer {
          0%   { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        @keyframes victoryIn {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ── Боковые живые ленты ── */}
      {(["left", "right"] as const).map((side) => (
        <div
          key={side}
          style={{
            position: "fixed",
            top: 0,
            [side]: 0,
            width: RIBBON_W,
            height: "100vh",
            zIndex: 9990,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          {/* двойной блок — первый + копия для бесшовного loop */}
          {[0, 1].map((copy) => (
            <div
              key={copy}
              style={{
                position: "absolute",
                top: copy === 0 ? 0 : `-${STRIPE_TOTAL}px`,
                left: 0,
                width: "100%",
                animation: `ribbonScroll ${1.6}s linear infinite`,
                animationDelay: copy === 0 ? "0s" : `-${(1.6 * STRIPE_TOTAL) / (STRIPE_TOTAL * 2)}s`,
              }}
            >
              {/* повторяем паттерн столько раз, чтобы закрыть 200vh */}
              {Array.from({ length: 30 }).map((_, i) =>
                STRIPE_PATTERN.map((stripe, si) => (
                  <div
                    key={`${i}-${si}`}
                    style={{
                      width: "100%",
                      height: stripe.h,
                      backgroundColor: stripe.color,
                    }}
                  />
                ))
              )}
            </div>
          ))}
          {/* блеск поверх ленты */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 40%, rgba(255,255,255,0.08) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      ))}

      {/* ── Мигающие звёзды ── */}
      {STARS.map((s) => (
        <div
          key={s.id}
          style={{
            position: "fixed",
            left: s.left,
            top: s.top,
            fontSize: s.size,
            color: "#F4A500",
            zIndex: 9989,
            pointerEvents: "none",
            userSelect: "none",
            animation: `starBlink ${s.dur} ${s.delay} ease-in-out infinite`,
            textShadow: "0 0 6px rgba(244,165,0,0.6)",
          }}
        >
          ★
        </div>
      ))}

      {/* ── Верхняя полоска-декор (всегда видна) ── */}
      <div
        style={{
          width: "100%",
          height: 6,
          background: "repeating-linear-gradient(90deg, #E8820C 0px, #E8820C 22px, #1a1a1a 22px, #1a1a1a 36px, #E8820C 36px, #E8820C 58px, #1a1a1a 58px, #1a1a1a 72px)",
          flexShrink: 0,
          zIndex: 9998,
          position: "relative",
        }}
      />

      {/* ── Баннер с картинкой ── */}
      {bannerVisible && (
        <div
          style={{
            position: "relative",
            width: "100%",
            lineHeight: 0,
            flexShrink: 0,
            zIndex: 9997,
            animation: "victoryIn 0.5s ease-out both",
          }}
        >
          <img
            src={BANNER_URL}
            alt="С Днём Победы! 9 мая 1941–1945"
            style={{
              width: "100%",
              display: "block",
              maxHeight: 96,
              objectFit: "cover",
              objectPosition: "center 30%",
            }}
          />
          {/* нижняя полоска под баннером */}
          <div
            style={{
              width: "100%",
              height: 5,
              background: "repeating-linear-gradient(90deg, #E8820C 0px, #E8820C 22px, #1a1a1a 22px, #1a1a1a 36px, #E8820C 36px, #E8820C 58px, #1a1a1a 58px, #1a1a1a 72px)",
            }}
          />
          <button
            onClick={() => setBannerVisible(false)}
            aria-label="Закрыть баннер"
            style={{
              position: "absolute",
              top: 6,
              right: RIBBON_W + 8,
              background: "rgba(0,0,0,0.6)",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: 13,
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
