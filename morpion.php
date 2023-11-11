<?php

$player1 = array(
    'name' => isset($_POST['player1_name']) ? $_POST['player1_name'] : 'Player 1',
    'symbol' => isset($_POST['player1_symbol']) ? $_POST['player1_symbol'] : 'X',
    'nature' => isset($_POST['player1_nature']) ? $_POST['player1_nature'] : 'human'
);
$player2 = array(
    'name' => isset($_POST['player2_name']) ? $_POST['player2_name'] : 'Player 2',
    'symbol' => isset($_POST['player2_symbol']) ? $_POST['player2_symbol'] : 'O',
    'nature' => isset($_POST['player2_nature']) ? $_POST['player2_nature'] : 'computer'
); 
$dimension = isset($_POST['dimension']) ? $_POST['dimension'] : 3;
$combinationLength = isset($_POST['number']) ? $_POST['number'] : 3;

?>
<!DOCTYPE html>
<html lang="fr-FR">
    <head>
        <title>Tic Tac Toe</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
        <script src="combinations.js"></script>
        <script>
            // Variables depending on the form input
            const player1 = {
                name: '<?= $player1['name'] ?>',
                nature: 'human',
                symbol: 'X'
            }
            const player2 = {
                name: '<?= $player2['name'] ?>',
                nature: '<?= $player2['nature'] ?>',
                symbol: 'O'
            }
            
            const dimension = <?= $dimension ?>;
            const combinationLength = <?= $combinationLength ?>;
            let firstPlayer = player1;
        </script>
    </head>
    <body>
        <span id=turn-announcement></span>
        <table></table>
        <script src="script.js"></script>
        <button id="reset">Reset</button>
        

    </body>
    <footer>
        <p>
            J'y ai mis toutes les larmes de mon corps car Lucas pensait que son 
            code serait meilleur que le mien, je fais donc tout pour lui donner tort
        </p>
    </footer>
</html>
