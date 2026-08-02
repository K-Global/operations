# Adverse Weather & Windshear — OM E Procedure

**Scope:** Location-agnostic procedure policy for operating K Global widebodies in and around **convective weather, turbulence and low-level windshear** — thunderstorm avoidance and radar use, severe/clear-air/mountain-wave turbulence and the turbulence-penetration regime, **windshear and microburst** (predictive & reactive systems, the standard escape manoeuvre, avoidance and recognition), heavy rain/hail, gust fronts, runway **hydroplaning**, and TAWS/EGPWS as the CFIT backstop. This file *defines* the method; an airport brief §14 or an airspace brief *applies* it to a place, and live radar/METAR/TAF/SIGMET are **pulled at planning and in flight** — no live weather is stored here.
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — public-source-verified (ICAO Annex 3 / FAA AC 00-54 & Windshear Training Aid / EASA / SKYbrary); aircraft-type callouts (radar controls, escape-manoeuvre target pitch, turbulence-penetration speed) flagged 🟧 — read them from the FCOM/QRH, not this page.

> **Read-me — regime & scoping (read first):** This is an **OM E Operations** procedure (method/policy), **not** a QRH drill, a chart, or a live-weather product. It states the *concepts* and K Global's standing policy; the **memory items, target pitch attitudes, radar control layout, turbulence-penetration speeds and specific callouts come from the type FCOM/QRH**, applied by the crew on the day. Where a figure is type- or config-specific it is flagged 🟧 and must be verified against the aircraft documentation. Live convective/turbulence/windshear information (radar, SIGMET, PIREP, ATIS, TAF/METAR) is **pulled at planning and in flight**, never cached here. Flag legend: 🟥 hard requirement/hazard · 🟧 caution/unverified/type- or route-specific · 🟩 normal. Sim context: X-Plane 11 / SimBrief dispatch.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Thunderstorm avoidance rule | 🟥 **Do not penetrate** a thunderstorm. Avoid all cells by **≥20 NM** laterally (and never fly **under** an overhang or between two building cells); overfly only with large, verified clearance above the tops — not normally an option for our fleet against mature cells |
| Turbulence regimes covered | Convective, **clear-air turbulence (CAT)**, mountain wave, wake (see `./Wake Turbulence Separation.md`), low-level mechanical/gust-front. Reported intensity: light · moderate · **severe** · extreme; "chop" ≠ "severe" |
| Turbulence-penetration speed | 🟧 A published **rough-air / turbulence-penetration speed** (a target IAS/Mach) exists per type — set it before entering known turbulence; do **not** chase altitude or speed, ride the attitude. Value is type-specific — read the FCOM |
| Windshear detection | **Predictive** (PWS — forward-looking radar, alerts ahead) and **reactive** (RWS — inertial/air-data, alerts on encounter). Both drive aural "WINDSHEAR" and, for PWS ahead of takeoff/landing, a caution |
| Windshear escape manoeuvre | 🟥 On any windshear warning: **apply max/TOGA thrust, follow the flight-director / rotate toward the target pitch, do NOT change configuration (gear/flap stay), do not retrim away, maximise climb performance**, respect stick-shaker/PLI — recover, then reassess. Memory item — fly it from the FCOM |
| Microburst | A concentrated downdraft with diverging outflow: a strong **performance-increasing** headwind followed by a rapid **performance-decreasing** tailwind/downdraft. Deadliest low-level shear; **avoid** — do not take off or approach into a suspected microburst |
| Heavy rain / hail | Radar-attenuating; **hail can exist well outside** the visible cell and above/downwind of the anvil — hence the 20 NM / no-overhang rule. Hail/heavy rain can damage the airframe, radome and windshield and roll back or flame-out engines |
| Hydroplaning | 🟥 Dynamic (standing water), viscous (thin film) and reverted-rubber. Onset speed ≈ **9 ×√(tyre psi)** kt (dynamic); expect degraded braking/steering on contaminated runways — see landing-distance policy and `./Short and Limited Runway Operations.md` 🟧 |
| CFIT backstop | 🟥 **TAWS/EGPWS** is the last-resort terrain protection; a genuine "PULL UP" / "TERRAIN" warning = immediate max-effort escape climb. Not a weather-avoidance tool but the safety net when weather forces low/poor-visibility manoeuvring |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| 20 NM thunderstorm avoidance & no-overhang | 🟥 | Sourced (FAA AC 00-24 / thunderstorm guidance, SKYbrary Thunderstorm). Applies to all cells; increase for towering/severe and above FL250 where hail is thrown further downwind. |
| Radar tilt/gain technique | 🟧 | Method verified (SKYbrary Airborne Weather Radar). Exact tilt angles/gain automation are type/installation-specific — read the FCOM; do not fly a fixed tilt from this page. |
| Turbulence intensities & "chop vs severe" | 🟩 | ICAO/FAA reporting definitions. Severe = large abrupt attitude/altitude changes, momentary loss of control, occupants forced against belts; chop = rhythmic bumpiness, not severe. |
| Turbulence-penetration speed | 🟧 | Concept sourced; the target IAS/Mach is a type figure (FCOM/QRH). Autothrottle/autopilot use in severe turbulence is type-specific. |
| Windshear predictive vs reactive | 🟩 | PWS forward-looking + RWS on-encounter (FAA Windshear Training Aid, SKYbrary Windshear/Microburst). Alert priority and inhibits are type-specific 🟧. |
| Escape manoeuvre (TOGA / pitch / no config change) | 🟥 | Sourced (FAA Windshear Training Aid: max thrust + rotate toward target pitch, ~15° initial typical, do not change configuration). Exact memory-item wording and target pitch are FCOM-specific 🟧. |
| Hydroplaning onset & types | 🟧 | 9×√(psi) dynamic-onset rule sourced (NASA/FAA). Landing-distance on contaminated runway is per the type performance tool — verify. |
| TAWS/EGPWS as CFIT backstop | 🟥 | SKYbrary CFIT/TAWS. Warning = immediate escape; do not delay to diagnose the weather cause. |

