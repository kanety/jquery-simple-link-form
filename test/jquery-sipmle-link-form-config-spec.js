describe('jquery-simple-link-form-config', () => {
  describe('config', () => {
    it('gets and sets defaults', () => {
      let defaults = $.SimpleLinkForm.getDefaults();
      expect(defaults.link).toEqual('a');

      defaults = $.SimpleLinkForm.setDefaults({link: 'a[href]'});
      expect(defaults.link).toEqual('a[href]');
    });
  });
});
