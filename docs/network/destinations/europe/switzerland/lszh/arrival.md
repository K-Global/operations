# LSZH — Zurich · Arrival Page

**LSZH / ZRH** · Kloten, Zurich, Switzerland · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LSZH Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY14** (Day concept), **RWY34** (Morning concept), **RWY28** (Evening concept) — see §2 |
| Usual approach | ILS CAT III on 14/16; ILS CAT I (non-standard minima) on 28; ILS CAT I on 34 |
| Config logic | Time-of-day operating concept tied to the **German cross-border night/early-morning restriction** on northern (14/16) approaches, overridden by wind for strong westerly/bise conditions |
| Transition level | By QNH; transition altitude not confirmed this pass 🟧 |
| LVP trigger | Winter fog/low stratus — mitigated only on RWY14/16 (CAT III); **RWY28/34 explicitly unsuitable for CAT II/III** 🟥 |
| Missed-approach driver | Terrain (Lägern ridge NW; hills S/SW/W), particularly on the RWY28 non-precision case |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** A partial name (a "BERSU"-family arrival feeding ILS14) surfaced in tier-4 research; the full current-AIRAC STAR list was not obtained — pull it at planning. 🟧
- **Selection by arrival direction / runway:** **Day concept** — land RWY14 (RWY16 also used for some long-haul arrivals). **Morning concept** — land RWY34. **Evening concept** — land RWY28. The switch between concepts is the field's signature planning item — see [Briefing §5/§10/§12](index.md).
- **Transition to approach:** Expect a STAR-to-ILS transition with radar vectors onto final; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** A **late runway/concept change** (e.g., an unexpected shift from Day to Evening concept, or a wind-driven override) is the principal energy trap here — brief for a possible late switch from RWY14 to RWY28, which also changes the low-visibility picture (CAT III lost).

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 14 | ILS (IKL) | **CAT III** 🟩 | Verify current chart; threshold displaced 150 m |
| 32 | Not confirmed 🟧 | Not confirmed | Verify current chart |
| 16 | ILS (IZH) | **CAT III** 🟩 | Verify current chart |
| 34 | ILS (IZS) | **CAT I only** — no CAT II/III fallback 🟧 | Verify current chart; threshold displaced 470 m |
| 28 | ILS (IZW), non-standard minima; RNP reported as a preferred alternative in some tier-4 sources 🟧 | **CAT I only, not CAT II/III suitable** 🟥 | Verify current chart |
| 10 | Not confirmed 🟧 | Not confirmed | Verify current chart |

- **LVP triggers:** Winter fog/low stratus is the routine LSZH trigger; **CAT III capability exists only on 14/16.** If the operative landing runway under the current concept is 28 or 34 and visibility drops, no CAT II/III fallback exists on those runways — a real diversion-risk scenario. 🟥

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 Hills to 2,400–3,000 ft AMSL within 4–7 NM (S/SW/W); the **Lägern ridge** (~2,841 ft) ~15 km NW is directly implicated in a historical night non-precision-approach CFIT accident on the RWY28 approach — cross-ref [Briefing §3.1](index.md).
- **Specific threats:** 🟧 Intersecting-runway geometry (10/28 × 16/34) sustains continuous crossing-clearance workload; wake from adjacent traffic is a standing consideration during high-density periods.
- **Airspace / traffic:** 🟧 Busy hub under Zurich Approach; Switzerland FIR (LSAS) has no dedicated brief in-library — see [Europe airspace briefing](../../../../airspace/europe.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** The RWY28 non-precision missed approach in marginal weather is the historically sensitive case (§3.1 of the Briefing) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops you back into a busy crossing-runway radar environment — expect vectoring and possible holding before re-sequencing.
- **Go-around traps:** Awareness of the concurrent departure stream on the concept-assigned takeoff runway is the main traffic consideration during the miss.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 🟧 Not published/verify for any runway — TORA/TODA/ASDA are sourced, but LDA is not independently confirmed (Briefing §7). RWY14 (150 m) and RWY34 (470 m) both carry displaced thresholds that reduce LDA below TORA.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 Displaced thresholds on 14/34 reduce usable landing distance; winter contamination/braking-action consideration applies in the seasonal window.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the concept-assigned runway, taxi in per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **14 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 Reported taxiway wingspan restrictions near ILS critical/sensitive areas, and the **10/28 × 16/34 crossing geometry**, are the recognised complex ground junctions — taxi with vigilance.
- **Stand/gate notes:** See [Dispatch §2/§3](dispatch.md) — dock/gate assignment for our operation not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Zurich Approach/Arrival (sector-specific) → Zurich Tower → Zurich Ground.** Take the assigned frequency and confirm current chart (frequencies from Briefing §8, flagged 🟧 pending live-AIRAC reconciliation).
- **Approach/Departure control:** Zurich Approach (Radar) is the facility for terminal approach; **Switzerland FIR (LSAS)** hands off en route inbound — no dedicated FIR brief exists in-library, see [Europe airspace briefing](../../../../airspace/europe.md). 🟧

---

## 10. Gotchas

- **RWY28 and RWY34 have no CAT II/III fallback** — a low-visibility event during a Morning/Evening-concept window is a genuine diversion-risk scenario.
- **The German cross-border restriction can force a runway/concept switch you may not expect from wind alone** — brief the time-of-day logic, not just the METAR.
- **Displaced thresholds on RWY14 (150 m) and RWY34 (470 m)** — verify current LDA before treating a runway as full-length.
- **Terrain (Lägern ridge NW; hills S/SW/W)** is a real factor on the RWY28 non-precision approach — historically implicated in a fatal accident.
- **Crossing-runway geometry** sustains continuous ATC workload — expect vectoring/holding, especially in marginal weather.
- **Hard field night curfew** — a delayed arrival risks running into the curfew tail; do not plan a schedule that relies on a very-late landing.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- LDA per runway (not found in any reachable source).
- Exact LVP/CAT III trigger conditions on 14/16.
- Rapid-exit taxiway/vacate detail.
- Current dock/gate assignment for our operation.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT III equipment status on 14/16), ATIS config/wind trend, current status of the German cross-border restriction. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- AIP Switzerland (Skyguide eAIP) — https://www.eaip.skyguide.ch/ — attempted 2026-07-26; unreachable (JS/frameset) this session.
- Zurich Airport (Flughafen Zürich AG) — operating-concepts page (retrieved 2026-07-26).
- en.wikipedia.org/wiki/Zurich_Airport (retrieved 2026-07-26). *Historical CFIT-accident context.*
- IVAO Switzerland — Zurich Air Traffic Management Manual (retrieved 2026-07-26). *STAR/IAP index, LVP table — network-sim training document, not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Switzerland (Skyguide); K Global fields from live VAMSYS; 4-page pack. |
