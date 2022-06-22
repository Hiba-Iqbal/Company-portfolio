import React from "react";
import "../styles/components/BrandName.scss";

function BrandName({ isFooter = false }) {
  return (
    <div className={`brand ${isFooter === true ? "footer" : ""}`}>
      <span>SofCo</span>
    </div>
  );
}

export default BrandName;
