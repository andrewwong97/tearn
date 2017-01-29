// Import needed templates
import '../../ui/layouts/main.js';
import '../../ui/components/not-found/not-found.html';
import '../../ui/components/nav/nav.html';
import '../../ui/components/home/home.js';
import '../../ui/components/info/info.js';

Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: 'not-found'
});

Router.route('/', {
  name: 'landing'
});
