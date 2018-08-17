angular.module('video-player')
.component('videoListEntry', {
   bindings: {
    video: '<'
  },
  controller: function() {
    this.video = {}
  }
});
