app.controller('FCtrl', function ($scope) {
	$scope.items = [
		{audioSrc: '', text: 'чей', message: '1'},
		{audioSrc: '', text: 'третий', message: '2'},
		{audioSrc: '', text: 'сентябрь', message: '2'},
		{audioSrc: '', text: 'лекция', message: '3'},
		{audioSrc: '', text: 'троллейбус', message: '3'},
		{audioSrc: '', text: 'телефон', message: ''},
		{audioSrc: '', text: 'маленькие', message: ''},
		{audioSrc: '', text: 'неправильно', message: ''},
		{audioSrc: '', text: 'по-английски', message: ''},
		{audioSrc: '', text: 'общежитие', message: ''},
		{audioSrc: '', text: 'лаборатория', message: ''}
	];

	$scope.click = function (item) {
		console.log(item);
	};
});