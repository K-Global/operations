# OJAQ — King Hussein Intl · Arrival Page

**OJAQ / AQJ** · Aqaba, Jordan · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [OJAQ Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY 01** reported preferred when winds are calm 🟧 (network-sim cross-check, not an AIP-published rule) |
| Usual approach | ILS CAT I on RWY 01 only; RWY 19 has no ILS — VOR/DME (AQB) non-precision only |
| Config logic | Wind-dependent; **single runway, no crosswind alternative** |
| Transition level | Not independently confirmed 🟧 (TA confirmed 13,000 ft AMSL per AIP) |
| LVP trigger | CAT I environment on RWY 01 only; no LVP infrastructure for RWY 19 🟧 |
| Missed-approach driver | Not terrain — benign coastal-plain field; the single-runway/no-alternative layout and the field's border-proximity navigation discipline (§5) are the operative factors |

---

## 2. STAR / transition selection

- **STARs / arrival transition fixes (names only — verify current AIRAC):** LOXUS, LONOL, TAMIM, PETRA, RAHMA, METSA 🟧 (VATSIM Jordan vACC cross-check — pull the current-AIRAC STAR list at planning).
- **Selection by arrival direction / runway:** Reported TMA entry constraints (network-sim cross-check, not AIP-confirmed): west via METSA below FL250; east via TAMIM level FL150; south via METSA passing 11,000 ft; north/northeast at LOXUS FL150. 🟧 Verify against the current AIRAC STAR chart.
- **Transition to approach:** Expect radar vectors from Aqaba Approach onto the ILS (RWY 01) or VOR/DME non-precision approach (RWY 19), whichever runway is in use.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; traffic density is low (~3,000 movements/year) so extended flow sequencing is not a typical factor.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate (§2).
- **Speed control:** 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** With **no crosswind-runway alternative**, a late wind shift can force a runway-direction change late in the arrival — brief this contingency. The field's proximity to the Egypt/Saudi Arabia/Israel borders (§5) also argues for early, positive confirmation of the assigned STAR/transition to avoid an inadvertent border-adjacent track deviation.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 01 | ILS (IAQA); VOR/DME (AQB) | **CAT I** 🟩 — reported calm-wind-preferred runway; current-AIRAC chart titles (2025) suggest an RNP approach has since been added 🟧 | verify current chart |
| 19 | VOR/DME (AQB) only | **No ILS** 🟧 — simple approach lighting + PAPI, no centreline/TDZ lighting | verify current chart |

- **LVP triggers:** CAT I environment on RWY 01 only; no low-visibility infrastructure exists for RWY 19. A VATSIM cross-check reports an ILS RWY 19 (110.9, 193°) that is **not corroborated** by the primary AIP — treat as unconfirmed and do not plan an ILS approach to RWY 19 without verifying the current AIRAC. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 Benign. The AIP obstacle table lists only modest obstructions (poles ~78 m AGL near the RWY 01 threshold; a flag mast at 142 m elevation ~8.5 km out), with an explicit AIP remark that natural terrain obstructions penetrate only ~2.5% of the approach/take-off surface. No significant close-in high terrain on either approach path.
- **Specific threats:** 🟧 The field sits within roughly 15 miles (24 km) of **Egypt, Saudi Arabia and Israel** at the head of the Gulf of Aqaba, inside a small (8 NM radius) King Hussein CTR. The AIP's own local flying regulation directs pilots "to use caution to remain within Jordanian Airspace" — a genuine, AIP-stated navigation-discipline item on any arrival, not a conflict-zone concern (see the [Middle East Airspace Briefing](../../../../airspace/middle-east.md) for the lighter-weight EASA Information Note applicable to Jordan, proportionately below the "avoid" tier applied elsewhere in the region).
- **Airspace / traffic:** 🟩 Low traffic density (~3,000 movements/year); a straightforward single-runway terminal environment worked by Aqaba Approach/King Hussein Tower.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not a driver — benign coastal-plain field; fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** Low traffic density means extended holding/re-sequencing is not a typical factor; confirm the current holding-fix structure on the chart regardless.
- **Go-around traps:** With **no crosswind-runway alternative**, a go-around driven by a wind-limit event on the assigned runway has no alternate-runway option at this field — the only recourse is a hold for improved conditions or a diversion (Briefing §16).

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** **3,000 m** on both RWY 01 and RWY 19 — no displaced thresholds published. Non-limiting for narrowbody types; a genuine consideration for widebody arrival-weight planning given the single-runway, no-alternative layout. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md).
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Tower on the day. 🟧
- **Runway-excursion watch:** 🟧 No displaced thresholds confirmed; arid coastal-desert climate makes contamination a rare rather than routine factor. RWY 19 lacks centreline/TDZ lighting present on RWY 01 — a secondary night/low-vis consideration if that end is ever in use.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Taxiways A–D and M connect the runway to the passenger/cargo aprons; confirm the exact routing with Tower/Ground on the day. 🟧 No VAMSYS taxi-time figure is published for this field (Briefing §1) — confirm at planning.
- **Hot spots / tight taxiways:** None specifically flagged in the reachable AIP; confirm current NOTAM/chart picture.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody/Code E stand availability is not confirmed against the primary AIP; a VATSIM cross-check reports one "heavy" gate (stand 7) plus additional heavy positions at a "Charlie" apron, treated as unconfirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Aqaba Approach 119.2 (2011/2012 AIP) / 132.425 (VATSIM cross-check, discrepancy — verify current) → King Hussein Tower 118.1 (0400–1800; combined onto Approach frequency 1800–0400 per the 2011/2012 AIP cycle 🟧) → King Hussein SMC 121.9 (ground).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Aqaba Approach** is the terminal-approach facility; **Amman Control (OJAC)** — the same FIR that covers OJAI — hands off en route inbound. See [Middle East Airspace Briefing](../../../../airspace/middle-east.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent, and a frequency discrepancy exists between sources (§Briefing §18).

---

## 10. Gotchas

- **No crosswind-runway alternative** — a strong crosswind on the day's assigned direction has no orientation workaround; this is the field's single most important arrival-planning fact.
- **RWY 19 has no ILS** — the VATSIM cross-check's reported ILS RWY 19 is **not corroborated** by the primary AIP; do not plan a precision approach to RWY 19 without verifying the current AIRAC.
- **Field borders three countries within ~15 miles** — maintain positive navigation discipline within the small (8 NM) King Hussein CTR; the AIP itself cautions pilots to remain within Jordanian airspace.
- **Reduced/combined ATC position overnight** per the 2011/2012 AIP cycle — verify current Tower/Approach hours structure before planning a night arrival.
- **Extreme summer heat** (ref. temp 40.1°C) despite the field's sea-level elevation — a density-altitude consideration on a hot-day go-around/climb performance calculation.
- **Not currently VAMSYS-categorised** — confirm the operator category assumption before dispatch.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Transition level (not independently confirmed).
- ILS RWY 19 discrepancy — VATSIM cross-check reports one, primary AIP does not; resolve against current AIRAC.
- Rapid-exit taxiway/vacate detail.
- Approach/Tower frequency and hours-structure discrepancy (Briefing §18).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting — no alternate runway exists at this field), ATIS/QNH (no ATIS confirmed — weather passed on first contact per VATSIM cross-check 🟧), current regional conflict-zone/GNSS-interference advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Jordan CARC AIP, AD 2 OJAQ** (base cycle AMDT 46/2007, amended through AMDT 66/2012) — declared distances, obstacle data, local traffic regulations, ATS airspace, communications, navaids — https://carc.gov.jo/pdf/AD2_OJAQ.pdf and https://khiaops.com/aac/attachments/article/121/052812AD2%20OJAQ.pdf (retrieved 2026-07-26).
- Wikipedia — "King Hussein International Airport" — https://en.wikipedia.org/wiki/King_Hussein_International_Airport (retrieved 2026-07-26). *Border proximity, single-runway/CAT I confirmation.*
- VATSIM Jordan vACC — "Pilot Briefing: Aqaba King Hussein Airport [OJAQ]" (2024) — https://jordan.vatsim.me/wp-content/uploads/2024/02/jovacc-ojaq-briefing-2024.pdf (retrieved 2026-07-26). *Network-sim document — STAR fix/TMA-entry/frequency cross-check; ILS RWY 19 discrepancy noted and not adopted.*
- [Middle East Airspace Briefing](../../../../airspace/middle-east.md) — Amman (OJAC) FIR context.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
