<?php
namespace Redaxscript;

return Db::forTablePrefix('articles')
	->where('alias', 'quick-start-1001')
	->findOne()
	->text;