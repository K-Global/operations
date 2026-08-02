# LFPG — Paris Charles de Gaulle · Arrival Page

**LFPG / CDG** · Roissy-en-France, Île-de-France, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LFPG Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **Outer doublet only — 08L/26R and 09R/27L** (whichever pair matches the active east/west orientation) — **never** the inner/departure doublet |
| Usual approach | ILS CAT III on the assigned outer-doublet runway; exact idents/frequencies/sub-category not confirmed this pass 🟧 |
| Config logic | ATC/DSNA sets the active compass orientation; within either orientation the outer doublet is always the landing pair |
| Transition level | By QNH; transition altitude reported as 4,000 ft — not confirmed against a primary AIP table 🟧 |
| LVP trigger | Winter fog/low-visibility (LVP reported historically under ~5% of the time per an industry ATC presentation) — CAT III on the outer doublet is the standing mitigation 🟧 |
| Missed-approach driver | Airspace/traffic density in the segregated dependent-parallel-doublet environment, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Historically referenced RNAV STAR names include **MATIX** and **MOPIL** with runway-orientation-specific suffixes — 🟧 **not confirmed against the current AIRAC**; a public reference reports on the order of 24 STARs serving the field overall. Pull the live current-AIRAC STAR list at planning.
- **Selection by arrival direction / runway:** The active east/west compass orientation is set by ATC/DSNA; the outer doublet is always the landing pair within either orientation. On first contact with **Paris CDG Approach ("De Gaulle Approach")**, report the latest speed instructed by the preceding sector (**Paris ACC**) — this is a stated best-practice for this handover.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final; do not enter a hold at the initial approach fix unless specifically instructed by ATC, even if no approach clearance has yet been issued — follow the published standard approach path instead.
- **Speed / flow constraints on the STAR:** Standard 250 KIAS below FL100. Arrivals to **09L/R or 26L/R must fly a minimum 1,300 ft/min rate of descent** (except during speed-reduction phases) to avoid a separation-minima infringement given the sub-3-NM localizer-course spacing between the parallel pairs — this is a hard flow constraint at this field, not a suggestion.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning to meet the first STAR altitude gate; a "**CDO75**" continuous-descent-operation reference is used locally 🟧 (exact procedure/eligibility not confirmed this pass — verify current chart/operator guidance).
- **Speed control:** STAR speed gates and 250 KIAS below FL100 — confirm current chart. RECAT-EU wake-turbulence categorisation is applied in this airspace; crews are asked to **scrupulously adhere to assigned speeds** and minimise runway occupancy time to preserve the reduced separation minima RECAT-EU allows.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes. The mandatory 1,300 ft/min minimum descent rate for 09L/R and 26L/R arrivals (§2) is the standout altitude/energy constraint at this field.
- **Energy traps:** Late runway/orientation changes (east↔west ahead of a wind shift), and re-sequencing/holding during a winter fog event, are the main energy traps. When closing in on the final approach course with an intercept angle of less than 70°, **intercept the ILS localizer (or replacement approach aid) even without an explicit interception clearance**, unless specifically instructed by ATC to cross the runway centreline — a stated mid-air-collision-prevention rule at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 08L | ILS | **CAT III** — outer/landing doublet 🟧 idents/freq not confirmed | verify current chart |
| 26R | ILS | **CAT III** — outer/landing doublet; **displaced threshold, LDA 3,616 m** 🟧 | verify current chart |
| 09R | ILS | **CAT III** — outer/landing doublet 🟧 idents/freq not confirmed | verify current chart |
| 27L | ILS | **CAT III** — outer/landing doublet; **displaced threshold, LDA 3,600 m** 🟧 | verify current chart |
| 08R / 26L / 09L / 27R | — none scheduled — | **Never a landing runway** — inner/departure doublet, no approach role | n/a |

- **LVP triggers:** Winter fog/low-visibility is the routine LFPG trigger; in LVP, **landing clearance is issued at the latest when the aircraft is at 1 NM on final** — later than the normal clearance point, driven by dependency on the parallel departure runway or a preceding landing. Exact RVR trigger values and ILS sub-category (IIIA/IIIB) not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Île-de-France plateau at 392 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟥 **Segregated dependent-parallel-doublet operation with localizer-course spacing under 3 NM** between the parallel pairs — this drives the 1,000 ft vertical-separation requirement and the 1,300 ft/min minimum descent-rate rule (§2/§3). CDG additionally runs **triple simultaneous parallel approaches** in some configurations — brief for a dense, closely-choreographed multi-runway arrival environment. **RECAT-EU** wake-turbulence categorisation is in use; speed discipline on approach is essential to preserve the reduced separation minima it allows.
- **Airspace / traffic:** 🟥 Very high density under **Paris CDG Approach** (DSNA) — one of the busiest terminal areas in Europe, controlled from three physical ATC towers; brief for re-sequencing and extended vectoring, especially in marginal weather. Do not request a runway change — ATC's automated tools are optimising global traffic flow, not a single aircraft's track.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat plateau) — fly the published missed approach and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops you back into a very high-density, segregated dependent-parallel-doublet radar environment under three-tower control — expect extended vectoring and possible holding before re-sequencing, especially during a winter fog event.
- **Go-around traps:** Runway/orientation awareness during the miss — do not confuse the landing (outer) and departure (inner) doublets; the continuous departure stream on the inner pair remains active throughout any go-around on the outer pair.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 08L **4,142 m**; 09R **4,200 m**; **26R 3,616 m** (displaced ≈526 m from the 4,142 m TORA); **27L 3,600 m** (displaced ≈600 m from the 4,200 m TORA) — brief the reduced landing distance explicitly before any westerly-configuration arrival. The inner/departure doublet (2,700 m) has no scheduled landing role. 🟧 Not independently verified against a primary AIP table this pass.
- **Braking / vacate:** Runway high-speed turnoffs are specifically designed to allow vacating at up to **50 kt** — adapt exit speed to runway/surface condition. After vacating, do **not** stop inside the runway protected area (**90 m** normal, **150 m** in LVP) — continue on the published standard routing unless instructed otherwise.
- **Runway-excursion watch:** 🟧 Displaced thresholds on 26R/27L reduce available landing distance on a westerly arrival — factor this into landing-distance-required calculations. Winter-contamination braking-action consideration applies in season; exact figures not confirmed this pass.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned outer-doublet runway, taxi in per Ground/Apron assignment toward the allocated terminal; VAMSYS mirror gives a planning taxi-in time of **18 min** `[VAMSYS mirror 2026-07-26]`. **Stay on Tower frequency until the full runway pair (including the runway protected area) is completely vacated** before expecting a Ground frequency change.
- **Hot spots / tight taxiways:** 🟥 Arrivals crossing or approaching the inner (departure) doublet must **hold short and wait for an explicit crossing clearance** — "in case of any doubt, hold short of the inner runway" is the field's own stated basic principle. **TJ1/TJ2/TJ3** (Terminal 2G / "Juliett" stand area) require the oversteering technique for the affected smaller-gauge type list. Terminal 2's apron boundary intermediate holding points (**Stop TE1**, **Middle 1–4**, **FedEx apron**) mark the transfer of anti-collision responsibility from ATC to the flight crew — stop at these points without a "continue" clearance.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — terminal/gate assignment for the K Global operation not confirmed this pass.

