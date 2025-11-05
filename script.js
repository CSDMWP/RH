document.addEventListener('DOMContentLoaded', function () {
  const reponses = {
    accident: "En cas d’accident de travail, veuillez informer immédiatement votre responsable direct et le service RH. Un formulaire d’accident doit être complété dans les 24 h. Vous serez invité à consulter un médecin du travail et toutes les démarches internes seront lancées pour garantir votre suivi et votre sécurité.",
    paie: "Les salaires sont versés le 25 du mois. Si ce jour tombe un week‑end ou un jour férié, le paiement sera effectif le jour ouvrable précédent. En cas de problème, merci de contacter le service paie à paie@csdmons‑wapi.be.",
    maladie: "Si vous êtes malade, vous devez transmettre votre certificat médical à votre responsable et au service RH dans les 48 h. Assurez‑vous que votre dossier maladie soit à jour, et respectez les consignes de reprise (avis médical, entretien avec le médecin du travail) avant de revenir sur le site."
  };

  // On cible uniquement les boutons du menu pour éviter d'inclure le bouton "Retour"
  const menuButtons = document.querySelectorAll('#menu .btn');
  menuButtons.forEach(button => {
    button.addEventListener('click', () => {
      const key = button.getAttribute('data-q');
      if (key && reponses[key]) {
        document.getElementById('texteReponse').textContent = reponses[key];
        document.getElementById('menu').classList.add('hidden');
        document.getElementById('reponse').classList.remove('hidden');
      }
    });
  });

  // Ajout sécurisé de l'écouteur pour le bouton "Retour"
  const retour = document.querySelector('.retour');
  if (retour) {
    retour.addEventListener('click', () => {
      document.getElementById('reponse').classList.add('hidden');
      document.getElementById('menu').classList.remove('hidden');
    });
  }
