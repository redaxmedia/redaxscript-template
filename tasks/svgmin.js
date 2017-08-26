module.exports = function ()
{
	'use strict';

	var config =
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
	};

	return config;
};