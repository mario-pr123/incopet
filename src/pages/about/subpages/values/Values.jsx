import React, { useEffect, useState } from "react";
import "./values.css";
import Aos from "aos";
import Subpage from "../../../../components/subpages/Subpage";
import { FaRegHandshake, FaPeopleCarry } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { BiLike, BiCheckShield } from "react-icons/bi";
import Headers from "../../../../components/headers/Headers";
import { Helmet } from "react-helmet";

export default function Values() {
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
    <div className="values">
      <Helmet>
        <title>INCOPET S.A. | Valores Medulares</title>
        <meta
          name="description"
          content="En INCOPET asumimos los valores institucionales para orientar el cumplimiento del propósito de la institución."
        />
      </Helmet>
      <Subpage title="VALORES MEDULARES" image="/img/valoresTop.jpg" />
      <Headers
        title="NUESTROS VALORES"
        paragraph="
          En INCOPET asumimos nuestras valores medulares para orientar el
          cumplimiento del propósito de la institución."
      />
      <div className="valuesFeatures">
        <div className="valuesSection">
          <ul>
            <li data-aos="fade-right">
              <div className="valuesIcon">
                <FaRegHandshake />
              </div>
              <div className="valuesDetails">
                <h3>INTEGRIDAD</h3>
                <p>
                  Todas nuestras actividades y operaciones son efectuadas dentro
                  del marco de transparencia, honestidad y rectitud.
                </p>
              </div>
            </li>
            <li data-aos="fade-left">
              <div className="valuesIcon">
                <GiSandsOfTime />
              </div>
              <div className="valuesDetails">
                <h3>ESMERO</h3>
                <p>
                  Realizamos nuestro trabajo bien desde el principio, somos
                  responsables, efectivos y consistentes al hacerlo todo con
                  eficiencia, eficacia y entrega total.
                </p>
              </div>
            </li>
            <li data-aos="fade-right">
              <div className="valuesIcon">
                <BiLike />
              </div>
              <div className="valuesDetails">
                <h3>PASIÓN</h3>
                <p>
                  Amamos lo que hacemos y lo disfrutamos alegremente, nuestra
                  convicción es entregar lo mejor de nosotros para cumplir
                  siempre las expectativas de nuestros clientes y partes
                  interesadas.
                </p>
              </div>
            </li>
            <li data-aos="fade-left">
              <div className="valuesIcon">
                <BiCheckShield />
              </div>
              <div className="valuesDetails">
                <h3>CONFIABILIDAD</h3>
                <p>
                  Cumplimos permanentemente con lo ofrecido al brindar los
                  mejores productos y ejecutar puntualmente y sin fallas
                  nuestros servicios, todo a un precio justo, adecuado y
                  razonable.
                </p>
              </div>
            </li>
            <li data-aos="fade-right">
              <div className="valuesIcon">
                <FaPeopleCarry />
              </div>
              <div className="valuesDetails">
                <h3>TRABAJO EN EQUIPO</h3>
                <p>
                  Armoniosamente con el compromiso y aporte de todos buscamos el
                  crecimiento personal y profesional, la excelencia en lo que
                  hacemos, la plena satisfacción de nuestros clientes y el logro
                  de las metas organizacionales.{" "}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
