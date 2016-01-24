window.onload = function() {
    var loginForm = $('#login-form');
    var loginIcon = $('#login-icon');

    loginForm.hide();
    loginIcon.click(function() {
        if(loginForm.css('display') == 'none') {
            loginForm.show(500, 'linear');
        } else {
            loginForm.hide(500, 'linear');
        }
    });
}