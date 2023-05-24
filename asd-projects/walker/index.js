/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  var key = {
    "left": 37,
    "up": 38,
    "right": 39,
    "down": 40,
  }


  // Game Item Objects
  var positionX = 0;
  var speedX = 0;
  var positionY = 0;
  var speedY = 0;

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === key.left) {
      console.log("left pressed");
      speedX = -5;
    }
    else if (event.which === key.up) {
      console.log("up pressed");
      speedY = -5;
    }
    else if (event.which === key.right) {
      console.log("right pressed");
      speedX = 5;
    }
    else if (event.which === key.down) {
      console.log("down pressed");
      speedY = 5;
    }
  }

  function handleKeyUp(event) {
    if (event.which === key.left) {
      console.log("left pressed");
      speedX = 0;
    }
    else if (event.which === key.up) {
      console.log("up pressed");
      speedY = 0;
    }
    else if (event.which === key.right) {
      console.log("right pressed");
      speedX = 0;
    }
    else if (event.which === key.down) {
      console.log("down pressed");
      speedY = 0;
    }
  }

  function GameObject(id){
    var obj = {};
    obj.id = id;
    obj.width = $(id).width();
    obj.height = $(id).height();
    obj.color = $(id).css("color");
    obj.speedX = 0;
    obj.speedY = 0;
    obj.x = 10;
    obj.y = 10;

    return obj;
  }

  
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  function repositionGameItem() {
    positionX += speedX;
    positionY += speedY;
  }

  function redrawGameItem() {
    $("#walker").css("left", positionX);
    $("#walker").css("top", positionY);
  }
}