import "./home.css";
import { useState, useEffect } from "react";
import { Button } from "../../components/topbar/Button";
import Aos from "aos";
import { AiOutlineTeam } from "react-icons/ai";
import { ImNewspaper } from "react-icons/im";
import { GiChemicalDrop } from "react-icons/gi";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Headers from "../../components/headers/Headers";
import { Helmet } from "react-helmet";

export default function Home() {
  const flechaAn = () => {
    window.scrollTo({ top: 750, behavior: "smooth" });
  };
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, pagination: true },
    { width: 768, itemsToShow: 2 },
    { width: 1120, itemsToShow: 3 },
  ];
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
  const images = [
    { image: "/img/clients/petroec.png" },
    { image: "/img/clients/repsol.png" },
    { image: "/img/clients/hallib.png" },
    { image: "/img/clients/pluspetrol.png" },
    { image: "/img/clients/dyn.png" },
    { image: "/img/clients/CNPC.png" },
    { image: "/img/clients/ON.png" },
    { image: "/img/clients/andespet.png" },
    { image: "/img/clients/enap.png" },
  ];
  return (
    <div className="homePage">
      <Helmet>
        <title>INCOPET S.A. | Servicios Petroleros, Productos Químicos</title>
        <meta
          name="description"
          content="Incopet del Ecuador - Somos tu mejor elección al momento de seleccionar una Compañía de Servicios Petroleros y Productos Químicos en el Ecuador"
        />
      </Helmet>
      <div className="slideShow">
        <div className="slideShowItem">
          <img src="/img/One.jpg" alt="" />
          <div className="slideShowItemText">
            <h1>INCOPET DEL ECUADOR</h1>
            <p>Ingeniería, productos químicos y servicios petroleros</p>
          </div>
        </div>
        <div className="slideShowItem">
          <img src="/img/Two.jpg" alt="" />
          <div className="slideShowItemText">
            <h1>INCOPET DEL ECUADOR</h1>
            <p>Ingeniería, productos químicos y servicios petroleros</p>
          </div>
        </div>
        <div className="slideShowItem">
          <img src="/img/Three.jpg" alt="" />
          <div className="slideShowItemText">
            <h1>INCOPET DEL ECUADOR</h1>
            <p>Ingeniería, productos químicos y servicios petroleros</p>
          </div>
        </div>
        <div className="flecha">
          <i className="fas fa-chevron-down" onClick={flechaAn}></i>
        </div>
      </div>
      <div className="homeAbout" data-aos="fade-up">
        <Headers
          title="INCOPET DEL ECUADOR S.A."
          paragraph="Trabajamos desde el 2013 como proveedores de productos 
          químicos para el sector industrial, y nos renovamos a finales del 
          2016 con la implementación de nuestra línea de negocios de bienes, 
          servicios y aplicaciones orientada a la industria petrolera y minera. 
          Creemos que la integridad y la honestidad son esenciales en nuestro 
          negocio y así nos desenvolvemos diariamente."
        />
        <div data-aos="zoom-out" className="homeAboutLink">
          <Link className="readMore" to="/sobre-nosotros">
            LEER MÁS
          </Link>
        </div>
      </div>
      <div className="homeFeaturesTitle" data-aos="fade-up">
        <div className="homeFeaturesContent">
          <h2>¿QUIÉNES SOMOS?</h2>
        </div>
        <div className="homeFeatures" data-aos="fade-up">
          <div className="homeCard">
            <img className="homeCardImg" src="/img/blogC.png" width="710px" alt="" />
            <div className="homeCardContent">
              <i className="homeIcon">
                <ImNewspaper />
              </i>
              <h3>INNOVACIÓN Y DEDICACIÓN</h3>
              <p>Enterate de nuestras últimas novedades</p>
              <div className="homeButtons">
                <a
                  className="homeCardButton"
                  href="http://localhost:3000/"
                  primary="true"
                >
                  Nuestro Blog
                </a>
              </div>
            </div>
          </div>
          <div className="homeCard">
            <img className="homeCardImg" src="/img/team.jpg" width="400px" alt="" />
            <div className="homeCardContent">
              <i className="homeIcon">
                <AiOutlineTeam />
              </i>
              <h3>ESMERO, PASIÓN Y TRABAJO EN EQUIPO</h3>
              <p>Alta confiabilidad en el personal y equipos</p>
              <div className="homeButtons">
                <Button
                  className="homeCardButton"
                  to="/sobre-nosotros"
                  primary="true"
                >
                  Sobre Nosotros
                </Button>
              </div>
            </div>
          </div>
          <div className="homeCard">
            <img className="homeCardImgE" src="/img/engineer.png" width="670px" alt="" />
            <div className="homeCardContent">
              <i className="homeIcon">
                <GiChemicalDrop />
              </i>
              <h3>PRODUCTOS Y SERVICIOS EFECTIVOS</h3>
              <p>Ingeniería, químicos y servicios petroleros</p>
              <div className="homeButtons">
                <Button
                  className="homeCardButton"
                  to="/productos"
                  primary="true"
                >
                  Nuestros Productos
                </Button>
                <br />
                <Button
                  className="homeCardButton"
                  to="/servicios"
                  primary="true"
                >
                  Nuestros Servicios
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="homeClients">
        <h2>NUESTROS CLIENTES</h2>
        <Carousel breakPoints={breakPoints}>
          {images.map((clientsImg) => {
            return (
              <div key={clientsImg.image} className="homeClientsCard">
                <img src={clientsImg.image} alt="" width="250px" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
