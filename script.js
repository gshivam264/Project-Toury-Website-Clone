gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

var tl = gsap
  .timeline()

  .from("#page1 #nav h1,#nav #nav-prt2 h4,#nav #nav-prt3 button", {
    opacity: 0,
    y: -30,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.1,
  })
  .from("#page1-content h1,#page1-content h5,#page1-content button ", {
    opacity: 0,
    y: 60,
    duration: 0.5,
    stagger: 0.2,
  });
gsap.from("#page2-nav h1", {
  x: -300,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#page2-nav h1",
    scroller: "#main",
    start: "top 70%",
    end: "top 60%",
    scrub: 2,
  },
});
gsap.from("#page2-content", {
  x: 200,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#page2-content",
    scroller: "#main",
    start: "top 70%",
    end: "top 20%",
    scrub: 2,
  },
});
gsap.from("#page3 h1", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#page3 h1",
    scroller: "#main",
    start: "top 70%",
    end: "top 20%",
    scrub: 2,
  },
});
gsap.from("#page3-con1", {
  y: 80,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page3-con1",
    scroller: "#main",
    start: "top 100%",
    end: "top 20%",
    scrub: 2,
  },
});
gsap.from("#page4", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "top 100%",
    end: "bottom 10%",
    scrub: 2,
  },
});
gsap.from("#page5-nav h2", {
  x: -100,
  opacity: 0,
  duration: 0.2,
  scrollTrigger: {
    trigger: "#page5-nav h2",
    scroller: "#main",
    start: "top 70%",
    end: "bottom 10%",
    scrub: 2,
  },
});
gsap.from("#page5-navprt1 button", {
  x: 100,
  opacity: 0,
  duration: 0.2,
  scrollTrigger: {
    trigger: "#page5-navprt1 button",
    scroller: "#main",
    start: "top 70%",
    end: "bottom 10%",
    scrub: 2,
  },
});
gsap.from(".page5-box", {
  y: 40,
  opacity: 0,
  duration: 0.2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".page5-box",
    scroller: "#main",
    start: "top 70%",
    end: "top 50%",
    scrub: 2,
  },
});
gsap.from("#page6 h1", {
  x: -100,
  opacity: 0,
  duration: 0.2,
  scrollTrigger: {
    trigger: "#page6 h1",
    scroller: "#main",
    start: "top 70%",
    end: "bottom 10%",
    scrub: 2,
  },
});
gsap.from("#page6-con1", {
  y: 40,
  opacity: 0,
  duration: 0.2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page6-con1",
    scroller: "#main",
    start: "top 70%",
    end: "top 50%",
    scrub: 2,
  },
});

gsap.from("#page7-con1,#page7-con2,#page7-con3,#page7-con4,#page7-con5", {
  y: 40,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page7-con1,#page7-con2,#page7-con3,#page7-con4,#page7-con5",
    scroller: "#main",
    start: "top 70%",
    end: "top 70%",
    scrub: 2,
  },
});


var arrow1 = document.getElementById('arrow-1')
var arrow2 = document.getElementById('arrow-2')
var page2_content = document.getElementById('page2-content')

arrow1.addEventListener('click',()=>{
  page2_content.scrollLeft -= 330;
})

arrow2.addEventListener('click',()=>{
  page2_content.scrollLeft += 330;
})