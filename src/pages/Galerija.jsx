import React, { useEffect, useState } from "react";

const GALLERY_IMAGES = [
  {
    src: "/galerija/lukom-auto-dan.png",
    alt: "LUKOM brendirano vozilo",
    label: "LUKOM vozilo",
  },
  {
    src: "/galerija/lukom-radnja-dan.png",
    alt: "LUKOM prodavnica auto delova",
    label: "Prodajni objekat",
  },
  {
    src: "/galerija/lukom-radnja-noc.png",
    alt: "LUKOM prodavnica noću",
    label: "Objekat noću",
  },
  {
    src: "/galerija/lukom-auto-noc.png",
    alt: "LUKOM brendirano vozilo noću",
    label: "Vozilo noću",
  },
];

/** Dodaj ovde nove slike prodavnice (fajl u public/galerija/ …). */
const SHOP_GALLERY = [
  {
    src: "/galerija/prodavnica-proizvodi-2.png",
    alt: "Širok asortiman delova na policama",
    label: "Asortiman delova",
  },
  {
    src: "/galerija/prodavnica-proizvodi-3.png",
    alt: "Sprejevi, hemija i dodatna oprema",
    label: "Auto hemija i oprema",
  },
  {
    src: "/galerija/prodavnica-proizvodi-4.png",
    alt: "Auto kozmetika i razni sprejevi u prodavnici",
    label: "Auto kozmetika i razni sprejevi",
  },
  {
    src: "/galerija/prodavnica-proizvodi-5.png",
    alt: "Patosnice, kadice i ostali prateći program u radnji",
    label: "Patosnice, kadice i ostali prateći program",
  },
  {
    src: "/galerija/prodavnica-proizvodi-6.png",
    alt: "Brisači, miris i razna prateća oprema u radnji",
    label: "Brisači, miris i razna prateća oprema",
  },
  {
    src: "/galerija/prodavnica-proizvodi-7.png",
    alt: "Sitni delovi i elementi na radnim policama",
    label: "Sitni delovi i elementi",
  },
  {
    src: "/galerija/prodavnica-proizvodi-8.png",
    alt: "Pult i široka ponuda akumulatora i delova",
    label: "Pult i ponuda proizvoda",
  },
  {
    src: "/galerija/prodavnica-proizvodi-9.png",
    alt: "Creva i vodovi izloženi na zidu",
    label: "Creva i vodovi",
  },
  {
    src: "/galerija/prodavnica-proizvodi-10.png",
    alt: "Stop svetla i signalizacija na policama",
    label: "Svetlosna signalizacija",
  },
  {
    src: "/galerija/prodavnica-proizvodi-11.png",
    alt: "Hladnjaci i rashladni elementi",
    label: "Hladnjaci i rashlada",
  },
  {
    src: "/galerija/prodavnica-proizvodi-12.png",
    alt: "Police sa kutijama i filterima",
    label: "Police sa delovima",
  },
  {
    src: "/galerija/prodavnica-proizvodi-13.png",
    alt: "Ulja, maziva i dodatni program na policama",
    label: "Ulja i maziva",
  },
];

function GalleryGrid({ items, onOpen }) {
  return (
    <div className="lukom-gallery-grid">
      {items.map((item) => (
        <article key={item.src} className="lukom-gallery-card">
          <button
            type="button"
            className="lukom-gallery-card-trigger"
            onClick={() => onOpen(item)}
            aria-label={`Povećaj sliku: ${item.alt}`}
          >
            <img src={item.src} alt={item.alt} className="lukom-gallery-image" />
            <div className="lukom-gallery-label">{item.label}</div>
          </button>
        </article>
      ))}
    </div>
  );
}

export default function Galerija() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  return (
    <div className="lukom-contact-page">
      <section className="lukom-contact-hero">
        <div className="lukom-section-inner lukom-contact-hero-inner">
          <p className="lukom-contact-eyebrow">GALERIJA</p>
          <h1 className="lukom-contact-title">Pogledajte našu radnju i vozila</h1>
          <p className="lukom-doc-hero-subtitle">
            Fotografije objekta i LUKOM brendiranih vozila.
          </p>
          <div className="lukom-contact-divider" />
        </div>
      </section>

      <section className="lukom-gallery-body">
        <div className="lukom-section-inner">
          <GalleryGrid items={GALLERY_IMAGES} onOpen={setLightbox} />
        </div>
      </section>

      <section className="lukom-gallery-body lukom-gallery-body-shop">
        <div className="lukom-section-inner">
          <h2 className="lukom-gallery-section-title">Naša prodavnica izbliza</h2>
          <p className="lukom-gallery-section-lead">
            Izlog, polica sa delovima i radni prostor — dodajemo nove kad god
            imamo šta da pokažemo.
          </p>
          {SHOP_GALLERY.length > 0 ? (
            <GalleryGrid items={SHOP_GALLERY} onOpen={setLightbox} />
          ) : (
            <p className="lukom-gallery-shop-placeholder">
              Uskoro ovde dodajemo još fotografija iz prodavnice — izlog,
              interijer i radni prostor.
            </p>
          )}
        </div>
      </section>

      {lightbox && (
        <div
          className="lukom-gallery-lightbox"
          role="presentation"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="lukom-gallery-lightbox-close"
            aria-label="Zatvori"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
          >
            ×
          </button>
          <div
            className="lukom-gallery-lightbox-inner"
            role="presentation"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightbox.src} alt={lightbox.alt} />
            {lightbox.label && (
              <p className="lukom-gallery-lightbox-caption">{lightbox.label}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
