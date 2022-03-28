//№1
function makeNegative(num) {
    if (num>0){
      return (-num)
    } else {
      return(num)
    }
  }

//№2
function hero(bullets, dragons){
  if (bullets >= dragons*2){
    return(true)
  } else {
  return(false)
  }
  }

//№3
function greet(name){
  return ("Hello, " + name + " how are you doing today?")
}

//№4
function century(year) {
  if (year % 100 == 0){
    return (year / 100);
  } else{
    return (Math.floor(year / 100) + 1)
  };
}

//№
function even_or_odd(number) {
  if (number % 2 == 0){
    return ("Even")
  } else{
    return ("Odd")
  }
}