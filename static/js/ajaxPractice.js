

function sendLoginAjax(evt){
	// lets make an ajax request.
	evt.preventDefault();

	var usernameToSend = $('#cher').val();
	var passwordToSend = $('#red').val();

	var postParams = {
		'balloonicorn': usernameToSend,
		'stressdog': passwordToSend
	};
	
	// AJAX
	$.post('/login.json', postParams, function(data){
		$('#myform').remove();
		$('#loginform').html('<div><img src="https://unsplash.it/400/400"></div>');
		$('#alert-section').html('<div class="alert alert-success" role="alert"> You are logged in.</div>');
		$('#logout-section').append('<button id="logout">Logout</button>');
	});

}

function updateAboutMe(evt){
	// send an ajax request.

	var aboutMeText = $('#about-me').val();

	var postParams = {
		'about_me': aboutMeText
	};

	$.post('/aboutme.json', postParams, function(data){
		// show alert About Me Saved.
		$('#alert-section').empty();
		$('#alert-section').html('<div class="alert alert-info" role="alert">About me updated!</div>');
	});
}

function logOut(evt){
	$.post('/logout.json', function(data){
		$('#alert-section').empty();
		$('#alert-section').html('<div class="alert alert-info" role="alert">Log out successful.</div>');	
		$('#loginform').html('<form id="myform"><label>Username<input id="cher" name="username" type="text"></label><label>Password<input id="red" name="password" type="password"></label><input id="submit-btn" type="submit" value="LETS DO AJAX!"></form>');
		$('#logout').remove();
	});
}

// when the user clicks away from the about me field, do this.
$('#about-me').on('blur', updateAboutMe);
// when the form submits, call this function
$('#submit-btn').on('click', sendLoginAjax);
// when the user clicks logout button, call this functions
$('#logout').on('click', logOut);
