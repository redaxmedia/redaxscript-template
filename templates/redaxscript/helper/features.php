<?php
namespace Redaxscript;

$features = Db::forTablePrefix('articles')
	->where('alias', 'features')
	->findOne()
	->text;