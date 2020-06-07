//navbar
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');


        //Animate links
        navLinks.forEach((link,index) => {
            if( link.style.animation ){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
            }
        });

        //Burger animation
        burger.classList.toggle('toggle');

    });
}

//faq button press
$(document).ready(function() {
    $('.faqButton').click(function() {
        this.classList.toggle("btn-standard");
        this.classList.toggle('btn-faq');
    });
});



//menu glyphicon
$(document).ready(function () {
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).parent().find('.glyphicon-menu-down').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up');
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".glyphicon-menu-up").removeClass("glyphicon-menu-up").addClass("glyphicon-menu-down");
    });
});



navSlide();
