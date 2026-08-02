# RJAA — Tokyo Narita · Arrival Page

**RJAA / NRT** · Narita, Chiba Prefecture, Japan · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [RJAA Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **16R/34L (Runway A)** preferred, especially for any low-visibility arrival; **16L/34R (Runway B)** supplements capacity in good weather/daytime |
| Usual approach | **ILS CAT II/III on RWY 16R only**; ILS CAT I on 34L, 16L, 34R |
| Config logic | Wind/traffic/weather driven; RWY 16R is the default choice whenever low-visibility capability may be needed |
| Transition level | By QNH; transition altitude 14,000 ft (Japan-wide standard) — verify current chart 🟧 |
| LVP trigger | Winter Kanto-plain radiation fog/low stratus dropping visibility below CAT I minima — CAT II/III on RWY 16R is the standing mitigation, **but only in that one runway direction** 🟧 |
| Missed-approach driver | Airspace/traffic density (shared Tokyo-area RJAA/RJTT environment), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Wind/traffic-driven choice between the 16- and 34-directions on both runway pairs; **RWY 16R is preferentially assigned whenever CAT II/III capability may be needed**, since it is the field's only runway direction with that capability.
- **Transition to approach:** Expect a STAR-to-ILS transition with radar vectors onto final under Tokyo Approach; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; expect additional flow/sequencing interaction given the shared Tokyo-area (RJAA/RJTT) terminal airspace.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** A late runway/config change driven by a wind shift is the main energy trap; if the change moves the assignment **away from RWY 16R during a low-visibility event**, be ready for a CAT-I-only re-plan rather than assuming CAT II/III minima carry over to the new runway.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 16R | ILS Z RWY 16R; VOR/DME RWY 16R | **CAT II/III** — the field's only low-vis-capable direction 🟥 | verify current chart |
| 34L | ILS RWY 34L; VOR/DME RWY 34L | CAT I only | verify current chart; note the unresolved 750 m displaced-threshold question affecting usable LDA — see Briefing §7/§18 🟧 |
| 16L | ILS Z RWY 16L; VOR/DME RWY 16L | CAT I only; RESA published at only 40 m (below ICAO-recommended 240 m) 🟧 | verify current chart |
| 34R | ILS Z RWY 34R; VOR/DME RWY 34R | CAT I only; RESA 240 m — the one end meeting the full ICAO recommendation 🟩 | verify current chart |

- **LVP triggers:** Winter Kanto-plain radiation fog/low stratus is the routine RJAA trigger. Because CAT II/III exists on RWY 16R alone, an LVP event with wind favouring any of the other three runway ends leaves CAT I minima only — a materially different picture from a field with CAT III on every parallel. Exact RVR/trigger figures not confirmed this pass. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Kanto plain at 135 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟧 The field's **single-direction CAT II/III coverage** (RWY 16R only) is the standout specific threat — brief the CAT-I-only contingency for the other three runway ends. Separately, **RWY 16L (RESA 40 m) and RWY 34L (RESA 90 m, plus an unresolved displaced-threshold/LDA question)** carry a reduced overrun safety margin — treat these two ends with extra runway-excursion awareness (§7).
- **Airspace / traffic:** 🟧 Shared Tokyo-area terminal airspace with Haneda (RJTT) under Tokyo Approach — brief for possible re-sequencing/extended vectoring, especially in marginal weather or during a peak bank.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat plain) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around drops you back into the shared Tokyo-area (RJAA/RJTT) radar environment — expect vectoring and possible holding before re-sequencing, especially during a winter fog event.
- **Go-around traps:** If the missed approach follows a 16R low-vis attempt, be aware that a subsequent attempt on a different runway direction will **not** carry the same CAT II/III minima — plan the contingency (hold for 16R again, or divert) rather than assuming an equivalent re-attempt elsewhere.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 16R **4,000 m**; 34L **4,000 m published, but 🟧 unresolved** — the AIP aerodrome chart and two independent public sources show a 750 m inward threshold displacement not reflected in the declared-distance table used for this build (possible actual LDA ~3,250 m; verify current AIRAC before planning a 34L landing near max weight); 16L **2,500 m**; 34R **2,500 m**.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Ramp on the day. 🟧
- **Runway-excursion watch:** 🟥 **RWY 16L (RESA 40 m) and RWY 34L (RESA 90 m)** publish a runway end safety area below the ICAO-recommended 240 m — combined with 34L's unresolved LDA question, these two ends carry the field's genuine reduced-overrun-margin risk. RWY 16R (164 m) and RWY 34R (240 m, full recommendation) are comparatively better protected.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, taxi in to the assigned terminal per Ground/Ramp assignment; VAMSYS mirror gives a planning taxi-in time of **18 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **Taxiways A3–A8 and B1–B7** are not individually ATC-controlled and become unavailable to departures (affecting overall ground flow) whenever stop-bar lights activate at RVR ≤ 600 m — taxi with vigilance in low-vis conditions. **Code F (A380-class) aircraft** face a reduced 90 m centreline separation and require 10.5 m wingtip-to-fence clearance on **TWY K**, with mandatory tow at stands D3/N1.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Code F stands confirmed to exist at the field; exact assignment for our operation not yet confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Tokyo Approach 124.40 (primary)/121.275/125.20/125.80/127.70/225.65 → Narita Tower 118.20 (primary)/118.35/122.70/126.20/236.80 → Narita Ground 121.95/121.85 → Narita Ramp Control 121.60/121.75/118.15/121.70.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Tokyo Approach/Departure Radar** (JCAB) is the facility for Narita's terminal approach; **Tokyo ACC (RJJJ)** hands off en route inbound — see [Tokyo (RJJJ) FIR brief](../../../../airspace/fir/asia/tokyo-rjjj.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **CAT II/III exists only on RWY 16R** — do not assume the same low-vis capability on 34L, 16L or 34R.
- **RWY 34L's usable LDA is an open question** — the AIP table shows 4,000 m, but the chart and two other sources show a 750 m displaced threshold; verify current AIRAC before planning a near-max-weight landing there.
- **RWY 16L and 34L have below-ICAO-recommended RESA (40 m and 90 m)** — brief a heightened runway-excursion mindset on these two ends.
- **Taxiways A3–A8/B1–B7 close to departures during stop-bar operation (RVR ≤ 600 m)** — expect ground-flow impact on taxi-in during fog events even though it's framed as a departure restriction.
- **Hard curfew 00:00–06:00 JST** — a delayed arrival that cannot land before midnight must divert; do not plan a schedule that relies on a post-curfew landing.
- **Config swap (16↔34) driven by a wind shift** can bring a late runway change — watch the ATIS wind trend, especially regarding which runway retains CAT II/III relevance.
- **Shared Tokyo-area terminal airspace with Haneda (RJTT)** sustains a busy sequencing environment — expect vectoring/holding, especially in marginal weather.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- RWY 34L declared distance / displaced-threshold resolution (see Briefing §7/§18).
- Rapid-exit taxiway/vacate detail.
- Exact LVP/CAT II/III trigger RVR values for RWY 16R.
- Current taxi-in routing and gate assignment for a K Global operation.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. CAT II/III equipment status on RWY 16R and any construction-related closure), ATIS config/wind trend, current flow status in the shared Tokyo-area terminal environment. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Civil Aviation Bureau, Japan (JCAB) — AIP Japan, AD 2 RJAA** (mirrored full-text extract) — https://nagodede.github.io/aip/japan/documents/RJAA_full.pdf (retrieved 2026-07-26). *Runway/declared-distance/RESA data, communications, navaid/ILS category data.*
- Civil Aviation Bureau, Japan — AIP Japan, Aerodrome Chart AD 2.24.1 RJAA (mirrored) — https://opennav.com/pdf/RJAA/JP-AD-2.24.1-RJAA-en-JP.pdf (retrieved 2026-07-26). *RWY 34L 750 m displaced-threshold depiction; PAPI/ILS data.*
- OurAirports — https://ourairports.com/airports/RJAA/runways.html (retrieved 2026-07-26). *Displaced-threshold cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
