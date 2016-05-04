// Returns true if the specified element has been scrolled into the viewport.
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height()*0.7;

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function desc2CheckAnimation() {
    var $elem = $('.page1');

    // If the animation has already been started
    if ($elem.hasClass('.page1-animate')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('page1-animate');
    }
}

function coolCheckAnimation() {
    var $elem = $('.desc1-cool');

    // If the animation has already been started
    if ($elem.hasClass('desc1-cool-animate')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('desc1-cool-animate');
    }
}

function supercoolCheckAnimation() {
    var $elem = $('.desc1-supercool');

    // If the animation has already been started
    if ($elem.hasClass('desc1-supercool-animate')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('desc1-supercool-animate');
    }
}

function superdamncoolCheckAnimation() {
    var $elem = $('.desc1-superdamncool');

    // If the animation has already been started
    if ($elem.hasClass('desc1-superdamncool-animate')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('desc1-superdamncool-animate');
    }
}

// Capture scroll events
$(window).scroll(function(){
  coolCheckAnimation();
  supercoolCheckAnimation();
  superdamncoolCheckAnimation();
  desc2CheckAnimation();
});
