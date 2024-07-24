let a = 10;
if (a<10){
    console.log("hii")
}
else{
    console.log("bye")
}

// nested
let b=5;
let c=10;
if (c<b){
    console.log("c is small");
    if (c==b){
        console.log("c is equal to b")
    }
}
else{
    console.log("c is greater")
}

let l=3;
let k=3;
let d=9;
if (l<k){
    console.log("k is greater")
}
else if (k<d  && d<l) {
        console.log("d is greater")
    }

else {
    console.log("l is greater")
}

// loop
let j=500;
for( let i =5 ; i<=j ; i++){
    console.log(i);
}
