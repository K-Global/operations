# LEMG — Málaga-Costa del Sol · Arrival Page

**LEMG / AGP** · Málaga, Andalusia, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — AIP España (ENAIRE)-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LEMG Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY12** (Configuración Sur, preferred) or **RWY31** (Configuración Norte) |
| Usual approach | **ILS CAT I** on RWY12 or RWY31 (GLS/GBAS CAT I also available on RWY31) |
| Config logic | Segregated same-direction arrival/departure pairing — **not** independent parallel runways; see Briefing §3.3 |
| Transition level | Not confirmed this pass 🟧 |
| LVP trigger | 🟥 **No corroborated CAT II/III capability** — every ILS/GLS at LEMG is CAT I per current AIP; re-verify against the newest AIRAC before assuming otherwise |
| Missed-approach driver | **Mountain-induced turbulence/windshear** (Terral, Levante/Poniente) rather than classic terrain-clearance |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** **Configuración Sur** (preferred): arrivals **RWY12**. **Configuración Norte**: arrivals **RWY31** (or both arrivals/departures on RWY31 in single-runway mode). **Málaga APP** assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Radar vectors from Málaga APP onto the assigned ILS/GLS; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** **Terral/mountain-wave turbulence** can produce unexpected energy state changes on short final, particularly under Configuración Norte (RWY31, closer to the Montes de Málaga lee); a late config switch between Sur and Norte is also a genuine energy/approach-type trap given the CAT I-only reality on every end.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 12 | ILS (IMG) | **CAT I** — Configuración Sur primary arrival runway 🟩 | verify current chart |
| 31 | ILS (GAA) / GLS (GBAS) | **CAT I** — Configuración Norte primary arrival runway 🟩 | verify current chart |
| 13 | ILS (GMM) | **CAT I** — used as an arrival runway only outside the standard configurations | verify current chart |
| 30 | — none — | **Never a landing runway** — takeoff-only, no ILS/approach lighting | n/a |

- **LVP triggers:** 🟥 No corroborated CAT II/III infrastructure at LEMG — every ILS/GLS listed is CAT I per the current AIP. A commonly-assumed CAT III capability could not be corroborated this pass; treat all low-vis planning as CAT I-limited pending a fresh AIRAC cross-check.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 Montes de Málaga close on the landward (north/northeast) side of the field — not a classic close-in CFIT trap for standard coastal arrival paths, but the direct cause of the field's mountain-wave turbulence signature. Verify the current MSA ring as routine practice.
- **Specific threats:** 🟥 **Terral** (warm katabatic Foehn-type wind descending from the mountains) and **Levante/Poniente** wind events are widely documented as producing an above-average go-around/diversion rate at this field. No formal quantified windshear statistic was found — treat the qualitative signature as the real, briefable threat.
- **Airspace / traffic:** 🟧 High seasonal density (26.76 M passengers in 2025) under **Málaga APP** (own dedicated unit, sitting under **Madrid FIR (LECM)**, worked locally by Sevilla ACC — 🟧 confirm LECM vs Barcelona LECB, see Briefing §3.2 for the FIR-identity correction); expect vectoring/sequencing during peak-season banks.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not the primary driver — Montes de Málaga proximity is relevant mainly through the turbulence signature rather than a close-in obstacle-clearance issue; fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** Busy seasonal traffic environment under Málaga APP — expect vectoring/holding before re-sequencing, especially in Terral/Levante/Poniente wind events.
- **Go-around traps:** Mountain-wave turbulence and gusty wind-shift conditions are the standout go-around triggers here, rather than classic terrain/traffic traps.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY12 **2,749 m**; RWY31/RWY13 **3,198 m**. No displaced thresholds published. Ample for any K Global type given each runway's dedicated one-way role.
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟧 No displaced thresholds; the historically standout LEMG runway-excursion event was **Spantax Flight 995** (1982, rejected takeoff/tyre failure, not a landing-related excursion) — brief as historical context, not a live-ops caution.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned runway, taxi in per Ground/Apron assignment toward T2/T3; VAMSYS mirror gives a planning taxi-in time of **10 min** `[VAMSYS mirror 2026-07-25]`.
- **Hot spots / tight taxiways:** 🟥 **Single taxiway link from the RWY12/30 side to the terminal apron** — a recognised throughput/complexity constraint, recently the subject of a publicised Nov 2025 near-miss event. Taxi with heightened vigilance on that side of the field.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Code E/F ops procedurally anticipated (self-reporting requirement); A350-1000 (A35K) explicitly excluded from the aerodrome.

---

## 9. Arrival frequency sequence

- **Sequence:** **Málaga APP (118.455 primary, 123.855 ARR West) → Málaga TWR (TWR-W 118.155 for RWY13/31, TWR-E 118.780 for RWY12/30) → Málaga GMC (121.705 W / 121.955 E).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Málaga APP** is a dedicated local unit sitting under the **Madrid FIR (LECM)**, worked locally by **Sevilla ACC** — a correction to the general east-coast Barcelona-ACC context used elsewhere in this network (🟧 confirm LECM vs Barcelona LECB); see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) for regional context only, no dedicated Madrid (LECM) FIR brief exists in-library yet.

---

## 10. Gotchas

- **RWY30 is never a landing runway** — do not expect it as an arrival option under any configuration.
- **No corroborated CAT II/III capability** — a marginal-visibility arrival here is CAT I-limited across the board; do not assume better minima without a fresh AIRAC cross-check.
- **Terral/mountain-wave turbulence** off the Montes de Málaga can affect the approach with limited notice, particularly under Configuración Norte (RWY31).
- **Single taxiway link on the RWY12/30 side** is a real ground-workload factor on taxi-in — a contributing factor in a publicised Nov 2025 near-miss.
- **Config swap (Sur↔Norte) driven by a wind shift** changes both the arrival runway and its approach — watch the ATIS wind trend closely.
- **A350-1000 (A35K)** is barred from this aerodrome entirely — irrelevant on arrival, but a hard constraint for any diversion/routing decision involving this type.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Transition level.
- Rapid-exit taxiway/vacate detail.
- Quantified windshear/go-around-frequency data for the Terral/Levante/Poniente signature.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, current slot/CTOT status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP España (ENAIRE), AD 2-LEMG**, current AIRAC — https://aip.enaire.es/aip/contenido_AIP/AD/AD2/LEMG/LE_AD_2_LEMG_en.pdf (retrieved 2026-07-26). *STAR/IAP index, runway configuration logic, communications, navaids/ILS/GLS.*
- Euro Weekly News — Nov 2025 near-miss report — https://euroweeklynews.com/2025/11/23/near-miss-on-malaga-runway-does-air-traffic-control-need-a-massive-upgrade/ (retrieved 2026-07-26).
- meteorologiaenred.com — "What is the Terral" — https://en.meteorologiaenred.com/what-is-the-terral.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
