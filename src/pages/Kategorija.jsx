import React from "react";
import { Link } from "react-router-dom";
import KategorijaHoodWorkshopBanner from "@/components/KategorijaHoodWorkshopBanner";
import {
  Armchair,
  Bike,
  Boxes,
  CircleDot,
  Droplets,
  Fan,
  Filter,
  Fuel,
  Gauge,
  Link2,
  Package,
  Settings2,
  Sparkles,
  Tractor,
  Truck,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";

const TEL_FIX = "+38131863650";
const TEL_MOB = "+381657211111";

/** Redosled i nazivi grupa usklađeni sa uobičajenom podelom „svih delova“ (katalog tipa all-parts). */
const CATALOG_SECTIONS = [
  {
    id: "mali-servis",
    title: "Mali servis",
    items: [
      "Filter ulja, vazduha i kabine (po marki)",
      "Svećice, kablovi paljenja",
      "Kočiona tečnost i osnovni fluidi",
      "Pregled kaiševa i sitnih potrošnih materijala",
    ],
  },
  {
    id: "veliki-servis",
    title: "Veliki servis",
    items: [
      "Pumpa za vodu + set zupčastog kaiša",
      "Set za zupčenje – kaiš",
      "Set za zupčenje – lanac",
      "Pumpa za vodu",
    ],
  },
  {
    id: "kocioni-sistem",
    title: "Kočioni sistem",
    items: [
      "Diskovi, bubnjevi, pločice i čeljusti",
      "Kočiona hidraulika, creva i cilindri",
      "Ručna kočnica i kompleti za održavanje",
      "Senzori i pribor (po programu)",
    ],
  },
  {
    id: "filteri",
    title: "Filteri",
    items: [
      "Filter vazduha, ulja, goriva, kabine",
      "Kućišta filtera i prateći elementi",
      "Dopunski / specijalni filteri (upit)",
    ],
  },
  {
    id: "ulja-i-tecnosti",
    title: "Ulja i tečnosti",
    items: [
      "Motorna, menjačka i diferencijalna ulja",
      "Antifriz, AdBlue, rashladne tečnosti",
      "Kočiona tečnost, servo ulje",
    ],
  },
  {
    id: "delovi-motora",
    title: "Delovi motora",
    items: [
      "Zupčasti kaiš",
      "Pumpa za vodu",
      "EGR ventil",
      "Nosač motora",
    ],
  },
  {
    id: "karoserija",
    title: "Karoserija",
    items: [
      "Elementi karoserije i oplata",
      "Stakla i prateći program",
      "Klipovi, branici, ogledala (po upitu)",
    ],
  },
  {
    id: "sistem-oslanjanja",
    title: "Sistem oslanjanja",
    items: [
      "Oscilujuće rame",
      "Spona stabilizatora",
      "Nosač ramena",
      "Komplet alata za rad na sistemu upravljanja",
    ],
  },
  {
    id: "elektrika",
    title: "Elektrika",
    items: [
      "Alternator, anlaser, motorič",
      "Osvetljenje i signalizacija",
      "Kablovi, osigurači, konektori",
    ],
  },
  {
    id: "amortizacija",
    title: "Amortizacija",
    items: [
      "Amortizeri prednji i zadnji",
      "Opruge, vilenjaci i opružni nosači",
      "Manžetne i prateći elementi vešanja",
    ],
  },
  {
    id: "sistem-upravljanja",
    title: "Sistem upravljanja",
    items: [
      "Aksijalni zglob",
      "Manžetna",
      "Letva volana",
      "Hidraulični filter za servo upravljač",
    ],
  },
  {
    id: "sistem-paljenja",
    title: "Sistem za paljenje",
    items: [
      "Svećice, kablovi, bobine",
      "Anlaser, delovi paljenja",
      "Senzori rada motora (po programu)",
    ],
  },
  {
    id: "izduvni-sistem",
    title: "Sistem izduvnih gasova",
    items: [
      "Zadnji izduvni lonac (izduvni sistem)",
      "Izduvna cev (izduvni sistem)",
      "Srednji izduvni lonac (izduvni sistem)",
      "Savitljiva metalna cev, izduvni sistem",
    ],
  },
  {
    id: "dovod-goriva",
    title: "Sistem za dovod goriva",
    items: [
      "Pumpa goriva",
      "Rezervoar za gorivo sa poklopcem",
      "Poklopac rezervoara za gorivo",
      "Crevo za višak goriva",
    ],
  },
  {
    id: "enterijer",
    title: "Delovi enterijera",
    items: [
      "Gumene patosnice",
      "Gumene patosnice gepeka (kadice)",
      "Ručica na vratima (sistem zaključavanja)",
      "Gasni amortizer za prtljažnik",
    ],
  },
  {
    id: "grejanje",
    title: "Sistem za grejanje",
    items: [
      "Ventilator kabine",
      "Hladnjak grejanja (razmenjivač toplote)",
      "Otpornik ventilatora kabine",
      "Kontrolna jedinica za grejanje/ventilaciju",
    ],
  },
  {
    id: "zaptivaci",
    title: "Zaptivači i zaptivni prstenovi",
    items: [
      "Kompletan set zaptivki za motor",
      "Zaptivač glave motora",
      "Zaptivač poklopca ventila",
      "Zaptivač ventila",
    ],
  },
  {
    id: "prenos-snage",
    title: "Prenos snage",
    items: [
      "Ulje za menjače",
      "Ulje za automatski menjač",
      "Radijalni zaptivni prsten (semering) za manuelni menjač",
      "Nosač menjača",
    ],
  },
  {
    id: "lezajevi",
    title: "Ležajevi",
    items: [
      "Ležaj točka",
      "Zaštitni poklopac / osovina potisnog ležaja",
      "Potisni ležaj",
      "Čaura",
    ],
  },
  {
    id: "brisači",
    title: "Sistem za pranje vetrobranskog stakla",
    items: [
      "Metlice brisača",
      "Motor brisača",
      "Sistem poluga brisača",
      "Metlice brisača (univerzalne)",
    ],
  },
  {
    id: "setovi-popravka",
    title: "Setovi za popravku",
    items: [
      "Set za popravku kočionih čeljusti",
      "Komplet čaura kočionih čeljusti",
      "Set za popravku glavnog kočionog cilindra",
      "Set za popravku vratila ručne kočnice",
    ],
  },
  {
    id: "senzori",
    title: "Senzori, releji i kontrolne jedinice",
    items: [
      "Lambda-sonda",
      "Senzor pritiska izduvnih gasova",
      "Senzor temperature izduvnih gasova",
      "Senzor pritiska usisne cevi",
    ],
  },
  {
    id: "kardan-diferencijal",
    title: "Kardanska vratila i diferencijali",
    items: [
      "Radijalni zaptivni prsten (semering) za diferencijal",
      "Ulje za menjače",
      "Ulje za automatski menjač",
      "Kardanski zglob",
    ],
  },
  {
    id: "razvod-pogona",
    title: "Razvod pogona motora",
    items: [
      "Pumpa za vodu + komplet zupčastog kaiša",
      "Set za zupčenje – kaiš",
      "Pumpa za vodu",
      "Zupčasti kaiš",
    ],
  },
  {
    id: "cevi-creva",
    title: "Cevi i creva",
    items: [
      "Creva rashladnog sistema",
      "Creva goriva i vazduha",
      "Creva kočnica i servoa",
      "Specijalna creva (po meri / upitu)",
    ],
  },
  {
    id: "hladjenje-motora",
    title: "Sistem za hlađenje motora",
    items: [
      "Ventilator hladnjaka",
      "Hladnjak motora",
      "Crevo hladnjaka",
      "Posuda za rashladnu tečnost",
    ],
  },
  {
    id: "kvacilo",
    title: "Kvačila i prateći delovi",
    items: [
      "Set kvačila",
      "Nosač menjača",
      "Potisni ležaj",
      "Zaštitni poklopac / osovina potisnog ležaja",
    ],
  },
  {
    id: "pogonska-osovina",
    title: "Pogonska osovina i zglobovi",
    items: [
      "Pogonska osovina",
      "Zglob pogonske osovine",
      "Trostrani ležaj pogonske osovine",
      "Manžetna osovine",
    ],
  },
  {
    id: "kuke-vucu",
    title: "Kuke za vuču",
    items: [
      "Kuka za vuču",
      "Električni komplet, uređaj za vuču",
      "Držač, papuča zaustavljača kočnice",
      "Papuča zaustavljača kočnice",
    ],
  },
  {
    id: "klima",
    title: "Sistem za klimatizaciju",
    items: [
      "Kompresor klime i prateći elementi",
      "Filteri i dezinfekcija (po programu)",
      "Ventilacija kabine — delovi (upit)",
    ],
  },
  {
    id: "dodatna-oprema",
    title: "Dodatna oprema",
    items: [
      "Presvlake za sedišta",
      "Parking senzor",
      "Osveživač vazduha",
      "Navlaka ručice menjača",
    ],
  },
  {
    id: "univerzalni",
    title: "Univerzalni delovi",
    items: [
      "Šelne za creva",
      "Žabice i kopče",
      "Rashladne tečnosti",
      "Tečnosti za pranje stakala",
    ],
  },
  {
    id: "dovod-vazduha",
    title: "Sistem za dovod vazduha",
    items: [
      "Sajla za gas",
      "Ventil za regulaciju praznog hoda",
      "Usisno crevo kućišta filtera vazduha",
      "Dopunski filter za vazduh",
    ],
  },
  {
    id: "podmazivanje",
    title: "Podmazivanje",
    items: [
      "Hladnjak ulja za motor",
      "Karter",
      "Lanac uljne pumpe",
      "Crevo za ulje",
    ],
  },
  {
    id: "lukom-teret-moped",
    title: "Kamioni, traktori, mopedi i motori (LUKOM)",
    items: [
      "Teretna i poljoprivredna vozila — širok asortiman",
      "Mopedi i motori — originalni i zamenski program",
      "Za marku i model uvek pitajte telefonom ili u radnji",
    ],
  },
];

const SECTION_ICON_CYCLE = [
  Wrench,
  CircleDot,
  Filter,
  Droplets,
  Boxes,
  Wind,
  Zap,
  Link2,
  Fan,
  Gauge,
  Settings2,
  Armchair,
  Sparkles,
  Truck,
];

export default function Kategorija() {
  return (
    <div className="bg-white min-h-screen lukom-contact-page">
      <section className="lukom-contact-hero">
        <div className="lukom-section-inner lukom-contact-hero-inner">
          <p className="lukom-contact-eyebrow">KATEGORIJA</p>
          <h1 className="lukom-contact-title">Kategorija delova</h1>
          <p className="lukom-doc-hero-subtitle">
            Pregled kategorija rezervnih delova za putnički, teretni i
            poljoprivredni program.
          </p>
          <div className="lukom-contact-divider" />
        </div>
      </section>

      <section className="bg-white lukom-contact-body lukom-kat-body">
        <div className="lukom-section-inner lukom-kat-inner-wide">
          <div className="lukom-kat-banner-stack">
            <KategorijaHoodWorkshopBanner />
          </div>

          <p className="lukom-kat-intro-note">
            Lista je informativna: nije klik-kupovina na sajtu. Za tačan deo i
            cenu najbrže je da nas pozovete sa markom, modelom i godinom
            proizvodnje.
          </p>

          <div className="lukom-kat-catalog">
            {CATALOG_SECTIONS.map((section, index) => {
              const Icon = SECTION_ICON_CYCLE[index % SECTION_ICON_CYCLE.length];
              const spanWide = section.id === "lukom-teret-moped";
              return (
                <section
                  key={section.id}
                  id={section.id}
                  className={`lukom-kat-cta-panel lukom-kat-block${spanWide ? " lukom-kat-block-span-2" : ""}`}
                >
                  <div className="lukom-kat-cta-icon" aria-hidden>
                    <Icon strokeWidth={1.65} size={26} />
                  </div>
                  <div>
                    <h2 className="lukom-kat-cta-title">{section.title}</h2>
                    <ul className="lukom-kat-block-list">
                      {section.items.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                    <div className="lukom-kat-cta-actions">
                      <a
                        className="lukom-kat-btn-primary"
                        href={`tel:${TEL_FIX}`}
                      >
                        Pozovite 031 / 863-650
                      </a>
                      <Link
                        className="lukom-kat-btn-secondary"
                        to="/Kontakt#kontakt-forma-upita"
                      >
                        Forma za upit
                      </Link>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          <div className="lukom-kat-cta-panel">
            <div className="lukom-kat-cta-icon" aria-hidden>
              <Package strokeWidth={1.5} size={28} />
              <Fuel strokeWidth={1.5} size={26} />
            </div>
            <div>
              <h2 className="lukom-kat-cta-title">
                Potrebna pomoć, preporuka ili savet?
              </h2>
              <p className="lukom-kat-cta-text">
                Konsultujte se i poručite telefonom — pomoći ćemo da izaberete
                pravi deo. Za poruku u pisanom obliku koristite stranicu
                kontakta.
              </p>
              <div className="lukom-kat-cta-actions">
                <a className="lukom-kat-btn-primary" href={`tel:${TEL_FIX}`}>
                  Pozovite 031 / 863-650
                </a>
                <Link
                  className="lukom-kat-btn-secondary"
                  to="/Kontakt#kontakt-forma-upita"
                >
                  Forma za upit
                </Link>
              </div>
            </div>
          </div>

          <p className="lukom-kat-foot-icons" aria-hidden>
            <Truck size={18} strokeWidth={1.5} />
            <Tractor size={18} strokeWidth={1.5} />
            <Bike size={18} strokeWidth={1.5} />
            <span className="lukom-kat-foot-icons-label">
              Putnička · teretna · moped / motor
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
