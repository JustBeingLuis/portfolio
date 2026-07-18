import React, { useState, useEffect } from "react";
import { snorlaxAscii } from "@/config/asciiArt";

export const FastFetch = () => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const chunkSize = 15; // Número de caracteres a añadir por cada frame (para mantener buen rendimiento)

    const interval = setInterval(() => {
      if (currentIndex < snorlaxAscii.length) {
        setDisplayedText(snorlaxAscii.substring(0, currentIndex));
        currentIndex += chunkSize;
      } else {
        setDisplayedText(snorlaxAscii); // Aseguramos que termine completo
        clearInterval(interval);
      }
    }, 10); // 10ms para una sensación de velocidad alta y fluida

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center p-2 opacity-80 hover:opacity-100 transition-opacity duration-500">
      {/* ASCII Art Only */}
      <div className="text-[hsl(var(--foreground))] font-mono whitespace-pre leading-[1.0] select-none text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[11px]">
        {displayedText}
      </div>
    </div>
  );
};

