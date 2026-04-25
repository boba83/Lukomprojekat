import React from "react";

export default function Kategorija() {
  return (
    <div className="bg-white min-h-screen lukom-contact-page">
      <section className="lukom-contact-hero">
        <div className="lukom-section-inner lukom-contact-hero-inner">
          <p className="lukom-contact-eyebrow">KATEGORIJA</p>
          <h1 className="lukom-contact-title">Pronađi deo za svoje vozilo</h1>
          <p className="lukom-doc-hero-subtitle">
            Pozovite nas direktno ili nam pošaljite upit da bi Vam obezbedili
            deo koji tražite.
          </p>
          <div className="lukom-contact-divider" />
        </div>
      </section>

      <section className="bg-white lukom-contact-body">
        <div className="lukom-section-inner">
          {/* Ovde kasnije možemo dodati filtre / kategorije delova */}
        </div>
      </section>
    </div>
  );
}

