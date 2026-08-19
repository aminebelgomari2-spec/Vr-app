🎮 VR Mobile Hand Tracking App
Une app VR mobile avec hand tracking et contrôle gyroscope, prête à installer sur ton téléphone !
📲 Installation sur GitHub Pages
Étape 1 : Créer un repo GitHub
Va sur github.com (connecte-toi ou crée un compte)
Clique sur le + en haut à droite → New repository
Nomme-le vr-app (ou n'importe quel nom)
Clique sur Public
Clique sur Create repository
Étape 2 : Ajouter les fichiers
Tu as 3 fichiers à uploader :
index.html (le fichier principal)
manifest.json (config de l'app)
sw.js (Service Worker)
Depuis GitHub :
Clique sur Add file → Upload files
Drag & drop les 3 fichiers OU clique et sélectionne-les
En bas, clique Commit changes
Étape 3 : Activer GitHub Pages
Va dans les Settings du repo
Clique sur Pages (à gauche)
Sous "Source", sélectionne main (branch)
Sélectionne / (root)
Clique Save
Attends 1-2 minutes, puis tu verras une URL du style :
Code
Étape 4 : Installer sur ton téléphone
Sur Android :
Ouvre l'URL dans Chrome ou Brave
Appuie sur le menu (3 points) → Installer l'app
Confirme
Sur iOS :
Ouvre l'URL dans Safari
Appuie sur le carré avec une flèche vers le haut (Share)
Sélectionne Ajouter à l'écran d'accueil
🎮 Utilisation
Boutons de l'app :
📷 Caméra : Active la caméra pour le hand tracking
🖐️ Mains : Détecte tes mains (doit être activée après la caméra)
🎯 Gyro : Contrôle la vue avec les mouvements du téléphone
📲 Installer : Installe l'app (disponible sur certains navigateurs)
Contrôles :
Bouge ton téléphone → Les cubes 3D bougent
Mets tes mains devant la caméra → Détection automatique
Les statistics affichent les rotations et mains détectées
🚀 Améliorations possibles
Tu peux :
Changer les couleurs (remplace 0x00ff00 par des codes hex)
Ajouter plus de formes 3D
Augmenter le nombre de cubes
Changer la sensibilité du gyroscope
Ajouter du son
⚙️ Problèmes courants
"La caméra ne marche pas"
Permets l'accès à la caméra
Utilise HTTPS (GitHub Pages le fait automatiquement)
"Pas de détection des mains"
Appuie d'abord sur 📷 Caméra
Puis appuie sur 🖐️ Mains
Assure-toi que tes mains sont visibles
"Le gyroscope ne répond pas"
Certains téléphones ont besoin de permissions
Essaie sur un autre navigateur (Chrome/Brave)
📝 Notes
Cette app utilise :
Three.js pour la 3D
MediaPipe pour la détection des mains
DeviceOrientationEvent pour le gyroscope
PWA pour l'installation native
Tout fonctionne en temps réel sur ton téléphone ! 🎉
Besoin d'aide ? Dis-moi ce qui pose problème !
