import React from "react";
import "./styles.css";
import Image from "../Lazyload";


export default function Section({ src }) {

  return (
        <Image src={src} alt="Monuments" styleClass="image" />
    
  );
}