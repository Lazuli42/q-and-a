import Ember from 'ember';

export default Ember.Service.extend({
  posts: [],

  follow(post) {
    this.get('posts').pushObject(post);
  }
});
