---
layout: post.html
title: Magicavoxel and threeJS
intro: I made something in Magicavoxel. Now comes the part where I need to learn how to use threeJS so I can display it.
thumbnail: thumbnail-voxel.png
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
<script src="https://unpkg.com/three/examples/js/controls/OrbitControls.js"></script>
<!-- <script src="https://unpkg.com/three/examples/js/libs/dat.gui.min.js"></script> -->

<script>
let camera, scene, renderer, loader, canvas, model, controls, directionalLight;

// Create the threeJS scene after everything has loaded
document.addEventListener('DOMContentLoaded', (event) => {
  init();
})

function init() {
  canvas = document.getElementById("webgl");
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  loader = new THREE.GLTFLoader();

	camera = new THREE.PerspectiveCamera( 50, 2, 0.1, 100 );
  controls = new THREE.OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1;
  camera.position.z = 16;
  camera.position.y = 4;
  camera.position.x = 0;
  controls.update();

  const ambientLight = new THREE.AmbientLight(0x404040, 1);
  scene.add(ambientLight);
  directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
  directionalLight.position.set(-3, 6, 8);
  scene.add( directionalLight );
  dLightBack = new THREE.DirectionalLight( 0xffffff, 0.7 );
  dLightBack.position.set(3, -6, -8);
  scene.add( dLightBack );

  const directionalLightHelper = new THREE.DirectionalLightHelper( directionalLight, 1, 0xff0000 );
  //scene.add( directionalLightHelper );

	renderer = new THREE.WebGLRenderer( { antialias: true, canvas } );
	renderer.setAnimationLoop( animation );

  loader.load( '/img/posts/magicavoxel/temple.glb', function ( gltf ) {
    model = gltf.scene
    scene.add( model );
    model.rotation.y = THREE.Math.degToRad(140);
    model.position.y = -3;
  }, undefined, function ( error ) {
    console.error( 'WTF!???'+error );
  } );
}

// Deal with browse resize events
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const pixelRatio = window.devicePixelRatio;
  const width = canvas.clientWidth * pixelRatio | 0;
  const height = canvas.clientHeight * pixelRatio | 0;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

// Called every frame so I can render and do fun stuff
function animation( time ) {
  // Resize canvas when needed
  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  };

  if(model) {
    // If I ever want to do something with this model, I'll need to do it here
    //model.rotation.y += 0.001;
  }
  controls.update();
	renderer.render( scene, camera );

}
</script>

<!-- sure this is inline, its a one off situation so it's fine -->
<div style="width:100%;height:100%">
  <canvas id="webgl" style="display:block;height:100%;width:100%;min-height:640px"></canvas>
</div>
<div>

**First time using threeJS**

Awhile back I got into Voxels, first with Magicavoxel and lately on the iPad with Voxel Max. I like the whole idea of creating something with just cubes that lets you capture the essence of an object. (It's just another form of pixel art really) It also helps me exercise my 3D skills without getting bogged down with a million tools or expectations of how the final render should look. When I was finished with the model above I posted it to sketchfab and then left it alone to move on to other things. Because there is always another shiny thing to play with.

But while creating this new site I thought it would be good to show some of my models off locally instead of sending them off to a third party website like sketchfab. Sure I could embed my content using their technology (and probably will in the future) but this  seemed like a good opportunity to get my feet wet with threeJS.

I discovered threeJS is a place where my web skills and my Unreal skills meet. Everything I know about light types, materials, shaders, etc. translate really well to this library and the code is really simple, at least when it comes to doing the basics. Speaking of, this example doesn't do much other than display the model with some lights I placed manually but it's a good start. When I get a moment I'm either going to update this page to allow for more interesting interaction with the model being loaded or create a second post to experiment with things like post process effects, DoF, materials and more. 

You can compare what I've done here with the version on [Sketchfab](https://skfb.ly/onZPV). Same model, different viewers.

</div>