module.exports = grunt =>
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		htmlhint: require('./tasks/htmlhint')(grunt),
		jsonlint: require('./tasks/jsonlint')(grunt),
		ncsslint: require('./tasks/ncsslint')(grunt),
		postcss: require('./tasks/postcss')(grunt),
		rename: require('./tasks/rename')(grunt),
		svgmin: require('./tasks/svgmin')(grunt),
		tocgen: require('./tasks/tocgen')(grunt),
		webfont: require('./tasks/webfont')(grunt)
	});

	/* load tasks */

	require('load-grunt-tasks')(grunt);

	/* register tasks */

	grunt.registerTask('default',
	[
		'jsonlint',
		'stylelint',
		'colorguard',
		'ncsslint',
		'htmlhint'
	]);
	grunt.registerTask('stylelint',
	[
		'postcss:stylelint'
	]);
	grunt.registerTask('stylefmt',
	[
		'postcss:stylefmt'
	]);
	grunt.registerTask('colorguard',
	[
		'postcss:colorguard'
	]);
	grunt.registerTask('optimize',
	[
		'tocgen',
		'svgmin'
	]);
	grunt.registerTask('build',
	[
		'build-fonts',
		'build-styles'
	]);
	grunt.registerTask('build-fonts',
	[
		'webfont',
		'rename'
	]);
	grunt.registerTask('build-styles',
	[
		'postcss:templateRedaxscript'
	]);
};
