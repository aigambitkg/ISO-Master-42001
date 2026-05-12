# ISO 42001 – Annex A Controls

Dieses Verzeichnis enthält **30 Kern-Controls** aus ISO/IEC 42001:2023 Annex A, ausgewählt und vereinfacht für Startups mit 10–20 Mitarbeitenden. Jedes Control ist ein eigenständiges, audit-taugliches Markdown-Dokument mit variablen Platzhaltern, die vom AIMS Starter Kit befüllt werden.

## Verzeichnis-Struktur

```
controls/
├── README.md                              # Diese Datei
├── _index.json                            # Maschinenlesbarer Index aller Controls
├── A.2.2-AI-Policy.md
├── A.2.3-Alignment-mit-Policies.md
├── A.2.4-Review-AI-Policy.md
├── A.3.2-Rollen-Verantwortlichkeiten.md
├── A.3.3-Reporting-Bedenken.md
├── A.4.2-Ressourcen-Dokumentation.md
├── A.4.3-Datenressourcen.md
├── A.4.4-Tooling-Ressourcen.md
├── A.4.6-Personal-Kompetenz.md
├── A.5.2-Impact-Assessment-Prozess.md
├── A.5.3-Assessment-Dokumentation.md
├── A.5.4-Impact-Individuen.md
├── A.5.5-Gesellschaftlicher-Impact.md
├── A.6.1.2-Ziele-Entwicklung.md
├── A.6.2.2-Systemanforderungen.md
├── A.6.2.4-Verifikation-Validierung.md
├── A.6.2.5-Deployment.md
├── A.6.2.6-Betrieb-Monitoring.md
├── A.6.2.7-Technische-Dokumentation.md
├── A.6.2.8-Event-Logs.md
├── A.7.4-Datenqualitaet.md
├── A.7.5-Datenherkunft.md
├── A.7.6-Datenaufbereitung.md
├── A.8.2-Nutzer-Information.md
├── A.8.4-Incident-Kommunikation.md
├── A.9.2-Verantwortungsvoller-Einsatz.md
├── A.9.4-Bestimmungsgemaesser-Gebrauch.md
├── A.10.2-Verantwortung-Drittparteien.md
├── A.10.3-Lieferanten-Register.md
└── A.10.4-Kunden-AGB-Opt-out.md
```

## Aufbau eines Control-Dokuments

Jedes Control folgt einer einheitlichen 7-Sektionen-Struktur:

1. **Zweck des Controls** – Anforderung der Norm und Rechtsverweis
2. **Soll-Zustand** – Wie „erfüllt" bei diesem Startup aussieht
3. **Quick-Win-Implementierung** – Pragmatischer Umsetzungs-Pfad
4. **Audit-Evidenz** – Welche Artefakte der Auditor sehen will
5. **Verantwortlichkeiten (RACI)** – Wer macht was
6. **Verweise** – Verknüpfungen zu anderen Controls und Dokumenten
7. **Definition of Done** – Schwelle für Status „Erledigt"

## Statuswerte

Jedes Control hat einen Status, der im Dashboard verwaltet wird:

| Status | Bedeutung |
|--------|-----------|
| `todo` | Noch nicht begonnen |
| `in-progress` | In Umsetzung, aber nicht audit-tauglich |
| `done` | Definition of Done erfüllt, Evidenz vorhanden |

## Prioritäten

| Priorität | Audit-Relevanz |
|-----------|----------------|
| `critical` | Ohne dieses Control fehlt die Norm-Substanz – Audit-Showstopper |
| `important` | Wird im Audit geprüft, lässt aber Spielraum in der Umsetzungs-Tiefe |
| `recommended` | Best-Practice, im Zweifel verzichtbar bei niedrigem Risiko |

## Verwendung im Tool

Der AIMS Starter Kit Wizard liest `_index.json`, fragt die Variablen ab (siehe `../policies/AI-Policy-Template.schema.json`) und ersetzt die Platzhalter in den einzelnen Control-Dateien beim Export.
