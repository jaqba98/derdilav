<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $title = $_POST['title'];
    $message = $_POST['message'];

    echo 'Name' + $name;
    echo 'Email' + $email;
    echo 'Title' + $title;
    echo 'Message' + $message;
    echo '<a href="../index.html">Back</a>';
?>