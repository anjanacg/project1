// Do not change any of the function names

const getBiggest = (x, y) => {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if(x>y)
  {
    console.log(x);

  }
  else if(x==y){
    console.log(x);
  }
  else{
    console.log(y);
  }
};
getBiggest(4,3);

const greeting = (language) => {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Spanish' -> 'Hola!'
  // language: 'Chinese' -> 'Ni Hao!'
  // if language is undefined return 'Hello!'
  let greet="";
  switch(language)
  {
    case "german":
    greet="Guten Tag!";
    break;
    case "Spanish":
      greet="Hola!";
      break;
      case "Chinese":
        greet="Ni Hao";
        break;
        default:
          greet="hello";
  }
  console.log(greet);
};
greeting("Chinese");

const isTenOrFive = (num) => {
  // return true if num is 10 or 5
  // otherwise return false
  if(num==10|num==5)
  {
    console.log("true");
  }
  else{
    console.log("false");
  }
};
isTenOrFive(11);

const isInRange = (num) => {
  // return true if num is less than 50 and greater than 20
  if(num<50 & num>20)
  {
    console.log("true")

  }
  else{
    console.log("false")
  }

};
isInRange((35));

const isInteger = (num) => {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  return (num === parseInt(num, 10)) ? true : false;
};
isInteger (-10);


const fizzBuzz = (num) => {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if((num%3===0 && num%5===0))
  {
    console.log("fizzbuzz");

  }
  else if(num%5===0)
  {
    console.log("buzz");
  }
  else if (num%3===0)
  {
    console.log("fizz");
  }
  else {
console.log(num);
  }
};
fizzBuzz(15);

const isPrime = (num) => {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  var i,m=0;
  var flag=0;
 //it is the number to be checked    
  var m=num/2;      
  if(num==0||num==1){  
  console.log(num+" is not prime number");      
  }else{  
   for(i=2;i<=m;i++){      
    if(num%i==0){      
    console.log(num+" is not prime number");      
     flag=1;      
     break;      
    }      
   }      
   if(flag==0)  
   { console.log(num+" is prime number"); }  
  }//end of else  
}    
isPrime(8);

const returnFirst = (arr) => {
  // return the first item from the array
  var arr = ['first', 'second', 'third', 'fourth', 'fifth'];
  console.log(arr[0]);
};
returnFirst()

const returnLast = (arr) => {
  // return the last item of the array
  var arr = ['first', 'second', 'third', 'fourth', 'fifth'];
  console.log(arr[4]);
};
returnLast();


const getArrayLength = (arr) => {
  // return the length of the array
  var arr = ['first', 'second', 'third', 'fourth', 'fifth'];
  console.log(arr.length);
  
};
getArrayLength ();


const incrementByOne = (arr) => {
  // arr is an array of integers
  // increase each integer by one
  // return the array
  arr=[30,20,45,6];
  for(let i=0;i<arr.length;i++)
  {
    arr[i]++;
  }
  console.log(arr);
}
incrementByOne();


const addItemToArray = (arr, item) => {
  // add the item to the end of the array
  // return the array
  
};

const addItemToFront = (arr, item) => {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
};
addItemToFront([1, 2, 3]);

const wordsToSentence = (words) => {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  for (var i = 0; i < words.length; i++) {
    words[i] + ' ';

}
    console.log(words);

};
wordsToSentence(['this', 'is', 'a', 'sentence']);
const contains = (arr, item) => {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
};

const addNumbers = (numbers) => {
  // numbers is an array of integers.
  // add all of the integers and return the value
  var sum=0;
  for(let i=0;i<4;i++)
  {
     sum=sum+numbers[i];
  }
  console.log(sum);
};

addNumbers([20,30,40,50]);
const averageTestScore = (testScores) => {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
};

const largestNumber = (numbers) => 
{
  // numbers is an array of integers
  // return the largest integer
  numbers.sort();
  console.log(numbers);
  let large=numbers.length-1;
  console.log(large);
};

largestNumber([20,3,1,8]);

// Do not modify code below this line.
// --------------------------------


module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
};
