<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$account = [];
$sql = "SELECT id, name, amount FROM account";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $account[$i]['id']    = $row['id'];
    $account[$i]['name'] = $row['name'];
    $account[$i]['amount'] = $row['amount'];
    $i++;
  }

  echo json_encode($account);
}
else
{
  http_response_code(404);
}