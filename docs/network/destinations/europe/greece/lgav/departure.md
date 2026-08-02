# LGAV — Eleftherios Venizelos Intl · Departure Page

**LGAV / ATH** · Spata-Artemida, Attica, Greece · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LGAV Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not confirmed from a primary source; **03L/03R or 21R/21L** depending on wind — the two runways are widely separated and reported to operate in a segregated (one-direction-per-runway) mode rather than a fixed preferential pairing 🟧 |
| Config logic | Wind-driven; **Meltemi**-season (Jun–Sep) northerly wind is the notable seasonal factor — verify current ATC runway-use logic |
| Transition altitude | Not confirmed 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed 🟧 |
| CTOT / flow regime | Athens widely regarded as coordinated/slot-managed; exact regime not confirmed 🟧 |
| De-icing on departure | Availability not confirmed; low-frequency seasonal consideration given the Mediterranean climate 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed from a primary source; expect Ground/Apron to route from the Main Terminal (Hall A/B) or Satellite Terminal stand area toward the assigned departure runway (03L/03R in a Meltemi/northerly-opposing config, or 21R/21L in a southerly-flow config) — confirm the exact taxi with Ground on the day. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources. 🟧
- **Runway crossings / read-back-required points:** Not confirmed. 🟧
- **Low-vis taxi caveats:** Not confirmed; the field's reported CAT III capability implies some low-vis operational infrastructure exists, but SMGCS/low-vis taxi routing detail was not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Runway selection is wind-driven; the **Meltemi** — a strong, dry, northerly-quadrant wind most prominent June–September — is the region's defining seasonal wind feature and the most likely driver of a config change during the summer peak season. Exact preferential-runway rule not confirmed from a primary source. 🟧
- **By departure direction:** Not confirmed. 🟧
- **Noise / preferential-runway program:** Not confirmed in reachable sources. The airport sits amid several towns (Spata, Loutsa/Artemida, Markopoulo, Koropi) that plausibly inform any noise-preferential routing, but no specific program was confirmed. 🟧
- **Interaction with arrivals:** The two runways are reported to support segregated (rather than closely-spaced-dependent) arrival/departure operation — reducing, but not eliminating, interaction/sequencing workload relative to a closely-spaced-parallel field. Not confirmed from a primary source. 🟧

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not published in reachable sources 🟧 | 03L / 03R / 21R / 21L | Not confirmed — verify RNP/gradient requirement on current chart | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify constraints on the current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** The immediate airfield sits on flat Mesogeia-plain terrain; the wider Attica basin carries higher ground generally to the west/northwest (Hymettus/Penteli ridges) that could factor into an engine-out escape path depending on departure direction — not confirmed against a primary obstacle chart. 🟧
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed; the field's reported CAT III capability implies some LVP infrastructure exists — specific LVTO RVR minima not confirmed. 🟧
- **De-icing:** Availability/procedure not confirmed in reachable sources; Mediterranean climate makes this a low-frequency, not zero-frequency, winter consideration. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Athens/Athinai Clearance Delivery **118.675** (hours not confirmed 🟧).
- **Frequency sequence:** **Delivery 118.675 → Ground 121.750 → Tower 136.275 → Athinai Departure 128.950** (position-specific — Athinai Approach 126.575 and Athinai Director 121.400 also published; take the assigned frequency and confirm current chart). Frequencies per Briefing §8 (tier-4 sourced, not cross-checked against a current AIRAC). 🟧
- **CTOT / slot handling:** Athens is widely regarded as a coordinated/slot-managed airport; exact CTOT/ATFM handling not independently confirmed. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,800 m (03L/21R) and 4,000 m (03R/21L) are non-limiting for any K Global category-L type; both runways carry a 300 m displaced threshold at each end, relevant to landing distance rather than take-off (TORA figures not confirmed 🟧).
- **Density altitude / temperature:** Non-issue at 308 ft field elevation, even during the hot Mediterranean summer — no material density-altitude performance penalty.
- **Contamination / wet-runway:** Winter is the region's wet season; rare near-freezing/snow events in Attica are a low-frequency consideration. No specific contamination/braking-action data is confirmed. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty identified for the K Global category-L operation at LGAV.

---

## 10. Gotchas

- **Meltemi-season (Jun–Sep) northerly winds** can drive a late runway/config change and produce sustained crosswind/gust conditions — watch the ATIS wind trend before committing to a departure runway.
- **Both runways carry a 300 m displaced threshold at each end** — a landing-distance consideration rather than a take-off one, but worth briefing to avoid confusing published runway length with usable distance.
- **Wider Attica-region high ground (Hymettus/Penteli)** sits generally west/northwest of the field — respect published obstacle/climb-gradient guidance on the current chart, particularly on an engine-out departure.
- **Peak summer season (Jun–Sep)** combines the airport's heaviest traffic load with its most notable seasonal wind hazard — expect busier radio/taxi workload and possible sequencing delay.
- 🟧 SID names, take-off minima, NADP preference and CTOT/slot handling specifics are not confirmed from a primary source — do not assume specifics not on the current chart/NOTAM.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / LVTO RVR minima.
- Preferential-runway/config logic and noise-abatement departure procedure (NADP).
- Start-up/push-back procedure detail.
- CTOT/slot-coordination specifics for LGAV.
- EOSID/engine-out procedure detail per runway.
- De-icing availability, provisioning and season.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/LGAV/frequencies.html , https://ourairports.com/airports/LGAV/runways.html (retrieved 2026-07-26). *Communications and runway data.*
- Wikipedia — "Athens International Airport" — https://en.wikipedia.org/wiki/Athens_International_Airport (retrieved 2026-07-26). *Airport siting/surrounding towns context.*
- **Primary source of record (not available as a reachable public source):** HCAA / Hellenic AIS eAIP Greece, AD 2 LGAV — see [Briefing — Sources & References](index.md) for the full sourcing note.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
