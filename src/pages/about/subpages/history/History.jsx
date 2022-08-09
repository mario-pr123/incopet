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
              Nacimiento de la empresa, como Productos Industriales y Servicios
              del Ecuador “INTSVAPESA S.A.” trabajando como proveedores de
              productos químicos e insumos para el sector industrial y
              agroindustrial. Se apertura las oficinas en la ciudad de Quito.
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
              La empresa decide incorporar en su equipo a personal con amplios
              conocimientos en el sector minero y petrolero del país, para de
              esta manera abrir la línea de provisión de productos químicos e
              insumos a estas importantes áreas. Se renta un campamento en la
              ciudad de Joya De Los Sachas, provincia de Orellana para prestar
              servicios a nuestros clientes de una manera más oportuna, rápida y
              eficiente. La empresa inicia el proceso de implantación de su
              Sistema de Gestión de Calidad.
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
              La empresa, incorpora a su equipo de trabajo a personal
              proveniente de empresas multinacionales, con amplia experiencia en
              el sector hidrocarburífero y se cambia el nombre comercial de la
              empresa a <b>INCOPET DEL ECUADOR S.A.</b> y se empieza a brindar
              servicios a las empresas del sector petrolero (servicio de
              estimulación, fluidos de control, filtración de agua, servicios de
              bombeo y provisión de química especializada para Fluidos de
              Perforación y Completación de pozos). Se inicia la implantación
              del sistema de gestión ambiental y de salud y seguridad en el
              trabajo. Se apertura las oficinas administrativas en la parroquia
              de Tumbaco – Quito, provincia de Pichincha. Se adquieren equipos
              propios para las líneas de servicio de estimulación, fluidos y
              filtración de fluidos y salmueras.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="historyTimelineRow row-2">
          <div className="timelineSection">
            <i className="timelineIcon fas fa-circle"></i>
            <div className="historyTimelineDetails">
              <span className="historyDate">2017</span>
            </div>
            <p>
              La empresa abre su línea dedicada a atender las necesidades del
              sector público ecuatoriano, sobre todo el sector de servicios
              básicos como es agua potable, tratamiento de aguas residuales y
              electricidad. Se obtiene las certificaciones del Sistema Integrado
              de Gestión ISO 9001, ISO 14001:2015, OHSAS 18001.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="historyTimelineRow row-1">
          <div className="timelineSection">
            <i className="timelineIcon fas fa-circle"></i>
            <div className="historyTimelineDetails">
              <span className="historyDate">2018</span>
            </div>
            <p>
              Se construye la base de operaciones en la ciudad Francisco de
              Orellana, zona de influencia para nuestros principales clientes
              del sector hidrocarburífero, con el fin de brindar soluciones
              innovadoras y con una respuesta rápida y oportuna. Se equipa la
              planta y laboratorio de la empresa, para estar a la par de los
              estándares exigidos por nuestros clientes y la industria en
              general. Se adquieren sets completos de equipos para laboratorios
              de campo de Fluidos de Perforación y Completación. Se incrementa
              la flota de unidades livianas de la empresa.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="historyTimelineRow row-2">
          <div className="timelineSection">
            <i className="timelineIcon fas fa-circle"></i>
            <div className="historyTimelineDetails">
              <span className="historyDate">2019</span>
            </div>
            <p>
              Se realiza el equipamiento completo del laboratorio, con la
              adquisición de equipos para ensayos de Cementación, Estimulación,
              Fluidos de Control y ensayos de control de calidad, con la
              adquisición de nuevos equipos especializados. Se adquieren equipos
              de bombeo de alta presión.
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
              La empresa decide abrir la línea de Herramientas de Completación y
              Pesca, incorporando en esta ocasión al staff de profesionales de
              la empresa personal con amplia experiencia y conocimientos en esta
              línea. Se realiza convenios con marcas reconocidas por la
              industria a nivel mundial en el tema de herramientas y se realiza
              la importación de sets completos para la provisión y venta de
              estos equipos y herramientas. Se incrementa la flota de unidades
              pesadas de la empresa. Re-certificamos con éxito nuestro Sistema
              Integrado de Gestión ISO 9001:2015, ISO 14001:2015, ISO
              45001:2018.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="historyTimelineRow row-2">
          <div className="timelineSection">
            <i className="timelineIcon fas fa-circle"></i>
            <div className="historyTimelineDetails">
              <span className="historyDate">2021</span>
            </div>
            <p>
              La empresa agrega a su lista de certificaciones de su Sistema
              Integrados de Gestión, la certificación en la norma ISO
              37001:2016, siendo la primera en su rama en obtenerla en el país
              validando todos los procesos bajo esta certificación. Por segundo
              año consecutivo se realizan auditorías contable-financieras
              externas a la empresa con un cumplimiento completo de las normas
              NIF y NIC.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="historyTimelineRow row-1">
          <div className="timelineSection">
            <i className="timelineIcon fas fa-circle"></i>
            <div className="historyTimelineDetails">
              <span className="historyDate">2022</span>
            </div>
            <p>
              Continuamos haciendo historia en la industria ecuatoriana
              alcanzando nuevos hitos empresariales que nos permiten “ir más
              allá de las expectativas de nuestros clientes”…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
