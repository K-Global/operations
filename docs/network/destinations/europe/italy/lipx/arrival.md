# LIPX — Verona/Villafranca · Arrival Page

**LIPX / VRN** · Villafranca di Verona, Veneto, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LIPX Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY 04** — the field's only instrument-approach-served runway (ILS CAT IIIB) |
| Usual approach | ILS CAT IIIB (ident IVF), RWY 04 |
| Config logic | Terrain and ILS-availability driven, not a simple wind swap — RWY 04 is effectively the default IFR landing runway (Briefing §3.5) |
| Transition level | By QNH; transition altitude **6,000 ft AMSL** `[AIP Italia AD 2 LIPX 1-8]` |
| LVP trigger | **RVR ≤ 550 m and/or cloud base < 200 ft** (or earlier at ATC discretion); aerodrome operating minimum **RVR not less than 75 m** under CAT II/CAT IIIA/B |
| Missed-approach driver | **Terrain to the north** (Alps/Lessini foothills) — not traffic density 🟥 |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable AIP text extract (chart-only index) — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** RWY 04 (ILS CAT IIIB) is the field's only instrument-approach runway — arrivals from any direction are sequenced onto RWY 04 in IMC. Tier-4 sources describe a steep northern arrival profile crossing the Alps at or above **FL150**, descending to **FL120 over Lake Garda**, before continuing down the STAR to the approach. 🟧
- **Transition to approach:** Not independently confirmed this pass — expect radar vectors onto the ILS final in typical use; verify the charted transition. 🟧
- **Speed / flow constraints on the STAR:** Tier-4 sources describe progressive deceleration on the steep northern profile (e.g. below 230 kt over Lake Garda, below 180 kt before turning final) — pointers only, verify current chart. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not confirmed this pass — given the steep northern arrival profile described in tier-4 sources, plan an early descent onto the STAR's altitude/flight-level gates rather than a shallow continuous descent. 🟧
- **Speed control:** Standard 250 KIAS below FL100 (EU/ICAO norm); tier-4 sources describe deceleration below 230 kt over Lake Garda and below 180 kt before turning final on the northern arrival — verify current chart. 🟧
- **Altitude constraints:** Not confirmed this pass — fly the charted MEA/MEL constraints (marked as such on the current chart per tier-4 description). 🟧
- **Energy traps:** The steep northern descent profile (terrain-driven, not a routine continuous descent) is the field's principal energy-management threat if arriving from the north — brief it early. Tier-4 sources also report **false glideslope captures** during the steep descent, to be disregarded in favour of the charted altitude/DME profile. 🟧

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 04 | ILS (IVF) | **CAT IIIB** — LVP trigger RVR ≤ 550 m/cloud base < 200 ft; aerodrome operating minimum RVR ≥ 75 m 🟧 (exact CAT IIIA/B split minima not confirmed from a primary table this pass) | verify current chart |
| 22 | — none published — | **Never an instrument arrival option** 🟥 — LVTO/departure-only per the AIP; tier-4 sources describe it as visual/circling-suitable for light aircraft only, for terrain-clearance reasons | n/a |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 High ground (Alps/Lessini foothills) close north of the field. RWY 22 carries no instrument approach and tier-4 sources describe a steep northern STAR/descent profile with reported false-glideslope captures — cross-ref [Briefing §3.1](index.md). Treat the northern sector with the same terrain discipline as a mountain approach, not a Po Valley flat-plain field.
- **Specific threats:** Single runway (no parallel/reciprocal instrument capacity); joint civil/military traffic mix with separate military remote-stand routing; the field's only low-visibility capability rides entirely on RWY 04 — a strong tailwind-on-04 scenario in marginal weather is a genuine planning problem with no instrument-approach fallback.
- **Airspace / traffic:** Moderate mixed civil/state/military traffic under **Verona APP/Radar** and **Villafranca TWR** (Class D ATZ); en-route context under **Milano ACC (LIMM)** — see [Europe airspace brief](../../../../airspace/europe.md) 🟧 no dedicated Italian FIR brief exists yet in this library.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain to the north is the operative missed-approach consideration, not traffic density — fly the published climb-gradient/turn and verify on the current chart.
- **Re-sequencing environment:** Single-runway field with no parallel capacity — a go-around re-enters the same terrain-constrained sector with no alternate runway available at the field itself; expect vectoring back for a repeat approach on RWY 04.
- **Go-around traps:** In marginal weather, a go-around from RWY 04 (the only instrument option) with deteriorating conditions is a genuine diversion-decision point — brief the alternate contingency (LIMC/LIPE, or LSZH per company preference) before committing to the approach.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 04 **3,010 m** (58 m displaced threshold); RWY 22 **2,657 m** (411 m displaced threshold) — but RWY 22 has no instrument approach, so its LDA is only relevant to a visual/circling arrival. Cross-ref [Briefing §7](index.md).
- **Braking / vacate:** Landing RWY 04 traffic typically vacates via **TWY K** (or W/K depending on ICAO code, per ATC instruction) `[AIP Italia AD 2 LIPX 1-11]`. The aerodrome operator friction-tests the runway monthly (MPL 0.60 / MFL 0.50); a "runway slippery when wet" NOTAM is issued if the minimum friction level is reached.
- **Runway-excursion watch:** 🟧 RWY 22's 411 m displaced threshold is a significant reduction from nominal length — not relevant to normal RWY 04 IFR operations but relevant if a visual RWY 22 landing is ever flown; winter contamination is a seasonal consideration (Briefing §14).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing RWY 04, aircraft vacate via **TWY K** and, for the main civil apron, proceed behind follow-me (mandatory at RVR ≤ 550 m, for ICAO Code E aircraft, and for helicopters) to the assigned stand (AIP AD 2 LIPX §20.4.5). VAMSYS mirror gives a planning taxi-in time of **6 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **TWY Y is entry-only** (never usable as an exit); the **apron and most of the civil taxiway up to (but excluding) the RWY 22 holding position are not visible from the tower** — taxi with vigilance and expect explicit ATC instructions rather than assumed routing.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — main civil apron stands via Apron TWY P (31–37), Taxilane R (11–14/21–23), Taxilane M (41–47) and Taxilane J (51–57, 48); no widebody-configured stands identified.

