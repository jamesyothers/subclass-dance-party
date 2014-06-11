// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  //set these value to use for methods
  this._top = top;
  this._left = left;
  //to access in Dancer.prototype.step
  this._timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  //</span><span class="hidden"></span>');
  //start the step process when another class calls Dancer
  //in the context of the called class
  this.step();
  //initiate the position of the dancer
  //based on the top and left passed into that particular class
  this.setPosition(top,left);
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // must set context to a variable outside setTimeout
  // this allows the appropriate context to be passed to setTimeout
  // normally, settimeout is a free standing invocation (this = window)
  var that = this;
  setTimeout(function() {
    that.step();
  }, this._timeBetweenSteps);
  // setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //initiates dancers position
  var styleSettings = {
    top: top,
    left: left
  };
  //each type of dancer has own $node
  this.$node.css(styleSettings);

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // this.setPosition(top, left);
};

Dancer.prototype.lineUp = function() {
  //positions for dancers to lineup
  var bottomRow = 350;
  var lineUpPosition = 50;
  //iterate through dancers and reset position to particular location
  for (var i = 0, l = window.dancers.length; i < l; i += 1) {
    window.dancers[i].setPosition(bottomRow,lineUpPosition);
    //add to position to put in line left to right
    lineUpPosition += 50;
  }
};

Dancer.prototype.interact = function () {
  //iterate over dancers and determine distance between them
  //if distance is left than particular amount do something
  for (var i = 0, l = window.dancers.length; i < l; i += 1) {
    for (var j = i + 1; j < l; j++) {
      var height = (window.dancers[i]._top - window.dancers[j]._top);
      var width = (window.dancers[i]._left - window.dancers[j]._left);
      var dist = Math.sqrt(height*height + width*width);
    }
  }
};

Dancer.prototype.jump = function () {
  //if mouseover event is triggered then call jump function to move element
  this._top = this._top + 100;
  this._left = this._left + 100;

  this.setPosition.call(this, this._top, this._left);
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

