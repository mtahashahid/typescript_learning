/**
 * TASK : 14
 *  If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes 
 * at least three people you’d like to invite to dinner. Then use your list to print a message to each person, 
 * inviting them to dinner.
 */

// guests array
let guestList = ["Bilal","Faraz","Taha"];

// loop through the guest list for sending invitation
guestList.forEach((item,index)=>{
    console.log(`Hello, ${item} ! \nI would like to invite you to a dinner at my place.`);
})