'use strict';

$(document).ready(function () {

    $('.tab_content').hide();
    $('ul.tabs li:first').addClass('active').show();
    $('.tab_content:first').show();
    //Handle switching between tabs
    $('ul.tabs li').click(function () {

        $('ul.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tab_content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });

});