//Write a function called `productOfArray` which takes in an array of numbers and returns the product of them all

function productOfArray(arr) {
  return (arr.length === 0) ? 1 : arr[0] *= productOfArray(arr.slice(1));
}
// console.log(productOfArray([1,2,3])); // 6
// console.log(productOfArray([1,2,3,10])); // 60

//Write a function called collectStrings that returns all the strings in a nested object

function collectStrings(obj) {
  let result = [];

  function findStrings(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'string') {
        result.push(obj[key]);
      } else {
        return findStrings(obj[key]);
      }
    }
  }

  findStrings(obj);
  return result;
}

// var stringsObj = {
//   stuff: "foo",
//   data: {
//     val: {
//       thing: {
//         info: "bar",
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: "baz"
//           }
//         }
//       }
//     }
//   }
// }

// console.log(collectStrings(stringsObj));



//Write a function called `contains` that searches for a value in a nested object. It returns true if the object contains that value.

function contains(obj, val) {
  for (let key in obj) {
    if (typeof obj[key] !== 'object') {
      if (obj[key] === val) {
        return true;
      }
    } else {
      return contains(obj[key], val);
    }
  }

  return false;
}
// var nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44
//                     }
//                 }
//             }
//         }
//     }
// }

// contains(nestedObject, 44) // true
// contains(nestedObject, "foo") // false

//[https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript]

function realSize(arrays) {
  let count = 0;

  function findInts(arrays) {
    if (arrays.length === 0) {
      return 0;
    }
    if (typeof arrays === 'number') {
      count++;
    } else {
      for (let i = 0; i < arrays.length; i++) {
        findInts(arrays[i]);
      }
    }
  }

  findInts(arrays);
  return count;
}

//[https://www.codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript]

function SumSquares(l){
  let result = 0;

  function findInts(l) {
    if (l.length === 0) {
      return 0;
    }
    if (typeof l === 'number') {
      result += Math.pow(l, 2);
    } else {
      for (let i = 0; i < l.length; i++) {
        findInts(l[i]);
      }
    }
  }

  findInts(l);
  return result;
}

//https://www.codewars.com/kata/recursive-replication]

function replicate(times, number) {
  let result = [];

  function repeating(num) {
    if (num > 0) {
      result.push(number);
      repeating(--num);
    } else if (num < 0) {
      return [];
    }
  }
  repeating(times);
  return result;
}

//Write a function called search that finds a value in an array and returns the index where the value is at. If the value is not found, the function should return negative 1.

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'object') {
      if (arr[i] === val) {
        return arr.indexOf(val);
      }
    } else {
      return search(arr[i], val);
    }
  }
  return -1;
}


search([1,2,3,4,5],5) // 4
search([1,2,3,4,5],15) // -1

//Refactor your search function to use a faster algorithm called binary search [https://www.youtube.com/watch?v=JQhciTuD3E8](https://www.youtube.com/watch?v=JQhciTuD3E8)

function binarySearch(arr, val) {
  let sorted = arr.sort(function(a, b) { return a - b; });
  let testArray = sorted.slice();
  let start = 0;
  let end = testArray.length;
  let midpoint = Math.floor(testArray.length / 2);
  let result;

  function findVal(testArray, start, end, val) {
    if (start > end) { return -1 };
    midpoint = Math.floor(start + (end-start)/2);

    if (val === testArray[midpoint]) {
      return midpoint;
    } else if (val < testArray[midpoint]) {
      return findVal(testArray, start, midpoint-1, val);
    } else {
      return findVal(testArray, midpoint+1, end, val);
    }
  }

  return findVal(testArray, start, end, val);
}

console.log(binarySearch([3, 4, 2, 5, 1],5)); // 4
console.log(binarySearch([1,2,3,4,5],15)); // -1

//Write a function called `stringifyNumbers` which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

var obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

function stringifyNumbers(obj) {
  let result = Object.assign({}, obj);

  function findNumbers(obj) {
    let objKeys = Object.keys(obj);
    objKeys.forEach(function(key) {
      if (typeof obj[key] === 'number') {
        obj[key] = obj[key].toString();
      } else if (typeof obj[key] === 'object') {
        return findNumbers(obj[key]);
      }
    });
  }
  findNumbers(result);
  return result;
}

//console.log(stringifyNumbers(obj));

// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }

//Complete [this](https://www.codewars.com/kata/mutual-recursion/train/javascript) codewars problem!











