# LFMN — Nice-Côte d'Azur · Arrival Page

**LFMN / NCE** · Nice, Alpes-Maritimes, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — SIA France eAIP-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LFMN Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **04L** in the dominant 04-configuration (landing also possible on 22R in the reciprocal configuration) |
| Usual approach | ILS/LOC CAT I on 04L; RNP A / VOR-DME indirect procedures also used on 04 for noise-abatement reasons; RNP D / VOR B (no ILS) on 22R/22L |
| Config logic | Wind/noise-driven; ATC tolerates tailwind beyond the ICAO 5 kt guideline to favour the 04-configuration |
| Transition level | By QNH; transition altitude 5,000 ft, TL calculated by Nice Approach |
| LVP trigger | **No CAT II/III capability exists at this field at all** — treat as CAT I-only; IFALPA flags the field may close below weather minimums in westerly wind 🟥 |
| Missed-approach driver | Terrain (both runway ends) and airspace/traffic density — not a flat/benign field |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** ABDIL, ABLAK, BIRGO, NISAR, PERUS, TUPOX, XIRBI, BORDI, LONSU, KERIT, OZMIC, SODRI, VEVAR 🟧 (sourced to an IVAO France network-sim reference document, not independently confirmed against the current SIA AIRAC chart — pull the live procedure list at planning). All published RNAV STARs require RNAV-1 (GNSS) capability; announce "Non-RNAV" if unequipped, for radar vectoring instead.
- **Selection by arrival direction / runway:** The **04-configuration** (landing 04L) is dominant given the prevailing local wind/noise logic; the 22-configuration reciprocal is used when wind dictates. Nice Approach assigns the STAR-to-runway transition for the active configuration; **ATIS notification of a configuration change can lag** — do not assume the briefed configuration remains current without confirming.
- **Transition to approach:** Expect vectoring from Nice Approach onto the appropriate final; heavy VFR/helicopter traffic in the vicinity (Cannes-Mandelieu, Monaco heliport link) means TCAS resolution advisories are a routine possibility during this phase.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart. IFALPA notes that heavy traffic sometimes leads ATC to keep arrivals at a high altitude, requiring a steeper descent profile afterward.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; brief for a possible late/high-profile descent given ATC's noted tendency to retain arrivals at altitude in heavy traffic (IFALPA).
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes. Visual-approach segments must not overfly land below 5,000 ft except for safety necessity or ATC clearance (noise-abatement rule).
- **Energy traps:** A late runway/configuration change (04↔22 ahead of a wind shift, compounded by delayed ATIS notification) is the primary energy trap. The mandatory visual segment on both runway ends (4.5 NM/80° turn on 04-side RNP procedures; 5 NM/two turns on 22-side VOR procedures) compresses the energy-management window close to the runway — do not fly a stabilised-approach profile as if it were a conventional straight-in ILS.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 04L | ILS/LOC | **CAT I only** — no CAT II/III or autoland (AIP-noted) 🟥 | verify current chart |
| 04L / 04R | RNP A (preferential for noise abatement), RNP Y/Z, VOR-DME | Indirect procedure with a **visual 45° turn on final**; straight-in ILS/RNP reserved for weather-required cases only — flying one when the indirect is in service triggers an infringement review | verify current chart |
| 22R / 22L | RNP D (preferential), RNP Z (AR — on pilot request when RNP D in service), VOR B | **No ILS/LOC published** — non-precision only, with a **mandatory visual segment starting 4.5–5 NM from the runway including one or two low-altitude turns over water**; IFALPA flags **high CFIT risk, particularly at night** | verify current chart |

