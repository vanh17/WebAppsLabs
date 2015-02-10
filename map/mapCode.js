/*
 * Name 1: YourNameHere
 * Name 2: YourNameHere
 */

// Do not change the name of this function
var makeMap = function() {
// All your code will go inside this function
   // This object should contain the methods you want to expose:
   var o = {has: function has(key) {
      if (o.hasOwnProperty(key)) {return true;}
      else {return false;}
   },
   lookup: function lookup(key) {
      if (!o.has(key)) {throw new Error('There is no such key in this map');}
      else {return o[key];}
   },
   add: function add(key, value) {
      if (o.has(key)) { throw new Error('key has been already existed');}
      else { o[key] = value; return o;}
   },
   update: function update(key, value) {
      if (o.has(key) && key + "" != "update" && key + "" != "lookup" && key + "" != "add" && key + "" != "has" && key + "" != "remove") {o.key = value; return o;}
      else { throw new Error('cannot update non-existed key!');}
   },
   remove: function remove(key) {
      if (o.has(key) && key + "" != "update" && key + "" != "lookup" && key + "" != "add" && key + "" != "has" && key + "" != "remove") { delete o.key; return o;}
      else { throw new Error('cannot remove non-existed key!');}
   }
};
   // Use this object to store the key-value pairs:
   var storedPairs;

   // Add initialization code here

   // Add local functions here

   // Prepare the object o before returning it

   return o;
}


// Do NOT change anything below this line.
/*
 * To allow node.js to run our tests. DO NOT CHANGE!
 */
try {
   module.exports = {
      makeMap: makeMap
   };
} catch (e) {}
