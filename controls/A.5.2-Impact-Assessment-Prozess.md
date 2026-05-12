---
control_id: A.5.2
control_name: AI Impact Assessment-Prozess
annex_section: "A.5 Assessing impacts of AI systems"
iso_clause_reference: "Annex A.5.2"
category: impact
priority: critical
status: todo
owner: "{AIOfficerName}"
approver: "{GeschäftsführerName}"
deliverable: AIIA-Template.md
related_documents:
  - controls/A.5.3-Assessment-Dokumentation.md
  - controls/A.5.4-Impact-Individuen.md
  - controls/A.5.5-Gesellschaftlicher-Impact.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.5.2 — AI Impact Assessment-Prozess

**Annex-Bereich:** A.5 Assessing impacts of AI systems · **Priorität:** Kritisch · **Verantwortlich:** {AIOfficerName}

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.5.2 fordert einen dokumentierten, wiederholbaren Prozess zur Bewertung der Auswirkungen von KI-Systemen auf Individuen, Gruppen und Gesellschaft. Die Impact Assessment ist das zentrale Instrument zur Erkennung und Steuerung KI-spezifischer Risiken jenseits klassischer IT-Sicherheits- und Datenschutz-Aspekte.

Rechtlich flankiert wird das Control durch Art. 27 EU AI Act (Grundrechte-Folgenabschätzung für Hochrisiko-Systeme bei Betreibern) und Art. 35 DSGVO (Datenschutz-Folgenabschätzung bei personen­bezogener Verarbeitung mit hohem Risiko).

## 2. Soll-Zustand bei {Unternehmensname}

Es existiert ein **AI Impact Assessment-Template** (AIIA), das vor produktivem Einsatz eines KI-Systems sowie bei wesentlichen Änderungen verpflichtend durchlaufen wird. Das Template adressiert sieben Dimensionen: Zweck und intendierter Nutzen, Stakeholder und Betroffene, Datenschutz-Risiken, Fairness und Bias-Risiken, Transparenz und Erklärbarkeits-Risiken, Sicherheits- und Robustheits-Risiken, gesellschaftliche Auswirkungen.

Pro Dimension werden identifizierte Risiken, Wahrscheinlichkeit, Schadens­ausmaß, Mitigations­maßnahmen und Rest­risiko erfasst. Das Ergebnis wird vom AI Officer freigegeben; bei Hochrisiko-Systemen zusätzlich von der Geschäftsführung.

Wieder­holungs-Trigger: jede neue Inbetriebnahme, wesentliche Modell- oder Daten­änderung, Erweiterung des Einsatzgebiets, dokumentierte Vorfälle, sowie regulär im Abstand von {AssessmentFrequenz}.

## 3. Quick-Win-Implementierung (10–20 MA)

Ein einziges Markdown-Template mit standardisierten Abschnitten. Für jeden Anwendungs­fall wird die Datei kopiert, ausgefüllt und im Repository {AssessmentSpeicherort} abgelegt. Eine Pull-Request-basierte Freigabe (Reviewer = AI Officer) liefert die nötige Audit-Spur ohne separates Tool.

Komplexitäts­reduktion: Drei pragmatische Risiko­stufen (gering / mittel / hoch) statt einer fünf- oder siebenstufigen Skala. Begründet mit dem Verhältnismäßigkeits­grundsatz für Klein­unternehmen.

## 4. Audit-Evidenz

Der Auditor erwartet: das AIIA-Template als versioniertes Dokument, mindestens ein vollständig ausgefülltes AIIA pro produktivem KI-System, sowie den Nachweis des Re-Assessment-Zyklus über die Versions­historie der Assessment-Dateien.

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| System Owner pro Anwendung | ✓ |   |   |   |
| {AIOfficerName} (AI Officer) |   | ✓ |   |   |
| {DPOName} (DSB) |   |   | ✓ |   |
| {GeschäftsführerName} (GF, bei Hochrisiko) |   | ✓ |   |   |

## 6. Verweise

Verknüpfung mit Controls A.5.3 (Dokumentations­anforderungen), A.5.4 (Individuum-Sektion), A.5.5 (Gesellschafts-Sektion), A.6.2.2 (Anforderungen ergeben sich aus Risiken), A.10.4 (Kundenseite). Externe Bezüge: Art. 27 EU AI Act, Art. 35 DSGVO, ISO/IEC 23894:2023.

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn das Template freigegeben ist, der Trigger-Mechanismus dokumentiert ist (z. B. als Pflicht­schritt in der Release-Checkliste aus A.6.2.4) und mindestens ein vollständiges Assessment für eine produktive Anwendung vorliegt.
