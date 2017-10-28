angular.module('video-player')

.component('app', {
  
  //bindings is like the decorator
  bindings: {
    
  },
 
 //controller is like constructor  
  controller: function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.selectVideo = function() {
    };
    this.searchResults = function() {};
    
    this.handleEntryClick = (index) => {
      this.currentVideo = window.exampleVideoData[index];
    };
  },
    
  templateUrl: 'src/templates/app.html' 
  
});
