import $ from 'jquery';

import { NAMESPACE } from './consts';

const DEFAULTS = {
  link: 'a',
  form: 'form',
  submitter: 'input:submit'
};

export default class SimpleLinkForm {
  constructor(element, options = {}) {
    this.options = $.extend({}, DEFAULTS, options);

    this.$container = $(element);
    this.$form = $(this.options.form);

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

  submit($link) {
    this.$form.attr('action', $link.attr('href'));
    this.submitter($link).click();
  }

  submitter($link) {
    let selector = $link.data('form-submitter') || this.options.submitter;
    return this.$form.find(selector);
  }

  static getDefaults() {
    return DEFAULTS;
  }

  static setDefaults(options) {
    $.extend(DEFAULTS, options);
    return DEFAULTS;
  }
}
