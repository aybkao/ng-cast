// angular.module('video-player')
// .service('youTube', function($http, $window){
//   // TODO
//   this.search = function(query, callback){
//     $http.get('https://www.googleapis.com/youtube/v3/search', {
//       params: {
//         key: $window.YOUTUBE_API_KEY,
//         type: 'video',
//         maxResults: '10',
//         part: 'snippet',   
//         q: query,
//         videoEmbeddable: 'true'
//       }
//     })

//     .then(function({data}) {
//       if (callback) {
//         callback(data.items);
//       }
//     })

//     .catch(function({data}) {
//       data.error.errors.forEach(function(err) {
//         console.error(err.message)
//       })
//     })
//   }
// })



angular.module('video-player')

.service('youTube', function($http, $window) {
  this.search = function(query, callback) {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: 5,
        key: 'AIzaSyA2Mbl9uLUMl9RqYnWTdN5gzep1yPyLiak'  ,
        videoEmbeddable: 'true'
      }
    })
    .then(function({data}) {
      if (callback) {
        callback(data.items);
      }
    })
    .catch(function({data}) {
      data.error.errors.forEach(function(err) {
        console.error(err.message);
      });
    });
  };
});