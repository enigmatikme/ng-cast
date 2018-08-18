angular.module('video-player')
  .service('youTube', function ($http) {
    this.search = function(query, callback) {
      var dataObj = {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      };
      $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: dataObj
      }).then(function(response) {
        callback(response.data.items);
      });
    };
  });
