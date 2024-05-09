"use client";
import React from "react";

const Test = () => {
  return (
    <div>
      {"testPage"}
      <div
        onClick={() => {
          console.log("clicked");
        }}
      ></div>
    </div>
  );
};

export default Test;
