# LIMC — Malpensa · Arrival Page

**LIMC / MXP** · Ferno / Somma Lombardo, Varese, Lombardy, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LIMC Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **35L or 35R** (south config) preferred where CAT II/III capability may be needed; **17L or 17R** (north config) when wind dictates |
| Usual approach | ILS on 35L/35R (CAT II/III capable) or 17L (CAT I only); **RNP only on 17R — no ILS** |
| Config logic | Wind/noise/time-of-day driven; 35L/35R pair alternates roles on a published rotating schedule; **35L preferential for Code F landings** |
| Transition level | By QNH; transition altitude 6,000 ft MSL (network-sim cross-check) — verify current chart 🟧 |
| LVP trigger | Po Valley winter radiation/advection fog (Oct–Mar, worst 04:00–09:00 local); reported segregated LVP mode — **RWY 35L for landings**, RWY 35R for departures 🟧 |
| Missed-approach driver | Airspace/traffic density in the Milano TMA, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** RNAV arrivals reported under fix/procedure names **ASTIG, DEVOX, EGFOL, EVRIP, MEBUR, ODINA, PEXUG, RIXUV, SRN**, plus combined-name variants **LEGLO** and **ULCOR**, each with multiple runway/configuration suffix variants — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** The active config (17-direction vs. 35-direction) and the 35L/35R role-alternation schedule (see Briefing §12) together determine which STAR/runway combination is assigned; Milano Radar assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS/RNP transition with radar vectors onto final under the sectorised Milano Radar/APP; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; expect additional flow speed control given the dense, shared Milano TMA (Linate, Orio al Serio traffic).

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate. Winter-fog-driven reduced-rate or single-runway arrivals can compress the descent — brief an early-descent contingency in season.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/config changes (17↔35 ahead of a wind shift, or a 35L/35R role-alternation boundary crossed by a delayed schedule), and holding/resequencing during a winter-fog event, are the main energy traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 17L | ILS / LOC, RNP, VOR | **CAT I only** — no CAT II/III chart found 🟧 | verify current chart |
| 17R | RNP only | **No ILS or VOR published** for this runway end 🟥 | verify current chart |
| 35L | ILS / LOC, RNP, VOR | **CAT II/III capable** 🟩; preferential for Code F landings | verify current chart |
| 35R | ILS / LOC, RNP, VOR | **CAT II/III capable** 🟩 | verify current chart |

- **LVP triggers:** Winter Po Valley radiation/advection fog is the routine LIMC trigger. Reported LVP configuration is **segregated**: RWY 35L for landings, RWY 35R for take-offs — i.e. do **not** expect mixed-mode use of either runway during LVP. Exact RVR/trigger figures and ILS sub-category (II vs IIIA/IIIB) not confirmed from a primary source this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None near the field itself. Flat Po/Ticino valley floor at 768 ft AMSL; the Alps' foothills lie roughly 20–25 NM N/NW, relevant to some higher-altitude western STAR transitions rather than the final approach environment — verify MSA on the current chart for those routes.
- **Specific threats:** 🟥 **Asymmetric approach capability between runway ends** — a wind-driven config change from the CAT-II/III-capable south config (35L/35R) to the north config (17L CAT-I-only, 17R no-ILS) ahead of or during a fog event materially reduces achievable minima. The field's **independent/segregated parallel-runway geometry** also means the "other" runway is not typically available as an immediate alternate landing runway without a config change.
- **Airspace / traffic:** 🟥 Dense, sectorised Milano Radar/APP environment shared with Linate and Orio al Serio traffic — brief for re-sequencing and extended vectoring, especially in marginal weather.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat valley floor) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you to a dense, sectorised Milano TMA — expect extended vectoring and possible holding before re-sequencing, especially during a winter-fog event when the field may already be running reduced/segregated capacity.
- **Go-around traps:** Config/runway-role awareness given the independent-parallel geometry — do not assume the adjacent parallel is immediately available for a re-attempt without a config change; CAT II/III capability specifically is confined to 35L/35R.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 17R and 35R **3,920 m** (full length); 17L **2,977 m** (threshold displaced ≈941 m); 35L **3,515 m** (threshold displaced ≈400 m) — see [Briefing §7](index.md). All figures are ample for any K Global widebody at typical arrival weights, but the two displaced-threshold runways are **not symmetric** with their full-length counterparts.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 Winter-contamination/braking-action consideration applies in the Po Valley's Nov–Mar de-icing season (see Briefing §14); no wet/contaminated-runway performance data confirmed this pass.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, taxi in to **Terminal 1** (Concourse A/B/C) per Ground/Apron assignment; a dedicated **"Taxi Routes RWY 35L/R"** chart and a separate **low-vis taxi-routing chart** are indexed for the current AIRAC. VAMSYS mirror gives a planning taxi-in time of **14 min** `[VAMSYS mirror 2026-07-26]` 🟧 (in/out order as mirrored, not independently reconfirmed).
- **Hot spots / tight taxiways:** 🟥 Not individually named in reachable public sources; the existence of a dedicated **Code-F taxi-restriction chart** signals recognised ground-movement complexity for large wide-body traffic — see [Briefing §13](index.md); pull the current chart for exact hot-spot identifiers before a large wide-body taxi-in.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody stand/gate assignment for our operation not independently confirmed; Terminal 2 is not airside-connected to Terminal 1.

