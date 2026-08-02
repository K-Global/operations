# DNKA — Kaduna · Arrival Page

**DNKA / KAD** · Kaduna, Kaduna State, Nigeria · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Nigeria (NCAA)-derived, provisional

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [DNKA Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | 05 or 23 — wind-driven, no published preferential rule found 🟧 |
| Usual approach | Not confirmed by name; a localizer is documented at the field (§4) 🟧 |
| Config logic | Wind-driven; single runway, no crosswind alternative |
| Transition level | Not published / verify 🟧 |
| LVP trigger | 🟥 **Harmattan-season visibility reduction (Nov–Mar)** — the most severe of the four fields in this build |
| Missed-approach driver | Not terrain-driven; the 2010 undershoot accident (Briefing §3.3) is the standing lesson — fly a stabilized approach |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass. 🟧
- **Selection by arrival direction / runway:** Wind-driven choice of 05 vs 23; no published transition detail.
- **Transition to approach:** Not confirmed — procedural (non-radar) environment likely uses a standard arrival/approach sequence with position reporting rather than vectoring.
- **Speed / flow constraints on the STAR:** Not published — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; no field-specific constraint identified beyond the weather/approach cautions below.
- **Speed control:** 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Altitude constraints:** Not published — fly the charted altitudes.
- **Energy traps:** 🟥 The field's **2010 landing-short/localizer-strike accident** is a documented undershoot event — the standing lesson is to fly a stabilized approach to the charted minima and go around rather than accept a below-profile visual technique, particularly in reduced (harmattan) visibility.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 05 | Not confirmed by name 🟧 | A **localizer** is documented at the field (struck in the 2010 accident) — category/minima not confirmed | Verify current chart |
| 23 | Not confirmed by name 🟧 | Not confirmed | Verify current chart |

- **LVP triggers:** 🟥 Harmattan-season dust haze (Nov–Mar) is this field's **most severe** visibility-reduction trigger of the four in this build, given its northerly, near-Sahel location. Exact RVR/procedure not confirmed.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None identified — northern Nigerian plateau/savanna terrain, no close-in high ground found in reachable sources.
- **Specific threats:** 🟥 **Documented approach-undershoot accident** (2010, Boeing 737 struck the localizer antenna and landed short, with several passenger injuries) — brief a firm stabilized-approach and go-around discipline, especially in harmattan-reduced visibility.
- **Airspace / traffic:** 🟧 Procedural (non-radar); possible military-traffic interaction given the field's Nigerian Air Force association, not independently confirmed.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not a factor — plateau/savanna terrain.
- **Re-sequencing environment:** Not confirmed — likely low-to-moderate given the field's regional traffic profile.
- **Go-around traps:** 🟥 The 2010 accident is the standing lesson — do not press a below-profile approach; go around early if the runway environment/lighting is not clearly in sight at minima, particularly in harmattan haze.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 3,000 m (both runway ends) — declared distances not independently AIP-sourced this pass; assumed equal to full paved length. 🟧
- **Braking / vacate:** Not confirmed — confirm with Tower on the day. 🟧
- **Runway-excursion watch:** 🟧 No displaced thresholds found; the field's documented accident is an **undershoot** (short of the runway) rather than an excursion off the far end — brief accordingly.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not published — confirm with Ground/Tower on the day; possible military-side ground-traffic interaction (Briefing §5/§13), not independently confirmed.
- **Hot spots / tight taxiways:** None identified in reachable sources.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — stand/apron detail not confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** **Kano ACC / Lagos ACC** (per routing) → **Kaduna Approach 122.3** (reported frequency; Tower frequency not reached this pass). Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** Non-radar/procedural — likely **Kano ACC** handoff given the field's northern location, not AIP-confirmed. 🟧

---

## 10. Gotchas

- **Documented 2010 approach-undershoot accident (localizer-antenna strike, landed short)** — fly a stabilized approach; go around rather than press a below-profile landing.
- **Most severe harmattan exposure of the four fields in this build** — visibility can drop quickly in season (Nov–Mar); brief a holding/diversion contingency.
- **No crosswind runway alternative** — do not expect a config change to relieve a crosswind event; brief the divert option early.
- **Documented security incident (2022 armed attack)** — maintain live awareness of the current security picture; do not treat this as historical-only.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR/approach names and minima; localizer ident/frequency.
- Transition level.
- Exact LVP/harmattan-trigger visibility values.
- Rapid-exit taxiway/vacate detail.
- Current security/access status affecting arrival planning.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, security/access), harmattan visibility trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/DNKA/runways.html , /frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Kaduna International Airport" — https://en.wikipedia.org/wiki/Kaduna_Airport (retrieved 2026-07-26). *2010 accident, 2022 attack.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Nigeria (NCAA); K Global fields from live VAMSYS; 4-page pack. First build — no prior stub existed for DNKA. |
