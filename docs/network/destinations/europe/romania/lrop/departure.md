# LROP — Henri Coandă · Departure Page

**LROP / OTP** · Otopeni, near Bucharest, Romania · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LROP Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 08** (default/preferred) — 08L or 08R per ATC assignment |
| Config logic | RWY 08 preferred (short taxi, main flow); config change to 26 expected only with a meaningful tailwind on 08 |
| Transition altitude | Not published — verify current chart 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Not confirmed — no slot-coordination evidence found; standard EU ATFM practice may apply 🟧 |
| De-icing on departure | Available on stand/taxiway; season not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the main apron, Ground/Apron routes toward the assigned runway (08L or 08R) via the high-speed taxiways "Oscar"/"Victor" where applicable; confirm the exact taxi with Apron/Ground on the day.
- **Hot spots / tight taxiways:** 🟥 **Code ≥4D aircraft (wingspan >52 m) may only vacate RWY 08R via TWY D**, or must wait for towing with engines 1 & 4 shut down — this affects the return taxi-in for a widebody-class aircraft that departed or is routing near RWY 08R. **TWY V and TWY W are exit-only** — never expect a takeoff clearance via either.
- **Runway crossings / read-back-required points:** Expect explicit crossing/hold-short instructions between the parallel runway pair during simultaneous operations.
- **Low-vis taxi caveats:** Follow-me car guidance is used during LVP — expect ATC to instruct pilots to follow it in low-visibility conditions. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** RWY 08 is the default/preferred configuration (short taxi distance, main traffic flow from the west apron); RWY 26 is used when the tailwind component on 08 becomes significant (roughly beyond 6–7 kt per a network-sim operational cross-check). 🟧
- **By departure direction:** Not independently confirmed beyond the wind-driven 08/26 logic above.
- **Noise / preferential-runway program:** **All jet aircraft must use the full runway length for takeoff** — intersection departures are permitted only at ATC discretion or specific pilot request.
- **Interaction with arrivals:** The parallel-runway pair (08L/26R, 08R/26L) supports simultaneous arrival/departure streams; expect coordinated runway assignment between the pair during busy periods.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 08L / 08R / 26L / 26R | Not confirmed — verify RNP/gradient on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** No specific NADP1/2 preference identified; the standing noise-abatement measure is the **full-length-only takeoff rule for all jets**. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify on current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Wallachian Plain — no significant close-in terrain identified. No specific obstacle departure procedure found in reachable sources. 🟧
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVTO is available on RWY 26L/26R per a network-sim operational cross-check; specific RVR minima not confirmed this pass. 🟧
- **De-icing:** Available on stand / taxiway per local practice; specific pad locations, fluid type and season not confirmed. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Otopeni Clearance Delivery **121.955** (H24 assumed) — an older-cycle value of 121.70 also appears in cross-check data. 🟧
- **Frequency sequence:** **Delivery 121.955 → Ground 121.855 → Tower 118.805 (or 120.90 alternate) → Bucharest Approach 119.415 (sector-specific alternates reported).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No confirmed slot-coordination regime; comply with any assigned CTOT/EDCT-equivalent if issued under general EU ATFM practice. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,500 m on either runway is non-limiting for any K Global type.
- **Density altitude / temperature:** Non-issue at 314 ft, temperate-continental climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow/icing is the relevant seasonal consideration; no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at LROP.

---

## 10. Gotchas

- **Code ≥4D aircraft can only vacate RWY 08R via TWY D**, or must wait for towing with engines 1 & 4 shut down — a real widebody-class constraint.
- **TWY V and TWY W are exit-only** — never expect or accept a takeoff clearance from either.
- **Full-length takeoff is mandatory for all jets** — do not assume an intersection departure will be offered.
- **RWY 08 is the default configuration** — a change to 26 signals a meaningful tailwind shift; watch the ATIS wind trend.
- Frequencies and procedures here are drawn from a mix of a 2016 AIP chart cycle and network-sim cross-checks — treat exact current values as needing a live-AIRAC confirmation.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / transition altitude exact figures.
- Start-up/push-back procedure detail.
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- Slot-coordination level (if any) and CTOT/ATFM specifics for LROP.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Romania (ROMATSA / AIS Romania), AD 2.5-40 Visual Approach Chart — LROP**, eff. 2016-02-04 — https://www.aisro.ro/files/harti/LR_AD_2_LROP_5-40_en.pdf (retrieved 2026-07-26). *ATC frequencies, TMA/CTR structure.*
- VATSIM Romania vACC — LROP airport operational documentation — https://docs.rovacc.ro/airports/LROP.html (retrieved 2026-07-26). *Runway/config selection logic, ground-ops rules, LVTO note — network-sim, not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Romania (ROMATSA); K Global fields from live VAMSYS; 4-page pack. |
