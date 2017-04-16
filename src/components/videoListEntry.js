angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    // TODO
    scope: {
      video: '<',
      onClick: '<',
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(){
      //this.onClick = () => {
      //   console.log("I am clicked")
      // }
      //console.log(this.video)
      //console.log(this)
    },

 	  templateUrl: 'src/templates/videoListEntry.html'
  };
});
