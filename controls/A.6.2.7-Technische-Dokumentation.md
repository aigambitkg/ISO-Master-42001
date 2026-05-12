---
control_id: A.6.2.7
control_name: Technische Dokumentation (Model Cards)
annex_section: "A.6 AI system life cycle"
iso_clause_reference: "Annex A.6.2.7"
category: lifecycle
priority: critical
status: todo
owner: System Owner
approver: "{AIOfficerName}"
deliverable: Model-Card-Template.md
related_documents:
  - controls/A.6.2.2-Systemanforderungen.md
  - controls/A.9.4-Bestimmungsgemaesser-Gebrauch.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.6.2.7 — Technische Dokumentation (Model Cards)

**Annex-Bereich:** A.6 AI system life cycle · **Priorität:** Kritisch · **Verantwortlich:** System Owner

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.6.2.7 verlangt, dass jedes KI-System technisch ausreichend dokumentiert ist, um seinen Aufbau, sein Verhalten, seine Grenzen und seine Risiken nachvollziehbar zu machen. Adressaten sind interne Reviewer, externe Auditor:innen und – soweit relevant – Aufsichts­behörden und Betreiber, an die das System weitergegeben wird.

Das Control korrespondiert mit Art. 11 in Verbindung mit Anhang IV EU AI Act, der für Hochrisiko-Systeme eine umfassende technische Doku­mentation vorschreibt.

## 2. Soll-Zustand bei {Unternehmensname}

Jedes produktive KI-System verfügt über eine **Model Card** im Repository, die sich am bekannten Hugging-Face-Schema bzw. Anhang IV des EU AI Act orientiert und mindestens enthält: System-Identifikation und Version, Zweck und intendierter Einsatz­bereich, „out-of-scope"-Use-Cases, Architektur und verwendete Foundation-Modelle, Trainings­daten-Beschreibung mit Provenienz, Performance-Kenn­zahlen (gesamt und pro Schutz­gruppe), bekannte Limitationen und Failure-Modes, Sicherheits- und Datenschutz-Hinweise, Kontakt­person.

Die Model Card wird mit jedem wesentlichen Modell-Update aktualisiert; alte Versionen bleiben über die Git-Historie nachvollziehbar.

## 3. Quick-Win-Implementierung (10–20 MA)

Ein Markdown-Template `model-card.md` im Repository jeder KI-Anwendung. Bei externen Foundation-Models kann auf die Provider-Model-Card verlinkt und nur das Delta dokumentiert werden (eigene Feintuning-Daten, eigene Prompts, eigene Guardrails). Eine einseitige Card genügt für die meisten Startup-Anwendungen.

Die Disziplin steht und fällt mit der Branch-Protection-Regel: PRs, die produktive Modell­änderungen beinhalten, erfordern eine aktualisierte Model Card als Pflicht­datei im Diff.

## 4. Audit-Evidenz

Der Auditor prüft pro stichproben­ausgewähltem System die Model Card auf Vollständigkeit, gleicht Inhalte mit Realität ab (besteht der Trainings­datensatz tatsächlich aus den angegebenen Quellen? sind die Performance-Zahlen nachvollziehbar?) und prüft die Versions­historie auf Konsistenz mit produktiven Releases.

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| System Owner pro Anwendung | ✓ |   |   |   |
| Engineering / Data Science | ✓ |   |   |   |
| {AIOfficerName} (AI Officer) |   | ✓ |   |   |
| Product / Business |   |   |   | ✓ |

## 6. Verweise

Verknüpfung mit Controls A.6.2.2 (Anforderungen fließen in Model Card), A.6.2.4 (Eval-Resultate werden eingetragen), A.8.2 (Model Card als Quelle für Nutzer-Information), A.9.4 (Bestimmungs­gemäßer Gebrauch). Externe Bezüge: Art. 11 + Anhang IV EU AI Act, Mitchell et al. „Model Cards for Model Reporting".

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn pro produktivem System eine vollständige Model Card im Repository liegt, ein PR-Workflow die Aktualisierung erzwingt und die Card im Onboarding-Material referenziert ist.
