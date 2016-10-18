# google-suggestions
Scrape autocomplete suggestions from Google Search

```
npm install google-suggestions --save
```

``` javascript
const suggestions = require("google-suggestions");

suggestions("my hat")
	.then(response => console.log(response));

```

``` javascript
[ 'i want my hat back',
  'this is not my hat',
  'all around my hat',
  'wherever i lay my hat' ]
```
