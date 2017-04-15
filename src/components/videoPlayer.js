angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    // TODO
		scope: {
		  video: '<'
		},
		restrict: 'E',
		controllerAs: 'ctrl',
		bindToController: true,
		controller: function(){
		  //console.log(this.video)
		},
		templateUrl: 'src/templates/videoPlayer.html'
  };

});
