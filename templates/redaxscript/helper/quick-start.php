<?php
namespace Redaxscript;

return strip_tags(Db::forTablePrefix('articles')->where('alias', 'quick-start-1001')->findOne()->text, '<h3><p><pre>');