app.controller('SCtrl', function ($scope) {
	$scope.items = [
		{audioSrc: '', text: 'дорога', check: 'о', message: ''},
		{audioSrc: '', text: 'работа', check: 'о', message: ''},
		{audioSrc: '', text: 'трудно', check: 'о', message: ''},
		{audioSrc: '', text: 'подруга', check: 'у', message: ''},
		{audioSrc: '', text: 'комната', check: 'а', message: ''},
		{audioSrc: '', text: 'папа', check: 'а', message: ''},
		{audioSrc: '', text: 'банан', check: 'а', message: ''},
		{audioSrc: '', text: 'Инна', check: 'и', message: ''}
	];

	$scope.words = ['а', 'о', 'у', 'и', 'а'];

	$scope.click = function (item) {
		console.log(item);
	};

	$scope.dropSuccessHandler = function ($event, index) {
		$scope.words.splice(index, 1);
	};

	$scope.onDrop = function ($event, $data, item) {
		item.message = $data;
	};
});

app.filter('hightlihtWord', function () {
	var replaceTmp = '<span style="color: red">$0</span>';

	return function (word, checkWord) {
		var match = null;

		if(match = word.match(new RegExp(checkWord, 'gi'))) {
			match = match[0];

			word = word.replace(match, replaceTmp.replace('$0', checkWord));
		}

		return word;
	};
});