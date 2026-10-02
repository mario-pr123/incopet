import React, { useEffect, useState } from "react";
import "../service1.css";
import Subpage from "../../../components/subpages/Subpage";
import Headers from "../../../components/headers/Headers";
import { Helmet } from "react-helmet";
import { GiOilPump } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";

export default function Service1() {
  const [initial, setInitial] = useState(0);
  useEffect(() => {
    if (initial === 0) {
      setInitial(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [initial]);
  const iconStyle = {
    fontSize: "50px",
  };
  return (
    <div className="service1">
      <Helmet>
        <title>
          INCOPET S.A. | Provisión de Equipos y Accesorios para Cementación
        </title>
        <meta
          name="description"
          content="Provisión de Equipos y Accesorios para Cementación. Accesorios para cementación en todas las medidas.
          "
        />
      </Helmet>
      <Subpage
        title="PROVISIÓN DE EQUIPOS Y ACCESORIOS PARA CEMENTACIÓN"
        image="/img/all.jpg"
      />
      <Headers
        title="SERVICIOS DE PROVISIÓN DE EQUIPOS Y ACCESORIOS PARA CEMENTACIÓN"
        paragraph="Accesorios para cementación en todas las medidas."
      />
      <div data-aos="fade-up" className="serviceWrapper">
        <div className="singleService">
          <div className="socialServiceIcon">
            <i style={iconStyle}>
              <GiOilPump />
            </i>
          </div>
          <span></span>
          <h3>Zapatas</h3>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i style={iconStyle}>
              <GiOilPump />
            </i>
          </div>
          <span></span>
          <h3>Collares Flotadores</h3>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i style={iconStyle}>
              <GiOilPump />
            </i>
          </div>
          <span></span>
          <h3>Centralizadores</h3>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i style={iconStyle}>
              <GiOilPump />
            </i>
          </div>
          <span></span>
          <h3>Collarines</h3>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i style={iconStyle}>
              <GiOilPump />
            </i>
          </div>
          <span></span>
          <h3>Tapones(Top & Bottom Plug)</h3>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i style={iconStyle}>
              <GiOilPump />
            </i>
          </div>
          <span></span>
          <h3>Sueldas Frías</h3>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i className="fas fa-headset"></i>
          </div>
          <span></span>
          <h3>Asistencia Técnica</h3>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i style={iconStyle}>
              <FaHandsHelping />
            </i>
          </div>
          <span></span>
          <h3>Asesoría en Operaciones</h3>
        </div>
      </div>
    </div>
  );
}
