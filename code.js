var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3dfc638c-3d73-4553-93d1-be03312606f2","3374f69e-fa26-4fb6-b60b-e7e2b5352abc","aa1983ca-eb5a-429a-b550-d7962aa801f0","f820e63f-c4cb-4d5b-afb3-3e0544277415","8861d44e-8a64-4657-93cb-037b37e91b9f","9db4bf67-a149-4021-8df0-10f93ab178e4"],"propsByKey":{"3dfc638c-3d73-4553-93d1-be03312606f2":{"name":"ball","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"},"3374f69e-fa26-4fb6-b60b-e7e2b5352abc":{"name":"player 1","sourceUrl":"assets/api/v1/animation-library/gamelab/bO3KvTIGBpz2yQ4A_psLtdJiX5YeAwGs/category_people/blue_shirt_hand_up2.png","frameSize":{"x":175,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"bO3KvTIGBpz2yQ4A_psLtdJiX5YeAwGs","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":175,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bO3KvTIGBpz2yQ4A_psLtdJiX5YeAwGs/category_people/blue_shirt_hand_up2.png"},"aa1983ca-eb5a-429a-b550-d7962aa801f0":{"name":"player 2","sourceUrl":null,"frameSize":{"x":174,"y":396},"frameCount":1,"looping":true,"frameDelay":12,"version":"qni8FieJbLgFUdQwJF4CNvkB5TFRPinf","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":174,"y":396},"rootRelativePath":"assets/aa1983ca-eb5a-429a-b550-d7962aa801f0.png"},"f820e63f-c4cb-4d5b-afb3-3e0544277415":{"name":"player 3","sourceUrl":"assets/api/v1/animation-library/gamelab/qNja5pvJE8ru0NOtEP98MoyoHSIMLVph/category_people/red_shirt_hand_up.png","frameSize":{"x":190,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qNja5pvJE8ru0NOtEP98MoyoHSIMLVph","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":190,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qNja5pvJE8ru0NOtEP98MoyoHSIMLVph/category_people/red_shirt_hand_up.png"},"8861d44e-8a64-4657-93cb-037b37e91b9f":{"name":"player 4","sourceUrl":null,"frameSize":{"x":125,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"cSofUxm17vYyVVB5zFq_1A2es2I5BSns","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":125,"y":398},"rootRelativePath":"assets/8861d44e-8a64-4657-93cb-037b37e91b9f.png"},"9db4bf67-a149-4021-8df0-10f93ab178e4":{"name":"b","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"dtiBgrK8KScuTqvWjHhx1uEmutNmq8f3","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/9db4bf67-a149-4021-8df0-10f93ab178e4.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var player1, player2, player3,player4;
var boundary1, boundary2;
var ball;
var b =createSprite(200,200)
b.setAnimation("b")
var goal = createSprite(400,200,50,90)
goal.shapeColor="red"
  boundary1 = createSprite(190,100,420,3);
  boundary2 = createSprite(190,300,420,3);
  
  ball = createSprite(20,190,13,13);
  ball.shapeColor = "green";
  
  player1 = createSprite(100,130,10,10);
  player1.shapeColor = "red";
  player2 = createSprite(215,130,10,10);
  player2.shapeColor = "red";
  player3 = createSprite(165,250,10,10);
  player3.shapeColor = "red";
  player4 = createSprite(270,250,10,10);
  player4.shapeColor = "red";
  
 ball.setAnimation("ball")
 ball.scale=.05
 player1.setAnimation("player 1")
 player1.scale=.1
 player2.setAnimation("player 2")
 player2.scale=.1
 player3.setAnimation("player 3")
 player3.scale=.1
 player4.setAnimation("player 4")
 player4.scale=.1
 
player1.velocityY=4
player2.velocityY=4
player3.velocityY=-4
player4.velocityY=-4

function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
player1.bounceOff(boundary1)
player1.bounceOff(boundary2)
player2.bounceOff(boundary1)
player2.bounceOff(boundary2)
player3.bounceOff(boundary1)
player3.bounceOff(boundary2)
player4.bounceOff(boundary1)
player4.bounceOff(boundary2)
ball.bounceOff(boundary1)
ball.bounceOff(boundary2)
//Add the condition to make the sam move left and right
if (keyDown("left")) {
  ball.x=ball.x-6
}
if (keyDown("right")) {
  ball.x=ball.x+6
}
if (keyDown("UP_ARROW")) {
  ball.y=ball.y-6
}
if (keyDown("DOWN_ARROW")) {
  ball.y=ball.y+6
}
//Add the condition to reduce the life of sam if it touches the car.
  if (
    ball.isTouching(goal)||
    ball.isTouching(player1)||
    ball.isTouching(player2)||
    ball.isTouching(player3)||
    ball.isTouching(player4)) 
    {
      playSound("assets/category_explosion/8bit_explosion.mp3")
    ball.x=30 
    ball.y=190
    life=life+1
    }
 
  
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
