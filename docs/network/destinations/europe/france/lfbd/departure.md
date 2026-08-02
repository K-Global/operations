# LFBD — Bordeaux-Mérignac · Departure Page

**LFBD / BOD** · Mérignac (Bordeaux), Gironde, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LFBD Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **05/23** (main pair, wind-dependent); RWY 11/29 use-restricted (§Briefing §5) |
| Config logic | Wind-driven: 05/23 preferred up to 15 kt crosswind; RWY 23 to 5 kt tailwind |
| Transition altitude | Not confirmed this pass — verify current chart 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Not confirmed — general EUROCONTROL ATFM practice assumed 🟧 |
| De-icing on departure | Available, H24 on request — AviaPartner (Type II) / Alyzia Province (Type I/IV) |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Confirm the exact taxi with Ground/Apron on the day; departure clearance is obtainable via **data-link (DCL, H24)** requestable up to 60 min before start-up.
- **Hot spots / tight taxiways:** 🟥 **TWY U/U1/U2** (industrial-area taxiways) — idle-thrust only, mandatory radio contact before entry; B747/A340/DC-10-class aircraft must be **towed** through this area (jet-blast risk); **TWY L2** carries a wingspan limit (≤ 14 m, with a narrow home-based exception) and is prohibited below RVR 550 m except for that exception with a follow-me.
- **Runway crossings / read-back-required points:** Not individually detailed — expect standard crossing instructions per Ground/Tower.
- **Low-vis taxi caveats:** Follow-me is mandatory below RVR 350 m on taxiways without centreline lighting; several stand groups (J/K and some B-series) require follow-me below RVR 550 m even where others retain direct entry/exit — see [Briefing §13](index.md). 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** When both runway pairs are available, **05/23 is used up to a 15 kt crosswind** (including gusts); **RWY 23 is used up to a 5 kt tailwind** (including gusts). ATC also weighs upper wind gradient, weather, navaid availability and operational constraints in the final runway choice.
- **By departure direction:** Not individually documented — no directional preference beyond the wind-driven 05/23 vs 11/29 logic.
- **Noise / preferential-runway program:** Jets fly **ICAO NADP1** (V2+10 to 3,000 ft AAL in take-off flap config, then normal climb/flap retraction). Published SID tracks must be rigorously followed and may only be modified below 5,000 ft AMSL on ATC instruction.
- **Interaction with arrivals:** Not individually documented at this traffic-density field.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 05/23/11/29 | Not confirmed | Published SID tracks must be rigorously followed per AD 2 LFBD.21; pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Jets: maintain **V2+10** (or the speed the aircraft attitude permits) to 3,000 ft AAL using take-off flap configuration; beyond 3,000 ft AAL adopt normal climbing speed and retract flaps. All aircraft types: reach 3,000 ft AAL as quickly as possible.
- **Noise-abatement departure procedure (NADP):** **ICAO NADP1**, per the field's noise-abatement order (Arrêté du 6 March 2009).
- **Early turn / altitude constraints:** Published SID tracks may only be modified below 5,000 ft AMSL on ATC instruction — otherwise fly the charted track rigorously.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Gironde coastal plain — no significant close-in terrain or obstacle identified in the reachable extract.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass — verify current chart. 🟧
- **De-icing:** **AviaPartner** (2 FMC-type de-icers, Type II fluid 75/25) and **Alyzia Province** (2 Elephant-type de-icers, Type I/IV fluid), available H24 on request. Snow-plan season 1 Dec–31 Mar; clearance priority is RWY 05/23 first, then apron, then RWY 11/29. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Departure clearance available via **data-link (DCL), H24** — request up to 60 min before estimated start-up; crew acknowledgement due within 5 min of issue; contact Ground if no echo 10 min before start-up.
- **Frequency sequence:** **Ground (Mérignac Sol) 121.900/121.730 → Tower (Mérignac Tour) 118.300 → Aquitaine/Mérignac Approche 119.275/129.875/121.200.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **CTOT / slot handling:** No slot-coordination level confirmed for LFBD — EUROCONTROL Network Manager ATFM/CTOT applies as general European practice. 🟧 **Push-back/taxi clearance from Ground is valid for 1 minute only** — request accordingly.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 05/23 (3,100 m) is non-limiting for K Global Category R operations; RWY 11/29 (2,415 m) is **wingspan/type-restricted** (≥ 52 m and named heavies prohibited) rather than length-limited — confirm eligibility before planning a departure from 11/29.
- **Density altitude / temperature:** Non-issue at 166 ft, temperate coastal climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter snow/de-icing season (1 Dec–31 Mar) is the relevant seasonal consideration — no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified for K Global Category R equipment at LFBD.

---

## 10. Gotchas

- **RWY 11/29 is wingspan/type-restricted** — never plan a departure there without confirming the aircraft is eligible (< 52 m wingspan and not on the named-type exclusion list).
- **Push-back/taxi clearance is valid for 1 minute only** — a delayed push requires a fresh request from Ground.
- **TWY U/U1/U2 (industrial area) require idle thrust and mandatory radio contact** — B747/A340/DC-10-class aircraft must be towed through, not self-taxied.
- **Published SID tracks must be followed rigorously below 5,000 ft AMSL** — no early deviation without ATC instruction.
- **No confirmed curfew** — do not assume a late-day departure delay is risk-free without confirming current AIP; treat winter fog/low-stratus on the RWY 23 direction as the more realistic schedule risk.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / LVTO RVR minima exact figures.
- Transition altitude.
- EOSID/engine-out procedure detail per runway.
- CTOT/ATFM specifics for LFBD (general practice assumed, not independently sourced).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP, AD 2 LFBD** (AD 2.13, 2.18, 2.20, 2.21), cycle effective 14 MAY 2026 — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_14_MAY_2026/FRANCE/AIRAC-2026-05-14/html/eAIP/FR-AD-2.LFBD-fr-FR.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
