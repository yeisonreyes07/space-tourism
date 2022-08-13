import React, { Suspense } from "react";
import styled from "styled-components";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"

function Model() {
  const { scene } = useGLTF("Moon_1_3474.glb");
  return <primitive object={scene} />;
}

export function ShowPlanet(props){
  return (
    <Div>
      <Canvas camera={{ position: [10, 18, 23], fov: 0.5 }}>
        <pointLight position={[10, 10, 10]} intensity={1.3} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </Div>
  );
};


const Div = styled.div`
  height: 20vh;
  background-color: #fff;
`;
