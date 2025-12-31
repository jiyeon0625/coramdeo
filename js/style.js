$(function(){

    let textof = $('.inbg').offset().top
    $(window).scroll(function(){

        if($(window).scrollTop()>=textof){
            $('.section3 .fix').addClass('on')
        }else{
            $('.section3 .fix').removeClass('on')
        }
    })

    $('.quick .gotop').click(function(){
        $('html, body').animate({
            scrollTop:0
        },700)
    })

    $('header').mouseenter(function(){
        $('header').addClass('on')

        $('header').mouseleave(function(){

            $('header').removeClass('on')
        })

    })
})