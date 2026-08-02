# NWWW — Nouméa La Tontouta · Arrival Page

**NWWW / NOU** · Païta, near Nouméa, New Caledonia · Oceania
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, primary AIP not directly reachable this pass

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [NWWW Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY 11** (preferred, precision approach); **RWY 29** when tailwind on 11 exceeds ~10 kt (~5 kt wet) |
| Usual approach | ILS/LOC (RWY 11); RNP or visual circling (RWY 29 — **no ILS**) |
| Config logic | Reciprocal-runway operation; RWY 11 preferred, no published wind limit for that end |
| Transition level | **FL120** (QNH 1013–1048 hPa) or **FL130** (QNH 977–1012 hPa); TA 11,000 ft |
| LVP trigger | Not confirmed in reachable sources; low-visibility capability exists only on RWY 11 🟧 |
| Missed-approach driver | 🟧 No verified terrain data obtained this pass — consult current AIRAC MSA/area chart rather than relying on this brief |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Two families feed RWY 11/29 — routes ending **"2"** use VOR **LTO** as IAF (**POXAK 2** ex-Sydney/YSSY, **NISAS 2** ex-Brisbane/YBBN, **TEPAM 2** ex-Cairns/YCNS, **ONIBA 2** ex-Port Moresby/AYPY, **GOPRA 2** ex-Tokyo/RJAA-RJTT, **NIPOG 2** ex-Port Vila/NVVV, **PULON 2** ex-Honolulu/PHNL, **MUSUS 2** ex-Nadi/NFFN, **ADKAD 2** ex-Tahiti/NTAA, **VIRAR 2** ex-Auckland/NZAA, **SCUBA 2** ex-Norfolk Island/YSNF); routes ending **"2A"** feed an intermediate IAF matched to the chosen final-approach procedure. 🟧 Verify current AIRAC names before use.
- **Selection by arrival direction / runway:** Tontouta Approach ("Tontouta Information") assigns the STAR/config for the active runway; **RWY 11 is preferred** absent a qualifying tailwind (§1).
- **Transition to approach:** STAR terminates at LTO VOR (the common IAF for the "2" family) or at an intermediate IAF matched to the final approach for the "2A" family; radar/ADS-B vectoring is available within ADS-B coverage.
- **Speed / flow constraints on the STAR:** Not independently confirmed; verify current chart. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate — several STARs carry named minimum altitudes (e.g. ~3,000 ft at POXAK/NISAS/TEPAM/SCUBA/VIRAR, higher stepped constraints on the longer-haul GOPRA/NIPOG/PULON/MUSUS/ADKAD arrivals from more distant origins).
- **Speed control:** Not independently confirmed beyond standard ICAO norms; verify current chart. 🟧
- **Altitude constraints:** Key STAR crossing constraints are pointers only — fly the charted altitudes; do not descend below each TMA's floor (TMA 1.1/1.2/1.3 floor 1,500 ft ASFC; TMA 1.4 floor 1,200 ft ASFC — see [Briefing §3.2](index.md) context).
- **Energy traps:** A **late runway change from RWY 11 to RWY 29** driven by a building tailwind is the main energy trap, given RWY 29 carries no precision approach — a late switch compresses the approach-preparation timeline materially more than at a symmetric-capability field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 11 | ILS/LOC (three IAF variants x/y/z, via TOSAM/SAMID/SUDOV–PEPIT) | Precision approach — the field's only ILS 🟩 | verify current chart |
| 11 | RNP | | verify current chart |
| 11 | VOR (via PEPIT/LTO) | | verify current chart |
| 11 | NDB (two variants y/z, via FND) | | verify current chart |
| 29 | RNP | 🟥 **No ILS on this end** | verify current chart |
| 29 | VPT (visual manoeuvre, prescribed track) | Flown after an ILS/VOR approach to RWY 11, breaking right; left-hand main circuit; max 185 kt IAS | Day/visual conditions only — confirm current criteria |

- **LVP triggers:** Not independently confirmed; the field's low-visibility capability exists **only on RWY 11**. A RWY 29 arrival requirement in marginal weather is a materially more demanding case — brief accordingly. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 No verified close-in terrain/MSA data obtained from a primary source this pass — New Caledonia's Grande Terre carries rolling-to-mountainous terrain in general; consult the current AIRAC MSA/area chart before relying on this brief for a clearance figure.
- **Specific threats:** 🟥 **RWY 29 has no precision approach** — an arrival to that end in marginal weather relies on RNP or the visual circling procedure (VPT) only. **Night visual approaches are prohibited from the north sector** (LTO VOR radials 290°–128°).
- **Airspace / traffic:** 🟧 ADS-B-based ATS surveillance rather than conventional radar (5 NM separation within ADS-B coverage; procedural/non-radar outside it); **no CPDLC** at this field — voice procedures throughout.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** No verified terrain data obtained this pass — fly the published missed approach and verify climb-gradient/turn constraints on the current chart rather than assuming a benign terrain picture.
- **Re-sequencing environment:** Single Approach controller position manages both arrivals and departures alongside the SIV — a go-around re-enters a comparatively low-density but procedurally distinct (ADS-B, non-radar-outside-coverage, no-CPDLC) environment versus a major continental hub.
- **Go-around traps:** A missed approach to RWY 29 has no precision-approach fallback for a subsequent attempt — plan the contingency (hold, divert, or reattempt RWY 11 if the wind trigger allows) before committing to the RWY 29 approach.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 11 **3,250 m**; 29 **3,250 m** — ample for any K Global type likely on this route; no displaced threshold identified.
- **Braking / vacate:** No rapid-exit taxiway detail confirmed; taxiways B/C sit over a kilometre from both thresholds, meaning **backtracking (if required) can take 2–3 minutes** — factor into ground-movement expectations. 🟧
- **Runway-excursion watch:** 🟧 No specific contamination/braking-action data confirmed this pass; the reciprocal-runway wet-tailwind trigger (~5 kt) is the relevant local wind/wet consideration (§1).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in via TWY B, C or W (Code E-capable) to the civil apron per Ground assignment; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **Category A/B and B738/A320-class aircraft may turn around at an intermediate runway point** (marked turn-pad at each threshold, 10 km/h limit); all other types must backtrack the full runway length, taking 2–3 minutes.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — main widebody cluster at P11/P21 (P21 A380-capable via the "ZEC A380" extension); confirm current gate assignment with handling.

---

## 9. Arrival frequency sequence

- **Sequence:** **Tontouta Approach ("Tontouta Information") 119.700 → Tontouta Tower 118.100 → Tontouta Ground 121.700.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8; tier-4 network-sim sourced.)
- **Approach/Departure control:** **Tontouta Approach** is the sole terminal-control position — it manages arrivals, departures and the SIV together (no dedicated Departures position exists at this field). See the [Oceania — SW Pacific & Tasman airspace brief](../../../../airspace/oceania.md) for the wider Nadi/Brisbane oceanic handoff context. 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **RWY 29 has no ILS** — brief the RNP/visual-circling-only reality before accepting a RWY 29 approach in anything less than good visual conditions.
- **No CPDLC at Tontouta** — do not expect datalink service; voice procedures apply throughout.
- **Night visual approaches prohibited from the north sector** (LTO VOR radials 290°–128°).
- **Reciprocal-runway wind-trigger** (~10 kt tailwind dry / ~5 kt wet on RWY 11) can flip the active runway with comparatively short notice — watch the ATIS wind trend, especially given RWY 29's reduced approach capability.
- **Backtracking takes 2–3 minutes** for larger types — factor into ground-movement/taxi-in timing expectations.
- **South Pacific cyclone season (Nov–Apr)** materially affects arrival planning and this field's own role as an alternate — see [Briefing §14](index.md).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Verified terrain/MSA data — not obtained from a primary source this pass.
- LVP/RVR trigger criteria for the RWY 11 ILS.
- Rapid-exit taxiway/vacate detail.
- Primary-AIP confirmation of all network-sim-sourced procedural detail above.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting — especially RWY 11 ILS status), ATIS config/wind trend, cyclone/tropical-system advisories. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **IVAO France — NWWW operating manual** (MANEX Aéroports Civils, AIRAC cycle 2607) — https://wiki.ivao.fr/books/manex-aeroports-civils/page/nwww-noumea-la-tontouta (retrieved 2026-07-26). *Network-sim; STAR/approach/taxi detail cross-checked here.*
- **VATPAC — NWWW SOP** — https://sops.vatpac.org/pacific/New-Caledonia/La-Tontouta/ (retrieved 2026-07-26). *Network-sim; VPT circling procedure, reciprocal-runway logic, backtracking cross-checked here.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from cross-checked tier-4 sources pending primary French SIA AIP verification; K Global fields from live VAMSYS; 4-page pack. |
