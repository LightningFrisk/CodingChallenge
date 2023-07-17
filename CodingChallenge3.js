function LongestWord(sen) { 

    sen=sen.replace(/[^a-zA-Z ]/ig,''); //this removes all special characters which is neato
    x = sen.split(" "); //splits this into an array of words with no spaces
    y = x[0]; //selects first word in array
  
    for (i = 0; i<x.length; i ++) {
        if (x[i].length > y.length) { //comparison
          y = x[i];
        }
    }
   return y; //I feel like a psycho by using these variables but I also don't want to change it.
  
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));