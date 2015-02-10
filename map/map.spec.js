try {
   var chai = require('./../chai.js');
   var expect = chai.expect;
   var methods = require('./mapCode.js');
   var binarySearch = methods.binarySearch;
   var countTags = methods.countTags;
   var extractHashTags = methods.extractHashTags;
} catch (e) {}

function randomString(len) {
   var arr = [], caseRange, i;
   if (len == null) { len = 5; }
   for (i = 0; i < len; i += 1) {
      caseRange = [65, 97][Math.floor(Math.random() * 2)];
      arr.push(Math.floor(Math.random() * 26) + caseRange);
   }
   return String.fromCharCode.apply(String, arr);
}
// DO NOT CHANGE ANYTHING ABOVE THIS LINE

// Add your tests below
describe('Your code for maps', function() {
   it('defines a variable makeMap', function() {
      expect(function() { makeMap; }).to.not.throw(Error);
   });
   it('actually defines a function makeMap', function() {
      expect(makeMap).to.be.a('function');
   });
});
   // Add more "it" sections below
describe('Your makeMap function', function() {
   var theMap = makeMap();
   it('defines theMap as an object', function() {
      expect(theMap).to.be.a('object');
   });
   it('return an object with methods has, lookup, add, update, remove', function() {
      ['has', 'lookup', 'add', 'update', 'remove'].forEach(function(key) { expect(theMap[key]).to.be.a('function');
      });
   });
});
describe('Map methods:', function() {
   var theMap;
   beforeEach(function() {
      theMap = makeMap();
   });
   it('has return true for a existed key', function() {
      expect(theMap.has('has')).to.equal(true);
   });
   it('has return false for a non-existed key', function() {
      expect(theMap.has(undefined)).to.equal(false);
      expect(theMap.add(undefined,2).lookup(undefined)).to.equal(2);
   });
   it('lookup throw error when key does not exist', function() {
      expect(function() {theMap.lookup("Hoang");}).to.throw(Error);
   });
   it('lookup return value stored in the key', function() {
      expect(theMap.lookup("update")).to.equal(function update());
   });
   it('add throws error when the key has already existed', function() {
      expect(function() {theMap.add('has', 2);}).to.throw(Error);
   });
   it('add return theMap with the legal key', function() {
      theMap.add(undefined, 2);
      expect(theMap.lookup(undefined)).to.equal(2);
   });   
   it('update throw error with non-existed key', function() {

      expect(function() {theMap.update('say');}).to.throw(Error);
   });
   it('update return theMap with legal key', function() {
      theMap.add('Dr.Skiadas', "thank you!")
      theMap.update('Dr.Skiadas', "you are great!");
      expect(theMap.lookup('Dr.Skiadas')).to.equal("you are great!");
   });
   it('intense tests for makeMap function', function() {
      var i = 0;
      while (i < 10000) {
         var len = Math.floor(Math.random()*100);
         var key = randomString(len);
         var v1 = Math.random()*100000;
         var v2 = randomString(len);
         if (theMap.has(key)) {continue label;}
         theMap.add(key, v1);
         expect(theMap.lookup(key)).to.equal(v1);
         theMap.update(key, value2);
         expect(theMap.lookup(key)).to.equal(v2);
         label: i+=1;
      }
   });
});