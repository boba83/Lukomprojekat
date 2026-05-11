import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const KONTAKT_FORM_HASH = "#kontakt-forma-upita";

/**
 * Na promenu rute vrati skrol na vrh, osim kada je cilj Kontakt sa hash-om ka formi upita
 * (npr. sa Kategorije) — tada skroluje do polja za ime i prezime, ispod sticky headera.
 */
export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useLayoutEffect(() => {
    if (pathname === "/Kontakt" && hash === KONTAKT_FORM_HASH) {
      const el = document.getElementById("kontakt-forma-upita");
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash, key]);

  return null;
}
