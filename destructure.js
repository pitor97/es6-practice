//const person = { name: "jack william", age: 17, job: "facebook", gfName:"ema Watson" , phone: 01737771788}
//console.log(person.gfName);
//console.log(person.gfName);
//console.log(person.gfName);
//console.log(person.gfName);
//console.log(person.gfName);

// we can get the result as much we console log
// same thing we can do with othr mathode
//const person = { name: "jack william", age: 17, job: "facebook", gfName:"ema Watson" , phone: 01737771788}
//const gfName= person.gfName
//console.log(gfName);
//console.log(gfName);
//console.log(gfName);
//console.log(gfName);
//console.log(gfName);

// as a same maththod we can accase the another property

///const person = {
///  name: "jack william",
///  age: 17,
///  job: "facebook",
///  gfName: "ema Watson",
///  phone: 01737771788,
///};
///const gfName = person.gfName;
///const phone = person.phone;
///console.log(gfName, phone);
///console.log(gfName, phone);
///console.log(gfName, phone);
///console.log(gfName, phone);
///console.log(gfName, phone);

// there is another mathwod

//const person = {
//  name: "jack william",
//  age: 17,
//  job: "facebook",
//  gfName: "ema Watson",
//  phone: 01737771788,
//};
//const gfName = person.gfName;
//const { phone,age,job } = person;  // in this way we can get the other element also
//console.log(gfName, phone,age,job);
//console.log(gfName, phone ,age,job);

// in same mathwhod we can work with the array
const person = {
  name: "jack william",
  age: 17,
  job: "facebook",
  gfName: "ema Watson",
  phone: 01737771788,
};
const complexObject = {
  name:"abc", info:{
    address: "Dinajpur"
    leder: "taramiya"
  }
}
const { phone, age, job } = person;
//console.log(gfName, phone,age,job);
//console.log(gfName, phone ,age,job);
const friends = ["sakib", "uzzol", "sumi", "peter"];
const [frist, next, ...result] = friends;
console.log(result);
 const {leader} = complexObject.info