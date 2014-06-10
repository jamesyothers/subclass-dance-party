var BigMonk = function(top, left, timeBetweenSteps){

  BigDancer.call(this,top,left,timeBetweenSteps);
  $(this.$node).addClass('monk');
};

BigMonk.prototype = Object.create(BigDancer.prototype);
BigMonk.prototype.constructor = BigMonk;

BigMonk.prototype.step = function(){

  BigDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.slideDown();
};
