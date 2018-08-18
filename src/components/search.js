angular.module('video-player')
  .component('search', {
    // TODO
    bindings: {
      result: '<'
    },
    controller: function (youTube) {
      this.result = function () {
      };
      this.youtubeSearch = youTube.search;
    },
    templateUrl: 'src/templates/search.html'
  });