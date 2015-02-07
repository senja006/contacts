<?php 

$filename = $_FILES['file']['name'];
$destination = 'img/' . $filename;
move_uploaded_file( $_FILES['file']['tmp_name'] , $destination );

$data['name'] = $filename;

echo json_encode($data);

exit;

?>
