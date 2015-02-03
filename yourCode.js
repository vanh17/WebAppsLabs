/*
 * Name: Hoang Van
 */

/*
 * BINARY SEARCH
 */
var binarySearch = function binarySearch(arr, val) {
   var lo, hi, mid;
   if (arr.length === 0)
   {
      return false;
   }
   lo = 0;
   hi = arr.length - 1;
   // You may need to add things here
   if (arr[lo] > val || arr[hi] < val) {return false;}
   while (hi - lo !== 1) 
   {  // You should change this with a proper condition
      // You will need to add things here
      mid = Math.floor((lo + hi) / 2);
      if (arr[mid] === val) {return true;}
      (arr[mid] < val) ? lo = mid : hi = mid;
   }
   if (arr[lo] === val || arr[hi] === val) {return true;}
   return false;
   // You may need to add things here
};

/*
 * COUNTING TAGS
 */
var countTags = function countTags(items) {
   var tagCounts = {}; 
   for (var i = 0; i < items.length; i++)
   {
      if (items[i]["tags"] === undefined) {continue;}
      if (!Array.isArray(items[i]["tags"])) {continue;}
      for (var d = 0; d < items[i]["tags"].length; d++)
      {
         if (/\S/.test(items[i]["tags"][d]) && tagCounts[items[i]["tags"][d]] === undefined) {tagCounts[items[i]["tags"][d]] = 1;}
         else if (!/\S/.test(items[i]["tags"][d])) {continue;}
         else {tagCounts[items[i]["tags"][d]] +=1;}
      }
      
   }
   return tagCounts;
};

/*
 * EXTRACT HASHTAGS
 */
var extractHashTags = function extractHashTags(str) {
   var arr = [], t;
   if (str.length === 0) {return arr;}
   t = str.indexOf("#");
   while(t != -1){
      var em = "";
      if (/^[a-zA-Z]+$/.test(str[t + 1])) {
         for(var d = t + 1; d < str.length; d++)
            {
               if (!/^[a-zA-Z]+$/.test(str[d]))
                  {
                     break;
                  }
               em = em + str[d];   
            }
         arr.push(em);
      }
      t = str.indexOf("#", t + 1);
   }
   for (var i = 0; i < arr.length; i++)
   {
      for (var j = 0; j < arr.length; j++)
      {
         if (arr[j] === arr[i] && i !== j) {arr.splice(j,1);}
      }
   }
   return arr;
};
