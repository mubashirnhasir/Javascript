// const myName = "Mubashir Nisar" // Cannot be changes if declared once
// let emailId = "mubashirnhasir@gmail.com" //this is a block space variable and cannot be redeclared in same block
// var password = "123123123" // can be easily changed everywhere in your code
// let newValue

// console.table([myName, emailId, password, newValue])


// number
// bigint
// null
// undefined
// string
// boolean
// object


// console.log(typeof "age")

// console.log(typeof [1,"hello",32])

// let score = 12123
// console.log(typeof score)

// // let numberScore = Number(score)
// // console.log(numberScore)

// let stringNumber = String(score)

// console.log(typeof stringNumber)

// Data types conversions
// Number => to convert into numbers from strings
// String => to conbvert into strings from numbers
// Boolean => to change into true or false 1 => true 0 => false ;


// let age = -2
// console.log(age)

// let user = {
//     email:"mubashirnhasir@gmail.com",
//     number:"123123",
//     job:"UIUX Designer"
// }

// changedUser = user.number
// newUser = changedUser

// console.log(user)
// console.log(changedUser)
// console.log(newUser)


// let name = "Mubashir"
// let age = 21
// let job = "Talent Cogent"

// console.log(`my name is ${name} age is ${age} and doing job at ${job}`)

// let name = new String("Mubashir")
// console.log(name.toUpperCase())

// const name = "mubashir nisar"
// let newString = name.subString(0 , 5)

// console.log(newString);

// object destructuring

// let obj = {
//     fname: "Mubashir",
//     lname: "Nisar",
//     number: "123123"
//     }

// const {fname : fs, lname: ln} = obj 
// console.log(`${fs} ${ln}`)

// let [firstName , lastName , num] = ["Mubashir" , "Nisar" , 123123]

// console.table([firstName,lastName,num])

// function myCity(city,state){
//     const address = {mycity: city,mystate: state}
//     console.log(address)
// }

// myCity("Hyderabad", "Telangana")


// let salaries = [500,100,200,300]
// let totalSal = 0

// for(const income in salaries){
//     // console.log(salaries)
//     totalSal += salaries
    
// }
// console.log(totalSal)

// let example1 = {
//     fname:"mubashir",
//     lname: "nisar"
// }

// let example2 = {
//     ...example1,
//     num:1231232
// }

// console.log(example2)

// function addingofnumber(...numbers){
//     let total = numbers.reduce(function(x,y){
//         return x+y
//     })
//     console.log(total)
// }

// addingofnumber(1,2,34,5,21,2,3,12,22,2)

// let arr = [12,22,11,2,31,21,22]

// console.log(arr.indexOf(12));

// const apiUrl = 'https://dummyjson.com/carts'
// async function apiFetch() {
//     const response = await fetch(apiUrl)
    
//     const json = await response.json()
//     console.log(json.carts[1].products[2].thumbnail)
// }
// apiFetch()

// function resolveAfterTime (){
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             resolve('Resolved')
//         },5000)
//     })
// }

// resolveAfterTime().then((data)=>{
//     console.log(data)
// })

// let mySym = Symbol("Mubashir")

// let obj = {
//     myname: "Mubashir Nisar",
//     [mySym]:"Mubashir",
//     num: 212313
// }

// console.log(obj[mySym]);

// const tinder = new Object()

// tinder.name = "mubashir"
// tinder.num = 12321232
// tinder.age =21
// tinder.isLoggedIn = false


// console.log(tinder)

// let obj1 = {1:"abc",3:"wer"}
// let obj2 = {2:"xyz",4:"rew"}

// let obj3 = Object.assign({}, obj1 ,obj2)
// console.log(obj3)

// let obj = {
//     email: "mubashirnhasir@mail.com",
//     num: "123123123",
//     password: false
// }

// const {email: em} = obj

// console.log(em)

