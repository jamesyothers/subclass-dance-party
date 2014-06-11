var BigMonk = function(top, left, timeBetweenSteps){

  BigDancer.call(this,top,left,timeBetweenSteps);
  $(this.$node).addClass('monk');
  //.prepend('<img id="monkImg" src="http://th08.deviantart.net/fs71/PRE/i/2012/180/d/0/monk_transparent_by_oreo_septim-d55bc4t.png" />');
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
