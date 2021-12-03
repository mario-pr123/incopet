import React, { useEffect, useState } from "react";
import "./services.css";
import {
  MdOutlineEngineering,
  MdOutlineDesignServices,
  MdOutlineWaterDrop,
} from "react-icons/md";
import { TiPipette } from "react-icons/ti";
import { Link } from "react-router-dom";
import Aos from "aos";
import Headers from "../../components/headers/Headers";
import Tops from "../../components/tops/Tops";
import { Helmet } from "react-helmet";

export default function Services() {
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
    <div className="servicesPage">
      <Helmet>
        <title>INCOPET S.A. | Servicios</title>
        <meta
          name="description"
          content="INCOPET está formado por expertos Geólogos, Geofísicos, Geomecánicos, Ingenieros en yacimientos, Ingenieros de proyectos, D&E, C&P, Reacondicionamiento, entre otros. Contamos con una gran variedad de servicios como son: Servicios de Ingeniería y Consultoría Petrolera
          Diseño y ejecución de tratamientos
          Equipos para bombeo / alta presión
          Operaciones de Coiled Tubing y Nitrógeno"
        />
      </Helmet>
      <Tops image="/img/Four.jpg" title="SERVICIOS" paragraph="" />
      <Headers
        title="NUESTROS SERVICIOS"
        paragraph="En INCOPET adaptamos distintas soluciones dirigidas a las necesidades de nuestros clientes. Nuestros servicios son:"
      />
      <div data-aos="fade-up" className="servicesFeatures">
        <div className="servicesContainer">
          <div className="servicesBox">
            <Link className="link" to="/ingenieria-petrolera">
              <h4>VER MÁS</h4>
            </Link>
            <img src="/img/ingcon.jpg" alt="" className="servicesImg" />
            <h2>
              <MdOutlineEngineering />
            </h2>
            <h3>Ingeniería y Consultoría Petrolera</h3>
          </div>
          <div className="servicesBox">
            <Link className="link" to="/ejecucion-tratamientos">
              <h4>VER MÁS</h4>
            </Link>
            <img src="/img/limpieza.jpg" alt="" className="servicesImg" />
            <h2>
              <MdOutlineDesignServices />
            </h2>
            <h3>Diseño y Ejecución de Tratamientos</h3>
          </div>

          <div className="servicesBox">
            <Link className="link" to="/coiled-tubing">
              <h4>VER MÁS</h4>
            </Link>
            <img src="/img/ct2.jpg" alt="" className="servicesImg" />
            <h2>
              <TiPipette />
            </h2>
            <h3>Operaciones de Coiled Tubing y Nitrógeno</h3>
          </div>
          <div className="servicesBox">
            <Link className="link" to="/equipos-bombeo">
              <h4>VER MÁS</h4>
            </Link>
            <img src="/img/bombeo.jpg" alt="" className="servicesImg" />
            <h2>
              <MdOutlineWaterDrop />
            </h2>
            <h3>Equipos para Bombeo</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
