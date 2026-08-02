# VTBS — Suvarnabhumi Intl · Arrival Page

**VTBS / BKK** · Bangkok (Samut Prakan Province), Thailand · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Thailand (AEROTHAI)-derived, Asia network build

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [VTBS Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **19/20L/20R** configuration by default (southbound); **02L/20R is arrivals-only** per operational cross-check; **01/02R/02L** used when tailwind exceeds ~5 kt |
| Usual approach | ILS Z (CAT II) on 01/19 and 02R/20L; RNP (no ILS) on 02L/20R |
| Config logic | Wind-driven; NE-monsoon season more often forces the reciprocal (northbound) configuration |
| Transition level | Reported fixed at **FL130** for all Thailand aerodromes per operational cross-check 🟧 |
| LVP trigger | SW-monsoon convective/heavy-rain events dropping visibility toward the CAT II ceiling 🟧 (exact RVR trigger not confirmed) |
| Missed-approach driver | Airspace/traffic density (busy Class C terminal area), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — an entirely new STAR set was published with AIRAC 2410 (3 Oct 2024), retiring all prior procedures (e.g. the former "DOLNI" arrivals no longer exist). Pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** The southbound **19/20L/20R** configuration is dominant; the northbound **01/02R/02L** configuration is used when tailwind exceeds ~5 kt (more common NE-monsoon season). Bangkok Approach assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** All VTBS STARs are published as **open STARs** — absent other ATC instruction, continue on the charted heading after the last STAR waypoint; do not proceed onto the instrument approach procedure without an explicit approach clearance, and do not delete any flight-plan discontinuity between the STAR and the IAP. 🟧 (Operational cross-check; verify against current AIRAC chart notes.)
- **Speed / flow constraints on the STAR:** All STARs carry speed and level restrictions that apply unless explicitly cancelled by ATC — verify current chart; 250 KT or less below 10,000 ft applies regardless.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning to meet the first STAR altitude gate; Bangkok Approach may offer track-shortening/"direct-to" instructions when traffic is light — use judgement to manage the resulting energy state while respecting any constraint not yet cancelled.
- **Speed control:** STAR speed gates and 250 KT or less below 10,000 ft (local rule) — confirm current chart. ATC may also issue a discrete speed instruction (e.g. a minimum speed to a specified distance from touchdown) to manage sequencing.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes; do not descend below the last assigned/charted altitude until cleared for the approach.
- **Energy traps:** A late runway/configuration change (19/20L/20R ↔ 01/02R/02L) driven by a wind shift, and holding/re-sequencing during a monsoon convective event, are the principal energy traps at this field. The historically-offset ILS DME (§10 of the Briefing) is also a distance-awareness trap if relying on raw DME rather than the navigation display.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 01 | ILS Z | **CAT II** — no CAT III at this field 🟧 | verify current chart |
| 19 | ILS Z | **CAT II** 🟧 | verify current chart |
| 02R | ILS Z | **CAT II** 🟧 | verify current chart |
| 20L | ILS Z | **CAT II** 🟧 — site of a 2020 landing runway excursion (Briefing §3.3) | verify current chart |
| 02L | RNP | No ILS; arrivals-only role per operational cross-check | verify current chart |
| 20R | RNP | No ILS | verify current chart |

- **LVP triggers:** SW-monsoon (May–Oct) convective thunderstorms/heavy rain are the routine VTBS trigger; because the field's ceiling is CAT II (not CAT III) and RWY 02L/20R has no ILS at all, a monsoon cell dropping visibility below CAT II minima is a genuine diversion-risk event, not merely a delay. Exact RVR/trigger figures not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Chao Phraya delta plain at 4.6 ft AMSL — no close-in high terrain relevant to any arrival path. The AIP obstacle table lists only urban obstacles (on-field ATC tower 475 ft/145 m AMSL, scattered city towers/buildings 130–390 ft AMSL) — routine city-airport obstacle awareness on any visual/circling segment, not a CFIT driver.
- **Specific threats:** 🟧 Monsoon-season convective cells can bring heavy rain, gusting/shifting wind, and reduced visibility with limited advance warning; wake/traffic density is elevated given the field's very high movement rate. RWY 01/19 is **not grooved** — a wet-runway braking-action consideration on landing.
- **Airspace / traffic:** 🟧 High-density Class C terminal environment under Bangkok Approach/Suvarnabhumi Tower — one of the busiest airports in the world by movements and airline count; expect vectoring and sequencing workload, especially during a bank or a monsoon convective event. See [Asia Airspace Brief](../../../../airspace/asia.md) (Bangkok/VTBB FIR).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat delta plain) — fly the published missed approach and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you to a busy, radar-vectored Class C terminal area — expect extended vectoring and possible holding before re-sequencing, especially during a monsoon convective event when multiple aircraft may be affected simultaneously.
- **Go-around traps:** Runway-role awareness (02L/20R arrivals-only, 02R/20L departures-only in the standard operational pattern) remains relevant on the miss — confirm the controller's sequencing intent rather than assuming the pre-go-around configuration holds.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 01/19 and 02R/20L **4,000 m** and **3,700 m** respectively (carried forward from the pre-redesignation AIP publication — see Briefing §7, flagged 🟧 pending post-redesignation re-confirmation); RWY 02L/20R's LDA not confirmed in reachable sources 🟧. All figures ample for any K Global type at typical arrival weights.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources; per operational cross-check, each runway currently has only one side available to vacate, and pilots are expected to vacate completely and continue taxiing per instruction without stopping short at the runway exit. 🟧
- **Runway-excursion watch:** 🟧 **RWY 02R/20L is grooved; RWY 01/19 is not** — factor this into wet-runway braking-action expectations during the SW-monsoon season. A precedent exists: a 2020 landing runway excursion occurred on the runway end now designated 20L (part of 02R/20L).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in toward the main terminal (Concourses/Gates A–G) or SAT-1 per Ground/Tower assignment; VAMSYS mirror gives a planning taxi-in time of **15 min** `[VAMSYS mirror 2026-07-26]`. Aircraft landing on **RWY 02L/20R** should expect a defined taxi flow toward taxiways F/W or F/Z holding short of RWY 02R/20L, remaining on the Tower frequency with an explicit runway-crossing clearance required, per operational cross-check. 🟧
- **Hot spots / tight taxiways:** 🟥 **Taxiways T8, T9, T10, T11, T12 are prohibited for A380-class (Code F) aircraft** — confirm alternate routing for any Code F arrival. Expect explicit runway-crossing instructions where taxi-in from RWY 02L/20R requires crossing RWY 02R/20L.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — confirmed Code F stands at C3/C7/E4/E8 (main terminal), S111–S118 (SAT-1), 201–203/401–403 (remote); K Global's specific gate assignment not confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Bangkok Approach (sector-specific: 122.35/124.35/125.2/128.95/119.1/120.3/125.8 MHz) → Suvarnabhumi Arrival 121.1/126.3 MHz (typically below ~7,000 ft) → Suvarnabhumi Tower 118.2/274.5 MHz (RWY 01/19) or 119.0 MHz (RWY 02R/20L) → Suvarnabhumi Ground 121.65/121.75/121.95 MHz (apron-sector-specific).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8; RWY 02L/20R tower assignment not independently confirmed 🟧.)
- **Approach/Departure control:** **Bangkok Approach** is the terminal-area facility; **Bangkok ACC (VTBB)** hands off en route inbound — see [Asia Airspace Brief](../../../../airspace/asia.md) (no dedicated VTBB FIR brief built yet). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **No CAT III fallback at this field** — brief the CAT II/RNP plan and a genuine holding/diversion contingency for the monsoon season, not just a delay expectation.
- **RWY 02L/20R is arrivals-only and RNP-only (no ILS)** under the standard operational pattern — do not expect an ILS there, and confirm the pattern holds before assuming a landing-runway assignment.
- **Runway/procedure renumbering (3 Oct 2024)** — former 01R/19L is now **01/19**; former 01L/19R is now **02R/20L**; the new third runway is **02L/20R**. Older charts/navdata with the prior designators or STAR names (e.g. "DOLNI") are obsolete.
- **ILS DME is offset from the threshold** (historically ~2.2–2.3 NM) — rely on the navigation display or apply the offset, do not expect a zero DME reading over the threshold.
- **RWY 01/19 is not grooved; 02R/20L is** — a genuine wet-runway landing-performance/braking-action difference in the monsoon season.
- **Config swap (19/20L/20R ↔ 01/02R/02L) driven by a wind shift** — watch the ATIS wind trend, particularly around the NE-monsoon transition.
- **A 2020 landing runway excursion occurred on the runway end now designated 20L** — a live reminder to respect wet-runway/crosswind limits on that runway.
- **Mode S transponder/TCAS must be correctly configured on the ground** — the field's surface movement radar depends on Mode S multilateration.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- LDA and declared distances for RWY 02L/20R (not obtained in machine-readable form this pass).
- Exact LVP/CAT II trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Transition level (FL130 fixed) — sourced to operational cross-check, not independently confirmed from the AIP ENR extract.
- Tower frequency assignment for RWY 02L/20R arrivals.

