angular.module('video-player')
.component('videoListEntry', {
  
  bindings: {
    video: '<',
    onClick: '<',
    index: '<'
  },
  
  controller: function() {
    console.log(this);
  },
  
  templateUrl: 'src/templates/videoListEntry.html' 
  
});
