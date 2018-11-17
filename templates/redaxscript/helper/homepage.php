<?php
namespace Redaxscript;

$parser = new Content\Parser(Registry::getInstance(), Request::getInstance(), Language::getInstance(), Config::getInstance());
$text = Db::forTablePrefix('extras')->where('alias', 'homepage')->findOne()->text;
$parser->process($text);
return $parser->getOutput();