<?php
$pid = $_GET['pid'];
$qty = $_GET['qty'];
$name = $_GET['name'];
$address = $_GET['address'];

$email = "217cis@gmail.com";
$subject = "Cosmic Pizza";
$message = "The order is:" . $qty . " " . $pid  . "\nName: " . $name . "\nAddress: " . $address;
$headers = "From: noReply@CosmicPizza.com";
mail($email, $subject, $message, $headers);

echo "<p class='reply'>Thank you for your order!</p>";
echo "<a href='index.html' title='Home'>Home</a>";

//????????????????????????????????????????????????????????????????

//$message = "";
//$pid = $_GET['product'];
//$p_price = $_GET['p_price'];
//
//$total = $_GET['total'];
//
//for($x = 0; $x < count($pid); $x++){
//    $pid = str_replace("X", " ", $pid[$x]);
//    $message .= "Pizza: " . $pid . "- Price: " . $p_price[$x] . "\n";
//}
//
//$message .= "Total: $" . $total;
//
//mail("dgagne2001@hotmail.com", "Customer Pizza Order", $message, "From: Cosmic Pizza");
//
//echo json_encode("Order Sent!");


