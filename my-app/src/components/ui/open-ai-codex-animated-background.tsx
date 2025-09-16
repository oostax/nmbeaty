"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import UnicornScene from "unicornstudio-react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { ...windowSize, mounted };
};

export const Component = () => {

  const { width, height, mounted } = useWindowSize();

  if (!mounted) {
    return <div className="w-full h-screen" />;
  }

  return (
    <div className={cn("flex flex-col items-center")}>
        <UnicornScene 
        production={true} projectId="1grEuiVDSVmyvEMAYhA6" width={width} height={height} />
    </div>
  );
};








