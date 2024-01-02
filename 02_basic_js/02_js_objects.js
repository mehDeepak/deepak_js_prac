
//non-single ton object
let myObj = {
    name:"deepak",
    fistName: "Emi",
    LastName : "Damn",
    age:30,
    nationality: "Nepali",
    "my class" : 9,
    myFullName: function(){
        return this.fistName + " " + this.LastName
    }
   
}
console.log(myObj.myFullName());

// console.log(myObj.name);
myObj.newfunc= function(){
    // console.log(`my name is ${this.name} and i am ${this.age} year old`);
}
myObj.newfunc();
// console.log(myObj["my class"]);
//single ton object
const newUser = new Object();
newUser.id = "abc12"
newUser.name = "Deepak"
newUser.isLoggedIN = true
// console.log(newUser);
// console.log(newUser.name);
const userdata = {
    fullname:{
        username:{
            firstName:"deepak",
            lastName:"Bist"
        }
    }
}
console.log(userdata.fullname.username.firstName);





