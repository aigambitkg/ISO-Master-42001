---
control_id: A.9.2
control_name: Verantwortungsvoller Einsatz (AUP)
annex_section: "A.9 Use of AI systems"
iso_clause_reference: "Annex A.9.2"
category: use
priority: critical
status: todo
owner: "{AIOfficerName}"
approver: "{GeschäftsführerName}"
deliverable: AUP.md
related_documents:
  - policies/AI-Policy-Template.md
  - controls/A.9.4-Bestimmungsgemaesser-Gebrauch.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.9.2 — Verantwortungsvoller Einsatz (Acceptable Use Policy)

**Annex-Bereich:** A.9 Use of AI systems · **Priorität:** Kritisch · **Verantwortlich:** {AIOfficerName}

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.9.2 verlangt verbindliche Vorgaben für den verantwortungs­vollen Einsatz von KI-Systemen durch interne Nutzer:innen (Mitarbeitende, Auftrag­nehmer) und – soweit anwendbar – durch externe Nutzer:innen. Die **Acceptable Use Policy (AUP)** konkretisiert die abstrakten Grund­sätze der AI Policy auf die operative Nutzungs­ebene.

## 2. Soll-Zustand bei {Unternehmensname}

Eine einseitige AUP regelt verbindlich: welche internen KI-Tools für welche Zwecke genutzt werden dürfen, welche Daten in externe Foundation-Model-APIs eingegeben werden dürfen und welche nicht (insbesondere: keine personen­bezogenen Daten, keine vertraulichen Kunden-Daten, keine Quell­codes mit Trade-Secret-Charakter ohne Vertragsschutz), wie KI-generierte Inhalte gekennzeichnet und vor Weiter­verwendung geprüft werden müssen, welche Use-Cases ausdrücklich verboten sind (übernommen aus AI Policy Abschnitt 7).

Die AUP wird Bestandteil des Arbeitsvertrags oder der Mitarbeitenden-Handbuch-Verbindlichkeiten.

## 3. Quick-Win-Implementierung (10–20 MA)

Ein einseitiges Markdown-Dokument mit klaren „Erlaubt"- und „Verboten"-Listen plus Beispielen. Verteilung über das Onboarding und jährliche Lesebestätigung. Bei sensiblen Berufsgruppen (Engineering, Legal, HR) zusätzlich konkrete Use-Case-Leitlinien (z. B. „Bei Code-Generierung: Output muss vor Commit menschlich geprüft sein; keine Eingabe von API-Keys").

Ergänzend: ein internes Anti-Pattern-Wiki mit dokumentierten Vorfällen oder Beinahe-Vorfällen (anonymisiert), damit Lessons Learned greifbar bleiben.

## 4. Audit-Evidenz

Der Auditor verlangt die AUP, einen Nachweis der Bekanntmachung mit Lese­bestätigungen, und führt im Stichproben­interview Fragen wie „Sie wollen den letzten Quartals­bericht mit ChatGPT zusammenfassen – was tun Sie?" zur Plausibilisierung gelebter Praxis.

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| {AIOfficerName} (AI Officer) | ✓ |   |   |   |
| {GeschäftsführerName} (Geschäftsführung) |   | ✓ |   |   |
| HR-Verantwortliche:r |   |   | ✓ |   |
| {ISONName} (ISO) |   |   | ✓ |   |
| Alle Mitarbeitenden |   |   |   | ✓ |

## 6. Verweise

Verknüpfung mit Controls A.2.2 (AUP konkretisiert Policy), A.4.6 (Onboarding kommuniziert AUP), A.4.4 (Tooling-Register listet zulässige Werkzeuge), A.9.4 (Bestimmungs­gemäßer Gebrauch je Anwendung). Externe Bezüge: Art. 4 EU AI Act (KI-Kompetenz), § 87 BetrVG (Mitbestimmung des Betriebsrats bei IT-Regelungen, soweit relevant).

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn die AUP existiert, von der Geschäftsführung freigegeben und allen Mitarbeitenden mit Lesebestätigung zugestellt ist, sowie in der Onboarding-Pflicht­liste verankert ist.
