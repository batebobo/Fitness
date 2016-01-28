"use strict";

var pattern = /\d+[.]?}/i

$(document).ready(function () {

	$("#calculator").submit(function(e) {
		e.preventDefault();
	})

	$("#calc").click(function(){
		var weight = parseFloat($("#weight").val());
		var height = parseFloat($("#height").val());
		if ((isNaN(weight) || isNaN(height)) || (weight === 0 || CheckHeight(height))) 
			{
				alert("Въведете валидни данни");
			}
		else
		{
			var bmiIndex = (weight / (height*height));
			$("#bmi").val(bmiIndex.toFixed(2));
		}
	})
    })

function CheckHeight(height)
{
	return (height <= 0 || height > 2.30 );
}