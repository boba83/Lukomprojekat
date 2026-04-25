import React from "react";

export default function FooterSection() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold mb-2 text-orange-400">LUKOM Auto Delovi</h3>
          <p className="text-sm text-slate-400">
            Prodavnica auto delova u Bajinoj Bašti sa dugogodišnjim iskustvom.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-sm">Kontakt</h4>
          <p className="text-xs text-slate-400">
            Rajka Tadića 2, 31250 Bajina Bašta
          </p>
          <p className="text-xs text-slate-400">Tel: 031/863-650</p>
          <p className="text-xs text-slate-400">Mob: 065/72-11-111</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-sm">Radno vreme</h4>
          <p className="text-xs text-slate-400">Pon–Pet: 07:00–20:00</p>
          <p className="text-xs text-slate-400">Subota: 08:00–15:00</p>
          <p className="text-xs text-slate-400">Nedeljom ne radimo</p>
        </div>
      </div>
      <div className="border-t border-slate-800 text-center text-[11px] py-3 text-slate-500">
        © {new Date().getFullYear()} LUKOM Auto Delovi
      </div>
    </footer>
  );
}

