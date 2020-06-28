import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about', { path: '/aboutus'} );
  this.route('contact', { path: '/contact-us' });
  this.route('posts', function() {
    this.route('post', { path : ':post_id'});
  });
  this.route('admin', function() {
    this.route('categories');
    this.route('products');
  });
  this.route('painting-game', function() {
    this.route('play');
    this.route('design');
  });
  this.route('fizzbuzz');
});
