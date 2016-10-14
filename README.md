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
[ 'i want </b>my hat back</b>',
  'this is not </b>my hat',
  'all around </b>my hat',
  'wherever i lay </b>my hat' ]
```
