<?php
require_once 'vendor/autoload.php';

// init configuration 
$clientID = '892440102955-q1n37244dkkp7ss2aapopef52hnflus3.apps.googleusercontent.com';
$clientSecret = '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';
$redirectUri = 'https://publicoches.es/index.html';

// create Client Request to access Google API 
$client = new Google_Client();
$client->setClientId($clientID);
$client->setClientSecret($clientSecret);
$client->setRedirectUri($redirectUri);
$client->addScope("email");
$client->addScope("profile");

?>