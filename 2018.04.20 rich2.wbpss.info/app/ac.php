<?php

$PageId = 1;
$data = array(
	"LastName" => htmlspecialchars($_POST['Fname']), 
	"FirstName" => htmlspecialchars($_POST['Lname']),
	"Email" => htmlspecialchars($_POST['Email']), 
	"PhoneNumber" => htmlspecialchars($_POST['Code2']).$_POST['Phone'],
	#"CustomerDateTime" => htmlspecialchars($_POST['DateTime']),
	"CustomerDateTime" => date("Y-m-d H:i:s"),
	"CustomerSystemInfo" => $_SERVER['HTTP_USER_AGENT'],
	"IpAdress" => getUserIP(), 
	"PageId"=>$PageId
);                                                                    
$data_string = json_encode($data);                                                                                   
$user_agent = $_SERVER['HTTP_USER_AGENT'];
$ch = curl_init('http://peoplesender.info/api/Lids/');                                                                      
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_PORT, 80);                                                                     
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);                                                                  
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                      
curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
    'Content-Type: application/json',                                                                                
    'Content-Length: ' . strlen($data_string))                                                                       
);                                                                                                                   
                                                                                                                     
$result = curl_exec($ch);
echo curl_exec($ch);

$response = curl_exec($ch);
$err = curl_error($ch);

curl_close($ch);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
  header("location: thanks.html");
}

function getUserIP() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if(isset($_SERVER['HTTP_X_CLUSTER_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if(isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}

?>