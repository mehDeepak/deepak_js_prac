let mycolor = ["red","blue","green"];
// console.log(mycolor);
// console.log(mycolor[0]);
// console.log(mycolor.length);
// let yourColor = ["white","skyblue","black"]
// mycolor.push(yourColor);
// console.log(newColor);
mycolor.push("deeepak","Bist");
// console.log(mycolor);
let removed = mycolor.pop();
// console.log(`your removed element is :`,removed);
let firstRemovedElm = mycolor.shift()
// console.log(`first removed element is :`,firstRemovedElm);
mycolor.unshift(1,3,4,5);
// console.log(`your unsifted array is : `, mycolor);

let myFriendName = ["Ram","Gopi","Axis"]
myFriendName.splice(0,1,"John","Dipendra")
console.log(`my updated friend lis is :`,myFriendName);

myFriendName.forEach (function(friendlists){
    // console.log(friendlists);
})

let myNumbers = [1,2,4]
let squared = myNumbers.map(function(num){
    return num * num;
});
// console.log(squared);
let numbers2 = [3,4,5,6,7,8]
let evenNumbers = numbers2.filter(function(num){
    return num % 2 ===0
})
console.log(`enven numbers are : ${evenNumbers}`);


