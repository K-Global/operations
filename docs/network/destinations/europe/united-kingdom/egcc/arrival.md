# EGCC — Manchester · Arrival Page

**EGCC / MAN** · Manchester, England, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EGCC Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **23R** in westerly (preferred) dual operation; **05R** in easterly dual operation; **05L or 23R** in single-runway operation (Runway 1 only) |
| Usual approach | ILS CAT III on 05L/23R; ILS CAT I on 05R (23L rarely an arrival runway — see §4) |
| Config logic | Westerly (23-config) preferred at all times when safe: headwind, tailwind ≤5 kt, crosswind ≤15 kt, ILS/approach lights serviceable |
| Transition level | By QNH; transition altitude 5,000 ft — verify current chart 🟧 |
| LVP trigger | LVP Vis: IRVR ≤600 m and cloud ceiling ≤200 ft — restricts operation to single-runway on **23R or 05L only**; LVP Cloud: IRVR ≥600 m and ceiling ≤200 ft, permitted on 23-DUAL/23R-single/05L-single `[Manchester Airport ASI-15 §1.1]` |
| Missed-approach driver | Airspace/traffic re-sequencing into the active segregated/single-runway configuration, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** **ROSUN** (arrivals from the North and East), **DAYNE** (arrivals from the South and East), **MIRSI** (arrivals from the West) are the field's three holding-stack/release points; **DALEY** is a fourth named STAR. All four are Continuous-Descent-Approach-mandated per Manchester's own noise procedure `[Manchester Airport ASI-8 §5, citing AIC 51/2006]`.
- **Selection by arrival direction / runway:** The **westerly (23-config)** is dominant given the preferred-runway policy; the **easterly (05-config)** reciprocal is used when wind dictates. Manchester Radar/Director assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Expect a STAR-to-ILS transition with radar vectors onto final; a minimum radar separation of 3 NM is used between arriving aircraft (2.5 NM if separately coordinated) per network-sim reference — verify current procedure. 🟧
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; holding-stack aircraft are separated vertically per standard stack procedure when a delay is expected.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate. Manchester targets a **90% Continuous Descent Approach (CDA)** performance rate `[Manchester Airport Noise Action Plan 2024-2028]` — expect ATC to support a smooth continuous descent rather than level segments where traffic allows.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (UK/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/config changes (23↔05 ahead of a wind shift, or dual→single reversion at the top of an LVP event) are the main energy traps at this field; visual approaches are **not permitted 2300–0700 local** under normal circumstances for jet aircraft (radar positioning to at least 7 NM final) — do not plan a late visual join inside that window.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 05L | ILS (IMM) | **CAT III** — primary low-vis/single-runway-default arrival runway 🟩 | verify current chart |
| 23R | ILS (INN) | **CAT III** — primary westerly dual-ops arrival runway; **False Localiser Capture possible from North and South** 🟥 | verify current chart |
| 05R | ILS (IMC) | **CAT I** — easterly dual-ops arrival runway 🟩 | verify current chart |
| 23L | ILS (ident tbc) 🟧 | **CAT I per AIP context, but not the field's routine precision-approach runway** — traffic switches to 05R's CAT I ILS when visibility drops to ≤3,000 m; **never used for landing in any LVP state** 🟥 | verify current chart |

- **LVP triggers:** **LVP Cloud** — IRVR ≥600 m, cloud ceiling ≤200 ft, permitted on 23-DUAL/23R-single/05L-single. **LVP Vis** — IRVR ≤600 m, cloud ≤200 ft, permitted **only** on 23R-single or 05L-single (Runway 1). A further **Block-to-Block** sub-state applies at IRVR ≤200 m. Movement rate falls to roughly 24/hour under LVP `[Manchester Airport ASI-15 §1.1, §2.3.2]`.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None of significance. Flat Cheshire/Greater Manchester plain at 257 ft AMSL — no close-in high terrain relevant to any arrival path (see [Briefing §3.1](index.md)).
- **Specific threats:** 🟥 **False Localiser Capture may be experienced when approaching RWY 23R from the North and South** — a published AIP caution; cross-check raw ILS data during the approach and do not rely solely on autopilot capture behaviour. Segregated dual-runway operation means an arrival on one runway of the active pair occurs alongside continuous departures on the other — maintain traffic awareness even under radar sequencing.
- **Airspace / traffic:** 🟧 Busy regional-hub density under Manchester Radar; expect vectoring/holding at the DAYNE/MIRSI/ROSUN stacks in poor weather or during a bank, and a capacity reduction to ~24 movements/hour if LVP Vis forces single-runway operation.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat plain) — fly the published missed approach and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns the aircraft into the active segregated dual-runway or single-runway environment depending on configuration — expect vectoring and possible holding at one of the three stacks before re-sequencing, especially during an LVP event.
- **Go-around traps:** Configuration awareness (dual vs single, and which runway pair is active) is the main go-around trap at this field, rather than a terrain or obstacle-driven concern.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 05L **2,587 m** (threshold displaced 427 m); 23R **2,714 m** (threshold displaced 183 m); 05R **2,864 m**; 23L **2,864 m** (threshold displaced 186 m) — see [Briefing §7](index.md) for the full declared-distance table. All figures are ample for any K Global type in the **L** category at typical landing weights, but brief the correct displaced-threshold LDA, not the full physical runway length.
- **Braking / vacate:** 05L/23R is non-grooved; 05R/23L is grooved. Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Tower on the day. 🟧
- **Runway-excursion watch:** 🟧 Displaced thresholds materially shorten LDA versus physical runway length on three of the four runway ends (§7 Briefing); autumn/winter frontal rain and the de-icing season are the relevant contamination/braking-action consideration.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, taxi in to **Terminal 2** or **Terminal 3** per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **14 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **B777, A340-600 and A380 are PROHIBITED from Taxiway Lima.** Taxiway November-Charlie has painted centreline only and needs a Follow-Me in darkness/LVP. Several taxiways are wingspan-restricted to ≤36 m (November-Alpha/Bravo Blue/Orange, Zulu-Blue/Orange, Lima south of Stand 6, Juliet-Echo, Juliet-Foxtrot, Golf east of Stand 55) — see [Briefing §13](index.md). Under LVP, CAT II/III holding points govern taxi entry to the active runway (23R single: enter via J1/M1, vacate at BD/AE/AG1/A1; 05L single: enter via A1/AG1/AF1, vacate at H1/M1/J1) `[Manchester Airport ASI-15 §2.3.1]`.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Terminal 2's expanded pier structure is the primary widebody-capable cluster post-2025 transformation; Terminal 3 gates are narrowbody/regional-oriented.

