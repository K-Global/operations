# EGNT — Newcastle · Airport Briefing

**EGNT / NCL** · Woolsington, Newcastle-upon-Tyne, England, United Kingdom · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Companion to the [EGNT Dispatch](dispatch.md), [Departure](departure.md) and [Arrival](arrival.md) pages. Static data is drawn from the UK NATS eAIP (AD 2 EGNT); approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 55°02′17″N 001°41′23″W — midpoint of RWY 07/25 `[UK eAIP AD 2 EGNT, AIRAC 2026-05-14]` |
| Field elevation | **266 ft AMSL** (geoid undulation 162 ft; reference temperature 18°C) |
| Mag variation | 🟧 **0.42°W (2022 epoch, annual change 0.21°E)** per the AD 2.2 field entry — **inconsistent with the same source's own ILS entries**, which show **0.51°E / 0.49°E (2027 epoch)** for the two runway-end localisers; this is an internal AIP discrepancy, not a transcription error on this page — flagged, not resolved, see §18 |
| Time zone | UTC+0 (GMT) / UTC+1 (BST, EU-aligned DST observed) |
| Runway(s) | **07/25** — single runway, 2,330 × 45 m, asphalt (grooved for its full length per AIP remarks), PCN 65/F/B/W/T |
| Preferential runway | No published preferential-runway rule found — wind-driven single-runway direction of use; see §3.4 for the field's own documented RWY07-vs-RWY25 seasonal-transition hazard |
| Longest LDA | **2,209 m** (RWY07) — both LDAs reduced from physical/TORA length by displaced thresholds, see §7 |
| Approaches | ILS RWY07 (INC) and ILS RWY25 (INWC), both published **CAT III** — sub-category not confirmed 🟧; SIDs/STARs not confirmed this pass 🟧 |
| RFF category | **CAT A7**; **Category 8/9 available for scheduled movements and on request** 🟧 — relevant to K Global widebody scheduling, see §5 |
| Control type | **Radar/procedural terminal service** — Newcastle Approach/Director/Radar on the field; sits in **London FIR (EGTT)** — see §3.2/§18 for the FIR-brief gap |
| Elevation class | Low elevation (266 ft) — **not** hot-and-high; no density-altitude performance driver |
| Special-airport status | 🟥 **PPR (prior permission required) for all flights, at all times** — a standing operational requirement, not a special-case exception; filing a flight plan does **not** constitute permission — see §5 |
| Customs / PoE | **Yes** — Customs & Immigration H24 (Christmas Day by arrangement) |
| K Global category | 🟧 **Not set in VAMSYS** `[VAMSYS mirror 2026-07-26]` — open reconciliation item, do not guess a category |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **EGPH, EGCC, EGPF** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | 🟧 **n/a — not set in VAMSYS** `[VAMSYS mirror 2026-07-26]` — open item |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Low-lying single-runway field near the Northumberland/Tyne coast; no close-in high terrain identified in reachable source this pass. |
| Runway length vs fleet perf | 🟧 | 2,330 m physical, but **both LDAs are materially reduced by displaced thresholds** (RWY07 LDA 2,209 m, RWY25 LDA 2,124 m) — confirm against type performance before planning a heavy narrowbody landing weight here. |
| Approach availability / minima | 🟧 | ILS CAT III published both ends, but sub-category and current minima not confirmed from a primary table this pass — verify current AIRAC. |
| Airspace / traffic / control | 🟧 | **London FIR (EGTT)** — different from the Scottish-FIR (EGPX) fields in this same batch; **no dedicated London FIR brief exists yet in this network** — genuine gap, see §18. |
| Weather / seasonal hazard | 🟥 | Two AIP-documented, quantified hazards: a **160°–190° wind-disturbance/negative-gradient risk on RWY25**, and a **rushed-approach risk onto RWY07** during high-to-low pressure transitions — see §3.4. |
| Curfew / slots / hours | 🟧 | **PPR at all times is a hard requirement** (🟥); a commonly cited ~2300–0600 night curfew is **tier-4 sourced only** this pass — the AIP text reached this pass confirms training-flight-hour restrictions, not an explicit scheduled-service curfew — see §6/§12/§18. |
| RFF category vs our types | 🟩 | Base CAT A7 with **CAT 8/9 available on request for scheduled movements** — an upgrade path worth holding in mind for widebody-adjacent scheduling. |
| Fuel availability | 🟩 | AVTUR Jet A-1 (Swissport H24; Samson 0800–1900/0700–1800 + by arrangement, without FS11 additive) and AVGAS 100LL; max fuelling rate 33 L/s. |
| Customs / handling / security | 🟩 | Customs & Immigration H24 (Christmas Day by arrangement); Swissport and Samson both provide handling; mandatory 24-hour hi-vis apron area. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
EGNT sits at 266 ft AMSL at Woolsington, ~5 NM NW of Newcastle-upon-Tyne, close to the North Sea coast. No close-in high terrain is identified in the reachable AIP extract for this build — this is not a CFIT-significant field on the data available. Read the MSA/obstacle ring on the current chart as routine practice; this page does not itself carry a sourced MSA table this pass (see §18).

