angular.module('video-player')

.directive('videoList', function() {
  return {
    scope: {
      videos: '<',
      onClick: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(){
      //console.log(this.currentVideo)
      // this.onClick = (index) => {
      //   //console.log(this.videos[index]);
      //   //console.log(this.videos)
      //   //console.log(this);
      //   this.clickVideo = this.videos[index];
      //   console.log(this.clickVideo)
      // }
      //console.log(this);
      //console.log(this.onClick)
     
    },
    templateUrl: 'src/templates/videoList.html'
  }
});
