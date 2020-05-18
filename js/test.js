

/******SCROLL ANIMATION********** */


 $(window).scroll(function(){//when scroll i start the function lol and setup data offset
    
    scrollTop = $(window).scrollTop();
    
    $('.parallax-text').each(function(){
        $(this).data('offset',$(this).offset().top); //setup my data attribute,name in offset
        lol($(this));
    })
})
 function lol(a){

    if($(a).data('direction') == 'vertical'){
        var translate =(scrollTop - $(a).data('offset')) / $(window).height() *100;
        $(a).css({transform: 'translate3d(0,'+translate*1.5+'%'+',0)'});
    }else{
        var translate =(scrollTop - $(a).data('offset')) / $(window).height() *100;
        $(a).css({transform: 'translate3d('+translate+'%'+',0,0)'});
    }
     
 }

