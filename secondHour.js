
let x = 0 ;

// if (x < 10 || x == 10) {
//     console.log("bad");
// }else{
//     console.log("Good");
// }

// switch (x) {
//     case 9:
//         console.log("bad");
//         break;
//     case  10 :
//         console.log("Good");
//         break; 
// }


// while (x <= 10) {
//     console.log(x);
//     x++ ;
// }

// do {
//     console.log(x);
//     x++;
// } while (x <= 10);



console.log(Hello("walid Aguib" , 23));

function Hello(name , age)  {
    
    return `my Name is ${name} , I am ${age}`
}

x == 10 ? console.log("Good") : console.log("Bad");

console.log(x);

let x1 = x.toLocaleString("ar-AR",{style : "currency" , currency : "GBP" })
console.log(x1);