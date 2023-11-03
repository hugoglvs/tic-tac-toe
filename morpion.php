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
        <script type="text/javascript" src="tic-tac-toe.js"></script>
    </head>
    <body>
        <span id=turn-announcement></span>
        <div class="board">
            <?php
                for ($i = 0; $i < $cells; $i++) {
                    echo '<div class="cell"></div>';
                } 
            ?>
        </div>
        
    </body>
</html>
