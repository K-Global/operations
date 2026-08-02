# VMMC — Macao Intl · Departure Page

**VMMC / MFM** · Macau · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [VMMC Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **16/34** (single runway) — **RWY 34 carries the field's only ILS CAT II capability**; runway-in-use is wind/config-driven |
| Config logic | Wind/traffic driven; no independently sourced wind-rose data this pass 🟧 |
| Transition altitude | 9,000 ft / 2,700 m (per AD 2.24 area-chart legend) — verify current chart 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | No slot-coordination level confirmed; no dedicated Macau ATFM program identified 🟧 |
| De-icing on departure | **NIL** — explicitly stated in the AIP; subtropical climate, no requirement 🟩 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the assigned stand, taxi via TWY C2/D/E/F/G to the runway; the runway itself is reached from the terminal apron via **two causeway bridges** — Bridge H (23–39 m wide) and Bridge C1 (23 m wide) — as the sole ground link between apron and runway. Confirm the exact taxi with Ground on the day.
- **Hot spots / tight taxiways:** 🟥 The two causeway bridges are a **single-point ground-access chokepoint** given the compact reclaimed-land site — both are rated to a calculated resistance up to 3,970 kN, equivalent to a loaded B747-400. Cargo apron stands **G01–G15** operate under strict sequential tow-out rules with designated Breakaway Points X/Y/Z, and **no simultaneous pushback/tow is permitted on Breakaway Points Y and Z**, nor for aircraft parked on stands **B1 and B3** `[AIP Macao AD 2 VMMC 2.20]`.
- **Runway crossings / read-back-required points:** Single runway — no parallel-runway crossing consideration; confirm any taxiway-crossing instruction locally.
- **Low-vis taxi caveats:** Not independently confirmed in reachable sources — follow any SMGCS-style low-vis routing issued by Ground. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Wind-driven choice between the 16- and 34-directions — confirm current ATIS wind/config on the day; no independently sourced wind-rose data this pass. 🟧
- **By departure direction:** Not independently confirmed beyond the wind-driven 16/34 choice. 🟧
- **Noise / preferential-runway program:** **RWY 34 departures:** climb offset 15° right to 400 ft (120 m), then turn right; **do not overshoot** Jiuzhou DVOR (ZAO) R231°, the noise-abatement limit for Zhuhai City `[AIP Macao AD 2 VMMC 2.21]`. No fleet-wide NADP is published (the AIP states this item as **NIL**).
- **Interaction with arrivals:** VMMC has **no dedicated Macau Approach** — departing traffic is handed to whichever external unit (Zhuhai Approach or Hong Kong Radar) is responsible for the routing, inside an extremely tight Pearl River Delta terminal environment. See [Briefing §3.2](index.md) and the [Hong Kong (VHHK) FIR brief](../../../../airspace/fir/asia/hong-kong-vhhk.md).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 16 / 34 | RNAV(GNSS) SID requires **RNP 1 or equivalent approval and certified GNSS**; without it, fly the **Conventional Procedure** `[AIP Macao AD 2 VMMC 2.20 §10]` | Charts exist per AD 2.24 (SID Macau RWY 34/16); pull the live current-AIRAC SID list before use. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (ICAO norm) — confirm current chart. **RWY 34 departures:** climb offset 15° right to 400 ft (120 m) before turning right.
- **Noise-abatement departure procedure (NADP):** No fleet-wide NADP is published — the AIP states this item as **NIL**. The field's documented noise-management tool is instead the **RWY 34 climb-offset/turn instruction and the ZAO R231° lateral limit** (§3). 🟩 (confirmed absence, not an open item)
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart. The **ZAO R231° boundary must not be overshot** on RWY 34 departures regardless of SID.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Reclaimed-land, sea-level site — no significant close-in terrain identified in reachable sources; obstacle entries in the AIP relate to marine shipping-channel fairways near Taipa/Coloane, not high ground.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧
- **Engine-out ferry flights:** 🟥 **Transit engine-out ferry flights through Macau are not permitted at all.** Departure engine-out ferry flights are only permitted **ex-RWY 16**, with prior AACM permission, no revenue load, and minima not less than 1,000 ft ceiling / 5 km visibility `[AIP Macao AD 2 VMMC 2.20 §5]` — a hard restriction distinct from normal revenue-flight EOSID planning.

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources this pass; the published LVP trigger (RVR TDZ RWY 34 ≤ 800 m, or cloud base ≤ 200 ft, applicable to RWY 34) is an arrival-side figure — a distinct LVTO RVR minimum was not obtained for departure. 🟧 See [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).
- **De-icing:** **NIL** — explicitly stated in the AIP; subtropical climate, no requirement. 🟩

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No dedicated Clearance Delivery frequency published — clearance is coordinated via **Macau Ground (121.725 MHz)** or **Tower (118.000 MHz)** as appropriate, five minutes before start-up.
- **Frequency sequence:** **Ground 121.725/121.975 MHz → Tower 118.000/119.400 MHz (primary/secondary) → external approach unit (Zhuhai Approach 120.35/124.25 MHz, or Hong Kong Radar 126.3/119.1 MHz, per assigned routing).** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **CTOT / slot handling:** No slot-coordination level or CTOT/ATFM program confirmed for VMMC; comply with any locally assigned flow-control instruction from the external approach unit. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** The single **3,360 m physical runway** carries **displaced thresholds both ends**, but declared **TORA/TODA/ASDA figures for take-off are less affected than LDA** — TORA 3,225 m (RWY 16) / 3,300 m (RWY 34), ASDA and TODA slightly higher on each. Confirm against type performance for max-weight departure planning. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md).
- **Density altitude / temperature:** Non-issue at 20 ft AMSL; reference temperature 31.5 °C is used for elevation/performance calculation — no hot-and-high penalty.
- **Contamination / wet-runway:** Runway friction is actively managed by Mu-meter; the runway is notified **"slippery when wet" below a friction value of 0.42** `[AIP Macao AD 2 VMMC 1.1]` — a genuine seasonal (monsoon/typhoon-season heavy rain) consideration given the reduced LDA on the arrival side.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — confirm max-take-off-weight field-length margin per type; the causeway bridges' load rating (equivalent to a loaded B747-400) is the one fleet-relevant ground-movement item (Briefing §13/§17).

