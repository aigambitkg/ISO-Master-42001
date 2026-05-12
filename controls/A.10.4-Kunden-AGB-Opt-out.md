---
control_id: A.10.4
control_name: Kunden (AGB und Opt-out)
annex_section: "A.10 Third-party and customer relationships"
iso_clause_reference: "Annex A.10.4"
category: thirdparty
priority: critical
status: todo
owner: Legal
approver: "{AIOfficerName}"
deliverable: Customer-AI-Addendum.md
related_documents:
  - controls/A.8.2-Nutzer-Information.md
  - controls/A.9.4-Bestimmungsgemaesser-Gebrauch.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.10.4 — Kunden (AGB und Opt-out)

**Annex-Bereich:** A.10 Third-party and customer relationships · **Priorität:** Kritisch · **Verantwortlich:** Legal

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.10.4 verlangt, dass die KI-bezogenen Rechte und Pflichten gegenüber Kunden klar geregelt sind. Im Zentrum stehen Transparenz über den KI-Einsatz, Regelungen zur Verwendung von Kundendaten für KI-Training, Opt-out-Möglichkeiten und Haftungs­abgrenzung.

Rechtlich flankiert wird das Control durch Art. 13 + 14 DSGVO (Informations­pflichten), Art. 28 DSGVO (Auftrags­verarbeitung), Art. 22 DSGVO (Automatisierte Einzel­fall­entscheidung), Art. 50 EU AI Act (Transparenz­pflichten) sowie das UWG (Lauterkeit gegenüber Verbraucher:innen, insbesondere bei manipulativer Personalisierung).

## 2. Soll-Zustand bei {Unternehmensname}

Die AGB und – soweit B2B – die Auftrags­verarbeitungs­vereinbarungen enthalten ein **AI-Addendum**, das mindestens regelt: Welche KI-Funktionen Bestandteil des Produkts sind und welcher Output als KI-generiert gekennzeichnet wird (Verweis auf Art. 50 EU AI Act). Ob und wie Kundendaten zum Training oder zur Optimierung von Modellen verwendet werden, mit Default-Opt-out für besonders sensible oder explizit B2B-relevante Daten. Haftungs­regelungen für KI-Ausgaben, insbesondere mit Hinweis auf die Notwendigkeit menschlicher Verifikation in bestimmten Einsatz­bereichen. Beschwerde- und Berichtigungs­kanal sowie das Recht auf menschliche Über­prüfung automatisierter Entscheidungen mit erheblicher Auswirkung (Art. 22 DSGVO).

Bei B2B-Kunden im regulierten Sektor (Finanz, Gesundheit, öffentlich) wird zusätzlich eine sektorale Klausel ergänzt, die auf branchen­spezifische Compliance-Pflichten Bezug nimmt.

## 3. Quick-Win-Implementierung (10–20 MA)

Ein kurzer AGB-Abschnitt (200–300 Wörter) plus eine Opt-out-Funktion im Produkt-Account (z. B. „Meine Eingaben dürfen zur Produkt­verbesserung verwendet werden – Ja/Nein"). Default-Einstellung sollte nach Risiko­bewertung gewählt werden – bei B2B-SaaS in Europa ist Default-Opt-out (also: keine Trainings­verwendung ohne aktive Zustimmung) die empfohlene Konfiguration.

Bei Verbrauchern (B2C) müssen die Klauseln in einfacher Sprache verfasst sein und dürfen nicht überraschend in den AGB verborgen sein (§ 305c BGB).

## 4. Audit-Evidenz

Der Auditor verlangt: die aktuellen AGB mit AI-Addendum, die Opt-out-Funktion im Produkt (Live-Demonstration), und einen Nachweis, dass Kunden­anfragen zu KI-bezogenen Rechten innerhalb der DSGVO-Fristen bearbeitet werden (1 Monat, verlängerbar auf 3).

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| Legal / externe Kanzlei | ✓ |   |   |   |
| Product Lead | ✓ |   |   |   |
| {AIOfficerName} (AI Officer) |   | ✓ |   |   |
| {DPOName} (DSB) |   |   | ✓ |   |
| Customer Success |   |   |   | ✓ |

## 6. Verweise

Verknüpfung mit Controls A.8.2 (öffentliche Disclosure muss zu AGB konsistent sein), A.9.4 (Intended-Use-Statement fließt in Haftungs­klausel), A.10.2 (Standard-DPA bildet Vertrags­rückgrat), A.7.5 (Provenienz von Kundendaten). Externe Bezüge: DSGVO Art. 13/14/22/28, Art. 50 EU AI Act, § 305 ff. BGB.

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn die AGB das AI-Addendum enthalten, die Opt-out-Funktion im Produkt funktionsfähig ist, der Beschwerde­kanal {KontaktEmail} eingerichtet ist und die Antwort-SLAs intern dokumentiert sind.
