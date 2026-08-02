# LFST — Strasbourg Entzheim · Departure Page

**LFST / SXB** · Strasbourg (Entzheim), Bas-Rhin, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LFST Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **05 or 23** — wind/ATC-determined; no published preferential-runway rule found |
| Config logic | Not explicitly published as a wind rule; RWY 23's CAT II/III capability makes it the field's LVP runway, but runway-in-use for departure is wind/ATC-determined 🟧 |
| Transition altitude | **7,000 ft AMSL (fixed)** |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | Not confirmed — treat as uncoordinated/Level 1 pending confirmation; general EUROCONTROL ATFM/CTOT practice may apply on the day 🟧 |
| De-icing on departure | Available — provided per AD 2; pad location/procedure not detailed in the source data 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify — confirm the exact taxi with Ground/Tower on the day. 🟧 Aircraft with wingspan > 36 m must taxi via **TWY K (Apron A)** or **TWY N (Apron B)** en route to either runway threshold, except VIP State flights using stand A52 with FOLLOW-ME.
- **Hot spots / tight taxiways:** 🟥 **TWY F and G are closed to aircraft with wingspan > 52 m; TWY M and Q are closed to wingspan > 36 m; TWY Q is additionally restricted to landing-gear track width < 9 m.** The service road between stands A28 and B1 cannot be used to bypass **TWY P3**. Stop bars are controllable at TWY E and H, permanent at TWY F and G.
- **Runway crossings / read-back-required points:** Not individually detailed in the source extract beyond the taxiway restrictions above — expect explicit crossing/hold-short instructions at the wingspan-restricted junctions. 🟧
- **Low-vis taxi caveats:** 🟧 **TWY F and G close automatically whenever LVP is in progress** (RVR ≤ 800 m or ceiling ≤ 200 ft); in LVP, TWY P, E, H, K, M, N carry centreline lighting and remain usable. Follow-me availability beyond the VIP State-flight case is not confirmed.

---

## 3. Runway / SID selection logic

- **By wind / config:** No published preferential-runway rule was found — runway-in-use for departure is wind/ATC-determined between RWY 05 and RWY 23. Confirm ATIS.
- **By departure direction:** Not published / verify — no directional preference beyond the wind-determined runway choice was found in the source extract. 🟧
- **Noise / preferential-runway program:** No named NAP departure track was found; the **omnidirectional departure climb-gradient procedures** (§4/§5) are the governing departure-performance constraint rather than a lateral noise-routing SID.
- **Interaction with arrivals:** Not individually detailed — a single runway pair (05/23) is used for both arrivals and departures; sequencing is ATC-managed.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| RNAV SID RWY05 (generic — exact chart ident not confirmed) 🟧 | 05 | Omnidirectional departure: climb runway heading at **3.8%** to 1,500 ft (1,009 ft AAL), then direct routing climbing at 3.8% to en-route safe altitude; gradient driven by a 4,374 ft tower, bearing 079° from ARP, 23 NM out. Crossing LF-R199 Neuhof (when active) with a 500 ft margin requires a **13.4%** ATS climb slope to 5,000 ft. | Verify current AIRAC for the actual published SID name/gradient table |
| RNAV SID RWY23 (generic — exact chart ident not confirmed) 🟧 | 23 | Omnidirectional departure: climb runway heading at **5.2%** to 1,500 ft (1,009 ft AAL), then direct routing climbing at 5.2%; gradient driven by 2,799 ft terrain, bearing 230° from ARP, 11.2 NM out. Crossing LF-R199 Neuhof (when active) with a 500 ft margin requires a **10.3%** ATS climb slope to 5,000 ft. | Verify current AIRAC for the actual published SID name/gradient table |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per the omnidirectional departure procedure for the assigned runway (§4); 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** No named NADP1/2 preference found in the source data; the omnidirectional departure's climb-gradient requirement (3.8% RWY05 / 5.2% RWY23) is the operative departure-performance constraint. 🟧
- **Early turn / altitude constraints:** Climb runway heading to 1,500 ft (1,009 ft AAL) before any turn on either runway's omnidirectional departure, then direct routing at the stated gradient to en-route safe altitude — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics found in the source extract — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Alsace plain close-in — no significant close-in terrain. The governing obstacles are **distant**: a 4,374 ft tower bearing 079° from ARP, 23 NM out (drives the RWY05 3.8% gradient), and 2,799 ft terrain bearing 230° from ARP, 11.2 NM out (drives the RWY23 5.2% gradient). The **LF-R199 Neuhof danger area**, when active, additionally requires a steeper ATS climb slope (13.4% off RWY05 / 10.3% off RWY23) to maintain a 500 ft crossing margin — a real departure-performance watch item, cross-ref [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** Not confirmed beyond the omnidirectional departure procedures above — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies only to **RWY 23** (ILS CAT II/III), triggered at **RVR ≤ 800 m or ceiling ≤ 200 ft**. **Takeoff on RWY 23 is permitted with 75 m < RVR < 150 m.** LVP ends when RVR > 800 m and ceiling > 200 ft and improving. 🟥
- **De-icing:** Provided per the AD 2 extract; specific pad location/procedure not detailed in the source data. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No dedicated Delivery frequency found in the source extract — confirm via Strasbourg Approche/Tower on initial contact. 🟧
- **Frequency sequence:** **Ground 121.805 (H24) → Tower 119.250 (H24) → Strasbourg Approche 118.185 (aux) / 119.580 (Sector East) / 120.410 (Sector West) / 132.215 (above FL115, Sector SU) / 133.100 (aux) / 134.575 (below FL115, Sector SC).** Take the assigned sector frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **CTOT / slot handling:** Not confirmed for LFST — treat as uncoordinated/Level 1 pending confirmation; general EUROCONTROL ATFM/CTOT practice may apply per routing/flow conditions on the day. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 05/23 (2,400 m) is non-limiting for narrowbody/regional-jet operation but would be a real constraint for any widebody long-haul type — this field is sized for the network's narrowbody segment. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) for general guidance.
- **Density altitude / temperature:** Non-issue at 505 ft, temperate continental climate — no hot-and-high penalty.
- **Contamination / wet-runway:** De-icing is provided; season/provisioning detail not confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-elevation performance penalty for any narrowbody type at LFST; the operative departure watch-item is the LF-R199 Neuhof crossing-gradient requirement, not runway length.

