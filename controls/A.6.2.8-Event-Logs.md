---
control_id: A.6.2.8
control_name: Event-Logs
annex_section: "A.6 AI system life cycle"
iso_clause_reference: "Annex A.6.2.8"
category: lifecycle
priority: critical
status: todo
owner: Engineering Lead
approver: "{AIOfficerName}"
deliverable: Logging-Standard.md
related_documents:
  - controls/A.6.2.6-Betrieb-Monitoring.md
  - controls/A.8.4-Incident-Kommunikation.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.6.2.8 — Event-Logs

**Annex-Bereich:** A.6 AI system life cycle · **Priorität:** Kritisch · **Verantwortlich:** Engineering Lead

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.6.2.8 verlangt Aufzeichnungen über das Verhalten produktiver KI-Systeme, die im Nachgang eine Untersuchung von Vorfällen, eine Reproduktion von Entscheidungen und eine Compliance-Prüfung ermöglichen. Logs sind das forensische Fundament jeder seriösen KI-Operation.

Rechtlich flankiert wird das Control durch Art. 12 EU AI Act, der für Hochrisiko-Systeme automatische Aufzeichnung von Ereignissen während des gesamten Lebenszyklus vorschreibt.

## 2. Soll-Zustand bei {Unternehmensname}

Ein **Logging-Standard** beschreibt verbindlich, welche Ereignisse für jedes KI-System protokolliert werden, in welchem Format und mit welcher Aufbewahrungs­frist. Pflicht­minimum pro Inferenz-Anfrage: Zeitstempel (UTC), eindeutige Request-ID, System- und Modellversion, ausgewählte Eingabe-Metadaten (Länge, Sprache, Hash – nicht der volle personen­bezogene Inhalt, wenn vermeidbar), strukturierte Ausgabe-Metadaten (Konfidenz, gewählte Klasse, Mitigations­trigger), Identifikation des aufrufenden Systems oder anonymisierter Nutzer-ID, ausgelöste Guardrails.

Aufbewahrungs­frist: mindestens 90 Tage für reguläre Logs, 12 Monate für sicherheits- oder vorfalls­relevante Logs, bei Hochrisiko-Systemen für die gesamte Lebens­zeit plus 10 Jahre.

Logs werden zugriffs­beschränkt und manipulations­sicher (append-only oder mit Signatur) gespeichert. Personen­bezogene Inhalte werden, soweit für die forensische Nachvollziehbarkeit nicht zwingend erforderlich, durch Pseudonymisierung oder Hashing ersetzt.

## 3. Quick-Win-Implementierung (10–20 MA)

Strukturiertes JSON-Logging in den Standard-Application-Stack (z. B. via OpenTelemetry oder direkter Logger-Konfiguration) und Versand in ein zentrales Log-Backend (CloudWatch, Datadog Logs, Loki, Grafana). Ein 30-Zeilen-Standard-Logger-Modul pro Sprache deckt die Pflicht­felder ab und wird in allen KI-Services importiert.

Datenschutz-Tipp: separater Log-Stream für „personen­bezogen­heits-arme" Felder, getrennt von „personen­bezogen­heits-sensiblen" Strömen, um Retention und Zugriffsrechte differenziert zu steuern.

## 4. Audit-Evidenz

Der Auditor verlangt: den Logging-Standard, eine Live-Demo einer Beispiel-Logsuche zu einer früheren Anfrage, einen Nachweis der Zugriffs­beschränkung (z. B. IAM-Konfiguration), und bei DSB-Beteiligung den Nachweis, dass die Logs DSGVO-Lösch­anfragen unterstützen können (z. B. über pseudonymisierte IDs mit zentralem Mapping).

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| Engineering Lead | ✓ |   |   |   |
| {ISONName} (ISO) |   | ✓ |   |   |
| {DPOName} (DSB) |   |   | ✓ |   |
| {AIOfficerName} (AI Officer) |   |   | ✓ |   |

## 6. Verweise

Verknüpfung mit Controls A.6.2.6 (Monitoring konsumiert Logs), A.8.4 (Incident-Analyse), A.5.3 (Logs als Evidenz im Re-Assessment), A.7.5 (Provenienz von Inferenz-Anfragen). Externe Bezüge: Art. 12 EU AI Act, DSGVO Art. 5 + 32.

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn der Standard existiert, mindestens ein produktives System die Pflicht­felder loggt, Logs zentral abgelegt und durchsuchbar sind, und die Retention sowie Zugriffs­beschränkung konfiguriert sind.
