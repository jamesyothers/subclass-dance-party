describe("blinkyDancer", function() {

  var blinkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);

  });

  it("should have a jQuery $node object", function(){
    //debugger;
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blinkyDancer, "step");
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe("bigdancer", function() {

  var bigDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bigDancer = new BigDancer(10, 20, timeBetweenSteps);

  });

  it("should have a jQuery $node object", function(){
    //debugger;
    expect(bigDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node fadeToggle", function() {
    sinon.spy(bigDancer.$node, 'fadeToggle');
    bigDancer.step();
    expect(bigDancer.$node.fadeToggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(bigDancer, "step");
      expect(bigDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bigDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bigDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe("bigmonk", function() {

  var bigMonk;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bigMonk = new BigMonk(10, 20, timeBetweenSteps);

  });

  it("should have a jQuery $node object", function(){
    //debugger;
    expect(bigMonk.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node fadeToggle", function() {
    sinon.spy(bigMonk.$node, 'fadeToggle');
    bigMonk.step();
    expect(bigMonk.$node.fadeToggle.called).to.be.true;
  });

//   describe("dance", function(){
//     it("should call step at least once per second", function(){
//       sinon.spy(bigMonk, "step");
//       expect(bigMonk.step.callCount).to.be.equal(0);
//       clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
//       clock.tick(timeBetweenSteps);

//       expect(bigMonk.step.callCount).to.be.equal(1);

//       clock.tick(timeBetweenSteps);
//       expect(bigMonk.step.callCount).to.be.equal(2);
//     });
//   });
});
