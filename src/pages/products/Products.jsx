import React, { useEffect, useState } from "react";
import "./products.css";
import Tops from "../../components/tops/Tops";

export default function Products() {
  const [initial, setInitial] = useState(0);
  useEffect(() => {
    if (initial === 0) {
      setInitial(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },[initial]);
  return (
    <div className="productsPage">
      <Tops
        image="/img/prod.jpg"
        title="PRODUCTOS"
        paragraph=""
      />
      
    </div>
  );
}
