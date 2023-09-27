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
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function (link) {
    link.addEventListener("click", function (event) {
     event.preventDefault();
     var targetId = this.getAttribute("href");
     var targetElement = document.querySelector(targetId);
     var allSection = document.querySelectorAll("section");
     if (targetElement) {
        allSection.forEach((section) => {
        section.classList.remove("section_show");
       });
      targetElement.classList.add("section_show");
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
    root.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const angleDeg = angle(mouseX,mouseY,anchorX,anchorY);
      var eye = document.querySelectorAll('.eye');
      eye.forEach(eye => {eye.style.transform = `rotate(${270 + angleDeg}deg)`;})
    });        
    
    //glow+profile
    const profile = document.querySelectorAll(".profile");

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
        el.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(218,238,233), transparent`
      });
      el.addEventListener("mouseleave", () =>{
        el.children[0].style.transform = "rotateX(0) rotateY(0)"
        el.children[1].style.transform = "rotateX(0) rotateY(0)"
      });
    });
    //easter-egg
    console.log("%cStop right there Criminal Scum! Nobody breaks the law on my watch! I'm confiscating your stolen goods. Now pay your fine or it\'s off to jail.","background-color : pink; color: black");

  });
  