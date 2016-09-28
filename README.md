#fetch-git-config
> fetch user's local or global .gitconfig

## Install

**Node.js 4 or higher**

    $ npm install fetch-git-config --save

## Usage

**fetch current working directory**

```js
var fetch = require('fetch-git-config');

fetch().then(function(data) {
  // do something
});
```

**fetch global**

```js
fetch('global').then(function(data) {
  // do something
});
```

**fetch custom path and cwd**

```js
fetch({cwd: 'foo', path: '.git/config'}).then(function(data) {
 // do something
});
```