---

## 3. Thunderstorm & convective avoidance

- **The rule — 🟥 do not penetrate:** a thunderstorm cell is never a planning or in-flight option to fly *through*. Deviate. K Global standing avoidance is **≥20 NM** from any cell, echo top or building cumulonimbus, and **more** for vigorous/severe cells, for tops above **FL250** (hail and turbulence are thrown far downwind of the anvil), and in the tropics.
- **Never fly under an overhang or between cells — 🟥:** the airspace **beneath a radar overhang/anvil** and the gap between two building cells can contain hail, severe turbulence and downdrafts even in apparently clear air. Do not thread the gap; go around the whole system on the upwind side where practicable.
- **Overflight — 🟧:** overflying is only acceptable with **large, verified** clearance above the true tops (cells can build faster than a heavy climbs). Against mature Cbs this is generally **not** available to our widebodies at weight — deviate laterally instead.
- **Radar use — tilt & gain — 🟧:**
  - Use **tilt** to scan the wet core through the vertical: tilt down to find the reflective mass low, tilt up to measure how high it builds (top identification). Do not fly a single fixed tilt.
  - Use **gain** deliberately: calibrated/auto gain for normal painting, then **increase gain** to reveal weak/wet returns and **decrease** to find the strongest cores (a cell whose red core *shrinks* slowly as gain is reduced is very intense).
  - Beware **attenuation/"shadowing"** — a near heavy-rain core can hide a second cell behind it (a black "radar shadow"); treat shadows as unknown-and-dangerous, not clear.
  - Watch for **scalloped edges, U-shapes/fingers, and steep reflectivity gradients** — markers of hail and the most turbulent zones.
- **Tactical deviation:** request deviations early and upwind; coordinate with ATC; keep the seatbelt sign on and the cabin secured before entering the area (see §4). Expect turbulence, static discharge and lightning near, not just inside, cells.

