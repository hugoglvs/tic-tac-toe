<!DOCTYPE html>
<html lang="fr-FR">
    <head>
        <title>Tic Tac Toe</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    </head>
    <body>
        <form action="morpion.php" method="POST">
            <div>
            <label for="dimension">Dimension du tableau de jeu</label>
            <input type="number" name="dimension" id="dimension" min="3" max="20" value="3">
            </div>
            <div>
            <label for="combinationLength">Nombre de cellules pour gagner</label>
            <input type="number" name="combinationLength" id="combinationLength" min="3" max="20" value="3">
            </div>
            <div>
            <label for="player1">Joueur 1</label>
            <input type="text" name="player1" id="player1">
            </div>
            <div>
            <label for="opponent">Adversaire</label>
            <select name="opponent" id="opponent" required>
                <option value="computer">Ordinateur</option>
                <option value="player">Joueur</option>
            </select>
            </div>
            <div id="player2" style="display:none;">
                <label for="player2">Joueur 2</label>
                <input type="text" name="player2" id="player2">
            </div>
            <div>
            <label for="first">Premier joueur</label>
            <select name="first" id="first" required>
                <option value="player1">Joueur 1</option>
                <option id="first-player" value="player2"></option>
            </select>
            </div>
            <input type="submit" value="Jouer">
        </form>

        <script>
            $(document).ready(function() {
                const opponentSelect = $('#opponent');
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
