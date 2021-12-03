import React from "react";
import { Helmet } from "react-helmet";
import "./pageNotFound.css";

export default function PageNotFound() {
  return (
    <div className="errorPage">
      <Helmet>
        <title>404 | Página no encontrada | INCOPET S.A.</title>
        <meta
          name="description"
          content="INCOPET S.A cuenta con herramientas de completacion y herramientas de pesca. Alta confiabilidad en equipos y herramientas."
        />
      </Helmet>
      <div data-aos="zoom-in" className="errorPageWrap">
        <h1 data-aos="fade-up">404</h1>
        <span data-aos="fade-up">
          Oops! <br />
          Página no encontrada
        </span>
      </div>
    </div>
  );
}
