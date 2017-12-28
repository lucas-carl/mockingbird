<?php

header('Access-Control-Allow-Origin: *');

require_once "scssphp/scss.inc.php";

use Leafo\ScssPhp\Compiler;

$githubRaw = 'https://raw.githubusercontent.com/lucas-carl/mockingbird/master/scss/';

$scss = new Compiler();
$input = '';

$input .= file_get_contents($githubRaw . 'config/_variables.scss');
$input .= file_get_contents($githubRaw . 'config/_mixins.scss');
$input .= file_get_contents($githubRaw . 'config/_reset.scss');

foreach ($_POST as $module => $value) {
	if ($value === 'on') {
		$input .= file_get_contents($githubRaw . '_' . $module . '.scss');
	}
}

$outputCSS = $scss->compile($input);

$tempFilename = 'temp/' . rand(100, 10000) . '.css';
$tempFile = fopen($tempFilename, 'w');

fwrite($tempFile, $outputCSS);
fclose($tempFile);

echo 'https://static.lucascarl.com/mockingbird/' . $tempFilename;
