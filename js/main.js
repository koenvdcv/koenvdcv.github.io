function askQuestions () {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;
	console.log(fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log('You are an adult');
	} else if (age>=13) {
		console.log ('You are a teenager');
	} else	{
		console.log('You are a child');
	}

	if (firstName === "General" && lastName !== "Assembly") {
		console.log('Greetings to you my Master');
	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();

	if (faveColour === 'red'  ||
		faveColour === 'green' ||
		faveColour === 'blue' ||
		faveColour === 'yellow') {

		$('h1').css('color', faveColour);
	}

}

/* When the page has loaded */
$(function () {

	/* If user clicks on the image run this function */
	$('img').on('click', askQuestions);

	/* When the user clicks an h3 */
	$('h3').on('click', function () {

		/* Toggle the next element */
		$(this).next().slideToggle(500);

	});

});