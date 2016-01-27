"use strict";

var constSearchText = "Търсене (В процес на разработка)";

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

    $("#tbSearch").val(constSearchText);
    $("#tbSearch").attr("title", constSearchText);

    $("#tbSearch").blur(function () {
        if ($(this).val() == '') {
            $(this).val(constSearchText);
        } 
    });

    $("#tbSearch").focus(function () {
        if ($(this).val() == constSearchText) {
            $(this).val('');
        } 
    });
});

function InitHomePage()
{
    $.get("Home.html", function (content) {        
        $("#selectedContent").html(content);
    });
}