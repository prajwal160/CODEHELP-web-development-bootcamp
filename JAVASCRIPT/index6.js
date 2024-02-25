// whenever clicked on screen it shows how many times i clicked on it
// function eventFunction() {
//     console.log('I have clicked on the docuemnt');
// }
// document.addEventListener('click', eventFunction);
// document.removeEventListener('click', eventFunction); // removeEventalistener works here as we are refering to the same function


// const content = document.querySelector('#wrapper');

// content.addEventListener('click', function(babbar) {
//     console.log(babbar);
// })


//reference took from index.html for links
// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('maza aaya, accha laga');
// });



// let myDiv = document.createElement('div');

// function paraStatus(event) {
//     console.log('Para ' + event.target.textContent);  
// }
// myDiv.addEventListener('click', paraStatus);

// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv); //now we added it to the document



// let element = document.querySelector('#wrapper');

// element.addEventListener('click', function(event) {
//     if(event.target.nodeName === 'SPAN') {
//         console.log('span pr click kia hai' + event.target.textContent);
//     }
// });


// .............................

// notes

// EventTarget has thtee methods
// 01)  addEventListener
// 02)  removeEventListener
// 03)  dispatchEventListener
// we can apply eventListner on any document, P, div, article, video

// monitorEvent is used to see the events in runtime to see.//we saw it in console

// Event-type has many different ways:click , doubleClick, Scroll

// ......
// phases of an Event
// 1. capturing phase
// 2. at target phase
// 3. bubbling phase

