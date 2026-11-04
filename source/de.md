# Ugwiyeon Lee (Lyul Lee) · 이우귀연

### Chemical Engineering Software Developer

[English](../../README.md) · [한국어](README.ko.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [हिन्दी](README.hi.md)

[Forschungswebsite](https://lyullee.github.io/) · [GitHub](https://github.com/lyullee) · [Google Scholar](https://scholar.google.com/citations?user=WZn0QQwAAAAJ) · [Primäre E-Mail](mailto:lyullee@gmail.com) · [Zweite E-Mail](mailto:lyullee@kgs.or.kr)

## Über mich

Ich bin Ugwiyeon Lee (이우귀연, Lyul Lee), tätig bei der Korea Gas Safety Corporation in der Republik Korea. Ich entwickle wissenschaftliche Software an der Schnittstelle von Chemieingenieurwesen, Prozesssicherheit und rechnergestützter Forschung. Meine Projekte behandeln dynamische Wasserstoffanlagen, Freisetzungsquellen, Flüssigwasserstofflachen, Ausbreitung, Brände, dokumentengestützte Assistenz, atomare Wasserstoffenergetik und Quantenmethoden. Explizite Annahmen, Massen- und Energiebilanzen, numerische Konvergenz, unabhängige Experimentvergleiche und Datenherkunft stehen im Mittelpunkt. Softwareverifikation, physikalische Validierung und Messungen auf Quantenhardware werden getrennt bewertet.

Weitere Themen sind Ammoniakversorgung, dynamische PSA/VPSA-Trennung sowie zeitabhängige Wärmeexposition und Sensitivitätsanalyse.

Hinzugekommen sind Prozessüberwachung, menschliche Zuverlässigkeit, risikobasierte Inspektion sowie Biomethan-TEA und partielle Umweltbilanzierung.

> Lokalisierter Leitfaden zum englischen Haupt-README mit Zielen, Funktionen und Evidenzgrenzen aller 29 Projekte. Technische Einzelheiten stehen im englischen Text und in den Repositories. Prüfdatum: 2026-11-04; Validierungsrechnungen wurden für diese Profiländerung nicht unabhängig wiederholt.

## Projekte

### [rotorvibe](https://github.com/lyullee/rotorvibe)

Kombinierbare Python-Schwingungsanalyse für rotierende Maschinen: kalibrierte Wellenformen, FFT/PSD und Hüllkurvenspektren, Lagerfrequenzmarkierungen, begrenzte Normalreferenzen und prüfbare Fehlerkandidaten. Anbieter, Stufen und Ergebniskonsumenten der NumPy-API sind austauschbar; das lokale Dashboard ist optional.

- Python 3.11+, Originalcode MIT, Forschungs-Alpha 0.1.0a1 öffentlich. Rohdaten und prüfstandsbezogene trainierte Profile separat beschaffen; Normgrenzen liefert der Aufrufer.
- [Evidenz und Grenzen](https://github.com/lyullee/rotorvibe/blob/main/README.md#evidence-retain-the-failures): 99,82 % betraf nur Fehlerdaten desselben Aufbaus/Lagers/Schweregrads, ohne neuen Normaltest. Übertragung auf neue Lager und unabhängige Prüfstände scheiterte; die strenge API hielt alle 580 neuen Fenster zurück. Daraus folgen weder Null-Fehlalarmrate noch Felddiagnose, Restlebensdauerprognose oder automatische Abschaltbefugnis. Öffentliche Softwareprüfungen sind von den historischen 547 privaten Prüfungen getrennt und wurden hier nicht wiederholt.

[PyPI 0.1.0a1](https://pypi.org/project/rotorvibe/0.1.0a1/) · [GitHub](https://github.com/lyullee/rotorvibe/releases/tag/v0.1.0a1) · [Zenodo DOI](https://doi.org/10.5281/zenodo.23937890)

### [pipeline-safety-toolkit](https://github.com/lyullee/pipeline-safety-toolkit)

Kombinierbare Forschungswerkzeuge für Rohrströmung, Thermodynamik, Strukturantwort, Schäden, Messtechnik und Risikoaustausch mit expliziten Einheiten, Zeitbasen, Herkunft und austauschbaren Anbietern.

- Python 3.12+, Originalcode MIT, Import `pipeline_integrity`. [PyPI 0.1.0a1](https://pypi.org/project/pipeline-safety-toolkit/0.1.0a1/) und [Zenodo-Archiv](https://doi.org/10.5281/zenodo.23899127) sind öffentlich; externe Engines und Daten haben eigene Anforderungen. 223 Methoden und 304 APIs sind keine Anzahl unabhängig validierter Solver.
- [Dokumentierte Evidenz](https://github.com/lyullee/pipeline-safety-toolkit/blob/main/research/public_validation_status.json): begrenzte unabhängige Physikprofile für 198/223 Methoden; 25 sind offen, vier empirische Akzeptanzfehler bleiben. Die portable Teilmenge des installierten Wheels meldet 276 bestandene Prüfungen; vollständige Stilprüfungen haben offene Befunde. Hier nicht erneut ausgeführt; keine Feldsicherheits- oder Normenzertifizierung.

### [h2physics](https://github.com/lyullee/h2physics)

Zusammensetzbare Python-Physikmodelle zur Erforschung von Wasserstoffproduktion, Speicherung, Transfer und Sicherheit: Thermodynamik, Anlagenkomponenten, Hydride/Adsorption, Elektrochemie/Trennung, Permeation/Diffusion, Freisetzungsverläufe und Anlagen-Schnittstellen. Parameter und Anbieter lassen sich über Python-Objekte, Funktionen und Arrays austauschen.

- SI-Einheiten, Stoff-/Phasenidentität, Energiebezüge und Zeitachsen sind explizit. Optionale Engines wie CoolProp, Cantera, LH2DT, PSA-Dyna und HyRAM+ erfordern separate Installation und Lizenzprüfung. 82 Katalogeinträge und 78 Themenfamilien der Prüfkampagnen sind weder unabhängige Gleichungen noch ein Nachweis vollständiger physikalischer Qualifikation.
- Dokumentiert sind ausgewählte Eingabe-, Rechen-, Grenz-, Verbindungs- und Regressionstests sowie vier bedingte Vergleiche mit zurückgehaltenen Messdaten: effektive Permeanz, normierte Hydridreaktionskurven, PEM-Spannung und Düsendurchfluss. Unterschiedliche Fehlermaße dürfen nicht zusammengefasst werden; der mittlere relative Düsenfehler beträgt etwa 29,8 %. Die vollständige physikalische Qualifikation ist nicht belegt; einige normale Verbindungen bleiben blockiert oder nur durch Ablehnung geprüft. Für dieses Profil wurden keine Berechnungen wiederholt.
- [GitHub 0.2.0 Alpha](https://github.com/lyullee/h2physics/releases/tag/v0.2.0) enthält Wheel und Quellarchiv; [PyPI 0.2.0](https://pypi.org/project/h2physics/0.2.0/) und das Softwarearchiv [Zenodo DOI](https://doi.org/10.5281/zenodo.23889027) sind jetzt öffentlich. Registry und DOI-Metadaten wurden geprüft; Installationstests sind im Ursprungsprojekt dokumentiert und wurden für dieses Profil nicht wiederholt. Python 3.12+, Originalcode Apache-2.0; externe Beobachtungen, Engines und Referenzdokumente sind nicht enthalten. Siehe [Vergleichsbericht](https://github.com/lyullee/h2physics/blob/main/docs/PHYSICAL_VALIDATION_CAMPAIGN.md) und [Publikationsstatus](https://github.com/lyullee/h2physics/blob/main/docs/PUBLICATION_STATUS.md).

- **Veröffentlichte Erweiterungen:** Die [Erweiterungen in 0.2.0](https://github.com/lyullee/h2physics/blob/main/docs/ENHANCEMENTS_20261102.md) ergänzen Innenraumakkumulation und bedingte Spitzen nach Zündverzögerung, FA/DDT-Screening, mechanische Expansion und schwache Wellenlasten, lineare Strukturantwort, thermische Kreisläufe/Exergie, Feststoff-Redoxgleichgewicht, Elektrodenkennzahlen und einen gekoppelten passiven autokatalytischen Rekombinator (PAR). Sie sind in der veröffentlichten Version 0.2.0 enthalten; optionale Anbieter bleiben separat erforderlich. Das Quellprojekt meldet 139 verschiedene abgeschlossene Schwerpunktprüfungen über mehrere Laufzeitumgebungen, einschließlich Prüfungen des installierten Wheels; ein separater breiterer Wiederholungslauf behält 61 umgebungs- oder artefaktbedingte Fehler. Diese begrenzten Softwareprüfungen sind keine neue experimentelle oder Anlagenqualifikation und wurden hier nicht erneut ausgeführt.

### [hydrogen-station-sim](https://github.com/lyullee/hydrogen-station-sim)

Physikalischer digitaler Zwilling einer Wasserstofftankstelle mit Speicherung, dreistufiger Verdichtung, Kaskade, Betankung und Sicherheitslogik. FastAPI, 3D-Ansicht, 82 HAZOP-Tags, Fehlerübungen sowie SAGA/HyRAM+-Anbindung; Detektoren umfassen virtuelle Stellvertreter. Komponentenprüfungen sind keine vollständige Feldvalidierung oder zertifizierte Anlagensteuerung.

### [lh2dt_models](https://github.com/lyullee/lh2dt_models)

Python-Bibliothek für kombinierbare LH₂-Komponenten mit expliziten thermodynamischen Zuständen und Massen-/Energieflüssen: Tanks, Rohre, Ventile, Pumpen und Verdampfer. Stationäre/dynamische Netze, Sensor-/HART-Beobachtungen und öffentliche Benchmarks. Validierung gilt komponentenbezogen; lh2dt_models unterstützt auch den Import lh2dt.

### [prism](https://github.com/lyullee/prism)

PRISM verbindet Prozesszustand, HAZOP-Abweichungen, literaturgestützte Anfangshäufigkeiten, Freisetzungsverläufe, Ausbreitung und bedingtes Risiko. Unabhängige Modelle liefern nachvollziehbare Datensätze mit getrennten Mess- und Prognoseeingaben. prism-risk und CLI prism ersetzen keine vollständige Anlagen-QRA oder behördliche Zertifizierung.

### [prism-dynasense](https://github.com/lyullee/prism-dynasense)

PRISM-DynaSense berechnet lokal Druckwasserstofffreisetzung, verzögerte Zündung, vorgeschaltete Absperrung, nachgelagerte Restfreisetzung und Wärmeexposition. PRISM-Dosis/Probit und direkte SALib-Sobol-Analyse liefern Rohstichproben, Konvergenz, Hashes und ein Offline-Dashboard. Eingaben werden per JSON/CLI geändert. Ein Stoff und Szenario, ohne Anspruch auf jährliches Anlagenrisiko oder experimentelle Validierung.

### [ammonia-supply-risk](https://github.com/lyullee/ammonia-supply-risk)

Python-Screening für Ammoniakversorgung: unsichere Schadensindikatoren für zehn Materialien, Material-/Schweiß-/Umwelt-/Inspektionsfaktoren und Aufteilung einer Anfangshäufigkeit auf ausschließende Schutzpfade. Die Sobol-Zusammenfassung für sieben Ausgaben ist archiviert und wird nicht durch die API neu berechnet. Rangfolgen sind keine gemessenen jährlichen Leckraten; vollständige Ausbreitungs-, Folgen- und Anlagen-QRA fehlen.

### [psa-dyna](https://github.com/lyullee/psa-dyna)

PSA-Dyna ist ein eindimensionales, nichtisothermes Mehrkomponentenmodell für dynamische PSA/VPSA: finite Volumina, Ergun-Strömung, kompetitive Adsorption/LDF, Gas-Feststoff-Wand-Energie, kompressible Ventile, mehrere Betten/Schritte sowie Neustart/CSS. Wangs Einzelbett-Durchbruchvergleich auf Abbildungsebene besteht die festgelegten Prüfungen, validiert aber weder zyklische VPSA noch Industrieauslegung. DWSIM-Mittelströme FEED/PRODUCT/TAIL sind vertraglich implementiert; automatische Übergabe bleibt gesperrt.

### [process-monitoring-toolkit](https://github.com/lyullee/process-monitoring-toolkit)

Komponierbares Python-Forschungsframework für Anomaliescores, Fehlerbelege und Überwachungsereignisse aus Prozesssignalen. Regeln, Statistik, Lernverfahren, Zeit-/Graphmodelle und CoolProp-Residuen teilen Signalverträge, unabhängige Kalibrierung und Gültigkeitsmasken. 72 Konfigurationen, 117 lokale Tests und 31 explorative Läufe belegen weder physische Ursache noch Unfallhäufigkeit oder standortübergreifende Leistung.

### [human-reliability-toolkit](https://github.com/lyullee/human-reliability-toolkit)

Python-Modelle für Aufgaben, menschliche Leistungsdaten, Fehler/Antwortzeiten und Prozessrisiko: DAGs, Bayes-Zählupdates, SPAR-H/HEART/CREAM/IDHEAS, Erholung, Abhängigkeit und FTA/ETA. Die 1.334 Katalogeinträge aus sieben Zahlenquellen enthalten Zählungen, Komponenten und Faktoren, keine 1.334 unabhängigen Messungen. SACADA stammt aus nuklearen Trainingssimulatoren; chemische Feld-HEP und beobachtete Jahresfrequenzen sind nicht kalibriert.

Version 0.5.0 ergänzt Erhebungsformulare, unabhängigen Aufgaben-Nennerabgleich, eingefrorene HEP-Prognosebewertung und zwölf operative Erweiterungen. 5.617 klinische Probengelegenheiten sind ein getrenntes Erfolgs-/Abweichungsaggregat, keine industriellen menschlichen Fehlermessungen; ungünstige zeitliche Kalibrierung bleibt dokumentiert.

### [api581-risk-analysis](https://github.com/lyullee/api581-risk-analysis)

Unabhängige, inoffizielle Python-Implementierung risikobasierter API-RP-581-Inspektion. api581-engine/import api581 umfasst Schäden, Häufigkeit, Inspektion, Freisetzung, Folgen, Risiko und Planung; SLABx ist optional, API 520 separat. 509 registrierte Berechnungen und 861 Quellenabschnitte sind Softwarebelege, keine Fremdzertifizierung. Keine API-Unterstützung, keine Normtexte; Originalarbeit unter Apache-2.0.

### [adm1-tea-lca](https://github.com/lyullee/adm1-tea-lca)

Ausführbares Archiv früherer ADM1-Biomethanforschung zu Grassilage/Rindergülle. 34-Zustands-Integration, rekonstruierte TEA, partielle Treibhausgasbilanz und endliche Gitter-/Pareto-, Robustheits- und Sensitivitätsanalysen. Fünf leichte Tests und ein kleines Beispiel sind keine experimentelle oder vollständige historische Reproduktion. Keine vollständige Ökobilanz oder geprüfter Produktfußabdruck; Düngergutschriften können überschätzt sein.

### [process-risk-consequence-toolkit](https://github.com/lyullee/process-risk-consequence-toolkit)

Unabhängiges Toolkit für Folgenscreening und Dichtgasforschung. 23 typisierte Berechnungen decken Quellen, passive Ausbreitung, Brand/Explosion, Exposition und bedingtes Risiko ab, mit Python/CLI/optionalem HTTP und nachvollziehbaren Belegen. SLABx-Verläufe und die isotherme, vertikal gemischte 1D-Schicht fester Breite sind getrennte Pfade. Das Basispaket 0.1.0 ist auf PyPI veröffentlicht; frische Installationsprüfungen sind im Ursprungsprojekt dokumentiert. SLABx 1.0.8 fehlt weiterhin auf PyPI; dense lässt sich dort nicht allein installieren. Apache-2.0, ohne CCPS/AIChE-Unterstützung oder Feldzertifizierung.

### [saga-py](https://github.com/lyullee/saga-py)

Python/FastAPI-Assistent für koreanische Gasnormen, Recht und HAZOP. Dokumentdialog, Koreanisch/Englisch, Belegprüfung und APIs für Anlagenkonversation und ausgewählte Sensoren. Belegte Antworten benötigen einen rechtmäßig verfügbaren lokalen Korpus und Anbieterzugang; physische Geräte werden nicht gesteuert.

### [saga-sts](https://github.com/lyullee/saga-sts)

Separat erhaltene ältere Java-21-/Spring-Boot-Ausgabe von SAGA. Tika, Lucene/Nori, pgvector, Spring AI und Ollama unterstützen Suche, Dialog und HAZOP/LPG-Module. Private Dokumente und Indizes fehlen bewusst; Laufzeit und APIs sind kein direkter Ersatz für SAGA-PY.

### [slabx](https://github.com/lyullee/slabx)

Python-Neuimplementierung von SLAB mit verdampfenden Lachen, horizontalen/aufsteigenden Strahlen, Momentanfreisetzung und Plume-Puff-Übergang. Optionale Tropfen-, Bodenwärme- und Realfluid-Erweiterungen sind vom historischen Pfad getrennt. Fortran-Vergleiche und 38 Feld-/Windkanalversuche sind dokumentiert; einige Beobachtungsdaten werden separat benötigt.

### [slabx-lh2](https://github.com/lyullee/slabx-lh2)

Ergänzt SLABx um LH₂-Quellphysik und Anwendbarkeitsdiagnostik, einschließlich kryogener Phasenwechsel, Bodenwechselwirkung, Auftrieb und Wasser unterhalb des Tripelpunktes. Die Forschungskonfiguration nutzt sieben FFI-Versuche mit 210 Datensätzen und benötigt eigene Eingaben/Abläufe. Das sind keine 210 unabhängigen Experimente.

### [degadisx](https://github.com/lyullee/degadisx)

Python-Reproduktion von EPA DEGADIS 2.1 mit historischer Thermodynamik und Numerik. Stationäre/transiente Bodenfreisetzung, Druckstrahlen, Eingabedecks und SourceLedger-Übergabe. Nicht aufgelöste Flüssiganteile werden zurückgewiesen; LH₂-Forschungserweiterungen aus DEGALI sind ausgeschlossen.

### [degali](https://github.com/lyullee/degali)

LH₂-Forschungsmodell auf DEGADIS-Kompatibilitätsbasis mit Flashverdampfung, Auftrieb, Luftkondensation/-gefrieren und Bodenwechselwirkung. EPA-/Fortran-, PRESLHY- und FFI/DNV-Auswertungen trennen Spitzen- und Zeitmittelwerte. Alpha-Software mit Grenzen bei Schließungen und Konvergenz von 3D-/Hinderniserweiterungen, ohne regulatorische Qualifizierung.

### [lh2poolx](https://github.com/lyullee/lh2poolx)

Quasistationärer LH₂-Lachenquellterm für ein angegebenes Zeitfenster. Verwendet Freisetzung/Druck/deklarierten Ablagerungsanteil oder beobachtete Fläche, mit Flash, Bodenleitung und kritischer Wärmestromgrenze. Unbekannte Auftrefffläche, Ablagerung und zeitabhängiger Flüssigkeitsbestand werden nicht vorhergesagt.

### [DynamicLH2PoolX](https://github.com/lyullee/DynamicLH2PoolX)

Berechnet achsensymmetrische Ausbreitung, Verdampfung, Bestand und Massenbilanz für bereits am horizontalen Boden angekommenen DeclaredInflow. Beschränkte Stage-C-Prüfungen umfassen Erhaltung, Verfeinerung und JUEL/HSE-Vergleiche. Strahlaufprall, Hänge, Hindernisse und atmosphärische Ausbreitung sind ausgeschlossen; die vollständige HSE-Ausdehnungs-/Rückzugsbahn wird nicht reproduziert.

### [pifira](https://github.com/lyullee/pifira)

Inverse Bestimmung von Wärmeeintrag, effektiver Flammenkontaktfläche und Wärmestrom aus LPG-Tankdruck und Wandtemperatur. Ergänzt LH₂-Ortho-/Para-Thermodynamik, Zusammensetzungsprüfungen, publizierte Kinetik und HEOS-Düsenmodell. Validierungsquellen und Grenzen sind dokumentiert; Versuchsdaten werden nicht weiterverteilt.

### [lh2-psv-tno-risk](https://github.com/lyullee/lh2-psv-tno-risk)

Forschungsarchiv zu LH₂-Selbstdruckaufbau, PSV-Schalten/Abblasen, Flash-/Austrittszustand und TNO-orientierten Brand-/Ausbreitungsindikatoren. Öffentliche Ergebnisse, bedingte Risikoflächen, Pfadklassifikation und Abbildungsreproduktion. Enthält weder sämtliche vorgelagerten Tank-/TNO-Löser noch eine zertifizierte PSV-Auslegung.

### [materials-corrosion-toolkit](https://github.com/lyullee/materials-corrosion-toolkit)

Unabhängige Python-Module für Materialien, Korrosion, Elektrochemie, Diffusion, Strukturintegrität, Fertigung/Schweißen und Inspektion mit strengen Eingabe-, Einheiten-, Evidenz- und Ergebnisstatusverträgen.

- Python 3.11+, Originalcode MIT, Import `matintegrity`; Quellmetadaten nennen Forschungs-Alpha 0.1.0a1. [PyPI 0.1.0a1](https://pypi.org/project/materials-corrosion-toolkit/0.1.0a1/), die [GitHub-Veröffentlichung](https://github.com/lyullee/materials-corrosion-toolkit/releases/tag/v0.1.0a1) und das [Zenodo-Archiv](https://doi.org/10.5281/zenodo.23899598) sind jetzt öffentlich; Registry-Verfügbarkeit und DOI-Metadaten wurden geprüft. Optionale Wissenschafts-/Stoffwertanbieter und externe Daten benötigen separate Installation und Rechte.
- [Dokumentierte Grenzen](https://github.com/lyullee/materials-corrosion-toolkit/blob/main/docs/RELEASE_STATUS_KO.md): 757 registrierte APIs enthalten Daten und Workflows; 63 zentrale Rechengruppen, 230/232 geprüfte Kern-APIs berechnet, zwei warten auf externe Evidenz. Das installierte Wheel meldet 59 bestandene numerische Prüfungen; 885 Ruff-Befunde und eine Prüfung vollständiger Beispielabdeckung bleiben offen. Überlappende Zahlen sind keine unabhängigen physikalischen Validierungen. Keine automatische Entwurfsfreigabe, Ausfallwahrscheinlichkeit aus deterministischem Schaden oder Feldqualifikation; hier nicht erneut ausgeführt.

### [hydrogen-local-energetics](https://github.com/lyullee/hydrogen-local-energetics)

Reproduzierbarkeitsarchiv für lokale Wasserstoffenergetik und gitterbestimmte Mobilität. 32 Quantum-ESPRESSO-Ein-/Ausgabepaare, MACE-OMat-0-/CHGNet-Arrays, Analysen, Pseudopotentiale und Prüfsummen. Abbildungen lassen sich ohne externe Modellgewichte erstellen; das spezielle CHGNet-NEB-Erzeugungsskript ist nicht erhalten.

### [qsafety-qae](https://github.com/lyullee/qsafety-qae)

Vergleicht exakte gewichtete Wahrscheinlichkeiten, Monte Carlo und ideale Maximum-Likelihood-QAE für endliche Sicherheits-/Zuverlässigkeitsmischungen. NumPy-Kern, CSV/CLI, Qiskit-/Grover-/Aer-Prüfungen und optionale IBM-Ausführung. Gleiche Oracle-Abfragebudgets erlauben Methodenvergleiche, belegen aber keinen Hardware-Quantenvorteil.

### [psa-qae-resource-audit](https://github.com/lyullee/psa-qae-resource-audit)

Verknüpft druckkonsistente Wasserstoff-PSA/Membranprozesse und Regenerationsreserve mit einem Wahrscheinlichkeitsereignis und Quantenressourcen-Audit. Öffentliche Holdouts, Integrator-/DWSIM-Vergleiche und Zehn-Bit-Arithmetik-Oracle. Der IBM-Test der Zwei-Bit-Reduktion mit sieben Qubits prüft 64 Basiseingaben, keine kohärente QAE oder vollständige Arithmetik; integrierte Apparatevalidierung steht aus.

### [nbcp-magnetocaloric-quantum-spectral-flow](https://github.com/lyullee/nbcp-magnetocaloric-quantum-spectral-flow)

Untersucht Wechselwirkungen, Probenform und Modellunsicherheit von Na₂BaCo(PO₄)₂ für Kühlentscheidungen unter einem Kelvin. Öffentliche Daten, N=12/N=18-Cluster und Python/Octave-Prüfungen gehen Quanten-Spectral-Flow-Tests voraus. Der IBM-Sechs-Qubit-Test bestätigt das Vorzeichen, nicht die quantitative Größe der Entropiekorrektur; keine Bulklösung oder Quantenvorteilsbehauptung.

## Kontakt und wissenschaftliche Nutzung

**Primäre E-Mail: [lyullee@gmail.com](mailto:lyullee@gmail.com)** · Zweite E-Mail: [lyullee@kgs.or.kr](mailto:lyullee@kgs.or.kr) · [Google Scholar](https://scholar.google.com/citations?user=WZn0QQwAAAAJ)

Kontakt für Forschung, Wasserstoffsicherheitsmodelle und wissenschaftliche Software ist willkommen. Vor einer Nutzung bitte Lizenz, Zitationsangaben/DOI, Datenrichtlinien und Validierungsbereich jedes Repositories prüfen. Dieses Profil zertifiziert sicherheitsbezogene Ergebnisse nicht unabhängig.
