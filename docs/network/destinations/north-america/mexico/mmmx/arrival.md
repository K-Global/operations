# MMMX — Benito Juárez Intl · Arrival Page

**MMMX / MEX** · Mexico City, Mexico · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Mexico (SENEAM)-derived, public-source cross-checked

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [MMMX Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name/type only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. **This is a high-elevation, hot-and-high, terrain-ringed field — read together with [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md).** Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **05R** usual; **23L** (with a sidestep to **23R**) reported as a common late change |
| Usual approach | ILS/DME (05R, procedural + RNAV-waypoint variant); VOR/DME 3.25° glidepath (05L); ILS (23L) |
| Config logic | Wind/traffic-driven; late runway changes are reported as a recurring pattern — see §2 |
| Transition level | By QNH; transition altitude reported **18,500 ft** — verify current chart 🟧 |
| LVP trigger | Not confirmed; dry-season early-morning radiation fog is the plausible trigger 🟧 |
| Missed-approach driver | 🟥 **Terrain** — go-arounds on 23L/23R track toward mountainous terrain (§6) |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** **RWY 05R is the usual landing runway**; northern arrivals are reported to route via a **SLM→SMO** transition. **RWY 23L/23R** used when wind dictates, with **late runway changes reported as common** — including a 23L→23R sidestep (the latter's threshold further displaced, see Briefing §7).
- **Transition to approach:** For RWY 05R, arrival at the SMO/MAVEK position is followed by a clearance for the ILS with an expectation to fly the published lateral/vertical profile; verify the charted transition.
- **Speed / flow constraints on the STAR:** Reported ATC speed control of **200 kt to SMO and 160 kt thereafter** for RWY 05R, and **200 kt to SLM** for RWY 23L — pointers only, verify current chart. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning to meet the first STAR altitude gate; consider **FL200 for the 10,000 ft check** given the field's 7,316 ft elevation. 🟧
- **Speed control:** **250 kt within 30 NM of the MEX VOR below 18,000 ft** (reported); STAR speed gates per §2 — confirm current chart.
- **Altitude constraints:** A **20,000 ft maximum flap-extension altitude** applies — observe it. Some STAR pages reportedly depict minimum crossing altitudes at fixed radii from SLM — cross-check against the radar minimum-altitude chart if in any doubt.
- **Energy traps:** 🟥 The **RWY 05R approach is a high-workload, late-turn-to-short-final case** — a low platform altitude (historically ~8,800 ft, ~1,500 ft AAL) combined with a ~113° final turn and elevated groundspeed (hot-and-high TAS effect, ~+15%) can produce a late glideslope capture "from above" if the aircraft is not fully configured before the turn. Plan an intermediate flap setting early in the arrival to avoid drifting above profile.

---

## 4. Approach selection by runway

*Names/types only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 05R | ILS/DME (procedural + RNAV-waypoint variant) | No CAT II/III confirmed 🟧 | Platform altitude historically ~8,800 ft; verify current chart |
| 05L | VOR/DME, reported 3.25° glidepath | Non-standard glidepath angle — verify 🟧 | Verify current chart; switching to 05L from 05R reduces track mileage — resist an offered switch unless operationally necessary |
| 23L | ILS | No CAT II/III confirmed 🟧 | Verify current chart; terrain can force aggressive ATC speed control |
| 23R | Sidestep from a 23L ILS approach | Threshold further displaced than 23L (Briefing §7) | Verify current chart |

- **LVP triggers:** Not confirmed this pass; dry-season early-morning radiation fog is the plausible trigger. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 Active volcano **Popocatépetl** (~18,000 ft AMSL, 35 NM SE) and multiple mountain ranges close-in on several quadrants — 10,000 ft contour reached from ~15 NM E and ~17 NM W; peaks to ~13,000–13,600 ft AMSL by 16–20 NM; an isolated spot elevation of **10,200 ft AMSL at 038°/22 NM**; high ground from 5 NM N reaching ~10,300 ft AMSL at 10 NM N. See [Briefing §3.1](index.md) for the full quantification.
- **Specific threats:** 🟥 **Closely-spaced dependent parallel runways** (<300 m separation) — not independent parallels; expect sequencing/traffic interaction with the adjacent runway. **Late runway changes are reported as common**, requiring a rapid approach re-brief.
- **Airspace / traffic:** 🟥 One of the busiest dual-runway airports globally; a **61-movements/hour saturation cap** governs peak-hour throughput. Controlling authority **SENEAM** (Mexico City ACC/Approach), within the countrywide **Mexico FIR (MMFR)**.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** 🟥 **Go-around on RWY 23L/23R tracks toward terrain** per operational cross-check — this is the field's defining missed-approach hazard, consistent with the mountainous quadrants in §5. Fly the published missed-approach profile precisely and brief the terrain-clearance logic before every approach to 23L/23R.
- **Re-sequencing environment:** A go-around returns the aircraft into a high-density, saturation-capped traffic environment on closely-spaced dependent parallels — expect vectoring/holding before re-sequencing.
- **Go-around traps:** Elevated groundspeed (hot-and-high TAS effect) increases the missed-approach turn radius and lengthens the ground track needed to clear terrain — brief the missed-approach climb gradient against [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) §5.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** **05L 3,638 m / 11,932 ft** (THR displaced 315 m), **23R 3,452 m / 11,325 ft** (THR displaced 500 m), **05R 3,445 m / 11,302 ft** (THR displaced 455 m), **23L 3,900 m / 12,795 ft** (no displacement found) — see [Briefing §7](index.md) for the full table and sourcing caveats. 🟧
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources. 🟧 **Runway surfaces are reported rubber-contaminated near the ends and slow-draining** — factor this into the braking-action assessment independent of the day's reported condition code.
- **Runway-excursion watch:** 🟧 Elevated touchdown groundspeed from the hot-and-high TAS effect (~+15%) lengthens the landing roll versus the same IAS at sea level — recompute the operational landing distance for the day; do not use a generic sea-level figure. Faded/absent centreline lighting/markings reported on 05R/23L is an added night/low-vis excursion factor.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Confirm with Ground on the day; VAMSYS mirror gives a planning taxi-in time of **16 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 The **Taxiway A1/Taxiway A split** is a reported signage-confusion point — crews cleared to cross RWY 05L should confirm they remain on Taxiway A1 and are not routed toward Terminal 2 or lined up on the runway. **Taxiway A is reported unsuitable for heavy jets.** A **service road parallel to Taxiway H1** is unmarked on charts and can be mistaken for the taxiway at night.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — terminal/stand assignment for our operation not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Mexico Approach 121.2 / Mexico Arrival 129.6 → Mexico Tower 118.55 (also reported 118.1/118.7 🟧) → Mexico Ground 121.0 (also reported 121.85 🟧).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8; several show cross-source disagreement — treat as 🟧 pending live-AIRAC verification.)
- **Approach/Departure control:** **Mexico City ACC/Approach** (SENEAM), within the countrywide **Mexico FIR (MMFR)** — see the [North America airspace brief](../../../../airspace/north-america.md) for general continental context. 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **RWY 05R is a high-workload, late-turn-to-short-final approach** — configure early; a delayed glideslope capture leaves minimal margin.
- **Go-around on RWY 23L/23R tracks toward terrain** — brief the missed-approach profile before every approach to these runways.
- **Late runway changes are a recurring pattern** (including 23L→23R sidestep) — have the alternate approach ready.
- **20,000 ft maximum flap-extension altitude** must be observed.
- **Closely-spaced dependent parallel runways** — expect traffic interaction with the adjacent runway; this is not an independent-parallel airport.
- **Faded/absent runway centreline lighting and markings on 05R/23L** — a material night/low-vis landing caution.
- **Rubber-contaminated, slow-draining runway ends** — treat wet-runway braking with extra caution.
- **Volcanic ash risk from Popocatépetl** — check current advisories before descent into the terminal area.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- LVP trigger conditions and RVR minima.
- Rapid-exit taxiway/vacate detail.
- ATC frequency discrepancies (Tower, Ground) — resolve against current AIRAC.
- Displaced-threshold status of RWY 23L (none found — not independently confirmed as "none exists").

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, saturation-cap/flow status, Popocatépetl volcanic-ash advisory status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Mexico (SENEAM), AD 2 MMMX** — https://aipmexico.seneam.gob.mx/AIP/doc/AD/AD_2/38_MMMX/AD_2-MMMX-2.pdf — primary source of record; retrieval did not complete this pass (retrieved-attempt 2026-07-26).
- Public Route Information Manual (third-party flight-simulation planning reference, operator-neutral) — https://planning.simfest.co.uk/RIM/MMMX.pdf (retrieved 2026-07-26). *Approach-workload detail, terrain quantification, missed-approach note.*
- Wikipedia — "Mexico City International Airport" (retrieved 2026-07-26).
- OurAirports — https://ourairports.com/airports/MMMX/ (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Mexico (SENEAM); K Global fields from live VAMSYS; 4-page pack. |
