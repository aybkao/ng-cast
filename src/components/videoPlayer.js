angular.module('video-player')

.controller('VideoPlayerController', function() {
  this.videoUrl = () => {
    return this.video ? `https://www.youtube.com/embed/${this.video.id.videoId}` : '';
  };
})

.directive('videoPlayer', function() {
  return {
    // TODO
		scope: {
		  video: '<'
		},
		restrict: 'E',
		controllerAs: 'ctrl',
		bindToController: true,
		controller: 'VideoPlayerController',
		templateUrl: 'src/templates/videoPlayer.html'
  };

});
