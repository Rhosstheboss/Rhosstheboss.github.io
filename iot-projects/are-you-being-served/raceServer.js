const http = require("http");
const async = require("async");

const port = 5858;

  let racers = ["Green Ambler", "Catalack", "Steel Runner", "G.I. Jogger"];
    // TODO 7: Get the start time for the race
  let d = new Date();
  let startTime = d.getTime();


http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
// getting the time the race is starting and creating the link server with the heading

    // TODO 12: Make the whole thing parallel
    async.parallel(
      // Makes the race run faster as everythng is running at the same time and not in an order
   
      // TODO 9: Supply an array of functions
      [
        function (callback) {
          wrapper(callback);
        },
        function (callback) {
          wrapper(callback);
        },
        function (callback) {
          wrapper(callback);
        },
        function (callback) {
          wrapper(callback);
        },
      ],
      function (error, results) {
// creating an array so that every racer in the race will have a function to callback to

        // TODO 10: add a callback function to the end of the async call to tally the results
          res.write("Results:\n");
          var victoryOrder = sortTogether(racers, results);
          
          for (var i = 0; i < victoryOrder.length; i++) {
            res.write(victoryOrder[i] + "\n")
          }
          let d = new Date();
          let endTime = d.getTime();
          var duration = endTime - startTime
          res.write("Race Duration " + duration + "\n")
          res.end()
        })
        
      }).listen(port);
      // creating the list of racers for the end of the race wtih the correct victory order, also stating the end of the race with the duration 

// TODO 8: create a common function to be called by all functions in the array passed to the async function
function wrapper(callback) {
  setTimeout(function(){
    let d = new Date();
    callback(null, d.getTime())
  }, Math.random() * 1000)
}
// function that makes all of the racers run on the same time 

// sortTogether takes in an array of racer names and an array of times that the racers finished the race.
// It returns a new array of names, with the list or racers sorted by the time that they finished.
function sortTogether(names, times) {
  var tempList = [];
  for (var i = 0; i < names.length; i++) {
    tempList.push({ name: names[i], time: times[i] });
  }

  tempList.sort(function (a, b) {
    return a.time < b.time ? -1 : a.time == b.time ? 0 : 1;
  });

  for (var i = 0; i < tempList.length; i++) {
    names[i] = tempList[i].name;
  }
  return names;
}
