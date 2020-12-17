/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}

var i = 0;
var txt =
  "For seven years, Jessica worked as a theatre designer at countless venues including the Bristol Old Vic, the Royal National Theatre and Greenwich Theatre. Since 2000, Jessica has worked exclusively as a British contemporary artist from her East Sussex studio. She exhibitsin and around London and has works in private collections worldwide. “I work mainly with oil paint as it has exceptional properties: it gives colours solidity, lustre and depth, while its transparency makes wonderful glazes. ";
var speed = 20;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
