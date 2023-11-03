<!DOCTYPE html>
<html lang="fr-FR">
    <head>
        <title>Tic Tac Toe</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <form action="morpion.php" method="POST">
            <div>
            <label for="dimension">Dimension du tableau de jeu</label>
            <input type="number" name="dimension" id="dimension" min="3" max="20" value="3">
            </div>
            <div>
            <label for="number">Nombre de cellules pour gagner</label>
            <input type="number" name="number" id="number" min="3" max="20" value="3">
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
            const opponentSelect = document.getElementById('opponent');
            const player2Div = document.getElementById('player2');
            const firstPlayerSelect = document.getElementById('first-player');
            firstPlayerSelect.textContent = 'Ordinateur';
            opponentSelect.addEventListener('change', () => {
                if (opponentSelect.value === 'player') {
                    player2Div.style.display = 'block';
                    firstPlayerSelect.textContent = 'Joueur 2';
                } else {
                    player2Div.style.display = 'none';
                    firstPlayerSelect.textContent = 'Ordinateur';
                }
            });

            const numberInput = document.getElementById('number');
            const dimensionInput = document.getElementById('dimension');
            numberInput.addEventListener('change', () => {
                if (numberInput.value > dimensionInput.value) {
                    alert('Le nombre de cellules pour gagner doit être inférieur ou égal à la dimension du jeu.');
                    numberInput.value = dimensionInput.value;
                }
            });
        </script>
    </body>
</html>

        
    </body>
</html>
