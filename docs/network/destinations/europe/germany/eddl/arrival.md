# EDDL — Düsseldorf International · Arrival Page

**EDDL / DUS** · Lohausen, Düsseldorf, North Rhine-Westphalia, Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EDDL Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **05R/23L** (main) single-runway ops; **05L/23R** (shorter) for arrivals under segregated high-traffic ops — **except the A380, which always lands on 05R/23L** |
| Usual approach | ILS CAT II/III on 05R/23L; ILS/LOC (CAT I only) on 05L; VOR/RNAV only on 23R (**no ILS**) |
| Config logic | Wind/traffic-driven; single-runway ops use the main runway for all movements; segregated ops at high traffic put arrivals on the shorter/northern runway |
| Transition level | By QNH; transition altitude 5,000 ft — verify current chart 🟧 |
| LVP trigger | CAT II/III supported only on 05R/23L; at RVR < 350 m, taxiway K/L5 closed and specific vacate restrictions apply 🟧 |
| Missed-approach driver | Traffic/airspace density on the closely-spaced pair, not terrain — immediate coordination with the approach controller required |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Transitions/holds referenced via **PISAP, HALME, BIKMU, DOMUX, ELDAR** and NDB **LMA**.
- **Selection by arrival direction / runway:** Per the operational SOP, **arriving aircraft should use transitions, directs, or vectors — published STARs should not be used**, since all STARs lead to the **DUS VOR** as their initial approach fix rather than a more efficient routing. 🟧 (network-sim SOP guidance — confirm applicability against the current AIP if this differs from your OFP routing)
- **Transition to approach:** Expect vectors from a transition/direct fix onto the ILS (05R/23L) or VOR/RNAV (23R) as assigned.
- **Speed / flow constraints on the STAR:** 250 KIAS below FL100 (standard), plus TMA-specific restrictions per chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; the directs/vectors-not-STARs guidance (§2) means expect ATC-driven routing rather than a fixed STAR profile — brief for flexible energy management.
- **Speed control:** 250 KIAS below FL100 (standard); TMA-specific restrictions per chart.
- **Altitude constraints:** Key constraint points are pointers — fly as vectored/assigned; verify chart.
- **Energy traps:** A late runway-configuration change (single vs. segregated-parallel, or 05 vs. 23) given the closely-spaced pair's operational constraints is the main energy/config trap at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 05R | ILS, RNAV (GPS) | **CAT II/III** 🟩 | verify current chart |
| 23L | ILS, VOR, RNAV (GPS) | **CAT II/III** 🟩 | verify current chart |
| 05L | ILS/LOC, NDB, RNAV (GPS) | **CAT I only — no CAT II/III** 🟧 | verify current chart |
| 23R | VOR, RNAV (GPS) only | **No ILS published this end** 🟥 | verify current chart |

