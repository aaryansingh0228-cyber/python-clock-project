function page1() {
    var aa = gsap.timeline()

aa.from("nav h1, nav h4, nav button",{
     y:-20,
    opacity:0,
    delay:1,
    duration:1,
    stagger:0.12,
})

aa.from(".center-part1 h1",{
    x:-500,
    opacity:0,
    duration:0.5,
})

aa.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.6,
})

aa.from(".center-part1 button",{
    opacity:0,
    duration:1,
})

aa.from(".center-part2 img",{
    opacity:0,
    duration:0.5,
},"-=2")

aa.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.3,
    duration:0.6,
})
}

page1()

gsap.from(".section2",{
    x:-50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        
        start:"top 50%",
        end:"top 0",
        scrub:3,
    }
})

