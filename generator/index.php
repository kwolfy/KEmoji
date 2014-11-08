<?
require(__DIR__ . '/SimpleImage.php');

define('SMILES_DIR', __DIR__ . '/demo/emoji');
define('SAVE_DIR', __DIR__ . '/demo/result');


$files = scandir(SMILES_DIR);
$smiles = new Smiles();

foreach($files as $file)
    if($file != '.' && $file != '..')
        $smiles->add($file);

$smiles->generate();

Class Smiles
{
    protected $smiles = [];

    const SMILE_WIDTH = 16;
    const SMILE_HEIGHT = 16;

    const MAX_ROWS = 24;

    public function __construct()
    {

    }

    public function add($smile)
    {
        $this->smiles[] = $smile;
    }

    public function generate()
    {
        $count = count($this->smiles);
        $width = self::SMILE_WIDTH * self::MAX_ROWS;
        $height = ceil($count / self::MAX_ROWS) * self::SMILE_HEIGHT;

        $image = new abeautifulsite\SimpleImage(null, $width, $height, '#fff');
        $image->colorize('#fff', .0);

        $css = '.ke{
    display:inline-block;
    width:' . self::SMILE_WIDTH . 'px;
    height:' . self::SMILE_HEIGHT . 'px;
    background:url("emoji.png");
};
        ';
        $names = [];
        $row = 1; $col = 1;
        foreach($this->smiles as $smile){
            $x = $row * self::SMILE_WIDTH - self::SMILE_WIDTH;
            $y = $col * self::SMILE_HEIGHT - self::SMILE_HEIGHT;

            $image->overlay(SMILES_DIR . '/' . $smile, 'top left', 1, $x, $y);

            $name = substr($smile, 0, strrpos($smile, '.'));
            $css.= "\r\n\r\n.ke-" . $name ."{
    background-position: -" . $x .'px -' . $y . 'px;
}';

            $names[] = $name;

            $row++;
            if($row > self::MAX_ROWS){
                $row = 1;
                $col++;
            }
        }

        $image->save(SAVE_DIR . '/emoji.png');
        $fp = fopen(SAVE_DIR . '/emoji.css', 'w');
            fwrite($fp, $css);
        fclose($fp);

        $fp = fopen(SAVE_DIR . '/smiles.json', 'w');
            fwrite($fp, json_encode($names));
        fclose($fp);
    }

}