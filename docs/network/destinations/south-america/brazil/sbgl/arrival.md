# SBGL — Galeão–Antônio Carlos Jobim · Arrival Page

**SBGL / GIG** · Rio de Janeiro, Rio de Janeiro, Brazil · South America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Brasil (DECEA)-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [SBGL Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | Not confirmed by config logic; RWY 10/28 (main) and 15/33 (secondary, displaced thresholds) are both active 🟧 |
| Usual approach | Not confirmed by name/CAT 🟧 |
| Config logic | Wind-driven; exact criteria not confirmed 🟧 |
| Transition level | Not confirmed 🟧 |
| LVP trigger | Not confirmed; convective-rain visibility reduction rather than plateau fog is the relevant scenario here 🟧 |
| Missed-approach driver | Traffic/coordination with Santos Dumont (SBRJ), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not confirmed — Rio Approach assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Not confirmed. 🟧
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** Late runway/config changes ahead of a wind shift, and rapidly-developing tropical convective cells in the afternoon/evening, are the main energy/weather traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 10 | Not confirmed 🟧 | Not confirmed 🟧 | verify current chart |
| 28 | Not confirmed 🟧 | Not confirmed 🟧 | verify current chart |
| 15 | Not confirmed 🟧 | Threshold displaced 187 m 🟧 | verify current chart |
| 33 | Not confirmed 🟧 | Threshold displaced 114 m 🟧 | verify current chart |

- **LVP triggers:** Not confirmed; tropical convective-rain visibility reduction is the relevant seasonal scenario rather than the radiation fog seen at the São Paulo-area fields. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None at the aerodrome itself. Flat coastal land on Ilha do Governador at 28 ft AMSL — no close-in high terrain relevant to any arrival path. Rio's dramatic terrain lies further inland/around the city core near Santos Dumont, not at Galeão.
- **Specific threats:** 🟧 **Displaced thresholds on both ends of RWY 15/33** (187 m on 15, 114 m on 33) — confirm the correct landing LDA before committing to that runway. A historical runway-excursion precedent exists on RWY 15 (1985 Air France 747, engine-power event on landing) — a generic reminder to respect the displaced threshold and brief excursion-recovery technique.
- **Airspace / traffic:** 🟧 Shares Rio terminal airspace with the busy downtown **Santos Dumont (SBRJ)** airport ~9 NM south-west — brief for cross-traffic coordination, especially in marginal weather.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver at the aerodrome (flat, sea-level) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you into the shared Rio TMA alongside Santos Dumont traffic — expect vectoring/holding pending re-sequencing.
- **Go-around traps:** Traffic/config awareness relative to Santos Dumont cross-traffic; rapidly-developing convective cells can also force a late go-around decision in season.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 10/28 ~4,000 m (no displacement found); **RWY 15 landing LDA ≈ 2,993 m** (187 m threshold displacement) and **RWY 33 landing LDA ≈ 3,066 m** (114 m threshold displacement) — these are **derived from the displacement figures, not an independently confirmed declared-distance table** 🟧. Both are still non-limiting for typical K Global arrival weights, but confirm the correct figure before landing on 15/33.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 A historical excursion precedent exists on RWY 15 (1985 Air France 747); tropical convective-storm rain is the relevant seasonal braking-action consideration.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed — confirm with Ground/Apron on the day; VAMSYS mirror gives a planning taxi-in time of **16 min** `[VAMSYS mirror 2026-07-26]`. All passenger processing is via **Terminal 2** regardless of gate (Briefing §13).
- **Hot spots / tight taxiways:** Not confirmed in reachable sources. 🟧
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — pier/apron capacity materially expanded 2016–17; exact current gate assignment not confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Rio Approach 119.350 (sector-specific) → Galeão Tower 118.000 → Galeão Ground 121.650.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Rio Approach ("Rio APP")** is the facility for SBGL's terminal approach, coordinating with **Santos Dumont (SBRJ)** cross-traffic; **Curitiba (SBCW) FIR / ACC-CW (CINDACTA II)** hands off en route inbound — see [South America Airspace briefing](../../../../airspace/south-america.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **RWY 15/33 both carry displaced thresholds** — never assume full physical runway length is available for landing on either end.
- **Historical runway-excursion precedent on RWY 15** — brief excursion-recovery technique for this runway.
- **Santos Dumont (SBRJ) cross-traffic** in the shared Rio terminal airspace — expect coordination-driven vectoring even on a routine arrival.
- **Tropical convective storms** can develop and dissipate quickly — check the latest ATIS/wind trend right up to the approach.
- **No confirmed curfew** — but confirm current immigration/handling staffing for a late or off-peak arrival.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima/CAT per runway.
- Exact declared LDA for RWY 15/33 (currently derived from displacement figures, not an official declared-distance table).
- Rapid-exit taxiway/vacate detail and taxi-in routing.
- Rio-TMA flow-management interaction with Santos Dumont traffic.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **DECEA / AISWEB — AIP Brasil, aerodrome page AD 2 SBGL** — https://aisweb.decea.mil.br/?i=aerodromos&codigo=SBGL (JS-rendered frameset; not readable to a direct fetch this pass) (attempted 2026-07-26).
- OurAirports — https://ourairports.com/airports/SBGL/runways.html (retrieved 2026-07-26). *Displaced-threshold figures.*
- Wikipedia — "Rio de Janeiro/Galeão International Airport" — https://en.wikipedia.org/wiki/Rio_de_Janeiro%E2%80%93Gale%C3%A3o_International_Airport (retrieved 2026-07-26). *1985 RWY 15 runway-excursion accident.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Brasil (DECEA); K Global fields from live VAMSYS; 4-page pack. |
