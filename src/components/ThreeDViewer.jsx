import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={[2, 2, 2]} position={[0, -1.5, 0]} />;
};

const ThreeDViewer = ({ modelPath }) => {
  return (
    <Canvas camera={{ position: [0, 3, 6], fov: 40 }}>
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <Model modelPath={modelPath} />
      </Suspense>
      <OrbitControls makeDefault />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default ThreeDViewer;
