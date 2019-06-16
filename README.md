# jquery-simple-link-form

A jquery plugin for form linked to anchors.

## Dependencies

* jquery

## Installation

Install from npm:

    $ npm install @kanety/jquery-simple-link-form --save

## Usage

Build html as follows:

```html
<div id="link">
  <a href="index.html">link1</a>
  <a href="index.html">link2</a>
  <a href="index.html">link3</a>
</div>
<form id="form" method="get">
  <input type="text" name="text">
  <input type="submit">
</form>
```

Then run:

```javascript
$('#link').simpleLinkForm({
  form: '#form'
});
```

### Options

Change selectors:

```javascript
$('#link').simpleLinkForm({
  ...
  link: 'a[href]',
  submitter: 'input:submitter'
});
```

Change submitter per link:

```html
<div id="link">
  <a href="index.html" data-form-submitter="[name=submit1]">link1</a>
  <a href="index.html" data-form-submitter="[name=submit2]">link2</a>
  <a href="index.html" data-form-submitter="[name=submit3]">link3</a>
</div>
```

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
