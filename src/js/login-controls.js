window.onload = function() {
    var loginForm = $('#login-form');
    var loginIcon = $('#login');

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

}