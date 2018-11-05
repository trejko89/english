<table>
	<?php
	include("scalenie.php");
	$zapytanie=mysql_query("SELECT * FROM matura_2015_9a");
	while ($row = mysql_fetch_assoc($zapytanie)){
		$polskie=$row["Polskie"];
		$angielskie=$row["Angielskie"];
		echo"<tr><td>$polskie</td><td>$angielskie</td></tr>";
		
	}
	?>
</table>