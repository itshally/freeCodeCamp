/**
 * Author: itsHally
 * File: Factorialize a Number.js
 * Folder Path: freeCodeCamp/Basic Algorithm Scripting/
 * Note: The problem statement is not originally mine. I only solved this challenge on freeCodeCamp.
 * 
 * PROBLEM
 * ------------------------------------------------------------------------------------------------
 * Return the factorial of the provided integer.
 * 
 * If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 * 
 * Factorials are often represented with the shorthand notation n!
 * 
 * For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 * 
 * Only integers greater than or equal to zero will be supplied to the function.
 **/

function factorialize(num) {
    if(num <= 0){
      return 1;
    }else{
      for(var x = num - 1; x >= 1; x--){
        num *= x;
      }
      return num;
    }
  }
  
  factorialize(5);