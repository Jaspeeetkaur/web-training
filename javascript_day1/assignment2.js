// if else
let age= 16;
if (age>=18){
    console.log("you are eligible for driving");
}
else{
    console.log("you are not eligible for driving");
}


let x="its raining outside";
if (false){
    console.log("you can not go outside");
}
else{
    console.log("you can go");
}

// nested if
let num =10;
if (num>=5){
    if(num>=9){
        console.log("num is greater than 5 and 9");
}
    }
else{
    console.log("num is smaller than 5 and 9");
} 

// elseif
const size = 0;
if(size>100){
    console.log("big");
}
else if (size > 40){
    console.log("medium");
}
else if (size > 20){
    console.log("small");
}
else  {
    console.log("tiny");
}


const value = 70;
if(value>100 || value >80){
    console.log("big");
}
else if (value >50 && value> 30){
    console.log("medium");
}
else  {
    console.log("Small");
}

// conditional statements
// for loop
// let fruits =["apple", "banana" ,"mango"];
// for(i= fruits; i<fruits.length; i++){
    // console.log(i);
// }
let j=100;
for( let i =5 ; i<=j ; i++){
    if(i>90){
        break;
    }
    console.log(i);
}


let k=100;
for( let i =0 ; i<=k ; i++){
    if(i==90){
        continue;
    }
    console.log(i);
}


// while
let z =10;
while(z<20){
    console.log(z);
    z++;
}


// do while

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);
console.log(result);

// Switch
let item = "pizza";
switch(item){
    case 'drink':
    console.log("enjoy your drink");
    break;
    case 'burger':
    console.log("enjoy your burger");
    break;
    case 'salad':
    console.log("enjoy your salad");
    break;
    case 'momos':
    console.log("enjoy your momos");
    break;
    default:
        console.log("enjoy your meal")
}