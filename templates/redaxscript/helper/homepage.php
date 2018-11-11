<?php
namespace Redaxscript;

return Db::forTablePrefix('extras')
	->where('alias', 'homepage')
	->findOne()
	->text;