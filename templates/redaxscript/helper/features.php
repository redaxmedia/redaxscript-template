<?php
namespace Redaxscript;

return Db::forTablePrefix('articles')->where('alias', 'features')->findOne()->text;