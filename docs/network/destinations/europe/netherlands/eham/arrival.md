# EHAM — Amsterdam/Schiphol · Arrival Page

**EHAM / AMS** · Haarlemmermeer, Noord-Holland, Netherlands · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Netherlands (LVNL eAIP)-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EHAM Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **No fixed runway** — wind/noise-driven; **Kaagbaan (06)** primary in northerly wind, **Polderbaan (18R)** primary in southerly wind and the default night-landing runway; **Aalsmeerbaan (36R)** / **Zwanenburgbaan (36C)** added as peak-arrival secondaries |
| Usual approach | ILS CAT III on the assigned parallel (six of twelve runway ends so equipped) |
| Config logic | Full wind/noise-driven Preferential Runway System — see Briefing §3.2/§10/§11 |
| Transition level | Not independently confirmed this pass 🟧 |
| LVP trigger | Winter North Sea radiation/advection fog or low stratus — CAT III on six runway ends is the standing mitigation 🟧 (exact RVR trigger not confirmed) |
| Missed-approach driver | Airspace/traffic density (six-runway, frequently-reconfigured environment), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** The **active runway combination** (Briefing §10) determines which STAR/transition applies; Amsterdam Radar (LVNL) assigns the transition for the current configuration — confirm via ATIS which combination is active before briefing the approach.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final for the assigned runway; verify the charted transition. 🟧
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; expect additional flow speed control given the high-density environment.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate. A runway-combination change or fog-driven reduced-rate arrival flow can compress the descent — brief an early-descent contingency.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** A **late runway/config change** driven by a wind shift (the field's defining operational variable) is the primary energy trap here; holding/resequencing during a winter fog event is the secondary trap.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 06 | ILS (KAG) | **CAT III** 🟩 — primary arrival, northerly-wind config | verify current chart |
| 24 | — (no ILS) | Visual/RNAV only — Kaagbaan reciprocal | verify current chart |
| 18R | ILS (VPB) | **CAT III** 🟩 — primary arrival, southerly-wind config and default night runway | verify current chart |
| 36L | — (no ILS) | **Not available for landing except emergency** — Polderbaan reciprocal, departure-favoured | n/a |
| 18C | ILS (ZWA) | **CAT III** 🟩 — peak-arrival secondary, southerly-wind config | verify current chart |
| 36C | ILS (MSA) | **CAT III** 🟩 | verify current chart |
| 36R | ILS (ABA) | **CAT III** 🟩 — peak-arrival secondary, northerly-wind config; normal landing direction | verify current chart |
| 18L | — (no ILS) | **Not available for landing except emergency** — Aalsmeerbaan reciprocal, departure-favoured | n/a |
| 27 | ILS (BVB) | **CAT III** 🟩 — high-traffic fifth runway | verify current chart |
| 09 | — (no ILS) | Visual/RNAV only — Buitenveldertbaan reciprocal | verify current chart |
| 22 | ILS (SCH) | **CAT I only** 🟧 — the field's one non-CAT-III ILS; Oostbaan, not normally assigned to K Global traffic | verify current chart |
| 04 | — (no ILS) | Oostbaan reciprocal — not normally assigned | n/a |

- **LVP triggers:** Winter North Sea radiation/advection fog or low stratus is the routine EHAM trigger — CAT III capability on six runway ends is the standing mitigation. ILS sub-category (IIIA/IIIB/IIIC) not confirmed from a primary table this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat, below-sea-level Dutch polder land — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟥 **Six-runway, wind/noise-rotated environment** — a wind shift can force a runway-combination change with little warning; brief for the possibility of a late runway reassignment. Wake-turbulence consideration applies during simultaneous/dependent parallel operations (e.g. Kaagbaan + Aalsmeerbaan concurrently at peak arrival).
- **Airspace / traffic:** 🟥 Very high density under **Amsterdam Radar** (LVNL) — one of the busiest terminal areas in Europe; brief for re-sequencing and extended vectoring, especially in marginal weather or during a runway-combination change.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat, below-sea-level polder) — fly the published MAP and verify climb-gradient/turn on the current chart. 🟧
- **Re-sequencing environment:** A go-around drops you back into a very high-density, frequently-reconfigured six-runway radar environment — expect extended vectoring and possible holding before re-sequencing, especially during a winter fog event or a runway-combination change.
- **Go-around traps:** Traffic/config awareness across the active runway set during the miss; confirm whether the assigned runway's reciprocal is genuinely available (several ends are landing-restricted, §4).

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 06 **3,195 m** (DTHR 244 m) · 24 **3,439 m** · 18R **3,530 m** (DTHR 270 m) · 36L **3,800 m** (not available for landing except emergency) · 18C **3,300 m** · 36C **2,850 m** (DTHR 450 m) · 36R **2,825 m** · 18L **2,825 m** (not available for landing except emergency) · 27 **3,453 m** · 09 **3,363 m** (DTHR 90 m) · 22 **2,020 m** · 04 **2,020 m**. All ample for K Global widebody types on the normal landing directions; the Oostbaan (04/22) is not normally assigned. See [Briefing §7](index.md) for the full declared-distance table.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 Displaced thresholds materially reduce LDA on 06, 09, 36C and 18L — always use the declared LDA for the assigned direction, never the physical/advertised length.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway (per the active combination), taxi in to the Pier E/F/G widebody cluster (or as assigned) per Ground/Apron instruction; VAMSYS mirror gives a planning taxi-in time of **18 min** `[VAMSYS mirror 2026-07-26]` — reflecting that some runways (notably Polderbaan) are considerably further from the terminal than others.
- **Hot spots / tight taxiways:** Not individually confirmed in reachable sources this pass — a six-runway field with continuous configuration changes carries elevated generic ground-routing complexity; verify current AIP/chart hot-spot annotations. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — widebody cluster at Pier E/F/G; confirm current gate assignment given the ongoing Pier A construction programme.

