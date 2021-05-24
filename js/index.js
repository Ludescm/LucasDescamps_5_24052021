const getcameras = async function () {
    //récupération des données de l'API 
    try {
        let response = await fetch('http://localhost:3000/api/cameras');
        if (response.ok) {
            let cameras = await response.json();
            console.log(cameras);

            for (let camera of cameras) {
                const camerasDiv = document.getElementById('cameras');

                //création section
                const camerasSection = document.createElement('section');
                camerasDiv.appendChild(camerasSection);
                camerasSection.className = 'camera';

                //création lien vers produit.html
                const productLink = document.createElement("a");
                productLink.href = "produit.html?id=" + camera._id;
                camerasSection.appendChild(productLink);
                productLink.className = 'section_zoom';
                productLink.setAttribute('title', "La caméra " + camera.name + "n'attend plus que vous !");

                //création image + src, alt et title
                const cameraImg = document.createElement('img');
                productLink.appendChild(cameraImg);
                cameraImg.setAttribute('src', camera.imageUrl);
                cameraImg.setAttribute('alt', 'Caméra :  ' + camera.name);
                cameraImg.setAttribute('title', 'Caméra :  ' + camera.name);


                const camerasRef = document.createElement('div');
                productLink.appendChild(camerasRef);
                camerasRef.className = 'cameras_ref';

                const h3CamerasRef = document.createElement('h3');
                camerasRef.appendChild(h3CamerasRef);
                h3CamerasRef.textContent = camera.name;

                const pCamerasRef = document.createElement('p');
                camerasRef.appendChild(pCamerasRef);
                pCamerasRef.textContent = camera.price /100 + "$"

            }
        } else {
            console.error('Retour du serveur : ', response.status);
            alert('Erreur rencontrée : ' + response.status);
        }
    } catch (error) {
        alert("Erreur : " + error);
    }
}

//appel de la fonction
getcameras();