---

## 9. Arrival frequency sequence

- **Sequence:** **Manchester Radar 118.580 (South)/135.005 (North) → Manchester Director 121.355 (as directed) → Manchester Tower 118.630 (AIR North) or 119.405 (AIR South) → Manchester Ground 121.855 (day) / 121.705 (night).** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **Approach/Departer control:** **Manchester Radar** is the facility for Manchester's terminal approach; AIR North retains control of runway selection. 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **RWY 23L is never used for landing in any LVP state** — do not expect it as a low-vis arrival option regardless of dual/single configuration.
- **False Localiser Capture on RWY 23R approaching from North and South** — cross-check raw ILS data; do not assume clean autopilot capture.
- **Visual approaches are not permitted 2300–0700 local** under normal circumstances for jet aircraft — expect radar positioning to at least 7 NM final in this window.
- **Segregated dual/single-runway configuration can change with time of day and with LVP onset** — LVP Vis forces single-runway operation on 05L/23R regardless of the previously active pair; confirm current ATIS configuration.
- **B777, A340-600 and A380 are PROHIBITED from Taxiway Lima** on taxi-in — confirm an alternative route to stand.
- **Config swap (23↔05) driven by a wind shift** can bring a late runway change — watch the ATIS wind trend, especially the tailwind (≤5 kt) and crosswind (≤15 kt) preferential-runway thresholds.
- **Movement rate falls to roughly 24/hour under LVP** — expect extended holding/vectoring if an LVP event coincides with an arrival bank.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names/transitions and exact approach minima per runway.
- 23L ILS localiser identifier (not independently confirmed this pass).
- Radar-separation minima and stack vertical-separation figures (sourced to a network-sim reference, not independently AIP-confirmed).
- Rapid-exit taxiway/vacate detail.
- Current post-Terminal-1-closure/Terminal-2-completion (2025) taxi-in routing and gate assignment.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. LVP/CAT III equipment status and Runway 2 availability), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here. See Sources for the tier hierarchy.*

- **UK AIP (NATS AIS), AD 2 EGCC**, AIRAC cycle effective 2026-03-19 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2026-03-19-AIRAC/html/eAIP/EG-AD-2.EGCC-en-GB.html (retrieved 2026-07-26).
- Manchester Airport — Airside Standing Instruction 8, "Aircraft Noise" — https://assets.live.dxp.maginfrastructure.com/f/73114/x/0ff030296a/asi-8-aircraft-noise.pdf (retrieved 2026-07-26). *Preferential runway/config logic, visual-approach restriction, CDA-mandated STARs.*
- Manchester Airport — Airside Standing Instruction 15, "Low Visibility Procedures" — https://assets.live.dxp.maginfrastructure.com/f/73114/x/44b8f0b603/asi-15-low-visibility-procedures.pdf (retrieved 2026-07-26). *LVP states, runway-specific LVP availability, CAT II/III holding points.*
- Manchester Airport — Runway Data Sheet — https://assets.live.dxp.maginfrastructure.com/f/73114/x/639c2972b3/man-runway-data-sheet-2023.pdf (retrieved 2026-07-26). *Holding-stack names DAYNE/MIRSI/ROSUN, arrival-direction split.*
- IVAO XU Documentation Library — "Manchester (EGCC)" local procedures — https://wiki.ivao.aero/en/home/divisions/xu/atc/aerodrome/local-procedure/manchester/egcc (retrieved 2026-07-26). *Network-sim reference, not regulatory — radar separation/stack procedure cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
