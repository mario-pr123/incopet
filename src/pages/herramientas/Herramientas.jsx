import React from "react";
import "./herramientas.css";
import { useState, useEffect } from "react";
import Tops from "../../components/tops/Tops";
import Headers from "../../components/headers/Headers";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Herramientas() {
  const [initial, setInitial] = useState(0);
  useEffect(() => {
    if (initial === 0) {
      setInitial(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [initial]);
  return (
    <div className="herramientasPage">
      <Helmet>
        <title>INCOPET S.A. | Herramientas</title>
        <meta
          name="description"
          content="INCOPET S.A cuenta con herramientas de completacion y herramientas de pesca. Alta confiabilidad en equipos y herramientas. Diseño y provisión de equipos para completación de pozos en hoyo abierto y hoyo entubado con los más altos estándares de la industria. Asesoría y disponibilidad de herramientas para operaciones de pesca."
        />
      </Helmet>
      <Tops image="/img/her.jpg" title="HERRAMIENTAS" paragraph="" />
      <Headers
        title="NUESTRAS HERRAMIENTAS"
        paragraph="Diseño y provisión de equipos para completación de pozos en hoyo abierto y hoyo entubado con los más altos estándares de la industria. Asesoría y disponibilidad de herramientas para operaciones de pesca."
      />
      <div data-aos="fade-up" className="herFeatures">
        <div className="herFeaturesRow">
          <div className="herFeaturesCol">
            <span></span>
            <img src="/img/tool1.jpg" alt="" />
          </div>
          <div className="herFeaturesCol">
            <h3>HERRAMIENTAS DE COMPLETACIÓN</h3>
            <p>Conoce nuestras herramientas de completación</p>
            <Link className="herFeaturesLink" to="/herramientas-completacion">
              LEER MÁS
            </Link>
          </div>
          <div className="herFeaturesCol">
            <h3>HERRAMIENTAS DE PESCA</h3>
            <p>Conoce nuestras herramientas de pesca</p>
            <Link className="herFeaturesLink" to="/herramientas-pesca">
              LEER MÁS
            </Link>
          </div>
          <div className="herFeaturesCol">
            <span className="herArrowRight"></span>
            <img src="/img/tool2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
