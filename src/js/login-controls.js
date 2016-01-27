window.onload = function() {
    var loginForm = $('#login-form');
    var loginIcon = $('#login-icon');

    loginForm.fadeTo(0, 0.0);
    loginForm.css('position', 'absolute');
    loginForm.css('z-index', '300');
    loginIcon.click(function() {
        if(loginForm.css('opacity') == 0.0) {
            loginForm.fadeTo('slow', 1.0);
        } else {
            loginForm.fadeTo('slow', 0.0);
        }
    });

    var carousel = new Carousel();
    carousel.init();
    $('.inactive').hide();
}

function Carousel() {
    var self = this;
    self.images = ['../content/images/carousel1.jpg','../content/images/carousel2.jpg','../content/images/carousel3.jpg'];
    self.activeIndex = 1;
}

Carousel.prototype.init = function() {
    var container = document.createElement('div');
    container.style.id = 'carousel-container';

    var leftArrow = document.createElement('span');
    container.appendChild(leftArrow);
    leftArrow.style.id = 'carousel-left';
    $(leftArrow).addClass('glyphicon glyphicon-menu-left');
    leftArrow.style.fontSize = '1.3em';

    var rightArrow = document.createElement('span');
    container.appendChild(rightArrow);
    rightArrow.style.id = 'carousel-right';
    $(rightArrow).addClass('glyphicon glyphicon-menu-right');
    rightArrow.style.fontSize = '1.3em';

    for(var i = 0; i < this.images.length; i++) {
        var currentImage = document.createElement('img');
        currentImage.src = this.images[i];
        currentImage.style.class = 'carousel-image'
        container.appendChild(currentImage);

        if (i != this.activeIndex) {
            $(currentImage).hide();
        }
    }

    $('body').append(container);
}