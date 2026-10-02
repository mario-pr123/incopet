import React, { useEffect, useState } from "react";
import "./services.css";
import { MdOutlineDesignServices } from "react-icons/md";
import { DiAtom } from "react-icons/di";
import { MdBiotech } from "react-icons/md";
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
      <Tops image="/img/prod.jpg" title="PRODUCTOS Y SERVICIOS" paragraph="" />
      <Headers
        title="NUESTROS PRODUCTOS Y SERVICIOS"
        paragraph="En INCOPET adaptamos distintas soluciones dirigidas a las necesidades de nuestros clientes. Nuestros servicios son:"
      />
      <div data-aos="fade-up" className="servicesFeatures">
        <div className="servicesContainer">
          <div className="servicesBox">
            <Link className="link" to="/desarrollo-productos-quimicos">
              <h4>VER MÁS</h4>
            </Link>
            <img src="/img/limpieza.jpg" alt="" className="servicesImg" />
            <h2>
              <DiAtom />
            </h2>
            <h3>Desarrollo y Provisión de Productos Químicos</h3>
          </div>

          <div className="servicesBox">
            <Link className="link" to="/provision-equipos-cementacion">
              <h4>VER MÁS</h4>
            </Link>
            <img src="/img/ingp.jpg" alt="" className="servicesImg" />
            <h2>
              <MdBiotech />
            </h2>
            <h3>Provisión de equipos y accesorios para cementación</h3>
          </div>

          <div className="servicesBox">
            <Link className="link" to="/diseno-ejecucion-tratamientos">
              <h4>VER MÁS</h4>
            </Link>
            <img src="/img/chem.jpg" alt="" className="servicesImg" />
            <h2>
              <MdOutlineDesignServices />
            </h2>
            <h3>Diseño y Ejecución de Tratamientos</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
