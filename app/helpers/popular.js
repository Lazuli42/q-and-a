import Ember from 'ember';

export function popular(params/*, hash*/) {
  var question = params[0];

  if (question.get('answers').get('length') >= 5) {
    return Ember.String.htmlSafe('HOT <span class="glyphicon glyphicon-fire"></span>')
  }
}

export default Ember.Helper.helper(popular);