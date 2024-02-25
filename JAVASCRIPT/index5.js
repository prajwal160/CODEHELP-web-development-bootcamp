// to update the HTML data using  javascript using

// 01 inneraHTML
// 02 outerHTML
// 03 textContent
// 04 innerText

// document.getElementById("hidden etc");
// document.getElementsByClassName('hibro')
// document.getElementsByTagName("header")

// document.querySelector('.text-para')


// in innerText the hidden data is not displayed example like mediaquery EventCounts,
// but in textContent it is displayed always.EventCounts

// ex: 
// let content=document.querySelector('.css-layoutww');
// content; //wrote this in console for displaying the above content



// ------------
// example of innerHTML and textContent
// after making soke changes textContent displays it as  a text but innerHTML tries to render it.


// ----------

// // example of using the creating and appending.
// let content = document.querySelector('.paraclass');
// content; //for displaying on console;

// let newPara=document.createElement(".p");
// newPara; //for displaying on console;

// content.appendChild(newpara);
// // again printing content to see if it is changes or not
// content;




  //appendChild adds the data in last of the content as a last sibling.adds
  //if we want to add it in between then we use innerAdjacentHTML()

// AppendChild is  for adding data at the end


// //  InsertAdjacentHTML() adds in between starting and ending everywhere like it has many ways like
//  beforebegin
//  afterbegin
//  beforeEnd
//  afterEnd

// //  example for this is
// let content= document.querySelector('.track_left__nnRY8');
// undefined
// content
// <div class=​"track_left__nnRY8">​Introduction to Graph​</div>​
// let newtext=document.createElement("h3");
// undefined
// newtext
// <h3>​</h3>​
// newtext.textContent="hi bro";
// 'hi bro'
// content.insertAdjacentElement('beforeBegin',newtext); //this shows only <h3>hi bro</h3>
// content.insertAdjacentElement('afterBegin',newtext); 
// content.insertAdjacentElement('beforeEnd',newtext);
// content.insertAdjacentElement('afterEnd',newtext);  //this shows only <h3>hi bro</h3>
// //afterbegin and beforeEnd both adds the given input data before and after the data that is  already present respectively.



// .....................
// // different method of changing the css using javascript
// let content =$0;
// content;//for displaying in the console
// content.style.color="red";

// content.style.background="white";

// content.style.csstext="color;green; background-color:yellow;"; //by using cssText we can make multiple changes
// content.style.csstext="color;green; background-color:yellow;"; //by using cssText we can make multiple changes

// content.setAttribute('style','color:white;');      //or we can use this setAttribute for changing the CSS
// content.setAttribute('style','background:red;');
// content.setAttribute('style','color:orange;');

// content.setAttribute('id','headingetc'); // we can even add the id using the setAttribute


// className 

// classList is better than className as it is easy 
// and classList has many operations like 
// add()
// remove()
// contains()
// toggle() etc which are not available in className

// ex:-
// let content=$0;
// content.classList; //this will directly display that classes as a list of array unlike className which takes lengthy process
// typeof content.classList; // this gave answer as object




// // EXTRA NOTES

// # JavaScript File Manipulation

// This JavaScript file demonstrates various methods for manipulating HTML data and elements. It covers topics such as updating HTML content, creating and appending elements, and modifying CSS styles. The code is explained in detail with step-by-step explanations and code snippets to aid understanding.

// ## Updating HTML Content

// The file explores four methods for updating HTML content:

// 1. **innerHTML**: This method updates the HTML code within an element, including any child elements.
// 2. **outerHTML**: This method replaces the entire HTML element, including its content and attributes.
// 3. **textContent**: This method updates the text content of an element, excluding any HTML tags or formatting.
// 4. **innerText**: Similar to textContent, this method updates the text content of an element, but it does not display hidden content such as media queries or event counts.
