# tic-tac-toe
``
dimension = 3
``
Le concept de mon morpion est que toute la partie logique se passera sur un array de simulation que 
l'utilisateur ne verra jamais et tout sera ensuite dessiné sur l'interface web.
Sur HTML, les cases seront des divs identifiés par un id allant de 0 jusqu'à (dimension * dimension - 1)
l'array board de simulation sera un array de {dimension} arrays de {dimension} elements remplis de null au début
