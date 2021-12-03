import React, { useEffect, useState } from "react";
import "../service1.css";
import Subpage from "../../../components/subpages/Subpage";
import Headers from "../../../components/headers/Headers";
import { Helmet } from "react-helmet";

export default function Service1() {
  const [initial, setInitial] = useState(0);
  useEffect(() => {
    if (initial === 0) {
      setInitial(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [initial]);
  return (
    <div className="service1">
      <Helmet>
        <title>INCOPET S.A. | Diseño y Ejecución de Tratamientos</title>
        <meta
          name="description"
          content="Nuestro segundo servicio: Diseño y Ejecución de Tratamientos. Contamos con los siguientes servicios: Tramientos de Estimulación: Ácidos Matriciales, Limpiezas ácidas, limpiezas de equipos de bombeo electrosumergible, sistemas base solventes, sistemas anti-incrustantes
          Fluídos de control, Fluídos densificados, Píldoras gelificadas de limpieza. Tubing Picklings
          Limpieza de líneas de superficie, Filtración de fluídos/salmueras, Pruebas de Presión, Ratas Múltiples y Bombeos"
        />
      </Helmet>
      <Subpage title="DISEÑO Y EJECUCIÓN DE TRATAMIENTOS" image="/img/all.jpg" />
      <Headers
        title="SERVICIOS DE DISEÑO Y EJECUCIÓN DE TRATAMIENTOS"
        paragraph="Contamos con los siguientes servicios:"
      />
      <div data-aos="fade-up" className="serviceWrapper">
        <div className="singleService">
          <div className="socialServiceIcon">
            <i className="fas fa-dumbbell"></i>
          </div>
          <span></span>
          <h3>Tratamientos de Estimulación:</h3>
          <p>
            Ácidos Matriciales, Limpiezas ácidas, Limpiezas de equipos de bombeo
            electrosumergible, Sistemas base solventes, Sistemas
            anti-incrustantes
          </p>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i className="fas fa-tint"></i>
          </div>
          <span></span>
          <h3>Fluídos:</h3>
          <p>
            Fluidos de control, Fluidos densificados, Píldoras gelificadas de
            limpieza, Tubing Picklings
          </p>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i className="fas fa-broom"></i>
          </div>
          <span></span>
          <h3>Limpieza:</h3>
          <p>
            Limpieza de líneas de superficie, Filtración de fluidos/salmueras,
            Pruebas de Presión, Ratas Múltiples y Bombeos
          </p>
        </div>
      </div>
    </div>
  );
}
