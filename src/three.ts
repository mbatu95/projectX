// threejs-setup.ts
import * as THREE from "three";

// Function to initialize Three.js scene
const initThreeJS = (patternData: any) => {
  // Create scene
  const scene = new THREE.Scene();

  // Create camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Create renderer

  const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("canvas") as HTMLCanvasElement,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Also, update the camera aspect ratio whenever the window is resized
  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  // Create a geometry based on the patternData
  const geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array(
    patternData
      .map((point: { x: number; y: number }) => [point.x, point.y, 0])
      .flat()
  );
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

  // Create a material for the line
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });

  // Create a line based on geometry and material
  const line = new THREE.Line(geometry, lineMaterial);
  scene.add(line);

  // Create a cube
  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1); // Create a cube geometry
  const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // Create a blue material
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial); // Create a mesh from geometry and material
  cube.position.x = 2; // Position the cube
  scene.add(cube); // Add the cube to the scene

  // Render loop
  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  animate();
};

// Export the initThreeJS function
export { initThreeJS };
