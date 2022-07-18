import React from "react";
import "./styles.css";
import Image from "../Lazyload";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Section({ src }) {

  return (
        <Image src={src} alt="Monuments" styleClass="image" />
    
  );
}