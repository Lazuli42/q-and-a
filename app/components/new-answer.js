import Ember from 'ember';

export default Ember.Component.extend({
  showAnswerForm: false,
  actions: {
    answerTheQuestion() {
      this.set('showAnswerForm', true);
    },

    saveAnswer() {
      var params = {
        author: this.get('answerAuthor'),
        text: this.get('answerText'),
        question: this.get('question')
      };
      this.set('showAnswerForm', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
