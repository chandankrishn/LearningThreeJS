console.log(THREE);

// To create a visible object (which can be cube )
// We need to create a mesh
// combination of geometry ( the shape  ) and a material (how it looks)
// start with a mesh BoxGeometry and mesh basic material
const scene = new THREE.Scene();

// To create a  visible object we need to create mesh
// Mesh is combination of geomtery and material
// material will tell color of the shape
// geaometry will tell shape of object

//red cube
const geaometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });

//creating mesh
const mesh = new THREE.Mesh(geaometry, material);

//Add it to scene
scene.add(mesh);

//Adding up camera
const sizes = {
  width: 1000,
  height: 1200,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = -1;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});
console.log("selected element", document.querySelector(".webgl"));
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
