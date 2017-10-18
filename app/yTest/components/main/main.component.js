import mainHtml from './main.html';

/* @ngInject */
let mainComponent = {
  template: mainHtml,
  controllerAs: 'main',
  controller: function(videoService) {
    this.albums = [];
    videoService.getAlbumList((result) => {
      this.albums = result;
    });
  }

}
export default mainComponent;
