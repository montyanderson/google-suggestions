const suggestions = require("../");
const assert = require("assert");

describe("suggestions", () => {
		const p = suggestions("my hat");

		it("should return at least 4 results", () => {
			return p.then(results => assert(results.length >= 4));
		});

		it("should return all strings", () => {
			return p.then(results => assert(results.every(a => typeof a == "string")));
		});

		it("should not contain html", () => {
			return p.then(results => results.every(a => {
				assert(!a.includes("<"));
				assert(!a.includes(">"));
			}));
		});
});
