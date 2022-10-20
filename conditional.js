const expr= 'lift';
switch (expr){
case 'level 1':
  console.log('Level 1 is the second level.');
  break;
  case'level 3':
  case 'level 4':
    console.log ('level 3 is not the highest level')
    //expected output is true
    break;
    default:
      console.log('we are out of space. ')
}
//switch
let elevator = 2

switch(elevator){
  case 1:
    console.log("Elevator 1")
    break;
    case 2:
      console.log("Elevator 2")
      break;
      case 3:
        console.log("Elevator 3")
        break;
        default:
          console.log("impossiblr")
}

//for loop
//console.log("code:" + 1)
//console.log("code:" + 1)
//console.log("code:" + 1)
//console.log("code:" + 1)

for(let z=1; z<=5; z++) {
  console.log("code:" + z)
}
for(let z=1; z<=5; z=z+2){
  console.log("code:"+ z)
}

//while loop
let m =1
while(m <= 5){
  console.log("codee:" + m)
  m++
}
//Array

var names = [1,3,4];
console.log(names[0])

names[0] = 6
console.log (names[0])

var names = ["Zahra, Rahma, Mariam"];
console.log(names[0])

names [0] = "Zhara"
console.log(names[0])

//F0r In
var names = ["Zahrah", "Malik", "Hawa"]

for(let z in names){
  console.log (names[z])
}

//do..while..loop
//For...of..loop
//For...each....loop

//Mkae an array of names that include your name
//use each of these to (iterate/going through) through your array
//when we reach your name print this is my name