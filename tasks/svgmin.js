module.exports = () =>
{
	'use strict';

	const config =
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