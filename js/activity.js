$(function() {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 100,
    values: [50, 78],
    slide: function(event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    }
  });
  $("#amount").val("$" + $("#slider-range").slider("values", 0) +
    " - $" + $("#slider-range").slider("values", 1));
});
/***MOBILE FILTER***/
let mbFilter = document.getElementById("mobile-filter");
let map = document.getElementById("map");
let faTimes = document.getElementById("fa-times");
mbFilter.addEventListener("click", filterOpen);
faTimes.addEventListener("click", filterClose);

function filterOpen() {
  map.style.display = "block";
};

function filterClose() {
  map.style.display = "none";
};

$(window).resize(function() {
  if ($(this).width() > 768) {
    $('#map').show();
  }
});

/*** TOGGLE DISPLAY-CHEVRRON ROTATE***/
$('.accordion').on('click', function(event) {
  event.preventDefault();
  var number = $(this).data("number");
  if ($('.fa-chevron-up.filter-down' + number).css("transform") == 'none') {
    $('.fa-chevron-up.filter-down' + number).css("transform", "rotate(180deg)");
  } else {
    $('.fa-chevron-up.filter-down' + number).css("transform", "");
  }
});

/*** TOGGLE DISPLAY***/
var acc = document.getElementsByClassName("accordion");

for (i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click",
    function() {

      var panel = this.nextElementSibling;

      if (panel.style.display === "none") {
        panel.style.display = "block";

      } else {
        panel.style.display = "none";

      }

    })
}

/***SELECT CITY***/
const selected = document.querySelector(".default_city");
const optionContainer = document.querySelector(".dropdowns");
const optionList = document.querySelectorAll(".dropdown_item");


selected.addEventListener("click", () => {
  optionContainer.classList.toggle("active");

});

optionList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("span").innerHTML;
    optionContainer.classList.remove("active");

  })
})

/***DEFAULT CITY-CHEVERON ROTATE***/
$(".default_city").click(function() {

  if ($(".down").css("transform") == 'none') {
    $(".down").css("transform", "rotate(180deg)");
  } else {
    $(".down").css("transform", "");
  }
});
$(".dropdown_item").click(function() {

  if ($(".down").css("transform") == 'none') {
    $(".down").css("transform", "rotate(180deg)");
  } else {
    $(".down").css("transform", "");
  }
});

/***LATEX***/
window.onload = function() {
  lax.setup() // init

  const updateLax = () => {
    lax.update(window.scrollY)
    window.requestAnimationFrame(updateLax)
  }

  window.requestAnimationFrame(updateLax)
}

/***ISOTOPE***/
$('.newsitem').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows'
});
$('.newsmenu ul li').click(function() {
  $('.newsmenu ul li').removeClass('clicks');
  $(this).addClass('clicks');

  var selector = $(this).attr('data-filter');
  $('.newsitem').isotope({
    filter: selector
  });
  return false;
});

/***VALUE INCREASE/DECREASE***/
function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}
