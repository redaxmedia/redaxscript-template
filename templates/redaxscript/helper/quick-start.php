<?php
namespace Redaxscript;

use DOMDocument;
use DOMXPath;

$doc = new DOMDocument();
$doc->loadHTML(Db::forTablePrefix('articles')->where('alias', 'quick-start-1001')->findOne()->text);
$xpath = new DOMXPath($doc);

foreach ($xpath->query('//a') as $node)
{
	$node->parentNode->removeChild($node);
}
return $doc->saveHTML();
