
/***ENLARGE BIRD PICTURE***/
$(window).scroll(function() {
var scroll = $(window).scrollTop()

  if (scroll < $(window).height()) {
    $(".forest").css({
      transform: 'translate3d(0%, -' + (scroll / 100) + '%, 0) scale(' + (100 + scroll /10) / 100 + ')'
    });
  }
});

/***SCROLL APPEAR FOR TEXT***/
function scrollAppear(){
    var introTexts = document.querySelectorAll('.intro-text');
   

    for (var i=0; i < introTexts.length; i++){
        var introPosition = introTexts[i].getBoundingClientRect().top;
        var screenPos = window.innerHeight / 1.3;
        
    if(introPosition < screenPos){
        introTexts[i].classList.add('intro-appear');
        
    }

    }
}

window.addEventListener('scroll',scrollAppear);


/***SCROLL APPEAR FOR IMG***/
function imgAppear(){
    var introTexts = document.querySelectorAll('.img-nature, .img-nature2');


    for (var i=0; i < introTexts.length; i++){
        var introPosition = introTexts[i].getBoundingClientRect().top;
        var screenPos = window.innerHeight / 1.3;

    if(introPosition < screenPos){
        introTexts[i].classList.add('img-appear');
    }  
    }
    }

window.addEventListener('scroll',imgAppear);



/***SVG TURBULANCE***/
var $ac = document.querySelector('.z1');
var $bc = document.querySelector('.z2');
var $cc = document.querySelector('.z3');
$ac.addEventListener('mouseover', function() {
TweenMax.to("#turbulence", 2, {
    attr: { "baseFrequency": 0.01 },
    repeat: -1,
    yoyo: true
});
});

$ac.addEventListener('mouseout', function() {
TweenMax.to("#turbulence", 2, {
    attr: { "baseFrequency": 0 },
    repeat: 0,
    yoyo: false
});
});

$bc.addEventListener('mouseover', function() {
TweenMax.to("#turbulence2", 2, {
    attr: { "baseFrequency": 0.01 },
    repeat: -1,
    yoyo: true
});
});

$bc.addEventListener('mouseout', function() {
TweenMax.to("#turbulence2", 2, {
    attr: { "baseFrequency": 0 },
    repeat: 0,
    yoyo: false
});
});

$cc.addEventListener('mouseover', function() {
TweenMax.to("#turbulence3", 2, {
    attr: { "baseFrequency": 0.01 },
    repeat: -1,
    yoyo: true
});
});

$cc.addEventListener('mouseout', function() {
TweenMax.to("#turbulence3", 2, {
    attr: { "baseFrequency": 0 },
    repeat: 0,
    yoyo: false
});
});


/***BACKGROUND BIRD PARALLAX***/
var parallax = document.getElementById('para-img');
window.addEventListener('scroll',function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = (-offset * 0.2)+200+ "px";
})

/*** ***/
$(function(){
$("a.tab").on("click", function(e){
e.preventDefault();


$(this).closest("ul").find("a.tab").removeClass("-on");
$(this).addClass("-on");

$("div.tab").removeClass("-on");
$("div.tab." + $(this).attr("data-target")).addClass("-on");
});
});

