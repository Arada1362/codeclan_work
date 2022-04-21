// Functions Practice! 

// Complete each question by console logging the result of the function
// Think about what your functions and variable names should be called. Maybe try re using the function with different variables to make sure you've got it right.
// Remember to comment out previous answers so variable names dont clash!




// 1. Create a function that can take a string as an argument, and will return the length of the string
// Eg. Takes in "CodeClan" as an argument and returns 8
var name  = "codeclan"

 function lengthOfAString(string){
     var length = string.length
    return length
}

 lengthofName = lengthOfAString(name)
// console.log(lengthofName)




// 2. Create a function that can take 3 strings as an argument and will return the total length of all 3 strings
// Eg. Takes in "Code", "Clan", "Glasgow" and returns 15
var name1 = "code"
var name2 ="clan"
var name3 = "Glasgow"

function lengthOf3Strings(string1, string2, string3){
    var total = string1.length + string2.length + string3.length
    return total
}

var totalOfName = lengthOf3Strings(name1, name2, name3)
// console.log(totalOfName)




// 3. Create a function that takes in a string and returns the string in upper case 
// Eg. Takes in "CodeClan" and returns "CODECLAN"
var name = "codeclan"

function UpperCase(string){
    var ToUpperCase = string.toUpperCase()
    return ToUpperCase
}

var UpperCaseString = UpperCase(name)
// console.log(UpperCaseString)


// 4. Create a function that takes in a string and returns the string in lower case 
// Eg. Takes in "CodeClan" and returns "codeclan"
var name = "CODECLAN"

function LowerCase(string){
    var ToLowerCase = string.toLowerCase()
    return ToLowerCase
}

var LowerCaseString = LowerCase(name)
 // console.log(LowerCaseString)





// 5. Create a function that takes in a string and returns the first letter (Strings can work like arrays!)
// Eg. Takes in "CodeClan" and returns "C"




// 6. Create a function that will take in a string and return the first 3 letters of the string
// Eg. Takes in "CodeClan" and returns "Cod"





// 7. Create a function that will take in 2 strings, one for a name and one for a height, and return them in a sentence saying for example "Hvar
var name = "John,"
var height = " 5`11."

function NameOfDude(name, height){
    var NameAndHeight = "Hi " + name + "you are" + height
    return NameAndHeight
}

var HeightAndName = NameOfDude (name, height)
console.log(HeightAndName)



// Extension Questions (Try google!)


// 8. Create a function that takes in a string and returns it as an array 
// Eg. It takes in "CodeClan" and returns ["C", "o", "d", "e", "C", "l", "a", "n"]
let string = `codeclan`
split_string = string.split("");
// console.log(split_string);




// 9. Create a function that takes a string as an argument, and returns it in reverse
// Eg "CodeClan" will return as "nlaCedoC"



// 10. Create a function that will take in 3 strings and return the longest
// Eg. "I", "enjoy", "code" will return "enjoy"






