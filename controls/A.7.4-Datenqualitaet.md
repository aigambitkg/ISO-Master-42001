---
control_id: A.7.4
control_name: Datenqualität
annex_section: "A.7 Data for AI systems"
iso_clause_reference: "Annex A.7.4"
category: data
priority: critical
status: todo
owner: Data Owner
approver: "{AIOfficerName}"
deliverable: Data-Quality-SOP.md
related_documents:
  - controls/A.4.3-Datenressourcen.md
  - controls/A.7.5-Datenherkunft.md
  - controls/A.7.6-Datenaufbereitung.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.7.4 — Datenqualität

**Annex-Bereich:** A.7 Data for AI systems · **Priorität:** Kritisch · **Verantwortlich:** Data Owner

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.7.4 fordert die systematische Bewertung und Sicherstellung der Qualität jener Daten, die für Training, Validierung, Test und produktiven Betrieb von KI-Systemen verwendet werden. Mangelhafte Daten­qualität ist die häufigste Ursache von Modell-Bias, Halluzinationen und fehlerhaften Entscheidungen.

Rechtlich flankiert wird das Control durch Art. 10 EU AI Act, der für Hochrisiko-Systeme „relevante, repräsentative, fehler­frei und vollständige" Trainings­daten vorschreibt.

## 2. Soll-Zustand bei {Unternehmensname}

Eine **Data-Quality-SOP** legt verbindlich fest, welche Qualitäts­dimensionen pro Datensatz geprüft werden: Vollständigkeit (fehlende Werte), Aktualität (Erhebungs- und Update-Zeitpunkt), Konsistenz (Format und Wertebereich), Eindeutigkeit (Duplikate), Korrektheit (Plausibilitäts­prüfung gegen Referenz­quellen), Repräsentativität (Verteilung gegen den Ziel­einsatz­bereich, insbesondere demografische Schutz­gruppen).

Vor produktivem Einsatz eines Datensatzes wird ein Data Quality Report erstellt, der die Mess­ergebnisse pro Dimension dokumentiert und identifizierte Mängel sowie Mitigations­maßnahmen benennt. Bei wesentlichen Datensatz-Änderungen wird der Report aktualisiert.

## 3. Quick-Win-Implementierung (10–20 MA)

Eine einseitige SOP mit Checkliste plus ein Standard-Jupyter-Notebook oder Python-Script (z. B. mit `pandas-profiling`, `great_expectations` oder schlankem Custom-Code), das für jeden neuen Datensatz die Pflicht-Kennzahlen automatisch berechnet und als Markdown-Report ablegt. Bei strukturierten Datensätzen ist das in wenigen Stunden umsetzbar.

Bei unstrukturierten Daten (Text, Bilder) sind die Kennzahlen anders gestaltet (z. B. Stichprobenpläne für manuelle Sichtung, Verteilung von Sprachen, Bild­auflösungen). Die SOP sollte beide Welten differenziert behandeln.

## 4. Audit-Evidenz

Der Auditor erwartet: die SOP, ein bis zwei abgelegte Data Quality Reports, einen Nachweis eines tatsächlich identifizierten und mitigierten Qualitäts­problems (auch ein „Mängel waren akzeptabel, daher nur dokumentiert"-Befund ist eine valide Evidenz).

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| Data Owner / Data Engineering | ✓ |   |   |   |
| System Owner pro Anwendung |   | ✓ |   |   |
| {AIOfficerName} (AI Officer) |   |   | ✓ |   |
| {DPOName} (DSB) |   |   | ✓ |   |

## 6. Verweise

Verknüpfung mit Controls A.4.3 (Daten-Asset-Register als Eingangs­quelle), A.7.5 (Provenienz beeinflusst Qualität), A.7.6 (Aufbereitung modifiziert Qualität), A.6.2.4 (V&V testet Auswirkung). Externe Bezüge: Art. 10 EU AI Act, ISO/IEC 5259 (Data Quality for Analytics and ML).

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn die SOP existiert, mindestens ein produktiv genutzter Datensatz einen Data Quality Report hat und der Report-Prozess vor jeder neuen Datensatz-Inbetriebnahme als Pflicht­schritt verankert ist.
