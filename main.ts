console.log("Hello Object!");

// objects

 const myProperties1 = {
name: "Asma",
age:   25,
rollNo: 1234,
address: {                               // (nested object) means object k andr object
    city: "Karachi",
    country: "Pakistan",
    postalCode: 1000,
}
}

console.log(myProperties1);
console.log(myProperties1.address.country);

console.log(myProperties1.age);       // dot notation
const userprompt = "name"
console.log(myProperties1["age"]);
console.log(myProperties1[userprompt]);

let myProperties:{
    name:string, 
    age:number, 
    address:string, 
    rollNo:number,
    contactNo:number,
} = {
    name: "Asma",
    age: 25,
    address: "Majeed Colony sector # 1, A 992 Landhi Karachi No 22",
    rollNo: 1234,
    contactNo: 3102345678,
}
console.log(myProperties);

//union  //union litrals // union type (3 names hain)
let rollNo: string | number;
    rollNo = "PIAIC-12345";
    rollNo = 98005; 
    
    console.log(rollNo);
5
//=================== friend information======================
let myFriendInformation:{
name:string,
f_name:string
class_1:string,
roll_num:number,
contact:number,
address:{
city:string,
country:string,
area:string,}
} = {
name:   "Nabila",
f_name:  "nannay khan",
class_1:  "2nd year",
roll_num: 44567, 
contact:  3210145677,
address:{
   city:  "Karachi",
  country: "Pakistan",
  area:"B/4 109 Lines Area Karachi"}
}
console.log(myFriendInformation)
console.log(myFriendInformation.address.city);   //  dot notation








