# LFJL — Metz-Nancy-Lorraine · Departure Page

**LFJL / ETZ** · Metz-Nancy, Lorraine (Grand Est), France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LFJL Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **04 or 22** — single runway pair; runway-in-use is wind-driven within the hard crosswind gate (§3) |
| Config logic | Wind-driven, subject to the **hard crosswind limit: 20 kt wet / 25 kt dry** — RWY 04/22 use is prohibited beyond this 🟥 |
| Transition altitude | Not independently confirmed for LFJL in this pass 🟧 |
| Take-off minima | LVTO RVR by category — CAT A/B/C 150 m, CAT D 200 m (or 800 m if ATS is not active); RWY 22 permits LVTO with RVR < 150 m 🟧 |
| CTOT / flow regime | None identified — assumed uncoordinated/Level 1 🟧 |
| De-icing on departure | Available — 1 Vestergaard-type de-icing truck, season not specified 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify — no stand/apron-to-runway taxi detail beyond the intersection-departure points (TWY B and TWY C for RWY 22; TWY C for RWY 04) captured in the reachable extract; confirm the exact taxi with Ground/AD operator on the day. 🟧
- **Hot spots / tight taxiways:** 🟥 **RWY 22 turn-around area** — aircraft above Code C require a special AD-administration-coordinated procedure by phone. **TWY T1 and T2 are limited to Code E aircraft with a main-gear width ≤ 13.77 m** — confirm this against the assigned type before taxiing via these taxiways.
- **Runway crossings / read-back-required points:** Not published / verify beyond the RWY 22 turn-around area note above. 🟧
- **Low-vis taxi caveats:** Stop bars are used during LVP and must **never** be crossed, even on ATC instruction. 🟥 SMGCS/follow-me detail not published — verify locally. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single 04/22 runway pair; the field publishes an unusually explicit **hard crosswind gate** — use of RWY 04/22 is **prohibited** whenever crosswind exceeds **20 kt on a wet runway or 25 kt on a dry runway**. 🟥 No further wind-preference rule (e.g. a preferred config) was found beyond this hard limit; expect ATC to select the runway in use per wind and current minima — confirm ATIS.
- **By departure direction:** RWY 04 departs on a fixed magnetic heading of 037°; RWY 22 departures split into a west sector (217°) and an east sector (217° with a steeper gradient) — see §5/§6. RWY 22 is usable only on APP clearance, with no turn permitted before the departure end of runway.
- **Noise / preferential-runway program:** No noise abatement procedures are currently published for LFJL (AD 2 LFJL.21 heading exists, no content) — no noise-preferential runway/routing rule identified. 🟧
- **Interaction with arrivals:** Not published / verify — the field's single runway pair means departures and arrivals share the same 04/22 pair; confirm the active configuration on ATIS before taxi. 🟧

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Conventional SID RWY 04 / RWY 22 | 04 / 22 | No distinctive public chart name beyond "conventional" in the reachable extract 🟧 | RNP approach charts (RNP CODE/FASDB data) are separately published for both runways — verify current AIRAC before use. |
| Omnidirectional departure | 04 / 22 | See §5/§6 for the AIP-published headings/gradients — verify current chart | Both runways carry a published danger-area (LF-R45) climb-gradient requirement. |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per the AIP-published omnidirectional departure procedure for the assigned runway (§6). Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart. 🟧
- **Noise-abatement departure procedure (NADP):** No published NAP/NADP identified for LFJL — the AD 2 LFJL.21 "Noise Abatement Procedures" section carries no published content. 🟧 The omnidirectional departure procedures in §6 substitute for a named NADP in the source data.
- **Early turn / altitude constraints:** **RWY 04:** climb on magnetic heading 037° to 2,000 ft (1,130 ft AAL) before any turn. **RWY 22:** no turn permitted before the departure end of runway — usable only on APP clearance; verify constraints on the current chart before use.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No significant close-in high terrain identified for LFJL (🟩, not independently cross-checked against an obstacle chart 🟧). The field's climb-gradient requirements are obstacle/danger-area-driven rather than terrain-driven: **RWY 04** requires a 6.5% climb gradient on runway heading 037° to 2,000 ft (1,130 ft AAL) specifically to clear **danger area LF-R45**, with a contingency of runway-heading climb at 3.5% (a reduced gradient set by trees 1,300 m from the departure end of runway on the 037° bearing) followed by a right turn toward NDB LOU at 4.5 NM from MLY, climbing to 2,700 ft (1,830 ft AAL), then direct from LOU. **RWY 22**, once clear of APP clearance and DER, climbs on 217° — west sector to 2,000 ft (1,130 ft AAL) direct, east sector at a 5% gradient (again for LF-R45 clearance) to 2,000 ft (1,130 ft AAL) before continuing at 5% — with a contingency of runway-heading climb followed by a left turn toward NDB LOU at 5.4 NM from MLY, climbing to 2,700 ft (1,830 ft AAL), then direct from LOU. Verify exact headings/gradients/altitudes on the current AIP/AIRAC chart — do not use this brief as the flyable procedure source.
- **Special DP / obstacle DP:** RNP departure/approach charts are separately published for both runways (RNP CODE/FASDB data) — name only, verify on current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies when RVR ≤ 800 m or ceiling ≤ 200 ft. Minimum takeoff RVR by category: CAT A/B/C **150 m**, CAT D **200 m** (or **800 m if ATS is not active**) 🟥 — confirm ATS status before relying on the lower category minima. RWY 22 specifically permits LVTO with RVR < 150 m. Stop bars are used during LVP and must never be crossed, even on ATC instruction. 🟥
- **De-icing:** Provided — 1 Vestergaard-type de-icing truck; season not specified in the source extract. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No separate Delivery position identified — clearance/start-up coordination is via **Lorraine Sol** (Ground, 121.705 HO) or the AD operator directly, per [Briefing §8](index.md). 🟧
- **Frequency sequence:** **Lorraine Sol (Ground) 121.705 (HO) → Lorraine Tour (Tower) 122.075 (HO) → Lorraine Approche 119.125 (HX, LFJL traffic) / 127.250 (HX, also serves Épinal-Mirecourt and Nancy-Essey).** Outside ATS hours, use the A/A "Lorraine" self-announce frequency 122.075 (HX). Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **CTOT / slot handling:** No slot-coordination level identified — treat any CTOT exposure as standard EUROCONTROL Network Manager practice for a European regional field. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 04/22 (3,050 m) is non-limiting for typical narrowbody/regional-jet operations; RWY 04's LDA is reduced to 2,847 m by its displaced threshold — a landing, not a takeoff, consideration (see [Arrival §7](arrival.md)). Intersection departures (TWY C on RWY 04: 1,820 m; TWY B on RWY 22: 2,470 m; TWY C on RWY 22: 1,270 m) reduce available TORA/TODA/ASDA — confirm the assigned departure point before performance calculation.
- **Density altitude / temperature:** Non-issue at 870 ft, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** The **hard crosswind limit tightens on a wet runway** (20 kt vs 25 kt dry) — this is the field's dominant wet-runway performance/limit consideration. 🟥 No specific braking-action/contamination data confirmed beyond this.
- **Link to OM B:** No K Global fleet/category assignment confirmed for this field (§1 of the [Dispatch page](dispatch.md)) — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference once a route/fleet assignment exists.

