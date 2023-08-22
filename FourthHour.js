let x =  [1,2,3,4,5] ;


function shuffle(array){
    let currentIndex = array.length;

    while(currentIndex != 0){
        let random = Math.floor(Math.random * array.length) ;
        currentIndex -= 1 ;

        let temp = array[currentIndex] ;
        array[currentIndex] = array[random]
        array[random] = temp 
    }
    return array
}
console.log(shuffle(x));

//-------Maps

let map = new Map(
    [
        ["id",1],
        ["name" , "walid"]
    ],
    [
        ["id",2],
        ["name" , "walid"]
    ]
)

console.log(map.keys.length);

