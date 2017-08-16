module.exports = function (grunt)
{
	'use strict';

	grunt.path = require('path');

	/* config grunt */

	grunt.initConfig(
	{
		version: grunt.file.readJSON('package.json').version,
		jsonlint:
		{
			dependency:
			{
				src:
				[
					'composer.json',
					'package.json'
				]
			},
			ruleset:
			{
				src:
				[
					'.htmlhintrc',
					'.stylelintrc',
					'.tocgen'
				]
			}
		},
		ncsslint:
		{
			templateRedaxscript:
			{
				options:
				{
					path: 'templates/redaxscript/*.phtml',
					namespace: 'rs',
					loglevel: 'info',
					haltonerror: true
				}
			}
		},
		htmlhint:
		{
			templates:
			{
				src:
				[
					'templates/**/*.phtml'
				]
			},
			options:
			{
				htmlhintrc: '.htmlhintrc'
			}
		},
		postcss:
		{
			templateRedaxscript:
			{
				src:
				[
					'templates/redaxscript/assets/styles/_redaxscript.css'
				],
				dest: 'templates/redaxscript/dist/styles/redaxscript.min.css'
			},
			stylelint:
			{
				src:
				[
					'templates/*/assets/styles/*.css'
				],
				options:
				{
					processors:
					[
						require('stylelint'),
						require('postcss-reporter')(
						{
							throwError: true
						})
					]
				}
			},
			stylefmt:
			{
				src:
				[
					'templates/*/assets/styles/*.css'
				],
				options:
				{
					processors:
					[
						require('stylefmt')
					]
				}
			},
			colorguard:
			{
				src:
				[
					'templates/*/dist/styles/*.css'
				],
				options:
				{
					processors:
					[
						require('colorguard')(
						{
							threshold: 2,
							allowEquivalentNotation: true
						}),
						require('postcss-reporter')(
						{
							throwError: true
						})
					]
				}
			},
			options:
			{
				processors:
				[
					require('postcss-import'),
					require('postcss-custom-properties'),
					require('postcss-custom-media'),
					require('postcss-custom-selectors'),
					require('postcss-nesting'),
					require('postcss-extend'),
					require('postcss-color-gray'),
					require('postcss-color-function'),
					require('autoprefixer')(
					{
						browsers: 'last 2 versions'
					}),
					require('cssnano')(
					{
						autoprefixer: false,
						colormin: false,
						zindex: false
					})
				]
			}
		},
		webfont:
		{
			templateRedaxscript:
			{
				src:
				[
					'node_modules/redaxscript-flaticon/flaticon/essential/agenda.svg',
					'node_modules/redaxscript-flaticon/flaticon/design/cube.svg',
					'node_modules/redaxscript-flaticon/flaticon/essential/alarm.svg',
					'node_modules/redaxscript-flaticon/flaticon/essential/database-1.svg',
					'node_modules/redaxscript-flaticon/flaticon/essential/magic-wand.svg',
					'node_modules/redaxscript-flaticon/flaticon/essential/paper-plane-1.svg',
					'node_modules/redaxscript-flaticon/flaticon/essential/settings-6.svg',
					'node_modules/redaxscript-flaticon/flaticon/essential/stopwatch-1.svg',
					'node_modules/redaxscript-flaticon/flaticon/productivity-and-development/rocket-ship.svg',
					'node_modules/redaxscript-flaticon/flaticon/online-marketing/devices.svg',
					'node_modules/redaxscript-flaticon/flaticon/programming-line/command-line.svg',
					'node_modules/redaxscript-flaticon/flaticon/programming-line/editing-code.svg',
					'node_modules/redaxscript-flaticon/flaticon/science/atoms.svg',
					'node_modules/redaxscript-flaticon/flaticon/science/flask.svg',
					'node_modules/redaxscript-flaticon/flaticon/security/antivirus.svg',
					'node_modules/redaxscript-flaticon/flaticon/security/key.svg',
					'node_modules/redaxscript-flaticon/flaticon/seo-and-analytics/analytics-2.svg',
					'node_modules/redaxscript-flaticon/flaticon/stationery/layers.svg',
					'node_modules/redaxscript-flaticon/flaticon/stationery/paint-palette-1.svg',
					'node_modules/redaxscript-flaticon/flaticon/travel/cruise.svg'
				],
				dest: 'templates/redaxscript/dist/fonts'
			},
			options:
			{
				font: 'flaticon',
				destCss: 'templates/redaxscript/assets/styles',
				template: 'templates/redaxscript/assets/styles/_flaticon.tpl',
				types:
				[
					'woff',
					'woff2'
				],
				autoHint: false,
				htmlDemo: false
			}
		},
		shell:
		{
			tocTemplates:
			{
				command: 'sh vendor/bin/tocgen.sh templates/redaxscript/assets/styles .tocgen'
			},
			toclintTemplates:
			{
				command: 'sh vendor/bin/tocgen.sh templates/redaxmedia/assets/styles .tocgen -l'
			},
			options:
			{
				stdout: true,
				failOnError: true
			}
		},
		rename:
		{
			templateRedaxscript:
			{
				src:
				[
					'templates/redaxscript/assets/styles/flaticon.tpl'
				],
				dest: 'templates/redaxscript/assets/styles/_flaticon.css'
			}
		},
		svgmin:
		{
			templates:
			{
				src:
				[
					'templates/*/assets/images/*.svg'
				],
				expand: true
			},
			options:
			{
				plugins:
				[
					{
						removeViewBox: false
					}
				]
			}
		},
		watch:
		{
			styles:
			{
				files:
				[
					'assets/styles/*.css',
					'templates/**/assets/styles/*.css'
				],
				tasks:
				[
					'build-styles'
				]
			}
		}
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
		'htmlhint',
		'toclint'
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
	grunt.registerTask('toclint',
	[
		'shell:toclintTemplates'
	]);
	grunt.registerTask('toc',
	[
		'shell:tocTemplates'
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
