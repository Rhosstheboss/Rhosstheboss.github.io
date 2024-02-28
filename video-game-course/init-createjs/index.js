/*
 * TODO 4: Create a modularized index.js,
 * pass in window and createjs
 */
(function (window, createjs) {
  // TODO 5: Initialize CreateJS //
  const canvas = document.getElementById("canvas");
  const stage = new createjs.Stage(canvas);

  // TODO 6: Set the framerate of the Ticker
  createjs.Ticker.framerate = 60;

  /*
   * TODO 7:CREATE AND CONFIGURE ANY DISPLAY
   * OBJECTS AND ADD THEM TO THE DISPLAY LIST HERE
   */

  // INIT CREATEJS //
  const radius = 25;
  const margin = 125;

  const circleContainer = new createjs.Container();
  const rectContainer = new createjs.Container();
  // CREATE A BACKGROUND //
  const background = new createjs.Shape();
  background.graphics
    .beginFill("black")
    .drawRect(0, 0, canvas.width, canvas.height);

  // CREATE A CIRCLE //
  const circle1 = new createjs.Shape();
  const circle2 = new createjs.Shape();
  const rect1 = new createjs.Shape();
  const rect2 = new createjs.Shape();

  circle1.graphics.beginFill("darkblue").drawCircle(0, 0, radius);
  circle2.graphics.beginFill("purple").drawCircle(0, 0, radius);
  rect1.graphics.beginFill("white").drawRect(0, 0, 200, 30);
  rect2.graphics.beginFill("white").drawRect(180, 20, 20, -50);

  circle1.x = radius * 2 + margin;
  circle2.x = canvas.width - radius * 2 - margin;
  circle1.y = circle2.y = canvas.height / 2;

  rect1.x = radius * 2 + margin;
  rect1.y = canvas.width - radius * 2 - margin;
  rect2.x = radius * 2 + margin;
  rect2.y = canvas.width - radius * 2 - margin;

  // ADD DISPLAY OBJECTS TO STAGE //
  circleContainer.addChild(circle1, circle2);
  rectContainer.addChild(rect1, rect2);
  stage.addChild(background, circleContainer, rectContainer);

  // TODO 8: Listen to the 'tick' event  //
  let tickHandler = createjs.Ticker.on("tick", onTick);

  // TODO 9: Handle the 'tick' event //
  function onTick(event) {
    update(event);
  }

  //variables that track movement
  let eyeSpeed = 1;
  let bounds1 = canvas.width;
  let bounds2 = canvas.width;
  let mouthSpeed = 1;

  /*
   * TODO 10: Implement an update Function, after making
   * changes to assets, it must call stage.update();
   */
  function update(event) {
    circleContainer.x += eyeSpeed;
    if (circleContainer.x > bounds1) {
      eyeSpeed *= -1;
    }
    rectContainer.x += mouthSpeed;
    if (rectContainer.x > bounds1) {
      mouthSpeed *= -1;
    }else if (rectContainer.x > bounds2) {
      mouthSpeed *= -1;
    }
    stage.update();
  }
})(window, window.createjs);
