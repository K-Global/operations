# LSGG — Geneva · Arrival Page

**LSGG / GVA** · Le Grand-Saconnex, Geneva, Switzerland · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LSGG Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY22** by default (calm wind); **RWY04** when wind exceeds ~4 kt from a ~320°–140° arc |
| Usual approach | ILS CAT III on RWY22; ILS CAT I only on RWY04 |
| Config logic | Single runway — wind is the only config variable; no reciprocal-heading alternative |
| Transition level | By QNH; transition altitude reported as 7,000 ft (tier-4 source) 🟧 |
| LVP trigger | Winter fog/haze — mitigated only on RWY22 (CAT III); **RWY04 has no CAT II/III fallback** 🟥 |
| Missed-approach driver | Terrain — Jura ridge (N), Mont Salève/Alps/Mont Blanc massif (S/SE) |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not enumerated in reachable sources this pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** **RWY22 is the default/preferred landing runway** when wind is calm; **RWY04 is used when wind exceeds roughly 4 kt from a 320°–140° arc** (single-source figure, flagged 🟧). Because this is a single-runway field, there is no config "switch" in the sense of a multi-runway field — only a wind-driven end selection.
- **Transition to approach:** Expect a STAR-to-ILS transition with radar vectors onto final; a tier-4 source flags **strict speed control** on the approach — verify the charted transition and speed constraints.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; brief for stricter-than-typical speed discipline per the tier-4 caution above.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate — note the field sits at 1,411 ft with significant terrain nearby, so a standard 3° profile still needs careful cross-check against the surrounding high ground.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm); tier-4 source flags **strict speed control** as a specific local caution — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** A **late wind-driven runway-end change** (RWY22 to RWY04 or vice versa) is the principal energy trap, and — because RWY04 has no CAT II/III fallback — a late switch to RWY04 in marginal visibility is a genuine planning concern, not just an energy issue.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 22 | ILS (ISW) | **CAT III** 🟩 | Verify current chart |
| 04 | ILS (INE) | **CAT I only** — no CAT II/III fallback 🟥 | Verify current chart; threshold displaced (~330 m reported) |

- **LVP triggers:** Winter fog/haze (reported frequent in season) is the routine LSGG trigger; **CAT III capability exists only on RWY22.** If wind forces the RWY04 configuration during a low-visibility event, there is **no CAT II/III fallback on this single-runway field** — a genuine diversion-risk scenario, more acute here than at a multi-runway field. 🟥

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 **Jura ridge** (~5,700 ft AMSL) ~6 NM north; **Mont Salève** (~4,500 ft AMSL) ~8 NM south; **Alps/Mont Blanc massif** further southeast (MSA reported on the order of 10,600 ft SE). Two historical CFIT accidents on descent toward Geneva struck the Mont Blanc massif, long before modern terrain-awareness equipment — illustrative of a real, quantified terrain threat rather than a formality. Cross-ref [Briefing §3.1](index.md).
- **Specific threats:** 🟧 A tier-4 source flags **misleading radio-altimeter readings on final** and **mechanical turbulence** — cross-check barometric altitude and brief for a possibly bumpy final, particularly with a southerly (foehn-type) flow.
- **Airspace / traffic:** 🟧 Single-runway field with no reciprocal-heading alternative constrains sequencing options; Switzerland FIR (LSAS) has no dedicated brief in-library — see [Europe airspace briefing](../../../../airspace/europe.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Both runway ends have significant terrain nearby (Jura to the north for RWY22 missed approach considerations; Alps/Mont Salève to the south for RWY04) — fly the published MAP and verify climb-gradient/turn on the current chart. 🟥
- **Re-sequencing environment:** A go-around at a single-runway field returns you to the same constrained runway axis — expect vectoring/holding in terrain-constrained airspace before re-sequencing.
- **Go-around traps:** Given the reported misleading radio-altimeter behaviour on final (§5), maintain a disciplined cross-check of barometric altitude through any go-around.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY22 ~3,900 m (full length); RWY04 reduced by a displaced threshold to roughly ~3,570 m (cross-corroborated tier-4 estimate, not independently AIP-confirmed) — mind the reduced distance on RWY04. 🟧
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 RWY04's displaced threshold reduces usable landing distance; given the single-runway structure, there is no on-field alternate if an excursion or obstruction occurs.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in to Terminal 1 (or the December-2021 long-haul wing for widebody contact stands) per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **13 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟧 A tier-4 source flags at least one taxiway restricted to Medium aircraft in CAT I conditions, and narrow taxiways requiring oversteer for larger aircraft — taxi with vigilance.
- **Stand/gate notes:** See [Dispatch §2/§3](dispatch.md) — pier/gate assignment for our operation not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Geneva Approach/Arrival → Geneva Tower → Geneva Ground/Apron.** Take the assigned frequency and confirm current chart (frequencies from Briefing §8, flagged 🟧 pending live-AIRAC reconciliation).
- **Approach/Departure control:** Geneva Approach (Radar) is the facility for terminal approach; **Switzerland FIR (LSAS)** hands off en route inbound — no dedicated FIR brief exists in-library, see [Europe airspace briefing](../../../../airspace/europe.md). 🟧

---

## 10. Gotchas

- **RWY04 has no CAT II/III fallback** — combined with the single-runway structure, a wind-forced RWY04 configuration during a low-visibility event is a genuine diversion-risk scenario.
- **Terrain on both sides** (Jura N; Mont Salève/Alps/Mont Blanc massif S/SE) — do not treat this as a flat-terrain field; historical CFIT accidents on the Mont Blanc massif underline the point, even though they predate current terrain-awareness equipment.
- **Misleading radio-altimeter readings on final have been reported** — cross-check barometric altitude, especially in gusty/terrain-turbulence conditions.
- **Strict speed control** is flagged operationally on the approach — brief for tighter-than-typical speed discipline.
- **No on-field runway alternative** — a runway-availability issue here has no fallback the way a second runway would provide elsewhere.
- **Reported (unconfirmed) night curfew** — treat conservatively for late-arriving rotations pending AIP confirmation.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Exact LDA for RWY04 (displaced-threshold figure is cross-corroborated but not AIP-confirmed).
- Exact LVP/CAT III trigger conditions on RWY22 (RVR figure disputed between tier-4 sources).
- Rapid-exit taxiway/vacate detail.
- Current pier/gate assignment for our operation.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT III equipment status on RWY22 and any runway-availability NOTAM given no on-field alternate), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- AIP Switzerland (Skyguide eAIP) — https://www.eaip.skyguide.ch/ — attempted 2026-07-26; unreachable (JS/frameset) this session.
- en.wikipedia.org/wiki/Geneva_Airport (retrieved 2026-07-26). *Wind-based runway logic, historical CFIT-accident context.*
- OPSGROUP — Geneva airport operational lowdown (retrieved 2026-07-26). *Terrain/turbulence caution, speed-control note.*
- SkyVector — https://skyvector.com/airport/LSGG/Geneve-Airport (retrieved 2026-07-26). *Displaced-threshold corroboration.*
- IVAO Switzerland — Geneva Air Traffic Management Manual (retrieved 2026-07-26). *STAR/IAP index, LVP table — network-sim training document, not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Switzerland (Skyguide); K Global fields from live VAMSYS; 4-page pack. |
