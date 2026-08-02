# LTFM — İstanbul Airport · Departure Page

**LTFM / IST** · Arnavutköy, İstanbul, Türkiye · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — DHMİ AIP-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LTFM Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Wind/traffic/flow-dependent across the five-runway set (16R/34L, 16L/34R, 17R/35L, 17L/35R, 18/36); confirm active configuration on ATIS 🟧 |
| Config logic | Traffic-flow driven under triple-independent-parallel-approach operations (since Apr 2025); RWY 18/36 as crosswind/overflow option |
| Transition altitude | 12,000 ft |
| Take-off minima | Published — verify current chart 🟧 |
| CTOT / flow regime | Not consistently confirmed — A-CDM (TSAT/TOBT) confirmed in use; formal ATFM/CTOT status not confirmed 🟧 |
| De-icing on departure | **Available** — five dedicated de-icing aprons, H24 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Extensive lettered taxiway system (A–T plus sub-taxiways) serving five runways from the central terminal/apron complex; specific stand-to-runway routing not itemised in reachable sources — confirm with Ground on the day.
- **Hot spots / tight taxiways:** 🟥 Not individually confirmed in reachable sources this pass. The AIP references numerous Code-C/E/F width transitions on named taxiway segments (e.g. TWY D between N6/E1 and E1/E3, TWY E5, F3, G1, T2, T3, T5, T7, T9 at various intersections) — treat these transition points as caution areas for wide-body taxi planning and confirm current hot-spot markings on the chart.
- **Runway crossings / read-back-required points:** Not individually confirmed; expect runway-crossing sequencing given the five-runway, near-perpendicular (18/36) layout relative to the four main parallels.
- **Low-vis taxi caveats:** SMGCS-style stop-bar and green centreline-light guidance is published (Taxiing Guidance System); RWSL (Runway Status Lights) system confirmed on RWY 18/36. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not confirmed in reachable sources — expect ATC/ATIS assignment under the triple-independent-parallel-approach regime.
- **By departure direction:** Not confirmed in reachable sources.
- **Noise / preferential-runway program:** Not confirmed in reachable sources this pass. 🟧
- **Interaction with arrivals:** Triple independent parallel approach/departure operations (since 17 Apr 2025) mean simultaneous arrival and departure streams on multiple parallels, plus RWY 18/36 traffic crossing the general flow direction — a high-workload, dependent-operations environment.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed | All | 🟧 Not obtained in this research pass | Pull the current-AIRAC SID list at planning |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard initial climb/speed schedule expected; not independently confirmed this pass.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources — verify locally. 🟧
- **Early turn / altitude constraints:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources this pass. 🟥
- **Close-in / distant obstacles:** No close-in high terrain identified in reachable sources (rolling ground near the Black Sea coast) — cross-ref [Briefing §3.1](index.md). Not independently cross-checked against a current obstacle chart. 🟧
- **Special DP / obstacle DP:** Not confirmed — verify on chart.

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed in reachable sources — verify current chart. 🟧
- **De-icing:** Five dedicated de-icing aprons (Deicing 1–5), each with a specified aircraft-entry direction; entry from the opposite side only by ATC instruction with Follow-Me support. H24 availability published; seasonal date range not confirmed. 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** İstanbul Delivery (121.700 / 130.625 MHz) — cross-ref [Briefing §8](index.md).
- **Frequency sequence:** Delivery → Ground (9 sector pairs + de-ice) → Tower (5 positions) → Departure (Yeşilköy APP/Radar, sector-specific — SAD/SWU/SWN/SWS/SWD/SWF/SEU/SEN/SEC/SES/SBD/SED per departure direction) — reference the field's actual frequencies in [Briefing §8](index.md).
- **CTOT / slot handling:** Not consistently confirmed; A-CDM (TSAT/TOBT) governs the pre-departure sequence — accurate TOBT input and timely pushback request are the operative discipline at this traffic volume. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** Non-limiting for our Code E types — 4,100 m (17R/35L, 17L/35R) and 3,750 m (16R/34L, 16L/34R) mains, with numerous published intersection options at reduced but still generous distances (confirm the specific intersection assigned).
- **Density altitude / temperature:** Near sea-level (325 ft) — not a hot-and-high field; reference temperature 29 °C is unremarkable for performance planning.
- **Contamination / wet-runway:** Seasonal braking-action consideration not independently confirmed this pass — treat winter precipitation as a general risk pending seasonal data.
- **Link to OM B:** No type-specific performance penalty identified. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 10. Gotchas

- **Five-runway complex with triple independent parallel operations** (since 17 Apr 2025) — confirm active configuration and assigned runway/taxi routing carefully; this is not a simple two-runway field.
- **RWY 18/36** is oriented near-perpendicular to the four main parallels and uses a Calvert (not Barette) approach lighting system — a different visual environment; confirm before assuming it behaves like the main runways.
- **Numerous intersection take-off options** are published on almost every runway — confirm the assigned intersection distance against the current AIRAC rather than assuming full-length.
- **A-CDM sequencing** — accurate TOBT and prompt response to pushback clearance are operationally significant at this traffic volume.
- **De-icing apron entry direction is apron-specific** (north/south/west-facing) — confirm the correct entry side before taxiing to a de-icing position; entry from the "wrong" side requires ATC instruction plus Follow-Me.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID names, gradients, and RNP/PBN requirements — not obtained this pass.
- Preferential-runway / noise-abatement logic.
- Take-off minima and LVTO procedure.
- Engine-out / emergency-turn procedure and special obstacle DPs.
- Named taxiway hot spots — consolidated list not reached this pass.
- CTOT/ATFM status beyond confirmed A-CDM use.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status, current A-CDM/TSAT sequencing. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **DHMİ AIP Türkiye, AD 2 LTFM** (current AIRAC extract, cycles through AMDT 03/26) — https://www.dhmi.gov.tr/AIPDocuments/LT_AD_2_LTFM_en.pdf (retrieved 2026-07-26).
- Public aviation-news reporting on triple independent parallel runway operations (17 Apr 2025) and A-CDM implementation — general search corroboration; not individually re-verified this pass. *Advisory/secondary source — flagged 🟧.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
