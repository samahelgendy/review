
let btn = document.querySelector(".top button");
window.onscroll = function () {
    if (window.scrollY >= 600) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
// when click the button top=0
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
   })
  }
 
const createList = document.createElement("li");
// create text in li
const aboutText = document.createTextNode("ABOUT ME");
const profileText = document.createTextNode("PORTFOLIO");
const downloadText = document.createTextNode("DOWNLOAD CV");
const lists = document.querySelector(".nav .list");

const liOne = document.createElement("li");
liOne.className = "styles";
liOne.setAttribute("data-set", ".about");
const liTwo = document.createElement("li");
liTwo.setAttribute("data-set", ".Portfolios");
const liThree = document.createElement("li");
liThree.setAttribute("data-set", ".download");
liOne.appendChild(aboutText);
liTwo.appendChild(profileText);
liThree.appendChild(downloadText);
// add all li in main list
lists.appendChild(liOne);
lists.appendChild(liTwo);
lists.appendChild(liThree);

let menuList = document.querySelectorAll(".nav .list li");

function moveAnyWhere(element) {
    element.forEach((ele) => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.set).scrollIntoView({
                behavior: "smooth",
            })
        })
    })
}
moveAnyWhere(menuList);
let btns = document.querySelectorAll(".section .ontime button");

let parg = document.querySelector(".section .ontime p.solid");

btns.forEach(function (btn) {
    btn.onclick = function () {
       parg.innerHTML += " their focus can be on the writing process and using the four essential elements.";
        btn.innerHTML = "Learn Less";
        btn.style.backgroundColor = "navy";
    }
});
let addNumber = document.querySelector(".wantto .add");
let content = document.querySelector(".wantto label");
let names = ["samah " ,"asmaa " , "nour " ,"aya " ,"nesma"];
addNumber.onclick = function () {
    for (var x = 0; x < names.length; x++){
        content.innerHTML += names[x];
    }

}