---

## 9. Arrival frequency sequence

- **Sequence:** **Amsterdam Radar / Schiphol Approach (119.055/118.080/312.375/121.205) → Schiphol Arrival (118.405/126.680) → Schiphol Tower (119.230/118.105/118.280/135.110, runway-group-specific) → Schiphol Ground (121.560/121.705/121.805/121.905, runway-group-specific).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Schiphol Approach/Director** (LVNL) is the facility for Schiphol's terminal approach within **Amsterdam FIR (EHAA)** — see [Europe airspace briefing](../../../../airspace/europe.md) 🟧 no dedicated EHAA FIR brief in-library yet. Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **No fixed landing runway** — the active combination is wind/noise-driven; brief for the possibility of a late runway-combination change ahead of a wind shift.
- **Polderbaan (36L) and Aalsmeerbaan (18L) are not routine landing directions** — do not expect them as an arrival option; their reciprocals (18R, 36R) are the normal landing ends.
- **Winter North Sea fog/low-cloud events can drop the field below CAT I minima quickly** — brief the CAT III plan and a holding/diversion contingency in season.
- **Six-runway, continuously reconfigured environment** sustains high traffic density — expect vectoring/holding, especially in marginal weather or during a bank.
- **Taxi-in time varies significantly by runway** — Polderbaan is notably further from the terminal complex than the other runways; factor this into gate-ETA expectations.
- **Field elevation is -11 ft** — below-sea-level altimetry bookkeeping; a routine mental-model check, not an operational hazard.
- **Night slot-restriction window 2200–0600 (2100–0500 winter)** — a delayed arrival lacking an applicable slot in that window carries diversion/re-planning risk.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- ILS sub-category (IIIA/IIIB/IIIC) confirmation.
- Exact LVP/CAT III trigger RVR values.
- Rapid-exit taxiway/vacate detail and ground hot-spot list.
- Transition level.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, active runway combination), ATIS config/wind trend, current slot-window status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **LVNL eAIP (AIP Netherlands), AD 2.EHAM 2.12/2.13/2.14/2.18/2.19**, AIRAC AMDT 05-2026, effective 2026-05-14 — https://eaip.lvnl.nl/ (retrieved 2026-07-26). *Runway/declared-distance data, approach/runway lighting, communications, navaids.*
- Schiphol — "Noise and runway combinations" — https://www.schiphol.nl/en/schiphol-as-a-neighbour/noise-and-runway-combinations/ (retrieved 2026-07-26).
- LVNL — "Current runway usage at Schiphol" — https://en.lvnl.nl/local-community/current-runway-usage-at-schiphol (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Netherlands (LVNL); K Global fields from live VAMSYS; 4-page pack. |
