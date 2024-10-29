// script.ts
// Fonction pour mettre à jour l'utilisateur
function updateUser() {
    // Récupérer les valeurs des champs de saisie
    var name = document.getElementById('userName').value;
    var age = parseInt(document.getElementById('userAge').value);
    var email = document.getElementById('userEmail').value;
    // Créer un objet utilisateur avec les valeurs récupérées
    var user = {
        name: name,
        age: age,
        email: email,
    };
    // Afficher le résultat dans la div "result"
    var resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerHTML = "\n            Nom: ".concat(user.name, " <br>\n            \u00C2ge: ").concat(user.age, " <br>\n            Email mis \u00E0 jour: ").concat(user.email, "\n        ");
    }
}
