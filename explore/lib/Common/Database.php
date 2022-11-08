<?php

/* file : Database.php
 * date : 29-Mar-2015
 * version : 1
 * Copyright Kagorus (Nathan Powell) 2015
 * 
 * 
 */

class Common_Database {

    private static $_db = NULL;

    

    // Makes The Connection
    public static function connect() {
        if (self::$_db === NULL) {

            self::$_db = new PDO(
                "mysql:host=" . DB_HOST . ";dbname=" . DB_DATABASE, DB_USER, DB_PASSWORD
            );
            
        }
    }

    public static function query($sql, $params) {
        self::connect();
        $statment = self::$_db->prepare($sql);
        $statment->execute($params);
        return $statment;
    }

    public static function query_fetch($sql, $params) {
        $stmt = self::query($sql, $params);

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public static function query_fetch_all($sql, $params) {
        $stmt = self::query($sql, $params);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    public static function query_fetch_object($sql, $params,$class_name = "stdClass") {
        $stmt = self::query($sql, $params);

        return $stmt->fetchObject($class_name);
    }
}
