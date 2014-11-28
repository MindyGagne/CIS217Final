<?php

$form = <<<END_OF_FORM

    <form method=post action="purchase.php">
        Name: <input type="text" name="name" /><br/>
        Address: <input type="address" name="address" /><br/>
        <input type="submit" name="submit" value="Submit Order" />
    </form>

END_OF_FORM;

echo json_encode( $form );

