module.exports = () =>
{
	'use strict';

	const config =
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
				'templates/*/assets/styles/*.css',
				'!templates/*/assets/styles/_template.css'
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
				'templates/*/assets/styles/*.css',
				'!templates/*/assets/styles/_template.css'
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
				require('postcss-custom-properties')(
				{
					preserve: false
				}),
				require('postcss-custom-media'),
				require('postcss-custom-selectors'),
				require('postcss-nesting'),
				require('postcss-extend'),
				require('postcss-color-gray')(
				{
					preserve: false
				}),
				require('postcss-color-function'),
				require('postcss-rtl'),
				require('autoprefixer')(
				{
					browsers: 'last 2 versions'
				}),
				require('cssnano')(
				{
					colormin: false,
					reduceIdents: false,
					zindex: false
				})
			]
		}
	};

	return config;
};