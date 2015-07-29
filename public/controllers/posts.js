Blogger.PostsController = Ember.ArrayController.extend({
  actions: {
    sortByTitle: function() {
      this.set('sortProperties', ['title']);
    },

    sortById: function() {
      this.set('sortProperties', ['id']);
    }
  }
});