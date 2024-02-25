// //adding 100para

// const t1 = performance.now();
// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para ' + i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("this took " + (t2-t1) + " ms");       


// now the above code gave the speed of 0.4 ms. so now we optimize the code to 0.1 see below
//performance.now() always gives the accurate value of the speed of the function


// //optimizing a bit
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1; i<=100; i++) {
//     let element = document.createElement('p');
//     element.textContent = 'This is Para ' + i;

//     myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("this took " + (t4-t3) + " ms");


// --------
// so we use fragment to optimize the code and make it faster

// let fragment = document.createDocumentFragment();
// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para ' + i;

//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment); // 1 Reflow, 1 Repaint


// ------------

// function addPara() {
//     let para = document.createElement('p');
//     para.textContent = 'Js is Single';
//     document.body.appendChild(para);
// }

// function appendNewMessage() {
//     let para = document.createElement('p');
//     para.textContent = 'Kya haal Chaal';
//     document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();

// document.addEventListener('click', function() {
//     console.log('hello DiDi');
// });


// Async code is handled by browser , when async cod eis ready to be executed it is moved to the queue where it waits until the call stack is empty
//01) through the function above we learnt about CALL STACK where the code is executed and  how JS works in a single threaded model like displays everything in a single order and 
// if function like eventlistener(clicking etc) the call stack informs it to the browser until  there are no more functions left in the call stack and that event-listener ot settimeout is is sent to 
// queue, later call stack takes the code from there and displays it 
// 02) queue stack waits until the call stack  becomes empty then starts executing the remaining codes in the queue


// extra notes

// Repaint happens after reflow as the browser draws the new layout to the screen. This is fairly quick, but you still want to limit how often it happens.
// For example, if you add a CSS class to an element, the browser often recalculates the layout of the entire page—that's one reflow and one repaint!

// Reflow involves recalculating the positions and geometries of elements in a document. This is done to re-render part or all of the document. Reflow is more expensive than repaint.
// Using a documentFragment to reflect changes and then appending it to the DOM saves a lot of time for re-flows/paints 


// -------------------
// setTimeout(function  () {
//     console.log("bol bhai");
// }, 5000);
// it will print bol bhai after waiting for 5000 ms  which is nearly 5 seconds
// whenever we want to deffer sumething (talneki koshish karte hai tab)