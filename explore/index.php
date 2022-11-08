<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<?php
use user\manager;
use User\user;
//Boot Step 1 (Init AutoLoader)
require "lib/auto/autoload.php";

if (isset($_GET['_path'])) {
//Check Login State/Requirements
    if (file_exists("modules/" . $_GET['_path'] . ".tpl.php") || file_exists("modules/" . $_GET['_path'] . ".lgc.php")) {

        require("modules/" . $_GET['_path'] . ".lgc.php");
        require("modules/" . $_GET['_path'] . ".tpl.php");
        //Check if a login is required
        if ($requireLogin == TRUE) {
            //Login Check
//            manager::checkLogin();
        }
    } else {
        // Make Error Handler
        die;
    }
}
?>
