app.directive('fTest', function () {
	return {
		restrict: 'E',
		templateUrl: 'templates/first-test.html',
		replace: true,
		link: function ($scope, element, attrs) {
			$scope.showAudio = attrs.showAudio || true;
			$scope.showText = attrs.showText || true;
			$scope.showInput = attrs.showInput || true;

			if (attrs.columnCount = attrs.columnCount || 1) {
				var columns = [], i = 0;
				for (i = 0; i < attrs.columnCount; ++i) {
					columns.push(i);
				}
				$scope.columnCount = columns;
			}

			$scope.items.forEach(function (el, i) {
				el.pos = i % attrs.columnCount;
			})
		}
	}
});