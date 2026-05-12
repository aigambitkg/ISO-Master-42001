---
control_id: A.8.4
control_name: Incident-Kommunikation
annex_section: "A.8 Information for interested parties"
iso_clause_reference: "Annex A.8.4"
category: information
priority: critical
status: todo
owner: "{AIOfficerName}"
approver: "{GeschäftsführerName}"
deliverable: Incident-Communication-Plan.md
related_documents:
  - controls/A.3.3-Reporting-Bedenken.md
  - controls/A.6.2.6-Betrieb-Monitoring.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.8.4 — Incident-Kommunikation

**Annex-Bereich:** A.8 Information for interested parties · **Priorität:** Kritisch · **Verantwortlich:** {AIOfficerName}

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.8.4 verlangt, dass im Falle eines KI-bezogenen Vorfalls definierte Stakeholder angemessen, rechtzeitig und konsistent informiert werden. „Vorfall" umfasst dabei sowohl technische Fehl­funktionen mit Nutzer-Auswirkung als auch ethische Vorfälle (etwa diskriminierende Output-Muster).

Rechtlich flankiert wird das Control durch Art. 73 EU AI Act (Meldepflicht schwer­wiegender Vorfälle bei Hochrisiko-Systemen an die Marktüberwachungs­behörde, in der Regel innerhalb von 15 Tagen), Art. 33 + 34 DSGVO (Datenpannen-Meldung an Aufsichts­behörde binnen 72 h und an Betroffene unverzüglich) sowie NIS-2 für betroffene Sektoren.

## 2. Soll-Zustand bei {Unternehmensname}

Ein **Incident Communication Plan** definiert pro Vorfall-Kategorie (technisch / ethisch / datenschutz­bezogen / sicherheits­bezogen): Schweregrad-Klassifikation, interne Eskalations­kette, externe Adressaten (Kunden / Betroffene / Aufsichts­behörden / Öffentlichkeit), Reaktions­zeiten und vorab freigegebene Kommunikations­vorlagen.

Ein **Incident-Template** (eine Markdown-Datei) wird pro Vorfall ausgefüllt und im AI Incident Register protokolliert. Pflicht­felder: Zeitpunkt der Entdeckung, Schweregrad, betroffene Systeme und Personen­kreise, Ursache (soweit ermittelt), unmittelbare Mitigation, geplante kommunikative Maßnahmen, Lessons Learned.

## 3. Quick-Win-Implementierung (10–20 MA)

Vier Templates reichen: eine Kommunikations­matrix (1 Seite), ein Incident-Template (1 Seite), ein vorbereiteter Entwurf für die Aufsichts­behörden-Meldung (1 Seite), ein vorbereiteter Entwurf für die Kunden-Information (1 Seite). Alle zusammen unter `incidents/` im Repository abgelegt.

Jährliche Tabletop-Übung (60 Minuten) mit einem fiktiven Vorfall trainiert den Ablauf, ohne realen Schaden zu erzeugen.

## 4. Audit-Evidenz

Der Auditor verlangt den Plan, die Templates und – falls ein Vorfall stattgefunden hat – die dokumentierte Reaktion. Ohne realen Vorfall ist ein Tabletop-Übungs­bericht ein gleichwertiger Nachweis.

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| {AIOfficerName} (AI Officer) | ✓ |   |   |   |
| {GeschäftsführerName} (Geschäftsführung) |   | ✓ |   |   |
| {DPOName} (DSB) |   |   | ✓ |   |
| Customer Success / Communications |   |   | ✓ |   |
| Legal / externe Beratung |   |   | ✓ |   |

## 6. Verweise

Verknüpfung mit Controls A.3.3 (Eingangs­kanal für Vorfälle), A.6.2.6 (Monitoring als technische Detektion), A.5.3 (Vorfälle triggern Re-Assessment), A.2.4 (Vorfälle triggern Policy-Review). Externe Bezüge: Art. 73 EU AI Act, Art. 33/34 DSGVO, NIS-2.

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn Plan und Templates existieren, eine Eskalations­kette mit konkreten Personen hinterlegt ist und entweder ein realer Vorfall dokumentiert oder eine Tabletop-Übung durchgeführt wurde.