---

## 9. Arrival frequency sequence

- **Sequence:** **Milano ACC (LIMM)** [see [Europe airspace brief](../../../../airspace/europe.md) 🟧 no dedicated Italian FIR brief in this library] **→ Verona APP/Verona Radar 118.550 / 124.250 / 135.900 → Villafranca TWR 118.650 → Villafranca GND 121.750 (ATC discretion) → Villa Apron 131.500** (aerodrome operator, stand/taxi instructions). Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Verona APP/Radar** is the facility for Villafranca's terminal approach; exact sector/frequency assignment is AIRAC-dependent. 🟧

---

## 10. Gotchas

- **RWY 22 is never a landing runway in IMC** — it carries no published instrument approach; do not expect it as an arrival option under any configuration requiring instruments.
- **The steep northern STAR/descent profile is a genuine energy-management and terrain trap** — cross the Alps high, descend early over Lake Garda per the charted profile, and don't chase the glideslope late (tier-4 corroborated).
- **False glideslope captures have been reported on the steep northern descent** — cross-check altitude against DME/chart data rather than trusting an early GP capture (tier-4).
- **Winter Po Valley fog can drop the field below CAT I minima quickly** — the field's entire low-visibility capability rides on RWY 04's ILS CAT IIIB; brief the diversion contingency if fog escalates beyond the 75 m RVR operating floor.
- **Joint civil/military field** — follow the briefed taxi-in routing; do not wander into military aprons.
- **TWY Y is entry-only** — never treat it as a vacate/exit option.
- **No turning pad at the RWY 04 threshold** affects Code D/E aircraft if RWY 22 is ever used for landing (visual/circling only) — see Departure/Briefing §5.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima (CAT IIIA/B split) for RWY 04.
- Top-of-descent trigger and altitude-constraint detail on the northern arrival profile.
- Exact sector/frequency assignment for Verona APP/Radar (AIRAC-dependent).
- Current post-terminal-expansion-project taxi-in routing and gate assignment.
- Rapid-exit taxiway/vacate detail beyond TWY K.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. ILS CAT IIIB and fog-dispersal system status), ATIS config, current AUP/UUP or RAD status in the Milano FIR. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Italia (ENAV), AD 2 LIPX 1-1 through 1-11** (2018 amendment cycle) — runway/declared-distance data, communications, navaids, AWO/LVP and local traffic-regulation procedures — mirrored via https://va.mite.gov.it/File/Documento/340816 (retrieved 2026-07-26).
- FlightGear wiki — "Verona Villafranca Airport" — https://wiki.flightgear.org/Verona_Villafranca_Airport (retrieved 2026-07-26). *Steep northern STAR/descent profile, false-glideslope-capture, RWY 22 visual-only corroboration — flight-sim community source, not regulatory.*
- Wikipedia — "Verona Villafranca Airport" — https://en.wikipedia.org/wiki/Verona_Villafranca_Airport (retrieved 2026-07-26). *Fog-dispersal system, CAT IIIB corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