---

## 10. Gotchas

- **Two causeway bridges are the sole runway–apron ground link** — a single-point chokepoint on a compact reclaimed-land site; confirm bridge status on any construction-related NOTAM.
- **No dedicated Macau Approach** — a departure is handed to Zhuhai Approach or Hong Kong Radar depending on routing; confirm the assigned frequency at planning, not just on the day.
- **RWY 34 departures must not overshoot the Jiuzhou DVOR (ZAO) R231°** — a hard noise-abatement lateral limit for Zhuhai City, independent of the flown SID.
- **Transit engine-out ferry flights are not permitted at all** — only a departure engine-out ferry ex-RWY 16, under restricted conditions, is possible.
- **RNP AR APCH is not authorised without special AACM authorisation** — do not assume RNP AR availability on a return/diversion planning basis.
- **Cargo-apron (G01–G15) push/tow sequencing is strict** — no simultaneous pushback on certain Breakaway Points or stand pairs; confirm ground coordination before requesting push if operating from these stands.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / LVTO RVR minima exact figures.
- Prevailing wind / wind-rose data driving runway-selection logic.
- EOSID/engine-out procedure detail per runway (distinct from the published engine-out-ferry-flight restriction, which is a separate, confirmed rule).
- Low-vis taxi/SMGCS specifics.
- CTOT/flow-control regime, if any, originating from the external approach units.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/causeway-bridge/taxiway/navaid/lighting, esp. CAT II ILS equipment status on RWY 34), CTOT/flow status from the external approach unit, typhoon-season advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Civil Aviation Authority of Macao (AACM) — AIP Macao, Part 3 (AD), AD 2 VMMC** (mirrored full-text extract) — hosted via VATSIM Hong Kong vACC — https://vathk.com/pdf/macauaip.pdf (retrieved 2026-07-26). *Runway declared distances, communications, noise abatement, local traffic regulations (push-back procedures, engine-out ferry restrictions, PBN/RNP AR).*
- SkyVector — https://skyvector.com/airport/VMMC (retrieved 2026-07-26). *Runway/frequency cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from territory AIP; K Global fields from live VAMSYS; 4-page pack. |
