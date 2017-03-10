<?php
namespace Redaxscript\Template;

$navigationArray = [];
$articles = Tag::articleRaw()->where('author', 'api-sync')->orderByAsc('title')->findMany();
$parentAlias = 'api';

/* process articles */

foreach ($articles as $article)
{
	$navigationArray[$parentAlias]['children'][$article->alias] =
	[
		'title' => $article->title,
		'alias' => $article->alias,
		'route' => $parentAlias . '/' . $article->alias
	];
}
