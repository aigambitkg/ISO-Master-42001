---
control_id: A.6.2.2
control_name: Systemanforderungen und Spezifikation
annex_section: "A.6 AI system life cycle"
iso_clause_reference: "Annex A.6.2.2"
category: lifecycle
priority: critical
status: todo
owner: System Owner
approver: "{AIOfficerName}"
deliverable: Requirements-Spec.md
related_documents:
  - controls/A.6.1.2-Ziele-Entwicklung.md
  - controls/A.6.2.4-Verifikation-Validierung.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.6.2.2 — Systemanforderungen und Spezifikation

**Annex-Bereich:** A.6 AI system life cycle · **Priorität:** Kritisch · **Verantwortlich:** System Owner

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.6.2.2 verlangt, dass Anforderungen und Spezifikationen für jedes KI-System dokumentiert sind, bevor in dessen Entwicklung investiert wird. Die Anforderungen müssen funktionale, nicht-funktionale, ethische und regulatorische Aspekte umfassen.

Das Control korrespondiert direkt mit Art. 9 EU AI Act (Risiko­management­system) und Art. 15 EU AI Act (Genauigkeit, Robustheit und Cybersicherheit) für Hochrisiko-Systeme.

## 2. Soll-Zustand bei {Unternehmensname}

Pro KI-System existiert ein **Requirements-Dokument** (Markdown reicht), das mindestens enthält: Geschäftliches Ziel, funktionale Anforderungen (was das System tut), nicht-funktionale Anforderungen (Latenz, Verfügbarkeit, Skalierbarkeit), Performance-Akzeptanz­kriterien (Genauigkeit, Recall, Precision, Fairness-Metriken pro Schutzgruppe), Sicherheits- und Robustheits-Anforderungen, Compliance-Anforderungen (DSGVO, EU AI Act, branchen­spezifisch), explizit „Out-of-Scope"-Use-Cases.

Die Anforderungen werden vom AI Officer freigegeben und sind Grundlage für die Verifikation in Control A.6.2.4.

## 3. Quick-Win-Implementierung (10–20 MA)

Ein Markdown-Template `requirements-spec.md` im Repository jeder KI-Anwendung mit den oben genannten Pflicht­sektionen. Der Pull Request zur erst­maligen Inbetriebnahme erfordert ein freigegebenes Requirements-Dokument – durchgesetzt durch Branch-Protection-Rules oder einen CI-Check.

Bei Generative-AI-Anwendungen sind die Fairness-Metriken oft schwer quantifizierbar; in diesen Fällen ist eine **qualitative Eval-Strategie** (z. B. Test-Suite mit demografisch ausgeglichenen Prompts und manueller Bewertung) zu dokumentieren.

## 4. Audit-Evidenz

Der Auditor prüft pro stichprobe­n­ausgewähltem System die Existenz und inhaltliche Tiefe des Requirements-Dokuments, dessen Freigabe-Spur und die Konsistenz zum tatsächlichen System­verhalten in Produktion.

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| System Owner pro Anwendung | ✓ |   |   |   |
| {AIOfficerName} (AI Officer) |   | ✓ |   |   |
| Engineering Lead |   |   | ✓ |   |
| Product / Business |   |   | ✓ |   |

## 6. Verweise

Verknüpfung mit Controls A.5.2 (Risiken speisen Anforderungen), A.6.1.2 (Entwicklungs-Prinzipien), A.6.2.4 (Verifikation gegen Anforderungen), A.6.2.7 (Anforderungen wandern in Model Card). Externe Bezüge: Art. 9 + 15 EU AI Act, ISO/IEC 5338.

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn pro produktivem System ein freigegebenes Requirements-Dokument vorliegt, Akzeptanz­kriterien quantitativ oder qualitativ formuliert sind und das Dokument im Repository versioniert ist.
