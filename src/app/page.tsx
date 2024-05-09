"use client";

import { useEffect } from "react";
import { initializeGoogleTagManager } from "./test/googleTagManager";

// import Image from "next/image";

export default function Home() {
  useEffect(() => {
    // Initialize Google Tag Manager with your GTM ID
    initializeGoogleTagManager("GTM-WT8FS7X");

    console.log("ga initialized");
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>home</div>
    </main>
  );
}
