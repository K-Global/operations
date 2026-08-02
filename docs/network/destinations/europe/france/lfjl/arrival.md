# LFJL — Metz-Nancy-Lorraine · Arrival Page

**LFJL / ETZ** · Metz-Nancy, Lorraine (Grand Est), France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LFJL Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **04 or 22** — single runway pair; runway-in-use is wind-driven within the hard crosswind gate (§3) |
| Usual approach | **RWY 04:** NDB, RNP (no ILS). **RWY 22:** ILS/LOC (ident MLY, CAT III designation) — the field's only precision approach. |
| Config logic | Wind-driven, subject to the **hard crosswind limit: 20 kt wet / 25 kt dry** — RWY 04/22 use is prohibited beyond this 🟥 |
| Transition level | Not independently confirmed for LFJL in this pass 🟧 |
| LVP trigger | RVR ≤ 800 m or ceiling ≤ 200 ft — only RWY 22 (ILS) supports a precision LVP approach; RWY 04 has no ILS 🟧 |
| Missed-approach driver | Airspace/traffic (non-H24 ATS, secondary-radar-only environment) — not terrain 🟩 |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** A single conventional STAR construct applies across all runways — no distinctive public name beyond the generic conventional STAR in the reachable extract; pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Single 04/22 runway pair; Lorraine Approche/Tour assigns the runway-in-use per wind (within the hard crosswind gate) and current minima — confirm ATIS.
- **Transition to approach:** RWY 22 offers a STAR/conventional-to-ILS transition (the field's only precision option); RWY 04 transitions to an NDB or RNP approach only (no ILS). Expect radar-assisted (secondary-radar, not primary) vectoring within CTR LORRAINE.
- **Speed / flow constraints on the STAR:** Not published / verify — standard 250 KIAS below FL100 (EU/ICAO norm) assumed pending chart confirmation. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not published / verify — plan TOD to meet the first STAR/approach altitude gate on the current chart. 🟧
- **Speed control:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart. 🟧
- **Altitude constraints:** Not published / verify — fly the charted altitudes. 🟧
- **Energy traps:** A late runway change between RWY 04 (non-precision, NDB/RNP only) and RWY 22 (precision, ILS) ahead of a wind shift is a real energy/approach-capability trap — a switch to RWY 04 in deteriorating visibility removes the precision-approach option entirely. The hard crosswind gate (§3 of the Briefing) can also force a late runway reassessment.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 04 | NDB, RNP | **No ILS** — non-precision only 🟥 | verify current chart |
| 22 | ILS/LOC (MLY, CAT III designation); conventional initial approach to MTZ/GTQ; RNP; NDB X/Y/Z | **Sole precision runway**; CAT II/III arrivals must vacate via TWY C at 1,200 m from threshold 🟥 | verify current chart |

- **LVP triggers:** RVR ≤ 800 m or ceiling ≤ 200 ft. RFFS presence is systematic during LVP. Stop bars are used during LVP and must never be crossed, even on ATC instruction. Only RWY 22 supports a precision (ILS) LVP approach — RWY 04's LVP-capability, if any, would be via RNP, not ILS. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 No significant close-in high terrain reported in the available AD 2 data. Not independently cross-checked against a dedicated obstacle chart — treat as 🟧 pending that check. See [Briefing §3.1](index.md).
- **Specific threats:** 🟥 The **hard crosswind limit** (20 kt wet / 25 kt dry) is the field's standout approach-planning threat — brief it on every approach into marginal crosswind, on either runway. The **RWY04-no-ILS/RWY22-only-precision asymmetry** means a wind/config that favours RWY 04 in low visibility removes the precision-approach option entirely — treat this combination (RWY 04 favoured + deteriorating visibility) as a real diversion-planning trigger.
- **Airspace / traffic:** 🟧 ATS is not H24; outside scheduled hours (Mon–Fri 0445–2100, Sat 0445–1900, Sun 0800–2100) the field reverts to an uncontrolled/AFIS-type environment (A/A self-announce, 122.075). The aerodrome carries a secondary-radar display only (no primary radar) — a radar-assisted, not fully radar-controlled, environment even during ATS hours.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (no significant close-in high terrain identified, §5) — fly the published missed approach and verify climb-gradient/turn constraints on the current chart. 🟧
- **Re-sequencing environment:** A go-around returns you to a scheduled-hours, secondary-radar-assisted (not primary-radar) environment — expect more conservative re-sequencing than at a major radar-controlled hub, and confirm ATS is still active if the miss occurs near the edge of the published ATS hours.
- **Go-around traps:** Awareness of the active runway/config (04 vs 22) during the miss, and re-assessment of the hard crosswind gate if conditions have shifted since the approach briefing.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 04 — **2,847 m** (reduced from the 3,050 m runway by the 860 ft displaced threshold); RWY 22 — **3,050 m** (full length, no displaced threshold). Both are ample for narrowbody/regional-jet operations.
- **Braking / vacate:** 🟥 **CAT II/III precision landings on RWY 22 must vacate via TWY C, located 1,200 m from the threshold — a mandatory vacate point**, not optional; plan the rollout/braking profile to meet this exit. Rapid-exit taxiway detail beyond this is not published — confirm with Ground/AD operator on the day. 🟧
- **Runway-excursion watch:** 🟧 RWY 04's displaced threshold is the primary excursion-relevant fact to brief on that runway; ground-strip negative transverse slopes and drainage ditches near the RWY 04 threshold are an additional off-pavement excursion consideration (see [Briefing §3.1/§3.3](index.md)). The hard crosswind limit (§5 above) is itself a direct excursion-prevention gate.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not published / verify — no stand/apron-to-terminal taxi detail beyond the RWY 22 turn-around area and the TWY T1/T2 gear-width restriction captured in the reachable extract; confirm the assigned routing with Ground/AD operator on the day. 🟧
- **Hot spots / tight taxiways:** 🟥 **RWY 22 turn-around area** — aircraft above Code C require a special AD-administration-coordinated procedure by phone. **TWY T1 and T2 are limited to Code E aircraft with a main-gear width ≤ 13.77 m** — confirm against the assigned type. See [Briefing §13](index.md).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — no stand/apron layout confirmed beyond the apron "P" prior-request parking restriction.

---

## 9. Arrival frequency sequence

- **Sequence:** **Lorraine Approche 119.125 (HX, LFJL traffic) / 127.250 (HX, also serves Épinal-Mirecourt and Nancy-Essey) → Lorraine Tour (Tower) 122.075 (HO) → Lorraine Sol (Ground) 121.705 (HO).** Outside ATS hours, use the A/A "Lorraine" self-announce frequency 122.075 (HX). Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **Approach/Departure control:** **Lorraine Approche** combines the approach function for LFJL and also serves Épinal-Mirecourt and Nancy-Essey — do not assume 127.250 is LFJL-exclusive. LFJL sits under **Reims ACC (LFEE)** for upper-airspace handoff — see [Europe airspace brief](../../../../airspace/europe.md); **no dedicated K Global FIR brief exists yet for Reims (LFEE)** (see [Briefing §18](index.md)). 🟧

---

## 10. Gotchas

- **Hard crosswind limit — RWY 04/22 use PROHIBITED above 20 kt crosswind (wet) / 25 kt (dry)** — a genuine AIP-published hard gate, brief before every approach in marginal crosswind. 🟥
- **RWY 04 has no ILS** — do not expect a precision approach if RWY 04 is the runway-in-use; RWY 22 is the field's only ILS-equipped runway.
- **CAT II/III landings on RWY 22 must vacate via TWY C at 1,200 m from the threshold** — mandatory, plan the rollout to meet this exit.
- **RFFS is not provided at all outside the published RFF windows** — confirm current RFF-window status before planning an arrival near the edge of scheduled hours. 🟥
- **ATS is not H24** — an arrival outside Mon–Fri 0445–2100 / Sat 0445–1900 / Sun 0800–2100 meets an uncontrolled/AFIS-type environment; use A/A "Lorraine" 122.075.
- **Stop bars during LVP must never be crossed, even on ATC instruction.**
- **No noise abatement procedures are currently published** — do not assume a curfew exists, but also do not assume unrestricted night operations; this is an open item.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR/approach chart names and exact minima per runway.
- ILS (MLY) sub-category (IIIA/IIIB/IIIC) confirmation.
- Transition level for LFJL specifically.
- Rapid-exit taxiway/vacate detail beyond the mandatory TWY C exit for CAT II/III landings on RWY 22.
- Stand/apron taxi-in routing.
- CFIT/terrain assessment (🟩) not independently cross-checked against a dedicated obstacle chart.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, current RFF-window status, LVP/stop-bar status), ATIS config/wind trend (crosswind-gate relevance). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP — AD 2 LFJL**, eff. 14 MAY 2026, AIRAC 09 JUL 2026 (retrieved 2026-07-26) — https://www.sia.aviation-civile.gouv.fr/ (eAIP France portal; AD 2 LFJL section within the current AIRAC package). *Runway/declared-distance data, navaids, communications, LVP/crosswind restrictions, ground operations.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
