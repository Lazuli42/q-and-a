import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', question);
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