---

## 4. Turbulence — severe, CAT, mountain wave & cabin securing

- **Intensity language — 🟩:** *light / moderate / severe / extreme*, and **"chop"** (rhythmic bumpiness) vs **"turbulence"** (larger, more abrupt). **Severe** = large, abrupt changes in attitude/altitude, brief loss of control, occupants forced violently against restraints, unsecured items tossed — a **cabin-injury and possible structural event**. Report intensity, altitude and position by **PIREP** so others can avoid it.
- **Clear-air turbulence (CAT) — 🟧:** invisible to radar, associated with the **jet stream** (wind-shear zones on the polar/subtropical jet flanks), sharp temperature gradients and troughs. Anticipate from the OFP/forecast (SIGMET, turbulence charts, wind/temperature shear); avoid by **altitude or lateral change**, and keep the belt sign on through forecast CAT bands even in smooth air.
- **Mountain wave — 🟧:** strong stable flow over ridges produces standing waves, rotors and severe low-level turbulence downwind, plus large sustained up/down draughts that can drive significant **altitude excursions** and, at high field elevation, performance issues. See `./High-Elevation Aerodrome Operations.md` and `./Cold Weather Operations.md`; expect it around lee-side approaches and high terrain.
- **Turbulence-penetration technique — 🟥/🟧:**
  1. **Slow to the turbulence-penetration / rough-air speed** (a target IAS/Mach; 🟧 read the type FCOM) — fast enough to stay clear of stall/low-speed buffet, slow enough to limit structural loads.
  2. **Fly attitude, not altitude.** Set and hold a pitch/power; accept altitude excursions rather than chasing them. Consider disconnecting autothrottle if it hunts; keep the autopilot engaged unless it mis-tracks (type-specific 🟧).
  3. **Do not make large or abrupt control inputs**; ride it.
- **Cabin securing — 🟥:** seatbelt sign ON and cabin secured **before** entering forecast/observed turbulence; suspend cabin service; crew and galleys stowed. Most turbulence injuries are to unrestrained occupants — the anticipation call is the safety action.

---

## 5. Windshear & microburst

- **What it is — 🟥:** windshear is a change in wind speed/direction over a short distance. Low-level shear on takeoff/approach is the hazard. The **microburst** is the extreme case — a concentrated convective downdraft (often <4 km across) whose outflow gives, in sequence, a **performance-increasing headwind**, then a **downdraft**, then a **performance-decreasing tailwind**. The initial headwind (rising airspeed, ballooning above path) is the *warning* of the tailwind loss to come — **do not** reduce power/dive to correct the balloon.
- **Sources & clues:** convective cells and gust fronts (§3, §6), heavy rain shafts, **virga** (rain evaporating below cloud), blowing dust rings/roll clouds, large temperature/dew-point spreads, and reported shear or LLWAS/PIREP alerts. Frontal passages and terrain/sea-breeze fronts also shear.
- **Detection systems:**
  - **Predictive Windshear (PWS) — 🟧:** forward-looking radar scans the approach/departure path and alerts to shear **ahead** ("MONITOR RADAR DISPLAY" caution / "WINDSHEAR AHEAD" warning). Available near the ground for takeoff and landing; heed a PWS warning **before** committing — delay/reject takeoff, or go around.
  - **Reactive Windshear (RWS) — 🟧:** inertial/air-data logic detects shear **being encountered** and triggers the aural **"WINDSHEAR, WINDSHEAR, WINDSHEAR"** and escape guidance.
  - **Ground systems:** LLWAS / TDWR / microburst alerts relayed by ATC/ATIS — factor at planning and on first contact.
