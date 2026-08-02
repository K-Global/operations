# EDDF — Frankfurt/Main · Departure Page

**EDDF / FRA** · Frankfurt am Main, Hesse, Germany · Europe
**Version** v0.2 · **Updated** 2026-07-25 · **Status** Draft — DFS eAIP-derived, K Global home-hub build

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EDDF Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **07C / 07R** in the prevailing south/south-westerly ("07-configuration"); **18** for scheduled southbound-only departures |
| Config logic | Prevailing wind south/south-westerly favours the 07-config; RWY 18 is takeoff-only regardless of config, dedicated to southbound departures |
| Transition altitude | 5,000 ft MSL — verify no local override on current chart 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Slot-coordinated Level 3 (FHKD); EUROCONTROL ATFM/CTOT expected in peak/adverse conditions 🟧 |
| De-icing on departure | Available — dedicated remote pads DP1–DP4, season typ. Oct–Apr |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From T1 "A-Plus"/Concourse C or T3, Ground/Apron routes toward the assigned departure runway (07C/07R main pair, or 18 for a southbound-only departure slot); confirm the exact taxi with Apron/Ground on the day.
- **Hot spots / tight taxiways:** 🟥 **TWY N7**, **TWY R15** (between RWY 07R/25L and TWY S), the **RWY 18/TWY Y turnaround area**, and the zones between **RWY 07C/25C–TWY L** and **RWY 07R/25L–TWY M** — all AIP-flagged for special centreline lighting, indicating recognised complex/caution ground junctions. Expect extra workload here when RWY 18 is running a departure bank alongside continuous parallel-runway traffic.
- **Runway crossings / read-back-required points:** A departure routed to RWY 18 or crossing between the parallel runways should expect explicit crossing/hold-short instructions at the AIP-flagged junctions above.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing applies in winter fog/inversion conditions consistent with the field's CAT III environment; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Prevailing south/south-westerly wind drives the **07-configuration** (arrivals/departures oriented into the wind on 07L/07C/07R); the reciprocal 25-configuration is used when wind dictates.
- **By departure direction:** Southbound departures are specifically routed via **RWY 18** (takeoff-only) — the AIP/operational reasons include the prevailing wind not favouring a northbound "36" direction, building obstacles at the runway's north end, and avoiding low-altitude overflight of Kelsterbach.
- **Noise / preferential-runway program:** Default departure routing for all aircraft **except two-engine Heavies** is the **"Südumfliegung" (southern bypass)** — an initial left turn south before turning north, avoiding noise-sensitive areas west of the field and conflicts with missed-approach traffic.
- **Interaction with arrivals:** Departures off 07C/07R interact with the continuous 07L (or 25R) arrival stream feeding the landing-only parallel; RWY 18 departures interact with the RWY 18/TWY Y turnaround area and general parallel-runway traffic — see §2.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 07C / 07R / 18 | Frankfurt has at least one RNP departure route per runway (implemented by end-2019) — verify RNP-1/gradient on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Default **"Südumfliegung"** routing (§3) applies for all except two-engine Heavies; Frankfurt has studied NADP1 (cutback 1,500 ft/900 ft acceleration) versus NADP2 variants (NADP 2-10, NADP 2-15) for its residential surroundings — no single mandated fleet-wide NADP confirmed this pass. 🟧
- **Early turn / altitude constraints:** Published per SID (e.g. the Südumfliegung's initial-south-turn structure) — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Rhine-Main basin — no significant close-in terrain. The one notable obstacle consideration is at the **north end of RWY 18**, where buildings constrain a northbound option (part of why RWY 18 is south-departure-only in the first place) — not a factor for the actual south-departure use.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies consistent with the field's winter fog/inversion risk and CAT III infrastructure; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** **DP1/DP2** (west of the RWY 18 threshold, "DPW") used primarily for RWY 18 departures with restricted use for RWY 07 departures; **DP3E/DP3W** at TWY N7; **DP4E/DP4W** at TWY V159/V161, preferred for RWY 25/07 departures. East/west pad halves allow simultaneous de-icing of two aircraft. Season typ. Oct–Apr. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Frankfurt Delivery **121.900** (H24).
- **Frequency sequence:** **Delivery 121.900 → Apron 121.550/121.650/121.750/121.850/121.950 (Fraport Apron Control, push-back) → Ground 121.800 (HX) → Tower 119.900 (H24) / Tower West 124.850 (HX, RWY 18 departures) / 118.775 (H24) → Langen Radar 120.150/136.125/372.850/126.550 or 120.800/125.350/277.800/119.025 (sector-specific).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** **IATA Level 3 slot-coordinated** (FHKD); EUROCONTROL ATFM/CTOT regulation expected in peak/adverse conditions. Comply with any assigned CTOT/EDCT-equivalent. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 07C/07R (4,000 m) is non-limiting for any K Global type; **RWY 18 (3,970 m TORA)** is likewise ample. RWY 07L/25R is **landing-only** and never a departure option — do not plan a takeoff from it.
- **Density altitude / temperature:** Non-issue at 364 ft, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow/de-icing season is the relevant seasonal consideration (§7); no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any home-based type at EDDF.

---

## 10. Gotchas

- **RWY 18 is takeoff-only, southbound departures only** — never expect a northbound departure or any landing use from it.
- **RWY 07L/25R is landing-only** — never assign or expect a departure from this runway.
- **RWY 18's turnaround area and several AIP-flagged taxiway junctions (N7, R15, TWY Y, TWY L, TWY M)** are recognised complex ground points — expect crossing instructions and read-back-heavy handling.
- **Default noise routing is the "Südumfliegung" (southern bypass)** for all except two-engine Heavies — do not assume a straight-ahead departure track.
- **Core night ban 23:00–05:00 is hard** — a late-day departure delay risks being prohibited outright past 23:00 (and outright barred after midnight) — build buffer into the last rotation.
- **De-icing pad assignment is runway-specific** (DP1/DP2 for RWY 18, DP4E/DP4W preferred for RWY 25/07) — confirm the correct pad for the assigned departure runway in winter ops.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Start-up/push-back procedure detail (cross-bleed/APU notification).
- NADP preference (NADP1 vs NADP2 variant) — studied but not confirmed as mandated.
- LVTO RVR minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. RWY 18 turnaround status), CTOT/ATFM, de-icing status/pad assignment. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **DFS AIP Germany, AD 2 EDDF** (2011–2012 cycle extract) — SID/DP index, communications, taxiway-lighting hot-spot remarks — https://silo.tips/download/eddf-ad-21-aerodrome-location-indicator-and-name-eddf-frankfurt-main-eddf-ad-22 (retrieved 2026-07-25).
- Fraport — "Active Noise Abatement" — https://www.fraport.com/en/sustainability/dialog-with-neighbors/noise-and-air/measures/active-noise-abatement.html (retrieved 2026-07-25). *Südumfliegung/NADP/RNP-departure detail.*
- Fraport — Deicing Procedure (DIP) 2024-2025 — https://cdm.frankfurt-airport.com/content/dam/fraport-company-cdm/documents/binary/documents/deicing-procedure/EN-DIP%202024-2025.pdf (retrieved 2026-07-25). *De-icing pad assignment by departure runway.*
- Simple Flying — "Why Frankfurt's Runway 18 Is Only Used For Takeoffs In One Direction" — https://simpleflying.com/frankfurt-runway-18-one-direction/ (retrieved 2026-07-25). *RWY 18 departure-direction logic.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.2 | 2026-07-25 | Built from DFS eAIP; K Global fields from live VAMSYS; folded to 4-page hub pack. |
