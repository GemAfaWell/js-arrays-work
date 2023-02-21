// Javascript.info
// Array Methods
// Exercise 1: Camelize
// define elements
let str = document.getElementById('string');
let btn5 = document.getElementById('btn5');
let output5 = document.getElementById('output5');

// write a function that changes dash-separated words like "my-short-string" into camel-cased "myShortString"
let camelize = (str) => {
  // split the string into an array
  str = str.split('-');
  // loop through the array
  for (let i = 0; i < str.length; i++) {
    // capitalize the first letter of each word
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  // join the array into a string
  str = str.join('');
  // output the string to the DOM
  document.getElementById('output5').innerHTML = str;
};

// add event listener to button
btn5.addEventListener('click', () => {
  // call the function
  camelize(str.value);
});

// Exercise 2: Filter Range
// define elements
let arr1 = document.getElementById('array5');
let btn6 = document.getElementById('btn6');
let output6 = document.getElementById('output6');
let a = 5;
let b = arr1.length - 1;

// write a function that takes an array and returns a new array that only contains values from the original array that are greater than or equal to a min value and less than or equal to a max value
function filterRange(arr1, a, b) {
  // loop through the array
  for (let i = 0; i < arr1.length; i++) {
    // convert the string to a number
    arr1[i] = parseInt(arr1[i]);
    // conditional statement to remove all the values that are not greater than or equal to a min value and less than or equal to a max value
    if (arr1[i] < a || arr1[i] > b) {
      arr1.splice(i, 1);
    }
  }
  // output the array to the DOM
  output6.innerHTML = arr1.value;
};

// add event listener to button
btn6.addEventListener('click', () => {
  // call the function
  filterRange(arr1, a, b);
});

// Exercise 3: Filter Range "In Place"
// define elements
let arr2 = document.getElementById('array6');
let btn7 = document.getElementById('btn7');
let output7 = document.getElementById('output7');

// write a function that takes an array and modifies it by removing all the values that are not greater than or equal to a min value and less than or equal to a max value
let filterRangeInPlace = (arr) => {
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // convert the string to a number
    arr[i] = parseInt(arr[i]);
  // remove all the values that are not greater than or equal to a min value and less than or equal to a max value
    arr.filter((item) => {
      if (item < a || item > b) {
        arr.splice(i, 1);
      }
    });
  }
  // output the array to the DOM
  output7.innerHTML = arr.value;
};

// add event listener to button
btn7.addEventListener('click', () => {
  // call the function
  filterRangeInPlace(arr2);
});



// Exercise 4: Sort in Descending Order
// define elements
let arr4 = document.getElementById('array7');
let btn8 = document.getElementById('btn8');
let output8 = document.getElementById('output8');

// write a function that takes an array and sorts it in descending order
let sortDescending = (newArr) => {
  // set value of a to 5 if it doesn't equal 5
  if (a != 5) {
    a = 5;
  }
  console.log(newArr);
  // loop through the array
  for (let i = 0; i < newArr.length; i++) {
    // convert the string to a number
    newArr[i] = parseInt(arr[i]);
  }
  // sort the array in descending order
  newArr.sort((a, b) => b - a);
  // output the array to the DOM
  output8.innerHTML = newArr;
};

// add event listener to button
btn8.addEventListener('click', () => {
  // call the function
  sortDescending(arr4);
});

// Exercise 5: Copy and Sort Array
// define elements
let arr5 = document.getElementById('array8');
let btn9 = document.getElementById('btn9');
let output9 = document.getElementById('output9');

// write a function that takes an array and returns a new array that is a copy of the original array sorted in descending order
let copyAndSort = (arr) => {
  // convert the string to an array
  arr = arr.split(',');
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // convert the string to a number
    arr[i] = parseInt(arr[i]);
  }
  // sort the array in descending order
  arr.sort((a, b) => b - a);
  // output the array to the DOM
  output9.innerHTML = arr;
};

// add event listener to button
btn9.addEventListener('click', () => {
  // call the function
  copyAndSort(arr5.value);
});

// Exercise 6: Calculator
// define elements
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let btn10 = document.getElementById('btn10');
let output10 = document.getElementById('output10');

// write a function that takes two numbers and returns their sum
let sum = (num1, num2) => {
  // convert the string to a number
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  // add the numbers
  let sum = num1 + num2;
  // output the sum to the DOM
  output10.innerHTML = sum;
};

// add event listener to button
btn10.addEventListener('click', () => {
  // call the function
  sum(num1.value, num2.value);
});

