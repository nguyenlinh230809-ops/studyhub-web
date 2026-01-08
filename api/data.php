<?php
// --- HEADER CORS: GIÚP VERCEL LẤY ĐƯỢC DỮ LIỆU ---
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Nếu trình duyệt hỏi thăm (OPTIONS), trả lời OK ngay
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

header("Content-Type: application/json; charset=UTF-8");

// Kết nối database
require 'db.php';

$sql = "SELECT * FROM courses";
$result = $conn->query($sql);

$courses = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $courses[] = $row;
    }
}

// Trả về dữ liệu
echo json_encode($courses);
$conn->close();
?>