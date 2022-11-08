<?php

/* file : Session.php
 * date : 25-Mar-2015
 * version : 1
 * Copyright Kagorus (Nathan Powell) 2015
 * 
 * 
 */

/*
 * Secure Session Starter
 */


class Common_Session{
    
    public static function sec_session_start(){
        $session_name = 'ed_tool_session';   // Set a custom session name
        // This stops JavaScript being able to access the session id.
        $httponly = true;
        // Forces sessions to only use cookies.
        if (ini_set('session.use_only_cookies', 1) === FALSE) {
            self::session_start();
            return;
        }
        // Gets current cookies params.
        $cookieParams = session_get_cookie_params();
        session_set_cookie_params($cookieParams["lifetime"], $cookieParams["path"], $cookieParams["domain"], "SECURE", $httponly);
        // Sets the session name to the one set above.
        session_name($session_name);
        session_start();            // Start the PHP session 
        session_regenerate_id(true);    // regenerated the session, delete the old one. 
    }
    public static function session_start(){
        session_start();
    }
    
    
}