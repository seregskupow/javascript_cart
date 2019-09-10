window.onload = function(){
    //unable scroll for #prev
    var prev = document.getElementById('prev');
    prev.addEventListener('scroll',(e)=>{
        e.preventDefault();
    });

    TweenMax.to('.turn',2,{
        opacity:1,
        y:0,
        ease: Power4.easeOut
    });

document.querySelector(".turn").addEventListener("click",()=>{
    // document.getElementsByTagName('p').classList.remove("hidden");
    document.body.classList.remove('hidden');

    document.querySelector(".prev-2").style.opacity=1;
  
    TweenMax.to('.turn',1,{
    
        
        y:50,
        ease: Power4.easeOut
    });
    TweenMax.to('.turn',1.5,{
        delay:.5,
        autoAlpha:0,
        y:-200,
        ease: Power4.easeOut
    });
    TweenMax.to('.prev-2',1,{
        scale:6,
        rotation:270,
        x:-150,
        autoAlpha:0,
        delay:.5,
        ease: Power4.easeOut
    });
    TweenMax.to("#prev",3,{
        autoAlpha:0,
        delay:3,
        ease: Power4.easeOut
    });
    TweenMax.fromTo(".navbar",3,{
        
        y:-100
        
    },{
        y:0,
        delay:3,
        ease: Power4.easeOut
    });
    TweenMax.fromTo(".banner",3,{
        
        y:-550
        
    },
    {
        y:0,
        delay:3.0,
        ease: Power4.easeOut
    });
 
    
});

document.querySelector(".section-title").addEventListener("click",()=>{
    
    document.querySelectorAll(".product").forEach( function(element,index){
        TweenMax.to(element, 0.5, {scale:1, delay: index * 0.2, ease: Power4.easeOut})
      })
});

// var tl = new TimelineMax();
// tl.fromTo(document.querySelector(".flamingo"), 1, 
// {
//     x:0
// },
// {
// x:200,
// repeat:-1,
// yoyo:true
// },1);


if (window.innerWidth > 1200) {

$("body").mousemove(function(e) {
    parallaxIt(e, ".banner", -90);
    parallaxIt(e, ".move_js", -20);
    parallaxIt(e, ".flamingo", -20);
    parallaxIt(e, ".kaktus", -20);

    // parallaxIt(e, ".products", -20);
    // parallaxIt(e, ".product", -60);
    // parallaxIt(e, "body", -30);
  });
  
  function parallaxIt(e, target, movement) {
    var $this = $("body");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;
  
    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }
}
  const gradient = document.querySelector(".overlay");

//   document.querySelector(".banner-btn").addEventListener("click",(e)=>{
//       e.preventDefault();
//       TweenMax.to(document.querySelector(".products"),1,{
//           x:"0%",
//           ease: Power4.easeOut
//       });
//       TweenMax.to(document.querySelector(".hero-wrap"),1,{
//         x:"100%",
//         ease: Power4.easeOut
//     });
  

//   });
//   document.querySelector(".back-btn").addEventListener("click",(e)=>{
//     e.preventDefault();
//     TweenMax.to(document.querySelector(".products"),1,{
//         x:"-100%",
//         ease: Power4.easeOut
//     });
//     TweenMax.to(document.querySelector(".hero-wrap"),1,{
//       x:"0%",
//       ease: Power4.easeOut
//   });

// });

var controller = new ScrollMagic.Controller();
var dur = 970;
var dur_2 = document.body.innerLenght-1080;
var scene = new ScrollMagic.Scene({
    triggerElement:'.hero',
    triggerHook: 0,
    duration:dur

})
.setClassToggle('.navbar-center', "nav_add")
.addIndicators()
.addTo(controller);
var scene2 = new ScrollMagic.Scene({
    triggerElement:'.hero',
    triggerHook: 0,
    duration:dur

})
.setClassToggle('.navbar-center', "neon_border")
.addIndicators()
.addTo(controller);
var scene2_1 = new ScrollMagic.Scene({
    triggerElement:'.hero',
    triggerHook: 0,
    duration:dur

})
.setClassToggle('.navbar', "move_js")
.addIndicators()
.addTo(controller);

var scene4 = new ScrollMagic.Scene({
    triggerElement:'.products',
    triggerHook: 0,
    duration:dur_2

})
.setClassToggle('.navbar', "navbar-2")
.addIndicators()
.addTo(controller);

var info = document.querySelectorAll(".info_hover");
console.log(info);
info.forEach((elem)=>{
    elem.addEventListener("mouseover",()=>{
        elem.classList.add("neon_border");
    });
    elem.addEventListener("mouseleave",()=>{
        elem.classList.remove("neon_border")  ;
    });
});

};


const bg = document.querySelector('body');
const path = document.querySelector('.bg2');



bg.addEventListener('mousemove', e => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  console.log(mouseX,mouseY);
  path.style.display = "block";
  path.style.clipPath = "circle(200px at "+mouseX+"px " +mouseY+"px)";
});
