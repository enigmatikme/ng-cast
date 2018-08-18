angular.module('video-player')
  .component('search', {
    // TODO
    bindings: {
      result: '<',
      loadVideos: '<'
    },
    controller: function (youTube) {
      this.result = function (response) {
      };
      this.youtubeSearch = youTube.search;
      this.searchText = '';
    },
    templateUrl: 'src/templates/search.html'
  });