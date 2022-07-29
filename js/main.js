function aboutSlider() {
    var swiper = new Swiper('.about .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.about .swiper-button-next',
            prevEl: '.about .swiper-button-prev',
        }
    })
}

function partnerSlider() {
    var swiper = new Swiper('.partners .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 65,
        navigation: {
            nextEl: '.partners .swiper-button-next',
            prevEl: '.partners .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: "auto",
            },
        }
    })
}

function gallery() {
    var swiper = new Swiper(".gallery .mySwiper", {
        spaceBetween: 14,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".gallery .mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".gallery .swiper-button-next",
            prevEl: ".gallery .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

function feeadbackSlider() {
    var swiper = new Swiper('.feeadback .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 16,
        navigation: {
            nextEl: '.feeadback .swiper-button-next',
            prevEl: '.feeadback .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            900: {
                slidesPerView: 2,
            },
            1280: {
                slidesPerView: 3,
            },
        }
    })
}

function collectionSlider() {
    var swiper = new Swiper('.collection2 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 26,
        navigation: {
            nextEl: '.collection2 .swiper-button-next',
            prevEl: '.collection2 .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            700: {
                slidesPerView: 2,
            },
            1150: {
                slidesPerView: 3,
            },
            1380: {
                slidesPerView: 4,
            },
        }
    })
}


$(document).ready(function() {
    $('input[type="tel"]').mask('+7 999 999-9999', { placeholder: '+7             ' });
    cartCalc()
    aboutSlider()
    partnerSlider()
    gallery()
    feeadbackSlider()
    collectionSlider()

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header__mob").toggleClass("header__mob--active")
        $("body").toggleClass("fixed-body")
    })

    $(".qa__item-show").click(function() {
        $(this).parents(".qa__item").toggleClass("qa__item--active")
        $(this).siblings(".qa__item-hidden").slideToggle()
    })


    $(".scroll-up").click(function() {
        $("body,html").scrollTop(0);
    })
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $(".scroll-up").addClass("scroll-up--active")
        } else {
            $(".scroll-up").removeClass("scroll-up--active")
        }
    })

    $("[data-modal]").click(function() {
        let modalId = $(this).attr("data-modal")
        console.log(modalId);
        $(`#${modalId}`).addClass("popup--active")

        $("body").append(`<div class="popup-backdrop"></div>`)
        $("body").addClass("fixed-body")

        $(".popup-backdrop").click(function() {
            closeModal()
        })
    })

    $(".popup__close").click(function() {
        closeModal()
    })

    function closeModal() {
        $(".popup-backdrop").remove()
        $(".popup").removeClass("popup--active")
        $("body").removeClass("fixed-body")
    }
});

function cartCalc() {
    $('.cartcalc .ccalc-minus').click(function() {
        let a = $(this).closest('.cartcalc').find('input').val();
        if (a > 1) {
            let b = +a - 1;
            $(this).closest('.cartcalc').find('input').val(b);
        } else {
            $(this).closest('.cartcalc').find('input').val(a);
        }
    });
    $('.cartcalc .ccalc-plus').click(function() {
        let a = $(this).closest('.cartcalc').find('input').val();
        let b = +a + 1;
        $(this).closest('.cartcalc').find('input').val(b);
    });
}

//Video 
// selector of all videos on the page
const videos = document.querySelectorAll('.video');

// generate video url
let generateUrl = function(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
};

// creating iframe
let createIframe = function(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('src', generateUrl(id));

    return iframe;
};

// main code
videos.forEach((el) => {
    let videoHref = el.getAttribute('data-video');

    let deletedLength = 'https://youtu.be/'.length;

    let videoId = videoHref.substring(deletedLength, videoHref.length);

    let img = el.querySelector('img');
    let youtubeImgSrc = 'https://i.ytimg.com/vi/' + videoId + '/maxresdefault.jpg';
    img.setAttribute('src', youtubeImgSrc);

    el.addEventListener('click', (e) => {
        e.preventDefault();

        let iframe = createIframe(videoId);
        el.querySelector('img').remove();
        el.appendChild(iframe);
        el.querySelector('button').remove();
    });
});