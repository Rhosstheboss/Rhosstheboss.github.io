/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  // Game Item Objects

  function ball(id) {
    var ball = {};
    ball.id = "#ball";
    var x = parseFloat($("#id").css("left"));
    var y = parseFloat($("#id").css("top"));
    var width = $("#id").width();
    var height = $("#id").height();
    ball.speedX = 1;
    ball.speedY = 1;
    return ball;
  }

  function moveBall() {
    ball.x += ball.speedX;
    $(ball.id).css("left", ball.x);
  }

  function leftPaddle(id) {
    var leftPaddle = {};
    leftPaddle.id = "#leftpaddle";
    var x = parseFloat($("#id").css("left"));
    var y = parseFloat($("#id").css("top"));
    var width = $("#id").width();
    var height = $("#id").height();
    leftPaddle.speedX = 1;
    leftPaddle.speedY = 1;
    return leftPaddle;
  }

  function moveLeftPaddle() {
    leftPaddle.x += leftPaddle.speedX;
    $(leftPaddle.id).css("left", leftPaddle.x);

  }

  function rightPaddle(id) {
    var rightPaddle = {};
    rightPaddle.id = "#rightPaddle";
    var x = parseFloat($("#id").css("left"));
    var y = parseFloat($("#id").css("top"));
    var width = $("#id").width();
    var height = $("#id").height();
    rightPaddle.speedX = 1;
    rightPaddle.speedY = 1;
    return rightPaddle;
  }

  function moveRightPaddle() {
    rightPaddle.x += rightPaddle.speedX;
    $(rightPaddle.id).css("left", rightPaddle.x);
  }

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('eventType', handleEvent);                           // change 'eventType' to the type of event you want to handle
  startBall()

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {


  }

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
    ball.postionX = 370;
    ball.positionY = 340;
    ball.speedX = randomNum = (Math.random() * 3 + 2) *
      (Math.random() > 0.5 ? -1 : 1);
    ball.speedY = randomNum = (Math.random() * 3 + 2) *
      (Math.random() > 0.5 ? -1 : 1);
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
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}
