import React, { useEffect, useRef, useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import Aos from "aos";
import Tops from "../../components/tops/Tops";
import Headers from "../../components/headers/Headers";
import { Helmet } from "react-helmet";

const Send = () => {
  return <p>Tu mensaje fue enviado exitosamente!</p>;
};

export default function Contact() {
  const [send, setSend] = useState(false);
  const [acceptedDataPolicy, setAcceptedDataPolicy] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!acceptedDataPolicy) {
      alert("Debe aceptar la política de tratamiento de datos personales para continuar.");
      return;
    }

    emailjs
      .sendForm(
        "service_rschxfj",
        "incopet_template",
        e.target,
        "user_8dMCd7TJCT9yBqa0YhPp5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setAcceptedDataPolicy(false);
    setSend(true);
  };

  setTimeout(() => {
    setSend(false);
  }, 5000);

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
    <div className="contactPage">
      <Helmet>
        <title>INCOPET S.A. | Contacto</title>
        <meta
          name="description"
          content="Atención personalizada y servicios para la industria hidrocarburífera. Encuéntranos en Quito y El Coca."
        />
      </Helmet>
      
      {/* MEJORA EN EL ENCABEZADO */}
      <Tops
        image="/img/contactTop.jpg"
        title="CONTACTO"
        paragraph="Cobertura Operativa Nacional | Presencia Estratégica en Quito y El Coca"
      />
      
      <Headers title="CONTÁCTENOS" />

      <section data-aos="zoom-in" className="contactFormWrapper">
        <div className="contactContainer">
          
          {/* INFORMACIÓN SEDE PRINCIPAL */}
          <div className="contactInfo">
            <h3>Sede Principal</h3>
            <div className="contactInfoBox">
              <div className="contactIcon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contactInfoText">
                <h4>Dirección</h4>
                <p>
                  José Vinueza lote 1 y Manuel Aguirre
                  <br /> Sector La Morita - Tumbaco
                  <br /> Quito, Pichincha EC170903, Ecuador
                  <br /> Tumbaco - Ecuador
                </p>
              </div>
            </div>
            <div className="contactInfoBox">
              <div className="contactIcon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contactInfoText">
                <h4>Teléfono</h4>
                <p>
                  (+593)-22376307 <br /> (+593)-999062701 <br />
                  (+593)-984901909 <br />
                  (+593)-999707786 <br /> (+593)-999548415
                </p>
              </div>
            </div>
            <div className="contactInfoBox">
              <div className="contactIcon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contactInfoText">
                <h4>Correo</h4>
                <p>
                  <a href="mailto:asistente@incopet.com">asistente@incopet.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* INFORMACIÓN BASE COCA */}
          <div className="contactInfo">
            <h3>Base Coca</h3>
            <div className="contactInfoBox">
              <div className="contactIcon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contactInfoText">
                <h4>Dirección</h4>
                <p>
                  Vía El Coca - Lago Agrio Km. 7 y Vía Empedrada <br />
                  Barrio San Cristobal del Río Coca <br />
                  Orellana-Ecuador
                </p>
              </div>
            </div>
            <div className="contactInfoBox">
              <div className="contactIcon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contactInfoText">
                <h4>Teléfono</h4>
                <p>(+593)-9-97491360</p>
              </div>
            </div>
            <div className="contactInfoBox">
              <div className="contactIcon">
                <i className="fa-solid fa-triangle-exclamation"></i>
              </div>
              <div className="contactInfoText">
                <h4>Correo Denuncias</h4>
                <p>
                  <a href="mailto:denuncias@incopet.com">denuncias@incopet.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* FORMULARIO DE CONTACTO ADAPTADO LOPDP */}
          <div className="contactForm">
            <form ref={form} onSubmit={sendEmail}>
              <h1
                style={{
                  fontSize: 28,
                  fontWeight: 600,
                  textAlign: "center",
                  marginBottom: 10,
                }}
              >
                ¿Te encuentras interesado en nuestros servicios?
              </h1>
              <h2 style={{ textAlign: "center", marginBottom: 25 }}>Contáctanos Ahora</h2>
              
              <div className="contactInputBox">
                <input
                  type="text"
                  required
                  name="name"
                  pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,'-]{2,48}"
                />
                <span>Nombre Completo</span>
              </div>
              
              <div className="contactInputBox">
                <input type="email" required name="user_email" />
                <span>Email</span>
              </div>
              
              <div className="contactInputBox">
                <input
                  type="text"
                  required
                  name="message"
                  pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}"
                />
                <span>Escribe tu mensaje...</span>
              </div>

              {/* CASILLA LOPDP Y CLÁUSULA LEGAL */}
              <div 
                style={{ 
                  display: "flex", 
                  alignItems: "flex-start", 
                  gap: "10px", 
                  marginTop: "15px", 
                  marginBottom: "20px",
                  fontSize: "0.82rem",
                  color: "#555",
                  textAlign: "left"
                }}
              >
                <input 
                  type="checkbox" 
                  id="lopdpCheck" 
                  required
                  checked={acceptedDataPolicy}
                  onChange={(e) => setAcceptedDataPolicy(e.target.checked)}
                  style={{ width: "18px", height: "18px", marginTop: "2px", cursor: "pointer" }}
                />
                <label htmlFor="lopdpCheck" style={{ cursor: "pointer", lineHeight: "1.4" }}>
                  He leído y acepto el tratamiento de mis datos personales conforme a la Ley Orgánica de Protección de Datos Personales (LOPDP) de Ecuador y la{" "}
                  <a 
                    href="/docs/politica_proteccion_datos.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: "#0056b3", textDecoration: "underline", fontWeight: "bold" }}
                  >
                    Política de Privacidad de INCOPET S.A.
                  </a>
                </label>
              </div>

              <div className="contactInputBox">
                <input 
                  type="submit" 
                  value="Enviar" 
                  disabled={!acceptedDataPolicy}
                  style={{
                    opacity: acceptedDataPolicy ? 1 : 0.6,
                    cursor: acceptedDataPolicy ? "pointer" : "not-allowed"
                  }}
                />
              </div>

              <div className="contactInputBox">{send ? <Send /> : null}</div>
            </form>
          </div>

        </div>
      </section>

      <Headers title="MÁS INFORMACIÓN" />

      <div data-aos="zoom-in" className="contactExtra">
        <div className="contactExtraBox">
          <div className="contactExtraIcon">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <div className="contactExtraContent">
            <h3>Nuestras Redes</h3>
            <div className="contactSocial">
              <a
                href="https://www.facebook.com/Incopet-del-Ecuador-635388663609161"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/incopet_del_ecuador/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://ec.linkedin.com/company/incopet-del-ecuador"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://wa.link/yj62m3" target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}