<?php
namespace Redaxscript;

$menuArray =
[
	'categories' => Db::forTablePrefix('categories')->whereNull('parent')->where('status', 1)->orderBySetting('rank')->findArray(),
	'articles' => Db::forTablePrefix('articles')->whereNull('category')->where('status', 1)->orderBySetting('rank')->findArray()
];
return $menuArray;