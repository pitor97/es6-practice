//class Child {
//  constructor(name) {
//    this.name = name;
//  }
//}
//const baby = new Child("Arnold");
//const baby2 = new Child("peter");
//console.log(baby);
//console.log(baby2);

//class Parent {
//  constructor() {
//    this.fatherName = "Schwerznegger";
//  }
//}
//class Child extends Parent {
//  constructor(name) {
//    super();
//    this.name = name;
//  }
//}
//const baby = new Child("Arnold");
//const baby2 = new Child("peter");
//console.log(baby);
//console.log(baby2);

/// as like as we can declare the function with this inheritance also

class Parent {
  constructor() {
    this.fatherName = "Schwerznegger";
  }
}
class Child extends Parent {
  constructor(name) {
    super();
    this.name = name;
  }
  getFullName(){
     return this.name + " " + this.fatherName 
  }
}
const baby = new Child("Arnold");
const baby2 = new Child("peter");
console.log(baby.getFullName () );
console.log(baby2);
