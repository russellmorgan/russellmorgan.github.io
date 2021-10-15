---
layout: post.html
title: Magicavoxel and threeJS
intro: I made something in Magicavoxel. Now to make it look nice in webGL
thumbnail: thumbnail-construct.png
tags: 
- post
- threejs
- html5
- magicavoxel
- voxel
- webgl
---

<script src="https://cdn.jsdelivr.net/npm/three@0.133.1/build/three.min.js"></script>
<script src="https://unpkg.com/three/examples/js/loaders/GLTFLoader.js"></script>

<script>
let camera, scene, renderer, loader, canvas, model;
let geometry, material, mesh;

// Create the threeJS scene after everything has loaded
document.addEventListener('DOMContentLoaded', (event) => {
  init();
})


function init() {

  canvas = document.getElementById("webgl");
  scene = new THREE.Scene();

  loader = new THREE.GLTFLoader();

	camera = new THREE.PerspectiveCamera( 55, 2, 0.1, 100 );
  camera.position.z = 20;
  camera.position.y = 15;
  camera.lookAt(0, 0, 0);  

  const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
  directionalLight.position.set(-1, 2, 1);
  scene.add( directionalLight );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( (canvas.clientWidth)-40, 640 );
	renderer.setAnimationLoop( animation );
	canvas.appendChild( renderer.domElement );

  loader.load( '/img/posts/magicavoxel/temple.glb', function ( gltf ) {
    model = gltf.scene
    scene.add( model );
  }, undefined, function ( error ) {
    console.error( 'WTF!???'+error );
  } );

}

function animation( time ) {
  if(model) {
    model.rotation.y = time / 5000;
  }
	renderer.render( scene, camera );

}
</script>

Everything I've learned about threeJS

<div id="webgl"></div>