### 3.2 Airborne conflict / traffic 🟧
EGNT sits within **London FIR (EGTT)** — genuinely different from the other three UK fields being built in this same batch (EGPH, EGPF, EGAA), which all sit in **Scottish FIR (EGPX)**. **No dedicated London (EGTT) FIR brief exists yet in this OM** — the only FIR-level brief built so far in this network is Langen (EDGG), for Germany. This is a real, stated network gap, not an oversight specific to this page — see §18. For general regional context pending a dedicated EGTT brief, see the [Europe area brief](../../../../airspace/europe.md) 🟧. Newcastle CTR (Class D) and a 2.5 NM-radius/2,000 ft AAL ATZ apply at the field itself; approach/director/radar services on-field are Newcastle-provided (§8).

### 3.3 Runway excursion 🟧
Single runway **07/25**, 2,330 × 45 m asphalt, described in the AIP as grooved for its full length. Both thresholds are **displaced** — RWY07 by 121 m, RWY25 by 138 m — directly reducing each direction's landing distance available below the physical/TORA length (§7); this is the standing runway-excursion planning consideration at this field rather than a contamination/tailwind-tendency pattern. A turn pad exists 50 m before the RWY25 threshold, usable by aircraft up to Boeing 757 size, with an explicit AIP caution to **use it with caution at night**. No published PCN concern beyond the stated 65/F/B/W/T rating.

### 3.4 Weather threat 🟥
Two specific, AIP-sourced and quantified weather hazards apply at this field — both are genuinely field-specific rather than generic regional climatology, and both are this page's TEM centrepieces:

- **RWY25 wind-disturbance / negative-gradient risk:** the AIP states that when Runway 25 is in use and the wind direction is from **160° through south to 190°**, pilots should expect **wind disturbance and possible negative gradient** on approach. This is a named, quantified, sourced hazard — brief the wind sector explicitly before accepting or planning RWY25.
- **RWY07 seasonal-transition rushed-approach risk:** the AIP separately describes a recognised seasonal pattern — when a high-pressure system is giving way to a low, wind aloft can be from the south or south-west while the surface wind still favours Runway 07. This raises the risk of a **rushed approach onto Runway 07**, with contributory factors identified as: being held high, a tailwind during descent, and the need for engine anti-ice during descent through cloud (icing risk). The AIP further notes a sea breeze from solar heating over land can produce the same effect. This is a well-documented, multi-factor energy-management trap and should be briefed explicitly whenever a high-to-low pressure transition or a strong sea-breeze day is forecast.

Separately, a **CAT I localiser fluctuation** is possible if the preceding landing aircraft vacates near the runway end — a live-traffic-sequencing weather-adjacent caution. See also §14.

### 3.5 Operational considerations 🟥
Several genuinely quantified operational constraints apply here beyond the weather items above:

