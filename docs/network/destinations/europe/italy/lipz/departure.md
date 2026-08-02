# LIPZ — Venice/Tessera (Marco Polo) · Departure Page

**LIPZ / VCE** · Tessera, Venice, Veneto, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Italia (ENAV)-derived, cross-checked

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LIPZ Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **04R or 22L** (the active direction of the main runway pair), selected by ATC while tailwind component ≤10 kt |
| Config logic | Wind-driven selection of the 04R/22L active direction; **RWY 04L/22R is not used concurrently** and is reserved for maintenance/contingency on the main pair |
| Transition altitude | **6,000 ft** |
| Take-off minima | Not confirmed in reachable sources — verify current chart 🟧 |
| CTOT / flow regime | Slot-coordination level not confirmed 🟧 |
| De-icing on departure | Availability/season not confirmed in reachable sources 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Confirm exact taxi routing with Ground on the day. When RWY 04R/22L is the active runway, **RWY 04L/22R is itself used as taxiway "T"** for ground movement between stands and the active runway.
- **Hot spots / tight taxiways:** 🟥 Taxiway **Y** is restricted to Aeronavali (MRO) traffic only; taxiways **KA** and **KB** are restricted to Polizia di Stato and Vigili del Fuoco/Guardia di Finanza respectively — do not expect routine commercial taxi clearance through these.
- **Runway crossings / read-back-required points:** Not individually confirmed in reachable sources; expect explicit crossing instructions given the dual-use of RWY 04L/22R as a taxiway during 04R/22L operations. 🟧
- **Low-vis taxi caveats:** 🟧 A dedicated **Low Visibility Procedures taxi-route chart** for RWY 04L/22R was published in late 2024, and airfield works implementing further new low-visibility taxi routings were in progress through 2026–2027 at last check — verify current NOTAM/chart status before relying on a specific low-vis taxi routing.

---

## 3. Runway / SID selection logic

- **By wind / config:** RWY 04R/22L is the active preferential pair; ATC selects the 04R or 22L direction based on wind, provided the tailwind component does not exceed 10 kt. RWY 04L/22R is not used concurrently with the main pair.
- **By departure direction:** Departure fix (AKADO, CHI, ROSKA, ROKIB, VIC) selection is ATC/routing-dependent rather than a fixed geographic split — verify assigned SID.
- **Noise / preferential-runway program:** No LIPZ-specific NADP or preferential noise-routing procedure confirmed for scheduled-carrier departures in reachable sources. 🟧 A general single-engine-taxi recommendation applies where practicable, with four-engine (Code F) aircraft required to shut down/idle outboard engines on the apron.
- **Interaction with arrivals:** The field operates functionally as a single active runway pair — departures and arrivals share RWY 04R/22L, with runway-occupancy vacate points (§9) enforced to protect the following approach.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| AKADO / CHI / ROSKA / ROKIB (RNAV1) | 04R/L | Up to **515 ft/NM (8.5%)** on the steepest variant, tapering to 455 ft/NM (7.5%) on others 🟧 | Multiple RNAV/conventional suffix variants per fix — verify current-AIRAC index |
| VIC (RNAV1 and conventional) | 04R/L | 455–515 ft/NM (7.5–8.5%) depending on variant 🟧 | Some variants restricted "may be authorised only if heavy military traffic doesn't exist within Treviso CTR" — verify current chart |
| CHI / ROSKA / ROKIB / VIC (RNAV1 and conventional) | 22R/L | **425–455 ft/NM (7.0–7.5%)** depending on variant 🟧 | Verify current-AIRAC index |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Initial turn after take-off (where published) is flown at IAS not exceeding 200–250 kt with a bank angle of 20–25° or a 2°/s rate of turn, whichever requires the lesser bank — verify the exact parameter for the assigned SID on the current chart.
- **Noise-abatement departure procedure (NADP):** No LIPZ-specific NADP confirmed for scheduled-carrier operations in reachable sources. 🟧
- **Early turn / altitude constraints:** Multiple SID families carry an initial runway-heading/radial-tracking segment to a defined turn point before joining the terminal-fix routing — verify the specific constraint per assigned SID on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat lagoon-edge terrain — no significant close-in high ground. A temporary multi-crane obstacle penetrating the Inner Horizontal Surface was notified for the 2026–2027 period several kilometres from the field — verify current NOTAM status rather than treating this brief as the record of it.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** **LVTO is approved for RWY 04R only**, down to an aerodrome operating minimum of **RVR 75 m**; LVP activate on RVR ≤550 m and/or cloud base <200 ft (or a rapid deterioration trend). **No LVTO capability is confirmed for RWY 22L, 04L or 22R** — a low-visibility departure requirement when the active direction is anything other than 04R is a real operational constraint, not merely a paperwork gap. 🟥
- **De-icing:** Availability/season/pad location not confirmed in reachable sources. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Venezia Delivery **118.255 MHz**, at ATC discretion; availability announced via ATIS or on 131.480 MHz ("Aerodrome Operations"). Local practice is to request departure clearance ahead of start-up. 🟧
- **Frequency sequence:** **Delivery 118.255 (ATC discretion) → Ground 121.705/118.255 → Tower 120.200 (H24)/118.255 (ATC discretion) → Padova Radar 118.900/120.725** (sector-specific). Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** Slot-coordination level and CTOT/flow-control specifics for LIPZ not confirmed in reachable sources. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 04R/22L (3,300 m) is non-limiting for any K Global type. **RWY 04L/22R is shorter (≈2,780 m, displaced threshold) and is not routinely available** — never plan a departure from it as a matter of course; it exists for maintenance/contingency on the main pair. Runway-occupancy discipline requires a departing aircraft to commence its take-off run immediately after clearance, consistent with the field's functionally single-runway model.
- **Density altitude / temperature:** Non-issue at 7 ft elevation, temperate maritime climate — no hot-and-high penalty.
- **Contamination / wet-runway:** De-icing/contamination data not confirmed for this pass (§7) — treat winter operations as carrying an unquantified braking-action risk pending confirmation.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty expected for any K Global type on the main runway pair at LIPZ.

