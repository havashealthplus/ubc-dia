// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  $(function(){
    var lastScrollYPos = 0;
    $(window).on('scroll', function(){
        var $this = $(this),
            $block = $('#parallax-one'),
            // retrieves the top and left coordinates
            position = $block.offset(),
            // X and Y factors allows to change the diagonal movement direction and
            // degree. Negative values inverts the direction.
            factorX = 1,
            factorY = 1,
            // retrieves current vertical scrolling position and calculate the
            // relative offset
            scrollYPos = $this.scrollTop(),
            offset = Math.abs(scrollYPos - lastScrollYPos),
            // mouse wheel delta is inverted respect to the direction, so we need to
            // normalize it against the direction
            direction = scrollYPos > lastScrollYPos ? -1 : 1,
            // calculates the new position. NOTE: if integers only are used for factors,
            // then `Math.floor()` isn't required.
            newTop = position.top + Math.floor(direction * offset * factorY),
            newLeft = position.left - Math.floor(direction * offset * factorX);

        // moves the block
        $block.offset({ top: newTop, left: newLeft });
        lastScrollYPos = scrollYPos;
    });
  });

  $(function(){
    var lastScrollYPos = 0;
    $(window).on('scroll', function(){
        var $this = $(this),
            $block = $('#parallax-two'),
            // retrieves the top and left coordinates
            position = $block.offset(),
            // X and Y factors allows to change the diagonal movement direction and
            // degree. Negative values inverts the direction.
            factorX = 2,
            factorY = 2,
            // retrieves current vertical scrolling position and calculate the
            // relative offset
            scrollYPos = $this.scrollTop(),
            offset = Math.abs(scrollYPos - lastScrollYPos),
            // mouse wheel delta is inverted respect to the direction, so we need to
            // normalize it against the direction
            direction = scrollYPos > lastScrollYPos ? -1 : 1,
            // calculates the new position. NOTE: if integers only are used for factors,
            // then `Math.floor()` isn't required.
            newTop = position.top + Math.floor(direction * offset * factorY),
            newLeft = position.left - Math.floor(direction * offset * factorX);

        // moves the block
        $block.offset({ top: newTop, left: newLeft });
        lastScrollYPos = scrollYPos;
    });
  });

  $(function(){
    var lastScrollYPos = 0;
    $(window).on('scroll', function(){
        var $this = $(this),
            $block = $('#parallax-three'),
            // retrieves the top and left coordinates
            position = $block.offset(),
            // X and Y factors allows to change the diagonal movement direction and
            // degree. Negative values inverts the direction.
            factorX = 2,
            factorY = 2,
            // retrieves current vertical scrolling position and calculate the
            // relative offset
            scrollYPos = $this.scrollTop(),
            offset = Math.abs(scrollYPos - lastScrollYPos),
            // mouse wheel delta is inverted respect to the direction, so we need to
            // normalize it against the direction
            direction = scrollYPos > lastScrollYPos ? -1 : 1,
            // calculates the new position. NOTE: if integers only are used for factors,
            // then `Math.floor()` isn't required.
            newTop = position.top + Math.floor(direction * offset * factorY),
            newLeft = position.left - Math.floor(direction * offset * factorX);

        // moves the block
        $block.offset({ top: newTop, left: newLeft });
        lastScrollYPos = scrollYPos;
    });
  });

$(function(){
    var lastScrollYPos = 0;
    $(window).on('scroll', function(){
        var $this = $(this),
            $block = $('#parallax-four'),
            // retrieves the top and left coordinates
            position = $block.offset(),
            // X and Y factors allows to change the diagonal movement direction and
            // degree. Negative values inverts the direction.
            factorX = 2,
            factorY = 1,
            // retrieves current vertical scrolling position and calculate the
            // relative offset
            scrollYPos = $this.scrollTop(),
            offset = Math.abs(scrollYPos - lastScrollYPos),
            // mouse wheel delta is inverted respect to the direction, so we need to
            // normalize it against the direction
            direction = scrollYPos > lastScrollYPos ? -1 : 1,
            // calculates the new position. NOTE: if integers only are used for factors,
            // then `Math.floor()` isn't required.
            newTop = position.top + Math.floor(direction * offset * factorY),
            newLeft = position.left - Math.floor(direction * offset * factorX);

        // moves the block
        $block.offset({ top: newTop, left: newLeft });
        lastScrollYPos = scrollYPos;
    });
  });

  $(function(){
    var lastScrollYPos = 0;
    $(window).on('scroll', function(){
        var $this = $(this),
            $block = $('#parallax-five'),
            // retrieves the top and left coordinates
            position = $block.offset(),
            // X and Y factors allows to change the diagonal movement direction and
            // degree. Negative values inverts the direction.
            factorX = 1,
            factorY = 1,
            // retrieves current vertical scrolling position and calculate the
            // relative offset
            scrollYPos = $this.scrollTop(),
            offset = Math.abs(scrollYPos - lastScrollYPos),
            // mouse wheel delta is inverted respect to the direction, so we need to
            // normalize it against the direction
            direction = scrollYPos > lastScrollYPos ? -1 : 1,
            // calculates the new position. NOTE: if integers only are used for factors,
            // then `Math.floor()` isn't required.
            newTop = position.top + Math.floor(direction * offset * factorY),
            newLeft = position.left - Math.floor(direction * offset * factorX);

        // moves the block
        $block.offset({ top: newTop, left: newLeft });
        lastScrollYPos = scrollYPos;
    });
  });