//page loader
const body = document.querySelector("body");
const loader = document.getElementById("page-loader");
const loaderTitle = document.querySelector("#page-loader h1");
document.body.scrollTop = 0; // Safari
document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
setTimeout(()=>{
  loader.style.opacity = "0";
  body.style.display = "block";
  setTimeout(()=>{loader.style.display = "none"}, 500)  
}, 1800);

// set background gradient colors and angle using mouse
document.onmousemove = e => {
  var boxw = document.body.getBoundingClientRect().width;
  var boxh = document.body.getBoundingClientRect().height;
  var x = e.clientX - (boxw / 2);
  var y = e.clientY - (boxh /8);
  var rad = Math.atan(y / x) + Math.PI * (x < 0 ? 1.5 : 0.5);
  var deg = rad * 180 / Math.PI;
  maintitle.style.backgroundImage =
    "linear-gradient(" + rad + "rad, hsl(" + deg + ",90%,30%), hsl(" + (deg + 120) + ",90%,30%))";
};

//Burgernav
const links = document.querySelectorAll('nav li');
burger.addEventListener("click", () =>{
    nav.classList.toggle("active");
});
links.forEach((link) => {
    link.addEventListener("click", () =>{
        nav.classList.remove("active");
    })
});


//Scroll Btn
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}

accueilBtn = document.querySelector(".accueilBtn");
accueilBtn.addEventListener("click",()=>{
    accueilBtn.classList.add("active");
    setTimeout(()=>{accueilBtn.classList.remove("active")}, 1000);
});

//True Skill Display
fakeSkills = document.querySelector(".fake-skills");
trueSkills = document.querySelector(".true-skills");
skillsContainer = document.querySelector(".skills-container");
fakeSkills.addEventListener("mouseover", ()=>{
    trueSkills.style.display = "flex";
    trueSkills.style.opacity = "1";
});

//Adieu les Progress Bar
progressBtn = document.querySelector(".progress-btn");
hiddenText = document.querySelector(".hidden-text");
closeProgress = document.getElementById("close-progress");

progressBtn.addEventListener("click", () =>{
  skills.classList.toggle("active");
});
closeProgress.addEventListener("click", () =>{
  skillsContainer.style.transform = "rotate(360deg) scale(0)";
  setTimeout(()=>{skillsContainer.remove();}, 500);
});

//effet de ripple (goutte d'eau) on click
const root = document.documentElement;
root.addEventListener("click", () => applyCursorRippleEffect(event));
function applyCursorRippleEffect(e) {
  const ripple = document.createElement("div");
  ripple.className = "ripple";
  document.body.appendChild(ripple);
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  ripple.style.animation = `ripple-effect 0.4s linear`;
  ripple.onanimationend = () => document.body.removeChild(ripple);
}


//easter-egg
console.log("%cStop right there Criminal Scum! Nobody breaks the law on my watch! I'm confiscating your stolen goods. Now pay your fine or it\'s off to jail.","background-color : pink; color: black");

