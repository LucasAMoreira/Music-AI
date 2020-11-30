<?php

    include "conecta.php";

    $nome               = $_POST["nome"];
    $senha              = $_POST["senha"];
    $email              = $_POST["email"];

    $query = "INSERT INTO usuario VALUES ('$nome', '$senha', '$email')";
    //echo $query;

    set_error_handler("warning_handler", E_WARNING);    

    $result = pg_query($db_connection, $query);

    restore_error_handler();

    function warning_handler($errno, $errstr) { 
        if (strpos($errstr, 'usuario_pkey') !== false) {
             echo "Erro"
            //header("location:usuarioJaCadastrado.html");
            exit;
        } else {
            //header("location:errosDiversos.html");
            echo "Erro (2)"
            exit;
    
        }
    }
    

    header("location:login.html");

?>
