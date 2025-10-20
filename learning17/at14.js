//merging array with spread operator

const arr = [23, 44, 55, 34, 66];
const arr2 = ["uzaif" ,11, true];
const arr3 = [90, 4, false];

const arr4 = [...arr, ...arr2, ...arr3];
console.log(arr4);