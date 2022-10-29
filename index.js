

//functions
function add(){
    console.log(2+3)
    return 2+3;
}
add()

function add(){
    return 2*3

}

//const result = add()
//console.log(result)


function add (a,b){
    return a+b
}

const result = add(2,6)
console.log(result)
const x = add(1,9)
console.log(x)

//class Person
class Person{
    constructor(name,age,gender){
      this.name=name;
      this.age=age;
      this.gender=gender;  
    }
    eat(params){
        console.log(params)
    }
drink(params){
    console.log(params)
}
}
let ruth =new Person("ruth",40,"female");
ruth.age
ruth.name
ruth.gender
ruth.eat("chips chicken ne nkoko")
ruth.drink ("juice")
console.log(ruth)

//let babra =new Person("barbra", 20, "Female");
//babra.eat("sweetpotatoes");
//console.log(babra)
