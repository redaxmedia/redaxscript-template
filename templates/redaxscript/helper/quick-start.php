<?php
namespace Redaxscript;

use DOMDocument;

$doc = new DOMDocument();
$html = '<div>' . Db::forTablePrefix('articles')->where('alias', 'quick-start-1001')->findOne()->text . '</div>';
$doc->loadHTML($html, LIBXML_HTML_NODEFDTD | LIBXML_HTML_NOIMPLIED);
foreach ($doc->getElementsByTagName('a') as $element)
{
	$element->parentNode->removeChild($element);
}
return $doc->saveHTML();
