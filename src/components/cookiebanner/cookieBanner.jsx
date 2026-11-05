import React, { useState, useEffect } from "react";
import "./cookieBanner.css";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("incopet_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("incopet_cookie_consent", "granted");
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("incopet_cookie_consent", "denied");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner-overlay">
      <div className="cookie-banner-content">
        <h4>
          <span>🍪</span> Gestión de Cookies y Privacidad
        </h4>
        <p>
          Utilizamos cookies para garantizar el funcionamiento del sitio y mejorar su experiencia conforme a la LOPDP. Puede consultar nuestra{" "}
          <a
            href="/docs/politica_proteccion_datos.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Privacidad
          </a>.
        </p>
        <div className="cookie-banner-buttons">
          <button
            className="cookie-btn cookie-btn-accept"
            onClick={handleAcceptAll}
          >
            Aceptar Todas
          </button>
          <button
            className="cookie-btn cookie-btn-reject"
            onClick={handleRejectAll}
          >
            Solo Necesarias
          </button>
        </div>
      </div>
    </div>
  );
}