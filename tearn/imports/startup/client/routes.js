// Import needed templates
import '../../ui/layouts/body.html';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';

Router.configure({
  layoutTemplate: 'appbody',
  notFoundTemplate: 'not-found'
});

Router.route('/', {
  name: 'home',
  template: 'home'
});
