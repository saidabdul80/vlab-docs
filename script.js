
$(document).ready(function(){

	$('[data-spy="scroll"]').each(function () {
	  var $spy = $(this).scrollspy('refresh')
	})

	$('.nav-menu:not(.sub-nav)').click(function(el){			
		$(this).find('i').toggleClass('no-click');
		
		$('.stage1').text($(this).find('>a').text());
		$(this).find('ul.sub-nav').slideToggle(50);
	}).on('click', '.sub-nav', function(e) {    
    	e.stopPropagation();
	});

	$('.menu-btn').click(function(){
		$('.nav-cover').slideToggle(100);
	})
	let mobileS = function(size) {		
		if(size > 767) {      
			$('.nav-cover').slideDown();
		}
    }
	$(window).resize(function(){
      			mobileS($(this).width())
     })    
})
function setT(a,b){
	$('.stage1').text(a);
	$('.stage2').text(b);
}