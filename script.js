var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 30 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 150 + "px"
    blur.style.top = dets.y - 150 + "px"
})
var bord = document.querySelectorAll("#nav a,h3,h4,h1")
bord.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.backgroundColor = "transparent"
        crsr.style.border = ".5px solid white"
        crsr.style.scale = 3
    })
})
var bord = document.querySelectorAll("#nav a,h3,h4,h1,p")
bord.forEach(function (elem) {
    elem.addEventListener("mouseleave", function () {
        crsr.style.backgroundColor = "#95C11E"
        crsr.style.border = "0px solid white"
        crsr.style.scale = 1
    })
})
gsap.to("#nav", {
    backgroundColor: "#000",
    duration: .3,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        scrub: 1,
        start: "top -10%",
        end: "top -100%"
    }
})
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers:true,
        scrub: 2,
        start: "top -25%",
        end: "top -70%"
    }
})
gsap.from("#about img, #about .middle",{
    y:80,
    duration:1.1,
    opacity:0,
    stagger:.4,
    scrollTrigger:{
        scroller:"body",
        trigger:"#about",
        scrub:3,
        start:"top 70%",
        end:"top 65%"
    }
})

// gsap.from(".cards",{
//     scale:1.01,
//     duration:1,
//     opacity:0,
//     stagger:.3,
//     scrollTrigger:{ 
//         trigger:".cards",
//         scroller:"body",

//         scrub:1,
//         start:"top 70%",
//         end:"top 65%"
//     }
// })
gsap.from("#col11",{
    y:-25,
    x:-25,
    scrollTrigger:{
        trigger:"#col11",
        scroller:"body",
        scrub:4,
        start:"top 55%",
        end:"top 45%"
    }
})
gsap.from("#col12",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#col11",
        scroller:"body",
        scrub:3,
        start:"top 50%",
        end:"top 55%"
    }
})