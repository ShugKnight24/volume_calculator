$(document).ready(function(){

	'use strict';

	// run calcVolume on click of the submit
	$('#calculate-volume').on('click', function(){

			calcVolume();

	});

	function calcVolume(){

		var $userRadiusInput = $('#user-radius-input'),
			radius = $userRadiusInput.val(),
			// volume of a sphere is v = (4/3) Math.PI r^3 or Math.pow (base, exponent)
			volume = (4/3) * Math.PI * Math.pow(radius, 3);

		if ($.isNumeric(radius)){

			if (radius >= 0){

				// If the user enters a positive number
				volume = volume.toFixed(2);

				$('#volume-result').html('The Volume of your sphere is: ' + volume + '!');
				$('#result').removeClass('hidden');

			} else {

				$userRadiusInput.val('');
				// Can't have a negative radius
				alert('Please enter a positive value for the radius.');

			}

		} else {

			$userRadiusInput.val('');
			// If the user doesn't enter a number at all
			alert('Please enter a positive number in order for the volume calculator to run.');

		}

	}

	// Clear user input
	$('#clear-volume').on('click', function(){

		$('#user-radius-input').val('');

	});

});
