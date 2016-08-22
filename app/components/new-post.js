import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost() {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        author: this.get('author'),
        date: this.get('date'),
        contactInfo: this.get('contactInfo'),
        image: this.get('image'),
        location: this.get('location')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
