import './home.html';


Template.home.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.home.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.home.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
