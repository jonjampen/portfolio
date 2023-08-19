<?php
// To be tested on the server
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'jon.jampen@cryptography.ch';
    $subject = 'New Contact Form Submission';
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $editedMessage = "Name: " . $name . "/n/n Email: " . $email . "/n/n Message: " . $message;

    mail($to, $subject, $editedMessage, $headers);
}