- **LVP triggers:** The field has **no CAT II/III capability at all** — treat as CAT I-only for planning purposes. IFALPA recommends carrying extra holding fuel in westerly wind conditions since the field may close if weather minimums are not met, and recommends NCE not be planned as an alternate absent prior crew experience of the field.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 The Alpes-Maritimes Prealps rise close to the coastal plain immediately north/northwest of the field. The **RWY 22 visual approach carries a recognised high CFIT risk, particularly at night** (IFALPA) — the mandatory low-altitude visual turn(s) over water close to rising terrain is the specific mechanism. Even the 04-end final approach can encounter **unexpected windshear over the Var valley** in otherwise calm conditions. No precise closest-peak bearing/distance from the ARP was sourced this pass — see [Briefing §18](index.md).
- **Specific threats:** 🟥 **No approach lighting exists on any runway end** (deep water and heavy maritime traffic preclude it) — expect reduced visual cueing on final, especially at night, compounded by the "black hole" effect over the sea and city-light background reducing runway conspicuity. The PAPI on the 22-end is unusually steep (3.2°/5.6%, offset 5° south) specifically because of close terrain. Sea haze can be expected with S/SE winds.
- **Airspace / traffic:** 🟥 Heavy VFR/helicopter traffic from nearby Cannes-Mandelieu and the Monaco heliport link makes TCAS resolution advisories a routine expectation, not an edge case (IFALPA).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** The RWY 22 go-around is described as **complex — a low-altitude level-off with a rapid turn toward the sea**. The RWY 04 missed approach/departure path likewise requires a **very early turn toward the sea** given close-in terrain to the north. Fly the published missed approach and verify climb-gradient/turn detail on the current chart.
- **Re-sequencing environment:** A go-around returns the aircraft into a traffic environment with routine heavy VFR/helicopter mixing near Cannes-Mandelieu/Monaco — expect vectoring and possible holding before re-sequencing.
- **Go-around traps:** Terrain and the low-altitude turn geometry are the dominant traps here, more so than traffic density alone — brief the terrain-driven go-around profile explicitly before every approach, not just when conditions are marginal.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 04L **2,538 m** (displaced threshold — do not assume the full 2,628 m physical length); 22R **2,480 m** (declared-distance end 90 m before the physical runway end); 04R/22L **2,963 m**. See [Briefing §7](index.md) for the full declared-distance table.
- **Braking / vacate:** RWY 04L landings by Code E/F aircraft should exit no later than TWY G1 (Code A/D no later than TWY H1) to protect the LOC critical area when ILS/LOC 04L/R is in use; RWY 04R landings should exit no later than TWY EY for the same reason. A380 crews are recommended to use Break-To-Vacate (BTV) technology to exit RWY 04L/04R as early as possible; be aware that an A380 exiting via H1/J1 (or H3 for RWY 04R) can cause a brief, known ILS-signal perturbation for a following aircraft on approach.
- **Runway-excursion watch:** 🟧 RWY 04L's displaced threshold reduces usable LDA below the physical runway length — confirm the correct figure is used. ATC's routine tolerance of tailwind beyond the ICAO 5 kt guideline on the dominant 04-configuration (§10 of the Briefing) warrants a firmer braking-margin assumption than the raw wind component alone would suggest.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** RWY 04L/22R exits via A1, B1, C1, F1, EG, G1, H1, J1; RWY 04R/22L exits via W3, Q3, A3 (not usable at night), B3, EB, EF (exit-only), EY, HG — confirm the exact routing to the assigned terminal stand with Ground on the day. VAMSYS mirror gives a planning taxi-in time of **10 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 Taxiways **north of TWY U** carry reduced separation margins (17 kt straight / 10 kt curved speed limit, over-steering recommended for wingspan >36 m); **TWY U** is marked with oblique green bands to prevent confusion with the parallel RWY 04L/22R; the **Y/H2 junction is prohibited for Code D, E and F**. The AIP explicitly flags **short taxi distances from certain stands to the RWY 04L/22R holding points as a runway-incursion risk**, consistent with the field's staggered/"inverted" runway-pair operation (see [Briefing §3.3](index.md)) — taxi in with vigilance, especially if a concurrent departure is crossing ahead.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Code F (A380) stand procedures exist at specific positions (2B, 17, 52B, 54B, 56B) for exceptional/charter movements; routine K Global stand assignment not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Nice Approach (sector-specific — 120.160/120.655/124.180/125.580/128.205/130.830/134.475, take the assigned frequency) → Nice Tower 118.700 (H24) → Nice Ground 121.705 (H24) → apron/stand per handling.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Nice Approach (Nice APP)** is the facility for Nice's terminal approach, sharing radar surveillance/vectoring duties with **Marseille ACC (LFMM)** within the TMA (AIP 20.5) — see the [Europe airspace brief](../../../../airspace/europe.md) pending a dedicated Marseille (LFMM) FIR brief (see Briefing §18). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **RWY 22 visual approach carries a recognised high CFIT risk, especially at night** — extreme vigilance required (IFALPA).
- **No approach lights on any runway end** — expect reduced visual cueing on final, worst at night; brief the "black hole"-over-water and city-light-background effects explicitly.
- **No CAT II/III capability at all** — the field may simply be below landing minima in poor visibility, with no autoland fallback; IFALPA recommends extra holding fuel in westerly wind and against planning LFMN as an alternate without prior experience.
- **Sea-breeze reversal can produce tailwind at both runway ends simultaneously**, occasionally forcing temporary closure — watch the ATIS wind trend closely.
- **ATIS configuration-change notification can lag** — confirm the current runway-in-use rather than assuming the briefed configuration.
- **RWY 04L has a displaced threshold** — do not assume full-length LDA.
- **Straight-in ILS/RNP approach on 04 while the indirect procedure is in service is a noise-abatement infringement** — use only when weather genuinely requires it.
- **Staggered/"inverted" runway-pair taxi-in** — a concurrent departure crosses the landing runway ahead of you; AIP-flagged incursion risk on taxi-in near the RWY 04L/22R holding points.
- **Heavy VFR/helicopter traffic near Cannes-Mandelieu and the Monaco heliport link** — expect routine TCAS resolution advisories in the terminal area.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- LVTO/CAT I minima exact RVR figures.
- Rapid-exit taxiway/vacate detail beyond the LOC-critical-area exit points noted in §7.
- Current taxi-in routing/gate assignment for the K Global operation.
- Precise closest-terrain peak/bearing/distance from the ARP.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. LOC/GP U/S status and TWY A3 night-closure status), ATIS config/wind trend, current noise-abatement NOTAM traffic. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP, AD 2 LFMN** (AIRAC effective 2026-06-11) — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_11_JUN_2026/FRANCE/AIRAC-2026-06-11/html/eAIP/FR-AD-2.LFMN-fr-FR.html (retrieved 2026-07-26). *Declared distances/LDA, navaids, communications, local traffic regulations (LOC-critical-area exit points, taxiway hot spots), CTR/TMA structure.*
- IFALPA — Safety Bulletin 25SAB01, "Operations at Nice (NCE/LFMN) Airport" — https://www.ifalpa.org/wp-content/uploads/2025/12/25sab01-operations-at-nice-airport.pdf (retrieved 2026-07-26). *CFIT/terrain, approach-procedure structure and visual-segment detail, ATC/traffic behaviour, holding-fuel guidance.*
- DGAC / DSNA — "Environmental Briefing Nice-Côte d'Azur" — https://www.dca-gops.com/wp-content/uploads/2023/12/Environmental-briefing-v5.pdf (retrieved 2026-07-26). *Straight-in-approach noise-abatement restriction, visual-approach altitude rule.*
- IVAO France — "LFMN Nice Côte d'Azur," MANEX Aéroports Civils (AIRAC cycle 2607) — https://wiki.ivao.fr/books/manex-aeroports-civils/page/lfmn-nice-cote-dazur (retrieved 2026-07-26). *Network-sim document, not regulatory — STAR name list, frequency-sequence cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
