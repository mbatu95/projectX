// threejs-setup.ts
import * as THREE from 'three';

// Function to initialize Three.js scene
const initThreeJS = (patternData: any) => {
    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') as HTMLCanvasElement });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create a geometry based on the patternData
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array(patternData.map((point: { x: number; y: number; }) => [point.x, point.y, 0]).flat());
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

    // Create a material
    const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });

    // Create a line based on geometry and material
    const line = new THREE.Line(geometry, material);
    scene.add(line);

    // Render loop
    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    animate();
};

// Export the initThreeJS function
export { initThreeJS };
