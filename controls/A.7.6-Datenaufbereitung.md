---
control_id: A.7.6
control_name: Datenaufbereitung
annex_section: "A.7 Data for AI systems"
iso_clause_reference: "Annex A.7.6"
category: data
priority: important
status: todo
owner: Data Owner
approver: "{AIOfficerName}"
deliverable: Data-Preparation-SOP.md
related_documents:
  - controls/A.7.4-Datenqualitaet.md
  - controls/A.7.5-Datenherkunft.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.7.6 — Datenaufbereitung

**Annex-Bereich:** A.7 Data for AI systems · **Priorität:** Wichtig · **Verantwortlich:** Data Owner

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.7.6 verlangt, dass Schritte der Daten­aufbereitung (Reinigung, Transformation, Anreicherung, Labeling, Augmentation, Anonymisierung) dokumentiert und reproduzierbar sind. Aufbereitungs­schritte beeinflussen Modell­verhalten oft stärker als die Modell­architektur selbst – und sind doch häufig unter­dokumentiert.

## 2. Soll-Zustand bei {Unternehmensname}

Jeder produktive Datensatz hat eine reproduzierbare Aufbereitungs-Pipeline. „Reproduzierbar" bedeutet: gleiche Roh-Daten plus gleiche Pipeline-Version führen zu gleichem Trainings­datensatz. Die Pipeline ist versioniert (Git plus DVC oder gleichwertig), Aufbereitungs-Schritte sind in Code-Form dokumentiert (nicht als Excel-Manipulationen), und Labeling-Entscheidungen sind nach einem dokumentierten Schema mit Inter-Rater-Reliability bei manuellen Labels durchgeführt.

Bei personen­bezogenen Daten wird die Pseudonymisierung oder Anonymisierung vor dem Verlassen der Erhebungs­umgebung durchgeführt und dokumentiert; eine Re-Identifikations-Risiko-Bewertung wird durchgeführt.

## 3. Quick-Win-Implementierung (10–20 MA)

Ein definierter Repository-Bereich (z. B. `data-pipelines/`), Notebooks oder Python-Scripts mit dokumentierten Schritten, DVC für Versionierung großer Daten-Artefakte (alternativ: Git-LFS oder S3 mit Bucket-Versioning). Labeling-Schema als kurze Markdown-Datei mit Beispielen für jede Klasse.

Engineering-Convention: keine produktiven Modelle, die auf Daten aus nicht-versionierten Quellen trainiert wurden.

## 4. Audit-Evidenz

Der Auditor verlangt: einen Live-Walk-through einer Pipeline (Daten gehen rein – Daten gehen raus – Schritte sind im Code lesbar), den Pipeline-Code im Repository, eine versionierte Pipeline-Output-Referenz, und bei personen­bezogenen Daten den Nachweis der dokumentierten Pseudonymisierung.

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| Data Owner / Data Engineering | ✓ |   |   |   |
| System Owner pro Anwendung |   | ✓ |   |   |
| {DPOName} (DSB) |   |   | ✓ |   |
| {AIOfficerName} (AI Officer) |   |   | ✓ |   |

## 6. Verweise

Verknüpfung mit Controls A.7.4 (Qualität nach Aufbereitung gemessen), A.7.5 (Provenienz wird durch Aufbereitung verlängert), A.6.2.2 (Anforderungen an Daten­aufbereitung), A.6.2.4 (Reproduzierbarkeit als V&V-Kriterium). Externe Bezüge: DSGVO Art. 5 (Datenminimierung), Art. 25 (Datenschutz durch Technikgestaltung).

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn die Pipeline-Convention dokumentiert ist, mindestens eine produktive Pipeline versioniert vorliegt und Labeling-Schemata für relevante Datensätze existieren.
