/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const board_width = $("#board").width();
  const board_height = $("#board").height()

  // Game Item Objects

  function gameItem(id, x, y, speedX, speedY, width, height) {
    var GameItem = {};
    gameItem.id = id
    gameItem.x = parseFloat($("#id").css("left"));
    gameItem.y = parseFloat($("#id").css("top"));
    gameItem.speedX = speedX
    gameItem.speedY = speedY
    gameItem.width = $("#id").width();
    gameItem.height = $("#id").height();
    return gameItem;
  }

  var ball = ball("#ball", 340, 370, 1, 1, 40, 40)
  var leftPaddle = leftPaddle("#leftPaddle", 260, 1, 1, 1, 20, 150)
  var rightPaddle = rightPaddle("#rightPaddle", 110, 777, 1, 1, 20, 150)

  $("#id").height();

  function moveBall() {
    ball.x += ball.speedX;
    $(ball.id).css("left", ball.x);
  }

  function moveLeftPaddle() {
    leftPaddle.x += leftPaddle.speedX;
    $(leftPaddle.id).css("left", leftPaddle.x);
  }

  function moveRightPaddle() {
    rightPaddle.x += rightPaddle.speedX;
    $(rightPaddle.id).css("left", rightPaddle.x);
  }
  // function leftPaddle(id) {
  //   var leftPaddle = {};
  //   leftPaddle.id = "#leftpaddle";
  //   var x = parseFloat($("#id").css("left"));
  //   var y = parseFloat($("#id").css("top"));
  //   var width = $("#id").width();
  //   var height = $("#id").height();
  //   leftPaddle.speedX = 1;
  //   leftPaddle.speedY = 1;
  //   return leftPaddle;
  // }

  // function rightPaddle(id) {
  //   var rightPaddle = {};
  //   rightPaddle.id = "#rightPaddle";
  //   var x = parseFloat($("#id").css("left"));
  //   var y = parseFloat($("#id").css("top"));
  //   var width = $("#id").width();
  //   var height = $("#id").height();
  //   rightPaddle.speedX = 1;
  //   rightPaddle.speedY = 1;
  //   return rightPaddle;
  // }

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('eventType', handleEvent);                           // change 'eventType' to the type of event you want to handle


  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {


  }
  startBall()
  /* 
  Called in response to events.
  */
  function handleEvent(event) {
    var KEYCODE = {
      ArrowUp: 38,
    }
    var KEYCODE = {
      ArrowDown: 40,
    }

    function handleKeyDown() {
      var keycode = event.which;
      console.log(keycode);

      if (keycode === KEYCODE.ArrowUp) {
        console.log("ArrowUp pressed");
      }
      else if (keycode === KEYCODE.ArrowDown) {
        console.log("ArrowDown pressed");
      }
    }

    var KEYCODE = {
      w: 87,
    }
    var KEYCODE = {
      s: 83,
    }

    function handleKeyDown() {
      var keycode = event.which;
      console.log(keycode);

      if (keycode === KEYCODE.w) {
        console.log("w pressed");
      }
      else if (keycode === KEYCODE.s) {
        console.log("s pressed");
      }
    }
  }




  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function startBall() {
    ball.postionX = 340;
    ball.positionY = 370;
    ball.speedX = randomNum = (Math.random() * 3 + 2) *
      (Math.random() > 0.5 ? -1 : 1);
    ball.speedY = 8;
  }

  function moveObject(ball, rightPaddle, leftPaddle) {
    var objectPosition = {};
    objectPosition.ball = ball.speedX;
    objectPosition.ball = ball.speedY;
    objectPosition.ball = $("#ball").css("left", positionX);
    objectPosition.ball = $("#ball").css("top", positionY);
    objectPosition.rightPaddle = rightPaddle.speedX;
    objectPosition.rightPaddle = rightPaddle.speedY;
    objectPosition.rightPaddle = $("#rightPaddle").css("left", positionX);
    objectPosition.rigtPaddle = $("#rightPaddle").css("top", positionY);
    objectPosition.leftPaddle = leftPaddle.speedX;
    objectPosition.leftPaddle = leftPaddle.speedY;
    objectPosition.leftPaddle = $("#leftPaddle").css("left", positionX);
    objectPosition.leftPaddle = $("#leftPaddle").css("top", positionY);
    return objectPosition;
  }

  function wallCollision(ball, rightPaddle, leftPaddle) {
    var collision = {};
    collision.ball = ball.x
  }

  if (doCollide(ball, leftPaddle)) {
    // bounce ball off paddle Left
  }

  if (doCollide(ball, rightPadle)) {
    // bounce ball off paddle Left
  }

  doCollide()

  $("#leftScore").text(updatedScore)
  $("#rightScore").text(updatedScore)

  startBall()

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}
