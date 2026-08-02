# OJAI — Queen Alia Intl · Arrival Page

**OJAI / AMM** · Zizya, Amman, Jordan · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [OJAI Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **26L / 26R** reported preferred when winds are calm 🟧 (network-sim cross-check, not an AIP-published rule) |
| Usual approach | ILS CAT II on 08L/26L/26R; RNAV (GNSS)/NDB only on 08R (no ILS) |
| Config logic | Wind-dependent; no AIP-published preferential-runway rule found |
| Transition level | **FL150** 🟧 (network-sim cross-check; TA confirmed 13,000 ft AMSL per AIP, TL not independently confirmed) |
| LVP trigger | CAT II environment on 08L/26L/26R; exact RVR trigger not confirmed this pass 🟧 |
| Missed-approach driver | Not terrain — benign plateau field; sequencing/radar vectoring is the operative factor |

---

## 2. STAR / transition selection

- **STARs / arrival transition fixes (names only — verify current AIRAC):** EGLOT, ELOXI, GENEX, KIPAS, KULDI, KINUR, LOSAR, LOSIL, LUDAN, MUNRA, OSAMA, QTR, QTR01 🟧 (VATSIM Jordan vACC cross-check — pull the current-AIRAC STAR list at planning).
- **Selection by arrival direction / runway:** Reported TMA entry constraints (network-sim cross-check, not AIP-confirmed): west via SALAM level 11,000 ft; east via GENEX level FL220; south via LOSIL passing FL200; east/northeast at ASLON FL180; north by BUSRA FL200 or lower. 🟧 Verify against the current AIRAC STAR chart.
- **Transition to approach:** Expect radar vectors from Amman Approach onto an ILS or RNAV approach for the runway in use.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate (§2).
- **Speed control:** 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/config change (no AIP-published preferential-runway rule means the assigned runway can be wind-driven and confirmed late by ATC/ATIS) is the main energy trap at this field; otherwise a benign, non-mountainous arrival environment.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 08L | ILS (IQAN); NDB | **CAT II** 🟩 | verify current chart |
| 26R | ILS (IQAR) | **CAT II** 🟩 | verify current chart |
| 26L | ILS (IQA); VOR | **CAT II** 🟩 — reported calm-wind-preferred runway | verify current chart |
| 08R | RNAV (GNSS); NDB | **No ILS** 🟧 | verify current chart |

- **LVP triggers:** CAT II environment on 08L/26L/26R is the field's confirmed low-visibility capability; an initial planning anchor referenced CAT III, which is **not corroborated** in the reachable AIP (see Briefing §18). 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 Benign. The AIP obstacle table lists only modest obstructions (poles ~78 m AGL on the 08L/26R approach; a telecom tower at 805 m elevation ~6.7 km from the 08R/26L threshold, bearing 252°M) — no significant close-in high terrain on any arrival path. The field's own elevation (2,397 ft) is the only "elevated" factor, not surrounding terrain.
- **Specific threats:** 🟧 A mandatory **5 NM landing-interval** applies between successive arrivals on RWY 26L/08L (AIP local traffic regulation) — expect ATC spacing; vacate expeditiously and notify ATC if unable to comply.
- **Airspace / traffic:** 🟩 Class C Queen Alia CTR, radar service, moderate traffic density (~68,000 movements/year in 2022) — not a high-density terminal environment relative to the network's mega-hubs. Cross-ref [Middle East Airspace Briefing](../../../../airspace/middle-east.md) for the wider Amman (OJAC) FIR picture, including the lighter-weight EASA Information Note (not an "avoid" advisory) covering Jordan.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not a driver — benign plateau field; fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns to a moderate-density radar environment under Amman Approach — expect vectoring for re-sequencing rather than extensive holding, though confirm the current holding-fix structure on the chart.
- **Go-around traps:** No unusual dependent-runway or terrain trap identified; the main workload item remains ATC-directed re-sequencing.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** **3,660 m** on all four runway ends (08L, 26R, 08R, 26L) — no displaced thresholds published. Ample for any K Global type at typical arrival weights.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧 Pilots should use minimum required runway-occupancy time (AIP remark) and notify ATC if unable to comply.
- **Runway-excursion watch:** 🟧 No displaced thresholds confirmed; arid climate means contamination is not a routine factor, though occasional winter rain/rare light snow should be briefed in season.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Per the AIP local traffic regulation table (AD 2.20), e.g. an arrival on 26L to the South Apron (west side) taxis via A→E; to the North Apron via A→F→N. VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟧 **Taxiways F and G** at intersections with service roads — explicit AIP caution, both aprons.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Code E stands across North/South/Hotel Aprons; Code F limited to stand N26 (North, via Taxiway Juliet) and S30 (South, via Taxiway Sierra), with mandatory follow-me guidance.

---

## 9. Arrival frequency sequence

- **Sequence:** **Amman Approach 128.9 → Queen Alia Tower 119.8 → Queen Alia Ground 121.900.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Amman Approach** is the terminal-approach facility; **Amman Control (OJAC)** hands off en route inbound — see [Middle East Airspace Briefing](../../../../airspace/middle-east.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **08R has no ILS** — do not expect a precision approach on this runway end.
- **CAT II, not CAT III** — brief accordingly; do not assume autoland/CAT III minima.
- **5 NM landing-interval rule** on 26L/08L — expect ATC spacing and vacate expeditiously.
- **No back-track on the runway** — plan the full taxi-in per the assigned route; do not assume a runway back-track will be available to reach a far-side exit.
- **No AIP-published preferential-runway rule** — confirm the active configuration with ATIS/ATC rather than assuming the reported calm-wind 26-configuration.
- **Code F ground movement is taxiway-restricted** on taxi-in (Taxiway Juliet/North, Taxiway Sierra/South) — plan accordingly if operating a Code F type.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Transition level (FL150 sourced only to network-sim cross-check).
- Exact LVP/CAT II trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- CAT III discrepancy — confirm current AIRAC ILS category on 08L/26L/26R (see Briefing §18).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, current regional conflict-zone/GNSS-interference advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Jordan CARC AIP, AD 2 OJAI** (AIRAC AMDT 13/2016, amended through AMDT 84/2017) — declared distances, obstacle data, local traffic regulations, ATS airspace, communications, navaids — https://carc.gov.jo/images/AIS/AerodromesAD/AD2_OJAI.pdf (retrieved 2026-07-26).
- VATSIM Jordan vACC — "Pilot Briefing: Queen Alia Intl. Airport [OJAI]" (2024) — https://jordan.vatsim.me/wp-content/uploads/2024/02/jovacc-ojai-briefing-2024.pdf (retrieved 2026-07-26). *Network-sim document — STAR fix/TMA-entry cross-check only.*
- [Middle East Airspace Briefing](../../../../airspace/middle-east.md) — Amman (OJAC) FIR context.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
