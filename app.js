$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
});

(function() {
    let skillsEl = $('div.skills-tools-box'),
        skillsElOffset = skillsEl.offset().top/2,
        documentEl = $(document);

        documentEl.on('scroll', function() {
            if (documentEl.scrollTop() > skillsElOffset && skillsEl.hasClass('hidden')) {
                skillsEl.removeClass('hidden');
            }
        });
})();