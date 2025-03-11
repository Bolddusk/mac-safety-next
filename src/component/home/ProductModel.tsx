import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Stage } from '@react-three/drei';
import { Suspense } from 'react';
import { HUDOverlay } from "@/components/ui/hud-overlay";

function Model({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
}

export default function ProductModel() {
  return (
    <section className="py-20 bg-[#0D1117]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-[#64FFDA]">Interactive</span> Product Model
        </h2>

        <div className="max-w-4xl mx-auto">
          <HUDOverlay>
            <div className="aspect-video w-full">
              <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
                <Suspense fallback={null}>
                  <Stage environment="city" intensity={0.6}>
                    <Model modelPath="/models/safety-device.glb" />
                  </Stage>
                  <Environment preset="city" />
                </Suspense>
                <OrbitControls
                  autoRotate
                  autoRotateSpeed={0.5}
                  enableZoom={true}
                  enablePan={true}
                  minDistance={5}
                  maxDistance={20}
                />
              </Canvas>
            </div>
            <div className="mt-4 text-center text-gray-400">
              Interact with the model: Click and drag to rotate, scroll to zoom
            </div>
          </HUDOverlay>
        </div>
      </div>
    </section>
  );
}
