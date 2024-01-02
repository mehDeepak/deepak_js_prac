//using the prototype pattern 
function Person(firstName,lastName){
    this.firstName = firstName;
    this.lastName= lastName;
}

// Adding a method to the prototype
Person.prototype.fullName=function(){
    return this.firstName + " " + this.lastName;
};
// Creating an instance of the Person object


let person = new Person("Deepak","Bist")
// console.log(person);

//calling a fucntion
// console.log(person.fullName());

//combine object
let obj1 = {
    1:"deepak",
    2:"Beldandi"
};
let obj2 = { 
    3:"Ram",
    4: "Dhangadi"
};
let obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);
// console.log(obj3 === obj1);
// console.log(`The value of obj3 is :${Object.values(obj3)}`);
// console.log(`The keys of obj3 is :${Object.keys(obj3)}`);
// console.log(obj1.hasOwnProperty('1'));

//destructure 

let course = {
    courseName:"Advanced in Js",
    courseFee: 3000,
    courseInstructor: "Deepak Bist"
}

const{courseInstructor,courseName,courseFee}= course

console.log(`The name of course Instructor : ${courseInstructor}`);
console.log(`The total fee of ${courseName} is : ${courseFee}`);

