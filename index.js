// // alert("Hello world")
// // content: ["./src/**/*.{html,js}"],


// let name= "Samson"
// console.log(name)


// const sessionName = "Javascript"
// console.log(sessionName)

// var car="BMW "

// let num1=10, num2=30
// console.log(num1+num2)
// console.log(num1*num2)

// const condition = num1 < num2
// console.log(condition)

// let num3=50

// console.log(num3>=50)

// let isInRange = num3 >=40 && num3 <=60

// console.log(isInRange)

// isInRange = num3 >=50 || num3 >=100                                                                                  

// const names = ["Samson", "Oscar", "Jack", "40", "100"]
// console.log(names[2])

// const person ={
//     name: "Jack",
//     table: 3

// }
// const person2 = {
//     name: "Samson",
//     table: 3

// }
// console.log(person2.name)    

// function calculate(num1, num2){
    
// console.log(num1+num2)
// console.log(num1*num2)
// console.log(num1-num2)

// }

// calculate(10, 30)

// const people = [person, person2]

// for (let i = 0; i < people.length; i++)
// {
//     console.log(people[i])
// }


window.addEventListener("load", function(){
    const label = document.getElementsByTagName('label')
//     for(let i = 0; i < label.length; i++)
//      {
//         label[i].style.color= "blue"
//     }
//     

const neededLabel = document.getElementById("textarearlabel")
neededLabel.style.color = "blue"

const textarearInput = document.querySelector("#textarear")
textarearInput.addEventListener('input', function(event){
    console.log(textarearInput.value)})
})
alert("Welcome to my site!")

var VisitorName = prompt("What is your Full-Name?");

var VisitorFavoriteColor = prompt("What is your favorite color");

document.write("Hello " + VisitorName + " Your Favorite Color is "  + VisitorFavoriteColor)


