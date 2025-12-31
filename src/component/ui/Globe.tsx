/* eslint-disable @typescript-eslint/no-explicit-any */

import createGlobe, { COBEOptions } from "cobe";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [1, 1, 1],
  markerColor: [235 / 255, 162 / 255, 0],
  glowColor: [0.3, 0.3, 0.3],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
    { location: [29.7604, -95.3698], size: 0.08 },
    { location: [42.3314, -83.0458], size: 0.07 },
    { location: [33.749, -84.388], size: 0.06 },
    { location: [51.5074, -0.1278], size: 0.08 },
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const [, setR] = useState(0);
  const rRef = useRef(0);
  const [isReady, setIsReady] = useState(false);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      rRef.current = delta / 200;
      setR(delta / 200);
    }
  };

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const initGlobe = () => {
      try {
        const onResize = () => {
          if (canvas) {
            widthRef.current = canvas.offsetWidth || 400;
          }
        };

        window.addEventListener("resize", onResize);
        onResize();

        if (widthRef.current === 0) {
          widthRef.current = 400;
        }

        globeRef.current = createGlobe(canvas, {
          ...config,
          width: widthRef.current * 2,
          height: widthRef.current * 2,
          onRender: (state: any) => {
            if (!pointerInteracting.current) phiRef.current += 0.005;
            state.phi = phiRef.current + rRef.current;
            state.width = widthRef.current * 2;
            state.height = widthRef.current * 2;
          },
        });

        requestAnimationFrame(() => {
          if (canvas) {
            canvas.style.opacity = "1";
          }
        });

        return () => {
          if (globeRef.current) {
            globeRef.current.destroy();
          }
          window.removeEventListener("resize", onResize);
        };
      } catch (error) {
        console.warn("Globe initialization failed:", error);
        return () => {};
      }
    };

    const cleanup = initGlobe();
    return cleanup;
  }, [isReady, config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}

export default Globe;
