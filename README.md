#fetch-git-config
> fetch user's local or global .gitconfig

## Install

**Node.js 4 or higher**

    $ npm install fetch-git-config --save

## Usage

**fetch current working directory**

```js
var fetch = require('fetch-git-config');

// async
fetch().then(function(data) {
  // do something
});

// sync
var data = fetch.sync();
// do something
```

**fetch global**

```js
// async
fetch('global').then(function(data) {
  // do something
});

// sync
var data = fetch.sync('global');
```

**fetch custom path and cwd**

```js
// async
fetch({cwd: 'foo', path: '.git/config'}).then(function(data) {
 // do something
});

// sync
var data = fetch.sync({cwd: 'foo', path: '.git/config'});
```
