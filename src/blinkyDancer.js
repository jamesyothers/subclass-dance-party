var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  //this.prototype = Object.create(makeDancer.prototype);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //extendObj(this, makeDancer);

  //need to have dancer object
  //this.$node = makeDancer.prototype.$node;
  //this.$node = $('<span class ="dancer blinky"></span>');
  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);
  // this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top,left,timeBetweenSteps);

  //debugger;
  //this._timeBetweenSteps = timeBetweenSteps;
  // return blinkyDancer;

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //console.log("Inside makeBlinkyDancer");
  makeDancer.prototype.step.call(this);
  //debugger;
  //debugger;
  //conslole.log
  //debugger;

  // this.oldStep();
  // makeDancer.prototype.step();

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();

};




// var makeBlinkyDancer = function(top, left, timeBetweenSteps){
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

