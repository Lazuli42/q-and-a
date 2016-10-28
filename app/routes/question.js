import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
      showEditForm() {
        this.send('showEditForm');
      },

    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', question);
    },

    editQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
    },

    deleteAnswer() {

    },

    raiseScore(answer) {
      var score = answer.get('score');
      score++;
      answer.set('score', score);
      answer.save();
    },
    lowerScore(answer) {
      var score = answer.get('score');
      score -= 1;
      answer.set('score', score);
      answer.save();
    }
  }
});
