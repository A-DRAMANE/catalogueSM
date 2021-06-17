<?php
    header('Content-Type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");


        //recevoir toute les données
        if (isset($_GET['callData'])) {
            $response = array();

            //produit
            $data    = fopen( "DATA.txt", "r+" );
            $dataContent = "";
            for( $i = 0 ; $i < 10 ; $i++ ){
            $dataContent .= fgets($data, 4096);
            }

            
            $response['produits'] = $dataContent;

            fclose($data);

            //user
            $User    = fopen( "USER.txt", "r+" );
            $UserContent = "";
            for( $i = 0 ; $i < 10 ; $i++ ){
            $UserContent .= fgets($User);
            }

            $response['USER'] = $UserContent;

            fclose($User);

            
            $url1 = 'http://localhost:4000/index.php?callData';
            header("Refresh: 2;url=$url1");
            echo json_encode($response);
        }

        //sauvegardé info utilisateur
        if ( isset($_GET['USER'])) {

            $USER = $_GET['USER'];
            
            file_put_contents('USER.txt', $USER);
        }

        //ajouter un produit
        if ( isset($_GET['ADD'])) {

            $ADD = $_GET['ADD'];
            
            file_put_contents('DATA.txt', $ADD);
        }
            
    ?>