---
control_id: A.2.2
control_name: AI Policy
annex_section: "A.2 Policies related to AI"
iso_clause_reference: "5.2 / Annex A.2.2"
category: policies
priority: critical
status: todo
owner: "{AIOfficerName}"
approver: "{GeschäftsführerName}"
deliverable: AI-Policy.md
related_documents:
  - policies/AI-Policy-Template.md
  - controls/A.2.3-Alignment-mit-Policies.md
  - controls/A.2.4-Review-AI-Policy.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.2.2 — AI Policy

**Annex-Bereich:** A.2 Policies related to AI · **Priorität:** Kritisch · **Verantwortlich:** {AIOfficerName}

---

## 1. Zweck des Controls

ISO/IEC 42001 Klausel 5.2 in Verbindung mit Annex A.2.2 verlangt, dass die oberste Leitung eine dokumentierte, kontextspezifische und der strategischen Ausrichtung des Unternehmens angemessene AI Policy festlegt, kommuniziert und aufrechterhält. Die Policy ist das oberste Steuerungsdokument des AI Management Systems und Grundlage für alle nachgelagerten Verfahren, Bewertungen und Kontrollen.

Rechtlich flankiert wird die Anforderung durch die Sorgfaltspflichten der Geschäftsleitung nach § 43 GmbHG sowie durch die Pflicht zur „KI-Kompetenz im Unternehmen" gemäß Art. 4 EU AI Act.

## 2. Soll-Zustand bei {Unternehmensname}

{Unternehmensname} verfügt über eine schriftliche AI Ethics & Governance Policy, die von der Geschäftsführung freigegeben ist, mindestens die Pflichtbestandteile nach ISO/IEC 42001 Klausel 5.2 abdeckt (Zweck, Geltungsbereich, Verpflichtungen, Zielrahmen, kontinuierliche Verbesserung, Review-Mechanismus), und auf {KIZweck} sowie die Risikoklasse {Risikoklasse} zugeschnitten ist.

Die Policy ist in {KommunikationskanalIntern} allen Mitarbeitenden zugänglich gemacht und unter {VeröffentlichungsortExtern} öffentlich verfügbar.

## 3. Quick-Win-Implementierung (10–20 MA)

Eine zwei- bis dreiseitige Policy genügt vollständig. Verwenden Sie das vorgehaltene Template aus `policies/AI-Policy-Template.md`, befüllen Sie die Variablen über den Wizard, lassen Sie sie von der Geschäftsführung in einer Vorstandssitzung beschließen und ablegen Sie das unterzeichnete PDF im Repository. Eine umfangreichere Policy-Hierarchie mit Sub-Policies ist für ein Startup nicht erforderlich; thematische Vertiefungen erfolgen über die Acceptable Use Policy (Control A.9.2) und die Data-Quality-SOP (Control A.7.4).

Realistischer Initialaufwand: ein halber bis ein ganzer Personentag inklusive Abstimmung mit der Geschäftsführung.

## 4. Audit-Evidenz

Der Auditor prüft beim Stage-1- und Stage-2-Audit folgende Artefakte:

Die unterzeichnete AI Policy in der aktuell gültigen Version mit klarem Inkrafttretens-Datum. Den Nachweis der Bekanntmachung im Unternehmen (E-Mail-Versand, Confluence-Seite mit Lesebestätigungen, Onboarding-Materialien). Die Verlinkung von der Policy in nachgelagerte Dokumente. Die Übereinstimmung zwischen Policy-Inhalt und tatsächlich gelebter Praxis in Stichproben­interviews mit Entwicklungs- und Operations-Teams.

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| {GeschäftsführerName} (Geschäftsführung) |   | ✓ |   |   |
| {AIOfficerName} (AI Officer) | ✓ |   |   |   |
| {DPOName} (DSB) |   |   | ✓ |   |
| Alle Mitarbeitenden |   |   |   | ✓ |

## 6. Verweise

Verknüpfung mit Control A.2.3 (Alignment mit anderen Policies), A.2.4 (Review-Mechanismus), A.3.2 (Rollen) sowie inhaltlich mit allen weiteren Annex-A-Controls. Die Policy verweist ihrerseits auf den AI Act (Verordnung (EU) 2024/1689), die DSGVO und ISO/IEC 42001:2023.

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn alle vier Kriterien erfüllt sind: (a) Policy ist von der Geschäftsführung unterschrieben, (b) Policy ist intern bekanntgemacht und unter dem genannten externen Ort veröffentlicht, (c) Mindestens eine Mitarbeitenden-Lesebestätigung pro Person liegt vor, (d) das nächste Review-Datum ist im Dokument und im Dashboard hinterlegt.
