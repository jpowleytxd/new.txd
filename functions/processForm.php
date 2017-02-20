<?php

/*
1. Get all data from post
2. Send data to TXD
3. Send receipt to user
*/


$apiURL =  'https://campaigns-plus.izone-app.com/api-v1/index.cfm';

//Get all user data from post
$title = trim($_POST['title']);
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$enquiry = trim($_POST['enquiry']);

// print_r($name);
// print_r($email);

$to = 'jorden.powley@txdlimited.co.uk';
$subject = 'Email Enquiry Test';
$message = $enquiry;
$headers = "From: {$email} . \r\n";

mail($to, $subject, $message, $headers);

//Prep API data
$data = '{
   "request": {
        "username": "txduser",
        "password": "txdpassword",
        "method": "triggeredComm"
    },
    "details": {
        "commType": "Email",
        "key": "7D333FA0-5056-A620-BEC7FC1FA49E68FF",
        "recipients": [
            {
                "recipient": "' . $email . '",
                "fname": "' . $name . '",
                "dyn1": "' . $enquiry . '"
            }
        ]
    }
}';

$request = 'request=' . urlencode($data);

$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => "https://campaigns-plus.izone-app.com/api-v1/index.cfm",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POST => 1,
    CURLOPT_POSTFIELDS => $request,
));
$response = curl_exec($curl);
$error = curl_error($curl);
$info = curl_getinfo($curl);
curl_close($curl);

if ($error) {
    echo 'fail';
} else {
    echo 'success';
}

?>
