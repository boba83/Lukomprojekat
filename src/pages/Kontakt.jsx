import React, { useState } from "react";

export default function Kontakt() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.message.trim()) {
      setStatus({
        loading: false,
        success: "",
        error: "Molimo unesite ime i poruku.",
      });
      return;
    }

    setStatus({ loading: true, success: "", error: "" });

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Greška pri slanju poruke.");
      }

      setStatus({
        loading: false,
        success: "Poruka je uspešno poslata.",
        error: "",
      });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus({
        loading: false,
        success: "",
        error: "Došlo je do greške. Pokušajte ponovo.",
      });
    }
  };

  return (
    <div className="bg-white min-h-screen lukom-contact-page">
      {/* Tamni pojas ispod globalnog headera */}
      <section className="lukom-contact-hero">
        <div className="lukom-section-inner lukom-contact-hero-inner">
          <p className="lukom-contact-eyebrow">KONTAKT</p>
          <h1 className="lukom-contact-title">Javite nam se</h1>
          <p className="lukom-doc-hero-subtitle">
            Pošaljite nam upit ili nas pozovite direktno — stručno osoblje je
            tu za Vas.
          </p>
          <div className="lukom-contact-divider" />
        </div>
      </section>

      {/* Bela podloga: levo info kartice, desno kontakt forma */}
      <section className="bg-white lukom-contact-body">
        <div className="lukom-section-inner">
          <div className="lukom-contact-intro-block">
            <h2 className="lukom-section-title">LUKOM Auto Delovi</h2>
            <p className="lukom-contact-intro-text">
              Pošaljite nam upit ili nas pozovite direktno — stručno osoblje je
              tu za Vas.
            </p>
          </div>

          <div className="lukom-contact-main">
            {/* LEVO: info kartice */}
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
                  <h4>Telefon / Mob / Fax</h4>
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

            {/* DESNO: kontakt forma */}
            <div className="lukom-contact-form-card">
              <form className="lukom-contact-form" onSubmit={handleSubmit}>
                <div className="lukom-contact-row lukom-contact-row-two">
                  <div className="lukom-contact-field">
                    <label htmlFor="name">Ime i prezime *</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Vaše ime i prezime"
                      value={form.name}
                      onChange={handleChange("name")}
                    />
                  </div>
                  <div className="lukom-contact-field">
                    <label htmlFor="email">E-mail</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="vas@email.com"
                      value={form.email}
                      onChange={handleChange("email")}
                    />
                  </div>
                </div>

                <div className="lukom-contact-row">
                  <div className="lukom-contact-field">
                    <label htmlFor="phone">Telefon</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Unesite broj telefona"
                      value={form.phone}
                      onChange={handleChange("phone")}
                    />
                  </div>
                </div>

                <div className="lukom-contact-row">
                  <div className="lukom-contact-field">
                    <label htmlFor="message">Poruka *</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Napišite koji deo Vam je potreban, za koje vozilo..."
                      value={form.message}
                      onChange={handleChange("message")}
                    />
                  </div>
                </div>

                <button type="submit" className="lukom-contact-submit">
                  {status.loading ? "Slanje..." : "Pošaljite poruku"}
                </button>

                {status.success && (
                  <p className="lukom-contact-status lukom-contact-status-success">
                    {status.success}
                  </p>
                )}
                {status.error && (
                  <p className="lukom-contact-status lukom-contact-status-error">
                    {status.error}
                  </p>
                )}
              </form>
            </div>
          </div>

          <div className="lukom-contact-map">
            <iframe
              title="Mapa lokacije LUKOM Auto Delovi"
              src="https://www.google.com/maps?q=Rajka+Tadi%C4%87a+2,+31250+Bajina+Ba%C5%A1ta&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}