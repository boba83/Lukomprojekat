import React, { useEffect, useRef, useState } from "react";

/** Lighter encode (854×480) for faster first load; regenerate with `npm run assets:engine-video` */
const VIDEO_SRC = "/videos/engine-top-view-854.mp4";

export default function KategorijaHoodWorkshopBanner() {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          obs.disconnect();
        }
      },
      { rootMargin: "240px 0px", threshold: 0.01 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || !videoRef.current) return;
    const v = videoRef.current;
    v.src = VIDEO_SRC;
    v.load();
    const p = v.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {});
    }
  }, [shouldLoad]);

  return (
    <div ref={wrapRef} className="lukom-kat-hood-video-bare">
      <div className="lukom-kat-hood-video-shell">
        <video
          ref={videoRef}
          className="lukom-kat-hood-video"
          muted
          playsInline
          preload="none"
          disablePictureInPicture
          aria-label="Pogled na motor ispod haube"
        />
      </div>
    </div>
  );
}
