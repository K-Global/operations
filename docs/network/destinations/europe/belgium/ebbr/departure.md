# EBBR — Brussels/Brussels-National · Departure Page

**EBBR / BRU** · Zaventem, Flemish Brabant, Belgium · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — tier-4 corroborated, primary AIP direct retrieval unsuccessful this pass

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [EBBR Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Federally selected; one of six combinations across 01/19, 07L/25R, 07R/25L. Public reporting indicates **25L** favoured for departure — 🟧 unconfirmed |
| Config logic | Federally mandated (not airport-set); wind/traffic/noise-driven — confirm active configuration via ATIS/batc.be |
| Transition altitude | 4,500 ft AMSL (Belgium national value, inferred from EBOS AIP — see Briefing §10) 🟧 |
| Take-off minima | Not published/verify 🟧 |
| CTOT / flow regime | Standard EUROCONTROL ATFM expected; the dominant constraint is the **night-slot cap**, not tactical CTOT (see Dispatch §4) |
| De-icing on departure | Assumed available in season; pad/procedure not confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed this session — confirm the exact taxi with Apron/Ground on the day. 🟧
- **Hot spots / tight taxiways:** Not confirmed specific named junctions this session. The standing general caution is the **shared civil/military runway use with the adjacent Melsbroek (EBMB) military side** — see [Briefing §3.2](index.md). 🟧
- **Runway crossings / read-back-required points:** Not confirmed. 🟧
- **Low-vis taxi caveats:** Not confirmed; Belgium's maritime climate brings routine autumn/winter fog — expect low-vis taxi procedures may apply in season. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Six possible directional combinations (01/19, 07L/25R, 07R/25L); selection is **federally mandated**, implemented by skeyes ATC. Confirm the active configuration via ATIS.
- **By departure direction:** Not confirmed which combination is favoured by direction beyond the reported 25R(land)/25L(depart) preference and the >200 t MTOW rule directing heavies to 25R — 🟧 unconfirmed from a primary table.
- **Noise / preferential-runway program:** Runway/route selection is the federal government's noise-abatement lever at this field (§Briefing §12); no separate NADP-style procedure confirmed this session. 🟧
- **Interaction with arrivals:** The six-combination system inherently creates dependent-configuration interactions between simultaneous arrival/departure streams — confirm with ATC on the day.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 01 / 19 / 07L / 25R / 07R / 25L | Standard EU PBN (RNAV 5 enroute / RNP 1 terminal) expected — verify on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** No fleet-wide NADP confirmed this session; the field's primary noise-abatement lever is federally-set runway/route selection rather than a published NADP variant. 🟧
- **Early turn / altitude constraints:** Published per SID — verify on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Flemish/Brabant plateau — no significant close-in terrain identified. 🟩
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass. 🟧
- **De-icing:** Assumed available in the Oct–Apr NW-European de-icing season; exact pad locations/procedure not confirmed. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Brussels Delivery **121.950** (H24 presumed).
- **Frequency sequence:** **Delivery 121.950 → Ground 118.055 (North) / 121.880 (South) → Tower 118.605 (RWY 07R/25L and 01) or 120.780 (RWY 07L/25R or 19) → Departure 126.630 → Brussels FIR (EBBU) en route.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8, tier-4 sourced.)
- **CTOT / slot handling:** Standard EUROCONTROL ATFM/CTOT practice expected; the more consequential constraint is the **night-slot cap** (Dispatch §4). 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Longest pair (07L/25R, 3,638 m) is non-limiting for any K Global type even after the approximate displaced-threshold deduction (Briefing §7); shorter runways (01/19, 2,987 m; 07R/25L, 3,211 m) are likewise non-limiting at normal weights.
- **Density altitude / temperature:** Non-issue at 184 ft, temperate maritime climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow/ice season is the relevant seasonal consideration; no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at EBBR.

---

## 10. Gotchas

- **Runway configuration is federally mandated and can be one of six combinations** — never assume a fixed departure runway; confirm via ATIS/batc.be.
- **Reverse thrust is banned except when safety-required** — this is a departure-adjacent crew briefing item carried over from arrival planning (see Arrival page), but relevant to the field's overall noise-discipline culture.
- **Night-slot cap and quiet-weekend-night rule** are the dominant scheduling constraint — a late-day departure risks having no available night slot past 23:00, and no departure at all is permitted Friday 01:00–06:00 or Saturday/Sunday 00:00–06:00.
- **Displaced thresholds exist on every runway end** — factor into any intersection-departure consideration if offered.
- **Field's runways are physically shared with the adjacent Melsbroek military airfield (EBMB)** — be aware of possible military traffic.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Start-up/push-back procedure detail.
- LVTO RVR minima and taxi hot-spot detail.
- EOSID/engine-out procedure detail per runway.
- Primary AIP direct retrieval unsuccessful this session — re-verify all figures (see Briefing §18).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), current runway-configuration status, CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Belgium (skeyes eAIP), AD 2 EBBR** — https://ops.skeyes.be/html/belgocontrol_static/eaip/eAIP_Main/html/eAIP/EB-AD-2.EBBR-en-GB.html — primary source of record; direct retrieval unsuccessful this session.
- OurAirports / SkyVector / Brussels Airport Company FAQ — see Briefing page for full citations.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Belgium (skeyes); K Global fields from live VAMSYS; 4-page pack. |
