# LICC — Fontanarossa · Arrival Page

**LICC / CTA** · Catania, Sicily, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LICC Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM/**ash status** are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Single runway **08/26** — wind-driven selection |
| Usual approach | ILS reported on **RWY 08 only**; RWY 26 is non-precision (VOR/NDB) only |
| Config logic | Wind-driven, single-runway field |
| Transition level | Not confirmed — verify current chart 🟧 |
| LVP trigger | 🟥 Not confirmed to a figure, but **RWY 26 has no ILS** — a low-visibility event with a RWY-26-favouring wind is a genuine constraint; verify current minima and hold a diversion plan |
| Missed-approach driver | 🟧 Not terrain-close-in at the field itself; regional Etna/Iblei terrain awareness plus shared NAS Sigonella airspace are the relevant considerations |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Single runway 08/26, wind-driven. **RWY 08 carries the field's only ILS** — expect ATC/company preference for RWY 08 in marginal-weather scenarios where feasible, though the actual runway assignment remains wind/ATC-driven. Verify current criteria.
- **Transition to approach:** Not confirmed — expect radar vectoring under Catania Approach/Director; verify the charted transition.
- **Speed / flow constraints on the STAR:** Not confirmed — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR/approach altitude gate.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Not confirmed — pointer only, fly the charted altitudes.
- **Energy traps:** No close-in terrain energy trap at the field itself; the operative "energy" consideration here is procedural rather than terrain — if RWY 26 is assigned in marginal visibility, respect the non-precision approach's higher minima rather than pressing a visual continuation.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 08 | ILS (name not confirmed) | Field's only precision approach 🟩 | Verify current chart |
| 26 | VOR / NDB (non-precision, names not confirmed) | 🟥 **No ILS this end** — materially higher weather minima | Verify current chart |

- **LVP triggers:** Not confirmed to a specific figure — but the **RWY 26 non-precision-only status** is itself the standing low-visibility planning constraint at this field (§Briefing §9/§10). 🟥

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 No close-in high terrain immediately at the field (sea level, 39 ft). **Mount Etna (~3,400 m)** dominates the wider region ~17–20 NM NNW/N and the **Iblei hills** lie to the south — regional terrain awareness matters, but this is not a close-in mountain-strip CFIT profile like some other South-Italy fields.
- **Specific threats:** 🟥 **RWY 26's lack of an ILS** is the field's real approach-specific threat — a low-visibility arrival assigned to RWY 26 has a materially higher minima floor than RWY 08. Shared regional airspace with **NAS Sigonella** (~10 NM) traffic is a secondary consideration.
- **Airspace / traffic:** Radar-controlled TMA (Catania Approach/Director); Roma FIR (LIRR) / Brindisi ACC (LIBB) en route context — no Italy FIR brief exists in-library (see Briefing §1/§18).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not confirmed as a close-in terrain driver at the field itself; regional Etna/Iblei awareness is prudent generally. Fly the published missed approach and climb gradient exactly.
- **Re-sequencing environment:** Not confirmed — single-runway field; expect vectoring for re-sequencing after a miss, and be aware of shared airspace with NAS Sigonella traffic.
- **Go-around traps:** With no ILS on RWY 26, a marginal-weather approach on that end carries elevated go-around probability by design (non-precision minima) — brief this expectation rather than treating a RWY 26 go-around as anomalous.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Not confirmed to metre precision this pass — both ends carry a displaced threshold (RWY 08 ≈96 m, RWY 26 ≈86 m, tier-4), reducing usable landing distance somewhat versus the ~2,436 m overall runway length. Verify current AIRAC declared distances before treating as dispatch-grade.
- **Braking / vacate:** Not confirmed — verify with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 Displaced thresholds on both ends are the standing watch-item pending primary confirmation of exact LDA figures.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in to the assigned terminal (A, B or C) per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **10 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** Not confirmed from a primary source this pass. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — terminal/stand assignment for K Global service not confirmed; be alert for post-ash-event ramp/taxiway sweeping closures even after flight ops resume (see Briefing §13).

---

## 9. Arrival frequency sequence

- **Sequence:** **Catania Approach ("Radar") 119.250 / Director 120.800 → Catania Tower 118.700 → Catania Ground 129.725.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8, sourced tier-4 — cross-check against current AIRAC.)
- **Approach/Departure control:** **Catania Approach/Director** for the terminal area; **Roma FIR (LIRR)** / **Brindisi ACC (LIBB)** en route — see [Europe Airspace Briefing](../../../../airspace/europe.md) 🟧 (scope gap — does not cover Italy; see Briefing §18).

---

## 10. Gotchas

- **Always check current Etna VONA/ASHTAM status before commencing the arrival** — an ash event can close the field (fully or by sector) with limited notice; have a genuinely ash-clear alternate identified, not just the nominal filed alternate. See [`OM E — Volcanic Ash Avoidance`](../../../../../flight-ops/volcanic-ash-avoidance.md).
- **RWY 26 has no ILS** — do not expect a precision approach if that runway is assigned in marginal weather; brief the non-precision minima and a firm missed-approach/diversion decision point.
- **A 2023 terminal fire closed the field for days** — non-ash disruption is also real here; do not plan around ash risk to the exclusion of general contingency awareness.
- **NAS Sigonella traffic (~10 NM)** shares regional airspace — maintain normal traffic vigilance.
- **Post-ash-event ground closures can persist** after flight operations nominally resume — verify current taxiway/stand NOTAM status even once the runway itself is reported open.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Exact LDA figures per runway (displaced-threshold basis reported tier-4 only).
- Rapid-exit taxiway/vacate detail.
- Confirmation that RWY 26 remains non-precision-only on the current AIRAC (inferred from a dated public chart index).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, and — before every arrival — **current Etna VONA colour-code/ASHTAM/VAA status from Toulouse VAAC**. See [`OM E — Volcanic Ash Avoidance`](../../../../../flight-ops/volcanic-ash-avoidance.md). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- Wikipedia — "Catania–Fontanarossa Airport" — https://en.wikipedia.org/wiki/Catania%E2%80%93Fontanarossa_Airport (retrieved 2026-07-26).
- OpenNav — https://opennav.com/airport/LICC (retrieved 2026-07-26). *Approach/chart-index pattern (ILS RWY 08 only), tier-4, dated 2008–2014 — pattern signal only, re-verify current AIRAC.*
- OurAirports — https://ourairports.com/airports/LICC/frequencies.html (retrieved 2026-07-26). *Frequency cross-check, tier-4.*
- VAAC Toulouse — https://vaac.meteo.fr/volcanoes/etna/ (retrieved 2026-07-26). *Ash-advisory responsibility.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
