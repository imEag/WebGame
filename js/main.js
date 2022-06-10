'use strict'

$('document').ready(() => {

    /* carousel scroll with arrows */
    $('#carrusel-arrow--left').click((elem) => {
        console.log('click left arrow');
        console.log(elem);

        let carousel= elem.currentTarget.parentNode.parentNode.children[1];
        carousel.scrollLeft += -window.screen.width;

        console.log(carousel);

    });

    $('#carrusel-arrow--right').click((elem) => {
        console.log('click right arrow');
        console.log(elem);
        
        let carousel= elem.currentTarget.parentNode.parentNode.children[1];
        carousel.scrollLeft += window.screen.width;

        console.log(carousel);
    });
});