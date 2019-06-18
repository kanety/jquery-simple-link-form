# jquery-simple-link-form

A jquery plugin for form submittion through link.

## Dependencies

* jquery

## Installation

Install from npm:

    $ npm install @kanety/jquery-simple-link-form --save

## Usage

Build html as follows:

```html
<div id="link">
  <a href="index1.html">link1</a>
  <a href="index2.html">link2</a>
  <a href="index3.html">link3</a>
</div>
<form id="form" method="get">
  <input type="text" name="text">
  <input type="submit" style="display: none;">
</form>
```

Then run:

```javascript
$('#link').simpleLinkForm({
  form: '#form'
});
```

### Options

Set selectors and confirmation:

```javascript
$('#link').simpleLinkForm({
  ...
  link: 'a[href]',
  submit: 'input:submit',
  confirm: 'Are you sure?'
});
```

Set options per link:

```html
<!-- set form -->
<a href="index.html" data-form-name="FORM_NAME">link1</a>

<!-- set submitter -->
<a href="index.html" data-form-submit="BUTTON_NAME">link1</a>

<!-- set confirmation -->
<a href="index.html" data-form-confirm="Are you sure?">link1</a>
```

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
