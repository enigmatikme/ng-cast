angular.module('video-player')
  .component('videoPlayer', {
    // TODO
    bindings: {
      video: '<'
    },
    controller: function () {
      this.getIframeSrc = function(videoId) {
        return 'https://www.youtube.com/embed/' + videoId;
      };
      this.isVideoAvailable = function() {
        if (this.video !== undefined) {
          return true;
        } 
        return false; 
      };
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
