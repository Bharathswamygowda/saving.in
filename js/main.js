
!(function($) {
"use strict";


// Stick the header at top on scroll
var navbar = document.querySelector('header')

window.onscroll = function() {

// pageYOffset or scrollY
if (window.pageYOffset > 0) {
navbar.classList.add('scrolled')
} else {
navbar.classList.remove('scrolled')
}
}

// Smooth scroll for the navigation menu and links with .scrollto classes
$(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
e.preventDefault();
var target = $(this.hash);
if (target.length) {

var scrollto = target.offset().top;
var scrolled = 2;

if ($('#header-sticky-wrapper').length) {
scrollto -= $('#header-sticky-wrapper').outerHeight() - scrolled;
}

if ($(this).attr("href") == '#header') {
scrollto = 0;
}

$('html, body').animate({
scrollTop: scrollto
}, 1500, 'easeInOutExpo');

if ($(this).parents('.nav-menu, .mobile-nav').length) {
$('.nav-menu .active, .mobile-nav .active').removeClass('active');
$(this).closest('li').addClass('active');
}

if ($('body').hasClass('mobile-nav-active')) {
$('body').removeClass('mobile-nav-active');
$('.mobile-nav-toggle i').toggleClass('bx-navigation bx-window-close');
$('.mobile-nav-overly').fadeOut();
}
return false;
}
}
});

// Mobile Navigation
if ($('.nav-menu').length) {
var $mobile_nav = $('.nav-menu').clone().prop({
class: 'mobile-nav d-lg-none'
});
$('body').append($mobile_nav);
$('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
$('body').append('<div class="mobile-nav-overly"></div>');

$(document).on('click', '.mobile-nav-toggle', function(e) {
$('body').toggleClass('mobile-nav-active');
$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
$('.mobile-nav-overly').toggle();
});

$(document).on('click', '.mobile-nav .drop-down > a', function(e) {
e.preventDefault();
$(this).next().slideToggle(300);
$(this).parent().toggleClass('active');
});

$(document).click(function(e) {
var container = $(".mobile-nav, .mobile-nav-toggle");
if (!container.is(e.target) && container.has(e.target).length === 0) {
if ($('body').hasClass('mobile-nav-active')) {
$('body').removeClass('mobile-nav-active');
$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
$('.mobile-nav-overly').fadeOut();
}
}
});
} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
$(".mobile-nav, .mobile-nav-toggle").hide();
}



// Back to top button
$(window).scroll(function() {
if ($(this).scrollTop() > 100) {
$('.back-to-top').fadeIn('slow');
} else {
$('.back-to-top').fadeOut('slow');
}
});

$('.back-to-top').click(function() {
$('html, body').animate({
scrollTop: 0
}, 1500, 'easeInOutExpo');
return false;
});





$('.owl-one').owlCarousel({
loop:false,
rewind:true,
margin:10,
nav:true,
autoplay:false,
stagePadding: 0,
dots:false,
responsive:{
0:{
items:1,
},

320:{
items:1,
},

321:{
items:2,
},



600:{
items:2,
},


1000:{
items:6
}
}
})








})(jQuery);




