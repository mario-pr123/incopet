import React, { useEffect, useState } from "react";
import "./history.css";
import Aos from "aos";
import Subpage from "../../../../components/subpages/Subpage";
import Headers from "../../../../components/headers/Headers";
import { Helmet } from "react-helmet";

export default function History() {
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
    <div className="history">
      <Helmet>
        <title>INCOPET S.A. | Historia</title>
        <meta
          name="description"
          content="Trabajamos desde el 2013 como proveedores de productos químicos para el sector industrial, y nos renovamos a finales del 2016 con la implementación de nuestra línea de negocios de bienes, servicios y aplicaciones orientada al area petrolera y minera. Creemos que la integridad y la honestidad son esenciales en nuestro negocio y así nos desenvolvemos diariamente."
        />
      </Helmet>
      <Subpage title="HISTORIA" image="/img/historyTop.jpg" />
      <Headers
        title="NUESTRA EMPRESA"
        paragraph="INCOPET fue inicialmente concebido en 2013. Conoce nuestra historia:"
      />
      <div className="historyTimelineWrapper">
        <div data-aos="fade-up" className="centerLine"></div>
        <div data-aos="fade-up" className="historyTimelineRow row-1">
          <div className="timelineSection">
            <i className="timelineIcon fas fa-circle"></i>
            <div className="historyTimelineDetails">
              <span className="historyDate">2013</span>
            </div>
            <p>
              Nacimiento de la Empresa, trabajamos desde el 2013 como
              proveedores de productos químicos para el sector industrial.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="historyTimelineRow row-2">
          <div className="timelineSection">
            <i className="timelineIcon fas fa-circle"></i>
            <div className="historyTimelineDetails">
              <span className="historyDate">2015</span>
            </div>
            <p>
              Se unen al proyecto los Ingenieros Vladimir Quilo y Edison Japa,
              en ese entonces la empresa tenía el nombre de PROIN SERVICES.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="historyTimelineRow row-1">
          <div className="timelineSection">
            <i className="timelineIcon fas fa-circle"></i>
            <div className="historyTimelineDetails">
              <span className="historyDate">2016</span>
            </div>
            <p>
              Se une al proyecto el ingeniero Manolo Aguilera, y se realiza un
              cambio del nombre comercial de la empresa a INCOPET DEL ECUADOR.
              Se empieza a brindar servicios a las empresas del sector petrolero
              (servicio de estimulación, fluidos de control y química
              especializada para perforación).
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="historyTimelineRow row-2">
          <div className="timelineSection">
            <i className="timelineIcon fas fa-circle"></i>
            <div className="historyTimelineDetails">
              <span className="historyDate">2018</span>
            </div>
            <p>
              Se construye la base de operaciones en la ciudad Francisco de
              Orellana, zona de influencia para nuestros principales clientes,
              con el fin de brindar soluciones innovadoras y con una respuesta
              rápida.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="historyTimelineRow row-1">
          <div className="timelineSection">
            <i className="timelineIcon fas fa-circle"></i>
            <div className="historyTimelineDetails">
              <span className="historyDate">2020</span>
            </div>
            <p>
              Se une al proyecto el Ingeniero Edgar De la Cueva desarrollando en la
              empresa la línea de herramientas de completación y pesca.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
