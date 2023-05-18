import Head from 'next/head'
import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/ENX.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.024} />
    </>
  );
};

export default function Model3D() {
  return (
    <div>
      <div className="sm:w-[60vh] sm:h-[60vh] md:w-[70vh] md:h-[70vh] lg:w-[70vh] lg:h-[70vh]">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [4, 4, 4], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <Suspense fallback={null}>
            <Model />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls autoRotate />
        </Canvas>
      </div>
    </div>
  )
}
