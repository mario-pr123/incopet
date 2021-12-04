import React, { useEffect } from "react";
import "./tops.css";
import Aos from "aos";

export default function Tops(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const flechaAn = () => {
    window.scrollTo({ top: 750, behavior: "smooth" });
  };
  return (
    <div className="topAll">
      <img src={props.image} alt="" />
      <div className="textTop">
        <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
      </div>
      <div className="flecha">
        <i className="fas fa-chevron-down" onClick={flechaAn}></i>
      </div>
    </div>
  );
}
