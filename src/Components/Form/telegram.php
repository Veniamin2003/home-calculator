<?php

$name = $_POST['name'];
$token = "5942262021:AAFnaeghLZ_Mlr9RRRG0pTJfBc7uNqNcfo8";
$chat_id = "-869465475";
$arr = array(
  'Имя пользователя: ' => $name
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram && $sendToTelegram2) {
  header('Location: thanks.html');
} else {
  echo "Error";
}
?>