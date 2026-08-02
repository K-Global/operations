# ZGGG — Baiyun · Departure Page

**ZGGG / CAN** · Guangzhou (Baiyun/Huadu districts), Guangdong Province, China · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [ZGGG Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | No fixed runway — dynamic mixed-mode allocation across the five-runway field (currently "three take-off / three landing"); confirm assignment with ATC on the day |
| Config logic | Traffic-flow/demand-driven allocation by CAAC's MS-ATMB (Stand-Based and Transfer-Point-Based strategies), not a simple wind rule — see [Briefing §3.2/§10](index.md) |
| Transition altitude | Not confirmed this pass — verify current chart 🟧 |
| Take-off minima | Not published; verify current chart 🟧 |
| CTOT / flow regime | IATA Level 3 slot-coordinated; CAAC ATFM (CTOT/MINIT-style) expected — see the [Asia airspace brief](../../../../airspace/asia.md) §6 🟧 |
| De-icing on departure | **NIL** — subtropical climate, no winter freezing season |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From Terminal 2 or Terminal 3, Ground/Apron routes toward the ATC-assigned departure runway among the five available; confirm the exact taxi with Apron/Ground on the day given the field's dynamic runway-allocation strategy (Briefing §3.2/§10).
- **Hot spots / tight taxiways:** 🟥 The **RWY 02R/20L ILS protected area**, which overlaps part of the **Terminal 3 taxiway system**, and a similar effect on **RWY 01L/19R's southern ILS** — both materially lengthen the taxi distance for departures from Terminal 3 and increase landing separation when either runway is used for simultaneous landing and take-off (see [Briefing §3.2/§13](index.md)). Expect longer-than-nominal taxi times and possible holding short of the runway-protected area during these periods.
- **Runway crossings / read-back-required points:** Given the five-runway, near-parallel-plus-angled-runway layout, expect explicit crossing/hold-short instructions at inter-runway taxiway junctions; confirm exact points with Ground on the day. 🟧
- **Low-vis taxi caveats:** Not confirmed in reachable sources; the field's episodic late-winter/early-spring fog potential (Briefing §14) is the plausible driver where low-vis taxi procedures would apply. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** No fixed preferential runway — CAAC's Middle-South Regional Air Traffic Management Bureau (MS-ATMB) dynamically allocates the active runway set across the five-runway field. The four near-parallel runways (01L/19R, 01R/19L, 02L/20R, 02R/20L) run roughly 013–017°/193–197° true, so the "01x" set is used when operating northbound and the "19x/20x" set when operating southbound, consistent with the region's monsoon-driven wind reversal (broadly southerly in the summer wet season, northerly in the winter dry season) — this is a **regional-climatology inference, not an ZGGG-specific sourced wind rule**. 🟧
- **By departure direction:** The fifth runway (03/21) is separately aligned from the four-runway near-parallel set and sits on the airport's eastern side near Terminal 3 — its specific role in the "three take-off / three landing" mixed mode is not detailed in reachable sources beyond the general mode description (Briefing §3.2). 🟧
- **Noise / preferential-runway program:** Not confirmed in reachable sources. 🟧
- **Interaction with arrivals:** The dynamic mixed-mode operation (three take-off / three landing across five runways) means departure and arrival runway assignment interact continuously — expect ATC to reassign which runways serve which role based on real-time traffic demand rather than a static split.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | All five runways | China mandates RNP 1 terminal (SID/STAR) procedures fleet-wide across its continental FIRs — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md); runway-specific gradient not confirmed | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (ICAO norm) assumed — confirm current chart. 🟧
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Published per SID — not confirmed this pass; verify current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Pearl River Delta plain — no significant close-in terrain or obstacle identified for any of the five runways. 🟩
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass; the field's episodic late-winter/early-spring fog potential (Briefing §14) is the plausible driver — verify current chart. 🟧
- **De-icing:** **NIL** — not a relevant consideration at this subtropical field. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md) for network fields where it applies.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Baiyun Delivery **121.95** (hours not confirmed). 🟧
- **Frequency sequence:** **Delivery 121.95 → Ground/Apron 121.60/121.75/121.77/121.82/121.85/121.97 → Tower 118.10/118.25/118.80/118.87/130.00 → Guangzhou Approach/Departure 119.60/119.70/120.40/121.05/121.17/124.20/126.35/126.55/127.75.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8; cross-checked tier-4 navdata, not AIRAC-verified — 🟧.)
- **CTOT / slot handling:** **IATA Level 3 slot-coordinated**; CAAC ATFM (CTOT/MINIT-style flow control) expected, compounded by the field's own dynamic runway-allocation strategy. Comply with any assigned CTOT/EDCT-equivalent. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** The 3,800 m main pair (02L/20R, 02R/20L) and the 4E-code 3,400 m runway (01L/19R) are non-limiting for any K Global type. The 3,600 m runways (01R/19L, 03/21) are likewise ample. 🟩
- **Density altitude / temperature:** Non-issue at 50 ft AMSL — no hot-and-high penalty; the field's real performance/reliability drivers are traffic congestion and seasonal weather, not density altitude (Briefing §1).
- **Contamination / wet-runway:** Monsoon/typhoon-season heavy rainfall is the relevant seasonal consideration (§14) — no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at ZGGG.

