// question1, Write a function that prints the first 10 integers on the console starting from the number 1 using
// the JavaScript for loop.

// function printFirst10Integers() {
//     for (let i = 1; i <= 10; i++) {
//       console.log(i);
//     }
//   }
  
  // Call the function to print the first 10 integers
  // printFirst10Integers();


  // question2,Write a function that takes a single number as an argument and prints the next 5 numbers in the
  // console. Note: each output should be displayed on a new line.
  // ○ Test case: If you give 7 to the function, output should look like this:
  // 8
  // 9
  // 10
  // 11
  // 12


  // function printNextFiveNumbers(num) {
  //   for (let i = 1; i <= 5; i++) {
  //     console.log(num + i);
  //   }
  // }
  
  // // Example usage:
  // printNextFiveNumbers(7);


//  question3 Write a function that takes an array as an argument and prints every element of the array on the
// console.
// ○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
// 1
// Hello
// 8
// 44
  // function printArrayElements(arr) {
    // for (let i = 0; i < arr.length; i++) {
      // console.log(arr[i]);
    // }
  // }
  
  // Example usage:
  // const a = [1, "Hello", 8, 44];
  // printArrayElements(a);

//  question 4 Write a function that takes an array as an argument and prints the total number of elements
//   found in the array. Hint: use a property of the Array object to solve this question.
//   ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
//   ○ Test case 2: Given the array a = ["world", 13], output should be: 2

// function printTotalElements(arr) {
//   console.log(arr.length);
// }

// // Test case 1:
// const a1 = [1, "Hello", 8, 44];
// printTotalElements(a1); // Output: 4

// // Test case 2:
// const a2 = ["world", 13];
// printTotalElements(a2); // Output: 2

// question 5 Write a function that takes an array of numbers as a parameter and logs in the console the sum of
// all the numbers in the array.
// ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
// 3 + 0

// function logSumOfNumbers(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// }

// // Test case 1:
// const array1 = [5, 6, 99, 8, 76, 4, 68, 44];
// logSumOfNumbers(array1); // Output: 310

// // Test case 2:
// const array2 = [3, 0];
// logSumOfNumbers(array2); // Output: 3


// /question 6 Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102
// function calculateDifference(arr) {
//   let sumOdd = 0;
//   let sumEven = 0;

//   // Loop through the array
//   for (let number of arr) {
//       if (number % 2 === 0) {
          // If the number is even, add it to sumEven
//           sumEven += number;
//       } else {
//           // If the number is odd, add it to sumOdd
//           sumOdd += number;
//       }
//   }

//   // Calculate the difference between total even and total odd numbers
//   const difference = sumEven - sumOdd;

//   // Log the result in the console
//   console.log("Sum of odd numbers:", sumOdd);
//   console.log("Sum of even numbers:", sumEven);
//   console.log("Difference between total even and total odd numbers:", difference);

//   // Return the difference (optional, depending on your use case)
//   return difference;
// }

// // Test case
// const array = [5, 6, 99, 8, 76, 4, 68, 44];
// calculateDifference(array);

//  question 7 Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102

// function calculateDifference(arr) {
//   let sumOdd = 0;
//   let sumEven = 0;

//   // Loop through the array and calculate the sum of odd and even numbers
//   for (let number of arr) {
//       if (number % 2 === 0) {
//           sumEven += number;
//       } else {
//           sumOdd += number;
//       }
//   }

//   // Calculate the difference and log the result
//   const difference = sumEven - sumOdd;
//   console.log("Sum of odd numbers:", sumOdd);
//   console.log("Sum of even numbers:", sumEven);
//   console.log("Difference between total even and total odd numbers:", difference);

//   return difference;
// }

// // Test case
// const inputArray = [5, 6, 99, 8, 76, 4, 68, 44];
// const result = calculateDifference(inputArray);

// question 8 Write a function that takes an array as a parameter and logs in the console the elements that have
// even indexes only. Notice: this question is not asking you to log elements with even value, but
// elements that are located on even indexes)
// ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// should be:
// 5
// 99
// 76
// 68
// ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// be:
// 11
// 3
// car

// function logElementsAtEvenIndexes(arr) {
//   for (let i = 0; i < arr.length; i += 2) {
//     console.log(arr[i]);
//   }
// }

// // Test case 1
// logElementsAtEvenIndexes([5, 6, 99, 8, 76, 4, 68, 44]);

// // Test case 2
// logElementsAtEvenIndexes([11, "Sam", 3, 7, "car"]);

// question 9 Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method

// function modifyArray(sampleArray) {
//   // Remove the last element
//   sampleArray.pop();

  // Add a new value of "32"
  // sampleArray.push("32");

  // Print the new array on the console
  // console.log(sampleArray);
// }

// Example usage
// let myArray = [5, 6, 99, 8, 76, 4, 68, 44]
// modifyArray(myArray);

// question 10 Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// // Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax - sort(function(a, b){return a-b});

// function sortArrayAscending(sampleArray) {
//   Sort the array in ascending order
//   sampleArray.sort(function(a, b) {

// Example usage
// let myArray = [5, 2, 8, 1, 4];
// sortArrayAscending(myArray);

// // Create a function that takes length and width and finds the perimeter of a rectangle.

// Examples
// findPerimeter(6, 7) ➞ 26

// findPerimeter(20, 10) ➞ 60

// findPerimeter(2, 9) ➞ 22
// function findPerimeter(length, width) {
//     return 2 * (length + width);
//   }
  
//   // Examples
//   var result1 = findPerimeter(6, 7);
//   console.log(result1);  // Output: 26
  
//   var result2 = findPerimeter(20, 10);
//   console.log(result2);  // Output: 60
  
//   var result3 = findPerimeter(2, 9);
//   console.log(result3);  // Output: 22
//   // 
console.log (hello)
function checkF() {}

let a = document.getElementById("registration-form");
a.onsubmit = checkF;