import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 5;
// camera.position.x = 2;
// camera.position.y = -2

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("myitem"),
});
renderer.setSize(window.innerWidth, window.innerHeight);

// const geometery = new THREE.BoxGeometry(2, 0.5, 2);
const geometery = new THREE.ConeGeometry(1, 2, 5, 3, true);

const material = new THREE.MeshStandardMaterial({ color: "red" }); // ambientLight does not works with MeshBasicMaterial

const cube = new THREE.Line(geometery, material);

scene.add(cube);

const light = new THREE.AmbientLight(0xffffff, 0.2); // soft white light
scene.add(light);

let theta = 0.1;
function animate() {
  requestAnimationFrame(animate);

  cube.position.x = 3 * Math.sin((theta += 0.03));

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();
