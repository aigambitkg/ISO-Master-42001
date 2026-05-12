---
control_id: A.4.2
control_name: Ressourcen-Dokumentation
annex_section: "A.4 Resources for AI systems"
iso_clause_reference: "Annex A.4.2"
category: resources
priority: important
status: todo
owner: "{AIOfficerName}"
approver: "{GeschäftsführerName}"
deliverable: AI-Asset-Inventory.xlsx
related_documents:
  - controls/A.4.3-Datenressourcen.md
  - controls/A.4.4-Tooling-Ressourcen.md
  - controls/A.4.6-Personal-Kompetenz.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.4.2 — Ressourcen-Dokumentation

**Annex-Bereich:** A.4 Resources for AI systems · **Priorität:** Wichtig · **Verantwortlich:** {AIOfficerName}

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.4.2 verlangt, dass die für KI-Systeme erforderlichen Ressourcen identifiziert und dokumentiert sind. „Ressourcen" umfasst hierbei vier Kategorien: Daten, Werkzeuge/Frameworks, System- und Recheninfrastruktur sowie Personal/Kompetenzen. Das Control liefert den konsolidierten Bestands­überblick, aus dem die Folgenabschätzungen, das Lieferanten-Register und die Kompetenz-Planung speisen.

## 2. Soll-Zustand bei {Unternehmensname}

Es existiert ein gepflegtes, zentrales **AI Asset Inventory**, das pro produktivem KI-System mindestens die folgenden Felder enthält: Eindeutige System-ID, Bezeichnung, Geschäftszweck, Risikoklasse nach EU AI Act, eingesetzte Foundation-Modelle und Bibliotheken, verwendete Trainings- und Inferenz­daten, Hosting-Infrastruktur, System Owner, Inbetriebnahme-Datum, Status (in Entwicklung / produktiv / außer Betrieb).

Das Inventar wird mindestens vierteljährlich auf Aktualität geprüft und bei jeder Inbetriebnahme oder Außerbetrieb­nahme ad-hoc aktualisiert.

## 3. Quick-Win-Implementierung (10–20 MA)

Ein Google Sheet oder Notion-Datenbank reicht – ein dediziertes GRC-Tool ist nicht erforderlich. Das vom Tool exportierbare `AI-Asset-Inventory.xlsx`-Template enthält alle Pflicht­felder bereits in den richtigen Spalten. Pflege­verantwortlich ist der AI Officer; Quelle der Aktualisierung sind die System Owner, die bei Inbetriebnahme einen Standard-Onboarding-Schritt durchlaufen.

Realistische Erst­erfassung: zwei bis vier Stunden für ein Startup mit drei bis fünf KI-Anwendungen.

## 4. Audit-Evidenz

Der Auditor will: das aktuelle Inventar als Datei, eine Stichproben­auswahl von zwei bis drei Systemen mit Plausibilitäts­prüfung der Einträge gegen die tatsächliche Code-/Infrastruktur-Realität, sowie den Nachweis des Aktualisierungs-Rhythmus (z. B. Datums-Spalte „letzte Sichtung").

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| {AIOfficerName} (AI Officer) | ✓ | ✓ |   |   |
| System Owner pro Anwendung |   |   | ✓ |   |
| {ISONName} (ISO) |   |   | ✓ |   |
| Engineering Team |   |   |   | ✓ |

## 6. Verweise

Verknüpfung mit Controls A.4.3 (Daten als Teilmenge), A.4.4 (Tooling als Teilmenge), A.4.6 (Personalressourcen separat geführt), A.5.2 (Asset-Inventory ist Eingangs­dokument der Impact Assessments), A.10.3 (Drittanbieter-Bezüge fließen ins Vendor-Register).

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn das Inventar mit mindestens allen produktiven Systemen befüllt ist, ein Pflege-Prozess (Quelle der Aktualisierung, Frequenz) dokumentiert ist und die letzte Sichtung weniger als 90 Tage zurückliegt.
