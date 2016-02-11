# one-flash

[![NPM version][npm-image]][npm-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]


A flash implementation for Express that goes away after the first navigation.

## Usage

```bash
npm install one-flash --save
```

## Backend

add it as middleware AFTER session() in your app.js
```js
app.use(session());
app.use(require('one-flash'));
```

In routes (or any handler)
```js
router.get('/flash', function(req, res) {
    req.oneFlash('warning', 'hello redirect');
    res.redirect('/');
});

router.get('/flashrender', function(req, res) {
    req.oneFlash('hello render');
    res.render('index', {
        title: 'Index - TEST'
    });
});
```

## Frontend

(Nunjucks + bootstrap.js 3.x)
```html
  {% for message in flash %}
  <div class="alert alert-{{ message.type if message.type else "info" }} alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    {{ message.message }}
  </div>
  {% endfor %}
```

## API
oneFlash adds a property to locals called "flash", its value is an array of "flash" objects.
```js
res.locals.flash = [
  {
    type: 'info',
    message: 'hello flash',
  }
];

```

## Tests

None yet. You should know in less than 60 seconds if its working or not. Just output the value of flash in your view.

[npm-image]: https://img.shields.io/npm/v/flash.svg?style=flat-square
[npm-url]: https://npmjs.org/package/flash

[david-image]: https://david-dm.org/logwingzero/one-flash.svg
[david-url]: https://david-dm.org/logwingzero/one-flash

[license-image]: http://img.shields.io/npm/l/one-flash.svg?style=flat-square
[license-url]: LICENSE

[downloads-image]: http://img.shields.io/npm/dm/one-flash.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/one-flash

[gittip-image]: https://img.shields.io/gittip/jonathanong.svg?style=flat-square
[gittip-url]: https://www.gittip.com/lordwingzero/