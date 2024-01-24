gsap.from("#loaderH", {
    rotation: -180,
    x: -200,
    delay: 0.5,
    duration: 1.5,
    opacity: 0,
    ease: "elastic.out(1,0.3)",
});

gsap.from("#accueil",{
    duration: 1,
    delay: 1.5,
    opacity: 0
},">")

gsap.from(".navLinks",{
    duration: 0.5,
    delay: 0.5,
    stagger: 0.4,
    opacity: 0
},">")

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile() && (window.screen.width > 768)) {
    var head = document.getElementsByTagName('head')[0];

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =  'script/scroller.js';
    head.appendChild(script);
    console.log('Gsap scroller added !');
}