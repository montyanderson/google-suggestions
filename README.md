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
