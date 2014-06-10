var BigDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this,top,left,timeBetweenSteps);
  //this.$node = $('<span class="dancer big"></span>');
  $(this.$node).addClass('big');
};

BigDancer.prototype = Object.create(Dancer.prototype);
BigDancer.prototype.constructor = BigDancer;

BigDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.fadeToggle();
};
