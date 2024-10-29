// script.ts

// Définition de l'interface User
interface User {
    name: string;
    age: number;
    email: string;
}

// Fonction pour mettre à jour l'utilisateur
function updateUser(): void {
    // Récupérer les valeurs des champs de saisie
    const name = (document.getElementById('userName') as HTMLInputElement).value;
    const age = parseInt((document.getElementById('userAge') as HTMLInputElement).value);
    const email = (document.getElementById('userEmail') as HTMLInputElement).value;

    // Créer un objet utilisateur avec les valeurs récupérées
    const user: User = {
        name,
        age,
        email,
    };


    // Afficher le résultat dans la div "result"
    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerHTML = `
            Nom: ${user.name} <br>
            Âge: ${user.age} <br>
            Email mis à jour: ${user.email}
        `;
    }
}
