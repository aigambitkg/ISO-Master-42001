---
control_id: A.10.2
control_name: Verantwortungsverteilung Drittparteien
annex_section: "A.10 Third-party and customer relationships"
iso_clause_reference: "Annex A.10.2"
category: thirdparty
priority: critical
status: todo
owner: "{AIOfficerName}"
approver: "{GeschäftsführerName}"
deliverable: AI-DPA-Addendum.md
related_documents:
  - controls/A.10.3-Lieferanten-Register.md
  - controls/A.10.4-Kunden-AGB-Opt-out.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.10.2 — Verantwortungsverteilung Drittparteien

**Annex-Bereich:** A.10 Third-party and customer relationships · **Priorität:** Kritisch · **Verantwortlich:** {AIOfficerName}

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.10.2 verlangt, dass die Verantwortungs­teilung zwischen Unternehmen und seinen Drittparteien (Foundation-Model-Anbieter, Hosting-Provider, Daten-Annotation-Dienste etc.) entlang des KI-Lebenszyklus klar dokumentiert ist. Ohne diese Klarheit entstehen Verantwortlich­keits­lücken, in denen Risiken übersehen werden – „Wir dachten, der Anbieter macht das" ist ein häufiges Audit-Befund-Muster.

Rechtlich flankiert wird das Control durch Art. 25 EU AI Act (Verantwortlich­keiten entlang der AI-Wertschöpfungs­kette) und Art. 28 DSGVO (Auftrags­verarbeitung).

## 2. Soll-Zustand bei {Unternehmensname}

Pro wesentlicher Drittpartei existiert ein **vertraglich abgesichertes Verantwortungs­modell**, das die Aufgaben für Daten-Governance, Modell-Risikomanagement, Sicherheit, Vorfall­meldung, Audit-Mitwirkung und Daten­subject-Anfragen zuordnet. Für jede neue oder erneuerte KI-Drittbeziehung wird ein **AI-DPA-Addendum** (Data Processing Addendum mit AI-spezifischen Klauseln) zum Vertrag geschlossen.

Das Addendum regelt mindestens: Eingaben werden nicht ohne explizite Einwilligung zum Training der Anbieter­modelle verwendet, der Anbieter informiert über schwer­wiegende Modell-Vorfälle, Audit­rechte oder gleichwertige Zertifizierungs­nachweise, Sub-Processor-Listen mit Notifikations­pflicht bei Änderungen, Klärung der Daten-Residenz.

## 3. Quick-Win-Implementierung (10–20 MA)

Ein standardisiertes AI-DPA-Addendum als Markdown- oder PDF-Template, das in alle neuen Drittvertrags­schlüsse als Anlage einfließt. Für bestehende Verträge wird in einer einmaligen Initiative eine Nachverhandlung der Top-5-Drittparteien durchgeführt. Bei großen Foundation-Model-Anbietern werden in der Regel deren eigene Enterprise-DPAs akzeptiert, jedoch durch eine interne Gap-Analyse gegen unser Standard-Addendum bewertet.

Bei kleinen Anbietern ohne eigene rechtliche Kapazität bietet sich der Vorschlag einer einseitigen „AI Risk Acknowledgement"-Anlage an.

## 4. Audit-Evidenz

Der Auditor verlangt: das Standard-Addendum, eine Liste der relevanten Drittparteien (aus dem Lieferanten-Register A.10.3) mit Status der DPA-/Addendum-Unterzeichnung, sowie bei stichproben­ausgewählten Verträgen die tatsächliche Vertrags­anlage.

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| {AIOfficerName} (AI Officer) | ✓ |   |   |   |
| Procurement / Legal | ✓ | ✓ |   |   |
| {DPOName} (DSB) |   |   | ✓ |   |
| {ISONName} (ISO) |   |   | ✓ |   |
| {GeschäftsführerName} (Geschäftsführung) |   |   |   | ✓ |

## 6. Verweise

Verknüpfung mit Controls A.10.3 (Lieferanten-Register listet Drittparteien), A.10.4 (Kundenseite analog), A.4.3 (Daten von Drittparteien), A.4.4 (Tools von Drittparteien), A.7.5 (Provenienz bei Drittdaten). Externe Bezüge: Art. 25 EU AI Act, Art. 28 DSGVO, EDPB-Leitlinien zu Auftrags­verarbeitung.

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn das Standard-Addendum existiert, mindestens die wesentlichen Drittparteien (Top-5 oder alle Hochrisiko-Beziehungen) eine wirksame Vereinbarung haben und der Vertrags­schluss-Prozess das Addendum als Pflicht-Anlage führt.
