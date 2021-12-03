import React, { useEffect, useState } from "react";
import Subpage from "../../../components/subpages/Subpage";
import Headers from "../../../components/headers/Headers";
import "../tools.css";
import { FaTools } from "react-icons/fa";
import { Helmet } from "react-helmet";

export default function Tools2() {
  const [initial, setInitial] = useState(0);
  useEffect(() => {
    if (initial === 0) {
      setInitial(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [initial]);
  return (
    <div className="toolsPesca">
      <Helmet>
        <title>INCOPET S.A. | Herramientas de Pesca</title>
        <meta
          name="description"
          content="Contamos con una gran variedad de Herramientas de Pesca: Herramientas para para limpieza y acondicionamiento de
          casing. (WCU y top dress mill)
          Sistema de limpieza de casing para tuberías de 7” y 9 5/8”.
          Equipos para acondicionamiento y remediación del tope
          de liner.
          Equipos de pesca para hoyo abierto y hoyo entubado.
          Sistemas de enganche externo e interno.
          Martillos de pesca.
          Equipos para molienda."
        />
      </Helmet>
      <Subpage title="PESCA" image="/img/all.jpg" />
      <Headers
        title="HERRAMIENTAS DE PESCA"
        paragraph="Contamos con las siguientes herramientas:"
      />
      <div data-aos="fade-up" className="toolsContainer">
        <div className="toolsBox">
          <div className="toolsIcon">
            <FaTools />
          </div>
          <div className="toolsContent">
            <h3>Herramientas para limpieza y acondicionamiento de casing.</h3>
          </div>
        </div>
        <div className="toolsBox">
          <div className="toolsIcon">
            <FaTools />
          </div>
          <div className="toolsContent">
            <h3>Sistema de limpieza de casing para tuberías de 7” y 9.5/8”</h3>
          </div>
        </div>
        <div className="toolsBox">
          <div className="toolsIcon">
            <FaTools />
          </div>
          <div className="toolsContent">
            <h3>
              Equipos para acondicionamiento y remediación del tope de liner
            </h3>
          </div>
        </div>
        <div className="toolsBox">
          <div className="toolsIcon">
            <FaTools />
          </div>
          <div className="toolsContent">
            <h3>Equipos de pesca para hoyo abierto y hoyo entubado</h3>
          </div>
        </div>
        <div className="toolsBox">
          <div className="toolsIcon">
            <FaTools />
          </div>
          <div className="toolsContent">
            <h3>Sistemas de enganche externo e interno</h3>
          </div>
        </div>
        <div className="toolsBox">
          <div className="toolsIcon">
            <FaTools />
          </div>
          <div className="toolsContent">
            <h3>Martillos de pesca</h3>
          </div>
        </div>
        <div className="toolsBox">
          <div className="toolsIcon">
            <FaTools />
          </div>
          <div className="toolsContent">
            <h3>Equipos para molienda</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
