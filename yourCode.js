/*
 * Name 1: YourNameHere
 * Name 2: YourNameHere
 */
// All your code will go here
var makeStack = function() {
	var value = [];
	var stack = {push: function(items) {
		value.push(items);
		return stack;
	},
	pop: function() {
		if (stack.isEmpty()) {
			throw new Error("Fails to pop from an empty stack");
		}
		else{
			return value.pop();
		}

	},
	isEmpty: function() {
		return value.length === 0;
	}};
	return stack;
};


// Do NOT change anything below this line.
/*
 * To allow node.js to run our tests. DO NOT CHANGE!
 */
try {
   module.exports = {
      binarySearch: binarySearch,
      countTags: countTags,
      extractHashTags: extractHashTags
   };
} catch (e) {}
