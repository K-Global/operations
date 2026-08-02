# SAEZ — Ezeiza Intl/Ministro Pistarini · Airport Briefing

**SAEZ / EZE** · Buenos Aires (Ezeiza), Argentina · South America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — ANAC/EANA AIP not reachable this pass; built from tier-4 public sources

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 corroboration (OurAirports, Wikipedia) pending a live ANAC/EANA AIP pull; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | -34.8222, -58.5358 `[OurAirports]`; consistent with the Navigraph-seeded stub position -34.82222, -58.53583 — no material discrepancy 🟩 |
| Field elevation | **67 ft / 20 m AMSL** — consistent across sources 🟩 |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC−3 (Argentina Time, no DST) |
| Runway(s) | **11/29** 3,300 × 60 m (10,827 × 197 ft) · **17/35** 3,105 × 45 m (10,187 × 148 ft) — both asphalt, lighted `[OurAirports]` |
| Preferential runway | Not published / verify — expect wind-driven selection between the two non-parallel runway pairs; no published preferential-runway rule found 🟧 |
| Longest LDA | 11/29 ≈ 3,300 m (10,827 ft) pending AIP confirmation; 17 ≈ 3,105 m (10,187 ft); **35 ≈ 2,805 m (9,203 ft)** after a 300 m (984 ft) displaced threshold — see §7 🟧 |
| Approaches | ILS reported on the field's instrument runways (category/idents not confirmed); RNAV/VOR procedures assumed available at a hub of this size — not confirmed 🟧 |
| RFF category | Not published / verify — assumed in a high ICAO category given widebody international operations at Argentina's principal gateway, not confirmed 🟧 |
| Control type | **Radar** — Ezeiza Approach; **Buenos Aires Control / Ezeiza FIR (SAEF)** en-route — see [South America airspace brief](../../../../airspace/south-america.md) |
| Elevation class | **Sea-level / non-limiting** — 67 ft AMSL, no elevation-driven performance penalty; the operative seasonal hazard is **winter (austral May–Aug) radiation fog/low stratus**, not terrain or density altitude — see §3.4/§14 |
| Special-airport status | None identified as an operator-restricted "special airport" in reachable sources; the standing crew-briefing item is the winter fog/low-visibility environment — see §5 |
| Customs / PoE | **Yes** — Argentina's principal international gateway; H24 assumed, exact desk hours not independently confirmed 🟧 |
| K Global category | **L** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **NO** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **SABE** (Aeroparque Jorge Newbery, same country — no OM C briefing folder built yet for this field), **SUMU** (Montevideo/Carrasco, Uruguay) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **12 min / 16 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat Pampas terrain around Buenos Aires; no close-in high terrain relevant to arrival, departure or missed-approach paths. |
| Runway length vs fleet perf | 🟩 | Both runway pairs are in the 3,100–3,300 m class — adequate for K Global widebody types at sea level; RWY 35's displaced threshold reduces its LDA to ~2,805 m, which should be checked per type/weight. |
| Approach availability / minima | 🟧 | ILS reported at the field; sub-category, idents and per-runway minima not independently confirmed this pass. |
| Airspace / traffic / control | 🟩 | Radar-controlled terminal environment; Ezeiza FIR (SAEF) en-route — see the South America airspace brief. |
| Weather / seasonal hazard | 🟥 | Winter (austral May–Aug) radiation fog/low stratus is the field's defining seasonal hazard, with CAT II/III-relevant implications — see §3.4/§14. |
| Curfew / slots / hours | 🟧 | No published curfew found in reachable sources; slot-coordination level not confirmed — treat as unverified, not "none." |
| RFF category vs our types | 🟧 | Category not confirmed from a primary source this pass. |
| Fuel availability | 🟧 | Jet A-1 assumed available H24 at a hub of this size; supplier/hours not independently confirmed. |
| Customs / handling / security | 🟧 | Confirmed as Argentina's principal international gateway with full PoE facilities `[tier-4]`; exact desk hours and current handler roster not fully confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
SAEZ sits at 67 ft AMSL on flat Pampas terrain roughly 22 km (12 NM) SW of central Buenos Aires — there is **no close-in high terrain** relevant to arrival, departure or missed-approach paths at the field. Verify the MSA ring on the current chart as routine practice; CFIT is not the operative threat here.

