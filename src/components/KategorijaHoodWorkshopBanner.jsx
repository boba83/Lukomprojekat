import React from "react";

const VIDEO_SRC = "/videos/engine-top-view.mp4";

export default function KategorijaHoodWorkshopBanner() {
  return (
    <div className="lukom-kat-hood-video-bare">
      <div className="lukom-kat-hood-video-shell">
        <video
          className="lukom-kat-hood-video"
          src={VIDEO_SRC}
          autoPlay
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
          aria-label="Pogled na motor ispod haube"
        />
      </div>
    </div>
  );
}
