angular.module('video-player')
.service('youTube', function($http) {

  this.search = function(searchString, callback) {
    
    return $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: window.YOUTUBE_API_KEY,
        type: 'video',
        maxResults: '5',
        part: 'snippet',
        q: searchString,
        videoEmbeddable: 'true'
      }
    }).then(callback, function errorCallback(response) {
      console.log('failure');
    });

  };

});
