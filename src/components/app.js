angular.module('video-player')

.component('app', {
 
  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];

    this.searchResults = (response) => {
      this.videos = response.data.items;
      this.currentVideo = response.data.items[0];
    };
    
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };
    
    this.init = function () {
      youTube.search('dogs', this.searchResults);
    };
    
    this.init();
  },
    
  templateUrl: 'src/templates/app.html' 
  
});

//Things to remember:
//Use ES6 in callbacks to bind the 'this' property. Else use .bind(this);

//Camel case (ex. searchResults) in JS === search-results in HTML. Keep this in mind when
//specifying parameter names (i.e., dependencies) for other Angular components
//that are written in the templates (HTML).
