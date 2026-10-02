import React, { useEffect, useState } from "react";
import "../service1.css";
import Subpage from "../../../components/subpages/Subpage";
import Headers from "../../../components/headers/Headers";
import { Helmet } from "react-helmet";
import { GiDrippingTube } from "react-icons/gi";

export default function Service1() {
  const [initial, setInitial] = useState(0);
  const iconStyle = {
    fontSize: "50px",
  };
  useEffect(() => {
    if (initial === 0) {
      setInitial(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [initial]);
  return (
    <div className="service1">
      <Helmet>
        <title>
          INCOPET S.A. | Desarrollo y Provisión de Productos Químicos
        </title>
        <meta
          name="description"
          content="Desarrollo y Provisión de Productos Químicos. Productos químicos para cualquier necesidad, requerimiento con los más altos estándares 		
          Contamos con los siguientes productos: Consultoría en Sistemas de Levantamiento Artificial (Equipos de bombeo electro-sumergibles, modelos de contratos, ampliación de vida operativa, etc.)
          Operaciones de: Cementación, Estimulación, Tubería Flexible, Completación de Pozos, Tratamiento Químico, Análisis de Yacimientos, Reservorios y Pozos"
        />
      </Helmet>
      <Subpage
        title="DESARROLLO Y PROVISIÓN DE PRODUCTOS QUÍMICOS"
        image="/img/all.jpg"
      />
      <Headers
        title="SERVICIOS DE DESARROLLO Y PROVISIÓN DE PRODUCTOS QUÍMICOS"
        paragraph="Productos químicos para cualquier necesidad, requerimiento con los más altos estándares"
      />
      <div data-aos="fade-up" className="serviceWrapper">
        <div className="singleService">
          <div className="socialServiceIcon">
            <i style={iconStyle}>
              <GiDrippingTube />
            </i>
          </div>
          <span></span>
          <h3>Químicos para Downstream</h3>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i style={iconStyle}>
              <GiDrippingTube />
            </i>
          </div>
          <span></span>
          <h3>Químicos para Midstream</h3>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i style={iconStyle}>
              <GiDrippingTube />
            </i>
          </div>
          <span></span>
          <h3>Químicos para Upstream</h3>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i style={iconStyle}>
              <GiDrippingTube />
            </i>
          </div>
          <span></span>
          <h3>Químicos para Tratamiento de Aguas</h3>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i style={iconStyle}>
              <GiDrippingTube />
            </i>
          </div>
          <span></span>
          <h3>Químicos para Sector Industrial</h3>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i style={iconStyle}>
              <GiDrippingTube />
            </i>
          </div>
          <span></span>
          <h3>Químicos para el Sector Minero</h3>
        </div>
      </div>
    </div>
  );
}
