/*glopal $, alert, console*/

$(function(){

    'use strict';
    
     // the button to top
    
    
    
    
    var scrollButton = $("#scroll-top");
    
    $(window).scroll(function(){
        
        
        if ( $(this).scrollTop() >= 700){
            
            scrollButton.show();
        }
        else
        {
            scrollButton.hide();   
        } 
    });
    
    scrollButton.click(function(){
            
            $('html, body').animate({ scrollTop: 0}, 2000);
            
        });
    
    
    //starting the carousel
    
    
    $('.autoplay').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      infinite: true, 
       /*responsive: [
           
    {
      breakpoint: 992,
      settings: {
        
        slidesToShow: 3
          
      }
    },       
    {
      breakpoint: 768,
      settings: {
        
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        
        slidesToShow: 1
      }
    }
  ] */
               
    });
    
    
    
        // On swipe event
    $('.a1').on('swipe', function(event, slick, direction){
      console.log(direction);
      // left
    });

    // On edge hit
    $('a1').on('edge', function(event, slick, direction){
      console.log('edge was hit')
    });

    // On before slide change
    $('.a1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log(nextSlide);
    });
    
    $(document).ready(function(){
    $('.autoplay').slick({
    
    });
    });
    
    
    
    

    
    
});

