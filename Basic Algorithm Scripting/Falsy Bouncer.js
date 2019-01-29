/**
 * Author: itsHally
 * File: Falsy Bouncer.js
 * Folder Path: freeCodeCamp/Basic Algorithm Scripting/
 * Note: The problem statement is not originally mine. I only solved this challenge on freeCodeCamp.
 * 
 * PROBLEM
 * ------------------------------------------------------------------------------------------------
 * Remove all falsy values from an array.
 * 
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 * 
 * Hint: Try converting each value to a Boolean.
 **/

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    return arr.filter(Boolean);
  }
  
  bouncer([7, "ate", "", false, 9]);