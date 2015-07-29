Blogger.AboutController = Ember.Controller.extend({
  isPictureShowing: false,

  actions: {
    showRealName: function() {
      alert('Dracula is fictional, but his real name is Casey Li');
    },

    showPicture: function() {
      this.set('isPictureShowing', true);
    },

    hidePicture: function() {
      this.set('isPictureShowing', false);
    }
  }

});