### 3.2 Airborne conflict / traffic 🟩
Ezeiza Approach and the wider **Ezeiza FIR (SAEF)** provide radar service across the Buenos Aires terminal area, which also feeds **SABE** (Aeroparque Jorge Newbery), Argentina's domestic/regional gateway some 30 km to the northeast. Expect sustained radar vectoring and sequencing between the two fields' traffic flows, particularly during peak international banks at SAEZ. Cross-ref [South America airspace brief](../../../../airspace/south-america.md).

### 3.3 Runway excursion 🟧
RWY 35's threshold is displaced 300 m (984 ft), reducing its landing distance available to approximately **2,805 m (9,203 ft)** against the full 3,105 m (10,187 ft) runway length — this is the field's principal LDA-limited case and should be checked per type/weight before planning a landing on 35 (see §7). No further displaced thresholds or contamination notes were found in reachable sources for 11/29 or for the 17 threshold.

### 3.4 Weather threat 🟥
**Winter (austral May–August) radiation fog and low stratus** are the field's defining seasonal hazard — a recognized risk for the greater Buenos Aires area — and are consistent with the reported CAT II/III instrumentation at the field (see §5/§10). Plan for LVP-triggering conditions with limited notice in season. This is a **weather-driven, not terrain-driven**, low-visibility threat — see §14.

### 3.5 Operational considerations 🟧
Plan around two durable considerations: (1) the reported **CAT II/III approach capability is not independently confirmed** from a primary AIP source this pass — sub-category, minima and per-runway idents are unconfirmed, and **ILS serviceability per runway should be reconfirmed against the current AIRAC/NOTAM** before relying on any specific runway's low-visibility approach (see §18); and (2) the **RWY 35 displaced-threshold LDA reduction** (§3.3) should be built into landing-performance planning for that runway.

---

## 4. Cautions & Warnings

- Winter (austral May–Aug) radiation fog/low stratus can reduce visibility rapidly with limited notice — confirm current LVP status before planning into or out of the field in season.
- RWY 35 landing distance available is reduced to **~2,805 m (9,203 ft)** by a 300 m (984 ft) displaced threshold — check against type/weight before selecting 35 as the landing runway.
- Reported CAT II/III approach capability is **not primary-confirmed** — verify current ILS serviceability and category per runway before planning a low-visibility approach.
- No published curfew was found — do not assume unrestricted night operations without verifying at planning.
- Confirm current stand/gate assignment and handling arrangements at Argentina's principal international gateway rather than assuming a static picture.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing item is the **winter fog/low-visibility environment** (reported CAT II/III, not primary-confirmed). 🟧
- **Crew-qualification gate:** CAT II/III currency expected if low-visibility capability is confirmed for the planned approach — verify crew/aircraft currency before planning a winter low-vis arrival. 🟧
- **Operating restrictions / bans:** No published curfew, RNP AR ban or circling restriction found in reachable sources — **not confirmed as "none,"** treat as unverified. 🟧
- **Overflight / entry / permits:** Standard Argentina international arrival; no special state permit required for a normal commercial operation. 🟩
- **Operations notes:** ANSP — **EANA** (Empresa Argentina de Navegación Aérea) under **ANAC** oversight; en-route control via the **Ezeiza FIR (SAEF)**; terminal approach — **Ezeiza Approach**. See [South America airspace brief](../../../../airspace/south-america.md).

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Assumed H24 for Argentina's principal international gateway — not independently confirmed | 🟧 |
| AD operating hours | Assumed H24; no published curfew found | 🟧 |
| Night / curfew restrictions | Not published / verify — no curfew found, not confirmed as "none" | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available H24; specific supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE facilities confirmed; exact hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed in reachable public sources | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 11 | 3,300 × 60 m (10,827 × 197 ft) | Asphalt, lighted / PCN not published | Not published (≈3,300 m pending AIP) | Not published | Not published | Not published (≈3,300 m pending AIP) | Full-length runway; no threshold displacement reported this direction 🟧 |
| 29 | (reciprocal of 11) | Asphalt, lighted / PCN not published | Not published | Not published | Not published | Not published | See 11 note |
| 17 | 3,105 × 45 m (10,187 × 148 ft) | Asphalt, lighted / PCN not published | Not published | Not published | Not published | Not published (≈3,105 m pending AIP) | No threshold displacement reported for this direction |
| 35 | (reciprocal of 17) | Asphalt, lighted / PCN not published | Not published (≈3,105 m — displacement does not reduce take-off distance) | Not published | Not published | **≈2,805 m (9,203 ft)** | **300 m (984 ft) displaced threshold** reduces LDA from the full 3,105 m runway length — see §3.3 🟧 |

