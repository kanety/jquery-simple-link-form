import $ from 'jquery';

import SimpleLinkForm from './simple-link-form';
import { NAMESPACE } from './consts';

$.fn.simpleLinkForm = function(options) {
  return this.each((i, elem) => {
    let $elem = $(elem);
    if (!$elem.data(NAMESPACE)) {
      $elem.data(NAMESPACE, new SimpleLinkForm($elem, options));
    }
  });
};

$.SimpleLinkForm = SimpleLinkForm;
