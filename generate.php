<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/x-www-form-urlencoded; charset=UTF-8");


$data = $_POST["requestData"];

$myfile = fopen("generatedData.json", "w");
fwrite($myfile, "[");
fwrite($myfile, $data);
fwrite($myfile, "]");