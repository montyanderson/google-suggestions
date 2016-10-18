const querystring = require("querystring");
const got = require("got");

module.exports = function suggestions(q, options = {}) {
	return got(`https://www.google.co.uk/complete/search?sclient=psy-ab&site=&source=hp&q=${querystring.escape(q)}&cp=0&gs_id=13&xhr=t&tch=1&ech=9`)
	.then(response => {
		const data = JSON.parse(response.body.replace('/*""*/', ""), "");
		const results = JSON.parse(data.d)[1].map(r => r[0].replace(/<\w>/g, ""));

		if(options.raw) return results;

		return results.map(r => r.replace(/<(?:.|\n)*?>/gm, ""));
	});
};
