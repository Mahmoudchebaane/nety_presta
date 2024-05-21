<?php
 
class CustomerMessage extends CustomerMessageCore {
  
    public $tel; 
 
    public $gsm;

    public $address;

    public $firstname;
    
    public function __construct($id= null, $id_lang = null, $id_shop = null){        
        self::$definition['fields']['gsm'] = array('type' => self::TYPE_HTML, 'lang' => false);
        self::$definition['fields']['tel'] = array('type' => self::TYPE_HTML, 'lang' => false);
        self::$definition['fields']['address'] = array('type' => self::TYPE_HTML, 'lang' => false);
        self::$definition['fields']['firstname'] = array('type' => self::TYPE_HTML, 'lang' => false);
        parent::__construct($id, $id_lang, $id_shop);
    }
 
}