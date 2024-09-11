import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';

import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');

  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Use Intersection Observer to detect when the EarthCanvas component is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it enters the view
    threshold: 0.3, // Adjust the threshold as needed (0.3 means 30% visibility)
  });

  // Update visibility state when the EarthCanvas comes into view
  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <div ref={ref} style={{ width: '100%', height: '100%' }}>
      {isVisible && (
        <Canvas
          frameloop='demand'
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default EarthCanvas;
