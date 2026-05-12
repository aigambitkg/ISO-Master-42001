---
control_id: A.8.2
control_name: Nutzer-Information
annex_section: "A.8 Information for interested parties"
iso_clause_reference: "Annex A.8.2"
category: information
priority: critical
status: todo
owner: Product Lead
approver: "{AIOfficerName}"
deliverable: AI-Disclosure-Page.md
related_documents:
  - controls/A.6.2.7-Technische-Dokumentation.md
  - controls/A.9.4-Bestimmungsgemaesser-Gebrauch.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.8.2 — Nutzer-Information

**Annex-Bereich:** A.8 Information for interested parties · **Priorität:** Kritisch · **Verantwortlich:** Product Lead

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.8.2 verlangt, dass Nutzer:innen und Betroffene angemessen über den Einsatz und die Eigen­schaften eines KI-Systems informiert werden, damit sie informierte Entscheidungen treffen können.

Rechtlich flankiert wird das Control durch Art. 13 EU AI Act (Transparenz­pflicht der Anbieter gegenüber Betreibern), Art. 26 Abs. 11 EU AI Act (Information natürlicher Personen, die einer KI-Entscheidung unterworfen sind), Art. 50 EU AI Act (Kenn­zeichnungs­pflicht bei Inter­aktion mit KI und bei Generative-AI-Output) sowie Art. 13/14 DSGVO (Informations­pflichten bei personen­bezogenen Verarbeitungen).

## 2. Soll-Zustand bei {Unternehmensname}

Eine öffentlich zugängliche **„Über diese KI"-Seite** (oder gleichwertige In-Produkt-Disclosure) beschreibt in einfacher Sprache: was das KI-System tut, wofür es nicht eingesetzt werden soll, welche Daten verarbeitet werden, welche Grenzen das System hat (typische Failure-Modes), wie eine betroffene Person Widerspruch oder Berichtigung erwirken kann, und wer im Unternehmen die Verantwortung trägt.

Bei Generative-AI-Anwendungen werden KI-generierte Inhalte für Endnutzer:innen erkennbar gemacht (Visual Label, Disclaimer oder maschinen­lesbare Markierung gemäß Art. 50 EU AI Act).

## 3. Quick-Win-Implementierung (10–20 MA)

Eine einseitige Public-Disclosure-Markdown- oder HTML-Seite unter {VeröffentlichungsortExtern}/ai-transparency. Inhalte werden aus der Model Card (A.6.2.7) abgeleitet und für nicht-technische Lesende übersetzt. Pflicht­elemente am Ende der Seite: Kontaktadresse {KontaktEmail} und der Hinweis auf den Beschwerde­kanal.

In Chat-Bots und ähnlichen Produkten erfolgt die Kennzeichnung über einen sichtbaren „AI"-Badge plus ein Hinweis im Erst­kontakt mit dem System.

## 4. Audit-Evidenz

Der Auditor besucht die Disclosure-Seite, prüft die Verständlichkeit (Lesbarkeit auf B1-Niveau), den Kontakt­kanal, die Konsistenz mit Model Card und AI Policy, sowie bei Generative AI die tatsächliche Kennzeichnung im Live-Produkt.

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| Product Lead / Marketing | ✓ |   |   |   |
| System Owner pro Anwendung | ✓ |   |   |   |
| {AIOfficerName} (AI Officer) |   | ✓ |   |   |
| Legal |   |   | ✓ |   |

## 6. Verweise

Verknüpfung mit Controls A.6.2.7 (Model Card als Quelle), A.9.4 (Bestimmungs­gemäßer Gebrauch), A.5.4 (Individuum-Impact als Grundlage), A.10.4 (kunden­seitige Information). Externe Bezüge: Art. 13, 26, 50 EU AI Act, Art. 13/14 DSGVO.

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn pro produktivem KI-System eine Disclosure existiert, im Produkt prominent verlinkt ist, bei Generative AI die Kennzeichnung im Live-System sichtbar ist und der Beschwerde­kanal funktioniert.
