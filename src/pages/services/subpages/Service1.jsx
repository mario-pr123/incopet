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
        <title>INCOPET S.A. | Ingeniería y Consultoría Petrolera</title>
        <meta
          name="description"
          content="Nuestro primer servicio: Ingeniería y Consultoría Petrolera. Contamos con los siguientes servicios: Consultoría en Sistemas de Levantamiento Artificial (Equipos de bombeo electro-sumergibles, modelos de contratos, ampliación de vida operativa, etc.)
          Operaciones de: Cementación, Estimulación, Tubería Flexible, Completación de Pozos, Tratamiento Químico, Análisis de Yacimientos, Reservorios y Pozos"
        />
      </Helmet>
      <Subpage title="INGENIERÍA Y CONSULTORÍA PETROLERA" image="/img/all.jpg" />
      <Headers
        title="SERVICIOS DE INGENIERÍA Y CONSULTORÍA PETROLERA"
        paragraph="Contamos con los siguientes servicios:"
      />
      <div data-aos="fade-up" className="serviceWrapper">
        <div className="singleService">
          <div className="socialServiceIcon">
            <i className="fas fa-headset"></i>
          </div>
          <span></span>
          <h3>Consultoría en:</h3>
          <p>
            Sistemas de Levantamiento Artificial (Equipos de bombeo
            electro-sumergibles, modelos de contratos, ampliación de vida
            operativa, etc.)
          </p>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i className="fas fa-cogs"></i>
          </div>
          <span></span>
          <h3>Operaciones de:</h3>
          <p>
            Cementación, Estimulación, Tubería Flexible, Completación de Pozos,
            Tratamiento Químico, Análisis de Yacimientos, Reservorios y Pozos
          </p>
        </div>
      </div>
    </div>
  );
}
