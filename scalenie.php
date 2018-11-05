<?php
$mysql_host = "localhost";
$mysql_login = "wojcik";
$mysql_pass = "CDAz426x17";
$mysql_baza = "wojcik";

$connection = @mysql_connect($mysql_host,$mysql_login,$mysql_pass,$mysql_baza)
or die("brak połączenia z serwerem MySQL");
echo "";
$db = @mysql_select_db($mysql_baza, $connection)
or die("brak połączenia z bazą danych");
echo "";
mysql_set_charset("utf8");
?>