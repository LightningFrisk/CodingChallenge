function FirstReverse(str) { 

  let x = '';
  for (let i = str.length - 1; i >= 0; i--)
  {
    x = x + str[i];
    //console.log(x);
  };
  // code goes here  
  return x; 

};
   
// keep this function call here 
console.log(FirstReverse(readline()));