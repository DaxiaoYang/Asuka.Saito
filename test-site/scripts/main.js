var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/asuka.jpeg') {
        myImage.setAttribute('src', 'images/asuka2.jpeg');
    } else {
        myImage.setAttribute('src', 'images/asuka.jpeg')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Asuka is cool, ' + myName
}

if(!localStorage.getItem('name')) {
    setUserName();
}else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Asuka is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}