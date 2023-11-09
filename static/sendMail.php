<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // email
    $myEmail = 'hello@jonjampen.ch';
    $subject = 'New Contact Form Submission';
    $editedMessage = "Name: " . $name . "\nEmail: " . $email . "\nMessage:\n\n" . $message;
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // confirmation email
    $subjectConf = "Confirmation email: Message to Jon Jampen";
    $messageConf = "Hello " . $name . "\n\nThank you for your message! I will get back to you as soon as possible. If you have any other remarks, please reply to this email.\n\nBest Regards\nJon Jampen\nhttps://jonjampen.ch\nhello@jonjampen.ch\n\n" . "---\n\n" . "Name: " . $name . "\nEmail: " . $email . "\nMessage: \n\n" . $message;
    $headersConf = "From: $myEmail\r\n";
    $headersConf .= "Reply-To: $myEmail\r\n";

    // send email
    if (mail($myEmail, $subject, $editedMessage, $headers)) {
        // Send confirmation email
        mail($email, $subjectConf, $messageConf, $headersConf);
    };
}
