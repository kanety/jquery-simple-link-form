describe('jquery-simple-link-form', () => {
  beforeEach(() => {
    document.body.innerHTML = __html__['index.html'];
    eval($('script').text());
  });

  describe('basic', () => {
    let $form;

    beforeEach((done) => {
      $form = $('#basic_form').on('submit', () => {
        done();
        return false;
      });
      $('#basic').find('a:first').click();
    });

    it('submit form', () => {
      expect($form.attr('action')).toEqual('index.html');
    });
  });

  describe('submitter', () => {
    let $form;

    beforeEach((done) => {
      $form = $('#submitter_form').on('submit', () => {
        done();
        return false;
      });
      spyOn(window, 'alert');
      $('#submitter').find('a:first').click();
    });

    it('submit form', () => {
      expect($form.attr('action')).toEqual('index.html');
      expect(window.alert).toHaveBeenCalledWith('submit1');
    });
  });
});
