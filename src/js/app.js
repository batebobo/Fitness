"use strict";

$(document).ready(function () {

    $("[data-page]").attr("href", "#selectedContent");

    InitHomePage();    

    $("[data-page]").click(function (e) {
        //e.preventDefault();

        $("[data-page]").attr("class", "");
        $(this).attr("class", "active");
        var page = $(this).attr("data-page") + ".html";

        $.get(page, function (content) {
            $("#selectedContent").html(content);
        });
    });

    $('.super-food-container').hide();
    $('.super-food').click(function() {
        $('.super-food a').removeClass('active');
        $(this).addClass('active');
        $('.super-food-container').hide();

        var activeFood = $(this).find('a').attr("href");
        $(activeFood).show();
    });
    
});

function InitHomePage()
{
    $.get("Home.html", function (content) {        
        $("#selectedContent").html(content);
    });
}