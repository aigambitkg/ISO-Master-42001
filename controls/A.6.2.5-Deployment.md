---
control_id: A.6.2.5
control_name: Deployment
annex_section: "A.6 AI system life cycle"
iso_clause_reference: "Annex A.6.2.5"
category: lifecycle
priority: important
status: todo
owner: Engineering Lead
approver: "{AIOfficerName}"
deliverable: Deployment-SOP.md
related_documents:
  - controls/A.6.2.4-Verifikation-Validierung.md
  - controls/A.6.2.6-Betrieb-Monitoring.md
review_cycle: "{ReviewFrequenz}"
---

# Control A.6.2.5 — Deployment

**Annex-Bereich:** A.6 AI system life cycle · **Priorität:** Wichtig · **Verantwortlich:** Engineering Lead

---

## 1. Zweck des Controls

ISO/IEC 42001 Annex A.6.2.5 verlangt einen kontrollierten und reversiblen Deployment-Prozess für KI-Systeme. Anders als bei klassischer Software können sich bei KI-Systemen Abweichungen zwischen Test- und Produktiv­umgebung schwer vorhersagbar manifestieren – ein robuster Rollout reduziert die Folgen.

## 2. Soll-Zustand bei {Unternehmensname}

Eine **Deployment-SOP** beschreibt den Standard­ablauf: bestandene V&V als Vorbedingung, gestufte Rollout-Strategie (Canary oder Shadow Mode → 5–10 % Traffic → 50 % → 100 %), Monitoring-Schwellwerte für automatischen oder manuellen Rollback, Kommunikations­plan an interne Stakeholder, dokumentierte Rollback-Prozedur mit zeitlichem Ziel (z. B. „vollständiger Rollback binnen 15 Minuten möglich").

Bei Modell-Updates wird das vorherige Modell mindestens für eine definierte Periode (z. B. 30 Tage) als Fallback-Version verfügbar gehalten.

## 3. Quick-Win-Implementierung (10–20 MA)

Eine einseitige SOP mit den oben genannten Schritten genügt. Praktisch realisierbar mit Feature-Flag-Frameworks (z. B. Unleash, GrowthBook, LaunchDarkly) für den gestuften Rollout sowie Standard-CI/CD-Tooling mit Rollback-Kommando. Modell-Versionen werden im Modell-Registry (MLflow oder einfacher Git-LFS-basierter Ansatz) gepflegt.

Wichtig: ein einziger Probe-Rollback pro Quartal durchführen, um die Reversibilität tatsächlich zu testen.

## 4. Audit-Evidenz

Der Auditor verlangt die SOP, einen Nachweis eines tatsächlich durchgeführten gestuften Rollouts (z. B. Feature-Flag-Konfigurations­historie, Release-Notes), und einen Nachweis eines durchgeführten Rollback-Tests inkl. dokumentierter Lessons Learned.

## 5. Verantwortlichkeiten (RACI)

| Rolle | R | A | C | I |
|-------|---|---|---|---|
| Engineering Lead | ✓ |   |   |   |
| System Owner pro Anwendung | ✓ |   |   |   |
| {AIOfficerName} (AI Officer) |   | ✓ |   |   |
| Customer Success / Support |   |   |   | ✓ |

## 6. Verweise

Verknüpfung mit Controls A.6.2.4 (V&V als Vorstufe), A.6.2.6 (Monitoring liefert Rollback-Signale), A.8.4 (Incident-Kommunikation bei fehlgeschlagenem Deployment). Externe Bezüge: SRE-Best-Practices, EU AI Act Art. 16 (Pflichten der Anbieter).

## 7. Definition of Done

Status auf „Erledigt" setzbar, wenn die SOP existiert, der gestufte Rollout technisch ermöglicht ist und mindestens ein erfolgreicher Rollback-Test dokumentiert ist.
