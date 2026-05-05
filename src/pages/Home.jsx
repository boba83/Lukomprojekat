import React from "react";

const BRAND_GROUPS = [
  ["FE", "FEBI"],
  ["FE", "FERODO"],
  ["BO", "BOSCH"],
  ["VA", "VALEO"],
  ["DA", "DAYCO"],
  ["ME", "METELLI"],
  ["NG", "NGK"],
  ["SA", "SACHS"],
  ["HE", "HELLA"],
  ["FA", "FACET"],
  ["RU", "RUEN"],
  ["FK", "FKL"],
  ["FA", "FAG"],
  ["CA", "CASTROL"],
  ["MO", "MOBIL"],
  ["WU", "WURTH"],
  ["VE", "VERNET"],
  ["CH", "CHAMPION"],
  ["MO", "MONROE"],
  ["KY", "KYB"],
  ["RE", "REINZ"],
  ["OP", "OPTIMAL"],
  ["TR", "TRUSTING"],
  ["ER", "ERLING"],
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="lukom-hero">
        <div className="lukom-hero-inner">
          <div className="lukom-hero-badge">
            <span>Od 2004. godine — Vaš pouzdan partner</span>
          </div>
          <h1 className="lukom-hero-title">
            <span className="lukom-hero-title-line">LUKOM</span>
            <span className="lukom-hero-title-line accent">Auto Delovi</span>
          </h1>
          <p className="lukom-hero-subtitle">
            Auto delovi u Bajinoj Bašti i okolini — delovi za kola, traktore,
            motore i teretna vozila. Kočnice i diskovi, ulja i maziva, filteri,
            elektrika, amortizeri i širok izbor rezervnih delova na jednom mestu.
            Originalni i zamenski delovi renomiranih svetskih brendova.
          </p>
          <div className="lukom-hero-actions">
            <a href="/Kontakt" className="lukom-btn lukom-btn-primary">
              Kontaktirajte nas
            </a>
            <a href="/Galerija" className="lukom-btn lukom-btn-secondary">
              Pogledajte ponudu
            </a>
          </div>
          <div className="lukom-hero-meta">
            <span>📞 031/863-650</span>
            <span>📍 Rajka Tadića br.2, Bajina Bašta</span>
          </div>
        </div>
      </section>

      {/* BRENDOVI */}
      <section className="lukom-section lukom-section-brands">
        <div className="lukom-section-inner">
          <p className="lukom-section-eyebrow">BRENDOVI</p>
          <h2 className="lukom-section-title">Samo provereni proizvođači</h2>
          <div className="lukom-section-divider" />

          <div className="lukom-brands-grid">
            {BRAND_GROUPS.map(([code, name]) => (
              <div key={code + name} className="lukom-brand-pill">
                <span className="lukom-brand-code">{code}</span>
                <span className="lukom-brand-name">{name}</span>
              </div>
            ))}
          </div>

          <p className="lukom-brands-more">
            ...i mnogi drugi: GALAX, MODRICA, FAD, FRAD, COBEST, PODBELA TESANJ,
            IMT, IMR, CRON, FADIP, VAZ, GAZ i još više.
          </p>
        </div>
      </section>

      {/* ASORTIMAN */}
      <section className="lukom-section lukom-section-assortment">
        <div className="lukom-section-inner">
          <p className="lukom-section-eyebrow">ASORTIMAN</p>
          <h2 className="lukom-section-title">Sve na jednom mestu</h2>
          <p className="lukom-section-lead lukom-assortment-lead">
            Kod nas u LUKOM-u u Bajinoj Bašti nabavljate auto delove za svakodnevna
            kretanja i poljoprivredu: od filtra i ulja do kompleta kočnica i diskova,
            setova remenica, delova motora, reduktora i opreme za traktore —
            porodična radnja, savet i lager prilagođen regionu.
          </p>
          <div className="lukom-section-divider" />

          <div className="lukom-assortment-grid">
            <div className="lukom-assortment-card">
              <div className="lukom-assortment-icon">🚗</div>
              <h3>Putnička vozila</h3>
              <p>Kompletna ponuda delova za sve marke putničkih automobila.</p>
            </div>
            <div className="lukom-assortment-card">
              <div className="lukom-assortment-icon">🚚</div>
              <h3>Teretna vozila</h3>
              <p>Delovi za kamione, traktore i ostala teretna vozila.</p>
            </div>
            <div className="lukom-assortment-card">
              <div className="lukom-assortment-icon">🛵</div>
              <h3>Mopedi i motori</h3>
              <p>Originalni i zamenski delovi za mopede i motore.</p>
            </div>
            <div className="lukom-assortment-card">
              <div className="lukom-assortment-icon">🛡️</div>
              <h3>Garancija kvaliteta</h3>
              <p>Samo originalni delovi sa garancijom od proizvođača.</p>
            </div>
            <div className="lukom-assortment-card">
              <div className="lukom-assortment-icon">⚡</div>
              <h3>Brza isporuka</h3>
              <p>Svakodnevno snabdevanje i brza dostupnost delova.</p>
            </div>
            <div className="lukom-assortment-card">
              <div className="lukom-assortment-icon">🏁</div>
              <h3>20+ godina iskustva</h3>
              <p>Pouzdan partner za auto delove od 2004. godine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* O NAMA */}
      <section className="lukom-section lukom-section-about">
        <div className="lukom-section-inner lukom-about-grid">
          <div className="lukom-about-text">
            <p className="lukom-section-eyebrow">O NAMA</p>
            <h2 className="lukom-section-title">
              Porodična firma <span className="accent">LUKOM</span>
            </h2>
            <p>
              Firma LUKOM je porodična firma nastala 2004. godine, zasnovana na
              prodaji rezervnih delova za sve vrste motornih vozila — putničkog,
              teretnog, traktorskog i privrednog programa.
            </p>
            <p>
              Glavna ideja na početku bila je snabdevanje krajnjih kupaca iz
              maloprodaje, a kasnije smo počeli i sa veleprodajom za preduzeća.
              Tokom ovih godina izborili smo se da budemo prepoznatljivo ime u
              poslovnosti — kako kod naših cenjenih kupaca, tako i kod
              dobavljača.
            </p>
          </div>
          <div className="lukom-about-info">
            <div className="lukom-about-item">
              <div className="lukom-about-item-header">
                <span className="lukom-about-item-icon">📍</span>
                <h4>Adresa</h4>
              </div>
              <p>Rajka Tadića br.2, 31250 Bajina Bašta, Srbija</p>
            </div>
            <div className="lukom-about-item">
              <div className="lukom-about-item-header">
                <span className="lukom-about-item-icon">📞</span>
                <h4>Telefon / Mob</h4>
              </div>
              <p>Tel: 031/863-650 | Mob: 065/72-11-111</p>
              <p>Fax: 031/866-650</p>
            </div>
            <div className="lukom-about-item">
              <div className="lukom-about-item-header">
                <span className="lukom-about-item-icon">@</span>
                <h4>E-mail</h4>
              </div>
              <p>lukom@mts.rs</p>
            </div>
            <div className="lukom-about-item">
              <div className="lukom-about-item-header">
                <span className="lukom-about-item-icon">⏰</span>
                <h4>Radno vreme</h4>
              </div>
              <p>Pon–Pet: 07:00–20:00 | Sub: 08:00–15:00</p>
              <p>Ned: zatvoreno</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BLOK */}
      <section className="lukom-cta">
        <div className="lukom-cta-inner">
          <h2>Potreban Vam je deo?</h2>
          <p>
            Pozovite nas ili pošaljite upit — pomoći ćemo Vam da pronađete pravi
            deo za Vaše vozilo.
          </p>
          <a href="tel:031863650" className="lukom-cta-phone">
            031/863-650
          </a>
        </div>
      </section>

    </>
  );
}