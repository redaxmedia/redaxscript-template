<?php
namespace Redaxscript\Template;

$navigationArray = [];
$optionArray =
[
	'api' =>
	[
		'author' => 'api-sync',
		'order' => 'title'
	],
	'documentation' =>
	[
		'author' => 'documentation-sync',
		'order' => 'rank'
	],
];
$firstParameter = Tag::getRegistry('firstParameter');
$author = $optionArray[$firstParameter]['author'];
$order = $optionArray[$firstParameter]['order'];
$categories = Tag::categoryRaw()->where('author', $author)->orderByAsc($order)->findMany();
$articles = Tag::articleRaw()->where('author', $author)->orderByAsc($order)->findMany();

/* process categories */

foreach ($categories as $category)
{
	if (!$category->parent)
	{
		$parentAlias = $category->alias;
		$navigationArray[$parentAlias] =
		[
			'title' => $category->title,
			'alias' => $category->alias,
			'route' => $category->alias
		];
	}
	else
	{
		$categoryAlias = $category->alias;
		$navigationArray[$parentAlias]['children'][$categoryAlias] =
		[
			'title' => $category->title,
			'alias' => $category->alias,
			'route' => $parentAlias . '/' . $category->alias
		];

		/* process articles */

		foreach ($articles as $article)
		{
			if ($article->category === $category->id)
			{
				$navigationArray[$parentAlias]['children'][$categoryAlias]['children'][$article->alias] =
				[
					'title' => $article->title,
					'alias' => $article->alias,
					'route' => $parentAlias . '/' . $category->alias . '/' . $article->alias
				];
			}
		}
	}
}