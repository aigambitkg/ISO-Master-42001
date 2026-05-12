---
control_id: A.4.3
control_name: Datenressourcen
annex_section: "A.4 Resources for AI systems"
iso_clause_reference: "Annex A.4.3"
category: resources
priority: critical
status: todo
owner: "{AIOfficerName}"
approver: "{GeschäftsführerName}"
deliverable: Data-Asset-Register.md
related_documents:
  - controls/A.4.2-Ressourcen-Dokumentation.md
  - controls/A.7.4-Datenqualitaet.md
  - controls/A.7.5-Datenherkunft.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.4.3 — Datenressourcen

**Annex-Bereich:** A.4 Resources for AI systems · **Priorität:** Kritisch · **Verantwortlich:** {AIOfficerName}

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.4.3 verlangt eine explizite Identifikation und Dokumentation der für KI-Systeme verwendeten Datenressourcen. Daten sind das wichtigste Risiko­vehikel von KI – Bias, Datenschutz­verletzungen, Lizenz­verletzungen und Halluzinationen lassen sich zu wesentlichen Teilen auf die zugrunde­liegenden Daten zurückführen.

Rechtlich flankiert wird das Control durch Art. 30 DSGVO (Verzeichnis von Verarbeitungs­tätigkeiten) und Art. 10 EU AI Act (Daten-Governance für Hochrisiko-Systeme).

## 2. Soll-Zustand bei {Unternehmensname}

Ein dediziertes **Data Asset Register** dokumentiert pro Datenbestand mindestens: Bezeichnung, Geschäftszweck, Herkunft (Quelle, Erhebungs­methode, Rechtsgrundlage), Lizenz/Nutzungs­rechte, Sensitivitäts-Klassifikation (öffentlich / intern / vertraulich / besonders sensibel inkl. personen­bezogen), enthaltene Personen­datenkategorien, Aufbewahrungsfrist, Speicherort und -region {HostingRegion}, sowie die KI-Systeme, die diesen Bestand nutzen.

Bei Einsatz öffentlicher Datensätze ist die Lizenz­konformität (z. B. CC-BY, MIT-Daten, OpenAI-API-Nutzungs­bedingungen) vor produktiver Verwendung geprüft und dokumentiert.

## 3. Quick-Win-Implementierung (10–20 MA)

Eigenes Tab im AI Asset Inventory oder separate Tabelle, mit den oben genannten Pflicht­feldern als Spalten. Vor jeder neuen Daten-Akquisition (Kauf, Crawl, Lizenzierung) durchläuft die Anschaffung einen Mini-Approval-Prozess durch den AI Officer und – bei Personen­bezug – durch den DSB ({DPOName}).

Für gängige Quellen (Hugging-Face-Datasets, Common Crawl, Marktforschungs­käufe) werden vorbefüllte Vorlagen bereitgestellt, damit der Erfassungs­aufwand pro Bestand unter zehn Minuten bleibt.

## 4. Audit-Evidenz

Der Auditor prüft das Register stichproben­weise und gleicht für ein bis zwei Daten­bestände die Einträge mit den tatsächlichen Vertrags­dokumenten, Lizenz­dateien oder Kollabor­ations­verträgen ab. Bei Personen­bezug wird die Konsistenz mit dem DSGVO-Verarbeitungs­verzeichnis verlangt.

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| Data Owner pro Bestand | ✓ |   |   |   |
| {AIOfficerName} (AI Officer) |   | ✓ |   |   |
| {DPOName} (DSB) |   |   | ✓ |   |
| Engineering / Data Science |   |   |   | ✓ |

## 6. Verweise

Verknüpfung mit Controls A.4.2 (Asset Inventory als Container), A.7.4 (Qualitäts­bewertung), A.7.5 (Provenienz-Detail), A.7.6 (Aufbereitung), A.5.2 (Daten-Risiken im Impact Assessment). Externe Bezüge: DSGVO Art. 5, 30, EU AI Act Art. 10.

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn das Register alle produktiv genutzten Daten­bestände abdeckt, jede Lizenz dokumentiert und – falls notwendig – die Genehmigung des DSB für personen­bezogene Bestände vorliegt.
