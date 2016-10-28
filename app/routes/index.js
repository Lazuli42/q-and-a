import Ember from 'ember';

var questions = [{
  title: "how do i ember?",
  author: "jsNoob",
  notes: "idk how to google",
  answers: [{
    author: "jsGuru",
    text: "have you tried turning it off and on again?"
    }, {
    author: "veteranCoder",
    text: "i'd link you to the documentation, but it doesn't seem to exist."
  }]
}]

export default Ember.Route.extend({
  model() {
    return questions;
  }
});
