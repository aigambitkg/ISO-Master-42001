---
control_id: A.6.1.2
control_name: Ziele für verantwortungsvolle Entwicklung
annex_section: "A.6 AI system life cycle"
iso_clause_reference: "Annex A.6.1.2"
category: lifecycle
priority: critical
status: todo
owner: "{AIOfficerName}"
approver: "{GeschäftsführerName}"
deliverable: Development-Objectives.md
related_documents:
  - policies/AI-Policy-Template.md
  - controls/A.6.2.2-Systemanforderungen.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.6.1.2 — Ziele für verantwortungsvolle Entwicklung

**Annex-Bereich:** A.6 AI system life cycle · **Priorität:** Kritisch · **Verantwortlich:** {AIOfficerName}

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.6.1.2 verlangt, dass Ziele für die verantwortungs­volle Entwicklung von KI-Systemen festgelegt und dokumentiert sind. Diese Ziele über­tragen die Werte aus der AI Policy (Fairness, Transparenz, Sicherheit, menschliche Aufsicht etc.) in konkrete, prüfbare Engineering-Vorgaben.

## 2. Soll-Zustand bei {Unternehmensname}

Ein einseitiges Dokument **„Entwicklungs-Prinzipien"** überführt die ethischen Grund­prinzipien der AI Policy in fünf bis sieben operative Leitsätze für Engineering- und Data-Science-Teams, beispielsweise: „Jedes Modell erhält eine Model Card vor produktivem Einsatz", „Jeder produktive Endpoint verfügt über strukturiertes Logging", „Trainingsdaten werden vor Verwendung auf Bias-Indikatoren geprüft", „Keine vollautomatisierten Entscheidungen mit erheblicher Auswirkung auf Personen ohne Human-in-the-Loop".

Die Prinzipien sind in CI-Pipelines, Code-Review-Checklisten und Definition-of-Done eingewoben.

## 3. Quick-Win-Implementierung (10–20 MA)

Workshop von zwei Stunden mit Engineering Lead, AI Officer und ggf. CTO. Ziel: fünf bis sieben Prinzipien formulieren, die alle Beteiligten sofort wieder­erkennen würden. Anschließend Verlinkung im Engineering-Handbuch und im Onboarding der Entwicklungs­teams.

Wichtig: Die Prinzipien sollten überprüfbar formuliert sein. „Wir entwickeln verantwortungsvoll" ist keine prüfbare Vorgabe – „Jedes Modell hat eine versionierte Model Card im Repo" sehr wohl.

## 4. Audit-Evidenz

Der Auditor prüft das Dokument auf inhaltliche Konsistenz mit der Policy, fragt im Stichproben­interview, ob Entwickler:innen die Prinzipien kennen, und prüft anhand eines Code-Repositories, ob die Prinzipien sichtbare Spuren hinter­lassen (z. B. PR-Templates, README-Konventionen).

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| Engineering Lead | ✓ |   |   |   |
| {AIOfficerName} (AI Officer) |   | ✓ |   |   |
| Data Science / ML Team |   |   | ✓ |   |
| {DPOName} (DSB) |   |   | ✓ |   |

## 6. Verweise

Verknüpfung mit Controls A.2.2 (Policy als Quelle), A.6.2.2 (Prinzipien fließen in Systemanforderungen), A.6.2.4 (Verifikation prüft Einhaltung der Prinzipien), A.4.6 (Schulung). Externe Bezüge: ISO/IEC 5338:2023 (AI System Lifecycle).

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn das Dokument existiert, fünf bis sieben prüfbar formulierte Prinzipien enthält, im Engineering-Handbuch verlinkt ist und mindestens ein PR-Template oder eine Review-Checkliste den Bezug aufnimmt.
