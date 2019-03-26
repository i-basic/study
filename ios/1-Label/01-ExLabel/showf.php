
<!DOCTYPE html>

<html>
<head>
      <meta charset="UTF-8" />

</head>


<?php
$.ajax({
type: "POST",
url: "code.txt",
success: function(msg){
$('#id').txt(msg);
}
});
?>


</html>