---

## 9. Arrival frequency sequence

- **Sequence:** **Paris ACC → Paris CDG Approach ("De Gaulle Approach") → Paris CDG Tower (position-dependent, see Briefing §8) → Paris CDG Ground.** Report the last speed instructed by Paris ACC on first contact with De Gaulle Approach.
- **Approach/Departure control:** **Paris CDG Approach**, below **Paris ACC (LFFF)**. 🟧 Exact sector/frequency assignment not confirmed this pass; no dedicated Paris (LFFF) FIR brief exists yet in this tree — see <../../../../Airspace/General/Europe.md> and Briefing §18.

---

## 10. Gotchas

- **The outer doublet (08L/26R, 09R/27L) is the only landing pair — never expect or plan an arrival onto the inner/departure doublet (08R/26L, 09L/27R).**
- **Displaced thresholds on 26R (LDA 3,616 m) and 27L (LDA 3,600 m)** — do not assume full-length landing distance on a westerly-configuration arrival.
- **Mandatory 1,300 ft/min minimum descent rate on 09L/R and 26L/R arrivals** (outside speed-reduction phases) — this is a separation-infringement-prevention rule, not a suggestion.
- **In case of any doubt, hold short of the inner (departure) runway** — the field's own stated basic principle for arrivals crossing toward the terminal.
- **Do not enter a hold at the IAF without clearance**, even absent an approach clearance — follow the published approach path unless ATC instructs otherwise.
- **Never request a runway change** — flagged by the ANSP itself as a threat to both pilot and controller.
- **In LVP, landing clearance may not come until 1 NM on final** — do not expect an earlier clearance point in low-visibility conditions.
- **No hard curfew, but a night-quota/slot mechanism applies** — an arrival slipping into the 00:30–05:29 restricted window without an allocated quota slot is a schedule-integrity risk (see Dispatch §4), separate from any noise-charge consideration.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS idents, frequencies and CAT sub-category (IIIA/IIIB) confirmation.
- Exact LVP/CAT III trigger RVR values.
- "CDO75" continuous-descent-operation procedure detail and eligibility.
- Rapid-exit taxiway naming/vacate detail beyond the general 50 kt design speed.
- Exact Approach/Tower frequency-to-sector mapping.
- Current terminal/gate taxi-in routing for the K Global operation.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT III equipment status and active runway-doublet assignment), ATIS config, current AUP/UUP or RAD status in the Paris (LFFF) FIR. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP, AD 2 LFPG** — https://www.sia.aviation-civile.gouv.fr/ (retrieved 2026-07-26). *Not extractable to raw fetch this pass — see Briefing page for access note.*
- French Ministry for Ecology (ecologie.gouv.fr) — "LFPG/Paris-Charles de Gaulle/CDG" local-safety-team threat brief — https://www.ecologie.gouv.fr/sites/default/files/documents/CDG_en.pdf (retrieved 2026-07-26). *Arrival threat items — parallel-approach separation rules, minimum descent rate, LVP landing-clearance timing, hold-short principle, RECAT-EU.*
- DGAC/DSNA — "Runway Incursion Prevention Measures at Paris-Charles de Gaulle Airport," ICAO EUR Runway Safety Seminar, Sep 2005 — mirrored via https://silo.tips/download/runway-incursion-prevention-measures-at-paris-charles-de-gaulle-airport (retrieved 2026-07-26). *Vacate/crossing procedure, runway protected-area rule, segregated-doublet history.*
- ATC Network — "Triple, Parallel, Independent PBN/ILS Approach Procedures Commissioned at Paris-CDG & Le Bourget Airports" — https://www.atc-network.com/atc-news/dsna/triple-parallel-independent-pbnils-approach-procedures-commissionned-at-paris-cdg-le-bourget-airports (retrieved 2026-07-26). *Historically-referenced STAR/fix names, sequencing strategy.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