*All lengths from OurAirports (tier-4); exact TORA/TODA/ASDA figures and PCN are not published in any source reached this pass — pull from the ANAC/EANA AIP before operational use. The RWY 35 LDA figure is a derived value (runway length minus the published displacement) pending primary-source confirmation. All distances in metres unless noted.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Ezeiza ATIS | 127.8 | Not confirmed (assumed H24) | 🟧 single-frequency tier-4 snapshot |
| Delivery | Ezeiza Ground / Clearance Delivery | 121.75 | Not confirmed | 🟧 combined with Ground per the tier-4 source — no separate Delivery-only frequency confirmed |
| Ground | Ezeiza Ground | 121.75 | Not confirmed | 🟧 see Delivery note |
| Tower | Ezeiza Tower | 118.6 | Not confirmed | 🟧 |
| Approach | Ezeiza Approach | 119.9 | Not confirmed | 🟧 |
| Centre / FIR | Buenos Aires Control (**Ezeiza FIR, SAEF**) | 124.9 | H24 assumed | See [South America airspace brief](../../../../airspace/south-america.md) |

*Source: single-entry tier-4 aggregator snapshot — this is possibly incomplete for a hub of this size; no separate Delivery-only frequency distinct from Ground was confirmed. Treat every frequency above as unconfirmed pending a live AIRAC/AIP cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS | Idents not published | Not published | Not published | Reported on the field's instrument runways; category/idents not confirmed 🟧 |
| VOR/DME | Not published / verify | — | — | 🟧 not found in reachable sources this pass |
| NDB | Not published / verify | — | — | 🟧 not found in reachable sources this pass |

