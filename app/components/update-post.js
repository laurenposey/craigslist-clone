import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set("updatePostForm", true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        author: this.get('author'),
        date: this.get('date'),
        image: this.get('image'),
        contactInfo: this.get('contactInfo'),
        location: this.get('location'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
