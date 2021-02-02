//const ages = [12, 14, 16, 45, 99, 17]; // its an array
//const ages2 = [15, 19, 81, 30];

//const allAges = ages.concat(ages2);
//console.log(allAges); // old system

//const ages = [12, 14, 16, 45, 99, 17]; // its an array
//const ages2 = [15, 19, 81, 30];
//const ages3 = [15, 19, 81, 40, 88, 30];
//const allAges = ages.concat(ages2).concat(ages3);
//console.log(allAges); // old system

//const ages = [12, 14, 16, 45, 99, 17]; // its an array
//const ages2 = [15, 19, 81, 30];
//const ages3 = [15, 19, 81, 40, 88, 30];
//const allAges = [ages, ages2, 5, ages3];
//console.log(allAges); // old system

//const ages = [12, 14, 16, 45, 99, 17]; // its an array
//const ages2 = [15, 19, 81, 30];
//const ages3 = [15, 19, 81, 40, 88, 30];
//const allAges = [...ages, ...ages2, 5, ...ages3];
//console.log(allAges); // es6 spared operator

//onst ages = [12, 14, 16, 45, 99, 17]; // its an array
//onst ages2 = [15, 19, 81, 30];
//onst ages3 = [15, 19, 81, 40, 88, 30];
//onst allAges = [...ages, ...ages2, 5, ...ages3];
//console.log(allAges); // es6 spared operator
//const business = 650;
//const minister = 450;
//const sochib = 250;
//const maximum = Math.max(business, minister, sochib);
//console.log(maximum);

//const business = 650;
//const minister = 450;
//const sochib = 250;
////const maximum = Math.max(business, minister, sochib);
//const takaPoisa = [650, 450, 250];
//const maximum = Math.max(...takaPoisa)
//console.log(maximum);

const nums = [2, 5, 1, 7, 8, 33, 29];
const largest = Math.max(...nums);
console.log(largest);
