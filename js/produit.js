//récupération de l'ID de la caméra de la page
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);

const getCameras = async function() {
     // récupération des données des caméras sélectionné par son id
    try {
        let response = await fetch('http://localhost:3000/api/cameras/' + id);
        if (response.ok) {
            let camera = await response.json();
            console.log(camera);

            // création h2 de la page
            const cameraMain = document.getElementById('product_page');
            const cameraH2 = document.createElement('h2');
            cameraMain.appendChild(cameraH2);
            cameraH2.textContent = "Orinoco vous présente " + camera.name;

            // création div 
            const cameraDiv = document.createElement('div');
            cameraMain.appendChild(cameraDiv);
            cameraDiv.className = 'camera_ref';

            //ajout image
            const cameraImg = document.createElement('img');
            cameraDiv.appendChild(cameraImg);
            cameraImg.setAttribute('src', camera.imageUrl);
            cameraImg.setAttribute('alt', 'Caméra : ' + camera.name);
            cameraImg.setAttribute('title', 'Caméra : ' + camera.name);

            //création div de présentation
            const cameraDivInfo = document.createElement('div');
            cameraDiv.appendChild(cameraDivInfo);
            cameraDivInfo.className = 'camera_info';

            // ajout nom
            const cameraH3 = document.createElement('h3');
            cameraDivInfo.appendChild(cameraH3);
            cameraH3.textContent = camera.name;

            // ajout description
            const cameraPar = document.createElement('p');
            cameraDivInfo.appendChild(cameraPar);
            cameraPar.textContent = camera.description;

            // ajout prix
            const cameraPrice = document.createElement('p');
            cameraDivInfo.appendChild(cameraPrice);
            cameraPrice.textContent = "Son prix : " + camera.price / 100 + " €";
            cameraPrice.className = 'camera_price';

            // création choix lentille
            const form = document.createElement('form');
            cameraDivInfo.appendChild(form);
            const formDiv = document.createElement('div');
            form.appendChild(formDiv);
            formDiv.className = 'colors_choice';

            const label = document.createElement('label');
            formDiv.appendChild(label);
            label.textContent = "Personnalisez sa lentille : ";
            label.setAttribute('for', "Choix de lentilles de " + camera.name);

            const select = document.createElement('select');
            formDiv.appendChild(select);
            select.setAttribute('name', "Choix de lentilles de " + camera.name);
            select.setAttribute('id', "select_1 ");

            // ajout des différentes lentilles 
            const lenses = camera.lenses;

            for (i = 0; i < lenses.length; i++) {
                const selectOption = document.createElement('option');
                select.appendChild(selectOption);
                selectOption.textContent = lenses[i];
                selectOption.setAttribute("value", lenses[i]);
            }
            
            // création bouton panier
            let addCamera = document.createElement('button');
            form.appendChild(addCamera);
            addCamera.type = 'submit';
            addCamera.name = 'add';
            addCamera.id = 'submit';
            addCamera.textContent = "Ajouter au panier"

            // récupérations données et envoie au panier
            addCamera.addEventListener("click", function (event) {
                event.preventDefault();

            // stockage des données dans localStorage
                let camerasChoosen = {
                    cameraName: camera.name,
                    cameraId: camera._id,
                    cameraLenses: select.value,
                    quantity: 1,
                    cameraPrice: camera.price / 100,
                };
                console.log(camerasChoosen);

                let storedCameras = JSON.parse(localStorage.getItem('newArticle'));
                const cameraLenses = select.value;
                if(storedCameras) {
                    storedCameras.push(camerasChoosen);
                    localStorage.setItem('newArticle', JSON.stringify(storedCameras));
                    console.log(storedCameras);
                    if (window.confirm(camera.name + " " + cameraLenses + ' a bien été ajouté. Souhaitez vous consulter votre panier ?')) { 
                        window.location.href = "panier.html";
                    } else {
                        window.location.href = "index.html";
                    }
                } else {
                    storedCameras = [];
                    storedCameras.push(camerasChoosen);
                    localStorage.setItem('newArticle', JSON.stringify(storedCameras));
                    console.log(storedCameras);
                    if (window.confirm(camera.name + " " + cameraLenses + ' a bien été ajouté. Souhaitez vous consulter votre panier ?')) { 
                        window.location.href = "panier.html";
                    } else {
                        window.location.href = "index.html";
                    }
                }
            });
        } else {
            console.error('Retour du serveur : ', response.status);
            alert('Erreur rencontrée : ' + response.status);
        } 
    } catch (error) {
        alert("Erreur : " + error);
    }
};

//appel de la fonction
getCameras();

