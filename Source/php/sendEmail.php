<?php
	if
	(
		isset($_POST["message"])
		&& !empty($_POST["message"])
		&& isset($_POST["from"])
		&& !empty($_POST["from"])
	)
	{
		SendEmail($_POST["message"], $_POST["from"]);
	}

	function SendEmail($message, $from)
	{
		$headers = "From:".$from."\r\n"."Reply-To:".$from."\r\n"."X-Mailer:PHP/".phpversion();

		$status = mail("thor.hanks+website@gmail.com", "ThorHanks.com", $message, $headers);

		$return["status"] = $status;
		echo json_encode($return);
	}
?>