- **PPR is a standing, all-times requirement** (§5) — this is not a special-case flag, it is baseline for every movement at this field, and filing a flight plan does **not** substitute for it.
- **Ground-movement wingspan restrictions** are published and specific: Holding Point D2 max 36 m wingspan; Taxiway E max 17 m; Taxiway F max 27.5 m — larger aircraft require towing with caution through these constrained points (§13).
- **Code E and higher aircraft (except the Boeing 787-8) should not use the angled turnoffs at Taxiway B/C (Hold CW)** to vacate the runway after landing — a specific, named exception genuinely relevant to K Global's Code E fleet, see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).
- **Bird hazard:** a nature reserve lies north of the NT NDB, 1.2 NM from the RWY25 touchdown zone, plus woodland north of the aerodrome perimeter — an active, sourced bird-strike risk area, concentrated on the RWY25 approach.
- **Soft grass verges / limited load-bearing erosion strips** run along runway/taxiway edges — a taxiing caution, not a runway-surface issue.
- **Named lighting degradation:** two luminaires have been removed from the RWY07 lighting system, 510 m from the RWY07 threshold, as part of a precision-approach CAT II/III lighting-system-removal programme — a specific, sourced lighting-capability caution for low-visibility RWY07 approaches.

---

## 4. Cautions & Warnings

