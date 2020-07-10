rs.templates.redaxscript.animation.process = optionArray =>
{
	const OPTION =
	{
		...rs.templates.redaxscript.animation.optionArray,
		...optionArray
	};
	const animationList = document.querySelectorAll(OPTION.selector);

	if (animationList)
	{
		animationList.forEach(animationElement => rs.templates.redaxscript.animation.randomize(animationElement));
	}
};

rs.templates.redaxscript.animation.randomize = animationElement =>
{
	animationElement.style.animationDelay = '-' + Math.floor(Math.random() * (80 - 20) + 20) + 's';
	animationElement.style.opacity = 1;
};

/* run as needed */

if (!rs.registry.firstParameter)
{
	rs.templates.redaxscript.animation.process();
}