- **Avoidance is primary — 🟥:** if microburst/severe shear is suspected on the departure or arrival path, **do not take off and do not continue the approach** — delay, hold, or divert. No performance policy makes penetrating a microburst acceptable.
- **Recognition of an inadvertent encounter:** rapid airspeed excursions (±15 kt+), unexpected sink/lift, high/low on path, unusual power required to hold path, IVSI/pitch chasing — treat any of these near the ground on a convective day as shear and be ready to escape.
- **The escape manoeuvre — 🟥 (memory item — fly it from the FCOM):**
  1. **Thrust — max / TOGA** immediately (autothrottle disconnect if it will not deliver).
  2. **Pitch — rotate toward the target attitude** and **follow the flight-director** windshear guidance where fitted; if no guidance, rotate smoothly toward the type target (commonly ~**15°** initial 🟧) and adjust to respect the **stick shaker / PLI** — trade minimum airspeed for maximum climb, intermittent shaker acceptable to stop descent.
  3. **Configuration — do NOT change:** **gear and flap stay as set**; do not retract to "clean up", do not retrim toward the shear.
  4. **Wings level, minimum manoeuvring**, disconnect nothing else you need, do not select speedbrake.
  5. **Maintain until clear** (positive climb, airspeed recovering, terrain assured), then reconfigure normally and reassess/divert.
- **On takeoff:** below V1 with a PWS warning, **reject** if performance allows; at/after rotation, fly the escape manoeuvre as above.

---

## 6. Heavy rain, hail & gust fronts

- **Heavy rain — 🟧:** attenuates radar (can mask cells behind — §3), floods the windscreen and reduces visibility, contaminates the runway (hydroplaning — §7) and, in extreme convective cores, can affect engine operation. Do not fly into the reflective core.
- **Hail — 🟥:** the airframe hazard that most justifies the 20 NM rule — hail is **hurled out of and downwind of the anvil**, so it strikes in apparently clear air **beside and above** the visible cell. It cracks windshields and radomes, dents leading edges, and can damage engines. Give building cells and their downwind anvils very wide berth; if hail is encountered, reduce speed toward the turbulence-penetration speed and exit.
- **Gust fronts / outflow boundaries — 🟧:** the leading edge of thunderstorm cold outflow can produce a sudden **wind shift, strong gusts and low-level shear** many miles ahead of the parent cell — a major cause of shear on approach/departure with the storm still distant. Expect abrupt headwind/tailwind and crosswind changes; be conservative with approach continuation and takeoff when a gust front is moving across the field.

---

## 7. Runway contamination & hydroplaning

- **Three modes — 🟥:**
  - **Dynamic** — a wedge of standing water lifts the tyre; onset speed ≈ **9 × √(tyre pressure in psi)** kt, so heavy tyre pressures still hydroplane at high groundspeed on standing water.
  - **Viscous** — a thin film on a smooth/rubber-contaminated surface; can occur at **lower** speeds, especially over touchdown-zone rubber.
  - **Reverted-rubber** — a locked/skidding tyre boils water to steam and reverts the rubber, giving very low friction and characteristic marks.
- **Operational effect:** degraded braking and **loss of directional control/nosewheel steering** effectiveness; increased landing/RTO distance. Use the type **contaminated-runway landing/takeoff performance** (braking action, water depth) at planning; add margin, plan the firm touchdown in the zone, avoid excess speed, use reverse early and symmetrically, and de-crab appropriately. Cross-link `./Short and Limited Runway Operations.md` and `./Cold Weather Operations.md` (slush/ice) for the contaminated-surface performance policy 🟧.
- **Aquaplaning + crosswind + shear** frequently combine on convective days — brief the go-around and the contaminated stopping case together.

---

## 8. TAWS / EGPWS — the CFIT backstop

