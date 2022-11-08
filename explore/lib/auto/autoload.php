<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 //Default Register
spl_autoload_register(function($class){
    $path = str_replace("\\","/",$class);
    include __DIR__ . "/../{$path}.php";

});