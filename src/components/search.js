angular.module('video-player')

.component('search', {

  bindings: {
    searchResults: '<'
  },
  
  controller: function(youTube) {
    this.searchString = '';

    this.results = () => {
      youTube.search(this.searchString, this.searchResults);
    };
  },

  templateUrl: 'src/templates/search.html'
  
});
