//OBJECT
const student = {
    fullName: "Neeraj Kumar",
    marks: 94.4,
    printMarks: function () {
        console.log("marks= ", this.marks);
    },

};


// object 2
const employee = {
    calcTax1() {
        console.log("tax rate is 10%")
    },
    calcTax2: function () {
        console.log("tax rate is 20%");
    }
};

const karanArjun = {
    salary: 50000,
};
const karanArjun2 = {
    salary: 50000,
};
const karanArjun3 = {
    salary: 50000,
};

karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;

//class example

class ToyotaCar {
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("lexus")

//INHERITENCE 

//First Example
class Parent {
    hello() {
        console.log("Hello");
    }
}
class Child extends Parent { }
let obj = new Child();

//2nd Example

class Person {

    constructor() {
        this.species = "homo sapiens";
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    work() {
        console.log("do nothing");
    }
}

class Engineer extends Person {
    constructor(branch) {
        super();// to invoke parent class costructor
        this.branch = branch;
    }
    work() {
        super.eat()
        console.log("solve problems and build something ")
    }
}

class Doctor extends Person {
    work() {
        console.log("Treat Pateint")
    }
}

let NeerajObj = new Engineer("cse");
let NeerajObj2 = new Doctor()
let p1 = new Person();
let e1 = new Engineer();

// Practice 1

// you are creating a website for your college .create a class user with 2 propereties , name & email. it also has a method called viewData() that allows user to view website data .

// create a new class called admin which inherits from user . add a new method called editdata to admin that allows it to edit website data.


let DATA = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", DATA);
    }

}

class Admin extends User {

    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = "some new value";
    }
}

let student1 = new User("neeraj", "abc@gmail.com");
let student2 = new User("aman", "aman@gmail.com");
let teacher1 = new User("Dean", "dean@gmail.com");
let admin1 = new Admin("admin", "admin@college.com");

//ERROR HANDLING 

let a = 5;
let b = 10;
console.log("a=", a);
console.log("a+b=", a + b);
try {
    console.log("a+b = ", a + c); //error
} catch (err) {
    console.log(err);
}