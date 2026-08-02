# LFBD — Bordeaux-Mérignac · Arrival Page

**LFBD / BOD** · Mérignac (Bordeaux), Gironde, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LFBD Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **05/23** (main pair, wind-dependent); RWY 11/29 use-restricted (§Briefing §5) |
| Usual approach | **ILS CAT III on RWY 23**; ILS CAT I on RWY 29; RWY 05/11 visual/VOR-DME only |
| Config logic | Wind-driven: 05/23 preferred up to 15 kt crosswind; RWY 23 to 5 kt tailwind |
| Transition level | By QNH — not confirmed this pass 🟧 |
| LVP trigger | Winter fog/low-stratus (plausible driver of RWY 23 CAT III) — exact RVR/trigger not confirmed 🟧 |
| Missed-approach driver | Traffic/config re-sequencing, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Wind-driven per §1; final approaches to **RWY 23 and 29 are systematically flown with ILS or GNSS guidance**, not visual, except in ILS-unavailable or GNSS-unusable cases (or crew-currency VOR-DME 23 practice, subject to ATC approval).
- **Transition to approach:** Not individually documented — expect radar vectors from Aquitaine/Mérignac Approche onto final.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** A late runway/config change (05/23 ↔ 11/29, or 05 ↔ 23 direction) driven by a wind shift is the main energy trap at this field — the RWY 11/29 alternative is wingspan/type-restricted, so a config change onto that pair is not always available to every K Global type.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 05 | Visual only (per Environment chart) | No ILS; visual approach permitted with chart compliance | verify current chart |
| 23 | ILS (BD, 110.3) | **CAT III** 🟩 — visual approach prohibited | verify current chart |
| 11 | Visual only (per Environment chart) | No ILS; RWY use-restricted (§Briefing §5) | verify current chart |
| 29 | ILS (BEI, 111.15); VOR-DME 23 (crew-currency, ATC approval) | **CAT I** 🟩 — visual approach prohibited | verify current chart |

- **LVP triggers:** Winter fog/low-stratus is the plausible routine trigger on the RWY 23 CAT III direction; exact RVR/trigger figures not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Gironde coastal plain at 166 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 RWY 11/29's asymmetric declared distances (LDA on 11 exceeds its own TORA) — confirm the correct declared distance is being applied for the operation in hand. RWY 05/11 offer no instrument approach beyond VOR/visual, so a wind shift to that orientation removes precision-approach capability.
- **Airspace / traffic:** 🟩 Moderate regional traffic under Aquitaine/Mérignac Approche (radar) — not a high-density environment.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat coastal plain) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** Regional radar environment — expect standard vectoring for re-sequencing after a miss; not a high-density hub environment.
- **Go-around traps:** RWY 23's ILS CAT III capability is the field's principal low-vis mitigation; a go-around during marginal weather should anticipate limited RWY 05/11 fallback given the lack of instrument approaches there.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 05/23 **3,100 m** each; 11 **2,415 m**, 29 **2,415 m** — note the asymmetric declared-distance table on 11/29 (LDA 11 = 2,415 m exceeds TORA 11 = 2,365 m); cross-ref [Briefing §7](index.md).
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 Winter-contamination braking-action consideration applies in the 1 Dec–31 Mar de-icing season; RWY 11/29's wingspan/type restriction is the primary excursion-adjacent risk control (keeping oversized types off the shorter, PCN-limited pair) rather than a length constraint on 05/23.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **10 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **TWY U/U1/U2** (industrial-area) — idle-thrust only, mandatory radio contact; B747/A340/DC-10-class aircraft must be towed. **TWY L2** carries a wingspan limit and is prohibited below RVR 550 m except a narrow home-based exception with follow-me.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — stand/terminal assignment for K Global operations not individually confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Aquitaine/Mérignac Approche (119.275/129.875/121.200) → Mérignac Tour 118.300 → Mérignac Sol 121.900/121.730.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Aquitaine Approche** and **Mérignac Approche** (DSNA) provide the terminal approach service; **Bordeaux ACC (LFBB)** hands off en route inbound — no dedicated OM C FIR brief exists yet, see [Europe Airspace Briefing](../../../../airspace/europe.md). 🟧

---

## 10. Gotchas

- **RWY 05/11 have no instrument approach beyond VOR/visual** — a wind shift away from RWY 23/29 removes precision-approach capability at this field.
- **RWY 11/29 is wingspan/type-restricted** — do not expect it as a fallback for an oversized K Global type; an aircraft exceeding the PCN 53/wingspan limit needs an explicit ATC clearance to use 05/23 instead.
- **Visual approaches on RWY 23/29 are prohibited** — expect ILS or GNSS guidance on those runways regardless of visual conditions.
- **No confirmed curfew** — do not plan a late arrival assuming unrestricted night ops without confirming current AIP.
- **Push-back/taxi clearance (relevant to a quick turn) is valid for 1 minute only** on departure — plan turnaround timing accordingly.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Transition level and LVP/CAT III trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Stand/gate assignment for K Global arrivals.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT III equipment status), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP, AD 2 LFBD** (AD 2.13, 2.18, 2.19, 2.21), cycle effective 14 MAY 2026 — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_14_MAY_2026/FRANCE/AIRAC-2026-05-14/html/eAIP/FR-AD-2.LFBD-fr-FR.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
