$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

/*
(function() {
    let skillsEl = $(".about__skills"),
        skillsElOffset = skillsEl.offset().top/2,
        documentEl = $(document);

        documentEl.on('scroll', function() {
            if (documentEl.scrollTop() > skillsElOffset && skillsEl.hasClass("hidden")) {
                skillsEl.removeClass("hidden");
            }
        });
})();
*/

// fades out subhead on scroll up 

(function() {
    let skillsPeek = $(".about__skills-peek"),
        skillsPeekOffset = skillsPeek.offset().top/100,
        documentEl = $(document);

        documentEl.on('scroll', function() {
            if (documentEl.scrollTop() > skillsPeekOffset) {
                skillsPeek.fadeOut();
            } else {
                skillsPeek.fadeIn();
            }
        });
})();



// grow project container on click
let contentBox = $(".work__projects__container");
let imageBox = $(".work__projects__box");
//let title = $(".work__projects__box__title");
imageBox.on("click", function() {
    if ($(this).parent().hasClass("work__projects__container__shrink")) {
        $(this).parent().toggleClass("work__projects__container__shrink work__projects__container__grow");
        $(this).find(".work__projects__box__title").toggleClass("work__projects__box__title__back work__projects__box__title__noBack");
        //title.toggleClass("work__projects__box__title__back work__projects__box__title__noBack")
    } else if ($(this).parent().hasClass("work__projects__container__grow")) {
        $(this).parent().toggleClass("work__projects__container__grow work__projects__container__shrink");
        $(this).find(".work__projects__box__title").toggleClass("work__projects__box__title__noBack work__projects__box__title__back");
    } else {
        $(this).parent().addClass("work__projects__container__grow");
       $(this).find(".work__projects__box__title").addClass("work__projects__box__title__back");
    }
})


// handle visibility of menu icon
$(document).scroll(function() {
    var y = $(document).scrollTop(), //get page y value 
        menu = $(".menu"),
        headerHeight = $('.header').height();
    if ( y >= (headerHeight - 50))  {
        menu.fadeIn();
    } else {
        $('input[type=checkbox]').prop('checked',false);
        menu.fadeOut();
    }
})

// removes nav menu after a link is clicked
$('.menu ul li a').on("click", function (e) {
    $('input[type=checkbox]').prop('checked', false);
});