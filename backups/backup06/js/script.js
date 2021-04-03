// var toolTipElement = document.getElementById('tooltip');
// console.log(toolTipElement);

// let navbars = document.querySelectorAll('.navbar');
// console.log(navbars);

let items = document.querySelectorAll('.dropdown');
// console.log(items);
// console.log(items[0]);

// let myItem = items[0];
// console.log(myItem);

// myItem.addEventListener('click', greeting);

function greeting() {
    console.log('Hello, world');
}

// let myLink = document.querySelector('#dropdown03');
// console.log(myLink);

// // myLink.addEventListener('click', greeting);

// myLink.onclick = function () {
//     alert('hello');
//     console.log('hello');
// };

let activeLinks = document.querySelectorAll('.active');
console.log(activeLinks);

let firstActiveLink = activeLinks[0];
console.log(firstActiveLink);

firstActiveLink.onmouseover = function () {
    console.log('Hello, world');
};
