<?php   
if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['msg']) ){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $msg = nl2br($_POST['msg']);
    $to = "jmejia7951@gmail.com";
    $from = $email;
    $Subject = 'Portfolio Contact Message';
    $message = '<b>Name: </b>'.$name.' <br><b>Email: </b>'.$email.' <p>'.$msg.'</p>';
    $headers = "From: $from\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";
    if( mail($to, $subjects, $message, $headers) ){
        echo "success";
    }
    else {
        echo "Uh-Oh, something happened! :( Please try again later.";
    }
}
?>