<!-- HTML top code goes here -->

<?

// From processing takes place here. message displayed here too
require('form/form.class.php');
$form = new Form();
$form->processForm(

	'designedbyreggie.com' // Put you mail domain here
	,
	'Designed by Reggie' // Put your site name / form name here
	,
	'reggiepeled@ufl.edu' // Where will the form notification be sent?
	,
	'reggiepeled@designedbyreggie.com' // This what the form FROM: address wil be, if the form submissions doesn't contain an email field

);
?>

<script src="js/picker.js"></script>
<script src="js/picker.date.js"></script>
<script src="js/picker.time.js"></script>

<!-- HTML bottom code goes here -->
