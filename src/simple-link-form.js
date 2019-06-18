import $ from 'jquery';

import { NAMESPACE } from './consts';

const DEFAULTS = {
  link: 'a',
  form: 'form',
  submit: 'input:submit',
  confirm: null
};

export default class SimpleLinkForm {
  constructor(element, options = {}) {
    this.options = $.extend({}, DEFAULTS, options);

    this.$container = $(element);

    this.uid = new Date().getTime() + Math.random();
    this.namespace = `${NAMESPACE}-${this.uid}`;

    this.init();
  }

  init() {
    this.$container.addClass(NAMESPACE);

    this.unbind();
    this.bind();
  }

  bind() {
    this.$container.on(`click.${this.namespace}`, this.options.link, (e) => {
      this.submit($(e.currentTarget));
      e.preventDefault();
    });
  }

  unbind() {
    this.$container.off(`.${this.namespace}`);
  }

  form($link) {
    let name = $link.data('form-name');
    if (name) {
      return $(`form[name="${name}"]`);
    } else {
      return $(this.options.form);
    }
  }

  submitter($link, $form) {
    let name = $link.data('form-submit');
    if (name) {
      return $form.find(`[name="${name}"]`);
    } else {
      return $form.find(this.options.submit);
    }
  }

  confirmation($link) {
    return $link.data('form-confirm') || this.options.confirm;
  }

  submit($link) {
    let $form = this.form($link);
    let confirmation = this.confirmation($link);

    if (confirmation) {
      $form.off(`submit.${this.namespace}`).on(`submit.${this.namespace}`, (e) => {
        if (!confirm(confirmation)) {
          e.preventDefault();
          return false;
        }
      });
    }

    let $submitter = this.submitter($link, $form);
    if ($submitter.length) {
      $form.attr('action', $link.attr('href'))
      $submitter.click();
    }
  }

  static getDefaults() {
    return DEFAULTS;
  }

  static setDefaults(options) {
    $.extend(DEFAULTS, options);
    return DEFAULTS;
  }
}
