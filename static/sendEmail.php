<?php
// To be tested on the server
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // email
    $myEmail = 'jon.jampen@cryptography.ch';
    $subject = 'New Contact Form Submission';
    $editedMessage = "Name: " . $name . "\n\n Email: " . $email . "\n\n Message: " . $message;
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // confirmation email
    $subjectConf = "Confirmation email: Message to Jon Jampen";
    $messageConf = "Thank you for your message! I will get back to you as soon as possible. If you have any other remarks, please reply to this email. \n\n" . "Your message: \n\n" . "Name: " . $name . "\n Email: " . $email . "\n Message: \n\n" . $message;
    $headersConf = "From: $myEmail\r\n";
    $headersConf .= "Reply-To: $myEmail\r\n";

    // send email
    mail($myEmail, $subject, $editedMessage, $headers);

    // Send confirmation email
    mail($email, $subjectConf, $messageConf, $headersConf);
}
