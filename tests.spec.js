try {
   var chai = require('./chai.js');
   var expect = chai.expect;
   var methods = require('./yourCode.js');
   var binarySearch = methods.binarySearch;
   var countTags = methods.countTags;
   var extractHashTags = methods.extractHashTags;
} catch (e) {}

// Do not change anything above this line
describe('Your code for stacks', function() {
   it('defines a variable makeStack', function() {
      expect(function() { makeStack; }).to.not.throw(Error);
   });
   it('actually defines a function makeStack', function() {
      expect(makeStack).to.be.a('function');
   });
});
   // Add more "it" sections below
describe('Your makeStack function', function() {
   var stack = makeStack();
   it('defines stack as an object', function() {
      expect(stack).to.be.a('object');
   });
   it('return an object with methods push, pop, isEmpty', function() {
      ['push', 'pop', 'isEmpty'].forEach(function(key) { expect(stack[key]).to.be.a('function');
      });
   });
});
describe( 'Stack methods:', function() {
   beforeEach(function() {
      //this make sure that before every time we call isEmpty, it accesses to freshly initialized stack.
      var stack = makeStack();
   });
   it( 'isEmpty return true for a new stack', function() {
      expect(stack.isEmpty()).to.equal(true);
   });
   it( 'isEmpty return false after calling push', function() {
      stack.push(2);
      expect(stack.isEmpty()).to.equal(false);
   });
   it( 'push return a stack itself', function() {
      expect(stack.push()).to.equal(stack);
   });
   it( 'pop returns error in an empty stack', function() {
      expect(function() {stack.pop();}).to.throw(Error);
   });
   it( 'pop returns not error in an non-empty stack', function() {
      stack.push(2);
      expect(function() {stack.pop();}).to.not.throw(Error);
   });
   it( 'pop called after push method returns a pushed element', function() {
      var v = Math.random();
      stack.push(v);
      expect(stack.pop()).to.equal(v);
   });
   it( 'consecutive pop returns elements in reverse order to push method', function() {
      var v1 = Math.random(), v2 = Math.random() + 5;
      stack.push(v1);
      stack.push(v2);
      expect(stack.pop()).to.equal(v2);
      expect(stack.pop()).to.equal(v1);
   })
});