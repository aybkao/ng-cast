angular.module('video-player')

.directive('search', function() {
  return {
    // TODO
    scope: {
      video: '<',
      result: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(){
      this.result = () => {};
    },
    
    templateUrl: 'src/templates/search.html'
  };
});
