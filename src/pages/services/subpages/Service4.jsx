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
  const divStyle = {
    maxWidth: "1200px",
  };
  return (
    <div className="service1">
      <Helmet>
        <title>INCOPET S.A. | Operaciones de Coiled Tubing y Nitrógeno</title>
        <meta
          name="description"
          content="Nuestro tercer servicio: Operaciones de Coiled Tubing y Nitrógeno. Contamos con los siguientes servicios: Unidad de Tubería Flexible (Coiled Tubing) 1.5' x 12500 ft
          Unidad autónoma de filtración y bombeo
          Unidad Criogénica
          Servicios de Laboratorio de Estimulación y Análisis Químico"
        />
      </Helmet>
      <Subpage title="COILED TUBING Y NITRÓGENO" image="/img/all.jpg" />
      <Headers
        title="OPERACIONES DE COILED TUBING Y NITRÓGENO"
        paragraph="Contamos con los siguientes servicios:"
      />
      <div data-aos="fade-up" className="serviceWrapper" style={divStyle}>
        <div className="singleService">
          <div className="socialServiceIcon">
          <i className="fas fa-bacon"></i>
          </div>
          <span></span>
          <h3>Unidad de Tubería Flexible</h3>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
          <i className="fas fa-flask"></i>
          </div>
          <span></span>
          <h3>Servicios de Laboratorio de Estimulación</h3>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i className="fas fa-filter"></i>
          </div>
          <span></span>
          <h3>Unidad autónoma de filtración</h3>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i className="fas fa-snowflake"></i>
          </div>
          <span></span>
          <h3>Unidad Criogénica</h3>
        </div>
      </div>
    </div>
  );
}
