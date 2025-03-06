import axios from 'axios';



// task 1  3 object ={}
let table = {
    name: "table1",
    age: "12",
    weight: "10"
    
}
console.log();
console.log(table);

let fridge ={
    name: "fridge1",
    age : "2",
    length: "1"
}
console.log();
console.log(fridge);

let house ={
    name: "dom1",
    age: "3",
    estetic: "7/10"
}
console.log();
console.log(house);

// task2  3 object  new Object()
 let person = new Object();
 person.name= "pavlo";
 person.age = 12;
 person.surname = "trindez"
 console.log();
 console.log(person);

 let potato = new Object();
potato.name = "Barabolya";
potato.size = 0.5;
potato.color = "pink";
console.log();
console.log(potato);

let cucumber = new Object();
cucumber.name= "cucumber1";
cucumber.length = 10;
cucumber.radius = 0.4;
console.log();
console.log(cucumber);

// task 3 створити обʼєкт на базі протиту іншого обʼєку (Object.create(інший_оʼєкт), або через __prototype__), створити одному в кожному форматі
//створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer)
//унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів

let engineer = Object.create(person);
engineer.name = "Stepan";
engineer.age = 56;
engineer.hight = 1.78;
console.log()
console.log(person);
console.log()
for (let key in engineer) {
    console.log(key + ": " + engineer[key]);
}


let QA_engineer = Object.create(engineer);
QA_engineer.name = "karl";
QA_engineer.age = 45;
QA_engineer.surname = "pavlov";
console.log()
for (let key in QA_engineer) {
    console.log(key + ": " + QA_engineer[key]);
}
