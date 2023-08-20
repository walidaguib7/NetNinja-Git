let names = ["walid","islam"] ;

names.push("amir") ; // add 
names.pop() ; // delete
names.unshift("yasser") ; // add from the begining
names.shift() ; // delete from the begining

console.log(names.length);


for (const name of names) {
    console.log(name);
}
for (let name in names) {
    console.log(name);
}

let sorted = names.sort();

console.log(sorted);

// Spread Operators

let x = [1,2,3,4,5] ;



console.log(Math.max(...x));


let xv = [...names , ...x];

console.log(xv);

// rest parameters



function Calc(...numbers) {
    for(let num of numbers) {
        console.log(num);
    }
}

Calc(1,2,3,4)

//CallBack

Sum(10,20,CallBack) ;

function Sum(x,y,fun) {
    let res = x * y ;
    fun(res)
}


function CallBack(x){
      console.log(x);
}

names.forEach(function (e,i,a) {
      console.log(e[i] + " " + a);
})

let y = x.map(function (e) {
      return e * 10 ;
})

console.log(y);

let z = y.filter(function(e){
    return e != 20 ;
})
console.log(z);

let w = z.reduce(function (total,e){
    return total + e ;
})

console.log(w);
//anonymous functions

let greet = function() {
    console.log("hello");
}

greet();