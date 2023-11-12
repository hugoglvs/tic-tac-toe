<!DOCTYPE html>
<html lang="fr-FR">
    <head>
        <title>Tic Tac Toe</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    </head>
    <body>
        <form id="gameSettingsForm" action="morpion.php" method="POST">
            <div class="warning">
            <label for="dimension">Dimension du tableau de jeu</label>
            <input type="number" name="dimension" id="dimension" min="3" max="20" value="3">
            </div>
            <div class="warning">
            <label for="combinationLength">Nombre de cellules pour gagner</label>
            <input type="number" name="combinationLength" id="combinationLength" min="3" max="20" value="3">
            </div>
            <div>
            <label for="player1name">Joueur 1</label>
            <input type="text" name="player1name" id="player1name">
            </div>
            <div>
            <label for="player2nature">Adversaire</label>
            <select name="player2nature" id="player2nature" required>
                <option value="computer">Ordinateur</option>
                <option value="player">Joueur</option>
            </select>
            </div>
            <div id="player2" style="display:none;">
                <label for="player2name">Joueur 2</label>
                <input type="text" name="player2name" id="player2name" value="Player 2">
            </div>
            <div>
            <label for="firstPlayer">Premier joueur</label>
            <select name="firstPlayer" id="firstPlayer" required>
                <option value="player1">Joueur 1</option>
                <option id="first-player" value="player2"></option>
            </select>
            </div>
            <input type="submit" value="Jouer">
        </form>

        <script>
            $(document).ready(function() {
                // Hide warning divs because if its values are changed,
                // the game won't work properly
                $('.warning').hide();

                const opponentSelect = $('#player2nature');
                const player2Div = $('#player2');
                const firstPlayerSelect = $('#first-player');

                firstPlayerSelect.text('Ordinateur');
                opponentSelect.change(() => {
                    if (opponentSelect.val() === 'player') {
                        player2Div.show();
                        firstPlayerSelect.text('Joueur 2');
                    } else {
                        player2Div.hide();
                        firstPlayerSelect.text('Ordinateur');
                    }
                });

                const combinationLengthInput = $('#combinationLength');
                const dimensionInput = $('#dimension');
                combinationLengthInput.change(() => {
                    if (combinationLengthInput.val() > dimensionInput.val()) {
                        alert('Le nombre de cellules pour gagner doit être inférieur ou égal à la dimension du jeu.');
                        combinationLengthInput.val(dimensionInput.val());
                    }
                });
            });
        </script>
    </body>
</html>

        
    </body>
</html>
