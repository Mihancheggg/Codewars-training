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

//№5
function even_or_odd(number) {
  if (number % 2 == 0){
    return ("Even")
  } else{
    return ("Odd")
  }
}

//№6
function past(h, m, s){
  return(h*3600*1000 + m*60*1000 + s*1000)
}

//№7 (7 kyu)
function solution(str, ending){
  var b = ending.length;
  if (b == 0) {
    return (true)
  } else if (str.slice(-b) == ending.slice(-b)){
    return (true)
  } else{
    return (false)
  };
}

//№8 (7 kyu)
function noOdds( values ){
  var x = [];
  for (i = 0; i <= values.length; i++){
    if (values[i] % 2 == 0){
      x.push(values[i])
    } else{
      continue
    };
  } return (x);
} 

//№9 (7 kyu)
function getDivisorsCnt(n){
  var x = 0;
  for (var i = 1; i <= n; i++){
    if (n % i ==0){
      x++
    } continue;
  } return x
}

//№10 (7 kyu)
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  var age
  age = Math.floor(Math.sqrt(Math.pow(age1, 2) + Math.pow(age2, 2) + Math.pow(age3, 2) + Math.pow(age4, 2) + Math.pow(age5, 2) + Math.pow(age6, 2)
 + Math.pow(age7, 2) + Math.pow(age8, 2))/2);
  return age
}

//№11 (7 kyu)
function factorial(n){
  var fact = 1
  if(n > 1){
    for(var i = 1; i <= n; i++){
      fact *= i
    };
    return fact;
  }
  return fact;
}

//№12 (7 kyu)
function repeater(string, n){
  return (string.repeat(n));
}

//№13 (7 kyu)
function getEvenNumbers(numbersArray){
  let evenNumbers = numbersArray.filter(function(elem){
     if (elem%2 == 0){
       return (true);
     } else{
       return (false);
     }                        
  });
  return evenNumbers;
}

//№14 (7 kyu)