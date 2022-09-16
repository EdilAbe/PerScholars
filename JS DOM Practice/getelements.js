/** Write your code below each comment */
/* Get the element with an ID of 'first' */
const firstElement = document.getElementById('first')
console.log(firstElement)
/* Now delete that first element (in the html file), and re-run your code. What changed? */

const parentElement = document.getElementsByClassName('elements')
console.log("parent element", parentElement)
const firstChild = parentElement[0]
console.log("first child",firstChild)
parentElement[0].remove()

console.log("parent element after deleting first child", parentElement)
/* Get the elements with a class of 'second' with getElementsByClassName: */

const second = document.getElementsByClassName('second')
console.log("second elements", second)
/* Delete one of the elements with a class of 'second' and refresh the page. Do you get a similar result? */
 
parentElement
/* Get the span element using getElementsByTagname: */
const span = document.getElementsByTagName('span')
console.log(span)
/* Add a span anywhere, and re-run the last piece of code. What's different? */ 

