angular.module('video-player')

// .controller('placeholder', function($scope){
//   $scope.videos = exampleVideoData;
//   console.log(exampleVideoData)
// })


.controller('AppCtrl', function(youTube) {
  // this.currentVideo = window.exampleVideoData[0];
  // this.videos = window.exampleVideoData;

  this.searchService = youTube;
  this.searchResults = (data) => {
    console.log('HMMM if I see this things are great')
    console.log(data)
    this.videos = data;
    this.currentVideo = this.videos[0];
  };

  this.selectVideo = (video) => {
    this.currentVideo = video;
  };

  youTube.search('cats', this.searchResults);
})




.directive('app', function() {
  return {
    // TODO
    scope: {},
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html',
    controller: 'AppCtrl'

    // controller: function(youTube){
    //   this.searchService = youTube;  
    //   // call back function for GET
    //   this.searchResults = (someData) => {
    //     console.log(someData)
    //   };
    //   this.selectVideo = (clickedVideo) => {
    //     this.currentVideo = clickedVideo; 
    //   };
    //   youTube.search('cats', this.searchResults);
    //   this.currentVideo = exampleVideoData[0];
    //   this.videos = exampleVideoData;
    // },
  }  
});


