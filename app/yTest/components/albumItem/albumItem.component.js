import albumItemHtml from './albumItem.html';

/* @ngInject */
let albumItemComponent = {
  template: albumItemHtml,
  controllerAs: 'albumItem',
  controller: function(videoService, $stateParams, $sce) {
    let albumId = $stateParams.albumId;
    let id = $stateParams.id;
    this.video = videoService.getAlbumItem(albumId, id);
    this.video.url = $sce.trustAsResourceUrl(this.video.url);
  }

}
export default albumItemComponent;
