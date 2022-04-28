$('.base_section_button').on('click', function(){
	$('html, body').animate({
		scrollTop: $('.whosection').offset().top
	}, 500);
});

// Burger
$(document).ready(function() {
	$(".burger").click(function() {
		$(".burger, .burger_menus, body").toggleClass("active");
	});
});

$('.burger_main').on('click', function(){
	$('html, body').animate({
		scrollTop: $('.header').offset().top
	}, 500);
	$(".burger, .burger_menus, body").removeClass("active");
});
$('.burger_about').on('click', function(){
	$('html, body').animate({
		scrollTop: $('.whosection').offset().top
	}, 500);
	$(".burger, .burger_menus, body").removeClass("active");
});
$('.burger_digits').on('click', function(){
	$('html, body').animate({
		scrollTop: $('.digits').offset().top
	}, 500);
	$(".burger, .burger_menus, body").removeClass("active");
});
$('.burger_services').on('click', function(){
	$('html, body').animate({
		scrollTop: $('.services').offset().top
	}, 500);
	$(".burger, .burger_menus, body").removeClass("active");
});
$('.burger_contacts').on('click', function(){
	$('html, body').animate({
		scrollTop: $('.contacts').offset().top
	}, 500);
	$(".burger, .burger_menus, body").removeClass("active");
});