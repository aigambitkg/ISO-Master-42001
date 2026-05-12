---
control_id: A.4.6
control_name: Personalressourcen und Kompetenz
annex_section: "A.4 Resources for AI systems"
iso_clause_reference: "Annex A.4.6 / Klausel 7.2"
category: resources
priority: important
status: todo
owner: "{AIOfficerName}"
approver: "{GeschäftsführerName}"
deliverable: Training-Plan.md
related_documents:
  - controls/A.3.2-Rollen-Verantwortlichkeiten.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.4.6 — Personalressourcen und Kompetenz

**Annex-Bereich:** A.4 Resources for AI systems · **Priorität:** Wichtig · **Verantwortlich:** {AIOfficerName}

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.4.6 in Verbindung mit Klausel 7.2 verlangt, dass alle Personen mit Einfluss auf die Wirksamkeit des AI Management Systems über die erforderliche Kompetenz verfügen – auf Basis angemessener Ausbildung, Schulung oder Erfahrung. Das Control verzahnt sich direkt mit der **Pflicht zur KI-Kompetenz** nach Art. 4 EU AI Act, die seit Februar 2025 für alle Anbieter und Betreiber von KI-Systemen in der EU gilt.

## 2. Soll-Zustand bei {Unternehmensname}

Ein **Schulungsplan** definiert pro Rolle (siehe RACI aus Control A.3.2) die erforderlichen Kompetenzen, Pflicht-Trainings und deren Frequenz. Mindestens umfasst er: ein verpflichtendes AI-Onboarding-Modul (ca. 60 Minuten) für alle Mitarbeitenden, jährliche Auffrischung, sowie vertiefende Schulungen für AI Officer (z. B. ISO 42001 Lead Implementer / Auditor) und Entwicklungs­teams (z. B. Responsible AI Engineering, Secure ML).

Teilnahme­nachweise werden im Personal­akt oder im HR-System dokumentiert. Bei externen Beauftragten wird die Kompetenz vertraglich oder über vorgelegte Nachweise sichergestellt.

## 3. Quick-Win-Implementierung (10–20 MA)

Ein Slide-Deck mit 15 Slides plus ein 20-Minuten-Quiz reichen für das Pflicht-Onboarding aus. Inhalte: was ist die AI Policy, was sind verbotene Praktiken nach EU AI Act, wie melde ich Bedenken, wer ist Ansprech­partner. Aufnahme als Video­modul erspart wiederkehrenden Live-Aufwand. Tracking über das bestehende HRIS oder ein simples Google Sheet.

Vermeiden Sie generische externe „AI-Awareness"-Kurse für die gesamte Belegschaft – die Inhalte sind oft zu allgemein, der Audit-Nutzen gering. Lieber kürzer, dafür unternehmens­spezifisch.

## 4. Audit-Evidenz

Der Auditor verlangt: den Schulungsplan, Teilnahme­nachweise auf Stichproben­basis (mindestens je eine Person pro Rolle), die Schulungs­inhalte (Folien, Quiz, Video) zur inhaltlichen Plausibilisierung gegen die unternehmens­eigene Policy, sowie bei Hochrisiko-Anwendungen einen verstärkten Kompetenz­nachweis der direkt verantwortlichen Engineering- und Operations-Rollen.

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| {AIOfficerName} (AI Officer) | ✓ |   |   |   |
| HR-Verantwortliche:r |   |   | ✓ |   |
| {GeschäftsführerName} (Geschäftsführung) |   | ✓ |   |   |
| Alle Mitarbeitenden |   |   |   | ✓ |

## 6. Verweise

Verknüpfung mit Controls A.3.2 (Rollen, deren Kompetenzen geschult werden), A.2.2 (Inhalt der Schulung leitet sich aus Policy ab), A.3.3 (Reporting-Kanal wird im Onboarding kommuniziert). Externe Bezüge: Art. 4 EU AI Act, ISO/IEC 42001 Klausel 7.2.

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn der Schulungsplan existiert, mindestens 90 % der aktuellen Belegschaft das AI-Onboarding absolviert hat, ein Trigger für Neu­zugänge im Onboarding-Prozess verankert ist und die Auffrischungs­frequenz im Kalender eingeplant ist.
