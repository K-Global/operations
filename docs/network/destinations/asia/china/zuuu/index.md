# ZUUU — Chengdu/Shuangliu · Airport Briefing

**ZUUU / CTU** · Chengdu, Sichuan, China · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, AIP China gated

> **Read-me:** Planning aid for the sim, not a chart. Static data is cross-checked from public sources (AIP China / CAAC-AISC is subscription-gated and was not directly reachable this pass); approaches/SIDs/STARs are listed **by name/category only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 30.5583, 103.9460 `[OurAirports]` 🟧 (primary-AIP ARP not confirmed) |
| Field elevation | **1,625 ft / 495 m AMSL** `[OurAirports]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+8 (China Standard Time, no DST) 🟩 |
| Runway(s) | **02L/20R** 3,600 × 45 m (asphalt) · **02R/20L** 3,600 × 60 m (concrete) — two parallels, both Code 4F-rated since the 2009 second-runway upgrade |
| Preferential runway | Not published / verify 🟧 |
| Longest LDA | ~3,600 m (exact declared-distance table not confirmed) 🟧 |
| Approaches | **ILS CAT III** reported both parallels (tier-4 corroboration only — sub-category/per-runway assignment not confirmed from a primary AIP table) 🟧 |
| RFF category | Not published / verify 🟧 (33M+ pax/yr major hub — expect a high category) |
| Control type | Radar (assumed, consistent with the continental-China pattern in the [Asia airspace brief](../../../../airspace/asia.md)) 🟧 |
| Elevation class | Near sea-level field (1,625 ft) in the flat **Sichuan (Chengdu) Basin** — **not** hot-and-high itself, but the region's defining terrain feature (Tibetan Plateau/Hengduan Shan) rises sharply to the west — see §3.1 |
| Special-airport status | None found in reachable sources; the standing crew-briefing item is the **westbound high-plateau terrain environment**, not the field itself | 🟧
| Customs / PoE | Yes — international/regional gateway; exact desk hours not confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **ZBAA** (Beijing/Capital), **ZGGG** (Guangzhou/Baiyun) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 16 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | The airport itself sits in the flat Chengdu Basin (non-issue locally); westbound/Tibet-facing departures and any diversion track toward the plateau are a genuine high-terrain environment — see §3.1. |
| Runway length vs fleet perf | 🟩 | Both 3,600 m parallels (4F-rated) are ample for any K Global widebody at this field elevation. |
| Approach availability / minima | 🟧 | CAT III reported for both parallels but not confirmed from a primary AIP table this pass. |
| Airspace / traffic / control | 🟧 | Major SW-China hub (Air China / Sichuan Airlines core); busy continental radar/ADS-B environment per the regional pattern — field-specific sectorisation not confirmed. |
| Weather / seasonal hazard | 🟧 | Sichuan Basin fog/haze and stagnant-air episodes are a recognised regional pattern; field-specific frequency data not found. |
| Curfew / slots / hours | 🟧 | Not confirmed in reachable public sources. |
| RFF category vs our types | 🟧 | Category not published/verified this pass. |
| Fuel availability | 🟧 | Assumed available as a major hub; supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | International PoE assumed (regional/international gateway history); desk hours not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
ZUUU itself sits at 1,625 ft in the flat, low-relief **Sichuan (Chengdu) Basin** — no close-in high terrain at the field. The region's defining terrain threat lies **west and northwest of Chengdu**, where the ground rises abruptly from the basin floor toward the **Hengduan Shan and the eastern edge of the Tibetan Plateau** (terrain exceeding 4,000–5,000 m within roughly 150–250 NM of the field). This is the same high-plateau environment that requires specialist high-altitude-airport training for operators flying the Chengdu–Tibet city pairs. It is not a threat to a normal arrival/departure at ZUUU itself, but it governs **any westbound routing, diversion, or engine-out track** filed from this field — brief the MSA sectors on the current area chart and treat any westbound contingency routing as a high-terrain case. See the [Asia airspace brief §7](../../../../airspace/asia.md) (Himalaya-belt driftdown/escape-route guidance) for the regional planning framework.

### 3.2 Airborne conflict / traffic 🟧
ZUUU is one of China's busiest hubs (33.5M+ passengers, ~222,600 movements per the most recent public figures) and the principal base for Air China (western hub), Sichuan Airlines and Chengdu Airlines. Expect sustained high traffic density and China's standard strict, centralised ATFM/flow-control regime (CTOT, MINIT spacing) described in the [Asia airspace brief §6](../../../../airspace/asia.md). Field-specific sector/frequency detail not confirmed this pass. 🟧

### 3.3 Runway excursion 🟧
No displaced-threshold or declared-distance table was found in reachable public sources — not confirmed either way. The two parallels differ in surface (asphalt 02L/20R vs concrete 02R/20L) and width (45 m vs 60 m); confirm current runway/surface assignment before planning.

### 3.4 Weather threat 🟧
The Sichuan Basin is recognised regionally for **persistent haze, fog and low-visibility stagnant-air episodes**, particularly in winter, driven by the basin's enclosed topography trapping moisture and pollutants. No ZUUU-specific frequency/statistic was found this pass — treat as general regional climatology pending a primary-source confirmation. See §14.

### 3.5 Operational considerations 🟧
Plan around two durable, if not fully AIP-confirmed, considerations: (1) the **westbound high-plateau terrain environment** described in §3.1, relevant to any contingency/diversion routing rather than the normal arrival/departure; and (2) China's **strict ATFM/flow-control regime** at a very high-volume hub (§3.2). RFF category, curfew, and exact approach minima are open items in §18 pending primary-AIP access.

---

## 4. Cautions & Warnings

- **Terrain rises sharply west/northwest of the field** toward the Hengduan Shan/Tibetan Plateau — a genuine high-terrain consideration for any westbound contingency or diversion track, though not for a normal arrival/departure at ZUUU itself.
- **Two parallel runways differ in surface and width** (02L/20R asphalt/45 m vs 02R/20L concrete/60 m) — confirm the assigned runway before planning stand/taxi routing.
- **China's centralised ATFM/flow-control regime** (CTOT/MINIT) applies at this very-high-volume SW-China hub — build schedule buffer accordingly.
- Primary AIP (AIP China / CAAC-AISC) was not directly reachable this pass — most operational figures below (frequencies, exact minima, RFF, curfew) are flagged 🟧 pending confirmation; do not treat this brief as chart-equivalent.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing item is the regional high-plateau terrain environment (§3.1), not ZUUU itself. 🟧
- **Crew-qualification gate:** None specific to ZUUU identified; if a westbound Tibet-facing contingency routing is ever flown, treat as high-terrain/driftdown planning per the Asia airspace brief. 🟧
- **Operating restrictions / bans:** Not confirmed in reachable sources — verify current AIRAC/AIP. 🟧
- **Overflight / entry / permits:** Standard PRC international arrival; China requires prior overflight/entry permit for foreign operators generally — confirm at planning per the [Asia airspace brief §9](../../../../airspace/asia.md). 🟧
- **Operations notes:** ANSP — CAAC / regional Air Traffic Management Bureau (China's standard structure); airport operator — Sichuan Airport Group / Chengdu Shuangliu International Airport Co. Since the June 2021 opening of [Chengdu Tianfu (ZUTF)](../zutf/index.md), most international, cargo and long-haul routes have progressively shifted to ZUTF, with ZUUU retained mainly for domestic and regional service — confirm which field a given route uses at planning.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify (major-hub H24 assumed) | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not published / verify | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available as a major hub; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE assumed; desk hours not confirmed | 🟧 |
| Handling / FBO | Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 02L | 3,600 × 45 m | Asphalt / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Code 4F-rated pair |
| 20R | 3,600 × 45 m | Asphalt / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | |
| 02R | 3,600 × 60 m | Concrete / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Second runway, opened Dec 2009 |
| 20L | 3,600 × 60 m | Concrete / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | |

*Source: OurAirports (runway dimensions/surface); no declared-distance (TORA/TODA/ASDA/LDA) table found in reachable public sources — AIP China / CAAC-AISC gated. All distances metric.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Not published / verify | 🟧 | 🟧 | |
| Delivery | Not published / verify | 🟧 | 🟧 | |
| Ground | Not published / verify | 🟧 | 🟧 | |
| Tower | Not published / verify | 🟧 | 🟧 | |
| Approach | Not published / verify | 🟧 | 🟧 | |
| Centre / FIR | Chengdu ACC (ZUUU/ZPPP) | Per current AIRAC | H24 (assumed) | No dedicated Asia FIR brief built yet for the Chengdu ACC — see the area-level [Asia airspace brief](../../../../airspace/asia.md) |

*No ATC frequency table found in reachable public sources this pass — AIP China / CAAC-AISC gated. Pull current-AIRAC values at planning.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| Not published / verify 🟧 | — | — | — | No navaid table found in reachable public sources this pass |

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 02L/20R | ILS reported (CAT III per tier-4 corroboration) 🟧 | Not published | Not published | Verify current AIRAC |
| 02R/20L | ILS reported (CAT III per tier-4 corroboration) 🟧 | Not published | Not published | Verify current AIRAC |

- **STARs (names only):** Not published / verify. 🟧
- **LVP:** Not confirmed; CAT III capability reported (tier-4) would imply an LVP regime exists — trigger conditions not sourced. 🟧
- **Missed approach watch-items:** Terrain is not the driver at the field itself (flat basin); the operative watch-item is awareness of the westbound high-terrain environment if a miss leads to a westbound hold/vector (§3.1).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify. 🟧
- **RNP / climb-gradient requirements:** Not published / verify — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the regional PBN framework. 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** China's standard centralised ATFM applies at this very-high-volume hub (see the [Asia airspace brief §6](../../../../airspace/asia.md)); field-specific CTOT/slot regime not confirmed. 🟧
- **De-icing:** Not published / verify — Chengdu winters are mild/humid rather than snow-heavy, but confirm current provisioning. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify — major-hub apron capacity assumed adequate for widebody Code E types, exact stand/pier assignment not confirmed. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify — confirm with Ground on the day.
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid subtropical climate typical of the Sichuan Basin; prevailing wind direction not independently confirmed this pass.
- **Seasonal hazards:** The Sichuan Basin is recognised regionally for **persistent haze/fog and stagnant-air low-visibility episodes**, particularly in winter, owing to the basin's enclosed topography. Summer convective activity is standard for the region. No ZUUU-specific frequency statistic confirmed. 🟧
- **Local effects:** Basin-trapped haze/fog is the standout local effect; no other notable terrain/sea-breeze effects at the field itself (the significant terrain lies west of the basin, §3.1).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, China ATFM/flow measures, conflict-zone. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination — SW-China network point; **not a K Global base** `[VAMSYS mirror 2026-07-26]`.
- **Nearest suitable alternates:** Company preferred alternates **ZBAA** (Beijing/Capital), **ZGGG** (Guangzhou/Baiyun) `[VAMSYS mirror 2026-07-26]` — both are substantial-distance alternates typical of the sparser SW-China alternate picture; confirm suitability/fuel reserve per leg. The sibling field [**ZUTF** (Chengdu/Tianfu)](../zutf/index.md), ~34 NM ENE, is a same-city option worth cross-checking for routes/capability even though it is not a VAMSYS-listed alternate for this field.
- **Fuel-uplift notes:** Jet A-1 assumed available as a major hub; supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength (3,600 m, 4F-rated) non-limiting for any K Global type at this elevation. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No fleet-specific consideration identified beyond the general westbound high-terrain awareness in §3.1. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP (AIP China / CAAC-AISC) not directly reached this pass** — nearly every operational figure below (frequencies, navaids, declared distances, RFF, minima, curfew, PCN) needs primary-source confirmation.
- Mag variation, transition altitude, RFF category, curfew/slot regime.
- ATC frequencies (ATIS/Delivery/Ground/Tower/Approach) and navaid idents/frequencies — none found in reachable public sources.
- Exact declared-distance (TORA/TODA/ASDA/LDA) table per runway.
- ILS CAT III report — tier-4 only, sub-category and per-runway assignment unconfirmed.
- SID/STAR names and current preferential-runway logic.
- Stand/gate assignment and ground hot spots.
- **Chengdu ACC (ZUUU/ZPPP)** has no dedicated Asia FIR brief built yet — only the area-level Asia brief exists.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/ZUUU/ and /runways.html (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- Wikipedia — "Chengdu Shuangliu International Airport" — https://en.wikipedia.org/wiki/Chengdu_Shuangliu_International_Airport (retrieved 2026-07-26). *History, hub status, runway upgrade, post-2021 route shift to ZUTF.*
- SkyVector — https://skyvector.com/airport/ZUUU/Chengdu-Shuangliu-Airport (retrieved 2026-07-26). *Coordinates/chart pointer.*
- **AIP China (CAAC / AISC)** — subscription-gated, not directly reachable this pass. Primary-source verification pending; treat operational figures above as provisional until cross-checked against the current AIP/AIRAC.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP China (public cross-check where gated); K Global fields from live VAMSYS; 4-page pack. |
