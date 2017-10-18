
import albumHtml from './modalContent.html';

let modalComponent = {
  template: albumHtml,
  controllerAs: 'modalItem',
  bindings: {
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;
    this.newVideo = {
      name: '',
      description: '',
      url: ''
    };

    this.ok = function () {
      $ctrl.close({ $value: $ctrl.newVideo });
    };

    this.cancel = function () {
      $ctrl.dismiss({ $value: {} });
    };
  }
};

export default modalComponent;
