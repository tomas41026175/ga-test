"use client";
import React, { useEffect } from "react";
import { initializeGoogleTagManager } from "./googleTagManager";

const Test = () => {
  useEffect(() => {
    // Initialize Google Tag Manager with your GTM ID
    initializeGoogleTagManager("GTM-WT8FS7X");
  }, []);

  return (
    <div>
      <div
        onClick={() => {
          console.log("clicked");
        }}
      ></div>
    </div>
  );
};

export default Test;
