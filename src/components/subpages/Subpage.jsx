import React, { useEffect } from "react";
import "./subpage.css";
import Aos from "aos";

export default function Subpage(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="zoom-out" className="subpageTop">
      <div className="subpageTopItem">
        <img src={props.image} alt="" />
        <div className="subpageTopItemText">
          <h1>{props.title}</h1>
        </div>
      </div>
    </div>
  );
}
