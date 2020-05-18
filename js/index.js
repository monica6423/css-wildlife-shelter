/***TYPE WRITING** */
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};


/***window onload** */
window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
    log.onclick = showLoginForm
    btnLogin.onclick = sendForm
    btnLoginCancel.onclick = cancelLogin
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid black}";
  document.body.appendChild(css);
};


/*********LOG IN POPUP*************/
var log = document.getElementById("spanLogin");
var lightBox = document.getElementById("lightBox");
var id = document.getElementById("memId");
var pw = document.getElementById("memPsw");
var memName = document.getElementById("memName");
var spanLogin = document.getElementById("spanLogin");
var btnLogin = document.getElementById("btnLogin");

function showLoginForm() {
  if (log.innerHTML == "Log in/ Register") {
    lightBox.style.display = "block";
  } else {
    log.innerHTML = "Log in/ Register";
    lightBox.style.display = "none";
  }
}

function sendForm() {
  if (id.value == "Sara" && pw.value == "111") {
    memName.textContent = "Sara";
    log.textContent = "Log out";
    lightBox.style.display = "none";
  } else {
    window.alert("帳密錯誤");
  }
}

function cancelLogin() {
  lightBox.style.display = "none";
}

function init() {

};

/****SCROLLED HEADER****/
const header = document.querySelector('.flex-container');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
})

/***SIDE NAVIGATION-ORANGE DOTS***/
// init controller
var page1 = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: 1000
  }
});
var page2 = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: 800
  }
});
var page3 = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: 1400
  }
});
var page4 = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: 1300
  }
});

// build scenes
new ScrollMagic.Scene({
    triggerElement: "#sec1"
  })
  .setClassToggle("#high1", "pageactive") // add class toggle
  .addIndicators({
    colorTrigger: "transparent",
    colorStart: "transparent",
    colorEnd: "transparent",

  }) // add indicators (requires plugin)
  .addTo(page1);
new ScrollMagic.Scene({
    triggerElement: "#sec2"
  })
  .setClassToggle("#high2", "pageactive") // add class toggle
  .addIndicators({
    colorTrigger: "transparent",
    colorStart: "transparent",
    colorEnd: "transparent",

  }) // add indicators (requires plugin)
  .addTo(page2);
new ScrollMagic.Scene({
    triggerElement: "#sec3"
  })
  .setClassToggle("#high3", "pageactive") // add class toggle
  .addIndicators({
    colorTrigger: "transparent",
    colorStart: "transparent",
    colorEnd: "transparent",

  }) // add indicators (requires plugin)
  .addTo(page3);
new ScrollMagic.Scene({
    triggerElement: "#sec4"
  })
  .setClassToggle("#high4", "pageactive") // add class toggle
  .addIndicators({
    colorTrigger: "transparent",
    colorStart: "transparent",
    colorEnd: "transparent",

  }) // add indicators (requires plugin)
  .addTo(page4);

/****COUNTING NUMBER**** */
var section = document.querySelector('.numbers');
var hasEntered = false;

window.addEventListener('scroll', (e) => {
  var shouldAnimate = (window.scrollY + window.innerHeight) >= section.offsetTop;

  if (shouldAnimate && !hasEntered) {
    hasEntered = true;

    $('.value').each(function() {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 4000,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });

  }
});

/****PARALLAX SCROLLING */
var paralax = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: "onEnter",
    duration: "200%"
  }
});
new ScrollMagic.Scene({
    triggerElement: "#parallax3"
  })
  .setTween("#parallax3 > div", {
    y: "65%",
    ease: Linear.easeNone
  })
  .addIndicators({
    colorTrigger: "transparent",
    colorStart: "transparent",
    colorEnd: "transparent",

  })
  .addTo(paralax);




/****GLIDER */
window.addEventListener('load', function() {
  new Glider(document.querySelector('#glider-resp'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    draggable: true,
    dots: '#resp-dots',
    arrows: {
      prev: '#glider-prev-resp',
      next: '#glider-next-resp'
    },
    responsive: [{
      breakpoint: 885,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        itemWidth: 200,
        duration: 0.25,
        exactWidth: false,
      }
    }, {
      breakpoint: 1920,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        itemWidth: 200,
        duration: 0.25,
        exactWidth: false,
      }
    }]
  })
});

/***SCROLL APPEAR */
function scrollAppear() {
  var introTexts = document.querySelectorAll('.intro-text');


  for (var i = 0; i < introTexts.length; i++) {
    var introPosition = introTexts[i].getBoundingClientRect().top;
    var screenPos = window.innerHeight / 1.3;

    if (introPosition < screenPos) {
      introTexts[i].classList.add('intro-appear');
    }

  }
}

window.addEventListener('scroll', scrollAppear);

/***IMG APPER */

function imgAppear() {
  var introImgs = document.querySelector('.img-nature');
  var imgPosition = introImgs.getBoundingClientRect().top;
  var screenPos = window.innerHeight / 1.3;
  if (imgPosition < screenPos) {
    introImgs.classList.add('img-appear');
  }
}

window.addEventListener('scroll', imgAppear);


