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

const faqHover = () => {
    var buttons = document.getElementsByClassName("faqButton");
    var i;

    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
          this.classList.toggle("btn-standard");
          this.classList.toggle('btn-faq');
        });
    }
}


const myWebsite = () => {
    navSlide();
    faqHover();
}

myWebsite();
