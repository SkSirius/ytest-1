function videoService($state, $http, localStorageService) {
  let albumList = [];


  return {
    loadAlbums: (callback) => {
      $http.get('data.json')
        .then((result) => {
          localStorageService.set('albums', result.data.albums);
          albumList = result.data.albums;
          callback(albumList);
        });
    },

    title: () => 'test name',

    getAlbumList: (callback) => {
      let alb = localStorageService.get('albums');
      if (!alb) {
        this.loadAlbums(callback);
      } else {
        callback(alb);
      }
    },

    getAlbum(id) {
      albumList = localStorageService.get('albums');
      return albumList[id];
    },

    getAlbumItem: (listId, id) => {
      albumList = localStorageService.get('albums');
      return albumList[listId].items[id];
    },

    addItem: (id, item) => {
      albumList = localStorageService.get('albums');
      albumList[id].items.push(item);
      localStorageService.set('albums', albumList);
    }
  }

}

/* @ngInject */
export default videoService;
