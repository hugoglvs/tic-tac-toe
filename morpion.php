<?php
// Juste faire apparaitre ça ça fait bugger...
$dimension = isset($_POST['dimension']) && $_POST['dimension'] !== "" ? $_POST['dimension'] : 3;
$combinationLength = isset($_POST['combinationLength']) && $_POST['combinationLength'] !== "" ? $_POST['combinationLength'] : 3;
$player1name = isset($_POST['player1name']) && $_POST['player1name'] !== "" ? $_POST['player1name'] : 'Player 1';
$player2nature = isset($_POST['player2nature']) && $_POST['player2nature'] !== "" ? $_POST['player2nature'] : 'computer';
$player2name = isset($_POST['player2name']) && $_POST['player2name'] !== "" ? $_POST['player2name'] : 'Player 2';
$firstPlayer = isset($_POST['first']) && $_POST['first'] !== "" ? $_POST['first'] : 'player1';
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
                name: '<?= $player1name ?>',
                nature: 'human',
                symbol: 'X'
            }
            const player2 = {
                name: '<?= $player2name ?>',
                nature: '<?= $player2nature ?>',
                symbol: 'O'
            }
            
            const dimension = <?= $dimension ?>;
            const combinationLength = <?= $combinationLength ?>;
            let firstPlayer = <?= $firstPlayer ?>;
        </script>
    </head>
    <body>
        <span id=turn-announcement></span>
        <table></table>
        <script src="script.js"></script>
        <button id="reset">Réinitialiser</button>
        <a href="index.php">Retour</a>
        

    </body>
    <footer>
        <p>
            J'y ai mis toutes les larmes de mon corps car Lucas pensait que son 
            code serait meilleur que le mien, je fais donc tout pour lui donner tort
        </p>
    </footer>
</html>
