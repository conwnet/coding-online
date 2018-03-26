<?php
/* 获取代码运行状态 */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-type');
if($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header(0, 0, 200);
    return;
} else {
    header('Content-Type: application/json');
    $interpret_id = isset($_GET['id']) ? $_GET['id'] : 0;
    $url = "https://leetcode.com/submissions/detail/$interpret_id/check/";
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    $data = curl_exec($curl);
    curl_close($curl);
}
