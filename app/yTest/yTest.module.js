import angular from 'angular';
import routing from './yTest.route';

import mainComponent from './components/main/main.component';
import albumComponent from './components/album/album.component';
import modalComponent from './components/album/modal.component';
import albumItemComponent from './components/albumItem/albumItem.component';

import service from './services/video.service';
/* @ngInject */
angular
  .module('yTest', [])
  .component('main', mainComponent)
  .component('albumItem', albumItemComponent)
  .component('album', albumComponent)
  .component('modal', modalComponent)
  .factory('videoService', service)
  .config(routing);
