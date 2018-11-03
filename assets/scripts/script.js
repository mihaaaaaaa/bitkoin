$(document).ready(function() {
	console.log('Hello my second year of suffering');

	function getRandomFloat(min, max) {
  		return Math.random() * (max - min) + min;
	}

	bit1 = 0;

	$('.bitcoin-button').click(function() {
		if (bit1 == 0) {
			bit1 = getRandomFloat(0.00001 , 2);
			console.log('Сегодня биткоин изменил свой курс на ' + bit1 + '%!' );
			bit2 = getRandomFloat(0.00001 , 2);
		} else if (bit1 < bit2) {
			console.log('О да! Биткоин только что вырос на ' + bit2 + '%!' );
			bit1 = bit2;
			bit2 = getRandomFloat(0.00001 , 2);
		} else {
			console.log('О нет! Биткоин только что упал на ' + bit2 + '%!' );
			bit1 = bit2;
			bit2 = getRandomFloat(0.00001 , 2);
		}
	});
});