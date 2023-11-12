# tic-tac-toe

Le concept de mon morpion est que toute la partie logique se passera sur un array de simulation que 
l'utilisateur ne verra jamais et une fois que les coups sont confirmés on ajoute la classe correspondant
au symbole du joueur sur la cellule.
Vu qu'on nous a rabâché d'apprendre l'anglais car c'était très important j'ai pris l'habitude de développer en anglais donc les commentaires seront en anglais my bad j'espère que ça ne vous dérangera pas.
J'ai implémenté des fonctions qui permettent de calculer les combinaisons gagnantes pour un tableau de morpion de dimension nxn malheureusement l'algorithme minimax n'a pas été implémenté de l'élagage alpha et beta donc la complexité est trop grande et il est impossible de jouer sur un tableau plus grand qu'un tableau classique de 3x3... Cependant vous pouvez vous amuser à enlever la classe warning présente dans le formulaire de index.php pour faire apparaitre les formulaires sur les dimensions et le nombre de succesion du symbole necessaire pour gagner et faire appraître winningCombinations avec un console.log dans le script.
N'hésitez pas à jouer contre l'ordinateur ou même avec un copain pour passer de supers moments !
Je vous ai d'ailleurs mis les sources vers la documentation mozilla de certaines fonctions qui m'auront été bien utiles et
que l'on a pas vues en cours.