---

## 10. Gotchas

- **RWY 04L/22R is a backup/contingency-only runway** that doubles as taxiway "T" when the main pair is active — never plan on it as a routinely available second runway, and never assume it carries the same LVTO/CAT III capability as RWY 04R.
- **LVTO exists on RWY 04R only** — a low-visibility departure requirement on any other runway/direction is a real constraint, not a formality.
- **Taxiways Y, KA and KB carry hard traffic-type restrictions** (Aeronavali/Polizia di Stato/Vigili del Fuoco-Guardia di Finanza) — do not expect a routine commercial-taxi clearance through them.
- **Runway-occupancy discipline is actively enforced** on this functionally single-runway field — pre-flight checks should be complete before line-up, and the take-off run should commence immediately on clearance.
- **Approach/area control moved from a dedicated Venezia APP to Padova ACC in Dec 2023** — brief the current Padova Radar frequencies rather than an outdated "Venezia Radar" expectation.
- **Airfield low-visibility taxi-route construction works were in progress through 2026–2027** at last check — verify current NOTAM status for any affected taxi routing before relying on a specific low-vis path.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Take-off minima and exact SID climb-gradient/RNP requirements per fix/suffix variant.
- CTOT/slot-coordination specifics for LIPZ.
- De-icing pad location, season and provisioning.
- EOSID/engine-out procedure detail per runway.
- Current status of the multi-crane obstacle supplement and the low-visibility taxi-route construction works (both current at last check, validity windows extending into 2026–2027).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. active-runway-configuration and LVP/CAT III status), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- Aeronautical Information (Fabio Patrassi) — "Procedure strumentali di Venezia Tessera" — https://aeronauticalinformation.it/index.php/2022/10/20/procedure-strumentali-di-venezia-tessera/ (retrieved 2026-07-26). *SID names, terminal fixes, climb gradients — quotes current AIP text with AIRAC amendment references.*
- Aeronautical Information (Fabio Patrassi) — "Aeroporti di Venezia Tessera e Venezia Lido" — https://aeronauticalinformation.it/index.php/2022/10/05/aeroporti-di-venezia-tessera-e-venezia-lido/ (retrieved 2026-07-26). *Preferential-runway/intersection take-off rules, runway-occupancy discipline, taxiway restrictions, LVP construction works, single-engine taxi/APU recommendation — quotes current AIP text with AIRAC amendment references.*
- POSCON Pilot Resources — "LIPZ / VCE - Tessera" — https://forums.poscon.net/docs/pilots/eur/ita/lipz/ (retrieved 2026-07-26). *Network-sim operational reference — LVTO/CAT III confirmation, departure-clearance timing, runway-occupancy practice. Not regulatory.*
- IVAO Italy QuickOverview — "LIPZ" — https://quickoverview.ivao.it/aerodrome/show/LIPZ (retrieved 2026-07-26). *SID list cross-check, TA. Network-sim reference, not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