---

## 10. Gotchas

- **RWY 23 is the only runway with CAT II/III capability and the only runway used for LVP** — RWY 05 has basic (non-precision-category) approach lighting only.
- **The LF-R199 Neuhof danger area, when active, forces a steep climb-gradient departure** (13.4% off RWY05 / 10.3% off RWY23 to 5,000 ft) to maintain the required 500 ft crossing margin — brief this before a departure toward that sector.
- **TWY F and G close automatically whenever LVP is in progress** — plan an alternate ground route if departing during a CAT III event on RWY 23.
- **Wingspan/gear-track taxiway restrictions** (TWY F/G > 52 m, TWY M/Q > 36 m, TWY Q gear-track < 9 m) can constrain the assigned taxi route — confirm before accepting a routing that would cross a restricted taxiway.
- **The hard noise curfew (2230/2300–0500) is unforgiving** — a delayed departure risks being pushed past the takeoff-ban threshold, and the EPNdB-gated exception process is discretionary, not automatic; build buffer into the last rotation of the day.
- **Engine-testing and APU-use windows are tightly restricted** (testing prohibited 2100/2200–0500/0400; APU limited to 60 min pre-departure) — plan ground procedures accordingly.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and exact gradient/RNP specifics per runway (only the generic "omnidirectional departure" gradient figures are confirmed).
- Take-off minima table figures.
- Clearance delivery frequency/procedure (not separately identified from Approach/Tower in the source extract).
- Preferential-runway/wind-based selection logic.
- EOSID/engine-out procedure detail per runway.
- LVTO RVR minima beyond the 75–150 m RWY23 takeoff band already confirmed.
- CTOT/ATFM specifics and slot-coordination level for LFST.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. TWY F/G status and LF-R199 Neuhof activity), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP — AD 2 LFST**, eff. 14 MAY 2026, AIRAC 09 JUL 2026 (retrieved 2026-07-26) — https://www.sia.aviation-civile.gouv.fr/. *Runway/declared distances, omnidirectional departure procedures, LVP triggers, communications, taxiway restrictions.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
