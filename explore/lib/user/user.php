<?php

/* file : User.php
 * date : 21-May-2015
 * version : 1
 * Copyright Kagorus (Nathan Powell) 2015
 * 
 * 
 */

class User
{
    const SQL_SELECT="
       user_id as _user_id,
       user_name as _user_name,
       user_email as _user_email,
       user_last_login as _user_last_login,
       user_pass as _user_pass,
       user_salt as _user_salt
    ";
    
    private $_user_id =0;
    private $_user_name ="";
    private $_user_email ="";
    private $_user_last_login ="";
    private $_user_pass = "";
    private $_user_salt = "";
    private $_needs_update = false;

    /**
   * Getter for user_id attribute
   * 
   * @return int
   */
  public function get_user_id()
  {
    return $this->_user_id;
  }
  
  /**
   * Getter for user_name attribute
   * 
   * @return String
   */
  public function get_user_name()
  {
    return $this->_user_name;
  }
  
  /**
   * Getter for user_email attribute
   * 
   * @return String
   */
  public function get_user_email()
  {
    return $this->_user_email;
  }
    
  /**
   * Getter for user_last_login attribute
   * 
   * @return String
   */
  public function get_user_last_login()
  {
    return $this->_user_last_login;
  }
   
  /**
   * Setter for user_name attribute
   * 
   * @param String $user_name
   * 
   * @return User
   */
  public function set_user_name($user_name)
  {
    $this->_user_name    = (String)$user_name;
    $this->_needs_update = true;
    
    return $this;
  } 
  
  /**
   * Setter for user_email attribute
   * 
   * @param String $user_email
   * 
   * @return User
   */
  public function set_user_email($user_email)
  {
    $this->_user_email   = (String)$user_email;
    $this->_needs_update = true;
    
    return $this;
  }
  
  /**
   * Setter for user_last_login attribute
   * 
   * @param String $user_last_login
   * 
   * @return User
   */
  public function set_user_last_login($user_last_login)
  {
    $this->_user_last_login   = (String)$user_last_login;
    $this->_needs_update = true;
    
    return $this;
  }
  public function verify($password){
      $hash = User_Manager::user_hash($password, $this->_user_salt);
      
      
      if ($hash == $this->_user_pass){
          $this->_user_pass = "";
          $this->_user_salt= "";
          return TRUE;
      }
      return FALSE;
  }
  
  public function save()
  {
    if (!$this->_needsUpdate) {
      return true;
    }
    
    return (Boolean)Common_Database::query("
      UPDATE
        " . DB_TABLE_PREFIX . "users
      SET
        user_name = :uname,
        user_email = :email,
        user_last_login = :l_log
      WHERE
        user_id = :uid
      ", [
      "uname" => $this->get_user_name(),
      "email" => $this->get_user_email(),
      "l_log" => $this->get_user_last_login(),
      "uid"   => $this->get_user_id()
    ]);
  }
}
//$user= new User();
//$user ->set_user_name("kagorus") 
//      ->set_user_email("Its so Fluffy!")
//      ->save();

