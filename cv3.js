const scene = new THREE.Scene();
const container = document.getElementById('threed');
const renderer = new THREE.WebGLRenderer({ antialias: true });
const width = container.clientWidth;
const height = container.clientHeight;
renderer.setSize(width, height);
container.appendChild(renderer.domElement);
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
// create a sphere geometry for the earth
const earthGeometry = new THREE.SphereGeometry(5, 802, 802);

// load a texture for the earth
const earthTextureLoader = new THREE.TextureLoader();
const earthTexture = earthTextureLoader.load('https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg');
earthTexture.magFilter = THREE.NearestFilter;
earthTexture.minFilter = THREE.NearestFilter;
// create a material using the texture
const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });

// create a mesh using the geometry and material, and add it to the scene
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.set(0, 0, 0);
scene.add(earth);

// create a sphere geometry for the moon
const moonGeometry = new THREE.SphereGeometry(0.9, 802, 802);

// load a texture for the moon
const moonTextureLoader = new THREE.TextureLoader();
const moonTexture = moonTextureLoader.load('moon.jpg');
moonTexture.magFilter = THREE.NearestFilter;
moonTexture.minFilter = THREE.NearestFilter;
// create a material using the texture
const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });

// create a mesh using the geometry and material, and add it to the scene
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
// position the moon relative to the earth
moon.position.set(7, 0, 0);
earth.add(moon);

// create a light source for the moon

// position the camera so we can see the earth
camera.position.z = 12;
camera.lookAt(earth.position);

// add a point light to the scene


// render the scene
function render() {
    renderer.render(scene, camera);
}

// animate the scene
function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.005;
    earth.rotation.x += 0.0001;
    moon.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.002);
    moon.rotation.y += 0.001;
    
    render();
}

// start the animation loop
animate();
