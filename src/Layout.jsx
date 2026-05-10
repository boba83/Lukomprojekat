import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Printer,
  Smartphone,
  X,
} from "lucide-react";

const navItems = ["Home", "Galerija", "Kategorija", "Dokumentacija", "Kontakt"];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="lukom-app">
      <header className="lukom-header">
        <div className="lukom-header-inner">
          <Link to="/" className="lukom-logo">
            <img
              src="/lukom-logo.png"
              alt="LUKOM Auto Delovi"
              className="lukom-logo-image"
            />
            <div className="lukom-logo-text">
              <span className="lukom-logo-main">LUKOM</span>
              <span className="lukom-logo-sub">AUTODELOVI</span>
            </div>
          </Link>
          <nav className={"lukom-nav" + (menuOpen ? " lukom-nav-open" : "")}>
            {navItems.map((name) => {
              const path = name === "Home" ? "/" : `/${name}`;
              const isActive =
                currentPageName === name || location.pathname === path;
              return (
                <Link
                  key={name}
                  to={path}
                  className={
                    "lukom-nav-link" + (isActive ? " lukom-nav-link-active" : "")
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {name === "Home" ? "Naslovna" : name}
                </Link>
              );
            })}
            <a
              href="tel:031863650"
              className="lukom-call-button lukom-call-button-mobile"
              onClick={() => setMenuOpen(false)}
            >
              Pozovite
            </a>
          </nav>
          <a href="tel:031863650" className="lukom-call-button lukom-call-button-desktop">
            Pozovite
          </a>
          <button
            type="button"
            className="lukom-burger"
            aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      <main className="lukom-main">{children}</main>
      <footer className="lukom-footer">
        <div className="lukom-footer-inner">
          <div className="lukom-footer-col">
            <div className="lukom-footer-logo">
              <img
                src="/lukom-logo.png"
                alt="LUKOM Auto Delovi"
                className="lukom-footer-logo-image"
              />
              <div>
                <h4>LUKOM.</h4>
                <p>
                  Porodična firma za prodaju rezervnih delova na malo i veliko.
                  <br />
                  Vaš pouzdan partner od 2004. godine.
                </p>
              </div>
            </div>
          </div>
          <div className="lukom-footer-col">
            <h4>KONTAKT</h4>
            <div className="lukom-footer-row">
              <MapPin className="lukom-footer-icon" aria-hidden="true" />
              <span>Rajka Tadića br.2, 31250 Bajina Bašta</span>
            </div>
            <div className="lukom-footer-row">
              <Phone className="lukom-footer-icon" aria-hidden="true" />
              <span>Tel: 031/863-650</span>
            </div>
            <div className="lukom-footer-row">
              <Smartphone className="lukom-footer-icon" aria-hidden="true" />
              <span>Mob: 065/72-11-111</span>
            </div>
            <div className="lukom-footer-row">
              <Printer className="lukom-footer-icon" aria-hidden="true" />
              <span>Fax: 031/866-650</span>
            </div>
            <div className="lukom-footer-row">
              <Mail className="lukom-footer-icon" aria-hidden="true" />
              <span>lukom@mts.rs</span>
            </div>
          </div>
          <div className="lukom-footer-col">
            <h4>RADNO VREME</h4>
            <div className="lukom-footer-row">
              <Clock className="lukom-footer-icon" aria-hidden="true" />
              <span>Ponedeljak – Petak: 07:00 – 20:00</span>
            </div>
            <div className="lukom-footer-row">
              <Clock className="lukom-footer-icon" aria-hidden="true" />
              <span>Subota: 08:00 – 15:00</span>
            </div>
            <p className="lukom-footer-note">Nedeljom ne radimo</p>
          </div>
        </div>
        <div className="lukom-footer-car-layer" aria-hidden="true">
          <div className="lukom-footer-road" />
          <div className="lukom-footer-car">
            <img
              src="/footer-car.png"
              alt=""
              className="lukom-footer-car-image"
            />
            <div className="lukom-car-smoke lukom-car-smoke-1" />
            <div className="lukom-car-smoke lukom-car-smoke-2" />
            <div className="lukom-car-smoke lukom-car-smoke-3" />
            <div className="lukom-car-smoke lukom-car-smoke-4" />
            <div className="lukom-car-smoke lukom-car-smoke-5" />
          </div>
        </div>
        <div className="lukom-footer-bottom">
          © {new Date().getFullYear()} LUKOM Auto Delovi. Sva prava zadržana.
        </div>
      </footer>
    </div>
  );
}
