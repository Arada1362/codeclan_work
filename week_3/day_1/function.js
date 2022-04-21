function sayHello(name){
 //   console.log("Hello " + name)
 var greeting = "Hello " + name
 return greeting

}


var newGreeting = sayHello("craig")

// console.log(newGreeting)

function timeOfDay(time, date){
    var timeAndDate = "The time is " + time + " on " + date
    return timeAndDate
}

var todaysDate = timeOfDay("10:48", "11th of April")
// console.log(todaysDate)

var todaysDate2 = timeOfDay("11:25" , "12th of April")

// calculator 

function add(firstNumber, secondNumber){
    var result = firstNumber + secondNumber
    return result
}

var answer = add(1, 4)
console.log(answer)

// subtract, multiply and divide

function subtract(num1, num2){
    return num1 - num2
}

// i want to pass in a string and get returned the length of the string
var name = "craig"



function lengthOfAString(){
    var length = String.length
    return length

}

var lengthOfName = lengthOfAString(name)
// console.log(lengthOfName)

// i want the total length of 2 strings added together

function lengthOf2Strings(string1 , string2){
    var length = string1.length + string2.length
    return length
}

var lenghtof2Name = lengthOf2Strings("Arad" , "Arad")
console.log(lenghtof2Name)