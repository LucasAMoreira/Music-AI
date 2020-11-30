<?php

    //Conecta php ao Banco de dados.
    
    $host = "host = localhost";
    $port = "port = 5432";
    $username = "user = postgres";
    $password = "password = postgres";
    $dbname = "dbname = musicai"; 

    $db_connection = pg_connect("$host $port $dbname $username $password");

    if(!$db_connection) {
        //echo "Error : Unable to open database\n";
    } else {
        //echo "Opened database successfully\n";
    }
    
?>
