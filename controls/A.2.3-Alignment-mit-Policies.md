---
control_id: A.2.3
control_name: Alignment mit anderen Policies
annex_section: "A.2 Policies related to AI"
iso_clause_reference: "Annex A.2.3"
category: policies
priority: important
status: todo
owner: "{AIOfficerName}"
approver: "{GeschäftsführerName}"
deliverable: Policy-Crosswalk.md
related_documents:
  - policies/AI-Policy-Template.md
  - controls/A.2.2-AI-Policy.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.2.3 — Alignment mit anderen Policies

**Annex-Bereich:** A.2 Policies related to AI · **Priorität:** Wichtig · **Verantwortlich:** {AIOfficerName}

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.2.3 fordert, dass die AI Policy auf Konsistenz mit anderen Unternehmens-Policies geprüft und mit diesen harmonisiert wird. Ziel ist die Vermeidung von Wider­sprüchen zwischen den Steuerungs­dokumenten und die saubere Abgrenzung der Geltungsbereiche.

Praktisch betrifft dies vor allem die Informations­sicherheits-Policy (ISO/IEC 27001), die Datenschutz-Policy (DSGVO/BDSG), die Acceptable Use Policy für IT-Werkzeuge sowie ggf. eine bestehende Code of Conduct oder Lieferanten-Policy.

## 2. Soll-Zustand bei {Unternehmensname}

Es existiert ein dokumentierter Quer­verweis (Policy-Crosswalk), der für jedes Themen­feld der AI Policy benennt, welche andere Policy ergänzend gilt, und an welchen Schnittstellen Verfahren ineinander­greifen. Wider­sprüche zwischen Policies sind aufgelöst; bestehende Policies wurden – soweit notwendig – um KI-Aspekte ergänzt.

## 3. Quick-Win-Implementierung (10–20 MA)

Ein Crosswalk-Abschnitt am Ende der AI Policy (oder als eigene halbseitige `Policy-Crosswalk.md`) genügt. Auflisten der relevanten Schwester-Policies, mit kurzer Notiz „regelt X, ergänzt durch AI Policy für Y". Bei Konflikten gilt nach Default-Klausel die jeweils strengere Regelung.

Wenn eine separate Datenschutz- oder Security-Policy noch nicht existiert, ist die Erstellung kein Showstopper für die ISO-42001-Zertifizierung, sollte aber innerhalb von sechs Monaten nachgeholt werden – andernfalls bleibt eine systematische Lücke in der Informations­sicherheits-Architektur.

## 4. Audit-Evidenz

Der Auditor erwartet die Cross-Referenz-Tabelle als ausgedrucktes oder digital verfügbares Dokument, sowie idealerweise eine Versionsabstimmung: alle in der Tabelle benannten Policies sollten ein Aktualisierungs­datum tragen, das nicht älter ist als das Inkrafttreten der AI Policy.

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| {AIOfficerName} (AI Officer) | ✓ | ✓ |   |   |
| {DPOName} (DSB) |   |   | ✓ |   |
| {ISONName} (ISO) |   |   | ✓ |   |
| {GeschäftsführerName} (Geschäftsführung) |   |   |   | ✓ |

## 6. Verweise

Verknüpfung mit Control A.2.2 (AI Policy als Bezugspunkt), A.3.2 (Rollen, in denen die ergänzenden Policies verantwortet werden). Externe Bezüge: ISO/IEC 27001:2022 (Informationssicherheit), DSGVO Art. 24 und 32 (Rechenschaftspflicht und Sicherheit der Verarbeitung).

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn der Crosswalk existiert, alle benannten Schwester-Policies verlinkt oder referenziert sind und die Geschäftsführung die Konsistenz formal bestätigt hat.