- **LVP triggers:** CAT II/III supported only on 05R/23L. At RVR < 350 m, taxiway K and L5 between RWY 05R and taxiway M are closed, and aircraft may not vacate 05R via L8 or 23L via L3. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Rhine-valley lowland at 147 ft; no significant high ground in the vicinity.
- **Specific threats:** 🟥 **Closely-spaced parallel runway pair (<760 m apart)** — cannot support independent parallel approaches; wake-turbulence separation required at all times. A **reduced 2.5 NM diagonal-staggered-approach separation** (vs. 3 NM standard) applies per AIP Germany/AD 2 EDDL 1-23 when aircraft are established on different final approach tracks. **23R has no ILS at all** — confirm runway/approach pairing before any low-vis 23-configuration arrival; the shorter runway is also excluded to the A380.
- **Airspace / traffic:** 🟥 Radar-controlled (Düsseldorf Approach "DLA" + Feeder "DLAT"; Langen ACC en route) — busy Rhine-Ruhr hub; brief for segregated-parallel sequencing at high traffic.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat lowland) — fly the standard published missed approach unless an alternate instruction (typically a heading) is issued.
- **Re-sequencing environment:** **All missed approaches require immediate coordination with the approach controller** — this is an explicit procedural requirement at EDDL, not a general courtesy; expect a heading-based re-sequencing instruction given the closely-spaced runway pair.
- **Go-around traps:** Awareness of the parallel runway's traffic (arrivals/departures on the other runway of the pair) during the miss, given the sub-760 m separation and wake-turbulence requirement.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** **05R/23L: 2,696 m** (per a recent declared-distance re-survey — meaningfully less than the 3,000 m physical/advertised length; always fly the declared figure). **05L/23R: not published** in reachable sources — verify against current AIRAC before planning a limiting-weight arrival on the shorter runway. 🟧
- **Braking / vacate:** Traffic vacating **05R via L1/L3/L4 must turn right onto taxiway M** (not into L2); it is **not permitted** to vacate/cross **23L via L7 and turn left onto M**. At RVR < 350 m, taxiway K/L5 are closed and aircraft may not vacate 05R via L8 or 23L via L3.
- **Runway-excursion watch:** 🟧 The ~300 m gap between the 3,000 m physical/advertised length and the declared 2,696 m LDA on 05R/23L is a genuine planning-relevant figure — do not rely on the physical/advertised length for a limiting-weight landing.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Follow the specific vacate instructions in §7, then taxi via **M** and the **P1–P4** connectors to Terminal A/B/C per assignment; VAMSYS mirror gives a planning taxi-in time of **14 min** `[VAMSYS mirror 2026-07-25]`.
- **Hot spots / tight taxiways:** 🟥 The **apron-to-taxiway-M intersections (P1–P4)** are the most common ground conflict points; **holding point L9** is reported congested during 05-ops. Wingspan-banded mutual restrictions apply per [Briefing §13](index.md) — confirm eligibility before a restricted-taxiway assignment, particularly for a widebody when an A380 occupies the adjacent taxiway.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Terminal A/B/C split by Schengen status; A380 limited to a single stand (gate C02A).

---

## 9. Arrival frequency sequence

- **Sequence:** **Düsseldorf Approach (DLA)/Feeder (DLAT) ~128.650/~128.555 → Düsseldorf Tower/Turm 118.305 → Düsseldorf Ground/Rollkontrolle 121.905 (East/West split).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Düsseldorf Approach "DLA"** is the primary TMA station, with a dedicated Feeder position **"DLAT"** splitting workload at high traffic; **Langen ACC (EDGG)** hands off en route inbound — see [Langen (EDGG) FIR brief](../../../../airspace/fir/europe/langen-edgg.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **The runway pair is less than 760 m apart** — do not expect independent parallel approaches; brief for segregated operation and mandatory wake-turbulence separation.
- **23R has no ILS at all** — if assigned a 23-configuration arrival, confirm you have 23L (main, ILS) and not 23R (shorter, VOR/RNAV only, no ILS).
- **Declared LDA on 05R/23L (2,696 m) is ~300 m less than the physical/advertised 3,000 m length** — always plan to the declared figure.
- **All missed approaches require immediate coordination with the approach controller** — this is explicit procedure here, not a general courtesy.
- **Specific vacate restrictions apply** (05R via L1/L3/L4 → right turn onto M only; no left turn from 23L via L7 onto M) — brief before landing.
- **A380 always lands on 05R/23L regardless of direction** — a useful cross-check if ever operating alongside A380 traffic in a mixed configuration.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR/transition names beyond the network-sim SOP guidance to use directs/vectors.
- Exact LVP/CAT trigger RVR values beyond the RVR < 350 m taxiway-closure note.
- 05L/23R declared LDA (not found in any reachable source).
- Rapid-exit taxiway/vacate detail beyond the specific L1/L3/L4/L7 instructions.
- Exact runway-configuration selection logic (05-ops vs 23-ops) beyond wind-driven assumption.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. active configuration and 23R approach status), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here. See <../../../_Templates/_Sources.md> for the tier hierarchy.*

- OpenNav — EDDL chart index (approach/STAR chart titles) — https://opennav.com/airport/EDDL (retrieved 2026-07-25).
- Notamify — NOTAM re: declared-distance re-survey — https://notamify.com/notams/EDDL/e5a81553-8acd-4ef5-a78f-c20e6e83e3d5 (retrieved 2026-07-25). *LDA figures, §7 source.*
- VATSIM Germany Knowledgebase — "SOPs FIR Langen — EDDL Düsseldorf Airport" Approach/Tower pages (see Briefing page for full citations). *Directs/vectors-not-STARs note, reduced 2.5 NM diagonal-staggered-approach separation citing AIP Germany/AD 2 EDDL 1-23, vacate instructions, missed-approach coordination requirement.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP + Briefing; folded to 4-page pack. |
