$(document).ready(function(){
    
    $(window).scroll(function () {
		menuScroll();
	});


    $(".btn__open--menu").click(function(){
        $(this).toggleClass("show");
        $(".menu").toggleClass("show");
        menuItem = $(".menu__level--one");
        $(menuItem).each(function (i, menuItem) {
            setTimeout(function () {
                $(menuItem).toggleClass('show');
            }, i * 50);
           
        });
    })

    
});

function menuScroll() {
	var top = $(window).scrollTop();

	if (top > 200) {
		$('header').addClass("scrolled")
	} else {
		$('header').removeClass("scrolled")
	}
};

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))