- **PPR required for all flights, at all times** — a flight plan alone is not permission; obtain PPR before planning any movement (§5).
- **RWY25, wind 160°–190°: expect wind disturbance and possible negative gradient** on approach — brief before accepting the runway in this wind sector.
- **RWY07, high-to-low pressure transitions (or strong sea breeze): rushed-approach risk** — being held high, tailwind during descent, and anti-ice-required icing risk combine; brief explicitly.
- **Both thresholds are displaced** — RWY07 by 121 m, RWY25 by 138 m — verify the reduced LDA before planning a landing distance calculation (§7).
- **Code E+ aircraft (except B787-8) must not use the angled Taxiway B/C turnoffs** to vacate after landing.
- **Ground-movement wingspan limits:** Holding Point D2 (36 m), Taxiway E (17 m), Taxiway F (27.5 m) — plan towing for larger types through these points.
- **Bird hazard** concentrated north of the field, 1.2 NM from the RWY25 touchdown zone (nature reserve + woodland).
- **RWY07 lighting: two luminaires removed 510 m from threshold** as part of a CAT II/III lighting-removal programme — a low-visibility approach caution.
- **Mandatory 24-hour high-visibility clothing area on the aprons.**
- **A commonly cited ~2300–0600 night curfew is tier-4 sourced only this pass** — do not treat as an AIP-confirmed hard restriction without further verification (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** 🟧 **VAMSYS aerodrome category: not set** — flagged as an open VAMSYS-reconciliation item; do not guess a category pending reconciliation.
- **Crew-qualification gate:** Not independently confirmed from reachable sources this pass. 🟧
- **Operating restrictions / bans:** 🟥 **PPR (prior permission required) for all flights, at all times** — a standing requirement per AD 2.20; filing a flight plan does **not** constitute permission. Slots during office hours (0900–1700 / 0800–1600) are obtained via **Airport Coordination Ltd (ACL)**; outside office hours, or for military/GA/business aviation, permission is via **Samson Aviation** in advance of each movement.
- **Overflight / entry / permits:** Standard UK domestic/international operation; no additional state overflight permit identified beyond the field-level PPR requirement above.
- **Operations notes:** Airport administration — **Newcastle International Airport Limited**. Traffic permitted IFR/VFR. CAT II/III operations are authorised on both runways subject to serviceability, with CAT II/III holding points published as RWY07 = A2, RWY25 = D3 or D2. Datalink Departure Clearance (DCL) is available via ARINC/SITA for aircraft flight-planned via **GIRLI P18** or **BAVDO/ERKIT N110**, requested no earlier than 20 minutes before EOBT.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | H24 | 🟩 |
| AD operating hours | AD Administration H24 | 🟩 |
| Night / curfew restrictions | 🟧 AIP text reached this pass confirms **training-flight-hour restrictions** (Mon–Sat 0730–2300, Sun 1000–2300) but does **not** explicitly confirm a scheduled-service night curfew; a commonly cited ~2300–0600 curfew with emergency/medical/state exemptions is **tier-4 sourced only** — see §18 | 🟧 |
| RFF category | **CAT A7**; **CAT 8/9 available for scheduled movements and on request** | 🟧 (upgrade path, not baseline) |
| Fuel | AVTUR Jet A-1 — Swissport H24, Samson 0800–1900 (0700–1800) + by arrangement (without FS11 additive); AVGAS 100LL; max fuelling rate 33 L/s | 🟩 |
| PCN | Runway 65/F/B/W/T | 🟩 |
| Customs | H24 (Christmas Day by arrangement) | 🟩 |
| Handling / FBO | Swissport H24; Samson 0800–1900 (0700–1800) + by arrangement | 🟩 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 07 | 2,330 × 45 m | Asphalt (grooved full length) / PCN 65/F/B/W/T | 2,330 m | 2,405 m | 2,344 m | **2,209 m** | THR elev 263.3 ft (TDZ 263.3 ft); **threshold displaced 121 m** — LDA reduced accordingly; slope 0.35% down |
| 25 | 2,330 × 45 m | Asphalt (grooved full length) / PCN 65/F/B/W/T | 2,262 m | 2,386 m | 2,262 m | **2,124 m** | THR elev 238.7 ft (TDZ 243.1 ft); **threshold displaced 138 m** — LDA reduced accordingly; slope 0.35% up; turn pad 50 m before THR, usable to B757 size, use with caution at night |

*Both LDA figures are reduced from the runway's physical/TORA length purely by the published displaced threshold (121 m on RWY07, 138 m on RWY25) — not by a stopway/overrun distinction. Several intersection-takeoff distances from Taxiways B/C/E/F/G are also published in the AIP but are not individually transcribed here — pull the current-AIRAC intersection-departure table at planning if an intersection departure is being considered. Source: UK NATS eAIP AD 2 EGNT, AIRAC effective 2026-05-14.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Newcastle Information | 118.380 | H24 | |
| Approach | Newcastle Approach | 124.380 | H24 | DOC 60 NM / 25,000 ft |
| Director | Newcastle Director | 125.830 | As directed by ATC | |
| Radar | Newcastle Radar | 124.380 | H24 | Shares Approach frequency |
| Tower | Newcastle Tower | 119.705 | H24 | |
| Ground | Newcastle Ground | 121.730 | As directed by ATC | Aerodrome-surface movement only |
| Fire (non-ATS) | — | 121.605 | — | |
| Centre / FIR | London FIR (EGTT) | Per current AIRAC | H24 | 🟧 No dedicated FIR brief built yet in this network — see §18; general context via [Europe area brief](../../../../airspace/europe.md) |

*Source: UK NATS eAIP AD 2 EGNT, AIRAC effective 2026-05-14.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS/LOC RWY07 | INC | 111.500 | — | **CAT III** (sub-category not confirmed 🟧); elev 251 ft; note — two luminaires removed from the 07 lighting system, 510 m from threshold (CAT II/III lighting-removal programme) |
| GP RWY07 | — | 332.900 | — | RDH 51 ft; elev 256 ft |
| DME (paired with ILS) | INC | Ch. per ILS pairing | — | Zero range at threshold; for use with ILS and NDB approaches |
| ILS/LOC RWY25 | INWC | 111.500 | — | **CAT III** (sub-category not confirmed 🟧); elev 273 ft |
| GP RWY25 | — | 332.900 | — | RDH 51 ft; elev 229 ft |
| DME (paired with ILS) | INWC | Ch. per ILS pairing | — | Zero range at threshold; for use with ILS and NDB approaches |
| DME | NEW | 114.250 (CH89Y) | — | On-field; **no associated VOR — any VOR-type indications from this facility should be ignored** 🟥 |
| NDB (locator) | NT | 352.0 kHz | — | Range 40 NM |

*Both runway ends' ILS carry paired DME using the localiser ident (INC/INWC), zero range at threshold, for use with the ILS and NDB approaches. Note the internal mag-var inconsistency between the AD 2.2 field entry (0.42°W, 2022 epoch) and these ILS entries (0.51°E/0.49°E, 2027 epoch) flagged in §1/§18. Source: UK NATS eAIP AD 2 EGNT, AIRAC effective 2026-05-14.*

---

## 10. Arrival

- **Transition altitude / level:** TA 6,000 ft; TL by QNH — not independently confirmed this pass. 🟧
- **Speed:** Standard 250 KIAS below FL100 (UK/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** No published preferential-runway rule found; single runway, wind-driven direction of use. Brief the RWY25 160°–190° wind-disturbance hazard and the RWY07 pressure-transition rushed-approach hazard explicitly regardless of which end is active (§3.4).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 07 | ILS (INC) | Not confirmed 🟧 | Not confirmed 🟧 | CAT III (sub-category not confirmed) |
| 25 | ILS (INWC) | Not confirmed 🟧 | Not confirmed 🟧 | CAT III (sub-category not confirmed) |

- **STARs (names only):** 🟧 Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning.
- **LVP:** CAT II/III operations authorised on both runways subject to serviceability; CAT II/III holding points RWY07 = A2, RWY25 = D3 or D2. Exact RVR/LVP trigger figures not confirmed this pass. 🟧
- **Missed approach watch-items:** No significant terrain factor identified (§3.1); the operative arrival-hazard drivers here are the two named weather threats in §3.4, not terrain.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** 🟧 Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning.
- **RNP / climb-gradient requirements:** No unusual gradient expected at this low-elevation field; confirm standard RNAV SID equipage on current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not confirmed this pass. 🟧
- **Start-up / push-back:** Not confirmed this pass — confirm cross-bleed/APU notification procedure locally. 🟧
- **ATC slot / CTOT & clearance:** **PPR at all times** is the standing gate (§5); slots during office hours via **Airport Coordination Ltd (ACL)**, otherwise via **Samson Aviation** in advance of each movement. **Datalink Departure Clearance (DCL)** available via ARINC/SITA for aircraft flight-planned via GIRLI P18 or BAVDO/ERKIT N110, requested no earlier than 20 min before EOBT.
- **De-icing:** Listed as H24 availability per AD 2.20 remarks; provisioning/procedure detail not confirmed this pass. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed from reachable sources this pass. 🟧
- **Night noise / dB limits:** 🟧 A commonly cited ~2300–0600 night curfew with emergency/medical/state exemptions is **tier-4 sourced only** — the AIP text reached this pass confirms **training-flight-hour restrictions** (Mon–Sat 0730–2300, Sun 1000–2300) but does not explicitly confirm a scheduled-service curfew; treat as an open item pending primary-source confirmation (§18).
- **Engine run-up restrictions:** Not confirmed this pass. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed this pass. 🟧

---

## 13. Ground operations

- **Stands for our types:** Stand 30 is a diagonal parking position across Stand 9, usable by B747, A330-300 and B777-300-size aircraft; Stand 31 is a diagonal position across Stand 1 for smaller narrowbody types — a genuinely relevant widebody-stand note, see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). 🟧 (exact stand-by-type allocation not confirmed beyond this.)
- **Push-back:** Not confirmed this pass. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟥 **Ground-movement wingspan restrictions** — Holding Point D2 max 36 m wingspan; Taxiway E max 17 m; Taxiway F max 27.5 m — larger aircraft towed with caution through these points. **Code E and higher aircraft (except the Boeing 787-8) should not use the angled turnoffs at Taxiway B/C (Hold CW)** to vacate the runway after landing.
- **Follow-me:** Not confirmed this pass. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** North-East England coastal/near-coastal climate.
- **Seasonal hazards:** The two AIP-documented, quantified hazards in §3.4 are the field's defining weather threats — the **RWY25 160°–190° wind-disturbance/negative-gradient risk**, and the **RWY07 high-to-low pressure transition rushed-approach risk** (being held high, tailwind during descent, engine anti-ice required through cloud/icing, and a sea-breeze effect that can produce the same pattern).
- **Local effects:** Sea-breeze effect specifically noted in the AIP as a contributory factor to the RWY07 rushed-approach hazard (§3.4).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check specifically: single-runway closure/contamination status (no on-field crosswind alternative), CAT II/III equipment/holding-point status, ILS/DME/NDB outages, RWY07 lighting-removal-programme status, RFF downgrade below CAT A7, PPR/slot confirmation, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / origin — regional UK spoke.
- **Nearest suitable alternates:** Company preferred alternates [**EGPH**](../egph/index.md) (Edinburgh), [**EGCC**](../egcc/index.md) (Manchester), [**EGPF**](../egpf/index.md) (Glasgow) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** AVTUR Jet A-1 (Swissport H24; Samson 0800–1900/0700–1800 + by arrangement, without FS11 additive) and AVGAS 100LL; max fuelling rate 33 L/s. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** No field-length constraint identified for narrowbody types at the physical 2,330 m length, but **both LDAs are reduced by displaced thresholds** (RWY07 2,209 m, RWY25 2,124 m) — confirm landing-distance performance per type/weight before planning. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md).

