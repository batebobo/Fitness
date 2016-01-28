"use strict";

$(document).ready(function () {

    $("[data-page]").attr("href", "#selectedContent");

    InitHomePage();
    //Handle routing
    $("[data-page]").click(function (e) {
        e.preventDefault();

        $("[data-page]").attr("class", "");
        $(this).attr("class", "active");
        var page = $(this).attr("data-page") + ".html";

        $.get(page, function (content) {
            $("#selectedContent").html(content);
            $('.super-food-container').hide();
            $('.super-food').click(function() {
                $('.super-food a').removeClass('active');
                $(this).addClass('active');
                $('.super-food-container').hide();

                var activeFood = $(this).find('a').attr("href");
                $(activeFood).show();
            });

            // Calculator control setup
            $('#calculator').submit(function(e) {
                e.preventDefault();
            });

            $('#calc').click(function(e){

                var weight = parseFloat($('#weight').val());
                var height = parseFloat($('#height').val());
                if ((isNaN(weight) || isNaN(height)) || (weight === 0 || CheckHeight(height)))
                    {
                        alert('Въведете валидни данни');
                    }
                else
                {
                    var bmiIndex = (weight / (height*height));
                    $('#bmi').val(bmiIndex.toFixed(2));
                }
            });

            function CheckHeight(height)
            {
                return (height <= 0 || height > 2.30 );
            }
        });
    });
});

function InitHomePage()
{
    $.get("Home.html", function (content) {
        $("#selectedContent").html(content);
    });
}