let  fullnAme: string = "Ghous";
console.log(fullnAme)

// example of  strong string

let numbers : number =75950;
console.log(numbers)

//example ofstrong number

let soMesoMe: boolean = false;
console.log(soMesoMe)

//example of strong boolean 

let inDone : any = 3052006;
console.log(inDone)

//example of strong any 

let mYnamE ="Ghouse Ahmed";
console.log(mYnamE)

//example of string 

let numerical = 786;
console.log(numerical)

//example of number

let boolean =true;
console.log(boolean)

//example of boolean


              // types of writting
// cameLCase
//snake_case
//PascalCase

let userName: string = "Ghous"// e.g. camelCase
let user_name: string  = "Ahmed" //e.g. snake_case
let UserName :string = "Awan" //e.g. PascalCase


let isUserExist: boolean  = true;
let is_user_exist: boolean  = false;
let IsUserExist: number = 123; 
let anyType =


// = is assigment operator
console.log(userName, user_name, UserName)
console.log(isUserExist, is_user_exist, IsUserExist)
console.log(anyType)


//arrays=> []
//=> 0,..... 
//array address in list

let students = ["Adil", "Hassan", "Hussain",0,90,true]
let firststudentName = students[0] 
console.log(firststudentName)

console.log (students)
console.log(students[5])
console.log(students[3])

// if we wonna exist one name in list
let friends = ["Ameen", "Ali", "Ahmed"]
console.log(friends)

let student: string[] = ["Alam"]
console.log(student[0])
//example that who can we make array conform to accept only string . it can also work in any type of types of writing in typescript

let numberArray: number[] = [1,2,3,4]
console.log(numberArray)

//example of array of number

let booleanArray: boolean[] = [true,false]
console.log(booleanArray)

//example of array of boolean 

let zuserName: string = "Umer"
zuserName = "Khan"
console.log(zuserName)


//do it in array

     //string in example:

let fruits: string[] =["apple", "banana", "orange"]
fruits[1] = "grapes"
console.log(fruits)

     //boolean in example:

let game: boolean[] =[true,false]
game[0] = false
console.log(game)

// objects =>{}  => {key: value} pair

let user ={
     key: "value",
     key2: 234,
     key3: true,
     key4: " Ahmed",
     firstname: "Muhammad",
};

let student1 = {
     fullname: "example",
     classId:"ABC",
     rollnumber: 25,
     email:"example@b.com",
     ispassed: true,
};

//array of abject:

let student2 = {
     fullname: "example 2",
     classId:"ABC",
     rollnumber: 25,
     email:"example@b.com",
     ispassed: true,
     subjects: ["English" , "urdu" , "programming"]
};
console.log(user)
console.log(student1)
console.log(student2)



let student3: any[] = [student, student2,{
     fullname: "example 2",
     classId: "ABC",
     rollnumber: 25,
     email: "example@b.com",
     ispassed: true,
     subjects: ["English", "urdu", "programming"]
}];

console.log(student3[2].subjects[1])
     //[] =>
     // [value, value2, value3]
     //["a","b"] => arr of string
     //[[], [], []] => arr of array
     //{} => empty object
     //{key:value}
     //{key: "a", key2: [] }
 

 console.log(student3)


 let arr = [{}, {}, [], {}]
 let objects = {
     key:{
         key:{}
     },
 };
 console.log(arr)
 console.log(objects)
 
 //thats called nested array
 let array = [ {
     name: "Ghouse",
     number:123,
     key:{ 
          half: "Boiled",
          light  :"Egg",

     }
 }]
console.log(array)

// concatination use +

                  //type of object: