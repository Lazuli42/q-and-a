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

    destroyQuestion(question) {
      if (confirm('Delete this question?')) {
        question.destroyRecord();
        this.transitionTo('index');
      }
    },

    destroyAnswer(answer) {
      if (confirm('Delete this answer?')) {
        answer.destroyRecord();
        this.transitionTo('question', question.id);
      }
    },
  }
});
