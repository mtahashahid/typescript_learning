/**
 * TASK: 13 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
 * The text of each message should be the same, but each message should be personalized with the person’s name.
 */

// Array of names that should be printed
let names = ["faraz","bilal","taha"];

// loop through array of names to print message
names.forEach((item,index)=>{
     console.log(`${index+1}: Hello, Dear ${item} !`);
})