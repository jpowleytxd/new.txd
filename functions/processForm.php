<?php


$apiURL =  'https://campaigns-plus.izone-app.com/api-v1/index.cfm';

$title = $_POST['title'];
$name = $_POST['name'];
$email = $_POST['email'];

print_r($name);
print_r($email);

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
                "fname": "' . $name . '"
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
    echo '<p><strong>Email triggering failed.</strong></p>';
    var_dump($error);
    var_dump($info);
    #return false;
} else {
    echo '<p><strong>Email successfuffy triggered.</strong></p>';
    var_dump($response);
    #return true;
}

?>
