(function (window, createjs, opspark, _) {
  // Variable declarations for libraries and the game engine
  const draw = opspark.draw, // library for drawing using createJS
    physikz = opspark.racket.physikz, // library for defining physics properties like velocity
    engine = opspark.V6().activateResize(), // game engine for actively rendering + running the game's mechanics
    canvas = engine.getCanvas(), // object for referencing the height / width of the window
    stage = engine.getStage(); // object to hold all visual components

  // load some sounds for the demo - play sounds using: createjs.Sound.play("wall");
  createjs.Sound.on("fileload", handleLoadComplete);
  createjs.Sound.alternateExtensions = ["mp3"];
  createjs.Sound.registerSounds(
    [
      { src: "hit.ogg", id: "hit" },
      { src: "wall.ogg", id: "wall" },
    ],
    "assets/sounds/"
  );

  function handleLoadComplete(event) {
    console.log("sounds loaded");
  }

  engine
    .addTickHandlers(update) // establish the update function as the callback for every timer tick
    .activateTick();

  // Variable declarations for the paddles and the ball which are drawn using createJS (see bower_components/opspark-draw/draw.js)
  const scoreText = draw.textfield(
    "0",
    "15px Arial",
    "purple",
    "center",
    "top",
    canvas.width / 3,
    canvas.height / 6
  );
  console.log(scoreText)
  // textfield: function (text, sizeAndFont, color, align, baseline, x, y) {
    scoreText.text = "13"
  const paddlePlayer = createPaddle({ y: canvas.height - 543 });
  const paddleCPU = createPaddle({
    x: canvas.width - 30,
    y: canvas.height - 543,
  });
  const ball = draw.circle(20, "#CCC");
  // set initial properties for the paddles
  paddlePlayer.yVelocity = 0;
  paddleCPU.yVelocity = 4;

  // set initial properties for the ball
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.xVelocity = 5;
  ball.yVelocity = 5;

  // add the paddles and the ball to the view
  stage.addChild(paddlePlayer, paddleCPU, ball, scoreText);

  document.addEventListener("keyup", onKeyUp);
  document.addEventListener("keydown", onKeyDown);

  // when an Arrow key is pressed down, set the paddle in motion
  function onKeyDown(event) {
    if (event.key === "ArrowUp") {
      paddlePlayer.yVelocity = -4;
    } else if (event.key === "ArrowDown") {
      paddlePlayer.yVelocity = 4;
    }
  }

  // when either the Arrow Up or Arrow Down key are released, stop the paddle from moving
  function onKeyUp(event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      paddlePlayer.yVelocity = 0;
    }
  }

  function update(event) {
    const boundsCPU = paddleCPU.getBounds(),
      widthCPU = boundsCPU.width,
      heightCPU = boundsCPU.height,
      midCPU = heightCPU / 2,
      boundsPlayer = paddlePlayer.getBounds(),
      widthPlayer = paddlePlayer.width,
      heightPlayer = paddlePlayer.height;

    // Ball movement: the xVelocity and yVelocity is the distance the ball moves per update
    ball.x = ball.x + ball.xVelocity;
    ball.y = ball.y + ball.yVelocity;

    // Player movement //
    paddlePlayer.y += paddlePlayer.yVelocity;
    if (paddlePlayer.y < 0) {
      paddlePlayer.y = 0;
    }
    if (paddlePlayer.y > canvas.height - paddlePlayer.height) {
      paddlePlayer.y = canvas.height - heightPlayer;
    }

    // AI movement: CPU follows ball //
    if (paddleCPU.y + midCPU < ball.y - 14) {
      // if paddle is above ball move paddle down
      paddleCPU.y += paddleCPU.yVelocity;
    } else if (paddleCPU.y + midCPU > ball.y + 14) {
      // if paddle is below ball movel\ paddle up
      paddleCPU.y -= paddleCPU.yVelocity;
    }

    // TODO 1: bounce the ball off the top
    if (ball.y < 0) {
      ball.yVelocity = -5 * -1;
      createjs.Sound.play("wall");
    }

    // TODO 2: bounce the ball off the bottom
    if (ball.y > 886) {
      ball.yVelocity = 5 * -1;
      createjs.Sound.play("wall");
    }

    // TODO 3: bounce the ball off each of the paddles
    ball.top = ball.y - ball.radius;
    ball.bottom = ball.y + ball.radius;
    ball.right = ball.x + ball.radius;
    ball.left = ball.x - ball.radius;

    paddleCPU.top = paddleCPU.y;
    paddleCPU.bottom = paddleCPU.y + paddleCPU.height;
    paddleCPU.right = paddleCPU.x + paddleCPU.width;
    paddleCPU.left = paddleCPU.x;

    //checking if top and bottom/ right and left are overlapping
    var topOverlap = ball.top < paddleCPU.bottom;
    var bottomOverlap = ball.bottom > paddleCPU.top;
    var rightOverlap = ball.right > paddleCPU.left;
    var leftOverlap = ball.left < paddleCPU.right;

    if (topOverlap && bottomOverlap && rightOverlap && leftOverlap) {
      ball.xVelocity *= -1.05;
      ball.xVelocity = ball.xVelocity;
      createjs.Sound.play("hit");
    }

    paddlePlayer.top = paddlePlayer.y;
    paddlePlayer.bottom = paddlePlayer.y + paddlePlayer.height;
    paddlePlayer.right = paddlePlayer.x + paddlePlayer.width;
    paddlePlayer.left = paddlePlayer.x;

    var topOverlap = ball.top < paddlePlayer.bottom;
    var bottomOverlap = ball.bottom > paddlePlayer.top;
    var rightOverlap = ball.right > paddlePlayer.left;
    var leftOverlap = ball.left < paddlePlayer.right;

    if (topOverlap && bottomOverlap && rightOverlap && leftOverlap) {
      ball.xVelocity *= -1;
      ball.xVelocity = ball.xVelocity + 1;
      createjs.Sound.play("hit");
    }
    console.log(canvas.width);

    if (ball.x < 0) {
      ball.x = canvas.width / 2;
      ball.y = canvas.height / 2;
      ball.xVelocity = 5;
    }

    if (ball.x > canvas.width) {
      ball.x = canvas.width / 2;
      ball.y = canvas.height / 2;
      ball.xVelocity = -5;
    }
  }

  // helper function that wraps the draw.rect function for easy paddle making
  function createPaddle({
    width = 20,
    height = 100,
    x = 0,
    y = 0,
    color = "#CCC",
  } = {}) {
    const paddle = draw.rect(width, height, color);
    paddle.x = x;
    paddle.y = y;
    return paddle;
  }
})(window, window.createjs, window.opspark, window._);
