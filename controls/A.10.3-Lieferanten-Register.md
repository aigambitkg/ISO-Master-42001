---
control_id: A.10.3
control_name: Lieferanten-Register
annex_section: "A.10 Third-party and customer relationships"
iso_clause_reference: "Annex A.10.3"
category: thirdparty
priority: important
status: todo
owner: "{AIOfficerName}"
approver: "{GeschäftsführerName}"
deliverable: Vendor-Register.md
related_documents:
  - controls/A.4.4-Tooling-Ressourcen.md
  - controls/A.10.2-Verantwortung-Drittparteien.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.10.3 — Lieferanten-Register

**Annex-Bereich:** A.10 Third-party and customer relationships · **Priorität:** Wichtig · **Verantwortlich:** {AIOfficerName}

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.10.3 verlangt eine systematische Bewertung und laufende Überwachung von Lieferanten, deren Leistungen für KI-Systeme relevant sind. Hintergrund ist die wachsende Erkenntnis, dass KI-Risiken über die Wertschöpfungs­kette weitergetragen werden – wer Modelle oder Daten Dritter nutzt, importiert deren Risiken.

## 2. Soll-Zustand bei {Unternehmensname}

Ein **Vendor-Register** (Excel/Markdown) listet alle KI-relevanten Lieferanten mit: Name, Leistungs­art (Modell / Daten / Tool / Hosting / Annotation), Kritikalität (low/med/high) basierend auf Geschäfts­abhängigkeit und Daten­sensitivität, Vertrags­status, DSB-Bewertung bei Personen­datenfluss, Zertifizierungen (ISO 27001, SOC 2, ISO 42001), letztes Bewertungs­datum, Risiko-Owner intern.

Hoch-kritische Lieferanten werden mindestens jährlich neu bewertet, mittlere alle 24 Monate, niedrige bei vertrags­relevanten Änderungen.

## 3. Quick-Win-Implementierung (10–20 MA)

Ein Tab im AI Asset Inventory mit den oben genannten Spalten. Bewertung erfolgt über einen einseitigen Fragebogen, der für neue Lieferanten vor Vertrags­schluss ausgefüllt wird (Datenfluss, Hosting-Region, vorhandene Zertifizierungen, Sub-Processor, Incident-Historie öffentlich bekannt). Bei bekannten Hyperscalern und Tier-1-Anbietern genügt der Verweis auf öffentlich verfügbare Audit-Berichte.

Anti-Pattern: ein komplexes Third-Party-Risk-Tool für ein 15-Personen-Startup einführen. Spreadsheet plus Disziplin reichen.

## 4. Audit-Evidenz

Der Auditor verlangt: das Register, eine Stichproben­auswahl von zwei bis drei Lieferanten mit den ausgefüllten Bewertungs­bögen, einen Nachweis der wiederkehrenden Bewertung (Datum, Bewertender, Ergebnis).

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| Procurement / AI Officer | ✓ | ✓ |   |   |
| {DPOName} (DSB) |   |   | ✓ |   |
| {ISONName} (ISO) |   |   | ✓ |   |
| Engineering / Operations |   |   |   | ✓ |

## 6. Verweise

Verknüpfung mit Controls A.4.4 (kommerzielle Tools), A.4.3 (Daten von Lieferanten), A.10.2 (Vertrags­absicherung), A.5.2 (Lieferanten-Risiken im Impact Assessment). Externe Bezüge: ISO/IEC 27001 Annex A.5.19–A.5.23 (Lieferanten­beziehungen), DSGVO Art. 28.

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn das Register existiert, mindestens alle hoch-kritischen Lieferanten erfasst sind, ein Bewertungs­fragebogen-Template existiert und ein Re-Bewertungs­rhythmus dokumentiert ist.
