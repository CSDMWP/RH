**script.js**

```javascript
const reponses = {
  accident: "En cas d’accident de travail, veuillez informer immédiatement votre responsable direct et le service RH. Un formulaire d’accident doit être complété dans les 24 h. Vous serez invité à consulter un médecin du travail et toutes les démarches internes seront lancées pour garantir votre suivi et votre sécurité.",
  paie: "Les salaires sont versés le 25 du mois. Si ce jour tombe un week‑end ou un jour férié, le paiement sera effectif le jour ouvrable précédent. En cas de problème, merci de contacter le service paie à paie@csdmons‑wapi.be.",
  maladie: "Si vous êtes malade, vous devez transmettre votre certificat médical à votre responsable et au service RH dans les 48 h. Assurez‑vous que votre dossier maladie soit à jour, et respectez les consignes de reprise (avis médical, entretien avec le médecin du travail) avant de revenir sur le site."
};

// Étape 1 → Étape 2
document.querySelectorAll('.theme-btn').forEach(button => {
  button.addEventListener('click', () => {
    const theme = button.getAttribute('data-theme');
    document.getElementById('themes').classList.add('hidden');
    document.getElementById('questions').classList.remove('hidden');

    // Affiche seulement la question correspondante
    document.querySelectorAll('.question-btn').forEach(qbtn => {
      qbtn.style.display = (qbtn.getAttribute('data-q') === theme) ? 'block' : 'none';
    });

    // Change le titre du thème
    const titres = {
      accident: "Accident de travail",
      paie: "Paie",
      maladie: "Maladie"
    };
    document.getElementById('titreTheme').textContent = titres[theme];
  });
});

// Étape 2 → Étape 3
document.querySelectorAll('.question-btn').forEach(button => {
  button.addEventListener('click', () => {
    const key = button.getAttribute('data-q');
    if (key && reponses[key]) {
      document.getElementById('texteReponse').textContent = reponses[key];
      document.getElementById('questions').classList.add('hidden');
      document.getElementById('reponse').classList.remove('hidden');
    }
  });
});

// Retour aux thèmes
document.querySelector('.retour-theme').addEventListener('click', () => {
  document.getElementById('questions').classList.add('hidden');
  document.getElementById('themes').classList.remove('hidden');
});

// Retour aux questions
document.querySelector('.retour-questions').addEventListener('click', () => {
  document.getElementById('reponse').classList.add('hidden');
  document.getElementById('questions').classList.remove('hidden');
});
```
