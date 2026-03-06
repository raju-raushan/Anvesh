import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';

const RotatingCore = () => {
  const mesh = useRef(null);

  // Keeps the core moving every frame for a futuristic ambient effect.
  useFrame((_state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.4;
      mesh.current.rotation.y += delta * 0.65;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.4} floatIntensity={1.5}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.25, 0]} />
        <meshStandardMaterial color="#26b8ff" emissive="#00629B" emissiveIntensity={0.8} wireframe />
      </mesh>
    </Float>
  );
};

const HeroScene = () => (
  <div className="absolute inset-0 -z-10 opacity-80">
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 2, 3]} intensity={2} color="#6ddbff" />
      <Stars radius={60} depth={28} count={2500} factor={3} saturation={0} fade speed={1} />
      <RotatingCore />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.65} />
    </Canvas>
  </div>
);

export default HeroScene;
