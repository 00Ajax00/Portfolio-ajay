import { useEffect, useRef, Suspense } from 'react';

const CubeAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    import('three').then(({ Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh }) => {
      const size = clamp(150, window.innerWidth * 0.5, 250); // Responsive size
      const scene = new Scene();
      const camera = new PerspectiveCamera(75, 1, 0.1, 1000);
      const renderer = new WebGLRenderer({ alpha: true });
      renderer.setSize(size, size);
      containerRef.current.appendChild(renderer.domElement);

      const geometry = new BoxGeometry();
      const material = new MeshBasicMaterial({ color: 0x60a5fa });
      const cube = new Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();

      return () => renderer.domElement.remove();
    });

    // Simple clamp function
    function clamp(min, val, max) {
      return Math.min(Math.max(val, min), max);
    }
  }, []);

  return (
    <Suspense fallback={<div aria-live="polite">Loading animation...</div>}>
      <div id="cube-container" ref={containerRef} aria-label="3D cube animation"></div>
    </Suspense>
  );
};

export default CubeAnimation;