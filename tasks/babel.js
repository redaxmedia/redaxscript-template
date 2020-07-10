module.exports = () =>
{
	const config =
	{
		templateRedaxscript:
		{
			src:
			[
				'templates/redaxscript/assets/scripts/animation.js'
			],
			dest: 'templates/redaxscript/dist/scripts/redaxscript.min.js'
		},
		options:
		{
			presets:
			[
				'@babel/preset-env',
				'minify'
			]
		}
	};

	return config;
};
