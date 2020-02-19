$(document).ready(function(){
   //toggler btn
    $('.navbar-toggler').click(function(){
        
        $('.navbar-toggler').toggleClass('change')
    })
 //sticky navbar
    $(window).scroll(function(){
        
        let position = $(this).scrollTop();
//        718
        if(position>= 600){
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        }else{
             $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
        }
    })
    
//smooth scroll
    $('.nav-item a, .header-link, #back-to-top').click(function(link){
        link.preventDefault();
        
        let target = $(this).attr('href');
        
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top-25
        },3000);
    })
    
   //back-to-top
    
    $(window).scroll(function(){
        
        let position = $(this).scrollTop();
        
        if(position >= 208){
            $('#back-to-top').removeClass('scrollTop');
            
        }else{
            
            $('#back-to-top').addClass('scrollTop');
        }
    })
    
      
// ripple
$("#header,.info").ripples({
   resolution: 128,
			dropRadius: 10, //px
			perturbance: 0.04,
    interactive:false
}); 
    
setInterval(function() {
		var $el = $('#header,.info');
		var x = Math.random() * $el.outerWidth();
		var y = Math.random() * $el.outerHeight();
		var dropRadius = 20;
		var strength = 0.04 + Math.random() * 0.04;

		$el.ripples('drop', x, y, dropRadius, strength);
	}, 4000);
    
//magnific popup

    $('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
      
            
            gallery: {
            enabled: true
        }
  // other options
});
       
    });
    
