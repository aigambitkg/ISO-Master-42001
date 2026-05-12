---
control_id: A.2.4
control_name: Review der AI Policy
annex_section: "A.2 Policies related to AI"
iso_clause_reference: "Annex A.2.4 / Klausel 9.3"
category: policies
priority: critical
status: todo
owner: "{AIOfficerName}"
approver: "{GeschäftsführerName}"
deliverable: Policy-Review-Log.md
related_documents:
  - policies/AI-Policy-Template.md
  - controls/A.2.2-AI-Policy.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.2.4 — Review der AI Policy

**Annex-Bereich:** A.2 Policies related to AI · **Priorität:** Kritisch · **Verantwortlich:** {AIOfficerName}

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.2.4 verlangt, dass die AI Policy in geplanten Abständen und anlassbezogen überprüft und – soweit erforderlich – angepasst wird. Das Control ist die operative Verzahnung mit Klausel 9.3 (Management-Review) und sichert, dass die Policy nicht zum Schaufenster­dokument verkommt, sondern dem realen Stand von Technik, Recht und Geschäftstätigkeit folgt.

## 2. Soll-Zustand bei {Unternehmensname}

Die AI Policy wird mindestens {ReviewFrequenz} sowie anlassbezogen überprüft. Anlässe sind: wesentliche Rechtsänderungen (z. B. neue delegierte Rechtsakte zum EU AI Act), dokumentierte AI-Vorfälle, Audit­feststellungen, organisatorische Veränderungen, neue KI-Anwendungs­fälle oder eine veränderte Risikoklasse.

Jeder Review wird mit Datum, Verantwortlichen, geprüften Aspekten, Entscheidungen und Folge­maßnahmen im Review-Log dokumentiert. Änderungen werden über den Änderungs­verzeichnis-Anhang der Policy versioniert.

## 3. Quick-Win-Implementierung (10–20 MA)

Drei Maßnahmen reichen: Erstens ein wiederkehrender Kalender­termin für den AI Officer (Frequenz: {ReviewFrequenz}, Dauer: 60 Minuten) zur Policy-Sichtung. Zweitens ein einseitiges Review-Log als Markdown-Datei mit Datum, Sichtungs­ergebnis und entweder „keine Änderung erforderlich" oder konkretem Änderungs­ticket. Drittens ein automatisierter Reminder zur Halbzeit des Review-Zyklus, damit das Review nicht in Vergessenheit gerät.

## 4. Audit-Evidenz

Der Auditor will sehen: das aktuelle Review-Log mit mindestens einem dokumentierten Sichtungs­ereignis (auch wenn ohne Änderung), die Übereinstimmung zwischen Review-Frequenz im Policy-Dokument und tatsächlichem Sichtungs­abstand, sowie bei stattgefundenen Änderungen die Spur von Auslöser → Entscheidung → Version­serhöhung → Mitarbeitenden-Information.

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| {AIOfficerName} (AI Officer) | ✓ |   |   |   |
| {GeschäftsführerName} (Geschäftsführung) |   | ✓ |   |   |
| {DPOName} (DSB) |   |   | ✓ |   |
| {ISONName} (ISO) |   |   | ✓ |   |

## 6. Verweise

Verknüpfung mit Control A.2.2 (AI Policy als Gegenstand), A.5.2/A.5.3 (Impact Assessments können Anlass auslösen), A.8.4 (Vorfälle als Anlass). Externe Bezüge: ISO/IEC 42001 Klausel 9.3 (Management Review), Klausel 10 (Continual Improvement).

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn der wiederkehrende Review-Termin im Kalender steht, das Review-Log existiert mit mindestens einem Eintrag, und im Policy-Dokument das nächste Review-Datum eingetragen ist.
