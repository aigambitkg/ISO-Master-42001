---
control_id: A.6.2.6
control_name: Betrieb und Monitoring
annex_section: "A.6 AI system life cycle"
iso_clause_reference: "Annex A.6.2.6"
category: lifecycle
priority: critical
status: todo
owner: Engineering Lead
approver: "{AIOfficerName}"
deliverable: Monitoring-Spec.md
related_documents:
  - controls/A.6.2.4-Verifikation-Validierung.md
  - controls/A.6.2.8-Event-Logs.md
  - controls/A.8.4-Incident-Kommunikation.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.6.2.6 — Betrieb und Monitoring

**Annex-Bereich:** A.6 AI system life cycle · **Priorität:** Kritisch · **Verantwortlich:** Engineering Lead

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.6.2.6 verlangt fortlaufende Überwachung produktiver KI-Systeme. KI unterscheidet sich von klassischer Software dadurch, dass die Performance über die Zeit driften kann – durch Verteilungs­wechsel in Eingabe­daten, Modell-Degradation oder externe System­änderungen. Ohne Monitoring bleiben solche Drifts unentdeckt, bis Endnutzer:innen Probleme melden.

Rechtlich flankiert wird das Control durch Art. 72 EU AI Act (Post-Market Monitoring System für Hochrisiko-Anbieter) und Art. 26 EU AI Act (Pflichten der Betreiber).

## 2. Soll-Zustand bei {Unternehmensname}

Eine **Monitoring-Spezifikation** definiert pro KI-System mindestens fünf Kennzahlen mit Schwellwerten und Alerting: technische Verfügbarkeit (z. B. p99-Latenz, Fehler­rate), Qualitäts-Indikatoren (z. B. User-Feedback-Rate, Eskalations­quote an menschliche Bearbeitende), Daten-Drift (z. B. Verteilungs­vergleich der Input-Features), Modell-Drift (z. B. Vergleich von Modell­output gegen Baseline auf festem Eval-Set), Sicherheits­indikatoren (z. B. ungewöhnliche Prompt-Muster).

Alarme werden an einen definierten Channel ({MeldekanalIntern} oder einen Oncall-Kanal) geroutet; der oncall-verantwortliche Engineer eskaliert nach SOP an System Owner und AI Officer.

## 3. Quick-Win-Implementierung (10–20 MA)

Drei Dashboards reichen für den Anfang: ein technisches (Latenz, Verfügbarkeit, Fehlerrate – aus dem existierenden APM-Stack), ein qualitatives (User-Feedback, Eskalationen – aus dem Produkt-Datenbank), ein KI-spezifisches (Drift-Indikatoren via einfache Statistiken auf Stichproben). Gängige Stack-Kombination: Datadog/Grafana plus ein kleines Drift-Detection-Script im täglichen Cronjob.

Anti-Pattern: ein generisches „AI-Observability"-Tool kaufen, bevor klar ist, welche Kennzahlen man tatsächlich überwachen will.

## 4. Audit-Evidenz

Der Auditor verlangt die Spezifikation, Screenshots oder Live-Demonstration der Dashboards, eine Liste der definierten Alarme mit Reaktions­SLA, und mindestens einen dokumentierten Drift-Befund (auch ein „False Alarm" zählt) mit Reaktion.

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| Engineering Lead / SRE | ✓ |   |   |   |
| System Owner pro Anwendung |   | ✓ |   |   |
| {AIOfficerName} (AI Officer) |   |   | ✓ |   |
| {DPOName} (DSB) |   |   | ✓ |   |

## 6. Verweise

Verknüpfung mit Controls A.6.2.4 (Eval-Set bildet Monitoring-Baseline), A.6.2.5 (Monitoring liefert Rollback-Trigger), A.6.2.8 (Logs als Datenquelle), A.8.4 (Vorfälle aus Monitoring­alarmen), A.5.3 (Re-Assessment-Trigger bei Drift). Externe Bezüge: Art. 72 EU AI Act, SRE Workbook.

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn die Spezifikation existiert, mindestens fünf Kennzahlen pro produktivem System aktiv überwacht werden, Alarme an einen klar benannten Channel routen und ein Oncall-/Reaktions-SOP dokumentiert ist.
