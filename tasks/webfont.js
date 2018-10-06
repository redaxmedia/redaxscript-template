module.exports = () =>
{
	'use strict';

	const config =
	{
		templateRedaxscript:
		{
			src:
			[
				'node_modules/redaxscript-flaticon/flaticon/design/cube.svg',
				'node_modules/redaxscript-flaticon/flaticon/essential/agenda.svg',
				'node_modules/redaxscript-flaticon/flaticon/essential/alarm.svg',
				'node_modules/redaxscript-flaticon/flaticon/essential/database-1.svg',
				'node_modules/redaxscript-flaticon/flaticon/essential/magic-wand.svg',
				'node_modules/redaxscript-flaticon/flaticon/essential/paper-plane-1.svg',
				'node_modules/redaxscript-flaticon/flaticon/essential/settings-6.svg',
				'node_modules/redaxscript-flaticon/flaticon/essential/stopwatch-1.svg',
				'node_modules/redaxscript-flaticon/flaticon/online-marketing/devices.svg',
				'node_modules/redaxscript-flaticon/flaticon/productivity-and-development/rocket-ship.svg',
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
			dest: 'templates/redaxscript/dist/fonts',
			options:
			{
				destCss: 'templates/redaxscript/assets/styles',
				template: 'templates/redaxscript/assets/styles/_template.css'
			}
		},
		options:
		{
			font: 'flaticon',
			types:
			[
				'woff2'
			],
			autoHint: false,
			htmlDemo: false
		}
	};

	return config;
};