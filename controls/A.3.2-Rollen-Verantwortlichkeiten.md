---
control_id: A.3.2
control_name: Rollen und Verantwortlichkeiten
annex_section: "A.3 Internal organization"
iso_clause_reference: "Annex A.3.2 / Klausel 5.3"
category: organization
priority: critical
status: todo
owner: "{AIOfficerName}"
approver: "{GeschäftsführerName}"
deliverable: RACI-Matrix.md
related_documents:
  - policies/AI-Policy-Template.md
  - controls/A.3.3-Reporting-Bedenken.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.3.2 — Rollen und Verantwortlichkeiten

**Annex-Bereich:** A.3 Internal organization · **Priorität:** Kritisch · **Verantwortlich:** {AIOfficerName}

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.3.2 in Verbindung mit Klausel 5.3 verlangt, dass die Verantwortlich­keiten und Befugnisse für relevante Rollen im AI Management System eindeutig zugewiesen, kommuniziert und verstanden sind. Ohne diese Klarheit fehlt das organisatorische Fundament, an dem sich alle weiteren Controls befestigen.

Rechtlich flankiert wird die Anforderung durch Art. 26 EU AI Act (Pflichten der Betreiber) und – soweit Hochrisiko-Systeme im Spiel sind – durch Art. 17 EU AI Act (Qualitäts­managementsystem mit zugewiesener Verantwortlichkeit).

## 2. Soll-Zustand bei {Unternehmensname}

Eine schriftlich dokumentierte RACI-Matrix benennt für jede KI-relevante Aktivität (Policy-Pflege, Risiko­bewertung, Modell-Entwicklung, Deployment, Monitoring, Incident Response, Lieferanten-Auswahl, Audit-Begleitung) die verantwortliche, rechenschafts­pflichtige, zu konsultierende und zu informierende Rolle. Mindestens die Rollen AI Officer, System Owner, Datenschutzbeauftragte:r und Information Security Officer sind besetzt.

Bei einem Team von 10–20 MA werden Rollen in Personalunion vergeben, etwa CTO als AI Officer und ISO, sofern keine Interessen­konflikte bestehen.

## 3. Quick-Win-Implementierung (10–20 MA)

Eine einzige Markdown-Tabelle reicht. Spalten: Aktivität / R / A / C / I. Zeilen: die zehn bis fünfzehn KI-relevanten Aktivitäten. Personen werden mit Namen und Funktion eingetragen. Die Tabelle wird von der Geschäftsführung freigegeben, im Repository abgelegt und im Onboarding-Material verlinkt. Bei jeder Personaländerung wird die Matrix angepasst – als Pflicht­schritt im Offboarding-/Onboarding-Prozess der HR.

Vermeiden Sie über­dimensionierte Gremien­strukturen: ein „AI Steering Committee" mit fünf Teilnehmern ist für ein 15-Personen-Startup Aktion­ismus und im Audit­bericht oft ein Negativ­hinweis auf fehlende Verhältnis­mäßigkeit.

## 4. Audit-Evidenz

Der Auditor will: (a) die RACI-Matrix als versioniertes Dokument, (b) Konsistenz mit dem Organigramm, (c) Bestätigung der namentlich genannten Personen, dass sie ihre Rolle kennen (Stichproben­interview), (d) den Nachweis, dass die Matrix bei der letzten Personaländerung aktualisiert wurde.

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| {AIOfficerName} (AI Officer) | ✓ |   |   |   |
| {GeschäftsführerName} (Geschäftsführung) |   | ✓ |   |   |
| HR-Verantwortliche:r |   |   | ✓ |   |
| Alle Mitarbeitenden |   |   |   | ✓ |

## 6. Verweise

Verknüpfung mit Control A.2.2 (Policy verankert Rollen), A.3.3 (Reporting-Kanal an den AI Officer), A.4.6 (Kompetenzen der genannten Rollen). Externe Bezüge: ISO/IEC 42001 Klausel 5.3, Art. 26 EU AI Act.

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn die Matrix versioniert vorliegt, mindestens ein AI Officer benannt und vom Inhaber bestätigt ist, die Geschäftsführung freigegeben hat und ein Aktualisierungs-Trigger im HR-Prozess verankert ist.
