// functions are block of codewhich we execute to complete a task by calling it.
// functions are reusable and easy to understand in comparison of lass and object.
// function type
// name function
// arrow function
// anonymous function
// callback function

function myfunction(a,b){
    return a+b;
}
console.log(myfunction(3,3));


// name function
function nicki(){
    console.log("hii");
}
nicki()

// arrow function
const func = () =>{
    console.log("bye");
} 
func()

// anonymous function :- fast calling
x= (()=>{
    console.log("hey");
})();


let c = function(a,b){
    console.log("addition is" , a+b);
    console.log("subtraction is" , a-b);
};
c(3,5)


// callback function:- hell
// pair of key and values are properties
//  pair of properties are object
let info ={
    name: "ram",
    age : 18,
    city: "banga",
    friend :{
        name: "sita",
        age : 17,
        city: "nawanshahr"
    }
}
console.log(info.friend.age);

// immediate call
(function() {
    let x = 10;
    console.log(x);
  })();

// Using an anonymous function as a callback
  let numbers = [1,2,3,4,5];
  numbers.forEach(function(number){
    console.log(number);
  });
	

// map
let values = [1,2,3,4,5];
let doublevalues = values.map(val => val * 2);
  console.log(values)
  console.log(doublevalues)

// In this example, we are using an anonymous function as a callback for the **click** event of a button.
//  When the button is clicked, the anonymous function is executed, which logs a message to the console.
// let button = document.querySelector('button');
// button.addEventListener('click', function(){
//     console.log("button clicked!");
// });
 let sum = (a,b) => a+b;
 console.log(sum);
 console.log( sum(9,6));
  

  