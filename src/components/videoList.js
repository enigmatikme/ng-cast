angular.module('video-player')
  .component('videoList', {
    // TODO
    bindings: {
      onClick: '<'
    },
    controller: function () {
      this.videos = [];
      this.onClick = function () {

      };
    },
    templateUrl: 'src/templates/videoList.html'
  });
