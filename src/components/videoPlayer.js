angular.module('video-player')
  .component('videoPlayer', {
    // TODO
    bindings: {
      video: '<'
    },
    controller: function () {
      this.video = {};
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
