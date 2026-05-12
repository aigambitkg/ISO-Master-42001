---
control_id: A.9.4
control_name: Bestimmungsgemäßer Gebrauch
annex_section: "A.9 Use of AI systems"
iso_clause_reference: "Annex A.9.4"
category: use
priority: critical
status: todo
owner: System Owner
approver: "{AIOfficerName}"
deliverable: Intended-Use-Statement.md
related_documents:
  - controls/A.6.2.7-Technische-Dokumentation.md
  - controls/A.8.2-Nutzer-Information.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.9.4 — Bestimmungsgemäßer Gebrauch

**Annex-Bereich:** A.9 Use of AI systems · **Priorität:** Kritisch · **Verantwortlich:** System Owner

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.9.4 verlangt, dass für jedes KI-System der „intended use" und – ebenso wichtig – der „out-of-scope use" eindeutig festgelegt und kommuniziert ist. Misuse durch fehlende Spezifikation des bestimmungs­gemäßen Gebrauchs ist eine zentrale Risiko­kategorie bei KI-Anwendungen.

Rechtlich flankiert wird das Control durch Art. 13 EU AI Act (Anbieter müssen Betreibern den intended use mitteilen) und Art. 26 EU AI Act (Betreiber dürfen das System nur entsprechend des intended use einsetzen).

## 2. Soll-Zustand bei {Unternehmensname}

Pro produktivem KI-System existiert ein **Intended-Use-Statement** als Sektion in der Model Card (A.6.2.7) und auf der Disclosure-Seite (A.8.2). Mindest­inhalt: konkrete Anwendungs­fälle, für die das System validiert ist; Anwendungs­fälle, für die es explizit nicht eingesetzt werden darf (out-of-scope); Bedingungen, unter denen die System­ausgabe als Empfehlung versus Entscheidung zu betrachten ist; menschliche Aufsichts-Anforderungen (Human-in-the-Loop, Human-on-the-Loop, Human-out-of-the-Loop).

Bei Generative-AI-Anwendungen werden zusätzlich typische Halluzinations- und Manipulations­risiken benannt, samt Empfehlung zur menschlichen Verifikation.

## 3. Quick-Win-Implementierung (10–20 MA)

Eine standardisierte Sektion im Model-Card-Template (A.6.2.7) deckt das Statement ab. Engineering-Convention: das Statement wird beim ersten produktiven Release verfasst und bei jeder wesentlichen Anwendungs­erweiterung überprüft.

Wichtig: Out-of-Scope-Use-Cases müssen explizit benannt werden, nicht nur implizit durch Auslassung. „Das System ist nicht für medizinische Diagnose, Rechts­beratung oder vollautomatische Vertrags­entscheidungen freigegeben" ist ein konkretes Beispiel.

## 4. Audit-Evidenz

Der Auditor prüft pro stichproben­ausgewähltem System die Sektion im Model-Card-/Disclosure-Dokument, gleicht den intended use gegen das tatsächlich beobachtete System­verhalten ab und prüft, ob es technische oder organisatorische Maßnahmen zur Verhinderung von Out-of-Scope-Use gibt (z. B. UI-Guardrails, Prompt-Filter, Disclaimer).

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| System Owner pro Anwendung | ✓ |   |   |   |
| Product Lead | ✓ |   |   |   |
| {AIOfficerName} (AI Officer) |   | ✓ |   |   |
| Legal |   |   | ✓ |   |

## 6. Verweise

Verknüpfung mit Controls A.6.2.7 (Model Card als Träger­dokument), A.8.2 (Externe Kommunikation), A.9.2 (interne AUP referenziert intended use), A.10.4 (kundenseitige Vertrags­klauseln). Externe Bezüge: Art. 13 + 26 EU AI Act.

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn pro produktivem System ein Intended-Use-Statement vorliegt, Out-of-Scope-Use-Cases explizit gelistet sind und mindestens eine technische Guardrail zur Verhinderung von Out-of-Scope-Use existiert.
