---
control_id: A.5.3
control_name: Dokumentation der Impact Assessments
annex_section: "A.5 Assessing impacts of AI systems"
iso_clause_reference: "Annex A.5.3"
category: impact
priority: critical
status: todo
owner: "{AIOfficerName}"
approver: "{GeschäftsführerName}"
deliverable: AIIA-Register.md
related_documents:
  - controls/A.5.2-Impact-Assessment-Prozess.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.5.3 — Dokumentation der Impact Assessments

**Annex-Bereich:** A.5 Assessing impacts of AI systems · **Priorität:** Kritisch · **Verantwortlich:** {AIOfficerName}

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.5.3 verlangt, dass die Ergebnisse der AI Impact Assessments dokumentiert, aufbewahrt und einer regelmäßigen Sichtung zugänglich gemacht werden. Während A.5.2 den Prozess regelt, regelt A.5.3 die persistente Aufzeichnung und damit die Audit-Tauglichkeit über die Zeit.

Das Control unterstützt zugleich die **Rechenschaftspflicht** nach Art. 5 Abs. 2 DSGVO und – bei Hochrisiko-Systemen – die Doku­mentations­pflicht nach Art. 11 EU AI Act.

## 2. Soll-Zustand bei {Unternehmensname}

Pro KI-System existiert ein durchgängig versioniertes Assessment-Dokument im Repository {AssessmentSpeicherort}. Ein zentrales **AIIA-Register** (eine Tabelle, eine Seite) listet alle Assessments mit System-ID, Datum, Version, Reviewer, Status (entwurf / freigegeben / abgelaufen) und Verfalls­datum. Die Aufbewahrungs­frist beträgt mindestens {RetentionZeitraum}; bei Hochrisiko-Systemen mindestens 10 Jahre nach Außerbetriebnahme entsprechend Art. 11 in Verbindung mit Anhang IV EU AI Act.

## 3. Quick-Win-Implementierung (10–20 MA)

Das Register ist eine simple Markdown- oder CSV-Tabelle, die automatisch aus der Datei­namens-Konvention des Assessments-Ordners generierbar ist (Beispiel-Konvention: `aiia_<system-id>_v<n>_<YYYY-MM-DD>.md`). Ein wöchentliches CI-Job-Script kann das Register aus dem Repository-Stand neu schreiben.

Die Pflege­last bleibt damit minimal. Wichtig ist nur eine konsequente Disziplin beim Anlegen neuer Assessments – das fließt in den Standard-Engineering-Workflow ein.

## 4. Audit-Evidenz

Der Auditor prüft das Register auf Vollständigkeit gegen die produktiven Systeme aus dem Asset-Inventar (A.4.2), wählt zwei bis drei Assessments aus, prüft Versions­historie, Freigabe­nachweis und Re-Assessment-Daten. Bei abgelaufenen Assessments wird die Reaktion (Re-Assessment angestoßen) verlangt.

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| {AIOfficerName} (AI Officer) | ✓ | ✓ |   |   |
| System Owner pro Anwendung |   |   | ✓ |   |
| {DPOName} (DSB) |   |   | ✓ |   |
| {GeschäftsführerName} (Geschäftsführung) |   |   |   | ✓ |

## 6. Verweise

Verknüpfung mit Controls A.5.2 (Prozess), A.4.2 (Asset-Inventory als Abgleich­quelle), A.8.4 (Vorfall kann Re-Assessment auslösen). Externe Bezüge: Art. 11 + Anhang IV EU AI Act, Art. 5 Abs. 2 DSGVO.

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn das Register existiert, mindestens ein Eintrag pro produktivem System vorliegt, eine Datei­namens-Konvention etabliert ist und die Aufbewahrungs­frist im Repository-Setup (z. B. nicht zu löschende Branches) verankert ist.
