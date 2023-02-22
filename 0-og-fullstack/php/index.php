<?php

$conn = new mysqli('localhost', 'dev', 'foobar123', 'evolution-of-fullstack');
$result = $conn->query("SELECT id, title, body FROM Post");
$conn->close();

?>

<h1>Blog posts</h1>

<ul>
  <?php while ($row = $result->fetch_assoc()) : ?>
    <li>
      <h2><?= $row['title'] ?></h2>
      <p><?= $row['body'] ?></p>
    </li>
  <?php endwhile; ?>
</ul>