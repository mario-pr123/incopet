import React, { useEffect, useState } from "react";
import Subpage from "../../../components/subpages/Subpage";
import Headers from "../../../components/headers/Headers";
import "../tools.css";
import Aos from "aos";
import { FaTools } from "react-icons/fa";
import { Helmet } from "react-helmet";

export default function Tools1() {
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
    <div className="toolsCompletacion">
      <Helmet>
        <title>INCOPET S.A. | Herramientas de Completación</title>
        <meta
          name="description"
          content="Contamos con una gran variedad de herramientas de Completación: Herramientas para completación en hoyo abierto.
          Sistemas de colgador de liner. (Top packer, tie back)
          Sistema de apertura de ventanas.
          Sistemas de control de arena. (Mallas y swell packer)
          Herramientas para completacion en hoyo entubado.
          Empacadores de producción hidráulicos y mecánicos,
          Empacadores especiales seal bore y ESP.
          Sistemas de completaciones encapsuladas.
          Sistema de control de flujo. (Camisas de circulación,
          check valve, No-Go.)
          Sistemas de remediación. (Packer de servicio,
          equipos para Squeze) "
        />
      </Helmet>
      <Subpage title="COMPLETACIÓN" image="/img/all.jpg" />
      <Headers
        title="HERRAMIENTAS DE COMPLETACIÓN"
        paragraph="Contamos con las siguientes herramientas:"
      />
      <div data-aos="fade-up" className="toolsContainer">
        <div className="toolsBox">
          <div className="toolsIcon">
            <FaTools />
          </div>
          <div className="toolsContent">
            <h3>Herramientas para completación en hoyo abierto.</h3>
          </div>
        </div>
        <div className="toolsBox">
          <div className="toolsIcon">
            <FaTools />
          </div>
          <div className="toolsContent">
            <h3>Sistemas de colgador de liner. (Top packer, tie back)</h3>
          </div>
        </div>
        <div className="toolsBox">
          <div className="toolsIcon">
            <FaTools />
          </div>
          <div className="toolsContent">
            <h3>Sistema de apertura de ventanas</h3>
          </div>
        </div>
        <div className="toolsBox">
          <div className="toolsIcon">
            <FaTools />
          </div>
          <div className="toolsContent">
            <h3>Sistemas de control de arena. (Mallas y Swell Packer)</h3>
          </div>
        </div>
        <div className="toolsBox">
          <div className="toolsIcon">
            <FaTools />
          </div>
          <div className="toolsContent">
            <h3>Herramientas para completacion en hoyo entubado</h3>
          </div>
        </div>
        <div className="toolsBox">
          <div className="toolsIcon">
            <FaTools />
          </div>
          <div className="toolsContent">
            <h3>Empacadores de producción hidráulicos y mecánicos</h3>
          </div>
        </div>
        <div className="toolsBox">
          <div className="toolsIcon">
            <FaTools />
          </div>
          <div className="toolsContent">
            <h3>Empacadores especiales seal bore y ESP</h3>
          </div>
        </div>
        <div className="toolsBox">
          <div className="toolsIcon">
            <FaTools />
          </div>
          <div className="toolsContent">
            <h3>Sistemas de completaciones encapsuladas</h3>
          </div>
        </div>
        <div className="toolsBox">
          <div className="toolsIcon">
            <FaTools />
          </div>
          <div className="toolsContent">
            <h3>
              Sistema de control de flujo. (Camisas de circulación, check valve,
              No-Go.)
            </h3>
          </div>
        </div>
        <div className="toolsBox">
          <div className="toolsIcon">
            <FaTools />
          </div>
          <div className="toolsContent">
            <h3>
              Sistemas de remediación. (Packer de servicio, equipos para Squeze)
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
