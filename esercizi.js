







//chapter 4. 

// ex.1
function range(start, end, step) {
    if(start < end && step < 0) {
     [start, end] = [end, start]
    }
    if (step == null) step = 1;
    var array = [];
  
    if (step > 0) {
      for (var i = start; i <= end; i += step)
        array.push(i);
    } else {
      for (var i = start; i >= end; i += step)
        array.push(i);
    }
    return array;
  }

console.log (range(1, 10, 2));
// → [1, 3, 5, 7, 9]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log (range(1, 10, -1));
// → [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]



//ex 2-

var arrayValue = [1, 2, 3, 4, 5];
arrayValue = arrayValue.reverse();
console.log(arrayValue);


------------------------


//ex3

function arrayToList(arr) {
    var obj = {};
    for(var i = 0 ; i < arr.length; i++) {
      if(i == arr.length) {
       return obj.rest = null;
      }
      obj.value = arr.splice(0,1);
      obj.rest = arrayToList(arr);
    }
    return obj;
  };
  
  console.clear();
  console.dir(arrayToList([1,2,3,4,5]));






  ex 4.


  function deepEqual(a, b) {
    if (a === b) return true;
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
    let keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length != keysB.length) return false;
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true;
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true



//chap 5

// ex.1

const reduced = arrays.reduce((result,array) => result.concat(array),[]);

console.log(reduced);



//ex.2

function loop(value, test, update, execute) {
    if (!test(value)) return; // stop
    execute(value);
    return loop(update(value), test, update, execute);
  }


  //ex 3


//every using a loop
function every(array, test) {
  for (let element of array) {
    if (test(element) === false) {
      return false;
    }
  }
  return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// every using array.some
function every(array, test) {
  return array.some(test);
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true




//5.4Dominant writing direction


function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }
  
  // takes a test function and tells you whether that function
  // returns true for any of the elements in the array
  
  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
  
  // returns an array of objects, each of which names a group
  // and tells you the number of elements that were found in that group
  
  function dominantDirection(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
   
    if (scripts.length == 0) return "ltr";
    
    return scripts.reduce((a, b) => a.count > b.count ? a : b).name;
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl 
  This code returns the dominant writing direction in a large data set that looks like the following:
  
  [
    {
      name: "Coptic",
      ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
      direction: "ltr",
      year: -200,
      living: false,
      link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
    },
    // …
  ]
