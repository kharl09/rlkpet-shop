<?php
$amount = $_POST['amount'];
$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://pg-sandbox.paymaya.com/payments/v1/payment-tokens",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => array(
        "Authorization: Basic {your-paymaya-api-key}",
        "Content-Type: application/json"
    ),
    CURLOPT_POSTFIELDS => json_encode(array(
        "amount" => array("value" => $amount),
        "currency" => "PHP",
        "redirect_url" => array(
            "success" => "http://your-website.com/success",
            "failure" => "http://your-website.com/failure",
            "cancel" => "http://your-website.com/cancel"
        )
    ))
));

$response = curl_exec($curl);
curl_close($curl);
echo $response;
?>

