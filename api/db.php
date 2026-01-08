<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// THÔNG TIN TỪ ẢNH CỦA BẠN
$host = "sql311.infinityfree.com";      // Lấy từ ảnh image_3b6ec8.png
$username = "if0_40834848";             // Lấy từ ảnh image_3b6ec8.png
$password = "Linh00000000";         // Điền mật khẩu vPanel (Account Password)
$dbname = "if0_40834848_studyhub";      // Lấy từ ảnh image_3b6ec8.png

// Kết nối database
$conn = new mysqli($host, $username, $password, $dbname);
$conn->set_charset("utf8");

// Kiểm tra kết nối
if ($conn->connect_error) {
    die(json_encode([
        "success" => false, 
        "message" => "Lỗi kết nối DB: " . $conn->connect_error
    ]));
}
?>