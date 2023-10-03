// Attend que tous les éléments de la page soient chargés
window.addEventListener("load", function() {
  // Cache la page de chargement avec une animation de transition
  const loader = document.querySelector(".loader");
  const sectionOne = document.getElementById('one');
  this.setTimeout(function() {
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";
  }, 1000);
  this.setTimeout(()=>{
    sectionOne.classList.add('section_show');
  }, 1500);
});

document.addEventListener("DOMContentLoaded", () => {
    //menu latéral
    var nav = document.getElementById("navbar");
    var openMenuButton = document.getElementById("openMenu");
    var closeMenuButton = document.getElementById("closeMenu");
    openMenuButton.addEventListener("click", () =>
      nav.classList.add("activeMenu")
    );
    closeMenuButton.addEventListener("click", () =>
      nav.classList.remove("activeMenu")
    );
  
    //gestion des liens
    const links = document.querySelectorAll('a[href^="#"]');
    const allSections = document.querySelectorAll("section");
    links.forEach(function (link) {
    link.addEventListener("click", function (event) {
     event.preventDefault();
     var targetId = this.getAttribute("href");
     var targetElement = document.querySelector(targetId);
     if (targetElement) {
        allSections.forEach((section) => {
        section.classList.remove("section_show");
       });
      setTimeout(() => {
        targetElement.classList.add("section_show");
      }, 300);
        }
        nav.classList.remove("activeMenu");  
      });
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
  
    //effet de parallax sur le mousemove
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
      this.querySelectorAll(".container__item").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }

    //bouger les yeux
    function angle(cx, cy, ex, ey){
      const dy = ey - cy;
      const dx = ex - cx;
      const rad = Math.atan2(dy,dx);
      const deg = rad * 180 / Math.PI;
      return deg;
    }
    const anchor = document.getElementById('eye-container');
    let rekt = anchor.getBoundingClientRect();
    let anchorX = rekt.left + rekt.width / 2;
    let anchorY = rekt.top + rekt.height / 2;
    window.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const angleDeg = angle(mouseX,mouseY,anchorX,anchorY);
      var eye = document.querySelectorAll('.eye');
      eye.forEach(eye => {eye.style.transform = `rotate(${270 + angleDeg}deg)`;})
    });
      
    
  //glow+profile
  const profiles = document.querySelectorAll(".profile");

  function handleMouseMove(event) {
    const profileRect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - profileRect.x;
    const y = event.clientY - profileRect.y;
    const midProfileWidth = profileRect.width / 2;
    const midProfileHeight = profileRect.height / 2;

    const angleY = -(x - midProfileWidth) / 24;
    const angleX = (y - midProfileHeight) / 24;

    event.currentTarget.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    
    if(event.currentTarget.children[1].style.display === "block"){
      const glowX = (x / profileRect.width) * 100;
      const glowY = (y / profileRect.height) * 100;
      event.currentTarget.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      event.currentTarget.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255, 255, 255, 0.5), transparent`;
      event.currentTarget.children[1].style.background = `-webkit-radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255, 255, 255, 0.5), transparent)`;
    }
  }

  function handleMouseOut(event) {
    if(event.currentTarget.children[1].style.display === "block"){
      event.currentTarget.children[1].style.transform = "rotateX(0) rotateY(0)";
      event.currentTarget.children[1].style.background = "none";
    }
    event.currentTarget.children[0].style.transform = "rotateX(0) rotateY(0)";
  }

  profiles.forEach((profile) => {
    profile.addEventListener("mousemove", handleMouseMove);
    profile.addEventListener("mouseout", handleMouseOut);
  });

    /* const profile = document.querySelectorAll(".profile");
    profile.forEach(el => {
      el.addEventListener("mousemove", e =>{
        var elRect = el.getBoundingClientRect();
        var x = e.clientX - elRect.x;
        var y = e.clientY - elRect.y;
        var midProfileWidth = elRect.width / 2;
        var midProfileHeight = elRect.height / 2;
      
        let angleY = -(x - midProfileWidth) / 24;
        let angleX = (y - midProfileHeight) / 24;
        
        let glowX = x / elRect.width * 100;
        let glowY = y / elRect.height * 100;
            
        el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`
        el.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`
        el.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.5), transparent`
      });
      el.addEventListener("mouseout", () =>{
        el.children[0].style.transform = "rotateX(0) rotateY(0)"
        el.children[1].style.transform = "rotateX(0) rotateY(0)"
        el.children[1].style.background = "none"
      });
    }); */

    

    /* //glow+profile
    const profile = document.querySelectorAll(".profile");
    const glowElements = Array.from(profile).map(el => ({
      element: el,
      child1: el.children[0],
      child2: el.children[1],
    }));

    const calculateTransformValues = (elRect, x, y) => {
      const midProfileWidth = elRect.width / 2;
      const midProfileHeight = elRect.height / 2;
      
      const angleY = -(x - midProfileWidth) / 24;
      const angleX = (y - midProfileHeight) / 24;
      
      const glowX = (x / elRect.width) * 100;
      const glowY = (y / elRect.height) * 100;
      
      return { angleX, angleY, glowX, glowY };
    };

    const resetTransform = (element) => {
      element.style.transform = "rotateX(0) rotateY(0)";
    };

    profile.forEach(el => {
      el.addEventListener("mousemove", e => {
        const elRect = el.getBoundingClientRect();
        const { angleX, angleY, glowX, glowY } = calculateTransformValues(elRect, e.clientX - elRect.x, e.clientY - elRect.y);

        glowElements.forEach(glowEl => {
          glowEl.child1.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
          glowEl.child2.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
          glowEl.child2.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(218,238,233), transparent`;
        });
      });

      el.addEventListener("mouseleave", () => {
        glowElements.forEach(glowEl => {
          resetTransform(glowEl.child1);
          resetTransform(glowEl.child2);
        });
      });
    }); */

    //easter-egg
    console.log("%cStop right there Criminal Scum! Nobody breaks the law on my watch! I'm confiscating your stolen goods. Now pay your fine or it\'s off to jail.","background-color : pink; color: black");
});

//flashlight
function toggleGlow(){
  let button = document.getElementById('flashlight');
  let light = document.getElementById('glow');
  light.style.display = (light.style.display === "block"? "none":"block");
  button.style.background = (button.style.background === "yellow"? "white":"yellow");
}