// variable to store name
let myName = "Muhammad Taha";

// convert myName to upper case
myName = myName.toUpperCase();
console.log(myName);

// convert myName to lower Case
myName = myName.toLowerCase();
console.log(myName);

// convert myName to title case
const toTitleCase = (myName) => {
    return myName.toLowerCase().split(' ').map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}
let titleCase = toTitleCase(myName);
console.log(titleCase);