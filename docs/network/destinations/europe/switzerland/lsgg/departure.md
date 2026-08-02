# LSGG — Geneva · Departure Page

**LSGG / GVA** · Le Grand-Saconnex, Geneva, Switzerland · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LSGG Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY22** by default (calm wind); **RWY04** when wind exceeds ~4 kt from a ~320°–140° arc |
| Config logic | Single-runway field — wind-based end selection is the only config tool; no reciprocal-heading alternative exists |
| Transition altitude | 7,000 ft (reported, tier-4 source) 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Not independently confirmed 🟧 |
| De-icing on departure | Available — general procedures confirmed; dedicated-pad detail not confirmed |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Confirm the exact taxi with Apron/Ground on the day; the long-haul wing (opened Dec 2021) is on fixed contact-stand power, simplifying pre-departure ground services versus a bussed remote stand.
- **Hot spots / tight taxiways:** 🟧 A tier-4 source flags at least one taxiway restricted to Medium aircraft in CAT I conditions, and **narrow taxiways requiring oversteer for larger aircraft** — treat as a caution pending AIP/current-chart confirmation.
- **Runway crossings / read-back-required points:** Single-runway field — no runway-crossing sequencing exists on the runway itself, though taxiway routing to the threshold should be confirmed locally.
- **Low-vis taxi caveats:** Not confirmed; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** **RWY22 preferred by default** (calm-wind case); **RWY04 used when wind exceeds ~4 kt from a roughly 320°–140° arc** (single-source figure, flagged 🟧 pending AIP confirmation).
- **By departure direction:** Not applicable beyond the wind-based end selection above — single runway, no directional-preference program beyond wind.
- **Noise / preferential-runway program:** A tier-4 source flags noise-sensitive areas and a noise-abatement procedure/turn (name not expanded in source) — the wind-based end-selection logic (§3) is the field's primary noise-management tool given the single-runway constraint.
- **Interaction with arrivals:** Departures and arrivals share the single runway axis; sequencing is a continuous ATC function rather than a parallel-runway independent-operations question.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| BELUS, DEPUL, MEDAM, ROCCA 🟧 | RWY04 | Higher-than-usual climb gradient reported (terrain-driven) — verify on current chart | Some SIDs are runway-specific (published for one runway end only) |
| KONIL, MEDAM, ROCCA, MOLUS 🟧 | RWY22 | As above; **MOLUS restricted for Light/Medium aircraft** (arrival-stream conflict), unrestricted for Heavy | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed which NADP variant is mandated; a tier-4 source references a noise-abatement turn/procedure by abbreviation only — verify on current chart. 🟧
- **Early turn / altitude constraints:** Published per SID; the surrounding Jura/Alpine terrain drives **higher-than-usual climb-gradient requirements** on several departures — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway, with particular attention to the surrounding terrain. 🟧
- **Close-in / distant obstacles:** **Jura ridge** (~5,700 ft AMSL) ~6 NM north; **Mont Salève** (~4,500 ft AMSL) ~8 NM south; **Alps/Mont Blanc massif** further southeast — cross-ref [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** Not confirmed — verify on current chart, particularly given the reported higher-than-usual climb gradients. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass. 🟧
- **De-icing:** General de-icing procedures confirmed present, triggered in cold/moist conditions; dedicated-pad location/capacity not confirmed. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Geneva Delivery — see [Briefing §8](index.md) for frequency (two tier-4 sources broadly agree; verify current chart).
- **Frequency sequence:** **Delivery → Ground/Apron → Tower → Geneva Departure → Switzerland FIR.** Take the assigned frequency and confirm current chart (frequencies from Briefing §8).
- **CTOT / slot handling:** Not independently confirmed; comply with any assigned CTOT/EDCT-equivalent. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,900 m single runway is non-limiting for any K Global Category H type at typical departure weights.
- **Density altitude / temperature:** Non-issue at 1,411 ft, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter season is the relevant consideration; no LSGG-specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty expected for any K Global Category H type at LSGG; the operative consideration is the terrain-driven climb-gradient requirement, not runway length.

---

## 10. Gotchas

- **Single runway, no reciprocal-heading fallback** — a runway obstruction or closure has no on-field alternative; this is structurally different from a multi-runway field.
- **RWY04 has no CAT II/III fallback** — relevant if a low-vis departure/return scenario coincides with a wind-forced RWY04 configuration.
- **Higher-than-usual climb gradients** on several SIDs, driven by the surrounding Jura/Alpine terrain — verify on the current chart, don't assume a standard gradient.
- **Some SIDs are runway-specific** (available off only one of the two runway ends) — confirm the correct SID for the assigned runway.
- **Narrow taxiways may require oversteer for larger aircraft** (tier-4-reported) — brief accordingly.
- **Reported (unconfirmed) night curfew** — a late-day departure delay risks running into the curfew window if the reported hours are accurate; treat conservatively pending AIP confirmation.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Start-up/push-back procedure detail.
- NADP variant mandated (if any) and the noise-abatement turn/procedure named in a tier-4 source.
- LVTO minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- Exact wind threshold/arc governing the RWY04-vs-RWY22 selection.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting — especially runway-availability NOTAMs, given no on-field alternate), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- AIP Switzerland (Skyguide eAIP) — https://www.eaip.skyguide.ch/ — attempted 2026-07-26; unreachable (JS/frameset) this session.
- en.wikipedia.org/wiki/Geneva_Airport (retrieved 2026-07-26). *Wind-based runway logic.*
- OPSGROUP — Geneva airport operational lowdown (retrieved 2026-07-26). *Climb-gradient caution, noise-sensitive-area note.*
- IVAO Switzerland — Geneva Air Traffic Management Manual (retrieved 2026-07-26). *SID-family names, taxiway restriction detail — network-sim training document, not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Switzerland (Skyguide); K Global fields from live VAMSYS; 4-page pack. |
