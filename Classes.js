class A{
    constructor(id,name,age){
        this._id = id ;
        this._name = name ;
        this._age = age ;
    }


    get id(){
        return this._id ;
    }
    get name(){
        return this._name ;
    }
    get age(){
        return this._age ;
    }

    set id(id){
      this._id = id ;
    }
    set name(name){
        this._name = name ;
    }
    set age(age){
        this._age = age ;
    }


    Hello() {
      console.log(`Hello my name is ${this.name} , I am ${this.age}`)    
    }
}

let a = new A(1,"walid",23) ;

a.id = 2 ;
a.name = "wael"

function obj(o){
    console.log(o.id);
}

new A("3","sdsds",12).Hello();

a.Hello();