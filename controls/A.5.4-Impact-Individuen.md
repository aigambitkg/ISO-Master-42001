---
control_id: A.5.4
control_name: Impact auf Individuen
annex_section: "A.5 Assessing impacts of AI systems"
iso_clause_reference: "Annex A.5.4"
category: impact
priority: critical
status: todo
owner: "{AIOfficerName}"
approver: "{GeschäftsführerName}"
deliverable: Individual-Impact-Section.md
related_documents:
  - controls/A.5.2-Impact-Assessment-Prozess.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.5.4 — Impact auf Individuen

**Annex-Bereich:** A.5 Assessing impacts of AI systems · **Priorität:** Kritisch · **Verantwortlich:** {AIOfficerName}

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.5.4 verlangt eine systematische Betrachtung, wie KI-Systeme einzelne natürliche Personen oder Gruppen betreffen können. Im Fokus stehen Auswirkungen auf Grund­rechte, Chancen, Würde und psychische sowie physische Integrität.

Das Control korrespondiert eng mit Art. 27 EU AI Act (Grundrechte-Folgenabschätzung für Betreiber bestimmter Hochrisiko-Systeme) und Art. 35 DSGVO (Datenschutz-Folgenabschätzung).

## 2. Soll-Zustand bei {Unternehmensname}

Jedes AI Impact Assessment enthält einen verpflichtenden Abschnitt **„Auswirkungen auf Individuen"** mit folgenden Mindest­fragen: Welche Personengruppen sind direkt oder indirekt betroffen? Welche besonders schutzbedürftigen Gruppen sind darunter (Minderjährige, Personen mit Behinderung, ethnische Minderheiten, ältere Menschen, Beschäftigte in abhängiger Stellung)? Welche Grund­rechte könnten beeinträchtigt werden (Nichtdiskriminierung, Privatsphäre, Würde, Berufsfreiheit, freie Meinungsäußerung)? Welche Schadens­szenarien sind denkbar (materieller / immaterieller Schaden)? Welche Mitigations­maßnahmen sind umgesetzt? Wie kann eine betroffene Person Widerspruch oder Berichtigung erwirken?

## 3. Quick-Win-Implementierung (10–20 MA)

Eine standardisierte Abschnitts­vorlage im AIIA-Template, mit Vor-Auswahlen für die häufigsten Fälle (z. B. „Generative KI im Kundenkontakt: Risiko Halluzination → Mitigation: prominente Disclaimer + Human-in-the-Loop bei medizinischen / rechtlichen Themen"). Ein „mindestens ein Mitigations­satz pro identifiziertem Risiko"-Mindeststandard verhindert oberflächliche Bearbeitung.

Stakeholder-Mapping kann initial in 30 Minuten erfolgen und wird beim Re-Assessment fortgeschrieben.

## 4. Audit-Evidenz

Der Auditor prüft, ob jeder Assessment-Vorgang den Abschnitt enthält, ob die genannten Mitigations­maßnahmen tatsächlich operativ umgesetzt sind (z. B. existieren die Disclaimer im UI? gibt es den Human-in-the-Loop-Schritt im Workflow?), und ob Beschwerde- und Berichtigungs-Kanäle aus dem Assessment-Text öffentlich auffindbar sind.

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| System Owner pro Anwendung | ✓ |   |   |   |
| {AIOfficerName} (AI Officer) |   | ✓ |   |   |
| {DPOName} (DSB) |   |   | ✓ |   |
| Legal / externe Beratung |   |   | ✓ |   |

## 6. Verweise

Verknüpfung mit Controls A.5.2 (Prozess), A.5.5 (komplementäre Gesellschafts-Sicht), A.8.2 (Nutzer-Information als Mitigation), A.9.2 (AUP setzt Verhaltens­regeln für Nutzende). Externe Bezüge: Art. 27 EU AI Act, Art. 35 DSGVO, EU-Grundrechte­charta.

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn die Abschnitts­vorlage im AIIA-Template integriert ist, mindestens ein produktives System die Sektion vollständig ausgefüllt hat und identifizierte Mitigations­maßnahmen im Produkt-Backlog oder Operations-Setup nachweisbar sind.
