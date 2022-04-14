//variables
// 4 Ways to Declare a JavaScript Variable:
// Using var
// Using let
// Using const
// Using nothing



// in const we cannot change the value but in var we can change values
// var= function scope
// let(mostly used) & const =Block Scope

//const

// const myName = "sonam gupta"
// console.log(myName)




//var

// var myName = "sonam gupta"
// myName="geda"
// console.log(myName)



//let

// let myName = "sonam gupta"
// myName="geda"
// console.log(myName)



//another difference of let ,var and const

// function js(best){
//     if(best){
//         var name="sonam"
//         var sname="gupta"     //bcoz var const are function scope
//     }
//     console.log("my name is "+name +" "+sname)
// }
// js(true)



// function js(best){
//     if(best){
//         let name="sonam"
//         const sname="gupta"    //bcoz let const are block scope
//     }
//     console.log("my name is "+ name +" "+sname)
    
// }
// js(true)



//another difference let,const,var


//var
    // var name="sonam"
    //    if(true){
    //        var name = "gupta"
    //        console.log(name )
    //    }
    // console.log(name) //because 


//let
    // var name="sonam"
    //    if(true){
    //       let name = "gupta"
    //        console.log(name )
    //    }
    // console.log(name) //because it assume both var are diff








//scope of variables















//hoisting

// x = 5; // Assign 5 to x

// document.write(x);

// var x; // Declare x









//Datatypes

//  var Myname = "sonam Gupta"
// console.log(Myname)



 /*** number  ***/


// var myage = 26
// console.log(myage)
// console.log(typeof(myage))



 /*** string ***/

// var Myname = "sonam Gupta"
// console.log(Myname)
// console.log(typeof(Myname))



/*** boolean ***/

// var iAmSonam = true
// console.log(iAmSonam)
// console.log(typeof(iAmSonam))




/*** undefined ***/

// var iAmgood
// console.log(iAmgood)
// console.log(typeof(iAmgood))




/*** null ***/

// var iAmgood = null
// console.log(iAmgood)
// console.log(typeof(iAmgood))// bug




/*** NaN ***/

// var myphonenumber = 8224083829
// var myName = " technical"
// console.log(isNaN(myphonenumber))
// console.log(isNaN(myName))












//object








//opertators











//type conversion







//loops

// for in loop
// var myFriends = ['sonam','riya','aakash','som']

// for(let elements in myFriends)
// console.log(elements)



//for of loop

// var myFriends = ['sonam','riya','aakash','som']
// for(let elements of myFriends){
// console.log(elements)     //it used in iterable objects(iterable objects means like arrays,strings)
// }



//forEach loop= forEach() calls a function for each element in an array

// var myFriends = ['sonam','riya','aakash','som']
// myFriends.forEach(function (element, index, array){
//     console.log(element + " index : " + index) 
// })


// var myFriends = ['sonam','riya','aakash','som']   // forEach Loop by fat arrow function
// myFriends.forEach((element, index, array) => {
//     console.log(element + " index : " + index) 
// })









//Arrays


// var myFriends = ['sonam','riya','aakash','som']
// console.log(myFriends[2])


//if we want to check the length of elements of an array
// console.log(myFriends.length)










//object referencing








//this keyword







//generic functions









//constructor












//synchronous and asynchronous

//it will exectuing line after the other line so it is syn
// var a=1;
// var b=2;
// var c=3;
// console.log(a);
// console.log(b);
// console.log(c);


//first it will print out a then it will delay the time 5sec becoz we take 5000 then it will print this isasync
// var a=5;
// setTimeout(function(){
//     console.log("loaded page")
// },5000)
// console.log(a);



//spread operator

// var arr= [10,20,30];
// var arr1= [...arr,40,50,60]
// console.log(arr1);












//rest operator

// function sum(b,...a){  //3 dots help to receive all parameter pass to a function
//     console.log(b,a);
// }
// sum(5,6,7);














//destructing
// var a= ["javascript", "sixmonth", "codemantra"];
// var [courseName, duration, tutor]= a;
// console.log(courseName);
// console.log(tutor);








//events


// function hello(){
//     alert("hello team")
// }










//DOM









//query selector















//promise
