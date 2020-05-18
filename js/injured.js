document.addEventListener('DOMContentLoaded', () => {
  let nav = document.getElementById('scrollIndicator');


  let timeline1 = new TimelineMax();
  timeline1
    .from('.title', 1.5, {
      y: 200,
      ease: Power3.easeInOut
    })
    .from('nav', 1, {
      y: 30,
      autoAlpha: 0,
      ease: Power3.easeInOut
    }, '-=1')


  nav.addEventListener('click', () => {
    let timeline2 = new TimelineMax()
    timeline2
      .set('.grid', {
        display: 'grid'
      })
      .to('.birdpic', 3, {
        y: -600,
        scale: 1.1,
        ease: Expo.easeInOut
      })
      .to('.box', 3, {
        y: -800,
        ease: Expo.easeInOut
      }, '-=3')
      .to('.anime1', 3, {
        autoAlpha: 0,
        y: -100,
        ease: Expo.easeInOut
      }, '-=3')


      .to('.imgs', 2, {
        height: '100%',
        ease: Expo.easeInOut
      }, '-=2')

      .to('.imgs-2', 2, {
        height: '100%',
        ease: Expo.easeInOut
      }, '-=1.8')
      .to('.imgs-3', 2, {
        height: '100%',
        ease: Expo.easeInOut
      }, '-=1.7')
      .to('.imgs-4', 2, {
        height: '100%',
        ease: Expo.easeInOut
      }, '-=1.6')



  });



})

/***BANNER ANIMATION***/
var rule = CSSRulePlugin.getRule(".span:after");
var tl = gsap.timeline({
  defaults: {
    duration: 1
  }
});
tl.from(".anime1", {
    y: 60,
    stagger: .8,
    opacity: 0
  })
  .to(rule, {
    duration: 1.5,
    cssRule: {
      scaleY: 0
    }
  }, "-=2")
  .from(".box", {
    backgroundPosition: '600px 0px',
    opacity: 0
  }, "-=.9")
  .from(".birdpic", {
    y: 30,
    opacity: 0
  })

$('#tab1show').hide();
$('#tab2show').hide();
$('#tab3show').hide();
$('#tab4show').hide();
var $contents = $('.tab-content');
$contents.slice(1).hide();
$('.tab').click(function() {
  var $target = $('#' + this.id + 'show').show();
  $contents.not($target).hide();
});
