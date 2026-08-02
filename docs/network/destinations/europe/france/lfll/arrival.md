# LFLL — Lyon-Saint Exupéry · Arrival Page

**LFLL / LYS** · Colombier-Saugnieu (Lyon), Rhône, Auvergne-Rhône-Alpes, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — SIA France eAIP-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LFLL Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **35R** (north-flow, 2,670 m) or **17L** (south-flow, 2,670 m) — the field habitually assigns the **short runway to arrivals** |
| Usual approach | ILS/LOC on 17L, 35R, 35L; RNP/VOR on all four runway ends; **no ILS on 17R** |
| Config logic | Wind-driven; north-flow ("35-config") is the standard/preferential pattern |
| Transition level | By QNH: **FL60** (1013–1048 hPa) or **FL70** (977–1012 hPa); transition altitude 5,000 ft — verify current chart 🟧 |
| LVP trigger | Not confirmed from a primary source; ILS available on 3 of 4 runway ends is the standing low-visibility infrastructure 🟧 |
| Missed-approach driver | Regional terrain/MSA sectoring (east/southwest relief) plus re-sequencing into the dependent-runway pair — not a close-in CFIT trap |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** AMVAR, PINED, FEDZI, LESPI, MEZIN, MTL, MILPA — suffixed by configuration (north/south flow) on the current chart.
- **Selection by arrival direction / runway:** North-flow ("35-config") is standard; **35R (short runway) is the habitual arrival runway** in that configuration, with 35L (long runway) reserved for departures. South-flow mirrors to **17L for arrival**, 17R for departure. Lyon Approach assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS (or RNP) transition with radar vectors onto final; verify the charted transition. A specific **3,300 ft caution zone south of the field** applies during ILS-intercept radar vectoring — see [Briefing §3.1](index.md).
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify current chart; standard 250 KIAS below FL100 applies.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes; regional relief east/southwest of the field means MSA sectors are non-trivial — do not descend below the sectored MSA early.
- **Energy traps:** A late runway/config change (17↔35 ahead of a wind shift) interacts with the dependent-runway/segregated-role pattern (§Briefing §3.3) — a config swap changes not just which runway you land on, but potentially the entire departure/arrival role split; brief this explicitly rather than assuming a simple runway swap.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 17L | ILS/LOC; RNP; VOR | Category not confirmed 🟧 | Habitual arrival runway, south-flow — verify current chart |
| 17R | RNP; VOR | **No ILS this end** | Habitual departure runway, south-flow — not a standard arrival option |
| 35R | ILS/LOC; RNP; VOR | Category not confirmed 🟧 | Habitual arrival runway, north-flow — verify current chart |
| 35L | ILS/LOC; RNP; VOR | Category not confirmed 🟧 | Habitual departure runway, north-flow; ILS present but not the standard arrival end — verify current chart |

