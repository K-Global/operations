# OJAI — Queen Alia Intl · Departure Page

**OJAI / AMM** · Zizya, Amman, Jordan · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [OJAI Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **26L / 26R** reported preferred when winds are calm 🟧 (network-sim cross-check, not an AIP-published rule) |
| Config logic | Wind-dependent; no AIP-published preferential-runway rule found |
| Transition altitude | **13,000 ft AMSL** `[CARC AIP AD 2 OJAI 2.17]` |
| Take-off minima | Published per AIP chart set; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | None identified — treat as uncoordinated pending confirmation 🟧 |
| De-icing on departure | Available H24 — Cargo Apron TWY J/E, Kilfrost ABC-3 fluid |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Taxi routing is runway/apron-specific per the AIP local traffic regulation table (AD 2.20) — e.g. a South Apron (west side) departure on 26L routes east via Taxiways S→G→A or E→A; a North Apron departure on 08R routes east via N→F→A or J→H→F→A. Confirm the exact routing with Ground on the day.
- **Hot spots / tight taxiways:** 🟧 Pilots are specifically cautioned re: **Taxiways F and G** ahead of intersections with service roads (AIP remark, both aprons).
- **Runway crossings / read-back-required points:** No back-track on the runway is permitted (AIP local traffic regulation) — expect a full-length taxi to the threshold via the assigned route.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing applies consistent with the field's CAT II environment; follow-me availability for low-vis ops not confirmed beyond the Code F mandate (§9 Ground ops). 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** No AIP-published preferential-runway rule was found; 26L/26R is reported preferred in calm-wind conditions per a network-sim cross-check only. 🟧
- **By departure direction:** Reported initial-climb altitudes by direction (network-sim cross-check, not AIP-sourced): northbound 13,000 ft, southbound FL150, eastbound FL150 (or 6,000 ft off 26R/08L), westbound 12,000 ft. 🟧 Verify against the current AIRAC SID chart before use — these are general planning figures, not a substitute for the charted procedure.
- **Noise / preferential-runway program:** **NIL** — no noise abatement procedure published (AIP AD 2.21).
- **Interaction with arrivals:** The mandatory 5 NM landing-interval rule on 26L/08L (Briefing §3.3) is the main arrival-interaction item; otherwise no unusual dependent-runway configuration is documented for this field's two-parallel-pair layout.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| GENEX, KULDI, KIPAS, KINUR, LOSAR, LOSIL, LUDAN, MOUAB, MUNRA, QTR, QTR01 🟧 | 08L / 08R / 26L / 26R | RNAV (GNSS) SID charts are confirmed to exist per runway end (AIP AD 2.24 chart index); gradient/equipage not confirmed this pass | Fix names sourced to VATSIM Jordan vACC cross-check, not the primary AIP text — pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (ICAO norm) — confirm current chart. Reported planning-level initial climb altitudes by direction are in §3 above (network-sim sourced, not AIP-confirmed). 🟧
- **Noise-abatement departure procedure (NADP):** **NIL** — no NADP/noise abatement procedure published.
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** AIP obstacle table (AD 2.10) lists poles around 78 m AGL on the 08L/26R approach/take-off surface and a telecommunications tower (805 m elevation, ~6.7 km from the 08R/26L threshold, bearing 252°M) — no significant close-in obstacle penalty identified for a normal departure.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies consistent with the field's confirmed CAT II environment on 08L/26L/26R; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** Available H24 at the **Cargo Apron, Taxiways J and E**; fluid **Kilfrost ABC-3** (Type II, ISO 11078/AMS 1428). Location may be changed by the airport operator per operational coordination — confirm on the day. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md) for general cold-weather/fluid-planning cross-reference.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** No dedicated Delivery frequency confirmed separate from Ground/Tower in the reachable AIP — confirm current chart. 🟧
- **Frequency sequence:** **Queen Alia Ground 121.900 → Queen Alia Tower 119.8 → Amman Approach 128.9 → Amman Control (OJAC) 128.500 🟧.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No slot-coordination or CTOT regime identified for OJAI in reachable sources. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,660 m on all four runway ends is non-limiting for any K Global type.
- **Density altitude / temperature:** Moderately elevated field (2,397 ft) with a hot, dry summer climate (AIP reference temperature 31.5°C) — a mild density-altitude effect on hot days, not a hot-and-high performance limit. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-specific figures if planning a max-weight summer departure.
- **Contamination / wet-runway:** Arid climate; occasional winter rain and rare light snow at this elevation are the only contamination considerations, and are not routine. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length performance penalty for any K Global type at OJAI.

---

## 10. Gotchas

- **08R has no ILS** — never expect a precision approach on this runway end (relevant if a same-runway departure/arrival swap is discussed).
- **Code F ground movement is taxiway-restricted** — North Apron via Taxiway Juliet (stand N26) only, South Apron via Taxiway Sierra (stand S30) only, with mandatory follow-me and outer-engine minimum-power taxiing.
- **No back-track on the runway** is permitted per the AIP local traffic regulation — plan the full taxi-in to the threshold.
- **Extra caution at Taxiways F and G** where they intersect service roads (explicit AIP remark).
- **CAT II, not CAT III** — do not assume autoland/CAT III minima are available; verify current AIRAC.
- **No AIP-published preferential-runway or NADP rule** — config/runway assignment is ATC/wind-driven on the day; do not assume the reported calm-wind 26-configuration without confirming with ATC/ATIS.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / exact figures.
- Clearance-delivery frequency (not separately confirmed from Ground/Tower).
- Slot/CTOT regime confirmation.
- EOSID/engine-out procedure detail per runway.
- Preferential-runway/config logic — confirm whether an AIP-published rule exists beyond the network-sim cross-check.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status, current regional conflict-zone/GNSS-interference advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Jordan CARC AIP, AD 2 OJAI** (AIRAC AMDT 13/2016, amended through AMDT 84/2017) — runway/taxi routing, obstacle data, chart index, communications — https://carc.gov.jo/images/AIS/AerodromesAD/AD2_OJAI.pdf (retrieved 2026-07-26).
- VATSIM Jordan vACC — "Pilot Briefing: Queen Alia Intl. Airport [OJAI]" (2024) — https://jordan.vatsim.me/wp-content/uploads/2024/02/jovacc-ojai-briefing-2024.pdf (retrieved 2026-07-26). *Network-sim document — SID fix names/initial-climb cross-check only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
