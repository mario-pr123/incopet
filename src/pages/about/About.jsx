import React, { useEffect, useState } from "react";
import "./about.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import Headers from "../../components/headers/Headers";
import Tops from "../../components/tops/Tops";
import { Helmet } from "react-helmet";

export default function About() {
  const [initial, setInitial] = useState(0);
  useEffect(() => {
    if (initial === 0) {
      setInitial(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [initial]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="aboutPage">
      <Helmet>
        <title>INCOPET S.A. | Sobre Nosotros</title>
        <meta
          name="description"
          content="INCOPET S.A. Somos una empresa nacional especializada en el desarrollo, manufactura y comercialización de productos y tratamientos químicos para el sector hidrocarburífero, minero e industrial."
        />
      </Helmet>
      <Tops
        image="/img/about.jpg"
        title="SOBRE NOSOTROS"
        paragraph="Confiabilidad, Excelencia y Eficiencia"
      />
      <Headers
        title="NUESTRA EMPRESA"
        paragraph="
            Somos una empresa nacional especializada en el desarrollo,
            manufactura y comercialización de productos y tratamientos químicos
            para el sector hidrocarburífero, minero e industrial."
      />
      <div data-aos="fade-up" className="aboutFeatures">
        <div className="aboutFeaturesRow">
          <div className="aboutFeaturesCol">
            <span></span>
            <img src="/img/historia.jpg" alt="" />
          </div>
          <div className="aboutFeaturesCol">
            <h3>HISTORIA</h3>
            <p>Conoce nuestra Historia</p>
            <Link className="aboutFeaturesLink" to="/historia">
              LEER MÁS
            </Link>
          </div>
          <div className="aboutFeaturesCol">
            <span></span>
            <img src="/img/mv.jpg" alt="" />
          </div>
          <div className="aboutFeaturesCol">
            <h3>MISIÓN Y VISIÓN</h3>
            <p>Conoce nuestra Misión y Visión</p>
            <Link className="aboutFeaturesLink" to="/mision-vision">
              LEER MÁS
            </Link>
          </div>
          <div className="aboutFeaturesCol">
            <h3>VALORES MEDULARES</h3>
            <p>Conoce nuestros Valores</p>
            <Link className="aboutFeaturesLink" to="/valores-medulares">
              LEER MÁS
            </Link>
          </div>
          <div className="aboutFeaturesCol">
            <span className="aboutArrowRight"></span>
            <img src="/img/valores.jpg" alt="" />
          </div>
          <div className="aboutFeaturesCol">
            <h3>POLÍTICA INTEGRADA</h3>
            <p>Conoce nuestra Política Integrada</p>
            <Link className="aboutFeaturesLink" to="/politica-integrada">
              LEER MÁS
            </Link>
          </div>
          <div className="aboutFeaturesCol">
            <span className="aboutArrowRight"></span>
            <img src="/img/politica.jpg" alt="" />
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="aboutCertBox">
        <h2>CERTIFICACIONES</h2>
        <div className="aboutCert">
          <img className="iso" src="/img/iso/iso9.png" alt="" />
          <img className="iso" src="/img/iso/iso14.png" alt="" />
          <img className="iso" src="/img/iso/iso37.png" alt="" />
          <img className="iso" src="/img/iso/iso45.png" alt="" />
        </div>
      </div>
    </div>
  );
}
