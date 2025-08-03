"use client";

import CardWrapper from "./card-wrapper";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const MapCard = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Pastikan ini jalan di client supaya tidak kena hydration error
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render kosong sementara biar SSR dan Client sama
    return (
      <CardWrapper>
        <div className="h-[300px] w-[300px] rounded-3xl bg-gray-200 dark:bg-gray-800" />
      </CardWrapper>
    );
  }

  const mapSrc = resolvedTheme === "light" ? "/map2.png" : "/map.png";

  return (
    <CardWrapper>
      <a
        href="https://maps.app.goo.gl/578mTkrK3oK1tadUA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="h-full w-full bg-center rounded-3xl object-cover"
          src={mapSrc}
          alt="map"
          width={300}
          height={300}
        />
      </a>
    </CardWrapper>
  );
};

export default MapCard;
