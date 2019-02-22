CountDownTimer('02/24/2019 9:00 AM', 'countdown');

function CountDownTimer(dt, id)
{
	var end = new Date(dt);

	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	//var _day = _hour * 24;
	var timer;

	function showRemaining() {
		var now = new Date();
		var distance = end - now;
		var time = '';

		if (distance < 0) {

			clearInterval(timer);
			document.getElementById(id).innerHTML = "Time's up! Check out the <a href='http://hackysu2017.challengepost.com/'>submissions</a>!";

			return;
		}
		// var days = Math.floor(distance / _day);
		// var hours = Math.floor((distance % _day) / _hour);
		var hours = Math.floor(distance / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);

		//document.getElementById(id).innerHTML = days + 'days ';
		time += hours + 'hrs ';
		time += minutes + 'mins ';
		time += seconds + 'secs';

		document.getElementById(id).innerHTML = time;
	}

	timer = setInterval(showRemaining, 1000);
}
