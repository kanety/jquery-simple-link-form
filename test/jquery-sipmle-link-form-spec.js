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

  describe('submit1', () => {
    let $form;

    beforeEach((done) => {
      $form = $('#submit_form1').on('submit', () => {
        done();
        return false;
      });
      spyOn(window, 'alert');
      spyOn(window, 'confirm');
      $('#submit').find('a').eq(0).click();
    });

    it('submit form', () => {
      expect($form.attr('action')).toEqual('index.html');
      expect(window.alert).toHaveBeenCalledWith('submit1');
      expect(window.confirm).toHaveBeenCalledWith('Are you sure?');
    });
  });

  describe('submit2', () => {
    let $form;

    beforeEach((done) => {
      $form = $('#submit_form1').on('submit', () => {
        done();
        return false;
      });
      spyOn(window, 'alert');
      spyOn(window, 'confirm');
      $('#submit').find('a').eq(1).click();
    });

    it('submit form', () => {
      expect($form.attr('action')).toEqual('index.html');
      expect(window.alert).toHaveBeenCalledWith('submit2');
      expect(window.confirm).toHaveBeenCalledWith('Are you sure?');
    });
  });

  describe('submit3', () => {
    let $form;

    beforeEach((done) => {
      $form = $('#submit_form2').on('submit', () => {
        done();
        return false;
      });
      spyOn(window, 'alert');
      spyOn(window, 'confirm');
      $('#submit').find('a').eq(2).click();
    });

    it('submit form', () => {
      expect($form.attr('action')).toEqual('index.html');
      expect(window.alert).toHaveBeenCalledWith('submit3');
      expect(window.confirm).toHaveBeenCalledWith('Are you sure 3?');
    });
  });
});
