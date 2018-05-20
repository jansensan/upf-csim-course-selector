<?php
  include_once("config.php");

  // clear currently saved courses
  $result = mysqli_query(
    $mysqli,
    "DELETE FROM selected_courses"
  );

  // retrieve post data
  $post_data = file_get_contents( "php://input" );
  $courses_array = json_decode($post_data);

  // create query
  $sql = array();
  foreach ($courses_array as $course) {
    $sql[] = "(NULL, " . $course . ")";
  }
  $insert_query = "INSERT INTO selected_courses (uid, course_code) VALUES " . implode(',', $sql);

  // add courses to db
  $result = mysqli_query($mysqli, $insert_query);

  echo $result;
?>