// Exercise 7: Map to Names
// define elements
let arr6 = document.getElementById('array9');
let btn11 = document.getElementById('btn11');
let output11 = document.getElementById('output11');

// write a function that takes an array of objects and returns an array of names
let mapToNames = (arr) => {
  // convert the string to an array
  arr = arr.split(',');
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // convert the string to an object
    arr[i] = JSON.parse(arr[i]);
  }
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // add the names to the array
    arr[i] = arr[i].name;
  }
  // output the array to the DOM
  output11.innerHTML = arr;
};

// add event listener to button
btn11.addEventListener('click', () => {
  // call the function
  mapToNames(arr6.value);
});

// Exercise 8: Map to Objects
// define elements
let arr7 = document.getElementById('array10');
let btn12 = document.getElementById('btn12');
let output12 = document.getElementById('output12');

// write a function that takes an array of names and returns an array of objects
let mapToObjects = (arr) => {
  // convert the string to an array
  arr = arr.split(',');
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // convert the string to an object
    arr[i] = JSON.parse(arr[i]);
  }
  // output the array to the DOM
  output12.innerHTML = arr;
};

// add event listener to button
btn12.addEventListener('click', () => {
  // call the function
  mapToObjects(arr7.value);
});

// Exercise 9: Sort by Age
// define elements
let arr8 = document.getElementById('array11');
let btn13 = document.getElementById('btn13');
let output13 = document.getElementById('output13');

// write a function that takes an array of objects and sorts them by age
let sortByAge = (arr) => {
  // convert the string to an array
  arr = arr.split(',');
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // convert the string to an object
    arr[i] = JSON.parse(arr[i]);
  }
  // sort the array by age
  arr.sort((a, b) => a.age - b.age);
  // output the array to the DOM
  output13.innerHTML = arr;
};

// add event listener to button
btn13.addEventListener('click', () => {
  // call the function
  sortByAge(arr8.value);
});

// Exercise 10: Shuffle an Array
// define elements
let arr9 = document.getElementById('array12');
let btn14 = document.getElementById('btn14');
let output14 = document.getElementById('output14');

// write a function that takes an array and returns a new array with the elements in a random order
let shuffle = (arr) => {
  // convert the string to an array
  arr = arr.split(',');
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // convert the string to a number
    arr[i] = parseInt(arr[i]);
  }
  // loop through the array
  for (let i = arr.length - 1; i > 0; i--) {
    // generate a random number
    let j = Math.floor(Math.random() * (i + 1));
    // swap the elements
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // output the array to the DOM
  output14.innerHTML = arr;
};

// add event listener to button
btn14.addEventListener('click', () => {
  // call the function
  shuffle(arr9.value);
});

// Exercise 11: Get the Average
// define elements
let arr10 = document.getElementById('array13');
let btn15 = document.getElementById('btn15');
let output15 = document.getElementById('output15');

// write a function that takes an array of numbers and returns the average
let average = (arr) => {
  // convert the string to an array
  arr = arr.split(',');
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // convert the string to a number
    arr[i] = parseInt(arr[i]);
  }
  // calculate the average
  let sum = arr.reduce((a, b) => a + b, 0);
  let avg = sum / arr.length;
  // output the average to the DOM
  output15.innerHTML = avg;
};

// add event listener to button
btn15.addEventListener('click', () => {
  // call the function
  average(arr10.value);
});

// Exercise 12: Unique Values
// define elements
let arr11 = document.getElementById('array14');
let btn16 = document.getElementById('btn16');
let output16 = document.getElementById('output16');

// write a function that takes an array of numbers and returns the unique values
let unique = (arr) => {
  // convert the string to an array
  arr = arr.split(',');
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // convert the string to a number
    arr[i] = parseInt(arr[i]);
  }
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // loop through the array
    for (let j = i + 1; j < arr.length; j++) {
      // check if the elements are the same
      if (arr[i] === arr[j]) {
        // remove the duplicate element
        arr.splice(j, 1);
      }
    }
  }
  // output the array to the DOM
  output16.innerHTML = arr;
};

// add event listener to button
btn16.addEventListener('click', () => {
  // call the function
  unique(arr11.value);
});

// Exercise 13: Object Keys (not working)
// define elements
let obj1 = document.getElementById('object1');
let btn17 = document.getElementById('btn17');
let output17 = document.getElementById('output17');

// write a function that takes an object and returns the keys
let keys = (obj) => {
  // convert the string to an object
  obj = JSON.parse(obj);
  // output the keys to the DOM
  output17.innerHTML = Object.keys(obj);
};

// add event listener to button
btn17.addEventListener('click', () => {
  // call the function
  keys(obj1.value);
});
