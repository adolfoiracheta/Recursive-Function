//Recursion Function Task 2
//Recursive function calls itself

function addUp(number) { //Initialization let i = 10
  if (number ==1) { //Condition i >= 1
    return 1 
  }
  return number+addUp(number-1) //Incrament/Decrement i--

}
console.log(addUp(5))  