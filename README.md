# one-flash

[![NPM version][npm-image]][npm-url]
[![Dependency Status][david-image]][david-url]
[![Gittip][gittip-image]][gittip-url]


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
    req.oneFlash('hello render'); // notice how type is not required. It will default to 'info'.
    res.render('index', {
        title: 'Index - TEST'
    });
});
```

## Frontend

(Nunjucks + bootstrap.js 3.x)
```html
  {% for message in flash %}
  <div class="alert alert-{{ message.type }} alert-dismissible" role="alert">
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

The entire middleware is very small, and im not sure how to do automated test redirects without a complex Selenium setup. You should know in about two seconds if it doesnt work. Just copy/paste the router samples above and test it.

[npm-image]: https://img.shields.io/npm/v/one-flash.svg?style=flat-square
[npm-url]: https://npmjs.org/package/one-flash

[david-image]: https://david-dm.org/lordwingzero/one-flash.svg
[david-url]: https://david-dm.org/lordwingzero/one-flash

[gittip-image]: https://img.shields.io/gittip/jonathanong.svg?style=flat-square
[gittip-url]: https://www.gittip.com/lordwingzero/
