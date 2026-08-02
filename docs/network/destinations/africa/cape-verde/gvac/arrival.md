# GVAC — Amílcar Cabral International (Sal) · Arrival Page

**GVAC / SID** · Sal Island (Espargos), República de Cabo Verde · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP-verified (ASA eAIP eff. 1 DEC 2022)

> **Read-me:** Tactical arrival aid for the FlightFactor 777v2 in X-Plane 12, not a chart. Companion to the [GVAC Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. GVAC is briefed here as the **NORTH ETOPS-120 ETP diversion alternate** on the EDDF→São Paulo trans-Atlantic leg (paired **SBFZ Fortaleza**) — the arrival you are most likely flying into GVAC is an **engine-out or depressurisation diversion**, not a routine scheduled landing. See [`OM E — ETOPS/EDTO Procedures`](../../../../../flight-ops/etops-edto.md) for the diversion method (critical fuel, ETP, alternate suitability) this field applies, and the [`Africa`](../../../../airspace/africa.md) and [`EUR/SAM Corridor`](../../../../airspace/eur-sam-corridor.md) airspace briefs for the **Sal Oceanic (GVSC)** FIR context. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY 01** by default (only ILS end); **RWY 19** when wind forces it — **non-precision only** |
| Usual approach | **ILS CAT I RWY 01** (GS 3.0°); **RNAV (GNSS) RWY 19** (no ILS) |
| Config logic | Wind-driven; no published preferential-runway rule — the N/S runway sits across the prevailing NE trade wind |
| Transition level | By QNH; transition altitude **7,000 ft** |
| LVP trigger | Not published 🟧 — **harmattan Saharan dust (Dec–Feb)** is the low-vis driver, not fog; a below-CAT-I 01 forcing a non-precision 19 is the worst case (Briefing §3.4/§10) |
| Missed-approach driver | Not terrain (low, flat island) — energy/approach-management discipline, and on 19 the non-precision minima |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not published in the reachable AD 2 extract 🟧 — pull the current-AIRAC STAR list at planning.
- **Selection by arrival direction / runway:** **Sal Approach** vectors inbound traffic; radar vectoring applies at/above **1,700 ft**, procedural below. As a diversion, expect priority sequencing at this low-density field.
- **Transition to approach:** Radar vectors to the **ILS RWY 01** final where wind allows; a **RNAV (GNSS) 19** transition applies when 19 is in use.
- **Speed / flow constraints on the STAR:** **MAX 250 KIAS from 30 DME CVS** (AD 2.22).

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** For a genuine ETOPS diversion, TOD planning is driven by the critical-fuel/driftdown profile from the diversion decision point, not a routine descent — see [`OM E — ETOPS/EDTO Procedures §6`](../../../../../flight-ops/etops-edto.md) for the critical-fuel scenario this leg is built on.
- **Speed control:** **250 KIAS from 30 DME CVS**; radar vectoring at/above 1,700 ft, procedural below.
- **Altitude constraints:** MSA off the **CVS VOR/DME**, 20 nm radius, by sector: **NE (R360–R090) 2,500 ft · South (R090–R270) 1,700 ft · NW (R270–R360) 2,000 ft** (Briefing §3.1) — pointers only, verify current chart.
- **Energy traps:** A wind-forced late switch from **RWY 01 (ILS)** to **RWY 19 (non-precision)** is the field's principal energy/planning trap — brief both approaches before top-of-descent into the divert (Briefing §3.5).

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 01 | **ILS (CAT I)**, GS 3.0°, LOC "SL" 109.90 | 🟩 The precision option — plan this as primary | verify current chart |
| 01 | RNAV (GNSS), LOC | Non-precision backups to 01 | verify current chart |
| 19 | **RNAV (GNSS)** | 🟧 **Non-precision only — no ILS to 19**; wind-forced case | verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 Benign — low, flat, arid island at 179 ft. One published obstacle: a **mast at ~463 ft** north of the field (lit, AD 2.10). MSA sectors 1,700–2,500 ft per §3 above — cross-ref [Briefing §3.1](index.md).
- **Specific threats:** 🟥 **RWY 19 has no ILS** — a wind-forced 19 arrival is non-precision only, and you may be flying it single-engine or unpressurised on a genuine diversion (Briefing §3.5). 🟧 **Harmattan dust (Dec–Feb)** can push RWY 01 below CAT I minima, forcing the non-precision 19 case — the field's worst-case combination.
- **Airspace / traffic:** 🟩 Low-density, **Class C** SAL CTR (GND–FL85), radar-equipped; also the **Sal Oceanic (GVSC)** FIR — the same authority controlling the oceanic leg you are diverting off of (Briefing §3.2).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not terrain-driven — fly the published MAP and climb to the sector MSA (1,700–2,500 ft); verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** Radar vectoring only at/above 1,700 ft; below that, procedural. Low-density field — a go-around should not face significant re-sequencing traffic, but you are likely the priority/emergency movement regardless.
- **Go-around traps:** On a **19 non-precision miss**, remember there is no ILS to fall back to on that end — the missed approach may feed straight back into a **01 ILS** re-attempt if wind allows.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** **3,000 m both ends** (01 and 19) — no displaced thresholds, ample for a 777-300ER diversion at any realistic landing weight, even engine-out/heavy (Briefing §2/§7).
- **Braking / vacate:** Not itemised by taxiway in reachable sources; standard vacate via the TWY system (23 m wide). 🟧
- **Runway-excursion watch:** 🟧 Length is a non-issue; the real threats are the **NE trade-wind crosswind** on the N/S runway and a possible **PCN 58 pavement overload** for a heavy 777-300ER (Briefing §3.3) — brief a pavement inspection may follow.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi via the TWY system (23 m wide, CL/edge-lit) to the assigned stand (nose-in guidance on **stands 01–07**); VAMSYS mirror gives a planning taxi-in of **5 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **TWY A2 restricted at night** (prior TWR coordination required); **stop bars on TWY A1 and A4** (AD 2.9) — cross-ref [Briefing §13](index.md).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — no published Code E stand-suitability matrix; confirm with handling on arrival, and expect a pavement inspection may delay the next movement.

---

## 9. Arrival frequency sequence

- **Sequence:** **Sal Control 126.400 (TMA) / 128.300 (North) / 127.100 (South) → Sal Approach 126.400 (H24) → Amílcabral Tower 119.700 (H24).** (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Sal Approach** — radar vectors at/above 1,700 ft, procedural below; the same **Sal Oceanic (GVSC)** authority also controls the oceanic leg — see the [Africa](../../../../airspace/africa.md) and [EUR/SAM Corridor](../../../../airspace/eur-sam-corridor.md) airspace briefs for the wider FIR/corridor picture.

---

## 10. Gotchas

- **RWY 19 has no ILS** — a wind-forced 19 arrival is non-precision only; brief it before you need it, not after.
- **This field's whole reason for being briefed is ETOPS** — expect to be flying this arrival engine-out, depressurised, or both; the RFF CAT 9 / PCN 58 margins in the Briefing were sized with exactly that scenario in mind.
- **RFF CAT 9 exactly matches** the 777-300ER requirement — a NOTAM'd downgrade would break the diversion plan; check NOTAMs before committing.
- **Harmattan dust (Dec–Feb)** is the low-vis driver, not fog — do not expect a European-style LVP regime; the practical failure mode is RWY 01 dropping below CAT I and forcing the non-precision 19.
- **Isolated island — the alternate-for-the-alternate is thin** (GVBA/GVNP then GOOY Dakar) — commit the diversion decision and fuel early; do not plan on a second attempt at GVAC itself if it goes below minima.
- **TWY A2 at night needs prior TWR coordination** — do not taxi it un-coordinated after dark.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- LVP/low-vis procedure detail (if any) for the harmattan-dust case.
- Rapid-exit taxiway/vacate detail.
- Stand-suitability confirmation for a Code E (777-300ER) arrival.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. ILS 01 status and RFF category), dust/harmattan advisories, current AUP/status in the Sal Oceanic (GVSC) FIR. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Cabo Verde AD 2 GVAC — ASA**, eAIP HTML, eff. 1 DEC 2022 — https://eaip.asa.cv/2022-12-01-AIRAC/html/eAIP/GV-AD-2.GVAC-en-GB.html (retrieved 2026-07-19). *Approach/navaid/comms/MSA/taxi detail.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from the GVAC Briefing + AIP; part of the 4-page fold. |
