<?php
  include_once("config.php");

  // get data from db
  $result = mysqli_query(
    $mysqli,
    "SELECT * FROM selected_courses ORDER BY course_code ASC"
  );

  // create array from course codes obtained
  $array = [];
  while ($row = $result->fetch_assoc()) {
    $array[] = (int) $row["course_code"];
  }

  // return json data
  echo json_encode($array);
?>