// récupération de l'id de la commande
let orderId = localStorage.getItem('responseOrder');
console.log(orderId);

// récupération du prix total de la commande
let totalPrice = localStorage.getItem('totalPrice');
console.log(totalPrice);

//création page de confirmation et remerciement
const cameraMain = document.getElementById('product_page');
const cameraDiv = document.createElement('div');
cameraMain.appendChild(cameraDiv);
cameraDiv.className = 'camera_confirm';

const cameraH3 = document.createElement('h3');
cameraDiv.appendChild(cameraH3);
cameraH3.textContent = "Orinoco vous remercie de votre commande !";

const cameraPar = document.createElement('p');
cameraDiv.appendChild(cameraPar);
cameraPar.textContent = "Nous avons le plaisir de vous informer que votre commande a bien été enregistrée.";

const cameraPar2 = document.createElement('p');
cameraDiv.appendChild(cameraPar2);
cameraPar2.innerHTML = "Vos oursons arriverons bientôt chez vous.<br />Vous trouverez ci-dessous le récapitulatif de votre commande."

const cameraPar3 = document.createElement('p');
cameraDiv.appendChild(cameraPar3);
cameraPar3.textContent = "Nous espérons vous revoir très vite chez Orinoco !"

const cameraPar4 = document.createElement('p');
cameraDiv.appendChild(cameraPar4);
cameraPar4.textContent = "Toute l'équipe d'Orinoco";

// récapitulatif de votre commande
const cameraDivConfirm = document.createElement('div');
cameraDiv.appendChild(cameraDivConfirm);
cameraDivConfirm.className = 'confirm';

const cameraH3Bis = document.createElement('h3');
cameraDivConfirm.appendChild(cameraH3Bis);
cameraH3Bis.textContent = "Récapitulatif de votre commande : ";

const cameraPar5 = document.createElement('p');
cameraDivConfirm.appendChild(cameraPar5);
cameraPar5.textContent = "Numéro de commande : " + orderId;
cameraPar5.className = "confirm_par";

const cameraPar6 = document.createElement('p');
cameraDivConfirm.appendChild(cameraPar6);
cameraPar6.textContent = "Montant total de votre commande : " + totalPrice + " €";
cameraPar6.className = "confirm_par";

// Efface localStorage
localStorage.clear();