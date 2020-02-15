<?php
namespace Redaxscript;

use DOMDocument;
use DOMXPath;

$doc = new DOMDocument();
$doc->loadHTML(Db::forTablePrefix('articles')->where('alias', 'quick-start-1001')->findOne()->text, LIBXML_HTML_NODEFDTD | LIBXML_HTML_NOIMPLIED);
$xpath = new DOMXPath($doc);

/* process nodes */

foreach ($xpath->query('//a') as $node)
{
	$node->parentNode->removeChild($node);
}
return $doc->saveHTML();
