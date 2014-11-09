<?
require(__DIR__ . '/SimpleImage.php');
require(__DIR__ . '/generator.class.php');

$smiles = new Smiles(array(
    'ROOT_DIR' => __DIR__,
    'INPUT_DIR' => '/demo/emoji',
    'OUTPUT_DIR' => '/demo/result',

    'SMILE_WIDTH' => 16,
    'SMILE_HEIGHT' => 16,
    'MAX_COLS' => 10 //maximum cols of the result image
));

$smiles->generate();

