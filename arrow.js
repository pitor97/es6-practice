//function doubleIt(num) {
//return num * 2;
//}
// we can decleired the function another way
// function declare like a variable

//const doubleIt = function myFun(num) {
//  return num * 2;
//};
//const result = doubleIt(5);
//console.log(result);
/// we can declare a function with deferent way also
//const doubleIt = (num) => num * 2; // it call arrow function/
//const result = doubleIt(50);
//console.log(result);

// if we want to more element in a function
//const doubleIt = (num) => num * 2;
//const add = (x, y) => x + y;
//const give5 = () => 5;
//
//const result = add(50, 70);
//const result2 = give5();
//console.log(result);

const doubleIt = (num) => num * 2;
const add = (x, y) => x + y;
const give5 = () => 5;
const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result;
};

const result = add(50, 70);
const result2 = give5();
const result3 = doMath(7, 5);
console.log(result3);
