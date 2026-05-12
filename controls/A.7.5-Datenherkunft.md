---
control_id: A.7.5
control_name: Datenherkunft (Provenienz)
annex_section: "A.7 Data for AI systems"
iso_clause_reference: "Annex A.7.5"
category: data
priority: critical
status: todo
owner: Data Owner
approver: "{AIOfficerName}"
deliverable: Data-Provenance-Standard.md
related_documents:
  - controls/A.4.3-Datenressourcen.md
  - controls/A.7.4-Datenqualitaet.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.7.5 — Datenherkunft (Provenienz)

**Annex-Bereich:** A.7 Data for AI systems · **Priorität:** Kritisch · **Verantwortlich:** Data Owner

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.7.5 verlangt, dass Herkunft und Erhebungs­methodik aller verwendeten Daten dokumentiert und nachvollziehbar sind. Provenienz ist Voraussetzung dafür, Rechtsgrundlagen, Lizenz­konformität, Repräsentativität und ethische Vertretbarkeit der Daten überhaupt prüfen zu können.

Rechtlich flankiert wird das Control durch Art. 10 Abs. 2 EU AI Act, Art. 30 DSGVO (Verzeichnis der Verarbeitungs­tätigkeiten) und die Sorgfaltspflichten bei Auftrags­verarbeitung nach Art. 28 DSGVO.

## 2. Soll-Zustand bei {Unternehmensname}

Pro Datensatz ist dokumentiert: ursprüngliche Quelle (Eigen-Erhebung / Kunde / öffentlicher Datensatz / kommerzieller Erwerb / Web-Crawl / Partner­austausch / Drittanbieter-API), Erhebungs­methode, Erhebungs­zeitraum, Rechts­grundlage der Erhebung und der Verarbeitung, Lizenz­bedingungen für die Verwendung, etwaige Einwilligungen mit Bezug auf den Verwendungs­zweck KI-Training, Kette der nachfolgenden Modifikationen (Cleaning, Augmentation, Labeling).

Bei Verwendung externer Foundation Models wird zusätzlich dokumentiert, was über die Trainings­daten des Modells bekannt ist (typischer­weise: Provider-Disclosure-Statement plus eigene Bewertung der bekannten Limits).

## 3. Quick-Win-Implementierung (10–20 MA)

Spalten im Daten-Asset-Register (siehe A.4.3) für Quelle, Lizenz, Rechts­grundlage, Erhebungs­datum. Zusätzlich pro Datensatz ein optionaler „Provenance-Report" als Markdown-Datei, der die komplette Kette von Roh-Erhebung bis aktueller Trainings-Datei beschreibt. Bei Eigen-Erhebung über Produkt-Telemetrie wird die Einwilligung über die AGB und das Privacy Statement abgesichert; bei besonders sensiblen Daten ist eine explizite Einwilligung nach Art. 7 DSGVO erforderlich.

Tools für Data Lineage (z. B. OpenLineage, DataHub) sind erst bei größeren Daten­plattformen sinnvoll; für Startups genügen disziplinierte Datei- und Verzeichnis­konventionen.

## 4. Audit-Evidenz

Der Auditor wählt stichproben­weise zwei bis drei Datensätze aus und verlangt: die Provenance-Dokumentation, Vertrags- bzw. Lizenz­nachweise, sowie bei personen­bezogenen Daten den Abgleich mit dem DSGVO-Verarbeitungs­verzeichnis. Bei nicht nachvollziehbarer Herkunft wird eine wesentliche Nicht­konformität ausgesprochen.

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| Data Owner / Data Engineering | ✓ |   |   |   |
| {DPOName} (DSB) |   |   | ✓ |   |
| Legal / Procurement |   |   | ✓ |   |
| {AIOfficerName} (AI Officer) |   | ✓ |   |   |

## 6. Verweise

Verknüpfung mit Controls A.4.3 (Daten-Asset-Register), A.7.4 (Qualität setzt auf Provenienz auf), A.7.6 (Aufbereitung erzeugt nachgelagerte Provenienz­einträge), A.10.3 (kommerziell bezogene Daten laufen ins Lieferanten-Register), A.10.4 (Kundendaten haben besondere Anforderungen). Externe Bezüge: Art. 10 EU AI Act, Art. 28 + 30 DSGVO.

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn das Daten-Asset-Register pro Datensatz die Provenance-Spalten gefüllt hat, Lizenz­nachweise zentral abgelegt sind und bei personen­bezogenen Daten der DSB die Rechts­grundlage geprüft hat.
