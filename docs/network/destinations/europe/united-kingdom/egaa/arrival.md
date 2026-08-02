# EGAA — Aldergrove · Arrival Page

**EGAA / BFS** · Aldergrove, Co. Antrim, Northern Ireland, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EGAA Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Wind-dependent — no single published preferential runway; **low-visibility conditions strongly favour RWY 25**, the field's only CAT III approach |
| Usual approach | ILS CAT III (RWY 25) · ILS CAT I only (RWY 17) · non-precision only (RWY 07 and RWY 35, no ILS) |
| Config logic | Wind/weather-driven; runway assignment materially changes low-visibility capability — see §4/§5 |
| Transition level | By QNH; transition altitude 6,000 ft — TL not confirmed this pass 🟧 |
| LVP trigger | Not confirmed exact RVR; CAT III RWY 25 is the field's standing low-visibility mitigation 🟧 |
| Missed-approach driver | Runway-dependent minima asymmetry, not confirmed terrain — see §6 |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** No single published preferential-runway rule found — wind/traffic-driven. Aldergrove Approach assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Expect a radar-vectored transition onto final; verify the charted transition, especially given the mixed CAT III/CAT I/non-precision environment across the four runway ends.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate. 🟧 Not independently detailed this pass.
- **Speed control:** 250 KIAS below FL100 (UK/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** The standout energy/planning trap at EGAA is a **late runway change between CAT III RWY 25 and a lower-capability runway** (CAT I RWY 17, or non-precision RWY 07/35) in deteriorating weather — this is a genuine, minima-significant trap given the field's asymmetric low-visibility capability (see Briefing §3.5). Brief a contingency for this explicitly, not just a generic late-change caution.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 07 | Non-precision (procedure name/type not confirmed) 🟧 | No ILS | verify current chart |
| 25 | ILS (IAG) | **CAT III** — the field's only CAT III approach; sub-category not confirmed 🟧 | verify current chart |
| 17 | ILS (IFT) | **CAT I only** — AIP-noted glidepath fluctuations outside 8 NM 🟧 | verify current chart |
| 35 | Non-precision (procedure name/type not confirmed) 🟧 | No ILS; displaced threshold | verify current chart |

- **LVP triggers:** Not confirmed exact RVR/trigger figures. **RWY 25's CAT III capability is the field's standing low-visibility mitigation** — in conditions where wind assigns a landing to RWY 07, 17 or 35 instead, expect materially higher minima than CAT III. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 No close-in high terrain identified in the reachable AIP extract; not independently confirmed against a current MSA/obstacle chart — cross-ref [Briefing §3.1](index.md).
- **Specific threats:** 🟥 The field's **mixed-precision runway environment is the standout hazard** — CAT III (RWY 25) versus CAT I only (RWY 17) versus non-precision only (RWY 07 and RWY 35, no ILS). A wind-driven runway assignment away from RWY 25 in marginal weather can put a crew onto a non-precision or CAT-I-only approach with significantly less favourable minima than expected — brief this explicitly before descent. Separately, both published ILS carry AIP-noted glidepath cautions: **ILS RWY 17 may show glidepath fluctuations outside 8 NM**, and **ILS RWY 25 may show small fluctuations between 8 NM and 5 NM** — genuine, sourced cautions, not generic boilerplate.
- **Airspace / traffic:** Class D CTR (9 NM, SFC–FL105); field sits in **Scottish FIR (EGPX)**, worked by Scottish ACC — **no dedicated Scottish FIR brief exists yet in this network**, see [Europe area brief](../../../../airspace/europe.md) for general regional context and Briefing §18. 🟧

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** No confirmed terrain driver (§5) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** Not independently detailed this pass — expect standard radar re-sequencing under Aldergrove Approach. 🟧
- **Go-around traps:** The operative concern on a missed approach here is the **runway-dependent minima asymmetry** — a go-around from a non-precision or CAT-I-only runway leaves less margin than one from CAT III RWY 25; factor this into the missed-approach decision point in marginal weather.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 07 **2,780 m**; RWY 25 **2,780 m**; RWY 17 **1,791 m**; RWY 35 **1,799 m (displaced** from 1,891 m physical length**)**. Cross-ref [Briefing §7](index.md).
- **Braking / vacate:** **RWY 17 landing requires a backtrack** via a turning area 90 × 85 m south of the RWY 35 displaced threshold — not a simple roll-to-exit. For **RWY 25 arrivals to the main terminal**, the AIP publishes a **Standard Arrival Routing**: vacate right onto RWY 35, right onto Taxiway Charlie, then hold at C2 pending further ATC taxi clearance — a genuine quirk in which a RWY 25 landing crosses onto the field's *other* runway as part of the standard routing. Brief this explicitly.
- **Runway-excursion watch:** 🟧 **RWY 35's displaced threshold and 0.76% downslope over the first 400 m of the LDA** are genuine energy-management notes on an already-shorter runway. **180° turn is NOT permitted on RWY 17** for 737/A319-size aircraft or larger — must continue to the RWY 35 turning circle rather than a tight U-turn.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** For **RWY 25 arrivals to the main terminal** (IFR): vacate right onto RWY 35, right onto Taxiway Charlie, hold at C2 pending further ATC taxi clearance — a distinctive, AIP-published routing that crosses onto the intersecting runway pair; brief it as a real ground-complexity item, not an incidental detail. Taxi-in routing for the other runway ends is not detailed in reachable sources this pass. 🟧 VAMSYS mirror gives a planning taxi-in time of **6 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **Taxiway Bravo** (PPR, apron pushback procedures — cross-ref [Briefing §13](index.md)); the **RWY 25-via-RWY 35 crossing routing** described above; **winter RWY 17/35 sweeping priority** is addressed in local snow-clearance procedures, detail not confirmed this pass. 🟧
- **Stand/gate notes:** Not detailed in reachable sources — see [Dispatch §3](dispatch.md). 🟧

---

## 9. Arrival frequency sequence

- **Sequence:** **Aldergrove Approach 133.125 (H24; combines with Tower under the single callsign "Aldergrove" when notified via ATIS) → Aldergrove Tower 118.300 (H24) → Aldergrove Ground 121.755 (as directed).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Aldergrove Approach** is the terminal-area facility; **Aldergrove Director** (120.905) is HX 0700–2200 (0600–2100) only, **not H24** — confirm the current ATC service configuration outside these hours. Upstream, **Scottish ACC (EGPX)** hands off — **no dedicated Scottish FIR brief exists yet in this network**; see [Europe area brief](../../../../airspace/europe.md) and Briefing §18. 🟧

---

## 10. Gotchas

- **Low-visibility conditions strongly favour RWY 25** — the field's only CAT III approach. A wind-driven assignment to RWY 07, 17 or 35 in marginal weather means non-precision or CAT-I-only minima — brief this explicitly before descent.
- **RWY 25 arrivals to the main terminal cross onto RWY 35** as part of the published Standard Arrival Routing (vacate right onto 35, right onto Taxiway Charlie, hold C2) — do not assume a same-side vacate.
- **RWY 17 landing requires a backtrack** via the turning area south of the RWY 35 displaced threshold — not a simple roll-to-exit.
- **180° turn is NOT permitted on RWY 17** for 737/A319-size aircraft or larger — continue to the RWY 35 turning circle instead.
- **RWY 35's displaced threshold** reduces LDA to 1,799 m with a 0.76% downslope over the first 400 m — an energy-management note.
- **ILS RWY 17 may show glidepath fluctuations outside 8 NM; ILS RWY 25 may show small fluctuations between 8 NM and 5 NM** — both AIP-noted, brief accordingly.
- **Aldergrove Director is HX 0700–2200 (0600–2100) only** — outside these hours, Approach and Tower combine under a single callsign/frequency.
- **No dedicated Scottish (EGPX) FIR brief exists yet in this network** — a genuine documentation gap.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS RWY 25 sub-category (IIIA/IIIB/IIIC) confirmation.
- Non-precision approach type/name for RWY 07 and RWY 35.
- Transition level (by QNH) confirmation.
- Terrain/MSA quantification against a current chart.
- Taxi-in routing detail for runway ends other than RWY 25 (main-terminal routing).
- Scottish (EGPX) FIR brief — does not yet exist in this network.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. ILS RWY 17/25 and VOR/DME BEL status), ATIS config/wind trend, current RFF Category 8/9 notice status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **UK AIP (NATS AIS), AD 2 EGAA**, AIRAC effective 2025-03-20 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2025-03-20-AIRAC/html/eAIP/EG-AD-2.EGAA-en-GB.html (retrieved 2026-07-26). *Runway/declared-distance data, navaids, communications, local aerodrome regulations (AD 2.20, Standard Arrival Routing).*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
