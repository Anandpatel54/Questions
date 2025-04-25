/*function reversedString(str){
  let reversed = str.split("").reverse().join("");
  console.log("Reversed string is:", reversed);
  return reversed;
}
reversedString("Hello")*/

/*function removeSpace(str){
  let newStr = str.split(" ").join("");
  console.log("String without spaces is:", newStr);
  return newStr;
}
removeSpace("H e l l o W o r l d");*/

/*function countSpace(str){
  let count = 0;
  for(let i = 0; i<str.length; i++){
    if(str[i] === " "){
      count++;
    }
  }
  console.log("Number of spaces of String is: -", count);
}
countSpace("H e l l o World");*/

/*function paldromicString(str){
  let reversed = str.split("").reverse().join("");
  if(str === reversed){
    console.log("String is Palindrome");
  } else{
    console.log("String is not Palindrome");
  }
}
paldromicString("madam");
paldromicString("hello");*/

/*function countVowels(str) {
  let count = " ";
  for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello"));*/

/*function removeDuplicates(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}
console.log(removeDuplicates("banana"));*/

/*function capitalizeWords(str) {
  let words = str.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      result += word[0].toUpperCase() + word.slice(1) + " ";
    }
  }
  return result.trim();
}

console.log(capitalizeWords("hello world"));*/

/*function evenOdd(num){
  if(num%2 ==0){
    console.log(num + " is even");
  }else{
    console.log(num + " is odd");
  }
}
evenOdd(4);
evenOdd(5);*/

/*function printEvenOdd(num){
  for(let i = 1; i<=num; i++){
    if(i%2 == 0){
      console.log(i+ " is even");
    } else{
      console.log(i + " is odd");
    }
  }
}
printEvenOdd(10);*/

/*function fact(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
console.log("Factorial of 5 is:", fact(5));*/

/*function withoutThiredvar(a, b) {

  a = a + b;
  b = a - b;
  a = a - b;

  console.log("a:", a);
  console.log("b:", b);
}
withoutThiredvar(10, 20);*/

/*function sum(num){
  let sum = 0;
  for(let i = 0; i<num.length; i++){
    sum += num[i];
  }
  return sum;
}
let num = [1, 2, 3, 4, 5];
let result = sum(num);
console.log("Sum of the array is:", result);*/

/*function fibonacci(num){
  let a = 0;
  let b = 1;
  let c;
  for(let i = 2; i<num; i++){
    c = a+b;
    a = b;
    b = c;
    console.log(c);
  }
}
fibonacci(10);*?

/*function paldromic(num){
    let rev = 0;
    let temp = num;
    while(num>0){
        let digit = num%10;
        rev = rev*10 +digit;
        num = Math.floor(num/10);
    }
    if(temp==rev){
        console.log("Number is Palindrome");
    } else{
        console.log("Number is not Palindrome");
    }
    return rev;
}
paldromic(121);*/

/*function isArmstrong(num){
  let rev = 0;
  let temp = num;
  let digits = num.toString().length;

  while(num>0){
    let digit = num%10;
    rev += digit**digits;
    num = Math.floor(num/10);
  }

  if(temp == rev){
    console.log("Number is Armstrong");
  } else{
    console.log("Number is not Armstrong");
  }
}
isArmstrong(153);*/

/*function isprime(num){
  if(num <= 1){
    return false;
  }
  for(let i = 2; i<= Math.sqrt(num); i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}
function checkPrime(num){
  if(isprime(num)){
    console.log(num + " is a prime number");
  } else{
    console.log(num + " is not a prime number");
  }
}
checkPrime(7)
checkPrime(8)*/

/*function maxmin(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log("Maximum number is:", max);
  console.log("Minimum number is:", min);
}
const arr = [1, 2, 3, 4, 5];
maxmin(arr);*/

/*function findDuplicate(arr) {
  let duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j] && !duplicate.includes[i]) {
        duplicate.push(arr[i]);
        break;
      }
    }
  }
  console.log("Duplicate Numbers:- ", duplicate);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3];
console.log("tesr case 1");
findDuplicate(arr);*/

/*function removeDuplicate(arr){
  let duplicate = []
  for(let i = 0; i<arr.length; i++){
    if(!duplicate.includes(arr[i])){
      duplicate.push(arr[i]);
    }
  }
  return duplicate
}
const num = [1,2,2,3,4,5]

console.log("removeDuplicate:-", removeDuplicate(num))*/

/*function findMissing(arr, n) {
  for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}
const arr = [0, 1, 2, 3, 4, 5, 7, 8, 9];
const n = arr.length;
console.log("Missing number is:", findMissing(arr, n));*/

/*function twoSum(arr, target){
  for(let i =0; i<arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
      if(arr[i] + arr[j] == target){
        return[i, j];
      }
    }
  }
  return [];
}

let arr1 = [2, 7, 11, 15];
let target1 = 9;
let result = twoSum(arr1, target1);
console.log("Indices of the two numbers that add up to the target:", result);*/

/*function asssortNum(arr){
  for(let i = 0; i<arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
      if(arr[i]< arr[j]){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp;
      }
    }
  }  
  console.log("Sorted array is:", arr);
}
sortNum([5, 3, 8, 1, 2]);*/

/*function decsortNum(arr){
  for(let i = 0; i<arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
      if(arr[i] > arr[j]){
        let temp = arr[i]
        arr[i] = arr [j]
        arr[j] = temp
      }
    }; 
  }
  console.log("Sorted array is:", arr);
}
sortNum([5, 3, 8, 1, 2]);*/

/*function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1
}

const num = [1,3,5,7,9,11,13,15,17,19,21]//.sort((a, b) => a - b);
const index = binarySearch(num,3)
console.log(index);*/

/*function mergeShort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeShort(arr.slice(0, mid));
  const right = mergeShort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

const arr = [5, 2, 9, 1, 8];
const shorted = mergeShort(arr);
console.log(shorted);*/

/*function bubbleShort(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = 0; j < arr.length-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

const arr = [5,3,1,6,8,4,2]
console.log("bubbleShort",bubbleShort(arr))*/

/*function selectionShort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i],arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}
let num = [2, 1, 5, 3, 6];
console.log("Selection short:-", selectionShort(num));*/

/*function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}
console.log(arraysEqual([1, 2], [1, 2]));
console.log(arraysEqual([1, 2], [2, 1]));*/
