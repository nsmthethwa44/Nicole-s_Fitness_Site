let menu = document.querySelector(".menu-img");
let navigation = document.querySelector(".navbar");

menu.onclick = () => {
menu.classList.toggle("close-img");
navigation.classList.toggle("active");
}

window.onscroll = () =>{
  menu.classList.remove("close-img");
  navigation.classList.remove("active");
}

let nav = document.querySelector(".nav");
let link = document.querySelectorAll("header .container .navbar .nav li a");

link.forEach(el => {
  el.addEventListener("click", function(){
        nav.querySelector(".active").classList.remove("active");
        el.classList.add("active");
  });
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
} 
window.addEventListener("scroll", reveal);