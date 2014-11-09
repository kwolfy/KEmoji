<?php

Class Smiles
{
    private $smiles = array();

    private $SMILE_WIDTH = 16;
    private $SMILE_HEIGHT = 16;

    private $MAX_COLS = 20;

    private $INPUT_DIR = '/demo/emoji';
    private $OUTPUT_DIR = '/demo/result';

    private $ROOT_DIR = __DIR__;


    public function __construct($options = array())
    {
        if(isset($options['SMILE_WIDTH']))
            $this->SMILE_WIDTH = $options['SMILE_WIDTH'];
        if(isset($options['SMILE_HEIGHT']))
            $this->SMILE_HEIGHT = $options['SMILE_HEIGHT'];
        if(isset($options['MAX_COLS']))
            $this->MAX_COLS = $options['MAX_COLS'];

        if(isset($options['INPUT_DIR']))
            $this->INPUT_DIR = $options['INPUT_DIR'];
        if(isset($options['OUTPUT_DIR']))
            $this->OUTPUT_DIR = $options['OUTPUT_DIR'];
        if(isset($options['ROOT_DIR']))
            $this->ROOT_DIR = $options['ROOT_DIR'];

        $files = scandir($this->getInputDir());

        foreach($files as $file)
            if($file != '.' && $file != '..')
                $this->add($file);

    }

    public function add($smile)
    {
        $this->smiles[] = $smile;
    }

    private function getInputDir()
    {
        return $this->ROOT_DIR . $this->INPUT_DIR;
    }

    private function getOutputDir()
    {
        return $this->ROOT_DIR . $this->OUTPUT_DIR;
    }


    public function generate()
    {
        $count = count($this->smiles);
        $width = $this->SMILE_WIDTH * $this->MAX_COLS;
        $height = ceil($count / $this->MAX_COLS) * $this->SMILE_HEIGHT;

        $image = new abeautifulsite\SimpleImage(null, $width, $height, '#fff');
        $image->colorize('#fff', .0);

        $css = '.ke{
    display:inline-block;
    width:' . $this->SMILE_WIDTH . 'px;
    height:' . $this->SMILE_HEIGHT . 'px;
    background:url("emoji.png");
}
        ';
        $names = array();
        $row = 1; $col = 1;
        foreach($this->smiles as $smile){
            $x = $row * $this->SMILE_WIDTH - $this->SMILE_WIDTH;
            $y = $col * $this->SMILE_HEIGHT - $this->SMILE_HEIGHT;

            $image->overlay($this->getInputDir() . '/' . $smile, 'top left', 1, $x, $y);

            $name = substr($smile, 0, strrpos($smile, '.'));
            $css.= "\r\n\r\n.ke-" . $name ."{
    background-position: -" . $x .'px -' . $y . 'px;
}';

            $names[] = $name;

            $row++;
            if($row > $this->MAX_COLS){
                $row = 1;
                $col++;
            }
        }

        $image->save($this->getOutputDir() . '/emoji.png');
        $fp = fopen($this->getOutputDir() . '/emoji.css', 'w');
        fwrite($fp, $css);
        fclose($fp);

        $fp = fopen($this->getOutputDir() . '/smiles.json', 'w');
        fwrite($fp, json_encode($names));
        fclose($fp);
    }

}