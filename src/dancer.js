// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  this._timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.step();
  this.setPosition(top,left);
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var that = this;
  setTimeout(function() {
    that.step();
  }, this._timeBetweenSteps);
  // setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // this.setPosition(top, left);
};

Dancer.prototype.lineUp = function() {
  var bottomRow = 350;
  var lineUpPosition = 50;

  for (var i = 0, l = window.dancers.length; i < l; i += 1) {
    // console.log(window.dancers[i]);
    window.dancers[i].setPosition(bottomRow,lineUpPosition);
    lineUpPosition += 50;
    console.log(lineUpPosition);
  }
};

Dancer.prototype.interact = function () {
  for (var i = 0, l = window.dancers.length; i < l; i += 1) {

    console.log("top: " + window.dancers[i].$node.position().top);
    console.log("left: " + window.dancers[i].$node.position().left);

  }
};




// // Creates and returns a new dancer object that can step
// var Dancer = function(top, left, timeBetweenSteps){

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');


//   dancer.step = function(){
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     debugger;
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left){
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

