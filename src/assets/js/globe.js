container = document.getElementById('globeCanvas'); 
const scene = new THREE.Scene(); 

// setup the renderer
const renderer = new THREE.WebGLRenderer({ 
  alpha: true,
  antialias: true 
});
renderer.setClearColor( 0x000000, 0 );
renderer.setSize(container.offsetHeight, container.offsetHeight);
scene.background = null
document.body.appendChild(renderer.domElement);

// setup glop light effect
var light1 = new THREE.PointLight(0x5a54ff, 1);
light1.position.set(-150, 150, -50);

var light2 = new THREE.PointLight(0x4158f6, 0.75);
light2.position.set(-400, 200, 150);

var light3 = new THREE.PointLight(0x803bff, 0.7);
light3.position.set(100, 250, -100);

scene.add(light1, light2, light3); 

//setup globe
const sphereGeometry = new THREE.SphereGeometry(2, 64, 64);
const sphereMaterial = new THREE.MeshLambertMaterial({
  color: 0xeeeeee
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.castShadow = true;
sphere.receiveShadow = true;
scene.add(sphere);

//setup map overlay
const loader = new THREE.TextureLoader();
const overlayMaterial = new THREE.MeshBasicMaterial({
  map: loader.load('https://i.imgur.com/JLFp6Ws.png'),
  transparent: true
});

const overlaySphereGeometry = new THREE.SphereGeometry(2.003, 64, 64);
const overlaySphere = new THREE.Mesh(overlaySphereGeometry, overlayMaterial);
overlaySphere.castShadow = true;
overlaySphere.receiveShadow = true;
sphere.add(overlaySphere);

//Detect click-drag rotation
var isDragging = false;
var previousMousePosition = {
  x: 0,
  y: 0
};
$("#globeCanvas").on('mousedown', function(e) {
    isDragging = true;
  })
  .on('mousemove', function(e) {
    var deltaMove = {
      x: e.offsetX - previousMousePosition.x
    };

    if (isDragging) {
      sphere.rotation.y += deltaMove.x * .004;
    }

    previousMousePosition = {
      x: e.offsetX,
      y: e.offsetY
    };
  });


$(document).mouseup(function() {
  isDragging = false;
});

$("#canvas").mouseout(function() {
  isDragging = false;
});

//SETUP camera
const camera = new THREE.PerspectiveCamera(75, 900 / 900, 0.1, 1000);
camera.position.z = 4;

//ANIMATION LOOP
const animate = function() {
  requestAnimationFrame(animate);

  if (!isDragging) {
    sphere.rotation.y += 0.0005;
  }

  renderer.render(scene, camera);
  container.appendChild(renderer.domElement);
};

animate();

function onWindowResize() {
  renderer.setSize(container.offsetHeight, container.offsetHeight);
}