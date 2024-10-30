import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg1'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const geometry = new THREE.IcosahedronGeometry(10, 0); 
const material = new THREE.MeshBasicMaterial({ color:0x06d6a0, wireframe: true });
const icosahedron = new THREE.Mesh(geometry, material);

scene.add(icosahedron);

function animate() {
  requestAnimationFrame(animate);
  icosahedron.rotation.x += 0.01;
  icosahedron.rotation.y += 0.05;

  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
