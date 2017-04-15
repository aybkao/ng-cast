angular.module('video-player')

// .controller('placeholder', function($scope){
//   $scope.videos = exampleVideoData;
//   console.log(exampleVideoData)
// })

.directive('app', function() {

  return {
    // TODO
    scope: {
      currentVideo:"<"
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html',
    controller: function(){
      this.selectVideo = () => {};
      this.searchResults = () => {};
      this.currentVideo = exampleVideoData[0];
      console.log(this.currentVideo);
      this.videos = exampleVideoData;
      //console.log(this.videos)

      //trying
      this.onClick = (clickedVideo) => {
        this.currentVideo= clickedVideo;
        //console.log(this.videos)
        //console.log(this);
        // this.clickVideo = this.videos[index];
        //console.log(this.clickVideo)
      }
    },
  }
  
});

//console.log(exampleVideoData);

// commment outsome
