# FAOR — O.R. Tambo Intl · Arrival Page

**FAOR / JNB** · Kempton Park, Johannesburg, Gauteng, South Africa · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [FAOR Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **03R / 21L** (predominant arrival runway pair in either config) |
| Usual approach | ILS CAT II on the assigned runway |
| Config logic | Wind-driven 03↔21; 03R/21L is the field's default arrival runway pair — **do not request 03L for landing** |
| Transition level | By QNH; TA 8,000 ft — verify current chart 🟧 |
| LVP trigger | Convective-season low-vis events; CAT II ILS on all four runway ends is the standing mitigation — exact RVR trigger not confirmed 🟧 |
| Missed-approach driver | Airspace/traffic re-sequencing (dual-parallel radar environment), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** AVAGO, NIBEX, STANDERTON, OKPIT, WITBANK, AVILO — runway-specific variants (conventional and RNAV) published for 03R and 21L; verify current AIRAC.
- **Selection by arrival direction / runway:** The active 03↔21 configuration (wind-driven) determines the STAR-to-runway feed; Johannesburg Radar assigns the transition.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS transition with radar vectors onto final; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late 03↔21 config changes ahead of an afternoon convective wind shift are the main energy trap at this field; brief an early-descent contingency during the Oct–Apr thunderstorm season.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 03R | ILS Z / ILS X / ILS W | **CAT II** — primary arrival runway in 03-config 🟩 | verify current chart |
| 21L | ILS Z / ILS X | **CAT II** — primary arrival runway in 21-config 🟩 | verify current chart |
| 21R | ILS / VOR Z / VOR Y | **CAT II** — expect ILS Z unless otherwise directed; 450 m displaced threshold (LDA 3,971 m) 🟧 | verify current chart |
| 03L | ILS Z / ILS Y | **CAT II** — landing not normally requested here (§1) | verify current chart |

- **LVP triggers:** Convective-season (Oct–Apr) low-vis events are the routine FAOR trigger; CAT II capability on all four runway ends is the standing mitigation. Exact RVR trigger not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Open Highveld plateau at 5,558 ft — no close-in high terrain relevant to any arrival path. The field's elevation is a performance issue (climb-gradient/landing distance), not a terrain-clearance one.
- **Specific threats:** 🟧 Convective-season (Oct–Apr) thunderstorm activity with associated gusty/shifting wind and possible wind-shear — brief for a possible late runway-configuration change. The **iron/steel works ~5 NM SE** can produce turbulence to 500 ft AGL from hot ignited-gas releases — a localised hazard if the approach or missed-approach track passes that sector.
- **Airspace / traffic:** 🟧 Busy dual-parallel-runway radar environment under Johannesburg Radar — brief for vectoring/sequencing, especially during banks or convective-weather disruption.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (open plateau) — fly the published MAP and verify climb-gradient/turn on the current chart. Given the hot-and-high regime, confirm the missed-approach climb gradient is achievable at the day's weight/temperature.
- **Re-sequencing environment:** A go-around returns you to a busy dual-parallel radar environment — expect vectoring and possible holding before re-sequencing.
- **Go-around traps:** Traffic/config awareness on the parallel runway pair during the miss; convective-weather-driven late config changes compound go-around workload in season.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 03L/03R/21L **full length** (4,421 m / 3,405 m / 3,405 m); **21R has a 450 m displaced threshold — LDA 3,971 m**, not the full published runway length. See [Briefing §7](index.md).
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 Convective-season heavy rain (Oct–Apr) is the main wet-runway/braking-action consideration; no specific contamination data confirmed this pass.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on 03R/21L (or 21R with the displaced threshold noted), taxi in via Ground/Apron assignment to the main terminal apron groups; VAMSYS mirror gives a planning taxi-in time of **15 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 See [Briefing §13](index.md) — the TWY B/M intersection bend, the CAT II/CAT I holding-point visual-illusion junction (relevant to crossing traffic even on taxi-in), and jet-blast caution points near TWY E.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Code F wingspan restrictions apply on Taxiway A past D Apron when other Code F traffic is present.

---

## 9. Arrival frequency sequence

- **Sequence:** **Johannesburg Radar West/South/East (123.7/124.5/124.5) → Tower West 118.1 or Tower East 118.6 → Ground (SMC) 121.9 → Apron 122.65 (non-ATC).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Johannesburg Radar** (ATNS) is the terminal approach facility; **Johannesburg Area North/South (ACC)** hands off en route inbound — see [Africa Airspace brief](../../../../airspace/africa.md) for the Johannesburg FIR (FAJA). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **Do not expect RWY 03L for landing** — the AIP explicitly notes it as predominantly the departure runway.
- **RWY 21R carries a 450 m displaced threshold** — brief LDA 3,971 m, not the full runway length, when 21R is assigned.
- **Convective-season (Oct–Apr) afternoon thunderstorms** can force a late runway-configuration change — watch the ATIS wind trend closely in season.
- **Hot-and-high missed-approach climb gradient** — confirm achievability at the day's weight/temperature before committing to the approach on a hot afternoon.
- **Iron/steel works turbulence source ~5 NM SE** — a genuine low-level turbulence caution if the approach/missed-approach track passes that sector.
- **CAT II holding-point visual illusion** remains relevant to crossing traffic during taxi-in, not just departures.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- CAT II RVR/trigger values.
- Rapid-exit taxiway/vacate detail.
- Current taxi-in routing and gate assignment for our operation.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, current density-altitude/performance figures. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP South Africa (ATNS/SACAA), AD 2 FAOR** — STAR/IAP index, runway/declared-distance data, communications, hot-spot remarks — https://cad.atns.co.za/SmartAIM/EAipPackages/15-OCT-22/2022-10-15-000000/html/eAIP/FA-AD-2-FAOR-en-US.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP South Africa (ATNS); K Global fields from live VAMSYS; 4-page pack. |
