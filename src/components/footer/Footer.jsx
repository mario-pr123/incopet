import { Link } from "react-router-dom";
import "./footer.css";
import Aos from "aos";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="sloganFooter">
        <img className="sloganImg" src="/img/slogan.png" alt="" width="100%" />
        <div data-aos="zoom-in" className="wordsWrapper">
          <div className="words">
            <span>INCOPET</span>
            <span>del Ecuador</span>
            <span>Más allá</span>
            <span>de sus expectativas</span>
            <span>INCOPET</span>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footerSocial">
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
          <a href="https://wa.link/158k5b" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
        <ul className="footerList">
          <li>
            <Link className="footerLink" to="/servicios">
              Servicios
            </Link>
          </li>
          <li>
            <Link className="footerLink" to="/productos">
              Productos
            </Link>
          </li>
          <li>
            <Link className="footerLink" to="/herramientas">
              Herramientas
            </Link>
          </li>
          <li>
            <Link className="footerLink" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
        <p className="footerCopyright">
          <small>© 2021 | Web Design MP | All Rights Reserved</small>
        </p>
      </div>
    </div>
  );
}
