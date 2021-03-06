<?php
namespace Redaxscript;

$parser = new Content\Parser(Registry::getInstance(), Request::getInstance(), Language::getInstance(), Config::getInstance());
$text = Db::forTablePrefix('extras')->where('alias', 'branding')->findOne()->text;
$parser->process($text);
return $parser->getOutput();