import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveQuestion1() {
      var params = {
        id: null,
        title: this.get('title'),
        author: this.get('questionAuthor'),
        notes: this.get('notes'),
        answers: []
      };
      this.sendAction('saveQuestion2', params);
      this.transitionTo('index');
    }
  }
});
