// Description: This file contains the code for the homework exercises
// Author: Gemini S. Powell (https://gemafawell.dev/)

// Eloquent JavaScript
// Chapter 4: Data Structures: Objects and Arrays
// Exercise 1: The Sum of a Range
// define elements
let start = document.getElementById('start');
let end = document.getElementById('end');
let step = document.getElementById('step');
let btn1 = document.getElementById('btn1');
let output = document.getElementById('output');
let tot = document.getElementById('sum');

// write a function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
let range = (start, end, step) => {
    // create an empty array
    let newArr = [];
    // loop through the array
    for (let i = start; i <= end; i += step) {
        // add the numbers to the array
        newArr.push(i);
        // if the step is not defined, set it to 1 and increase the number by 1
        if (step === undefined) {
            step = 1;
            i++;
            // if the step is more than 1, increase the number by the step
        } else if (step > 1) {
            i += step;
            // if the step is 1, increase the number by 1
        } else if (step === 1) {
            i++;
            // if the step is negative, decrease the number by the step
        } else if (step < 0) {
            i += step;
        }
        // if the step makes the number go over the end, stop the loop
        if (i > end) {
            break;
        }
    }
    // output the array to the DOM
    output.innerHTML = newArr;
}

// write a function that takes an array of numbers and returns the sum of the numbers
let findSum = (arr) => {
    // convert the string to an array
    arr = arr.split(',');
    // create a variable to hold the sum
    let total = 0;
    // loop through the array and add the numbers to the sum
    for (let i = 0; i < arr.length; i++) {
        // convert the string to a number
        arr[i] = parseInt(arr[i]);
        // add the number to the sum
        total += arr[i];
    }
    // output the sum to the DOM
    sum.innerHTML = total;
}

// add event listener to button
btn1.addEventListener('click', () => {
    // call all functions
    range(start.value, end.value);
    findSum(output.innerHTML);
});

// Exercise 2: Reversing an Array
// define elements
let arr = document.getElementById('array');
let btn2 = document.getElementById('btn2');
let output2 = document.getElementById('output2');

// write a function that takes an array as an argument and produces a new array that has the same elements in the inverse order
let reverseArray = (arr) => {
    // convert the string to an array
    arr = arr.split(',');
    // create a new array
    let newArr = [];
    // loop through the array
    for (let i = arr.length - 1; i >= 0; i--) {
        // add the numbers to the new array
        newArr.push(arr[i]);
    }
    // output the new array to the DOM
    output2.innerHTML = newArr;
}

// add event listener to button
btn2.addEventListener('click', () => {
    // call the function
    reverseArray(arr.value);
});

// Exercise 3: A List
// define elements
let list = document.getElementById('array2');
let btn3 = document.getElementById('btn3');
let output3 = document.getElementById('output3');

// write a function that takes an array as an argument and produces a list that has the same elements
let arrayToList = (arr) => {
    // convert the string to an array
    arr = arr.split(',');
    // create a new array
    let newArr = [];
    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        // convert the string to a number
        arr[i] = parseInt(arr[i]);
        // add the numbers to the new array
        newArr.push(arr[i]);
    }
    // output the new array to the DOM
    output3.innerHTML = newArr;
}

// add event listener to button
btn3.addEventListener('click', () => {
    // call the function
    arrayToList(list.value);
});

// Exercise 4: Deep Comparison
// define elements
let objA = document.getElementById('array3');
let objB = document.getElementById('array4');
let btn4 = document.getElementById('btn4');
let output4 = document.getElementById('output4');

// write a function that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual
let deepEqual = (objA, objB) => {
    // establish JSON objects
    objA = JSON.stringify(objA);
    objB = JSON.stringify(objB);
    // convert the strings to objects
    objA = JSON.parse(objA);
    objB = JSON.parse(objB);
    // compare the objects
    if (objA === objB) {
        return true;
    } else {
        return false;
    }
}

// add event listener to button
btn4.addEventListener('click', () => {
    // call the function
    deepEqual(obj1.value, obj2.value);
    // output the result to the DOM
    output4.innerHTML = deepEqual(obj1.value, obj2.value);
});
