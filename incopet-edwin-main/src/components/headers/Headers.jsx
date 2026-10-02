import React, { useEffect } from "react";
import Aos from "aos";
import "./headers.css"

export default function Headers(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up"className="headersAll">
      <div className="headersTitle">
        <h2>{props.title}</h2>
      </div>
      <div className="headersContent">
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
}
