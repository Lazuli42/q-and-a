import Ember from 'ember';

export default Ember.Component.extend({
  showQuestionForm: false,
  actions: {
    revealQuestionForm() {
      this.set('showQuestionForm', true);
    },

    saveQuestion1() {
      var params = {
        id: null,
        title: this.get('title'),
        author: this.get('questionAuthor'),
        notes: this.get('notes'),
        answers: []
      };
      this.set('showQuestionForm', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});
