# LRBS — Băneasa-Aurel Vlaicu · Arrival Page

**LRBS / BBU** · Băneasa, Bucharest, Romania · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LRBS Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. **LRBS is not currently reflected in VAMSYS.** STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **07 or 25** — single runway, direction per wind |
| Usual approach | ILS RWY 07 or 25 (CAT A/B and CAT C/D minima published separately); NDB backup both ends |
| Config logic | Wind-driven; no preferential-runway program confirmed |
| Transition level | By QNH; a reported transition-altitude figure ("1200 M") is ambiguous — verify current chart 🟧 |
| LVP trigger | Not confirmed 🟧 |
| Missed-approach driver | 🟥 Documented CAT A/B fix-reachability caution (ABORA/ADULI, §5) plus airspace proximity to LROP 4 NM north |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** AIP NOTAM history references conventional SID/STAR routes at LRBS, periodically suspended in favour of RNAV1 vectoring for non-RNAV1-equipped aircraft — current standing STAR names not confirmed this pass. 🟧
- **Selection by arrival direction / runway:** Single runway — direction selected by wind; no confirmed preferential logic.
- **Transition to approach:** Expect a STAR-to-ILS or vectored transition with Bucharest Approach (shared with LROP); verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** The large, inconsistently-reported displaced thresholds on both runway ends (Briefing §3.3/§7) mean the usable touchdown zone may be considerably shorter than the nominal runway length — confirm current LDA before committing to either direction.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 07 | ILS (CAT A/B, CAT C/D); NDB | IAF **BSW** — CAT A/B aircraft caution on the miss (see §5) 🟥 | verify current chart |
| 25 | ILS (CAT A/B, CAT C/D); NDB | IAF **BSE** — CAT A/B aircraft caution on the miss (see §5) 🟥 | verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Wallachian Plain, same setting as LROP 4 NM north.
- **Specific threats:** 🟥 A documented AIP-referenced caution (via a ground handler's NOTAM excerpt, citing AIP Romania AD 2.4-5) states that **CAT A/B aircraft flying the ILS/NDB approach from the BSE IAF, or executing the RWY 25 missed approach, might not reach the ABORA fix once established on final** — a mirrored caution applies on **RWY 07 from the BSW IAF regarding the ADULI fix**. Treat this as a durable procedural-geometry note requiring current-chart verification, not a one-off NOTAM.
- **Airspace / traffic:** 🟧 Proximity to LROP (4 NM north), sharing the Bucuresti TMA (Class A) and Bucharest Approach — brief for possible sequencing interaction with LROP traffic.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat plain) — the operative concern is the documented CAT A/B fix-reachability caution (§5). Fly the published MAP and verify current chart geometry.
- **Re-sequencing environment:** A go-around returns traffic into the shared Bucuresti TMA/Bucharest Approach environment alongside LROP traffic — expect vectoring.
- **Go-around traps:** Confirm the ABORA (RWY 25) / ADULI (RWY 07) fix-reachability geometry before accepting either missed approach as CAT A/B; the large displaced thresholds also compress the available landing distance if a late go-around decision is needed.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Nominal ~3,200 m, but **materially reduced** by displaced thresholds reported at ~240 m (RWY 07) and as much as ~795 m (RWY 25) — a second source gives a conflicting, smaller figure. **This discrepancy is unresolved and must be verified against the current AIP declared-distance table before any landing-distance planning.** 🟥
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed. 🟧
- **Runway-excursion watch:** 🟥 The large, unresolved displaced-threshold figures are the field's standing runway-excursion watch-item — do not assume the nominal runway length is available for landing distance.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed — apron-to-terminal taxi routing not obtained this pass. 🟧
- **Hot spots / tight taxiways:** None specifically identified in reachable sources — not independently verified. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — ~28 apron stands reported; widebody/code-letter suitability not confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Bucharest Approach 119.415 (shared with LROP, sector-specific alternates reported) → Băneasa Tower 120.800 (or 125.200 alternate) → Băneasa Ground 129.960 (current, per NOTAM correction).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Bucharest Approach** provides terminal service shared with LROP; **București ACC (LRBB)** hands off en route inbound — no dedicated FIR brief yet published, see [Europe airspace brief](../../../../airspace/europe.md). 🟧

---

## 10. Gotchas

- **Large, unresolved displaced-threshold discrepancy on both runway ends** — the field's real usable landing distance is uncertain pending current-AIP confirmation.
- **CAT A/B fix-reachability caution on both missed approaches (ABORA on 25, ADULI on 07)** — verify current chart geometry before relying on either miss.
- **PPR requirement** reported as standing policy — confirm current status before planning an arrival.
- Field is not currently in the K Global network — treat all content here as reference-only pending activation.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway/category.
- Current declared-distance table resolving the displaced-threshold discrepancy.
- Transition altitude/level — a reliable current figure was not obtained.
- ILS idents for both runway ends.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, current PPR status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- Alpha Handling — "Bucharest Băneasa Airport (LRBS/BBU) Information & FBO" — https://alphahandling.com/en/lrbs_bbu-airport (retrieved 2026-07-26). *AIP-referenced NOTAM excerpt on ABORA/ADULI fix-reachability caution (citing AIP Romania AD 2.4-5, eff. 2025-04-17); ground-frequency correction — ground-handler public page, cross-check only.*
- OurAirports — https://ourairports.com/airports/LRBS/runways.html (retrieved 2026-07-26). *Displaced-threshold figures.*
- SkyVector — https://skyvector.com/airport/LRBS/Baneasa-Aurel-Vlaicu-Airport (retrieved 2026-07-26). *Conflicting displaced-threshold figure, frequencies.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Romania (ROMATSA); K Global fields from live VAMSYS; 4-page pack. LRBS not in VAMSYS — flagged 🟧. |
