<?php
$recepient = "ogneva_work@bk.ru";
$siteName = "HTML-шаблон - Добрый Картон";

$phone = trim($_POST['user_phone']);
$message = "Еще один пользователь оставил вам свой номер телефона: $phone";

$pagetitle = "Заявка с сайта \"$siteName\"";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


?>