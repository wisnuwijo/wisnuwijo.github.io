<?php

$myObj->messaging_product = "whatsapp";
$myObj->contacts = [
        [
            "input" => "6289689055106",
            "wa_id" => "6289689055106"
        ]
    ];
$myObj->messages = [
        [
            "id" => "QMgz4HmT5WXiN7qersCVAXwn"
        ]
    ];

$myJSON = json_encode($myObj);
return $myJSON;