- **LVP triggers:** Not confirmed from a primary source; ILS sub-category (I/II/III) unconfirmed. Treat winter low-visibility risk with caution given the disputed fog characterisation at this field (Briefing §3.4/§14) rather than assuming the operator's "fog-free" claim at face value. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 No close-in CFIT trap identified, but **relief to the east and southwest of the field** drives non-trivial MSA/AMG sectoring, including a specific 3,300 ft caution zone south of the field during ILS-intercept vectoring — see [Briefing §3.1](index.md). Verify the MSA ring on the current chart; do not treat this as a flat, benign-terrain field.
- **Specific threats:** 🟥 The two runways are **dependent** (no simultaneous takeoff/landing operations) — expect single-stream-style sequencing pressure during busy periods rather than fully independent parallel operations.
- **Airspace / traffic:** 🟧 Lyon Approach also covers Chambéry/Annecy approach when those units are closed, plus the wider Lyon SIV — a moderate consolidation of traffic outside peak coverage; the Lyon CTR directly abuts the Lyon-Bron (LFLY) CTR to the west, requiring coordination for transiting traffic.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Regional relief east/southwest of the field is the operative terrain consideration on a go-around — fly the published MAP and verify climb-gradient/turn constraints on the current chart; this is not a severe close-in CFIT field, but it is not flat-plain-benign either.
- **Re-sequencing environment:** A go-around re-sequences into the **dependent-runway** environment (§5) — expect vectoring back in behind both the arrival and departure streams rather than a free choice between two independent runways.
- **Go-around traps:** Config/runway-role awareness (which runway is currently assigned arrival vs departure) is the standing go-around trap at this field, given the segregated-use pattern described in §3.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 17L/35R (habitual arrival runway) **2,670 m**; 17R/35L (habitual departure runway) **4,000 m** — no displaced thresholds found in reachable sources (TORA=TODA=ASDA=LDA on both, both directions) 🟧 not independently re-confirmed against a primary AIP table. **The 2,670 m habitual arrival runway warrants an explicit landing-performance check for any heavier K Global type at high landing weight** — see [Briefing §16](index.md) and the [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 No displaced thresholds confirmed; winter ground-contamination/braking-action consideration applies in the mid-Nov–mid-Apr de-icing season (see Briefing §14).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned habitual arrival runway, taxi in via the single parallel taxiway serving all three terminals (T1/T2/T3), the cargo apron and GA parking; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟧 The taxiways lying **between the two runways** are **Tower's** jurisdiction, not Ground's — expect a jurisdiction/frequency handoff there. Largest Code F aircraft (A380/B747-8/An-124 class) reportedly have a restricted taxi routing — confirm applicability for any K Global type in that class.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — several stands carry push-back-direction restrictions; widebody positions may be paired/double stands blocking an adjacent single stand.

---

## 9. Arrival frequency sequence

- **Sequence:** **Lyon Approach 136.075 (primary; sector frequencies 120.230 / 125.430 / 131.310 / 133.150) → Saint-Exupéry Tower 120.455 (or the combined Tower/Approach position, 132.00, during lower-traffic periods) → Saint-Exupéry Ground 121.830.** Take the assigned frequency and confirm current chart. (Frequencies per [Briefing §8](index.md).)
- **Approach/Departure control:** **Lyon Approach** is the facility for the Lyon TMA/CTA, also covering Chambéry/Annecy approach when closed; en route hand-off is to **Marseille ACC (LFMM)** — see the [general European airspace reference](../../../../airspace/europe.md) pending a dedicated French FIR brief (Briefing §18). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **The short runway (17L/35R, 2,670 m) is the habitual arrival runway — not the long runway.** Do not assume the 4,000 m runway is the default landing option; it is the field's habitual departure runway instead.
- **The two runways are dependent** — a go-around or runway change does not simply mean "use the other runway freely"; sequencing logic assumes segregated roles.
- **RWY 17R has no published ILS** — not a standard arrival option under any configuration per the habitual-use pattern.
- **Regional relief east/southwest of the field**, including a 3,300 ft caution zone south of the field on ILS intercept, means this is not a flat, obstacle-free plain field — brief MSA awareness accordingly.
- **Winter fog/frost risk is disputed** between the operator's public "fog-free" claim and general regional inland-valley climatology — check current METAR/TAF/TREND rather than assuming either position.
- **Config swap (17↔35) driven by a wind shift** changes the entire departure/arrival role split, not just the runway in use — watch the ATIS/wind trend and brief the new role assignment explicitly.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category (I/II/III) confirmation.
- LVP/CAT trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Confirmation of the dependent-runway/no-simultaneous-ops rule against a primary AIP source.
- Landing-performance margin on the 2,670 m habitual arrival runway for the heaviest K Global type expected at this field.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, current Lyon SIV/TMA restricted-area (LF-R45 series) activation. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- SIA France eAIP, AD 2.LFLL — domain reachable, deep AD-2 page rendered empty (JS frameset) this pass — https://www.sia.aviation-civile.gouv.fr/ (retrieved 2026-07-26). See Briefing page for full detail.
- IVAO France Division — "LFLL - Lyon Saint-Exupéry" operational reference — https://wiki.ivao.fr/books/manex-aeroports-civils/page/lfll-lyon-saint-exupery (retrieved 2026-07-26). *Network-sim document, not regulatory — STAR names, configuration/runway-role logic, dependent-runway rule, ATC frequencies, MSA/AMG caution notes, transition altitude/level.*
- SkyVector — https://skyvector.com/airport/LFLL/Lyon-Saint-Exupery-Airport (retrieved 2026-07-26). *Runway/frequency cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