- **Role — 🟥:** TAWS/EGPWS is **not** a weather-avoidance system; it is the **terrain safety net** that catches an inadvertent descent toward terrain — the residual risk when weather forces low-level manoeuvring, circling in poor visibility, or a windshear escape near high ground.
- **Modes (summary):** excessive descent rate, excessive terrain closure, altitude loss after takeoff/go-around, unsafe terrain clearance (not in landing config), excessive glideslope deviation, and the **forward-looking terrain awareness / predictive** alerting with the terrain display.
- **Response — 🟥:** treat a genuine **"PULL UP" / "TERRAIN TERRAIN"** as a command — **immediate maximum-effort escape climb** (max thrust, wings level, pitch to escape/respect shaker), **do not** delay to analyse or attribute it to the weather; retain until terrain clearance is assured in daylight/VMC or the warning ceases. Do not inhibit terrain modes to suppress nuisance alerts near known-clear terrain unless the FCOM procedure specifically allows it 🟧.
- **Interaction with windshear:** a windshear escape near terrain may trigger TAWS — fly the more demanding (usually terrain) escape; both call for max thrust and pitch toward the limit, so they are compatible.

---

## 9. Dispatch & in-flight application

**At planning (SimBrief / OFP):**
1. Pull the route **SIGMETs, convective/turbulence/icing charts, TAFs/METARs and PIREPs**; identify convective areas, jet-stream CAT bands, mountain-wave terrain, and any LLWAS/microburst-prone destinations.
2. Choose cruise levels/tracks to keep clear of forecast severe turbulence where fuel/route allow; carry extra fuel for convective deviation and holding on convective days.
3. Check destination/alternate for **thunderstorm, gust-front, contaminated-runway and shear** risk in the arrival window; ensure an alternate that is not under the same system. Read the airport brief **§14 weather**.

**In flight:**
- Keep radar optimised (tilt/gain — §3); deviate early and upwind of cells by ≥20 NM; never fly under overhangs or between cells.
- Anticipate turbulence: belt sign on, cabin secured **before** the band; slow to penetration speed; PIREP what you find.
- On any windshear/PWS alert: **avoid** (reject/go-around/delay) or, if encountered, fly the **escape manoeuvre** (§5) — TOGA, pitch to target, **no config change**.
- On approach/landing to a contaminated runway: apply the contaminated stopping case (§7) and brief the go-around.
- Treat any genuine EGPWS terrain warning as an immediate escape (§8).

---

## Cross-references

- **Cold Weather Operations (OM E)** — de/anti-ice, slush/ice runway contamination and cold-soak, complementing the rain/hydroplaning case here: `./Cold Weather Operations.md`
- **High-Elevation Aerodrome Operations (OM E)** — mountain-wave, rotor and high-terrain performance interacting with turbulence/shear: `./High-Elevation Aerodrome Operations.md`
- **Short & Limited Runway Operations (OM E)** — contaminated-runway landing/RTO performance and hydroplaning stopping case: `./Short and Limited Runway Operations.md`
- **Low Visibility Operations (OM E)** — heavy-rain/fog visibility, approach ban and go-around policy that pairs with convective avoidance: `./Low Visibility Operations.md`
- **Wake Turbulence Separation (OM E)** — the other low-level "invisible" hazard and its escape/recovery: `./Wake Turbulence Separation.md`
- **Volcanic Ash Avoidance (OM E)** — the other "do-not-penetrate, avoid entirely" hazard: `./Volcanic Ash Avoidance.md`
- **Airport briefs §14 (weather)** — place-specific convective climatology, gust-front/shear notes, contaminated-runway data: `../OM C Routes and Destinations/Airports/…` (per destination)
- **Fleet Index** — for the type FCOM/QRH holding the radar controls, penetration speed, windshear memory item and target pitch: `../OM B Fleet/Fleet Index.md`

---

## Open items (🟧 — confirm)

- **Type turbulence-penetration speed** and autothrottle/autopilot-in-severe-turbulence policy per fleet type (A339/A359/A35K/A388/B77W/B789/B748…) — read from each FCOM and codify in the airframe packs.
- **Windshear escape memory-item wording and target pitch attitude** per type (Airbus vs Boeing differ) — pull the exact FCOM drill; confirm PWS/RWS fit and alert inhibits by type.
- **Radar installation specifics** (auto-tilt/auto-gain, predictive-windshear coverage) per fleet — verify from the FCOM.
- **Contaminated-runway performance policy** — the standing landing/RTO factoring and braking-action assumptions (ties to Short & Limited Runway and Cold Weather docs).

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. Live weather/radar/SIGMET/METAR and subscription material (FCOM/QRH, SimBrief airframe profiles) may inform content but are not stored or listed here.*

