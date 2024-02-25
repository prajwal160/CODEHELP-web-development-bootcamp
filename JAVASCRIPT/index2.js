// class 2 javascript                                  .....class 2...........

// console.log('Chaliye shuru karte hai ');

// // object create
// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };
// console.log(rectangle.draw)


//factory function                                                     ...Imp
// function createRectangle(len, bre) {

//     const rectangle = {
//         length: len,
//         breadth:bre ,

//         draw() {
//             console.log('drawing rectangle');
//         }
// //     };
//     return rectangle;
// }

// let rectangleObj1 = createRectangle(5, 4);
// let rectangle2 = createRectangle(2,3);
// let rectangle3 = createRectangle(7,9);




//camelCase -> numberOfStudents                                                               ............IMP
//constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents
//constructor function -> prop/methods -> initialize/Define

// function Rectangle(len, bre) {
//     this.length = len;
//     this.breadth = bre;
//     this.draw= function() {
//         console.log('drawing');
//     }
// }

// //object creation using constructor function
// let rectangleObject = new Rectangle(4,6);

// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject); 
// The first block of code defines a constructor function Rectangle using the traditional JavaScript syntax. above




// // The second block of code defines a constructor function Rectangle1 using the Function constructor.
// let Rectangle1 = Function(
//     'length', 'breadth',
// `this.length = length;
// this.breadth = breadth;
// this.draw= function() {
//     console.log('drawing');
// }`
// ); 

// // object creation using Rectangle1
// let rect = new Rectangle1(2,3);

// rect.length;
// console.log(rect);

// Rectangle1.length;  //used this on console directly
// Rectangle1.breadth;    //used this on console directly
// Rectangle1.draw();    //used this on console directly


// let rectangle1 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };


// let rectangle2 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };



// let a = 10;             .. primitive
// let b = a;

// a++;
// console.log(a);
// console.log(b);
 // we got the output as a=11 and b=10



// let a = { value: 10};         ..reference
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);
     // we got the output as a=11 and b=11(b=11 because -
    // - the b points towards the same address in which a is present)

/*
    Imp primitive are copied by their value and 
    References are copied by their address/references
*/



// //                         ..primitive
// let a = 10;       
// function inc(a) {
//     a++;
// }

// inc(a);

// console.log(a);


// //                         ..references
// let b = {value:10 };       
// function inc(b) {
//     b.value++;
// }

// inc(b);

// console.log(b.value); 




// let rectangle = {
//     length:2,
//     breadth:4
// };  

// // for-in loop                     ..imp
// /* The `for` loop is used to iterate over the properties of an object. In this code, it is used to
// iterate over the keys of the `rectangle` object and print the key-value pairs. */
// for(let key in rectangle ) {
//     //keys are reflected through key variable 
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

// //for-of loop                                   ..imp
// for(let key of Object.entries(rectangle)) {
//     console.log(key);
// }




// if('length' in rectangle) {
//     console.log('Present');
// }
// else {
//     console.log('Absent');
// }



//object - colone #1                         ....imp
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {};

// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);



//Object Cloning #2                          ....imp

// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = { value: 25};       /*...wrote this later bro */

// let dest = Object.assign({}, src, src2);
// console.log(dest);


// src.a++;          /* tried incrementing it*/
// console.log(dest);



//Object Cloning #3       ....imp

// let src = {
//     a: 10,
//     b:20,
//     c:30
// };

// let dest = {...src};
// console.log(dest);

// src.a++;       //doesn't matter as dest values points to the same values, even after incrementing they print the older value
// console.log(dest);


