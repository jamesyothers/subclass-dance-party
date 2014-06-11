var BlinkyDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  //this.prototype = Object.create(makeDancer.prototype);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //extendObj(this, makeDancer);

  //call Dancer to call lines of code in Dancer and
  //set blinkydancer's properties to override dancer's
  //this does nothing with prototype methods
  Dancer.call(this,top,left,timeBetweenSteps);
  //add to Dancer's base $node with a class .blinky
  $(this.$node).addClass('blinky');
  //this._timeBetweenSteps = timeBetweenSteps;
  // return blinkyDancer;

};

//setup the prototype relationship betwen BlinkyDancer and Dancer
//Dancer becomes the prototype of BlinkyDancer
BlinkyDancer.prototype = Object.create(Dancer.prototype);
//the above code overwrote blinkydancer's constructor
//must reset it here
//constructor tells you who created the object
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //call step in the appropriate context (blinkydancer)
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // the methods will go back and forth from dancer to blinkydancer
  // this will cause the blinky dancer to toggle on and off indefinitely
  this.$node.toggle();

};




// var BlinkyDancer = function(top, left, timeBetweenSteps){
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function(){
//     // call the old version of step at the beginning of any call to this new version of step
//     debugger;
//     oldStep();

//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

