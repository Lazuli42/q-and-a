import Ember from 'ember';

export default Ember.Component.extend({
  showAnswerForm: false,

  time: Ember.computed(function() {
    var getTime = moment().format('HH:mm MM/DD/YYYY');
    return getTime;
  }),

  actions: {
    answerTheQuestion() {
      this.set('showAnswerForm', true);
    },

    saveAnswer() {
      var params = {
        author: this.get('answerAuthor'),
        text: this.get('answerText'),
        score: 1,
        timestamp: this.get('time'),
        question: this.get('question')
      };
      this.set('showAnswerForm', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
