import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['score:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  actions: {
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