*Navaid idents/frequencies for the field's own installations were not found in reachable tier-4 sources this pass. Confirm all idents/frequencies against the current AIRAC before use.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS < FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify — expect wind-driven selection between the 11/29 and 17/35 pairs, with RWY 35's reduced LDA (§7) a factor at higher landing weights. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 11/29 | ILS, reported | Not published | Not published | Category/minima not primary-confirmed 🟧 |
| 17/35 | ILS, reported | Not published | Not published | Category/minima not primary-confirmed; RWY 35 LDA-limited — see §7 🟧 |

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT II/III capability reported, consistent with winter radiation-fog exposure; exact trigger conditions/RVR minima not confirmed this pass. 🟧
- **Missed approach watch-items:** Terrain is not the driver (flat Pampas site); the operative missed-approach concern is re-sequencing into the shared Buenos Aires (SAEZ/SABE) terminal traffic picture and, in winter, the low-visibility go-around procedure — see [South America airspace brief](../../../../airspace/south-america.md).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed in reachable sources — confirm equipage/gradient per SID on the current chart. 🟧
- **Take-off minima:** Published per AIP — exact figures not confirmed this pass. 🟧
- **Start-up / push-back:** Not confirmed in reachable sources — confirm cross-bleed/APU notification and push-back procedure locally. 🟧
- **ATC slot / CTOT & clearance:** No published slot-coordination level found in reachable sources — **not confirmed as uncoordinated**, verify at planning. 🟧
- **De-icing:** Not confirmed in reachable sources; winter fog/low visibility is the dominant seasonal concern at this near-sea-level, temperate field rather than airframe icing, but austral-winter frost/cold-soak de-icing needs should not be ruled out — verify locally. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources — verify locally. 🟧
- **Night noise / dB limits:** Not confirmed in reachable sources. 🟧
- **Engine run-up restrictions:** Not confirmed in reachable sources — verify locally. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed in reachable sources — verify locally. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not confirmed in reachable sources — verify before planning widebody parking. 🟧
- **Push-back:** Not confirmed in reachable sources. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day — not published in reachable sources. 🟧
- **Hot spots / tight taxiways:** Not confirmed in reachable sources this pass. 🟧
- **Follow-me:** Availability not confirmed in reachable sources. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid subtropical climate typical of the Buenos Aires Pampas; four distinct seasons, with no extreme heat or cold relative to other K Global network fields.
- **Seasonal hazards:** **Winter (austral May–Aug) radiation fog and low stratus** are the field's defining seasonal hazard, consistent with the reported CAT II/III instrumentation — see §3.4. Convective activity (thunderstorms) is more prevalent in the summer months (Dec–Feb).
- **Local effects:** No significant terrain-driven local wind effect at this flat site; proximity to the Río de la Plata basin can contribute to morning fog formation in the cooler months.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, **ILS serviceability per runway (reconfirm current status before relying on either runway's low-visibility approach)**, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, conflict-zone/overflight bulletins. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination — Argentina / South America network gateway; **not** a K Global base.
- **Nearest suitable alternates:** **SABE** (Aeroparque Jorge Newbery, Buenos Aires, Argentina — same country; no OM C briefing folder built yet for this field), **SUMU** (Montevideo/Carrasco, Uruguay) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available H24 at a hub of this size; specific into-plane provider/hours not confirmed. 🟧 See [OM E — Fuel Policy](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength non-limiting for K Global types on 11/29 (3,300 m class); RWY 35's reduced LDA (§7) should be checked per type/weight. See [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md). See also [OM E — Low Visibility Operations](../../../../../flight-ops/low-visibility-operations.md) for winter fog/CAT II-III planning. 🟧

---

## 17. Fleet-specific notes (optional)

- No field-elevation performance penalty is expected for any K Global type — SAEZ is a sea-level field (67 ft AMSL), a strong contrast to hot-and-high network fields. The operative planning consideration is **winter low-visibility capability/currency** rather than a type-specific performance limitation. See [OM B — Fleet Capability Matrix](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **ANAC/EANA AIP was not reachable this pass** — every figure in this briefing traces to tier-4 public corroboration (OurAirports, Wikipedia) and should be treated as provisional pending a primary-source pull.
- **ILS category, idents, frequencies and per-runway minima** — CAT II/III reported by corroborating sources only, not primary-confirmed.
- **ILS serviceability per runway** should be reconfirmed against the current AIRAC/NOTAM before relying on either runway's low-visibility approach — a generic caution to re-verify, not a confirmed outage.
- **ATC frequency table** — only a single-entry tier-4 snapshot found; possibly incomplete for a hub of this size (no separate Delivery-only frequency confirmed distinct from Ground).
- **RFF category, PCN, exact declared distances (TORA/TODA/ASDA), curfew/slot regime, take-off minima, transition altitude, magnetic variation** — none confirmed in reachable sources.
- **Navaid idents/frequencies** (VOR/NDB/ILS) — not confirmed in reachable sources.
- **Current stand/gate count and handling-agent roster** — not confirmed.
- **SIDs/STARs (current names)** — not obtained in this research pass.
- **VATSIM cross-check** — no dedicated VATSIM vACC/division airport SOP for SAEZ was located and cross-checked this pass; treat as an outstanding QA item.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/SAEZ/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency tier-4 baseline.*
- Wikipedia — "Ministro Pistarini International Airport" — https://en.wikipedia.org/wiki/Ministro_Pistarini_International_Airport (retrieved 2026-07-26). *General field/terminal corroboration.*
- Companion OM C file: [South America airspace brief](../../../../airspace/south-america.md) — regional airspace reference; Ezeiza FIR (SAEF) content in this briefing is independently written.
- Companion OM E file: [Fuel Policy](../../../../../flight-ops/fuel-policy.md).
- Companion OM E file: [Low Visibility Operations](../../../../../flight-ops/low-visibility-operations.md).
- Companion OM B file: [Fleet Capability Matrix](../../../../../fleet/capability-matrix.md).
- **ANAC/EANA AIP (AD 2 SAEZ)** — primary source of record; not reachable in this research pass (access notes to be recorded in the source register on next attempt).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
