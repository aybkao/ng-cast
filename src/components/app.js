angular.module('video-player')

// .controller('placeholder', function($scope){
//   $scope.videos = exampleVideoData;
//   console.log(exampleVideoData)
// })

.directive('app', function() {

  return {
    // TODO
    scope: {},
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html',
    controller: function(){
      this.selectVideo = () => {};
      this.searchResults = () => {};
      this.currentVideo = exampleVideoData[0];
      this.videos = exampleVideoData;
      //console.log(this.videos)
    },
  }
  
});

//console.log(exampleVideoData);

// commment outsome
