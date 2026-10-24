# Ugwiyeon Lee · 이우귀연

### Chemical Engineering Software Developer

[English](../../README.md) · [한국어](README.ko.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [हिन्दी](README.hi.md)

[GitHub](https://github.com/lyullee) · [Google Scholar](https://scholar.google.com/citations?user=WZn0QQwAAAAJ) · [E-mail principal](mailto:lyullee@gmail.com) · [E-mail secondaire](mailto:lyullee@kgs.or.kr)

## À propos

Je suis Ugwiyeon Lee (이우귀연, Lyul Lee), affilié à Korea Gas Safety Corporation, en République de Corée. Je développe des logiciels scientifiques à la croisée du génie chimique, de la sécurité des procédés et de la recherche numérique. Mes travaux couvrent les équipements hydrogène, les sources de rejet, les nappes de liquide, la dispersion, les incendies, les assistants documentaires, les propriétés atomiques de l’hydrogène et les méthodes quantiques. Je privilégie les hypothèses explicites, les bilans de masse et d’énergie, la convergence, la comparaison expérimentale et la traçabilité. Je distingue vérification logicielle, validation physique et mesures sur matériel quantique.

Mes travaux couvrent aussi la présélection des systèmes d’ammoniac, la séparation dynamique PSA/VPSA et l’exposition thermique transitoire avec analyse de sensibilité.

> Guide localisé du README principal en anglais : objectifs, fonctions et limites des preuves pour 20 projets. Les détails techniques figurent dans la version anglaise et les dépôts. Revue : 2026-10-24 ; les calculs de validation n’ont pas été réexécutés indépendamment pour cette mise à jour.

## Projets

### [hydrogen-station-sim](https://github.com/lyullee/hydrogen-station-sim)

Prototype de jumeau numérique physique d’une station hydrogène : stockage, compression à trois étages, cascade, remplissage et logique de sécurité. FastAPI, vue 3D, 82 étiquettes HAZOP, exercices de panne et interfaces SAGA/HyRAM+ ; certains détecteurs sont virtuels. Les évaluations de composants ne constituent ni validation complète sur site ni certification de commande.

### [lh2dt_models](https://github.com/lyullee/lh2dt_models)

Bibliothèque Python de composants LH₂ composables, avec états thermodynamiques et flux de masse/énergie explicites : réservoirs, conduites, vannes, pompes et vaporiseurs. Réseaux stationnaires/dynamiques, observations capteurs/HART et références publiques ; validation propre à chaque composant. Distribution lh2dt_models, import lh2dt également disponible.

### [prism](https://github.com/lyullee/prism)

PRISM relie état du procédé, déviations HAZOP, fréquences bibliographiques, historiques de rejet, dispersion et risque conditionnel. Des modèles indépendants alimentent un registre traçable distinguant mesures et prédictions. Le paquet prism-risk et la CLI prism ne constituent pas une QRA exhaustive ni une certification réglementaire.

### [prism-dynasense](https://github.com/lyullee/prism-dynasense)

PRISM-DynaSense calcule localement un rejet d’hydrogène pressurisé, l’allumage retardé, l’isolement amont, le rejet résiduel aval et l’exposition thermique. Il associe dose/probit PRISM et Sobol SALib sur le modèle direct, avec échantillons, convergence, empreintes et tableau de bord hors ligne. Les entrées se modifient par JSON/CLI ; un seul scénario et une seule substance sont pris en charge, sans risque annuel de site ni validation expérimentale revendiqués.

### [ammonia-supply-risk](https://github.com/lyullee/ammonia-supply-risk)

Outils Python de présélection pour systèmes d’ammoniac : indicateurs incertains d’endommagement de dix matériaux, multiplicateurs matériau/soudure/environnement/inspection et répartition d’une fréquence initiale entre chemins de protection exclusifs. Le résumé Sobol de sept sorties est archivé, non recalculé par l’API. Les classements ne sont pas des taux annuels de fuite mesurés ; ni dispersion complète ni QRA de site ne sont fournies.

### [psa-dyna](https://github.com/lyullee/psa-dyna)

PSA-Dyna est un modèle dynamique PSA/VPSA 1D, non isotherme et multicomposant : volumes finis, écoulement Ergun, adsorption compétitive/LDF, bilans gaz-solide-paroi, vannes compressibles, lits/étapes multiples et reprise/CSS. La comparaison graphique de percée sur lit unique de Wang satisfait les critères déclarés, sans valider le cycle VPSA ni le dimensionnement industriel. Le contrat DWSIM FEED/PRODUCT/TAIL moyen est implémenté, mais son autorisation de transfert automatique reste fermée.

### [saga-py](https://github.com/lyullee/saga-py)

Assistant Python/FastAPI pour les normes coréennes du gaz, le droit et HAZOP : dialogue documentaire, coréen/anglais, validation des preuves et API de conversation/analyse de capteurs du jumeau. Les réponses documentées nécessitent un corpus local licite et des identifiants fournisseur. Le service ne commande pas les équipements physiques.

### [saga-sts](https://github.com/lyullee/saga-sts)

Ancienne édition Java 21/Spring Boot de SAGA conservée séparément. Tika, Lucene/Nori, pgvector, Spring AI et Ollama assurent recherche, conversation et modules HAZOP/LPG. Documents privés et index exclus ; ses API et son environnement ne remplacent pas directement SAGA-PY.

### [slabx](https://github.com/lyullee/slabx)

Réimplémentation Python du modèle SLAB : nappes évaporantes, jets horizontaux/ascendants, rejets instantanés et transition panache/bouffée. Extensions optionnelles de gouttelettes, transfert au sol et propriétés réelles séparées du chemin historique. Comparaisons Fortran et évaluation sur 38 essais de terrain/soufflerie ; certaines observations sont à obtenir séparément.

### [slabx-lh2](https://github.com/lyullee/slabx-lh2)

Ajoute à SLABx la physique des sources LH₂ et des diagnostics d’applicabilité : changements de phase cryogéniques, sol, flottabilité et eau sous le point triple. La configuration scientifique utilise sept essais FFI et 210 enregistrements, avec entrées et procédure distinctes. Il ne s’agit pas de 210 expériences indépendantes.

### [degadisx](https://github.com/lyullee/degadisx)

Réimplémentation Python d’EPA DEGADIS 2.1 conservant sa thermodynamique et sa voie numérique historiques. Rejets stationnaires/transitoires au sol, jets pressurisés, fichiers d’entrée et transfert SourceLedger. Les fractions liquides non résolues sont refusées ; les extensions LH₂ de DEGALI sont exclues.

### [degali](https://github.com/lyullee/degali)

Modèle de recherche LH₂ fondé sur la compatibilité DEGADIS : détente flash, flottabilité, condensation/gel de l’air et sol. Les évaluations EPA/Fortran, PRESLHY et FFI/DNV distinguent pics et moyennes temporelles. Logiciel alpha : fermetures et convergence des extensions 3D/obstacles restent limitées ; aucune qualification réglementaire n’en découle.

### [lh2poolx](https://github.com/lyullee/lh2poolx)

Terme source d’évaporation d’une nappe LH₂ quasi stationnaire sur une fenêtre déclarée. Deux voies utilisent rejet/pression/fraction déposée déclarée ou emprise observée, avec flash, conduction et plafond de flux critique. Ne prédit ni emprise d’impact inconnue, ni dépôt inconnu, ni inventaire transitoire.

### [DynamicLH2PoolX](https://github.com/lyullee/DynamicLH2PoolX)

Calcule étalement axisymétrique, évaporation, inventaire et bilan massique à partir d’un DeclaredInflow déjà arrivé au sol horizontal. Vérifications de conservation/raffinement et comparaisons JUEL/HSE dans le périmètre Stage C restreint. Impacts, pentes, obstacles et dispersion atmosphérique sont exclus ; la trajectoire HSE complète n’est pas reproduite.

### [pifira](https://github.com/lyullee/pifira)

Analyse inverse de l’apport thermique, de la surface effective de contact des flammes et du flux à partir de pression/température de paroi d’un réservoir LPG. Inclut thermodynamique ortho–para LH₂, contrôle de composition, cinétiques publiées et fermeture de tuyère HEOS. Sources et limites de validation documentées, sans redistribution des données expérimentales.

### [lh2-psv-tno-risk](https://github.com/lyullee/lh2-psv-tno-risk)

Archive reliant auto-pressurisation LH₂, ouverture/fermeture PSV, historique de décharge, état flash/thermique et indicateurs incendie/dispersion alignés TNO. Outils de lecture des résultats, aire de risque conditionnelle, classification et régénération des figures. Ne fournit pas tous les solveurs amont/TNO ni un dimensionnement PSV certifié.

### [hydrogen-local-energetics](https://github.com/lyullee/hydrogen-local-energetics)

Archive reproductible sur l’énergétique locale de l’hydrogène et sa mobilité contrôlée par le réseau cristallin. Contient 32 paires Quantum ESPRESSO, tableaux MACE-OMat-0/CHGNet, analyses, pseudopotentiels et empreintes. Les figures se régénèrent sans poids externes ; le script dédié de génération CHGNet NEB n’a pas été conservé.

### [qsafety-qae](https://github.com/lyullee/qsafety-qae)

Compare probabilités pondérées exactes, Monte Carlo et QAE idéale à maximum de vraisemblance pour des mélanges finis de sécurité/fiabilité. Cœur NumPy, CSV/CLI, contrôles Qiskit/Grover/Aer et exécution IBM facultative. Les budgets de requêtes sont comparables, mais les résultats idéaux ne démontrent pas un avantage quantique matériel.

### [psa-qae-resource-audit](https://github.com/lyullee/psa-qae-resource-audit)

Relie PSA/membranes hydrogène, cohérence des pressions et réserve de régénération à un événement probabiliste et un audit quantique. Holdouts publics, intégrateurs/DWSIM et ressources d’oracle arithmétique à dix bits. Le test IBM à sept qubits d’une réduction à deux bits couvre 64 entrées : ni QAE cohérente ni oracle complet ; validation de l’appareil intégré encore attendue.

### [nbcp-magnetocaloric-quantum-spectral-flow](https://github.com/lyullee/nbcp-magnetocaloric-quantum-spectral-flow)

Étudie les interactions, la forme et l’incertitude de modèle du réfrigérant Na₂BaCo(PO₄)₂ pour les décisions sous le kelvin. Données publiques, amas N=12/N=18 et contrôles Python/Octave précèdent les essais de flux spectral quantique. Le test IBM à six qubits valide le signe de correction entropique, pas son amplitude quantitative ; aucune solution macroscopique ni avantage quantique n’est revendiqué.

## Contact et utilisation scientifique

**E-mail principal: [lyullee@gmail.com](mailto:lyullee@gmail.com)** · E-mail secondaire: [lyullee@kgs.or.kr](mailto:lyullee@kgs.or.kr) · [Google Scholar](https://scholar.google.com/citations?user=WZn0QQwAAAAJ)

Pour échanger sur la recherche, la modélisation de la sécurité hydrogène ou les logiciels scientifiques, contactez-moi. Avant réutilisation, consultez la licence, les références/DOI, la politique de données et le domaine de validation de chaque dépôt. Ce profil ne certifie pas indépendamment les résultats de sécurité.
