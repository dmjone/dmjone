// WebGL Christmas Tree - Refined and Beautiful
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('christmas-tree'), alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Ground
const groundGeometry = new THREE.CircleGeometry(5, 64);
const groundMaterial = new THREE.MeshStandardMaterial({ color: '#8B4513' });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

// Tree Layers
function createTreeLayer(radius, height, positionY, color) {
    const geometry = new THREE.ConeGeometry(radius, height, 32);
    const material = new THREE.MeshStandardMaterial({ color });
    const layer = new THREE.Mesh(geometry, material);
    layer.position.y = positionY;
    scene.add(layer);
}

createTreeLayer(2, 4, 2, '#0A7033'); // Bottom
createTreeLayer(1.5, 3, 5, '#0B8A40'); // Middle
createTreeLayer(1, 2.5, 7, '#0CAE4C'); // Top

// Ornaments
function createOrnaments() {
    for (let i = 0; i < 40; i++) {
        const geometry = new THREE.SphereGeometry(0.1, 16, 16);
        const material = new THREE.MeshStandardMaterial({
            color: `hsl(${Math.random() * 360}, 70%, 50%)`,
            emissive: `hsl(${Math.random() * 360}, 70%, 30%)`,
        });
        const ornament = new THREE.Mesh(geometry, material);

        const angle = Math.random() * Math.PI * 2;
        const height = Math.random() * 4 + 1; // Spread across tree height
        ornament.position.set(
            Math.cos(angle) * (height * 0.6), // Spiral positioning
            height,
            Math.sin(angle) * (height * 0.6)
        );
        scene.add(ornament);
    }
}
createOrnaments();

// Star
const starGeometry = new THREE.ConeGeometry(0.5, 1.5, 5);
const starMaterial = new THREE.MeshStandardMaterial({ color: '#FFD700', emissive: '#FFD700' });
const star = new THREE.Mesh(starGeometry, starMaterial);
star.position.set(0, 9, 0);
star.rotation.set(Math.PI, 0, Math.PI / 4);
scene.add(star);

// Lighting
const ambientLight = new THREE.AmbientLight(0xaaaaaa, 1.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 2, 50);
pointLight.position.set(5, 10, 5);
scene.add(pointLight);

// Camera Position
camera.position.set(0, 5, 10);
camera.lookAt(0, 5, 0);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
