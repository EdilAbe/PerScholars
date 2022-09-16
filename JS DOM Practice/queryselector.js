// Get the element with an ID of 'first' using querySelector
const first = document.querySelector('#first')
console.log(first);
// Get the elements with a class of 'second' with querySelector

const second = document.querySelector('.second')
console.log(second)
// Try the above prompt with querySelectorAll. What's the difference between what these two methods return?
const seconds = document.querySelectorAll('.second')
console.log(seconds)
seconds.forEach(el => el.getElementsByClassName.backgroundColor = 'red')
// Get the span element using querySelector
const span = document.querySelectorAll('span')
console.log(span.textContent)
// Get multiple span elements using querySelectorAll
const spans = document.querySelectorAll('span')
console.log(span[1].textContent)
// Select only "a" tags *directly inside* of a div (no grandchildren).
const atags = document.querySelectorAll('div > a')
console.log(atags)
console.log(atags[0].textContent)

// Select all elements that contain a "data-target" attribute
const dataTargetsEls = document.querySelectorAll('[data-target]')
console.log(dataTargetsEls)
// Select all elements where the data-target attribute equals "#false"

const falseDataTarget = document.querySelectorAll("[data-target='#false']")
console.log(falseDataTarget)