---

## 10. Gotchas

- **No single fixed departure runway** — the five-runway field runs a dynamically-allocated mixed mode; confirm the assigned runway with ATC rather than assuming a default.
- **RWY 02R/20L and RWY 01L/19R's ILS-protected-area interactions with the Terminal 3 taxiway system** can materially lengthen taxi-out time from Terminal 3 — build schedule buffer when departing from that terminal during simultaneous-operations periods.
- **Typhoon season (~May–Nov, peak Jul–Sep)** can suspend departures with limited notice — monitor tropical-cyclone advisories closely and carry schedule/fuel contingency in season.
- **The fifth runway (03/21) is separately aligned from the four near-parallel N–S runways** — do not assume it shares the same taxi/hot-spot picture as the older runway set.
- **No curfew exists at this field** — unlike several other network destinations, a late departure is not a movement-restriction risk here, though CAAC ATFM/flow measures can still apply.
- **SID names, take-off minima and transition altitude are not confirmed in this build** — pull the live current-AIRAC procedure set before flight; do not brief from this file alone.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima and transition altitude exact figures.
- Start-up/push-back procedure detail (cross-bleed/APU notification).
- NADP preference / noise-abatement departure procedure.
- LVTO RVR minima and low-vis taxi/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- Exact current runway-to-frequency mapping following the Oct 2025 fifth-runway commissioning.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. RWY 02R/20L and 01L/19R protected-area status and the ongoing five-runway operational-mode transition), CTOT/ATFM, current tropical-cyclone advisory. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- ICAO APAC — ATM/SG/13 – WP/18, "Preparation for ATC Operation of the Fifth Runway at Guangzhou Baiyun International Airport" — https://www.icao.int/sites/default/files/APAC/Meetings/2025/2025%20ATMSG13/03-Working%20Papers/WP18%20Preparation%20for%20ATC%20Operation%20of%20the%20Fifth%20Runway%20at%20Guangzhou%20Baiyun%20International%20Airport.pdf (retrieved 2026-07-26). *Runway-allocation strategy, ILS-protected-area/taxiway interaction, five-runway mixed-mode operation.*
- Flight Plan Database — ZGGG — https://flightplandatabase.com/airport/ZGGG (retrieved 2026-07-26). *Pre-expansion ATC frequency/runway-heading cross-check.*
- SkyVector — ZGGG — https://skyvector.com/airport/ZGGG/Guangzhou-Baiyun-Airport (retrieved 2026-07-26). *Frequency/runway cross-check.*
- Simple Flying — "Guangzhou Airport's New 4 Runway Operations: What To Know" — https://simpleflying.com/guangzhou-airport-new-4-runway-operations/ (retrieved 2026-07-26). *Fourth-runway 4E-code/747-A380 capability.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP China (public cross-check where gated); K Global fields from live VAMSYS; 4-page pack. |
