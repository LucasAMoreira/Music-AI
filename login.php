<?php

    session_start();


    include "conecta.php";

    $email = $_POST["email"];
    $senha = $_POST["senha"];


    $query = "SELECT * FROM usuario WHERE email ='$email' AND senha = '$senha'";
    $result = pg_query($db_connection, $query);

    if(pg_num_rows($result)==0) {
        unset($_SESSION["n"]);
        unset($_SESSION["s"]);
        header("location:login.html");
    } else {
        
        $_SESSION["n"]=$cpf;
        $_SESSION["s"]=$senha;   
        header("location:minhaconta.html"); 
        
    }
    
?>
