/**
 * Author: itsHally
 * File: Repeat a String Repeat a String.js
 * Folder Path: freeCodeCamp/Basic Algorithm Scripting/
 * Note: The problem statement is not originally mine. I only solved this challenge on freeCodeCamp.
 * 
 * PROBLEM
 * ------------------------------------------------------------------------------------------------
 * Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
 **/

function repeatStringNumTimes(str, num) {
    // repeat after me
    if(num < 0){
      return "";
    }else{
      for(var x = 0, strRepeat = ""; x < num; x++){
        strRepeat+=str;
      }
    return strRepeat;
    }
  }
  
  repeatStringNumTimes("abc", 3);