<?php

/* file : JsonHandler.php
 * date : 07-Apr-2015
 * version : 1
 * Copyright Kagorus (Nathan Powell) 2015
 * 
 * 
 */

class Common_JsonHandler{
    
    public static function count($file){
        if(file_exists($file)){
            $json_file = file_get_contents($file);
            // convert the string to a json object
            $jfo = json_decode($json_file);
            print_r($jfo[0]);
            return;
        }
        echo"File $file Not Found";
    }
    public static function get_name($file,$name){
        if(file_exists($file)){
            $json_file = file_get_contents($file);
            // convert the string to a json object
            $jfo = json_decode($json_file);
            print_r($jfo[0]);
            return;
        }
        echo"File $file Not Found";
    }
}