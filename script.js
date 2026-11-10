// **Task 1: Student Management System**

function Student(name , rollno , marks) {
    this.name = name;
    this.rollno = rollno;
    this.marks = marks;
}

Student.prototype.showdetails = function () {
    console.log(`My name is ${this.name}, My rollno is ${this.rollno}, My marks is ${this.marks} `);
};

Student.prototype.updatemarks = function (updatedmarks) {
    this.marks = updatedmarks;
}

let student1 = new Student("Ali", 101 ,55);
let student2 = new Student("Hassan", 102 ,85);
let student3 = new Student("Raza", 103 ,45);

student1.updatemarks(95);

student1.showdetails();
student2.showdetails();
student3.showdetails();


// console.log(student1.showDetails === student2.showDetails);
// console.log(student2.showDetails === student3.showDetails);


// **Task 2: Property Checking**//

console.log("name" in student1);
console.log("showdetails" in student1);

console.log(student1.hasOwnProperty("name"));
console.log(student1.hasOwnProperty("showdetails"));
console.log(typeof student1.showdetails);



// **Task 3: Prototype Practice**
 Student.prototype.institute = "SMIT"

 console.log(student1.institute);
 console.log(student2.institute);
 console.log(student3.institute);
 





