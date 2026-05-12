---
control_id: A.3.3
control_name: Reporting von Bedenken
annex_section: "A.3 Internal organization"
iso_clause_reference: "Annex A.3.3"
category: organization
priority: important
status: todo
owner: "{AIOfficerName}"
approver: "{GeschäftsführerName}"
deliverable: Concern-Reporting-SOP.md
related_documents:
  - policies/AI-Policy-Template.md
  - controls/A.8.4-Incident-Kommunikation.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.3.3 — Reporting von Bedenken

**Annex-Bereich:** A.3 Internal organization · **Priorität:** Wichtig · **Verantwortlich:** {AIOfficerName}

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.3.3 fordert einen wirksamen Mechanismus, über den Mitarbeitende und gegebenenfalls Externe Bedenken zu KI-bezogenen Risiken, Ethik­fragen oder Compliance-Verstößen sanktions­frei melden können. Hintergrund ist die Erkenntnis, dass technisch und ethisch kritische Hinweise oft von operativen Mitarbeitenden kommen, nicht von der Führungsebene.

Das Control korrespondiert mit dem Hinweisgeber­schutzgesetz (HinSchG), das in Deutschland seit Juli 2023 für Unternehmen ab 50 Mitarbeitenden Pflicht­kanäle vorschreibt. Auch unterhalb dieser Schwelle ist ein KI-bezogener Meldekanal verpflichtend für ISO 42001.

## 2. Soll-Zustand bei {Unternehmensname}

Es existiert mindestens ein klar bezeichneter, niedrigschwelliger Meldekanal für KI-bezogene Bedenken. Der Kanal ist {MeldekanalIntern}. Eingehende Meldungen werden vom AI Officer entgegen­genommen, bewertet und – bei Bedarf – einer Untersuchung zugeführt. Sanktionierung von in gutem Glauben erfolgenden Meldungen ist ausgeschlossen und in der AI Policy explizit ausgeschlossen.

## 3. Quick-Win-Implementierung (10–20 MA)

Ein dedizierter Slack-Channel oder eine E-Mail-Verteilerliste plus eine halbseitige SOP (Standard Operating Procedure), die beschreibt, wie eine Meldung bearbeitet wird: Eingang → Bestätigung an den Melder binnen 48 h → vertrauliche Sichtung durch den AI Officer → Eskalation an die Geschäftsführung bei begründetem Verdacht → Rückmeldung an den Melder über Ausgang. Anonyme Meldungen müssen möglich sein – ein simples Formular ohne Pflicht­felder genügt.

Eine spezialisierte Whistleblower-Plattform ist erst ab der HinSchG-Schwelle wirtschaftlich sinnvoll; bei wachsenden Teams sollte der Übergang vorausgeplant werden.

## 4. Audit-Evidenz

Der Auditor prüft die SOP, die Sichtbarkeit des Kanals (Onboarding-Doku, Intranet, Policy), und führt im Stichproben­interview Fragen wie „Wem würden Sie ein KI-bezogenes ethisches Bedenken melden?". Bei stattgefundenen Meldungen werden Anonymität, Reaktions­zeit und Folge­maßnahmen geprüft.

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| {AIOfficerName} (AI Officer) | ✓ |   |   |   |
| {GeschäftsführerName} (Geschäftsführung) |   | ✓ |   |   |
| HR-Verantwortliche:r |   |   | ✓ |   |
| Alle Mitarbeitenden |   |   |   | ✓ |

## 6. Verweise

Verknüpfung mit Control A.2.2 (Policy verankert Sanktions­schutz), A.3.2 (AI Officer als Empfänger), A.8.4 (Übergang in Incident-Prozess). Externe Bezüge: Hinweisgeber­schutzgesetz, ISO/IEC 42001 Klausel 7.4 (Kommunikation).

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn der Kanal eingerichtet und in der Onboarding-Doku referenziert ist, die SOP existiert, und das Reaktionszeit-SLA (48 h Bestätigung) intern kommuniziert ist.
