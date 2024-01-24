gsap.registerPlugin(ScrollTrigger) 

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



const container = document.querySelector("#container");
const sections = gsap.utils.toArray("#container section");
const anims = gsap.utils.toArray(".anim");
const numSections = sections.length - 1;
const snapVal = 1 / numSections;
let lastIndex = 0;

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length -1),
    ease: "none",
    scrollTrigger: {
        trigger: "#container",
        pin: true,
        scrub: 1,
        delay: 0,
        end: () => '+=' + innerWidth * sections.length,
        onUpdate: (self) => {
            const newIndex = Math.round(self.progress / snapVal);
            if (newIndex !== lastIndex) {
              navList[lastIndex].classList.remove('is-active');
              navList[newIndex].classList.add('is-active');
              lastIndex = newIndex;
            }
        }
    }
})

sections.forEach(section => {
    let anim = section.querySelectorAll(".anim");

    gsap.from(anim,{
        y: -100,
        opacity: 0,
        duration: 1.5,
        delay: 0.2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger : {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
            //markers: true
        }  })
})

const navList = document.querySelectorAll('.anchor');

navList.forEach((a, i) => {
let st = scrollTween.scrollTrigger,
    progress = (1 / (sections.length - 1)) * i; 
    a.addEventListener('click', (e) => {
        e.preventDefault();
        gsap.to(window, {
        scrollTo: {
            y: st.start + progress * (st.end - st.start),
        },
        });
    });
});