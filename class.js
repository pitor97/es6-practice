//class Student{
//
//}
//
//const student1 = new Student()
//const student2 = new Student()
//console.log(student1, student2); /// to make a class to object // we can get empty property

//class Student {
//  constructor() {
//    this.id = this.name = "mahi"; //to add the property
//  }
//}
//
//const student1 = new Student();
//const student2 = new Student();
//console.log(student1, student2);

//class Student {
//  constructor(sId, sName) {
//    this.id = sId;
//    this.name = sName;
//    this.school = "Toulouse";
//    this.basa = "Dinajpur";
//    this.test = "empty property";
//  }
//}
//
//const student1 = new Student(12, "Uzzol");
//const student2 = new Student(22, "Sumi");
//console.log(student1, student2);

// we can acces the property

//class Student {
//    constructor(sId, sName) {
//      this.id = sId;
//      this.name = sName;
//      this.school = "Toulouse";
//      this.basa = "Dinajpur";
//      this.test = "empty property";
//    }
//  }
//
//  const student1 = new Student(12, "Uzzol");
//  const student2 = new Student(22, "Sumi");
//  console.log(student1.name, student2.basa); // we can acces the property

class Student {
  constructor(sId, sName) {
    this.id = sId;
    this.name = sName;
    this.school = "Toulouse";
    this.basa = "Dinajpur";
    this.test = "empty property";
  }
}

const student1 = new Student(12, "Uzzol");
const student2 = new Student(22, "Sumi");
const student3 = new Student(24, "besra");
console.log(student3);
