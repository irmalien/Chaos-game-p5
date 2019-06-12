import AutoSave from './modules/autosave-class.js'
import ChaosGame from './modules/chaos-game-class.js'


/////////
const autoSave = new AutoSave(2);
let chaosGame;

function setup() {
  if(window.innerWidth<800){
    scene.canvasWidth = window.innerWidth;
    scene.canvasHeight = window.innerHeight;
  }
  else {
    scene.canvasWidth = 4400;
    scene.canvasHeight = 2616;
  }

  scene.canvas = createCanvas(scene.canvasWidth, scene.canvasHeight);
  scene.canvas.class("canvasClass");
  scene.canvas.id("canvasId");
  scene.wrapCanvas("canvasId");
  colorMode(HSL, 360,100,100);

  scene.fitCanvasToScreen();
  window.addEventListener('resize', scene.fitCanvasToScreen, false);

  chaosGame = new ChaosGame({
    polygonType: 5,
    ruleType: 1,
    showVertexes: false
  });
}

function draw() {
  for(let i=0; i<25; i++){
    chaosGame.move();
  }
  // noLoop()
  // autoSave.saveImage(20, scene.titleShort)
}

// Code below is requered if using P5 library with ES6 modules
window.setup = setup;
window.draw = draw;