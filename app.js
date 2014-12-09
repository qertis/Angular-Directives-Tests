if (location.protocol.search('file:') === 0) {
	alert('FILE PROTOCOL NOT SUPPORTED!!1');
}

window.app = window.app || angular.module('myapp', ['ang-drag-drop'])
	.config(function ($sceProvider) {
		$sceProvider.enabled(false);
	})
	.run(function () {
	});