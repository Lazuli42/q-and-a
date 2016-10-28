import Ember from 'ember';

export default Ember.Component.extend({
  editingQuestion: false,
  actions: {
    showEditForm() {
      this.set('editingQuestion', true);
    },

    editQuestion(question) {
      var params = {
        title: this.get('title'),
        author: this.get('questionAuthor'),
        notes: this.get('notes')
      };
      this.set('editingQuestion', false);
      this.sendAction('editQuestion', question, params);
    }
  }
});
