// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilterNoBackground(reddify);
  applyFilterNoBackground(decreaseBlue);
  applyFilter(increaseGreenByBlue);


  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var i = 0; i < image.length; i++) {
    var row = image[i];
    for (var r = 0; r < row.length; r++) {
      var rgbString = row[r];
      var rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      rgbString = rgbArrayToString(rgbNumbers);
      row[r] = rgbString;
    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var background = i
  for (var i = 0; i < image.length; i++) {
    var row = image[i];
    if (image === background) {
      console.log(true)
    } else {
      console.log(applyFilterNoBackground)
    }
    for (var r = 0; r < row.length; r++) {
      var rgbString = row[r];
      var rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      rgbString = rgbArrayToString(rgbNumbers);
      row[r] = rgbString;
    }
  }
}

// TODO 5: Create the keepInBounds function
function keepInBounds(bounds) {
  var x = 13
  var y = 18
  var result1 = Math.max(x, 0)
  var result2 = Math.max(y, 0)
  var n = 25;
  var r = 43;
  var result3 = Math.min(n, 255);
  var result4 = Math.min(r, 255);
  return bounds
}

// TODO 3: Create reddify function
function reddify(clifford) {
  clifford[RED] = 200;
}

// TODO 6: Create more filter functions
function decreaseBlue(downBlue) {
  downBlue = keepInBounds(2 - 50);
}

function increaseGreenByBlue(upGreen) {
  upGreen = keepInBounds(2 + 1);
}
// CHALLENGE code goes below here
