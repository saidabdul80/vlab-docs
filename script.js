
$(document).ready(function(){
	 $('.venobox').venobox({
	    framewidth : '400px',                            // default: ''
	    frameheight: '300px',                            // default: ''
	    border     : '10px',                             // default: '0'
	    bgcolor    : '#5dff5e',                          // default: '#fff'
	    titleattr  : 'data-title',                       // default: 'title'
	    numeratio  : true,                               // default: false
	    infinigall : true,                               // default: false
	    share      : ['facebook', 'twitter', 'download'] // default: []
	});
	$('[data-spy="scroll"]').each(function () {
	  var $spy = $(this).scrollspy('refresh')
	})

	$('.nav-menu:not(.sub-nav)').click(function(el){			
		$(this).find('i').toggleClass('no-click');			
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