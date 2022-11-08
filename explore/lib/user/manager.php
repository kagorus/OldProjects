<?php

/* file : Manager.php
 * date : 31-Mar-2015
 * version : 1
 * Copyright Kagorus (Nathan Powell) 2015
 * 
 * 
 */

class User_Manager{
    //Step 1 When Site Loads To Check if the user is logged in or not
    public static function get() {
        /*
         * Code To Run When A Login Form Is Submitted
         */
        if(isset($_POST['login_user']) && isset($_POST['login_password'])){
            $name = $_POST['login_user'];
            $password = $_POST['login_password'];

            return User_Manager::load_from_credentials($name, $password);
        }
        /*
         * Code To Run When Logged In
         */
        elseif ($_SESSION['User_Session'] !== NULL){
            return User_Manager::load_from_session();
        }
       
        /*
         * Not Logged In
         */
        return null;
        
        
    }
    public static function load_from_session(){
        if(empty($_SESSION['User_Session'])){
            return NULL;
        }
        $user = Common_Database::query_fetch_object(
            "SELECT " . User::SQL_SELECT . " FROM ".DB_TABLE_PREFIX."users WHERE `user_id` = :id",
            array("id"=>$_SESSION['User_Session']),"User"
        );
        return $user;
        
    }
    public static function load_from_credentials($name,$password){
        $user = Common_Database::query_fetch_object(
            "SELECT " . User::SQL_SELECT . " FROM ".DB_TABLE_PREFIX."users WHERE `user_name` = :name",
            array("name"=>$name),"User"
            
        );
        //Hash Password
        
        if($user instanceof User && $user ->verify($password)){
           //Correct Username
           
           if (User_Connection::create_session($user->get_user_id())){
               
               return $user;
               
           }
           
        }

        print "Inncorrect Password";
        return NULL;
    } 
    
//   public static function create_user($user,$password){
//        //Finish me when user registration is needed.
//        $user_salt = uniqid(mt_rand(), true);
//        $user_password = User_Manager::user_hash($password, $user_salt);
//        print $user_salt . "<br>";
//        print $user_password;
//        
//   }
    public static function user_hash($password,$salt){
        $data = hash('sha512', $password . $salt);
        
        return $data;
    }
}