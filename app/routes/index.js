import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  followedPosts: Ember.inject.service(),

  actions: {
    saveQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    followPost(question) {
      this.get('followedPosts').follow(question);
    },
  }
});
