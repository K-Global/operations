# EDDK — Cologne/Bonn · Arrival Page

**EDDK / CGN** · Köln / Bonn, North Rhine-Westphalia, Germany · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [EDDK Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **13L/31R** (long parallel, primary for scheduled/cargo jets) 🟧 — confirm current designators, see §4/Briefing §18 |
| Usual approach | ILS (category not independently confirmed — reported CAT III historically) 🟧, RNAV (GPS)/RNP 🟧 |
| Config logic | Not confirmed — likely wind-driven given three runway options; verify current AIP/NOTAM |
| Transition level | Not confirmed for EDDK specifically 🟧 |
| LVP trigger | Winter Rhine-basin radiation/freezing fog and low stratus — if the reported CAT III capability is confirmed, standard LVP conditions would apply; exact trigger not confirmed 🟧 |
| Missed-approach driver | Traffic sequencing among the three runways and against the overnight cargo bank, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** 🟧 Not confirmed from reachable sources — pull from current AIRAC.
- **Selection by arrival direction / runway:** Not confirmed — expect **13L/31R** to be the default assignment for scheduled/cargo jet traffic; confirm active configuration and current runway designators with ATC (§18 of the Briefing flags a possible magnetic-variation renumbering from 14L/32R & 14R/32L).
- **Transition to approach:** Not confirmed — expect radar vectoring to final under Langen Radar. 🟧
- **Speed / flow constraints on the STAR:** Standard ICAO/EU 250 KIAS below FL100; no local override confirmed. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; no field-specific TOD note identified.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Not confirmed — pointers only, verify current chart. 🟧
- **Energy traps:** Confirming the current active runway/designator is the operative caution given the reported renumbering (§4 below); no terrain-driven energy trap identified.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 13L/31R (ex-14L/32R) | ILS (category not independently confirmed — reported CAT III historically) 🟧, RNAV (GPS)/RNP 🟧 | If CAT III confirmed, standard LVP conditions apply — not verified this pass | verify current chart |
| 13R/31L (ex-14R/32L) | 🟧 Not confirmed | — | verify current chart |
| 06/24 | 🟧 Not confirmed | — | verify current chart |

- **LVP triggers:** Winter (Nov–Mar) radiation fog/low stratus in the Rhine basin and occasional snow/icing (Briefing §3.4/§14) is the plausible trigger; exact RVR figures and confirmed ILS category not sourced this pass. 🟧
- **Runway-designator caution:** current tier-4 data shows **13L/31R and 13R/31L**; older reference material shows **14L/32R and 14R/32L** — consistent with a magnetic-variation runway renumbering. Confirm the live designators against the current AIP/NOTAM and any in-sim scenery before use — see [Briefing §4/§18](index.md).

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Low Rhine basin at 302 ft MSL, bordered by the flat-to-gently-rolling **Wahner Heide** heathland/nature reserve — no close-in high terrain; the Bergisches Land uplands lie well east/southeast and are not a factor for standard arrival corridors.
- **Specific threats:** 🟧 **Heavy overnight cargo freighter traffic** (FedEx Express and UPS Airlines hub banks) makes the circuit materially busier in the small hours than the daytime passenger profile suggests — brief for this explicitly on a late/overnight arrival. Wildlife activity from the adjacent Wahner Heide reserve is plausible but not independently confirmed.
- **Airspace / traffic:** 🟩 **Langen FIR (EDGG)**, fully radar/surveillance-controlled — see the [Langen (EDGG) FIR brief](../../../../airspace/fir/europe/langen-edgg.md). Moderate traffic density overall, well below Frankfurt, but elevated overnight due to the cargo bank.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (low Rhine basin) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you to the three-runway layout and the overnight cargo-bank traffic — expect re-sequencing under Langen Radar, especially at night.
- **Go-around traps:** No terrain-specific trap identified; the operative concern is traffic/config awareness among the three runways, particularly against freighter traffic during the overnight bank.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** Physical lengths only confirmed — **06/24** 2,459 m/8,067 ft; **13L/31R** 3,815 m/12,516 ft; **13R/31L** 1,863 m/6,112 ft. TORA/TODA/ASDA/LDA per runway end, and any displaced thresholds, are **not confirmed** — do not treat these physical lengths as usable declared distances (see Briefing §7/§18). 🟧
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground on the day. 🟧
- **Runway-excursion watch:** 🟧 Declared-distance gap means exact usable length should be confirmed before planning a limiting-runway scenario; winter contamination (snow/icing) is a seasonal factor.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not confirmed in detail from reachable sources; VAMSYS mirror gives a planning taxi-in time of **10 min** `[VAMSYS mirror 2026-07-25]`. Note the airport's layout spans three runways and a mixed cargo-freighter/passenger ramp.
- **Hot spots / tight taxiways:** 🟧 None identified from reachable sources — verify current AIP/NOTAM hot-spot chart, particularly given the overnight freighter-bank traffic.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — no widebody stand data reachable; expect standard passenger-terminal handling for the A319 spoke.

---

## 9. Arrival frequency sequence

- **Sequence:** **Langen Radar (Langen ACC, EDGG) 118.75 (H24) → Approach/Director 121.05 (role not independently confirmed) → Tower 124.98 (Turm) → Ground 121.73 (Rollkontrolle).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Langen Radar** (DFS) is the facility for Cologne/Bonn's terminal approach; **Langen ACC (EDGG)** hands off en route inbound — see the [Langen (EDGG) FIR brief](../../../../airspace/fir/europe/langen-edgg.md). 🟧 A separate "Langen Information" entry at 129.875 is labelled AFIS in tier-4 data — likely a mislabel/FIS relay rather than the primary approach service at this radar/TWR-controlled field; verify on current AIP.

---

## 10. Gotchas

- **Runway-designator discrepancy** 🟧 — confirm current AIP/NOTAM designators (13L/31R/13R/31L vs older 14L/32R/14R/32L) before briefing the arrival — see [Briefing §4/§18](index.md).
- **No night curfew — 24h cargo-hub operation.** A night arrival here is entirely normal, unlike at most other German fields in this network — expect a materially busier ramp/circuit overnight due to the FedEx Express/UPS Airlines freighter banks.
- **Declared distances unconfirmed** — do not assume the physical runway lengths in §7 equal usable landing distance available.
- **Wahner Heide nature reserve** borders the field — wildlife activity in the vicinity is plausible; not independently confirmed from a NOTAM/AIP source.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- **Confirm current runway designators** before any arrival briefing.
- ILS category/ident/frequency on the long parallel runway.
- Rapid-exit taxiway/vacate detail.
- LVP/CAT III trigger RVR values.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. current runway-designator status), ATIS config/wind trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — Cologne Bonn Airport (CGN, EDDK) — https://ourairports.com/airports/EDDK/runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-25).
- Wikipedia — Cologne Bonn Airport — https://en.wikipedia.org/wiki/Cologne_Bonn_Airport (retrieved 2026-07-25). *24-hour operating status; FedEx Express/UPS Airlines hub status.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from DFS eAIP-derived Briefing (tier-4 corroboration) + live VAMSYS; new page, part of the fold to a 4-page pack. |
