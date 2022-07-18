import React, { useState, useRef, useEffect } from "react";
import "./lazyload.css";
import { registerObserver } from "./observer";
export default function Image({ src, alt, styleClass }) {
  const [showImage, setShowImage] = useState(false);
  const placeHolderRef = useRef(null);
  // Component Did Mount.
  useEffect(() => {
    /**
     * To Register Observer on the span.
     */
    registerObserver(placeHolderRef.current, setShowImage);
  }, []);

  if (showImage) {
    return <img src={src} alt={alt} className={"image-style " + styleClass} />;
  }
  return <div ref={placeHolderRef} className={"image-style " + styleClass} />;
}