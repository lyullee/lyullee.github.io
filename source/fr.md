# Ugwiyeon Lee (Lyul Lee) · 이우귀연

### Chemical Engineering Software Developer

[English](../../README.md) · [한국어](README.ko.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [हिन्दी](README.hi.md)

[Site de recherche](https://lyullee.github.io/) · [GitHub](https://github.com/lyullee) · [Google Scholar](https://scholar.google.com/citations?user=WZn0QQwAAAAJ) · [E-mail principal](mailto:lyullee@gmail.com) · [E-mail secondaire](mailto:lyullee@kgs.or.kr)

## À propos

Je suis Ugwiyeon Lee (이우귀연, Lyul Lee), affilié à Korea Gas Safety Corporation, en République de Corée. Je développe des logiciels scientifiques à la croisée du génie chimique, de la sécurité des procédés et de la recherche numérique. Mes travaux couvrent les équipements hydrogène, les sources de rejet, les nappes de liquide, la dispersion, les incendies, les assistants documentaires, les propriétés atomiques de l’hydrogène et les méthodes quantiques. Je privilégie les hypothèses explicites, les bilans de masse et d’énergie, la convergence, la comparaison expérimentale et la traçabilité. Je distingue vérification logicielle, validation physique et mesures sur matériel quantique.

Mes travaux couvrent aussi la présélection des systèmes d’ammoniac, la séparation dynamique PSA/VPSA et l’exposition thermique transitoire avec analyse de sensibilité.

Mes outils couvrent désormais aussi la surveillance des procédés, la fiabilité humaine, l’inspection fondée sur le risque et la TEA/comptabilité environnementale partielle du biométhane.

> Guide localisé du README principal en anglais : objectifs, fonctions et limites des preuves pour 31 projets. Les détails techniques figurent dans la version anglaise et les dépôts. Revue : 2026-11-06 ; les calculs de validation n’ont pas été réexécutés indépendamment pour cette mise à jour.

## Projets

### [monitoring-diagnostics-toolkit](https://github.com/lyullee/monitoring-diagnostics-toolkit)

Surveillance Python spécifique aux équipements à partir de capteurs SI explicites de température, pression, débit, inventaire et position. Bilans massiques/thermiques, résistance, perméabilité membranaire, résidus de performance et alarmes causales exposent validité, raisons et provenance. Onze types CLI complètent les API Python et adaptateurs optionnels à révisions fixées.

- Python 3.11+, cœur NumPy, import `equipment_diagnostics`, code original MIT. Alpha de recherche 0.17.1 disponible en source et archive Zenodo ; publication PyPI non confirmée à la revue. Données brutes, moteurs externes et profils entraînés séparés.
- [Preuves et limites](https://github.com/lyullee/monitoring-diagnostics-toolkit/blob/main/README.md#evidence-and-current-applicability) : 286 tests logiciels/physiques et sept intégrations d’objets limitées rapportés en amont, non réexécutés ici. Une alarme n’est ni probabilité de défaut ni cause confirmée. Le gain réévalué de pompe à chaleur dépend d’un écart intersession de 0,3 K ; des décalages synthétiques ±0,3 K sur les données normales provoquent 99,28 % d’alarmes. Spécificité, transfert indépendant et vérité terrain de plusieurs modules restent ouverts ; aucune précision universelle ou exploitation sûre certifiée.

[Zenodo 0.17.1](https://doi.org/10.5281/zenodo.23993237)

### [plantdesign-toolkit](https://github.com/lyullee/plantdesign-toolkit)

Outil Alpha de recherche pour conception de procédés industriels, criblage d’équipements, évaluation économique et comptabilité environnementale, avec 67 méthodes explicites. SDK Python, CLI et API HTTP JSON locale offrent historiques SQLite, graphes de calcul, scénarios et réutilisation ; moteur DWSIM optionnel à installer séparément.

- Python 3.11+, import `plantdesign`, GPL-3.0-only avec notices requises des modèles dérivés de DWSIM. Version 0.11.0 publique ; calculateurs ordinaires sans dépendance d’exécution tierce.
- La [vérification consignée](https://github.com/lyullee/plantdesign-toolkit/blob/main/docs/VERIFICATION.md) rapporte 364 tests Windows/Ubuntu sous Python 3.11/3.12 et des contrôles des 67 méthodes installées, non réexécutés ici. Les 44 familles ne sont pas des calculateurs supplémentaires. Prix, coefficients et facteurs d’exemple sont supposés ; données de projet sourcées, conception physique détaillée et périmètres environnementaux complets restent nécessaires. Aucune approbation de conception, ACV complète, autorisation ou qualification d’investissement/site.

[PyPI 0.11.0](https://pypi.org/project/plantdesign-toolkit/0.11.0/) · [GitHub](https://github.com/lyullee/plantdesign-toolkit/releases/tag/v0.11.0) · [Zenodo DOI](https://doi.org/10.5281/zenodo.23954849)

### [rotorvibe](https://github.com/lyullee/rotorvibe)

Analyse vibratoire Python composable pour machines tournantes : signaux étalonnés, FFT/PSD et spectres d’enveloppe, fréquences de roulement, références normales à périmètre explicite et candidats de défaut inspectables. Fournisseurs, étapes et récepteurs de l’API NumPy sont remplaçables ; tableau de bord local optionnel.

- Python 3.11+, code original MIT, Alpha de recherche 0.1.0a5 public. Données brutes et profils entraînés propres au banc à acquérir séparément ; limites normatives fournies par l’appelant.
- [Preuves et limites](https://github.com/lyullee/rotorvibe/blob/main/README.md#evidence-retain-the-failures) : 99,82 % concernait uniquement des défauts sur le même appareil/roulement/niveaux de sévérité, sans nouveau test sain. Les transferts vers un nouveau roulement et un banc indépendant ont échoué ; l’API stricte a suspendu ses décisions sur les 580 nouvelles fenêtres. Aucun taux nul de fausses alertes, diagnostic de terrain, pronostic de durée de vie ou pouvoir d’arrêt automatique n’est établi. Contrôles publics distincts des 547 contrôles privés historiques, non réexécutés ici.

[PyPI 0.1.0a5](https://pypi.org/project/rotorvibe/0.1.0a5/) · [GitHub](https://github.com/lyullee/rotorvibe/releases/tag/v0.1.0a5) · [Zenodo 0.1.0a5](https://doi.org/10.5281/zenodo.23941252)
- **Mise à jour 0.1.0a5 :** contrats de profil/nombres/décision renforcés, qualité d’acquisition et étalonnage normal contextualisé, expériences angulaires à vitesse mesurée, files bornées, copies isolées par étape/récepteur, pont optionnel de surveillance de procédé à version fixée, profils hachés, historique PSD conservant la puissance et règles fournies révisées. L’estimation de vie exige un choix expérimental explicite. Le dépôt rapporte 224 tests ciblés du wheel installé, sans nouvelle qualification de classification mesurée ou de vie sur site. Une rafale à 48 kHz/quatre canaux dépasse encore 17 fois le budget de 250 ms. Voir le [dossier de version](https://github.com/lyullee/rotorvibe/blob/main/docs/RELEASE_0_1_0a5.md).

### [pipeline-safety-toolkit](https://github.com/lyullee/pipeline-safety-toolkit)

Outils de recherche composables pour l’écoulement, la thermodynamique, les structures, les dommages, la métrologie et les échanges de risque des conduites, avec unités, horloges, provenance et fournisseurs remplaçables explicites.

- Python 3.12+, code original MIT, import `pipeline_integrity`. [PyPI 0.1.0a1](https://pypi.org/project/pipeline-safety-toolkit/0.1.0a1/) et [archive Zenodo](https://doi.org/10.5281/zenodo.23899127) publics ; moteurs et données externes ont leurs propres exigences. Les 223 méthodes et 304 API ne sont pas autant de solveurs validés indépendamment.
- [Preuves consignées](https://github.com/lyullee/pipeline-safety-toolkit/blob/main/research/public_validation_status.json) : profils physiques indépendants limités à 198/223 méthodes ; 25 restent en attente et quatre échecs d’acceptation empirique subsistent. Le sous-ensemble portable du wheel installé rapporte 276 réussites ; des constats de style restent ouverts. Ces contrôles amont n’ont pas été réexécutés ici et ne certifient ni la sécurité sur site ni la conformité normative.

### [h2physics](https://github.com/lyullee/h2physics)

Modèles physiques Python composables pour la recherche sur la production, le stockage, le transfert et la sécurité de l’hydrogène : thermodynamique, équipements, hydrures/adsorption, électrochimie/séparation, perméation/diffusion, rejets et interfaces de site. Objets, fonctions et tableaux permettent de remplacer paramètres et fournisseurs.

- Les unités SI, espèces/phases, références énergétiques et horloges sont explicites. Les moteurs optionnels CoolProp, Cantera, LH2DT, PSA-Dyna ou HyRAM+ nécessitent une installation et une vérification des licences distinctes. Les 82 entrées du catalogue et 78 familles thématiques des campagnes ne comptent pas des équations indépendantes et ne prouvent pas une qualification physique complète.
- Les documents décrivent des contrôles sélectionnés des entrées, calculs, limites, connexions et régressions, ainsi que quatre comparaisons conditionnelles sur données réservées : perméance effective, courbes normalisées d’hydrures, tension PEM et débit de buse. Les métriques ne peuvent être fusionnées ; l’erreur relative moyenne de la buse atteint environ 29,8 %. La qualification physique globale reste non établie et certaines connexions normales restent bloquées ou limitées au rejet. Aucun calcul n’a été réexécuté pour ce profil.
- [0.2.0 Alpha sur GitHub](https://github.com/lyullee/h2physics/releases/tag/v0.2.0) fournit wheel et sources ; [PyPI 0.2.0](https://pypi.org/project/h2physics/0.2.0/) et l’archive logicielle [Zenodo DOI](https://doi.org/10.5281/zenodo.23889027) sont désormais publics. Le registre et les métadonnées DOI ont été vérifiés ; les tests d’installation sont rapportés par le dépôt et n’ont pas été réexécutés pour ce profil. Python 3.12+, code original Apache-2.0 ; observations externes, moteurs et documents de référence sont exclus des distributions. Voir le [rapport de comparaison](https://github.com/lyullee/h2physics/blob/main/docs/PHYSICAL_VALIDATION_CAMPAIGN.md) et le [statut de publication](https://github.com/lyullee/h2physics/blob/main/docs/PUBLICATION_STATUS.md).

- **Extensions publiées :** les [extensions 0.2.0](https://github.com/lyullee/h2physics/blob/main/docs/ENHANCEMENTS_20261102.md) ajoutent accumulation intérieure et pics conditionnels selon le délai d’allumage, criblage FA/DDT, détente mécanique et charges d’ondes faibles, réponse structurale linéaire, cycles thermiques/exergie, équilibre redox solide, métriques d’électrode et recombineur autocatalytique passif (PAR) couplé. Elles sont incluses dans la version publiée 0.2.0 ; les fournisseurs optionnels restent nécessaires séparément. Le dépôt amont rapporte 139 contrôles ciblés distincts achevés sur plusieurs environnements, dont des contrôles du wheel installé ; une reprise plus large conserve 61 échecs liés à l’environnement ou aux artefacts. Ces contrôles logiciels limités ne constituent pas une nouvelle qualification expérimentale ou d’installation et n’ont pas été réexécutés ici.

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

### [process-monitoring-toolkit](https://github.com/lyullee/process-monitoring-toolkit)

Cadre Python composable transformant les signaux de procédé en scores d’anomalie, preuves de défaut et événements. Règles, statistiques, apprentissage, modèles temporels/graphes et résidus CoolProp partagent contrats, calibration indépendante et masques de validité. Les 72 configurations, 117 tests locaux et 31 essais exploratoires ne prouvent ni cause physique, ni fréquence d’accident, ni performance intersites.

### [human-reliability-toolkit](https://github.com/lyullee/human-reliability-toolkit)

Modèles Python reliant tâches, preuves de performance humaine, erreurs/temps de réponse et risque : DAG, mises à jour bayésiennes, références SPAR-H/HEART/CREAM/IDHEAS, récupération, dépendance et FTA/ETA. Les 1 334 entrées de sept sources incluent comptes, composants et multiplicateurs, pas autant de mesures indépendantes. SACADA provient de simulateurs nucléaires ; aucune calibration HEP chimique de terrain ni série annuelle observée n’est revendiquée.

La version 0.5.0 ajoute formulaires de terrain, rapprochement indépendant des dénominateurs, évaluation de prévisions HEP gelées et douze extensions opérationnelles. Les 5 617 opportunités cliniques constituent un agrégat distinct succès/non-conformité, sans attribution humaine industrielle ; un résultat temporel défavorable de calibration est conservé.

### [api581-risk-analysis](https://github.com/lyullee/api581-risk-analysis)

Implémentation Python indépendante et non officielle de calculs d’inspection fondée sur le risque API-RP-581. Paquet api581-engine/import api581, domaines dommage, fréquence, inspection, rejet, conséquences, risque et planification, avec SLABx optionnel et API 520 séparé. Les 509 calculs et 861 références de section sont vérifiés au niveau logiciel, sans certification tierce. Aucun aval API ; normes exclues et code original Apache-2.0.

### [adm1-tea-lca](https://github.com/lyullee/adm1-tea-lca)

Archive exécutable d’une étude ADM1 de biométhane sur ensilage/herbe et lisier bovin. Intégration à 34 états, TEA reconstruite, comptabilité GES partielle et analyses sur grille finie/Pareto, robustesse et sensibilité. Cinq tests légers et une petite démonstration ne constituent ni validation expérimentale ni reproduction historique complète. Les sorties environnementales ne sont pas une ACV complète ; le crédit fertilisant peut être surestimé.

### [process-risk-consequence-toolkit](https://github.com/lyullee/process-risk-consequence-toolkit)

Outil indépendant de présélection des conséquences et de recherche sur les gaz denses. Les 23 calculs typés couvrent sources, dispersion passive, incendie/explosion, exposition et risque conditionnel, avec Python/CLI/HTTP optionnel et reçus traçables. Historiques SLABx et couche 1D isotherme, de largeur fixe et mélangée verticalement sont distincts. Le paquet de base 0.1.0 est publié sur PyPI, avec des contrôles d’installation en environnement neuf documentés en amont. SLABx 1.0.8 reste absent de PyPI ; l’extra dense ne s’y installe pas seul. Apache-2.0, sans aval CCPS/AIChE ni certification de terrain.

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

### [materials-corrosion-toolkit](https://github.com/lyullee/materials-corrosion-toolkit)

Modules Python indépendants pour matériaux, corrosion, électrochimie, diffusion, intégrité structurale, fabrication/soudage et inspection, avec contrats stricts d’entrée, d’unité, de preuve et de statut.

- Python 3.11+, code original MIT, import `matintegrity` ; métadonnées source Alpha de recherche 0.1.0a1. [PyPI 0.1.0a1](https://pypi.org/project/materials-corrosion-toolkit/0.1.0a1/), la [version GitHub](https://github.com/lyullee/materials-corrosion-toolkit/releases/tag/v0.1.0a1) et l’[archive Zenodo](https://doi.org/10.5281/zenodo.23899598) sont désormais publics ; disponibilité du registre et métadonnées DOI vérifiées. Fournisseurs scientifiques/de propriétés optionnels et données externes nécessitent installation et droits séparés.
- [Limites consignées](https://github.com/lyullee/materials-corrosion-toolkit/blob/main/docs/RELEASE_STATUS_KO.md) : 757 API incluent données et workflows, avec 63 groupes de calcul centraux ; 230/232 API centrales auditées ont calculé, deux attendent des preuves externes. Le wheel installé rapporte 59 contrôles numériques réussis ; 885 constats Ruff et un contrôle de couverture complète des exemples restent ouverts. Les décomptes se chevauchent et ne sont pas des validations physiques indépendantes. Aucune approbation automatique de conception, probabilité de défaillance déduite du dommage déterministe ou qualification sur site ; contrôles non réexécutés ici.

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
