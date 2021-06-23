module.exports = {
	globDirectory: 'js/',
	globPatterns: [
		'**/*.js'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'js/sw.js'
};