---

## 17. Fleet-specific notes (optional)

- **Code E+ turnoff exception:** Code E and higher aircraft are directed not to use the angled Taxiway B/C (Hold CW) turnoffs after landing, **except the Boeing 787-8**, which is specifically exempted — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for the type's ground-handling characteristics relative to this exception.
- **Stand 30 widebody note:** the diagonal position across Stand 9 is usable by B747, A330-300 and B777-300-size aircraft — a genuinely relevant widebody-stand consideration if a K Global Code E type is ever scheduled here; see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Magnetic variation internal inconsistency** — the AD 2.2 field entry states 0.42°W (2022 epoch, +0.21°E/yr), while the same source's ILS RWY07/RWY25 entries state 0.51°E/0.49°E (2027 epoch) — a genuine internal AIP discrepancy, not resolved on this page; use the current chart's stated value for any calculation and do not average or silently pick one.
- **London (EGTT) FIR brief does not yet exist in this network** — EGNT sits in London FIR, distinct from the Scottish FIR (EGPX) fields in this same build batch (EGPH/EGPF/EGAA); this is a real, stated network gap. Linked instead to the general [Europe area brief](../../../../airspace/europe.md) for regional context pending a dedicated EGTT build.
- **Night curfew** — commonly described elsewhere (tier-4) as ~2300–0600 local with emergency/medical/state exemptions; the AIP text reached this pass confirms training-flight-hour restrictions (Mon–Sat 0730–2300, Sun 1000–2300) but does **not** explicitly confirm a scheduled-service curfew — flagged pending primary-source confirmation (e.g. the Newcastle Airport Noise Action Plan 2024–2028).
- **VAMSYS aerodrome category** — not set; do not guess, treat as an open reconciliation item.
- **VAMSYS taxi-in/out times** — not set (n/a).
- **ILS sub-category (II/IIIA/IIIB/IIIC)** on both runway ends — published as CAT III but exact sub-category not confirmed from a primary table this pass.
- **STARs/SIDs (current names)** — not obtained in this research pass; pull the live current-AIRAC procedure list before use.
- **Take-off minima, engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability, push-back procedure** — none confirmed in reachable sources.
- **MSA/terrain table** — not sourced this pass; confirm on the current chart before treating §3.1 as more than a first-pass "no high terrain identified" statement.
- **Intersection take-off distances (Taxiways B/C/E/F/G)** — published in the AIP but not individually transcribed on this page; pull the current-AIRAC table if an intersection departure is being planned.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material informs content but is not listed here.*

