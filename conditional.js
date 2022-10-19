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
