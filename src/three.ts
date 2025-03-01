import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Function to initialize Three.js scene
const initThreeJS = () => {
    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10); // Set initial camera position

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') as HTMLCanvasElement });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Improve rendering quality

    // Set the clear color of the renderer to light gray (hex color)
    renderer.setClearColor(0xF02C2C, 1);  // Set background color to light gray (between gray and white)

    // Create a cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Create axes helper (size of axes: 5 units)
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // Create grid helper (size: 10, divisions: 10)
    const gridHelper = new THREE.GridHelper(10, 10);
    scene.add(gridHelper);

    // Initialize OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0); // Set target to the origin (0, 0, 0)
    controls.update(); // Update controls to reflect the new target

    // Render loop
    const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01; // Rotate cube
        cube.rotation.y += 0.01;
        controls.update(); // Update controls
        renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
};

// Export the initThreeJS function
export { initThreeJS };
