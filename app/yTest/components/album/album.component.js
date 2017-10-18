import albumHtml from './album.html';

/* @ngInject */
let albumComponent = {
  template: albumHtml,
  controllerAs: 'album',
  controller: function(videoService, $stateParams, $uibModal, $log) {
    let id = $stateParams.id;
    let self = this;
    this.album = videoService.getAlbum(id);

    this.open = function () {
      var modalInstance = $uibModal.open({ component: 'modal' });

      modalInstance.result.then(function (selectedItem) {
        selectedItem.id = self.album.items.length;
        self.album.items.push(selectedItem);
        videoService.addItem(id, selectedItem);
      }, function () {
        $log.info('modal-component dismissed at: ' + new Date());
      });
    };
  }
}

export default albumComponent;
