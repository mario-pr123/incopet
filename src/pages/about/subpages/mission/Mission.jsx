import React, { useEffect, useState } from "react";
import "./mission.css";
import Aos from "aos";
import Subpage from "../../../../components/subpages/Subpage";
import Headers from "../../../../components/headers/Headers";
import { Helmet } from "react-helmet";

export default function Mission() {
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
    <div className="mision-vision">
      <Helmet>
        <title>INCOPET S.A. | Misión, Visión y Meta</title>
        <meta
          name="description"
          content="En INCOPET aportamos soluciones innovadoras y efectivas que benefician a nuestros clientes. De este modo enfocamos nuestra misión y visión en atender y solventar de forma efectiva las necesidades de nuestros clientes."
        />
      </Helmet>
      <Subpage title="MISIÓN Y VISIÓN" image="/img/mvTop.jpg" />
      <Headers
        title="FUNDAMENTOS"
        paragraph="
          En Incopet aportamos soluciones
          innovadoras y efectivas que benefician a nuestros clientes."
      />
      <div data-aos="fade-up" className="mvContainer">
        <div className="mvCard">
          <div className="mvTopCard">
            <img src="/img/misionIco.png" alt="" width="100px" />
          </div>
          <div className="mvContent">
            <h2>MISIÓN</h2>
            <p>
              Nos esforzamos permanente por atender y solventar las necesidades
              de nuestros clientes entregando productos, servicios y
              aplicaciones de alta calidad, confiabilidad y valor agregado.
            </p>
          </div>
        </div>
        <div className="mvCard">
          <div className="mvTopCard">
            <img src="/img/visionIco.png" alt="" width="100px" />
          </div>
          <div className="mvContent">
            <h2>VISIÓN</h2>
            <p>
              En lo que nos desenvolvemos vamos a ser la empresa líder y
              referente en el sector hidrocarburífero ecuatoriano; para ello,
              continuamente nos comprometemos a mejorar todo lo que hacemos de
              manera más efectiva que nuestros competidores y logrando el
              reconocimiento de nuestros clientes.{" "}
            </p>
          </div>
        </div>
        <div className="mvCard">
          <div className="mvTopCard">
            <img src="/img/metaIco.png" alt="" width="100px" />
          </div>
          <div className="mvContent">
            <h2>META</h2>
            <p>
              Nuestro principal objetivo consiste en aportar soluciones
              innovadoras y efectivas que beneficien a nuestros clientes a
              través de la entrega de productos y servicios de alta calidad,
              rendimiento comprobado y precios convenientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
