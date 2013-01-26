JQueryLessAjax
========

JQuery like syntax for AJAX without the whole of JQuery, for modern browsers.

#### Motivation ####

Rough and ready JQuery based syntax for AJAX at a small size.

Inspired by [Rob Hawkes' tweet](https://twitter.com/robhawkes/status/294940626967998464):
```
Necessary JS is fine. 
Whacking in the whole of jQuery for AJAX...
not so fine ;)
```

### Caution ###

Rough and ready, quickly written, won't work in all cases - doesn't provide full functionality etc..

### Usage ###

Download the [minified library](http://benaadams.github.com/JQueryLessAjax/build/jqueryless-ajax.min.js) and include it in your html.

```html
<script src="js/jqueryless-ajax.min.js"></script>
```

Get request with parameters returning JSON:

```javascript
$.get(
    '/url_to_post_to?id=5',
    {data1: 34, name: "hello" },
    function callback(json){
        ... // do something with json
    },
    'json'
);
```

POST request with parameters an no return callback:

```javascript
$.post(
    '/url_to_post_to?id=5',
    {data1: 34, name: "hello" }
);
```

POST request with parameters returning an ArrayBuffer:

```javascript
$.post(
    '/url_to_post_to?id=5',
    {data1: 34, name: "hello" },
    function callback(arraybuffer){
        ... // do something with arraybuffer
    },
    'arraybuffer'
);
```

POST request returning HTML or text:

```javascript
$.post(
    '/url_to_post_to',
    function callback(data){
        ... // do something with data
    },
    'text'
);
```

POST request returning JSON:

```javascript
$.post(
    '/url_to_post_to',
    function callback(json){
        ... // do something with json
    },
    'json'
);
```

POST request returning a Uint8Array:

```javascript
$.post(
    '/url_to_post_to',
    function callback(arraybuffer){
        var uint8Array = new Uint8Array(arraybuffer);
        ... // do something with uint8Array
    },
    'arraybuffer'
);
```

POST request returning a blob:

```javascript
$.post(
    '/url_to_post_to',
    function callback(blob){
        ... // do something with blob
    },
    'blob'
);
```

POST request returning xml:

```javascript
$.post(
    '/url_to_post_to',
    function callback(xml){
        ... // do something with xml
    },
    'document'
);
```