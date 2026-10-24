# Ugwiyeon Lee · 이우귀연

### Chemical Engineering Software Developer

[English](../../README.md) · [한국어](README.ko.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Español](README.es.md) · [हिन्दी](README.hi.md)

[GitHub](https://github.com/lyullee) · [Google Scholar](https://scholar.google.com/citations?user=WZn0QQwAAAAJ) · [Primäre E-Mail](mailto:lyullee@gmail.com) · [Zweite E-Mail](mailto:lyullee@kgs.or.kr)

## Über mich

Ich bin Ugwiyeon Lee (이우귀연, Lyul Lee), tätig bei der Korea Gas Safety Corporation in der Republik Korea. Ich entwickle wissenschaftliche Software an der Schnittstelle von Chemieingenieurwesen, Prozesssicherheit und rechnergestützter Forschung. Meine Projekte behandeln dynamische Wasserstoffanlagen, Freisetzungsquellen, Flüssigwasserstofflachen, Ausbreitung, Brände, dokumentengestützte Assistenz, atomare Wasserstoffenergetik und Quantenmethoden. Explizite Annahmen, Massen- und Energiebilanzen, numerische Konvergenz, unabhängige Experimentvergleiche und Datenherkunft stehen im Mittelpunkt. Softwareverifikation, physikalische Validierung und Messungen auf Quantenhardware werden getrennt bewertet.

Weitere Themen sind Ammoniakversorgung, dynamische PSA/VPSA-Trennung sowie zeitabhängige Wärmeexposition und Sensitivitätsanalyse.

> Lokalisierter Leitfaden zum englischen Haupt-README mit Zielen, Funktionen und Evidenzgrenzen aller 20 Projekte. Technische Einzelheiten stehen im englischen Text und in den Repositories. Prüfdatum: 2026-10-24; Validierungsrechnungen wurden für diese Profiländerung nicht unabhängig wiederholt.

## Projekte

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
