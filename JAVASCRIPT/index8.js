// // DOM CLASS 4
// setTimeout(function(){       //async
//     console.log("third");
// },3000)

// function sync(){       //sync
//     console.log("first");  
// }
// sync();
// console.log("second"); //sync



// // Promise
// let meraPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("hlo bro how are you");
//     }, 5000);
//     // resolve(22338888);         //then() on line 24 will print if fulfilled(resolved)
//     reject(new Error("bhaisahab error aya hai"));  // //error() on line 26 will print error if not fulfilled or rejected.
// });
// console.log("bol bhai")

// // meraPromise.then((value)=>{console.log(value)});

// meraPromise.then((error)=>{console.log("received an error")});



//  we can resolve and reject t  he promise if we want
// the asynchronous part of code that we want to run, but not instantly , and promise makes sure that the code runs in back successfuly or reject it.

// IMP notes
// if promise fulfilled or resolved after that "than" handle the situation next, and if it rejected then it is handled by the "catch"




// let waadaa1 = new Promise(function(resolve, reject) {
//     setTimeout(()=> {
//         console.log('setimeout1 started');
//     },2000);
//     resolve(true);
// })

// let output = waadaa1.then(() => {
//     let waadaa2 = new Promise(function(resolve, reject) {
//         setTimeout(()=> {
//             console.log('setimeout2 started');
//         },3000);
//         resolve("waada 2 resolved");
//     })
//     return waadaa2;
// })

// output.then((value) => console.log(value)); //then says whether the code is executed or not after resolved



// async function abcd() {
//     return "kya hua tera";
// }



async function utility() {           //both delhimausam and hyd mausam are wrapped inside async code. 

    let delhiMausam = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Delhi me bhot garmi hai");
        },5000);
    });

    let hydMausam = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Hyderabad is Cool");
        },6000);
    });

    let dM = await delhiMausam;
    let hM = await hydMausam;

    return [dM, hM];
}

async function utilityy(){
  let result = await utility();
  console.log(result);
  // result();
}
utilityy();
//we can't use then() many times again and again. so we use await() so that code don't run parallallely but one after other. ex: line 6 will be executed after 5 not same time.   



// let obj = {
//     heading:"head"
// };


// async function utility() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(output);
// }
// utility();




async function helper() {

    let options = {
        method: 'POST',
        body: JSON.stringify({
          title: 'Babbar',
          body: 'Tagdi Body ',
          userId: 1998,
          weight: 90,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    };
    
    let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response =content.json();  //we can write await here also
    return response;
}

// async function utility() {
//     let ans = await helper();
//     console.log(ans);
// }

// utility();
helper().then(value=> console.log(value)).catch((error)=>console.log(error));;



//there are different methods to use like json, text,blob for converting the fetched data.



// function init() {
//     let name = "Mozilla"; 
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     return displayName;
// }
// let a = init();
// a();



//extra notes
// JSON.stringify() is a method in JavaScript that converts a JavaScript object or value to a JSON string. This method is typically used when you need to send data to a server or store it in a file, as JSON (JavaScript Object Notation) is a common format for data interchange.
// example:
// const obj = { name: 'John', age: 30 };
// const jsonString = JSON.stringify(obj);
// console.log(jsonString); // Output: '{"name":"John","age":30}'




