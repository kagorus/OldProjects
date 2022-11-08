<?php

/* file : Connection.php
 * date : 17-May-2015
 * version : 1
 * Copyright Kagorus (Nathan Powell) 2015
 * 
 * 
 */

/**
 * Class to Manage the user connection and handles logins.
 */
class User_Connection {

    public static function create_session($id) {
        // set session variables
            $_SESSION['User_Session'] = $id;
            Log::add("$id","User ID"); 
            return true;        
    }

}
