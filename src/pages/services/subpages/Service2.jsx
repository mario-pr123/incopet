import React, { useEffect, useState } from "react";
import "../service1.css";
import Subpage from "../../../components/subpages/Subpage";
import Headers from "../../../components/headers/Headers";
import { Helmet } from "react-helmet";
import { GiOilPump, GiWireCoil } from "react-icons/gi";

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
        <title>INCOPET S.A. | Diseño y Ejecución de Tratamientos</title>
        <meta
          name="description"
          content="Diseño y Ejecución de Tratamientos. Ingeniería y diseño de los mejores tratamientos para formaciones productoras e inyectoras, brindando excelentes reultados Contamos con los siguientes servicios: TRATAMIENTOS ESTIMULACIÓN 
          FLUIDOS DE CONTROL
          LIMPIEZA, BOMBEO Y PRUEBAS
          EQUIPOS PARA BOMBEO, ALTA PRESIÓN Y LIMPIEZA
          OPERACIONES DE COILED TUBING Y NITRÓGENO"
        />
      </Helmet>
      <Subpage
        title="DISEÑO Y EJECUCIÓN DE TRATAMIENTOS"
        image="/img/all.jpg"
      />
      <Headers
        title="SERVICIOS DE DISEÑO Y EJECUCIÓN DE TRATAMIENTOS"
        paragraph="Ingeniería y diseño de los mejores tratamientos para formaciones productoras e inyectoras, brindando excelentes reultados."
      />
      <div data-aos="fade-up" className="serviceWrapper">
        <div className="singleService">
          <div className="socialServiceIcon">
            <i className="fas fa-dumbbell"></i>
          </div>
          <span></span>
          <h3>Tratamientos de Estimulación:</h3>
          <p>
            Estimulaciones Ácidas Matriciales
            <br />
            Limpieza Ácidas <br />
            Limpiezas de Equipos de Bombeo Electrosumergible
            <br />
            Sistemas Base Solventes
            <br />
            Sistemas Anti Incrustantes
          </p>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i className="fas fa-tint"></i>
          </div>
          <span></span>
          <h3>Fluídos de Control:</h3>
          <p>
            Fluidos de Control
            <br />
            Fluidos Densificados
            <br />
            Pildoras gelificadas de limpieza
            <br />
            Tubing Picklings
          </p>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i className="fas fa-hand-sparkles"></i>
          </div>
          <span></span>
          <h3>Limpieza, Bombeo y Pruebas:</h3>
          <p>
            Limpieza de líneas de superficie
            <br />
            Filtración de fluidos/salmueras
            <br />
            Pruebas de presión
            <br />
            Ratas Multiples y Bombeos
          </p>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i style={iconStyle}>
              <GiOilPump />
            </i>
          </div>
          <span></span>
          <h3>Equipos para Bombeo, Alta Presión y Limpieza:</h3>
          <p>
            Unidad de bombeo de fluidos corrosivos <br />
            Unidad de bombeo alta presion <br />
            Unidad de evaluación de pozos (MTU) <br />
          </p>
        </div>
        <div className="singleService">
          <div className="socialServiceIcon">
            <i style={iconStyle}>
              <GiWireCoil />
            </i>
          </div>
          <span></span>
          <h3>Operaciones de Coiled Tubing y Nitrógeno:</h3>
          <p>
            Unidad de Tubería Flexible (Coiled Tubing) 1.5" x 12500 ft
            <br />
            Unidad autónoma de filtración y bombeo
            <br />
            Unidad Criogénica
            <br />
            Servicios de Laboratorio de Estimulación y Análisis Químico
          </p>
        </div>
      </div>
    </div>
  );
}
