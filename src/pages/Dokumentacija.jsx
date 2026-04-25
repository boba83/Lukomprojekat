import React from "react";

const DOCS = [
  {
    tag: "Registracija",
    title: "Identifikacija",
    description:
      "Uverenje o registraciji privrednog subjekta i identifikacioni podaci firme LUKOM.",
    cta: "Otvori PDF",
    icon: "🛡️",
  },
  {
    tag: "Poreski dokument",
    title: "PIB",
    description:
      "Poreski identifikacioni broj firme za obavljanje poreskih i finansijskih transakcija.",
    cta: "Pogledaj dokument",
    icon: "💰",
    href: "/docs/pib.pdf",
  },
  {
    tag: "PDV",
    title: "Potvrda PDV-a",
    description:
      "Zvanična potvrda o evidenciji u sistemu PDV obveznika izdata od strane poreske uprave.",
    cta: "Pogledaj dokument",
    icon: "📄",
    href: "/docs/pdv.pdf",
  },
  {
    tag: "Depo",
    title: "DEPO-LUKOM",
    description:
      "Dokumentacija vezana za depo i skladišni prostor firme LUKOM.",
    cta: "Pogledaj dokument",
    icon: "🏢",
  },
];

export default function Dokumentacija() {
  return (
    <>
      <section className="lukom-contact-hero">
        <div className="lukom-section-inner lukom-contact-hero-inner">
          <p className="lukom-contact-eyebrow">LEGALNO POSLOVANJE</p>
          <h1 className="lukom-contact-title">Dokumentacija</h1>
          <p className="lukom-doc-hero-subtitle">
            Uverenje za legalno poslovanje — transparentnost i poverenje na
            prvom mestu.
          </p>
          <div className="lukom-contact-divider" />
        </div>
      </section>

      <div className="lukom-section lukom-section-brands">
        <div className="lukom-section-inner">
          <div className="lukom-docs-grid">
            {DOCS.map((doc) => (
              <article key={doc.title} className="lukom-doc-card">
                <div className="lukom-doc-icon">{doc.icon}</div>
                <div className="lukom-doc-tag">{doc.tag}</div>
                <h2>{doc.title}</h2>
                <p>{doc.description}</p>
                <a
                  href={doc.href || "#"}
                  target={doc.href ? "_blank" : undefined}
                  rel={doc.href ? "noopener noreferrer" : undefined}
                  className="lukom-doc-button"
                >
                  {doc.cta}
                </a>
              </article>
            ))}
          </div>

          <div className="lukom-doc-legal">
            <div className="lukom-doc-legal-icon">✔</div>
            <div>
              <div className="lukom-doc-legal-title">
                Registrovano i legalno poslovanje
              </div>
              <div className="lukom-doc-legal-text">
                Firma LUKOM posluje u skladu sa svim zakonskim propisima
                Republike Srbije. Za dodatne informacije o dokumentaciji možete
                nas kontaktirati na{" "}
                <a href="mailto:lukom@mts.rs">lukom@mts.rs</a> ili pozvati{" "}
                <a href="tel:031863650">031/863-650</a>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
