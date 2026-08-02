# NZWN — Wellington Intl · Arrival Page

**NZWN / WLG** · Rongotai, Wellington, New Zealand · Oceania
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [NZWN Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **16 or 34** — the only runway; wind-driven selection |
| Usual approach | ILS CAT I (16 or 34); RNP also published |
| Config logic | Wind-driven, Cook Strait channelling — expect rapid/late config changes |
| Transition level | By QNH; transition altitude 13,000 ft — verify current chart 🟧 |
| LVP trigger | **Windshear/turbulence is the field's defining go-around trigger, not fog/low-visibility** 🟥 |
| Missed-approach driver | Windshear/turbulence-triggered go-around; terrain shapes local wind rather than presenting a direct CFIT threat |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** RNAV STARs feed both runways; pilots unable to accept the RNAV arrival should indicate this in the flight plan and advise ATC on initial contact to receive vectors to the ILS. RNP (AR) approaches are also published, reflecting the terrain-constrained approach environment. Names not independently confirmed this pass. 🟧
- **Selection by arrival direction / runway:** Wellington Approach assigns the STAR/config for the active runway; wind-driven given Cook Strait channelling — expect the possibility of a late config change.
- **Transition to approach:** RNAV-STAR-to-ILS transition with radar vectors onto final expected where an RNAV arrival is not accepted.
- **Speed / flow constraints on the STAR:** Minimum 150 kt IAS to 5 NM on final unless otherwise assigned; advise ATC if unable.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** 150 kt IAS minimum to 5 NM final unless otherwise approved/assigned.
- **Altitude constraints:** Key STAR crossing constraints are pointers only — fly the charted altitudes.
- **Energy traps:** 🟥 **Windshear/turbulence close to touchdown is the field's defining energy trap** — maintain a stabilised-approach discipline and a low threshold for a go-around; a late runway/config change driven by a wind shift is also a recognised risk.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 16 | ILS (IEB); RNP | CAT I. 🟧 Restricted LOC coverage E/W of centreline — do not autocouple until within 10° of final track | verify current chart |
| 34 | ILS (IMP); RNP | CAT I. 🟧 Restricted LOC coverage; scalloping possible from road traffic near the localiser; PAPI restricted to 7.5° of centreline due terrain | verify current chart |

- **LVP triggers:** ILS CAT I on both runways; **windshear/turbulence, not fog, is the operative go-around trigger** at NZWN — brief accordingly. 🟥

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 Terrain rises quickly north and east of the narrow Rongotai isthmus. Not a direct cruise-level CFIT threat, but it is the physical cause of the field's wind-channelling/turbulence signature — cross-ref [Briefing §3.1](index.md).
- **Specific threats:** 🟥 **Windshear and gusty, rapidly-changing crosswind driven by Cook Strait channelling** — this is the field's defining approach hazard, with publicly documented go-around events including on short final. Also note: **ILS/LOC interference from taxi-exiting traffic** near the localiser aerials requires a **12 NM separation** between a full-length-landing aircraft and a following ILS/LOC/DME approach when ceiling ≤1,000 ft/visibility ≤5 km.
- **Airspace / traffic:** 🟩 Single runway, moderate traffic density relative to Auckland; Wellington Approach/Tower manage a comparatively simple traffic picture, sectorised into Kelburn/West/Sinclair/Turakirae/East/Somes/Instrument zones.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the direct missed-approach driver, but rising ground either side of the strip shapes the wind environment that typically triggers the go-around.
- **Re-sequencing environment:** A go-around at NZWN is a **routine, well-rehearsed contingency** at this field rather than an exceptional event — brief the go-around trigger criteria and re-sequencing expectation before every approach.
- **Go-around traps:** Windshear/turbulence recovery, config discipline, and awareness of the single-runway/single-taxiway ground environment on re-sequencing.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 16 **1,815 m**; 34 **1,815 m** — 🟥 **genuinely short for a widebody-capable network**; confirm per-type landing-distance performance before scheduling any K Global type into this field. Runway is **grooved for its full length**, aiding wet-runway braking.
- **Braking / vacate:** No rapid-exit taxiway detail confirmed in reachable sources beyond the single-main-taxiway (TWY A) structure — confirm with Ground/Apron on the day. 🟧
- **Runway-excursion watch:** 🟥 Short LDA combined with frequent gusty crosswind is the field's standing excursion watch-item — maintain a conservative approach-speed/stabilised-approach discipline.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in via **TWY A**, fed by the R/S/T/U or B-series intersections per Ground assignment; VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **Code D/E aircraft may only enter/exit via TWY A1, A2, A10 or A11**, with a **reduced 44.5 m taxiway centreline-to-object clearance** on TWY A north of the eastern apron — exercise caution on curves/intersections, main-gear-to-pavement-edge clearance may be limited. On the eastern apron, **departing aircraft and aircraft on pushback have priority over arriving aircraft** — a specific local right-of-way rule.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Stand 23 is the field's sole B777-referenced stand; confirm gate suitability for the specific K Global type.

---

## 9. Arrival frequency sequence

- **Sequence:** **Wellington Approach 122.3/119.3/121.1 → Wellington Tower 118.8/125.25 → Wellington Ground 121.9 (0630–2100 LMT) / 118.8 (2100–0630 LMT).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Wellington Approach** is the facility for Wellington's terminal approach; see the [Oceania — SW Pacific & Tasman airspace brief](../../../../airspace/oceania.md) for the NZZC domestic structure. 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **Windshear/turbulence on short final is a well-documented, standing hazard** — brief the go-around trigger on every approach; treat it as routine, not exceptional.
- **PAPI on RWY 34 is restricted to 7.5° of centreline due to terrain** — do not expect a standard PAPI sector width.
- **ILS/LOC restricted coverage and off-centreline autocoupling caution** on both runways — do not engage autocouple beyond 10° of the final approach track.
- **Short 1,815 m LDA** — confirm type suitability before scheduling; this is a hard performance constraint.
- **Config swap (16↔34) driven by a rapid Cook Strait wind shift** — watch the ATIS wind trend closely; late runway changes are more common here than at a sheltered field.
- **Reduced Code D/E taxiway clearance on TWY A** — expect caution on ground movement after landing.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Quantified windshear/LVP trigger criteria beyond the qualitative hazard picture.
- Rapid-exit taxiway/vacate detail.
- ILS sub-category/RVR minima confirmation.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend — **treat the wind trend as the single most important live data point at this field.** Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP New Zealand, AD 2 NZWN 2.12/2.13/2.17/2.20** (extract carrying effective dates 2013–2016) — runway/declared-distance data, TA, local traffic regulations — mirrored via https://silo.tips/download/aerodrome-geographical-and-administration-data (retrieved 2026-07-26).
- **AIP New Zealand GEN 3.7-23/24** — ILS/navaid idents and frequencies, restricted-coverage notes — https://fyi.org.nz/request/22244/response/83943/attach/8/GEN%203.7.pdf (retrieved 2026-07-26).
- **VATNZ — NZWN Wellington SOP** — https://sops.vatnz.net/aerodromes/Class-C/nzwn/ (retrieved 2026-07-26). *Network-sim; taxi/priority-rule detail cross-checked here.*
- Simple Flying — "Air New Zealand A321 Touches Down Before Aborting In Wind Shear Go-Around" — https://simpleflying.com/air-new-zealand-a321-wellington-wind-shear-go-around/ (retrieved 2026-07-26). *Windshear/go-around hazard corroboration.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP New Zealand; K Global fields from live VAMSYS; 4-page pack. |