- **FAA Windshear Training Aid (and AC 00-54, Pilot Windshear Guide)** — microburst physics, predictive/reactive detection, and the escape manoeuvre (max thrust + rotate toward target pitch, do not change configuration) — summarised via SKYbrary: https://skybrary.aero/articles/microburst (retrieved 2026-07-25).
- **SKYbrary — Adverse Weather Operations: Windshear Awareness (briefing note)** — https://skybrary.aero/sites/default/files/bookshelf/164.pdf (retrieved 2026-07-25).
- **SKYbrary — Wind Shear** — definition, sources, low-level shear on approach/departure, recognition and recovery: https://skybrary.aero/articles/wind-shear (retrieved 2026-07-25) 🟧 confirm exact article slug.
- **SKYbrary — Wind Shear Encounter During Go-Around (OGHFA)** — worked escape-manoeuvre example: https://skybrary.aero/index.php/Wind_Shear_Encounter_During_Go-Around_(OGHFA_SE) (retrieved 2026-07-25).
- **SKYbrary — Thunderstorm** and **FAA AC 00-24 (Thunderstorms)** — 20 NM avoidance, no-overhang/between-cells rule, hail thrown downwind, overflight caution — via SKYbrary: https://skybrary.aero/articles/thunderstorm (retrieved 2026-07-25) 🟧 confirm slug.
- **SKYbrary — Clear Air Turbulence (CAT)** — jet-stream CAT, avoidance by altitude/lateral change, PIREP reporting: https://skybrary.aero/articles/clear-air-turbulence-cat (retrieved 2026-07-25) 🟧 confirm slug.
- **SKYbrary — Airborne Weather Radar** — tilt/gain technique, attenuation/shadowing, hail/gradient markers: https://skybrary.aero/articles/airborne-weather-radar (retrieved 2026-07-25) 🟧 confirm slug.
- **ICAO Annex 3 — Meteorological Service for International Air Navigation** — SIGMET for thunderstorm/turbulence/severe icing, PIREP conventions (ICAO not freely hosted; via SKYbrary) — https://skybrary.aero/articles/sigmet (retrieved 2026-07-25).
- **FAA / NASA hydroplaning (aquaplaning) guidance** — dynamic/viscous/reverted-rubber modes and the 9×√(psi) dynamic-onset rule — via SKYbrary Runway Contamination / Aquaplaning: https://skybrary.aero/articles/aquaplaning (retrieved 2026-07-25) 🟧 confirm slug.
- **SKYbrary — Terrain Avoidance and Warning System (TAWS) / Controlled Flight Into Terrain (CFIT)** — modes, "PULL UP" response, terrain backstop role: https://skybrary.aero/articles/terrain-avoidance-and-warning-system-taws (retrieved 2026-07-25).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft. First of four OM E — Operations weather/procedure docs in this batch. Covers thunderstorm avoidance (≥20 NM / no overhang / no penetration, radar tilt-gain), turbulence (severe/CAT/mountain-wave, penetration speed, cabin securing, chop vs severe), windshear & microburst (PWS/RWS, the TOGA escape manoeuvre with no config change, avoidance & recognition, LLWAS), heavy rain/hail, gust fronts, hydroplaning, and TAWS/EGPWS as CFIT backstop. Built from FAA Windshear Training Aid & AC 00-54, ICAO Annex 3, EASA and SKYbrary (Microburst / Windshear / Thunderstorm / CAT / Weather Radar / TAWS). Cross-linked to Wake Turbulence, Volcanic Ash, and Cold Weather / High-Elevation / Short & Limited Runway / Low Visibility OM E docs, airport briefs §14 and the Fleet Index. Type-specific penetration speed, windshear memory item/target pitch, and contaminated-runway factoring flagged open. |