---

## 9. Arrival frequency sequence

- **Sequence:** **Milano Radar (sectorised — 126.750 / 134.175 / 125.630) → Malpensa Tower (128.350 main / 123.600 East Tower) → Malpensa Ground West 121.900 / Ground North 121.825.** Take the assigned frequency and confirm current chart — an older (c. 2011) source instead assigns Tower 119.000 to RWY 17L/35R and 128.350 to RWY 17R/35L; treat as superseded pending AIRAC confirmation. (Frequencies from Briefing §8.) 🟧
- **Approach/Departure control:** **Milano Radar** (ENAV, sectorised) is the facility for Malpensa's terminal approach; **Milano ACC (LIMM)** hands off en route inbound. 🟧 No dedicated Milano ACC (LIMM) FIR brief exists yet in this tree — see [Airspace — General — Europe](../../../../airspace/europe.md) in the interim. Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **RWY 17R has no ILS** — never expect an ILS approach to this runway end; RNP (RNAV) only.
- **CAT II/III exists only on 35L/35R** — a config change to the 17-direction ahead of or during a fog event can leave the field with materially reduced approach capability.
- **The independent parallel runways are typically role-segregated**, not mixed-use — during LVP specifically, expect landings concentrated on 35L only.
- **35L/35R roles alternate on a published day/time-of-day schedule** — check current ATIS config; a late arrival can cross an alternation boundary.
- **Overnight (2330–0630 LT) reported reduced-capacity single-runway regime** — a late arrival risks running into this window; confirm current status.
- **Displaced thresholds differ (17L ≈941 m, 35L ≈400 m)** — verify the correct LDA for the assigned runway.
- **Code-F/reference-code ambiguity** — confirm current stand/taxiway suitability on taxi-in for a large wide-body; see Briefing §13.
- **Dense, shared Milano TMA** (Linate, Orio al Serio) — expect vectoring/holding, especially in marginal weather or during a bank.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category (II vs. IIIA/IIIB) confirmation on 35L/35R.
- Exact LVP/CAT II/III trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Current taxi-in routing and gate assignment, and Code F stand suitability.
- Current ATC frequency set — network-sim cross-check partially disagrees with an older (2011) spotter-guide source on tower frequency assignment.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT II/III equipment status), ATIS config/wind trend, current Milano TMA/RAD status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- SEA S.p.A. ("Milan Airports") — "Technical data" — https://milanairports.com/en/group/technical-data (retrieved 2026-07-26). *Declared distances, preferential-runway rule, reference code.*
- IVAO Italy Division — QuickOverview LIMC — https://quickoverview.ivao.it/aerodrome/show/LIMC (retrieved 2026-07-26). *LVP runway assignment, STAR/fix structure, TA, ATC frequency sequence. Network-sim document, not regulatory.*
- Navigraph — LIMC Airport Charts index — https://navigraph.com/airport/LIMC/Milan-Malpensa (retrieved 2026-07-26). *STAR/approach names, CAT II/III chart existence per runway (names only).*
- OurAirports — https://ourairports.com/airports/LIMC/runways.html (retrieved 2026-07-26). *Displaced-threshold distance cross-check.*
- scramble.nl — "Milano - Malpensa" airfield guide — https://www.scramble.nl/planning/airfield-guide/italy/milano-malpensa (retrieved 2026-07-26; content dated "last validated May 2011"). *Historical tower-frequency cross-check — superseded where conflicting.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
