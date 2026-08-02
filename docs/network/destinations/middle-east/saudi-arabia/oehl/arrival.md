# OEHL — Hail · Arrival Page

**OEHL / HAS** · Hail, Hail Province, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [OEHL Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | 18 or 36 — wind-driven, no published preferential rule |
| Usual approach | ILS CAT I / RNP / VOR RWY 18; RNP / VOR RWY 36 |
| Config logic | Wind-driven; RWY 18 favoured when the ILS is operationally desirable; right-hand circuit for RWY 36 |
| Transition level | By QNH — verify current chart 🟧 |
| LVP trigger | Not confirmed this pass 🟧 |
| Missed-approach driver | AIP-published circling-area obstacle (west of field) and general highland terrain awareness — see Briefing §3.1 |

---

## 2. STAR / transition selection

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not independently confirmed.
- **Transition to approach:** Radar vectoring under Hail Approach; HIL DVORTAC holding (MHA 6,500 ft) serves ILS/LOC RWY 18, VOR RWY 18 and RWY 36. Dedicated RNP holds: **RADMI** (8,000–9,000 ft) and **SISIX** (7,000–8,000 ft) for RWY 18; **UMIKA** and **VUSOL** (both 7,000–8,000 ft) for RWY 36.
- **Speed / flow constraints on the STAR:** Standard ICAO 250 KIAS below FL100 unless otherwise directed.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not independently confirmed — plan against the current chart and Approach vectoring.
- **Speed control:** 250 KIAS below FL100 (standard); confirm any local override on current chart.
- **Altitude constraints:** HIL DVORTAC hold at 6,500 ft is the primary AIP-published reference; RNP holds sit 500–1,500 ft higher (see §2) — pointer only, verify chart.
- **Energy traps:** Field elevation (3,305 ft) means a shallower-than-sea-level descent profile — factor into ToD planning, particularly on a hot day.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 18 | ILS/LOC (IHIL), RNP, VOR | CAT I | Verify current chart |
| 36 | RNP, VOR | No precision approach | Verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 AIP-published circling-area obstacle — TV tower (~3,793 ft) / broadcast antenna (~3,787 ft), ~4,800 m (~2.6 NM) west of the field; the city is more broadly ringed by the Jabal Aja/Jabal Salma granite ranges (general-source corroboration, verify current MSA chart) — cross-ref [Briefing §3.1](index.md).
- **Specific threats:** RWY 36's non-precision minima gap is the main approach-selection threat in marginal weather.
- **Airspace / traffic:** Class C TMA (40 NM) / Class D CTR (10 NM), moderate traffic — cross-ref [Briefing §3.2](index.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Dedicated RNP missed-approach holds are AIP-published — **TAPLKI** (6,000 ft, RWY 18 RNP) and **PASIV** (7,500 ft, RWY 36 RNP) — verify current chart for the live procedure and any terrain-driven altitude/turn constraint.
- **Re-sequencing environment:** Under Hail Approach; single-runway field, so a missed approach re-enters the same arrival stream.
- **Go-around traps:** Awareness of the west-side circling-area obstacle (§5) applies to any missed-approach or circling manoeuvre.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 3,300 m both directions (no displaced threshold) — cross-ref [Briefing §7](index.md).
- **Braking / vacate:** No rapid-exit taxiway data published; standard vacate via TWY A/A1/A2/A3.
- **Runway-excursion watch:** RWY 36 carries a short 60×45 m stopway not mirrored on RWY 18 — do not assume symmetry; no tailwind-tendency or contamination pattern otherwise identified this pass. 🟧

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Via TWY A to the Civil Apron; confirm with Ground on the day.
- **Hot spots / tight taxiways:** None flagged in reachable AIP data — cross-ref [Briefing §13](index.md). 🟩
- **Stand/gate notes:** No K Global stand assignment (not in VAMSYS) — cross-ref [Dispatch §3](dispatch.md).

---

## 9. Arrival frequency sequence

- **Sequence:** Approach (123.200, secondary 120.250) → Tower (118.700) → Ground (121.900) — reference [Briefing §8](index.md).
- **Approach/Departure control:** Hail Approach (Class C TMA); confirm current sector/frequency assignment on the day. 🟧

---

## 10. Gotchas

- 🟧 **West-side circling-area obstacle** (TV tower/broadcast antenna, ~2.6 NM west) — verify against the current chart before any circling manoeuvre.
- 🟧 **RWY 36 has no precision approach** — plan for RNP/VOR minima if RWY 36 is in use.
- 🟧 **Field elevation (3,305 ft)** shifts standard sea-level ToD/energy assumptions, more markedly than the other regional fields in this pack on a hot day — brief accordingly.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- STAR names/tracks, LVP trigger, transition level, top-of-descent guidance, rapid-exit taxiway data — none confirmed from a primary chart this pass.
- Jabal Aja/Jabal Salma proximity to the actual arrival/missed-approach paths — general-source corroboration only, cross-check the current MSA chart.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SANS/GACA eAIP Kingdom of Saudi Arabia, AD 2 OEHL — Hail**, AIRAC AMDT cycle retrieved (2026-03-19 amendment series) — https://aimss.sans.com.sa/assets/FileManagerFiles/AIRAC%20AIP%20AMDT%2003_26_2026_03_19/eAIP/AD%202%20OEHL%20HAIL-en-GB.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SANS/GACA AIP (GACA); K Global fields not in VAMSYS (flagged); 4-page pack. |