---

## 10. Gotchas

- **Hard crosswind limit — RWY 04/22 use PROHIBITED above 20 kt crosswind (wet) / 25 kt (dry)** — a genuine AIP-published hard gate, not advisory guidance. 🟥
- **RWY 22 departures require APP clearance and no turn before the departure end of runway** — do not plan an early turn off RWY 22 under any circumstance.
- **RWY 04's departure gradient (6.5%) and RWY 22's east-sector gradient (5%) both exist specifically to clear danger area LF-R45** — verify LF-R45 activity status at planning (§ NOTAM watch-items) and the exact current-chart gradient before use.
- **RFFS is not provided at all outside the published RFF windows** — a delayed or off-hours departure may have no fire-rescue cover; confirm current RFF-window status before releasing the flight. 🟥
- **ATS is not H24** — outside Mon–Fri 0445–2100 / Sat 0445–1900 / Sun 0800–2100, expect an uncontrolled/AFIS-type environment and use the A/A "Lorraine" frequency.
- **TWY T1/T2 gear-width limit (≤13.77 m main-gear width, Code E only)** — confirm against the assigned type before routing via these taxiways.
- **Stop bars during LVP must never be crossed, even on ATC instruction.**

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID/conventional-departure chart names and exact gradient/heading/altitude figures per runway.
- Take-off minima table detail beyond the LVTO RVR-by-category figures given.
- Start-up/push-back procedure detail (cross-bleed/APU notification).
- EOSID/engine-out procedure detail per runway.
- Transition altitude for LFJL specifically.
- De-icing season and single-truck throughput capacity at peak demand.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, current RFF-window status, LF-R45 danger-area activity), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP — AD 2 LFJL**, eff. 14 MAY 2026, AIRAC 09 JUL 2026 (retrieved 2026-07-26) — https://www.sia.aviation-civile.gouv.fr/ (eAIP France portal; AD 2 LFJL section within the current AIRAC package). *Flight/departure procedures, communications, LVP/crosswind restrictions, de-icing, ground operations.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
