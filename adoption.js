//  let imgArr = document.querySelectorAll("#mousemove");

//  let prevX = 0;
//  let prevY = 0;
//  let moveXAmount = 0;
//  let moveYAmount = 0;
//  document.addEventListener("mousemove", function(e){
//      mousePos(e);
//  })
//  ////////////
//  function mousePos(e){
//      moveXAmount = e.pageX -prevX;
//      moveYAmount = e.pageY -prevY;
//      moveImg(moveXAmount, moveYAmount);
//      prevX = e.pageX;
//      prevY = e.pageY;
//  }
//  function moveImg(xAmount, yAmount){
//      imgArr.forEach(function(img){
//      let movementStrength = 20 + (Math.random()*2);
//      img.style.left = (img.offsetLeft) - (xAmount/movementStrength) + "px";
//      img.style.top = (img.offsetTop) - (yAmount/movementStrength) + "px";
//      })
//  }

// ////
// let imgArr2 = document.querySelectorAll("#mousemove2");
// let prevX2 = 0;
// let prevY2 = 0;
// let moveXAmount2 = 0;
// let moveYAmount2 = 0;
// window.addEventListener("mousemove", function(e2){
//     mousePos2(e2);
// })
//  function mousePos2(e2){
//      moveXAmount2 = e2.pageX -prevX2;
//      moveYAmount2 = e2.pageY -prevY2;
//      moveImg2(moveXAmount2, moveYAmount2);
//      prevX2 = e2.pageX;
//      prevY2 = e2.pageY;
//  }
//  function moveImg2(xAmount2, yAmount2){
//      imgArr2.forEach(function(img2){
//      let movementStrength2 = -20 + (Math.random()*2);
//      img2.style.left = (img2.offsetLeft) - (xAmount2/movementStrength2) + "px";
//      img2.style.top = (img2.offsetTop) - (yAmount2/movementStrength2) + "px";
//      })
//  }

 //////////////////////
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