/***NEWS STAGGER */
var controller = new ScrollMagic.Controller();
var t2 = new TimelineMax();
t2.staggerFrom(".box", 1.25, {
  scale: 0,
  cycle: {
    y: [-50, 50]
  },
  ease: Elastic.easeOut,
  stagger: {
    from: "center",
    amount: 0.75 /*0.25 is faster*/
  }
});

var scene = new ScrollMagic.Scene({
    triggerElement: "#stage",
    triggerHook: 0
  })
  .addIndicators({
    colorTrigger: "transparent",
    colorStart: "transparent",
    colorEnd: "transpatent",
    indent: 5
  })
  .setTween(t2)
  .addTo(controller);

/***FLOATING BIRD */
var controller2 = new ScrollMagic.Controller();

$(".para").each(function() {
  var para = new TimelineMax();
  var child = $(this).find(".child");
  para.to(child, 1, {
    y: -100,
    ease: Linear.easeNone
  });

  var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.4,
      duration: "100%"
    })
    .setTween(para)
    .addIndicators({
      colorTrigger: "transparent",
      colorStart: "transparent",
      colorEnd: "transparent",
      indent: 10
    })
    .addTo(controller2);
});

/**DISTORTION */
var myAnimation = new hoverEffect({
  parent: document.querySelector('.distortion'),
  intensity: 0.3,
  image1: 'img/orange1.png',
  image2: 'img/orange.jpg',
  displacementImage: 'img/heightMap.png'
});

var myAnimation = new hoverEffect({
  parent: document.querySelector('.distortion2'),
  intensity: 0.3,
  image1: 'img/brown1.png',
  image2: 'img/wallbird.jpg',
  displacementImage: 'img/heightMap.png'
});

var myAnimation = new hoverEffect({
  parent: document.querySelector('.distortion3'),
  intensity: 0.3,
  image1: 'img/yellow1.png',
  image2: 'img/sparrowrow.jpg',
  displacementImage: 'img/heightMap.png'
});
var myAnimation = new hoverEffect({
  parent: document.querySelector('.distortion4'),
  intensity: 0.3,
  image1: 'img/blue1.png',
  image2: 'img/wallbird2.jpg',
  displacementImage: 'img/heightMap.png'
});

$('div .fluid').hover(function() { //hover is not working?
  $('#picture').removeClass().addClass(
    $(this).attr('rel')
  );
  $(this).addClass('active').siblings().removeClass('active');
});



$(".t1").hover(function() {
  $(".capone").html("I fell from the tree this summer during a hurricane. A nice hooman sent me to the shelter immediatly. After that, I recover quickly and now, I CAN FLY AGAIN!");
}, function() {
  $(".capone").html("I fell from the tree this summer during a hurricane. A nice hooman sent me to the shelter immediatly. After that, I recover quickly and now, I CAN FLY AGAIN!");
});

$(".t2").hover(function() {
  $(".capone").html("Digital adoption makes adoption easily and smoothly!");
}, function() {
  $(".capone").html("Digital adoption makes adoption easily and smoothly!");
});

$(".t3").hover(function() {
  $(".capone").html("All I can say is, the food and the accomadation in the shelter was GREAT!");
}, function() {
  $(".capone").html("All I can say is, the food and the accomadation in the shelter was GREAT!");
});

$(".t4").hover(function() {
  $(".capone").html("The accomadatioon is amazing in the shelter. We got good care everyday from the nice volunteers peopoo!");
}, function() {
  $(".capone").html("The accomadatioon is amazing in the shelter. We got good care everyday from the nice volunteers peopoo!");
});

$(".t5").hover(function() {
  $(".capone").html("Internet of Birds is such a brilliant idea! Love you guys!");
}, function() {
  $(".capone").html("Internet of Birds is such a brilliant idea! Love you guys!");
});

$(".t6").hover(function() {
  $(".capone").html("Digital adoption makes everything smoothly!");
}, function() {
  $(".capone").html("Digital adoption makes everything smoothly!");
});

/*****LOADING CANVAS */
const zero = document.querySelector(".backgroundzero")
const text = document.querySelector(".backgroundtext")
const slider = document.querySelector(".backgroundslide");
const headline = document.querySelector(".headline");
const t1 = new TimelineMax();
t1.fromTo(zero, 1.5, {
  width: "80%"
}, {
  width: "20%",
  ease: Power0.easeNone
})
t1.fromTo(zero, 1, {
  height: "100%"
}, {
  height: "0%",
  ease: Power2.easeInOut
})
t1.fromTo(slider, 1, {
  height: "100%"
}, {
  height: "0%",
  ease: Power2.easeInOut
}, "-=1")
t1.fromTo(slider, 1, {
  width: "100%"
}, {
  width: "0%",
  ease: Power2.easeInOut
})
t1.fromTo(text, .2, {
  opacity: 1,
  x: 0,
  y: 150
}, {
  opacity: 0,
  x: -40,
  y: 150
}, "-=1")
t1.fromTo(headline, .7, {
  opacity: 0,
  x: 100
}, {
  opacity: 1,
  x: 0
}, "-=0.5")
