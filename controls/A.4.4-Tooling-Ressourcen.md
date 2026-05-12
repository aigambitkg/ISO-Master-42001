---
control_id: A.4.4
control_name: Tooling-Ressourcen
annex_section: "A.4 Resources for AI systems"
iso_clause_reference: "Annex A.4.4"
category: resources
priority: important
status: todo
owner: "{AIOfficerName}"
approver: "{GeschäftsführerName}"
deliverable: Tooling-Register.md
related_documents:
  - controls/A.4.2-Ressourcen-Dokumentation.md
  - controls/A.10.3-Lieferanten-Register.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.4.4 — Tooling-Ressourcen

**Annex-Bereich:** A.4 Resources for AI systems · **Priorität:** Wichtig · **Verantwortlich:** {AIOfficerName}

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.4.4 fordert die systematische Identifikation und Bewertung der Werkzeuge, Frameworks und Bibliotheken, die zur Entwicklung, zum Training, zur Bereitstellung oder zum Betrieb von KI-Systemen verwendet werden. Hintergrund ist, dass Tooling oft unkontrolliert in Engineering-Teams wächst und einzelne Werkzeuge erhebliche Risiken einbringen können – etwa Open-Source-Lizenzen mit Copyleft-Wirkung, Tools mit unklarer Datenfluss-Architektur oder unsichere Plugin-Ökosysteme.

## 2. Soll-Zustand bei {Unternehmensname}

Ein **Tooling-Register** listet pro KI-relevantem Werkzeug: Bezeichnung, Hersteller, Lizenztyp, Einsatzzweck (Training / Inferenz / MLOps / Observability), Datenfluss (was geht raus, was kommt rein), Vertragsstand, Sicherheits­bewertung (intern bewertet oder ISO/IEC 27001-zertifiziert), Datenresidenz, sowie eine Risikoklasse (low/med/high).

Wesentliche Tooling-Kategorien für {Unternehmensname}: Foundation-Model-APIs ({ExterneKIAnbieter}), ML-Frameworks (PyTorch/TensorFlow/Scikit-Learn etc.), Vector-Datenbanken, Annotation-Tools, MLOps/CI-Pipelines, Observability-Stacks.

## 3. Quick-Win-Implementierung (10–20 MA)

Ein separates Sheet im AI Asset Inventory mit den oben genannten Spalten. Verbindlich gemacht über eine kurze Engineering-Convention: „Bevor ein neues KI-Tool im Produktivbetrieb verwendet wird, ist es ins Register einzutragen und vom AI Officer freizugeben". Open-Source-Bibliotheken werden über `requirements.txt` / `package.json` getrackt und können durch ein SBOM-Tool (z. B. Syft) automatisiert erfasst werden – das reduziert manuellen Pflege­aufwand erheblich.

Bei Foundation-Model-APIs ist die Frage entscheidend, ob Eingaben zum Anbieter-Training verwendet werden. Diese Information gehört prominent ins Register und ist vertraglich abzusichern.

## 4. Audit-Evidenz

Der Auditor erwartet: das Tooling-Register, eine Stichproben­prüfung von zwei bis drei Tools mit Vertrags­abgleich, und einen Nachweis, dass die Einführung neuer Tools dem dokumentierten Approval-Prozess folgt (z. B. Pull-Request-Historie mit AI-Officer-Approval-Label).

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| Engineering Lead | ✓ |   |   |   |
| {AIOfficerName} (AI Officer) |   | ✓ |   |   |
| {ISONName} (ISO) |   |   | ✓ |   |
| {DPOName} (DSB) |   |   | ✓ |   |

## 6. Verweise

Verknüpfung mit Controls A.4.2 (übergeordnet), A.10.3 (kommerzielle Tools laufen ins Lieferanten-Register), A.6.2.6 (Monitoring-Tools), A.6.2.8 (Logging-Tools). Externe Bezüge: ISO/IEC 27001 Annex A.5.19 (Lieferanten­beziehungen).

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn das Register alle produktiv genutzten Tools abdeckt, die Tool-Einführung an einen Approval-Prozess gebunden ist und mindestens eine SBOM-/Lizenz-Sichtung durchgeführt wurde.