- **UK NATS eAIP, AD 2 EGNT**, AIRAC effective 2026-05-14 — https://www.aurora.nats.co.uk/htmlAIP/Publications/2026-05-14-AIRAC/html/eAIP/EG-AD-2.EGNT-en-GB.html (retrieved 2026-07-26). *Primary source for ARP, elevation, mag variation (incl. internal inconsistency), runway/declared distances, PCN, RFF, hours, fuel, communications, navaids, local aerodrome regulations (PPR, slots, wingspan limits, turnoff exception, stand notes, wind/pressure-transition hazards, bird/terrain notes).*
- OurAirports — Newcastle Airport (NCL, EGNT) — https://ourairports.com/airports/EGNT/ (retrieved 2026-07-26). *Tier-4 cross-check.*
- SkyVector — https://skyvector.com/airport/EGNT (retrieved 2026-07-26). *Tier-4 cross-check.*
- Newcastle Airport — Noise Action Plan 2024–2028 — https://www.newcastleairport.com/media/cculafuj/noise-action-plan-digital-compressed.pdf (retrieved 2026-07-26). *Consulted for curfew corroboration — night-restriction hours not independently confirmed as a hard scheduled-service curfew from the AIP text reached this pass; see §18.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from UK AIP (NATS AIS); K Global fields from live VAMSYS; 4-page pack. |
