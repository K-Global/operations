# GMAD — Al Massira Intl · Departure Page

**GMAD / AGA** · Agadir (Temsia), Souss-Massa, Morocco · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [GMAD Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **27** preferred (equipped/lit runway); **09** reciprocal — wind-driven |
| Config logic | Wind-driven, with an equipment bias toward RWY 27 (only runway carrying ILS/CALVERT lighting) |
| Transition altitude | **5,000 ft** `[AIP AD 2.17]` |
| Take-off minima | Not confirmed this pass — verify current chart 🟧 |
| CTOT / flow regime | Not confirmed either way — no slot/ATFM regime identified in reachable sources 🟧 |
| De-icing on departure | **NIL** — no facility published |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** TWY A/B (40 m wide, concrete) and TWY D/D5 (36 m wide, concrete) are the widest surfaced taxiways on field `[AIP AD 2.8]`, likely the primary movement routes between the apron and the runway. Confirm exact routing with Ground/Tower on the day. 🟧
- **Hot spots / tight taxiways:** 🟥 A **WIG WAG warning-light system** is installed at the **TWY D1/RWY** and **TWY D5/RWY** intersections `[AIP AD 2.9]` — the AIP itself flags these as points requiring an active runway-incursion warning system; treat as genuine hot spots, not routine crossings.
- **Runway crossings / read-back-required points:** The TWY D1/RWY and TWY D5/RWY intersections above — expect explicit crossing clearances.
- **Low-vis taxi caveats:** No SMGCS/low-visibility taxi routing found in the reachable AIP text; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** **RWY 27** is preferred where wind allows — it is the only runway with ILS (CAT II) and CALVERT approach lighting; RWY 09 is PAPI/visual + non-precision only.
- **By departure direction:** Not detailed in the reachable AIP text. Standard practice would route departures either toward the Atlantic (west, RWY 27 departures) or inland (east, RWY 09 departures) — not independently confirmed. 🟧
- **Noise / preferential-runway program:** None published — AIP noise-abatement section (AD 2.21) states NIL.
- **Interaction with arrivals:** Single combined Tower/Approach ATS unit; specific sequencing/dependent-configuration detail not confirmed in reachable sources. 🟧

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed — verify current AIRAC 🟧 | 09/27 | Not confirmed 🟧 | AIP chart index (AD 2.24) confirms published SID chart pages exist (AD 2 GMAD-31-1-1/31-1-2) but does not name them in the reachable text extract |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not confirmed this pass — verify current chart. Standard 250 KIAS below FL100 assumed as regional/ICAO norm, not independently field-confirmed.
- **Noise-abatement departure procedure (NADP):** None published — AIP noise-abatement section (AD 2.21) states NIL. 🟩
- **Early turn / altitude constraints:** Not confirmed — verify current chart, particularly given the RTM broadcast-mast obstacles noted in §6 below. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed as published/field-specific in the reachable AIP extract. 🟧
- **Close-in / distant obstacles:** 🟥 Two **lit broadcast masts (RTM, national broadcaster), ~140.2 m and ~140.6 m AGL**, are listed in the AIP's "in approach/take-off areas" obstacle table for RWY 09/27, roughly 6 NM from the field `[AIP AD 2.10]` — this is the one quantified, sourced obstacle in the departure path and a genuine obstacle-clearance planning item, not a generic caution. Cross-ref [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** Not confirmed — verify current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass — verify current chart. 🟧
- **De-icing:** **NIL** — no facility or equipment published `[AIP AD 2.3/2.4/2.7]`. Non-issue at this field under normal climatic conditions.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately published; **Al Massira Tower** (119.500 primary / 118.000 backup) likely handles delivery/start-up functions at this category-S field — confirm locally. 🟧
- **Frequency sequence:** Tower (119.500/118.000) → Approach (Al Massira Approach, 120.900/118.200) — cross-ref [Briefing §8](index.md). No separate Ground/Delivery frequency was found in the reachable AIP text.
- **CTOT / slot handling:** Not confirmed as slot/ATFM-regulated — flag for verification at planning. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,200 m TORA/TODA/ASDA is non-limiting for narrow/mid-body types at this elevation (253 ft, not hot-and-high).
- **Density altitude / temperature:** Reference temperature **32°C** (August) is a real warm-day performance input for WAT-limited planning despite the low field elevation.
- **Contamination / wet-runway:** No snow/ice season — seasonal clearing equipment is published as NIL. Rain-driven wet-runway braking-action would be the only seasonal contamination factor and is not independently quantified this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-specific field-length margin.

---

## 10. Gotchas

- **RWY 09 has no ILS or approach lighting** — a departure/config day favouring 09 is a lower-capability day; RWY 27 is the only equipped runway.
- **WIG WAG-protected TWY D1/RWY and TWY D5/RWY intersections** are active runway-incursion-prevention hot spots, not routine crossings — expect explicit clearances.
- **No de-icing facility exists on field** — a rare cold-weather event would leave zero on-field mitigation.
- **Two ~140 m/459 ft AGL lit broadcast masts sit under the RWY 09/27 approach/departure surface ~6 NM out** — respect charted obstacle clearance; don't assume a flat coastal field is obstacle-free.
- Aircraft **without radio-communication equipment are barred from the airport entirely** `[AIP AD 2.20]` — a reminder this is a fully radio-mandatory IFR field.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID names, climb-gradient/RNP requirements, take-off minima, LVTO minima — not confirmed in the reachable AIP text extract.
- Engine-out / emergency-turn procedure and any special obstacle DP — not confirmed.
- Departure-direction preference and dependent-configuration interaction with arrivals — not confirmed.
- Clearance-delivery frequency/procedure — assumed combined with Tower, not independently confirmed.
- CTOT/ATFM applicability — not confirmed either way.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA-Maroc (ONDA) AIP Morocco, AD 2 GMAD** (current package, AIRAC AMDT N°05/26–N°08/25, eff. dates 07 Aug 2025 – 14 May 2026) — https://siamaroc.onda.ma/eaip/AD/AD2GMAD.pdf (retrieved 2026-07-26).
- OurAirports — https://ourairports.com/airports/GMAD/runways.html (retrieved 2026-07-26). *Cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Morocco (ONDA); K Global fields from live VAMSYS; 4-page pack. |
