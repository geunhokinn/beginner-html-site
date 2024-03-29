// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world";

// document.querySelector("html").onclick = function () {
//     alert("hi");
// };

let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "firefox.png") {
        myImage.setAttribute("src", "chrome.png");
    } else {
        myImage.setAttribute("src", "firefox.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("please enter your name");
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla is cool, " + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
    setUserName();
}