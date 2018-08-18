angular.module('video-player')
  .component('app', {
    controller: function (youTube) {
      this.loadVideos = function(videos) {
        this.videos = videos;
        this.selectVideo(videos[0]);
      };
      this.$onInit = function() {
        youTube.search('AngularJS', this.loadVideos.bind(this));
      };
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      this.searchResults = function () {
      };
      this.currentVideo = window.exampleVideoData[0];
      this.videos = window.exampleVideoData;
    },
    templateUrl: 'src/templates/app.html'
  });
