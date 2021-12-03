import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Topbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className="nav">
      <div className={isScrolled ? "topbarWrapper scrolled" : "topbarWrapper"}>
        <div className="topbarLogo">
          <Link to="/">
            <img src="/img/topImg2.png" width="160px" alt=""></img>
          </Link>
        </div>
        <input type="radio" name="topSlide" id="menuBtn" />
        <input type="radio" name="topSlide" id="cancelBtn" />
        <ul className="navLinks">
          <img className="topImg topImgMob" src="/img/topImg2.png" width="170px" alt=""></img>
          <label htmlFor="cancelBtn" className="btn cancelBtn">
            <i className="fas fa-times"></i>
          </label>
          <li>
            <Link className="topbarLink" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="desktopItem" to="/sobre-nosotros">
              Sobre Nosotros <i className="fas fa-chevron-down"></i>
            </Link>
            <input type="checkBox" id="showDrop" />
            <label htmlFor="showDrop" className="mobileItem">
              Sobre Nosotros <i className="fas fa-chevron-down"></i>
            </label>
            <ul className="dropMenu">
              <li className="mobileItem">
                <Link className="topbarLink" to="/sobre-nosotros">
                  Principal
                </Link>
              </li>
              <li>
                <Link className="topbarLink" to="/historia">
                  Historia
                </Link>
              </li>
              <li>
                <Link className="topbarLink" to="/mision-vision">
                  Misión y Visión
                </Link>
              </li>
              <li>
                <Link className="topbarLink" to="/valores-medulares">
                  Valores
                </Link>
              </li>
              <li>
                <Link className="topbarLink" to="/politica-integrada">
                  Política Integrada
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#!" className="desktopItem">
              Productos y Servicios <i className="fas fa-chevron-down"></i>
            </a>
            <input type="checkBox" id="showMega" />
            <label htmlFor="showMega" className="mobileItem">
              Productos y Servicios <i className="fas fa-chevron-down"></i>
            </label>
            <div className="megaBoxMenu">
              <div className="megaBoxContent">
                <div className="megaBoxRow">
                  <img className="megaBoxImg" src="/img/engineer.png" alt="" />
                </div>
                <div className="megaBoxRow">
                  <header>
                    <Link className="link" to="/productos">
                      Productos
                    </Link>
                  </header>
                  <ul className="megaBoxLinks">
                    <li>
                      <Link className="topbarLink" to="/">
                        Producto 1
                      </Link>
                    </li>
                    <li>
                      <Link className="topbarLink" to="/">
                        Producto 2
                      </Link>
                    </li>
                    <li>
                      <Link className="topbarLink" to="/">
                        Producto 3
                      </Link>
                    </li>
                    <li>
                      <Link className="topbarLink" to="/">
                        Producto 4
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="megaBoxRow">
                  <header>
                    <Link className="link" to="/servicios">
                      Servicios
                    </Link>
                  </header>
                  <ul className="megaBoxLinks">
                    <li>
                      <Link className="topbarLink" to="/ingenieria-petrolera">
                       Ingeniería Petrolera
                      </Link>
                    </li>
                    <li>
                      <Link className="topbarLink" to="/ejecucion-tratamientos">
                        Ejecución de tratamientos
                      </Link>
                    </li>
                    <li>
                      <Link className="topbarLink" to="/coiled-tubing">
                        Coiled Tubing
                      </Link>
                    </li>
                    <li>
                      <Link className="topbarLink" to="/equipos-bombeo">
                        Equipos para bombeo
                      </Link>
                    </li>
                    
                  </ul>
                </div>
                <div className="megaBoxRow">
                  <header>
                    <Link className="link" to="/herramientas">
                      Herramientas
                    </Link>
                  </header>
                  <ul className="megaBoxLinks">
                    <li>
                      <Link className="topbarLink" to="/herramientas-completacion">
                        Completación
                      </Link>
                    </li>
                    <li>
                      <Link className="topbarLink" to="/herramientas-pesca">
                        Pesca
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link className="topbarLink" to="/contacto">
              Contacto
            </Link>
          </li>
          <li>
            <a href="https://incopet-blog.vercel.app/" className="topbarLink" to="/blog">
              Blog
            </a>
          </li>
        </ul>
        <label htmlFor="menuBtn" className={isScrolled ? "btn menuBtn scrolled" : "btn menuBtn"}>
          <HiOutlineMenuAlt3 />
        </label>
      </div>
    </div>
  );
}
