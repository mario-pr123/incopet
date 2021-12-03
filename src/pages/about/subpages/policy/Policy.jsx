import React, { useEffect, useState } from "react";
import "./policy.css";
import Aos from "aos";
import Subpage from "../../../../components/subpages/Subpage";
import Headers from "../../../../components/headers/Headers";
import { Helmet } from "react-helmet";

export default function Policy() {
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
    <div className="policy">
      <Helmet>
        <title>INCOPET S.A. | Política Integrada</title>
        <meta
          name="description"
          content="En INCOPET contamos con una política integrada de gestión de la calidad, salud, seguridad, medio ambiente y antisoborno"
        />
      </Helmet>
      <Subpage title="POLÍTICA INTEGRADA" image="/img/politicaTop.jpg" />
      <Headers
        title="NUESTRA POLÍTICA INTEGRADA"
        paragraph="
        Política integrada de gestión de la calidad, salud, 
        seguridad, medio ambiente y antisoborno"
      />
      <div className="policyFeatures">
        <div className="policySection">
          <div className="policyDetails">
            <p>
              INCOPET del ECUADOR S.A. – PRODUCTOS INDUSTRIALES Y SERVICIOS DEL
              ECUADOR INTSVAPESA S.A., es una empresa nacional que desarrolla y
              comercializa productos químicos y ejecuta la provisión de los
              servicios de filtración de fluídos, herramientas de completación /
              remediación / estimulación de pozos y bombeo de alta presión para
              el sector hidrocarburífero.
              <br />
              <br />
              INCOPET del ECUADOR S.A. está comprometida con la salud y
              seguridad de las personas, con el cuidado y protección del medio
              ambiente, con la calidad en sus procesos, bienes y servicios y el
              mejoramiento continuo; por ello, en el marco de la legislación
              aplicable, reglamentos y normas relevantes de la industria, se
              propone ejecutar todas las actividades y operaciones de manera
              segura, sustentable y sostenible por medio de un Sistema Integrado
              de Gestión (S.I.G.), fundamentado en los siguientes principios:
              <br />
              Proveer productos, servicios y soluciones de manera efectiva,
              oportuna y responsable, mediante un equipo de trabajo confiable,
              competente y comprometido para lograr la satisfacción plena del
              cliente, asegurando la calidad de los mismos, la optimización de
              los recursos y el desarrollo individual y colectivo.
              <br />
              Garantizar condiciones de trabajo seguras y saludables para la
              prevención de daños y deterioro de la salud relacionados con el
              trabajo, acorde al contexto y naturaleza de los riesgos y
              oportunidades para la seguridad y salud en el trabajo.
              <br />
              Identificar, analizar y determinar las acciones dirigidas para
              eliminar los peligros y reducir los riesgos para la Seguridad y
              Salud en el Trabajo, incluyendo las causas de los incidentes y/o
              accidentes laborales.
              <br />
              La consulta y participación activa de los trabajadores y todas las
              partes interesadas en la gestión de la prevención de riesgos
              laborales, siendo fundamental para el establecimiento de una
              cultura preventiva, los cuales están presentes en la toma de
              decisiones en materia de Prevención de Riesgos Laborales.
              <br />
              Reconocer y analizar los aspectos e impactos ambientales dentro de
              las instalaciones, lugares de trabajo, planes, decisiones y
              actividades a ejecutar con la premisa de evitar la contaminación
              ambiental.
              <br />
              Desarrollar una buena y armoniosa relación entre nosotros,
              nuestros clientes, proveedores, subcontratristas, autoridades y la
              comunidad.
              <br />
              Fortalecer las acciones que aseguren la transparencia y legalidad
              de todas las actividades de la empresa, a traves de la
              implementación de un sistema antisoborno que incluya la atención y
              el seguimiento efectivo y oportuno de los casos de corrupción y
              soborno que pudiesen presentarse.
              <br />
              Proporcionar los recursos necesarios para implementar, mantener,
              auditar, revisar y mejorar periódicamente el Sistema Integrado de
              Gestión (S.I.G.), los objetivos e indicadores de desempeño y esta
              Política, incluyendo que la misma esté disponible y difundida a
              todas las partes interesadas.
              <br />
              INCOPET del ECUADOR S.A. sostiene firmemente que el compromiso y
              actuación de conformidad con esta Política agrega valor a nuestros
              clientes, empleados, proveedores y accionistas, siendo una
              condición de empleo sobre cuya gestión serán evaluados y
              reconocidos todos los actores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
