<?php
  $dbHost = getenv("DB_HOST");
  $dbUser = getenv("DB_USER");
  $dbPassword = getenv("DB_PASSWORD");
  $dbName = getenv("DB_NAME");

  $mysqli = mysqli_connect(
    $dbHost,
    $dbUser,
    $dbPassword,
    $dbName
  );
?>