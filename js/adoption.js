
 /***MOUSEMOVE***/
 document.addEventListener('mousemove',
     function parallax(e) {
         this.querySelectorAll('.layer').forEach(layer => {
             var speed = layer.getAttribute('data-speed')
             var x = (window.innerWidth - e.pageX * speed)/100
             var y = (window.innerWidth - e.pageY * speed)/100
             layer.style.transform = `translateX(${x}px) translateY(${y}px)`
          
         })
      
     }
 )

 /***PARALLAX***/
 var scene = document.getElementById('scene');
 var parallaxInstance = new Parallax(scene);

 /***LETTERS***/
 var textWrapper = document.querySelector('.ml7 .letters');
 textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

 anime.timeline({loop: false})
   .add({
     targets: '.ml7 .letter',
     translateY: ["1.1em", 0],
     translateX: ["0.55em", 0],
     translateZ: 0,
     rotateZ: [180, 0],
     duration: 150,
     easing: "easeOutExpo",
     delay: function(el, i) {
       return 90 + 50 * i;
     }
   });

/***OPEN CHAT***/
$(document).ready(function(){
    $(".btn1").click(function(){
    $(".chat-open").slideToggle();
    });
});

    $(document).ready(function(){
    $(".fa-times").click(function(){
    $(".chat-open").slideToggle();
    });
    });
/***MASONRY***/
var colc = new Colcade( '.grid', {
    columns: '.grid-col',
    items: '.grid-item',
    columnWidth: 800
    });

/***BANNER***/
TweenMax.to('.panel', 1, {scaleY: 1, height:'100%', delay:1})
TweenMax.to('.birdpic', 1, {opacity:1, y:0, delay:2, ease:Back.easeOut.config(3)})
TweenMax.to('.p', 1, {opacity: 1, y: 20, delay: 2.7})
TweenMax.to('.box', 3, {opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 0.3), delay:1})