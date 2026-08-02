# OMDB — Dubai Intl · Arrival Page

**OMDB / DXB** · Dubai, United Arab Emirates · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — UAE GCAA AIP not reachable this pass; built from tier-4 public sources

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [OMDB Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not published / verify — expect wind-driven selection between 12L/30R and 12R/30L 🟧 |
| Usual approach | ILS reported on both runways (tier-4 corroboration only); CAT/sub-category not confirmed 🟧 |
| Config logic | Not confirmed in reachable sources 🟧 |
| Transition level | By QNH; transition altitude not confirmed this pass 🟧 |
| LVP trigger | Shamal dust/haboob and any fog event — exact RVR trigger not confirmed 🟧 |
| Missed-approach driver | Airspace/traffic density (very high traffic on closely-spaced parallels), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not confirmed in reachable sources — expect radar vectoring by Dubai Approach/dans onto the active configuration. 🟧
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final, consistent with the dense radar-controlled Emirates FIR — see [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §3.
- **Speed / flow constraints on the STAR:** Not confirmed — verify chart; expect additional flow speed control given the very high-density environment. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate (not published this pass). 🟧
- **Speed control:** 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes. 🟧
- **Energy traps:** Late runway/config changes ahead of a wind shift, reduced-visibility events during shamal dust, and holding/resequencing pressure given the very high traffic density are the main energy/planning traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 12L/30R | ILS | CAT/sub-category not confirmed 🟧 | verify current chart |
| 12R/30L | ILS | CAT/sub-category not confirmed 🟧 | verify current chart |

- **LVP triggers:** Shamal dust/haboob visibility events are the routine trigger candidate at this field; exact RVR trigger and ILS sub-category not confirmed from a primary table this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat coastal/desert site at 62 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟥 **Closely-spaced parallel runways** with **significant displaced thresholds on all four ends** (§Briefing §7) — brief the correct usable LDA per assigned runway rather than assuming full length. Very high traffic density sustains near-continuous parallel-dependent or independent operations during banks.
- **Airspace / traffic:** 🟥 One of the world's busiest international-passenger airports — brief for extended vectoring/sequencing, especially during peak banks or marginal weather. See [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) §3/§6.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat coastal site) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops you back into a very high-density, closely-spaced-parallel radar environment — expect extended vectoring and possible holding before re-sequencing, especially during a shamal-dust visibility event.
- **Go-around traps:** Traffic/config awareness on the parallel set during the miss is the standing consideration; not otherwise detailed in reachable sources. 🟧

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 🟥 Both runways carry **significant displaced thresholds** — 12L 450 m / 30R 300 m / 12R 715 m / 30L 132 m (per tier-4 corroboration) — reducing the usable LDA below the full physical runway length. Confirm exact figures against a primary AIP source before relying on them operationally (see [Briefing §7](index.md)).
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 Displaced thresholds are the standing LDA-limited consideration; no contamination/braking-action concern at this warm, dry-climate field under normal conditions.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, taxi in to **T1**, **T2** or **T3** per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **15 min** `[VAMSYS mirror 2026-07-25]`.
- **Hot spots / tight taxiways:** 🟧 Not individually named in reachable sources; the closely-spaced parallel-runway geometry and very high movement rate are the standing ground-workload consideration (see [Briefing §3.2](index.md)).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — current widebody stand allocation across T1/T2/T3 not yet confirmed for our operation.

---

## 9. Arrival frequency sequence

- **Sequence:** **Dubai Arrival 124.9 → Dubai Tower 118.75 → Dubai Ground 118.35 → Apron (not confirmed).** The tier-4 frequency snapshot found is very likely incomplete for a hub of this size — take the assigned frequency and confirm current chart (see [Briefing §8](index.md)). 🟧
- **Approach/Departure control:** **dans (Dubai Air Navigation Services)** is the terminal facility for the Dubai TMA; **Emirates area control (GCAA — Sheikh Zayed ANC)** hands off en route — see [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **Displaced thresholds on every runway end** — do not assume the full physical runway length is usable for landing; verify per assigned runway (§7).
- **Shamal dust/haboob events can drop visibility rapidly** — brief the low-visibility contingency and check current LVP status before arrival planning in season.
- **Very high traffic density on closely-spaced parallels** sustains continuous sequencing pressure — expect vectoring/holding, especially in marginal weather or during a bank.
- **Config swap driven by a wind shift** can bring a late runway change — watch the ATIS wind trend.
- **Regional conflict-zone/GNSS-interference advisory is live** — cross-check current GNSS integrity/RAIM status and be prepared for radar-vector fallback (see the Middle East airspace brief §9).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS idents, frequencies and CAT/sub-category confirmation.
- Exact LVP trigger RVR values.
- Rapid-exit taxiway/vacate detail.
- Current taxi-in routing and gate assignment across T1/T2/T3.
- Full arrival frequency sequence (only a partial tier-4 snapshot found).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, the current regional conflict-zone/GNSS-interference picture. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/OMDB/frequencies.html , /runways.html (retrieved 2026-07-26). *Displaced-threshold figures.*
- Companion OM C file: [Emirates (OMAE) FIR brief](../../../../airspace/fir/middle-east/emirates-omae.md) — terminal control context.
- **UAE GCAA AIP (AD 2 OMDB)** — primary source of record; not reachable in this research pass.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
