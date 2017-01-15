// Import needed templates
import '../../ui/layouts/main.html';
import '../../ui/components/not-found/not-found.html';
import '../../ui/components/nav/nav.html';
import '../../ui/components/home/home.html';

Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: 'not-found'
});

Router.route('/', {
  name: 'home'
});
