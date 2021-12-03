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
        <title>INCOPET S.A. | Equipos para Bombeo/Alta Presión</title>
        <meta
          name="description"
          content="Nuestro cuarto servicio: Equipos para bombeo / alta presión. Contamos con los siguientes servicios: Unidad de bombeo de fluidos corrosivos
          Unidad de bombeo de alta presión
          Unidad de Evaluación de Pozos (MTU)"
        />
      </Helmet>
      <Subpage title="EQUIPOS PARA BOMBEO / ALTA PRESIÓN" image="/img/all.jpg" />
      <Headers
        title="SERVICIOS DE EQUIPOS PARA BOMBEO"
        paragraph="Contamos con los siguientes servicios:"
      />
      <div data-aos="fade-up" className="serviceWrapper">
        <div className="singleService">
          <div className="socialServiceIcon">
            <i className="fas fa-biohazard"></i>
          </div>
          <span></span>
          <h3>Unidad de bombeo de fluidos corrosivos</h3>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i className="fas fa-weight"></i>
          </div>
          <span></span>
          <h3>Unidad de bombeo de alta presión</h3>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i className="fas fa-vial"></i>
          </div>
          <span></span>
          <h3>Unidad de Evaluación de Pozos</h3>
        </div>
      </div>
    </div>
  );
}
