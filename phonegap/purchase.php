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
