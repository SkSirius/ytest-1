import angular from 'angular';
import uirouter from 'angular-ui-router';
import localStorage from 'angular-local-storage';
import example from './yTest/yTest.module';
import bootstrap from  'angular-ui-bootstrap';

require('./main.scss');
angular.module('app', [
  uirouter,
  'yTest',
  bootstrap,
  localStorage
]);
