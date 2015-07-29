Blogger.ContactController = Ember.Controller.extend({
  messageSent: false,

  actions: {
    sendMessage: function() {
      var message = prompt('Type your message');
      this.set('confirmationNumber', Math.round(Math.random() * 100000));
      this.set('messageSent', true);
    }
  }
});