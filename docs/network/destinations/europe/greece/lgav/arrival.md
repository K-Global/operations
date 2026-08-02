# LGAV — Eleftherios Venizelos Intl · Arrival Page

**LGAV / ATH** · Spata-Artemida, Attica, Greece · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LGAV Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not confirmed from a primary source; **03L/03R or 21R/21L** depending on wind — the two runways are widely separated and reported to operate in a segregated (one-direction-per-runway) mode rather than a fixed preferential pairing 🟧 |
| Usual approach | ILS reported on the runway system with CAT III capability `[VAMSYS mirror 2026-07-25]`; runway-end assignment and sub-category not confirmed 🟧 |
| Config logic | Wind-driven; **Meltemi**-season (Jun–Sep) northerly wind is the notable seasonal factor |
| Transition level | By QNH; transition altitude not confirmed 🟧 |
| LVP trigger | CAT III capability reported for the field; exact trigger conditions/RVR values not confirmed 🟧 |
| Missed-approach driver | No terrain-driven MAP specifics confirmed; wider Attica-region terrain context noted qualitatively (§5) |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not published in reachable sources — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not confirmed from a primary source; expect Athinai Approach to assign the STAR-to-runway transition for the active configuration (03-series in a Meltemi/northerly-opposing config, or 21-series in a southerly-flow config). 🟧
- **Transition to approach:** Not confirmed — expect radar vectoring onto final from Athinai Approach; verify the charted transition. 🟧
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate. Not independently confirmed. 🟧
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/config changes driven by a Meltemi wind shift are the most plausible energy trap at this field; not independently quantified. 🟧

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 03L | ILS (name/ident not confirmed) | CAT category not confirmed 🟧 | verify current chart |
| 21R | ILS (name/ident not confirmed) | CAT category not confirmed 🟧 | verify current chart |
| 03R | ILS (name/ident not confirmed) | CAT category not confirmed; CAT III capability reported for the field generally 🟧 | verify current chart |
| 21L | ILS (name/ident not confirmed) | CAT category not confirmed 🟧 | verify current chart |

- **LVP triggers:** CAT III capability is reported for the field `[VAMSYS mirror 2026-07-25]`; the specific runway(s) so equipped, sub-category (II/IIIA/IIIB) and RVR trigger values are not confirmed from a primary table. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 The immediate airfield sits on flat Mesogeia-plain terrain, but the wider Attica basin carries higher ground generally to the west/northwest (the Hymettus/Penteli ridge lines) within the region's general MSA sectoring — not confirmed against a primary obstacle/MSA table; brief the current chart.
- **Specific threats:** 🟧 The two runways are reported to support segregated (rather than closely-spaced-dependent) arrival operation, which reduces but does not eliminate traffic-density workload during the summer leisure peak (the airport is the 15th-busiest in Europe as of 2025, with continued double-digit passenger growth). Meltemi-season crosswind/gust exposure (§14 of the Briefing) is the standout weather threat.
- **Airspace / traffic / control:** 🟧 Fully radar-controlled Athinai TMA; no dedicated Athinai (LGGG) FIR brief exists yet in this system — see the general [Europe airspace brief](../../../../airspace/europe.md) for continental context (it does not itself cover Greek/Athinai airspace).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** No terrain-driven MAP specifics are confirmed; fly the published MAP and verify climb-gradient/turn on the current chart, noting the general wider-Attica terrain context (§5). 🟧
- **Re-sequencing environment:** A go-around returns you to the radar-controlled Athinai TMA; expect vectoring/holding proportional to current traffic density, especially during the summer peak season. 🟧
- **Go-around traps:** Not confirmed in reachable sources. 🟧

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 🟧 Not published / verify — both 03L/21R (3,800 m nominal) and 03R/21L (4,000 m nominal) carry a 300 m (984 ft) displaced threshold at **each** end, which reduces the usable landing distance below the full physical runway length. The exact AIP-declared LDA figure has not been corroborated from a primary source — confirm before planning a landing-distance-limited operation.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Tower on the day. 🟧
- **Runway-excursion watch:** 🟧 Displaced thresholds confirmed at both ends of both runways (§7 above); no specific contamination/braking-action data is confirmed, though winter contamination risk in Attica is low-frequency given the Mediterranean climate.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed from a primary source; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]` for the K Global operation. Expect taxi-in to the Main Terminal (Hall A/B) or Satellite Terminal stand area per Ground assignment. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Main Terminal (14 jet bridges) and Satellite Terminal (10 jet bridges); exact gate assignment for our operation not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Athinai Approach 126.575 (or Athinai Arrival 132.975 / Athinai Director 121.400, position-specific) → Athens Tower 136.275 → Athens Ground 121.750.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8 — tier-4 sourced, not cross-checked against a current AIRAC.) 🟧
- **Approach/Departure control:** **Athinai Approach** (HCAA) is the facility for Athens's terminal radar area; **Athinai ACC (LGGG)** hands off en route inbound. No dedicated Athinai FIR brief exists yet in this system — see the general [Europe airspace brief](../../../../airspace/europe.md) (does not itself cover Greek airspace). 🟧

---

## 10. Gotchas

- **Meltemi-season (Jun–Sep) northerly winds** can drive a late runway/config change and produce sustained crosswind/gust conditions — watch the ATIS wind trend, especially during the summer peak-traffic season.
- **Both runways carry a 300 m displaced threshold at each end** — do not assume the full physical runway length is usable for landing; verify the current AIP declared-distance table.
- **Wider Attica-region high ground (Hymettus/Penteli)** lies generally west/northwest of the field — respect the current chart's MSA rings, particularly on the missed approach.
- **Peak summer season (Jun–Sep)** brings the airport's heaviest scheduled and leisure-charter traffic — expect vectoring/holding proportional to demand, especially on a weekend or peak-bank arrival.
- 🟧 STAR names, exact approach minima, LVP/CAT III trigger values and taxi-in hot spots are not confirmed from a primary source — do not assume specifics not on the current chart/NOTAM.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS runway-end assignment and CAT sub-category (II/IIIA/IIIB) confirmation.
- Exact LVP/CAT III trigger RVR values.
- Rapid-exit taxiway/vacate detail and taxi-in hot spots.
- Preferential landing-runway/config logic beyond the general wind-driven assumption.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT III equipment status), ATIS config/wind trend, current AUP/UUP or airspace-restriction status in the Athinai FIR. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/LGAV/frequencies.html , https://ourairports.com/airports/LGAV/runways.html (retrieved 2026-07-26). *Communications and runway/displaced-threshold data.*
- SKYbrary Aviation Safety — https://skybrary.aero/airports/lgav (retrieved 2026-07-26). *Runway/climate cross-check.*
- **Primary source of record (not available as a reachable public source):** HCAA / Hellenic AIS eAIP Greece, AD 2 LGAV — see [Briefing — Sources & References](index.md) for the full sourcing note.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
