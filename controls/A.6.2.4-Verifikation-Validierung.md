---
control_id: A.6.2.4
control_name: Verifikation und Validierung
annex_section: "A.6 AI system life cycle"
iso_clause_reference: "Annex A.6.2.4"
category: lifecycle
priority: critical
status: todo
owner: Engineering Lead
approver: "{AIOfficerName}"
deliverable: Release-Checklist.md
related_documents:
  - controls/A.6.2.2-Systemanforderungen.md
  - controls/A.6.2.5-Deployment.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.6.2.4 — Verifikation und Validierung

**Annex-Bereich:** A.6 AI system life cycle · **Priorität:** Kritisch · **Verantwortlich:** Engineering Lead

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.6.2.4 verlangt strukturierte Verifikation (Erfüllt das System die Anforderungen?) und Validierung (Erfüllt das System den intendierten Zweck im realen Einsatz?) vor produktivem Einsatz und nach wesentlichen Änderungen.

Für KI-Systeme bedeutet das mehr als klassisches Software-Testing: es umfasst Evaluation gegen ein Test-Datensample, Bias-Tests, Adversarial-Tests, Red-Teaming bei Generative AI und gegebenenfalls Vergleichs­tests gegen Baseline-Modelle.

## 2. Soll-Zustand bei {Unternehmensname}

Eine **Release-Checkliste** für KI-Systeme ist verbindlich vor jedem produktiven Roll-out abzuarbeiten. Sie enthält mindestens: durchgeführter Eval-Lauf gegen das aktuelle Test-Set mit dokumentierten Kenn­zahlen, Bias-Test pro definierter Schutz­gruppe, Adversarial- oder Prompt-Injection-Test (bei LLM-Anwendungen), Sicherheits­scan der Code-Base, Sign-Off von AI Officer und System Owner.

Die Eval-Sets werden versioniert und über die Zeit erweitert (insbesondere durch Vorfälle und Stichproben aus Produktion). Bei wesentlichen Modell-Updates wird die Checkliste erneut durchlaufen.

## 3. Quick-Win-Implementierung (10–20 MA)

Eine Markdown-Datei `release-checklist.md` im Repository, die als Pull-Request-Template eingebunden ist und vor dem Merge auf den `main`-Branch komplett abgehakt werden muss. Für die Eval-Pipeline reichen anfangs einfache Scripts: ein kuratierter Test-Datensatz, eine Metriken-Berechnung pro Schutzgruppe, eine JSON-Ausgabe der Ergebnisse zur Archivierung.

Red-Teaming kann initial intern erfolgen (Mitarbeitende werden eingeladen, das System gezielt zu „kaputtprompten") – externes Red-Teaming ist erst bei hohem Risiko erforderlich.

## 4. Audit-Evidenz

Der Auditor prüft: die Existenz und inhaltliche Tiefe der Checkliste, die Verknüpfung mit dem PR-Prozess (Stichproben­blick in Repository-Historie), abgelegte Eval-Reports zu produktiven Releases, und das Verhalten bei einem dokumentierten Bias-Befund (Wurde das Release angepasst oder gestoppt? Wurde ein Ticket angelegt?).

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| Engineering Lead | ✓ |   |   |   |
| System Owner pro Anwendung | ✓ |   |   |   |
| {AIOfficerName} (AI Officer) |   | ✓ |   |   |
| {ISONName} (ISO) |   |   | ✓ |   |

## 6. Verweise

Verknüpfung mit Controls A.6.2.2 (Anforderungen als Prüf­ankerpunkt), A.6.2.5 (Deployment baut auf bestandener V&V auf), A.6.2.6 (Monitoring detektiert post-Release-Abweichungen), A.7.4 (Datenqualität als Eingangs­voraussetzung). Externe Bezüge: Art. 9 + 15 EU AI Act, NIST AI Risk Management Framework.

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn die Checkliste im Repository existiert, im PR-Template eingebunden ist, mindestens ein Release mit dokumentiertem Eval-Report durchlaufen wurde und der Eval-Datensatz versioniert verwaltet wird.
