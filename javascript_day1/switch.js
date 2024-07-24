// // Switch
// let item = "pizza";
// switch(item){
//     case 'drink':
//     console.log("enjoy your drink");
//     break;
//     case 'burger':
//     console.log("enjoy your burger");
//     break;
//     case 'salad':
//     console.log("enjoy your salad");
//     break;
//     case 'momos':
//     console.log("enjoy your momos");
//     break;
//     default:
//         console.log("enjoy your meal")
// }


let day= new Date().getDay();
let dayName;

switch (day) {
    case 1:
        dayName=="sunday";
        break;
    case 2:
        dayName=="monday";
        break;
    case 3:
        dayName=="tuesday";
        break;
    case 4:
        dayName=="wednesday";
        break;
    case 5:
        dayName=="thursday";
        break;
    case 6:
        dayName=="friday";
        break;
    case 7:
        dayName=="saturday";
        break;
            
    default:
        dayName=="Invalid day";
        break;
}
console.log(day);