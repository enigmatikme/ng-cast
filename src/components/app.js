angular.module('video-player')
  .component('app', {
    controller: function () {
      this.selectVideo = function () {
      };
      this.searchResults = function () {
      };
      this.currentVideo = {};
      this.videos = [];
    },
    templateUrl: 'src/templates/app.html'
  });
