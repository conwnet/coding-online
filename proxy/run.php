<?php
/* 执行代码 */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-type');
if($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header(0, 0, 200);
    return;
} else {
    header('Content-Type: application/json');
    $url = 'https://leetcode.com/playground/api/runcode';
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, file_get_contents('php://input'));
    curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    $data = curl_exec($curl);
    curl_close($curl);
}
