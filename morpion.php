<?php
$player1 = array('name' => 'Player 1',
                'symbol' => 'x',
            'nature' => 'human');
$player2 = array('name' => 'Player 2',
                'symbol' => 'o',
            'nature' => 'computer'); 
$first = $player1;
$dimension = 3;
$cells = $dimension * $dimension;

?>
<!DoCTYPE html>
<html lang="fr-FR">
    <head>
        <title>Tic Tac Toe</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
        <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
        <script src="combinations.js"></script>
    </head>
    <body>
        <span id=turn-announcement></span>
        <table></table>
        <script src="script.js"></script>
        <button onclick="reset()">Reset</button>
        

    </body>
    <footer>
        <p>
            J'y ai mis toutes les larmes de mon corps car Lucas pensait 
            que son code serait meilleur que le mien, je fais donc tout lui donner tort
        </p>
    </footer>
</html>