> **Live data — pull at planning:** wx/METAR/TAF/TREND (esp. monsoon convective activity), NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, current ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Thailand, AD 2 VTBS**, AEROTHAI/CAAT eAIP, 2023-04-20 AIRAC cycle — https://aip.caat.or.th/2023-04-20-AIRAC/html/eAIP/VT-AD-2.VTBS-en-GB.html (retrieved 2026-07-26). *Runway/declared-distance data, communications, navaids, obstacle table.*
- **AIRAC AIP SUP A 42/24 — VTBS aerodrome-information update for new runway designations**, AEROTHAI/CAAT, effective 2024-10-03 — https://aip.caat.or.th/2024-10-03-AIRAC/html/eSUP/VT-eSUP-24-42-A-en-GB.html (retrieved 2026-07-26). *Third-runway (02L/20R) RNP/non-precision status.*
- VATSIM Thailand vACC — "VTBS - Suvarnabhumi Airport" pilot briefing — https://wiki.vacc-tha.org/books/pilot-briefings-charts/page/vtbs-suvarnabhumi-airport (retrieved 2026-07-26). *Network-sim document, not regulatory — STAR/open-STAR handling, runway-role, transition-level and taxi-in cross-check.*
- Wikipedia — "Suvarnabhumi Airport" — https://en.wikipedia.org/wiki/Suvarnabhumi_Airport (retrieved 2026-07-26). *2020 runway-excursion event corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
