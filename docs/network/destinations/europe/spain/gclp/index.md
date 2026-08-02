# GCLP — Gran Canaria (Gando) · Airport Briefing

**GCLP / LPA** · Gran Canaria Island (Bay of Gando), Canary Islands, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP España (ENAIRE) where reachable, corroborated by public aeronautical data; the ENAIRE eAIP itself renders as a JavaScript frameset and could not be fetched directly this pass — figures below lean more heavily on tier-4 corroboration than a hub-field build, and are flagged accordingly. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N27°55′55″ / W015°23′12″ (27.9319, -15.3866) `[OurAirports]` 🟧 not AIP-primary |
| Field elevation | **78 ft / 24 m AMSL** `[OurAirports]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | **UTC+0 (WET) / UTC+1 (WEST, DST)** — the Canary Islands run **one hour behind mainland Spain** year-round |
| Runway(s) | **03L/21R** and **03R/21L**, each 3,100 × 45 m, asphalt — **two closely-spaced parallel runways** |
| Preferential runway | Climatologically, the persistent **NE trade wind (alisios)** favours **RWY 03 operations**; 21-direction used when wind dictates — not sourced from a primary AIP configuration table 🟧 |
| Longest LDA | ~3,100 m pending confirmed declared distances 🟧 |
| Approaches | **ILS CAT III** per company/VAMSYS data — runway designator and sub-category not confirmed from a primary source this pass 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Radar assumed (Gran Canaria Aproximación) — not independently confirmed 🟧 |
| Elevation class | Sea-level (78 ft) — **not** hot-and-high; the defining hazards are the **persistent NE trade winds**, terrain-influenced local wind effects from the island's mountainous interior, and seasonal Saharan dust ("calima") |
| Special-airport status | 🟧 CAT III low-visibility infrastructure and a **closely-spaced parallel-runway pair** — both flagged for crew awareness; see §5 |
| Customs / PoE | **Yes** — international hub role for West Africa (Morocco, Mauritania, Senegal, Cape Verde) and the Atlantic isles (Madeira, Azores) `[Wikipedia]`; desk hours not confirmed 🟧 |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **GCFV, GCRR, GCTS** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **10 min / 12 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | The field itself sits on the flat Bay of Gando coastal shelf — non-threatening for a direct coastal arrival/departure. Gran Canaria's interior massif (**Pico de las Nieves, ~1,949 m**) rises sharply roughly 20 NM inland — a real MSA/driftdown/circling consideration for any routing that tracks over the island's interior. Verify MSA sectors on the current chart. |
| Runway length vs fleet perf | 🟩 | 3,100 m is ample for any K Global narrowbody and most widebody weights at normal conditions. |
| Approach availability / minima | 🟧 | CAT III capability reported (VAMSYS/company data) but sub-category and specific runway not confirmed from a primary AIP table this pass. |
| Airspace / traffic / control | 🟧 | **Canarias FIR/UIR (GCCC)** is a distinct oceanic-adjacent FIR — **no dedicated OM C FIR brief exists for it.** See [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) for the nearest general reference; this does not cover the Canarias-specific character and the gap is flagged explicitly (§18). |
| Weather / seasonal hazard | 🟥 | **Persistent NE trade winds (alisios)**, terrain-induced turbulence/gust potential from the adjacent volcanic massif, and periodic **Saharan dust ("calima")** visibility events are the field's defining hazards. |
| Curfew / slots / hours | 🟧 | Not confirmed — no data found in reachable sources. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Jet A-1 assumed as a major AENA international field; hours/supplier not confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed by route network and hub role; desk hours and handling agent not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
GCLP sits at 78 ft AMSL on the flat coastal shelf of the **Bay of Gando** — the immediate arrival/departure/initial-climb environment is water and flat terrain, non-threatening for a standard direct coastal track. However, Gran Canaria's interior rises abruptly to a volcanic massif — **Pico de las Nieves at ~1,949 m (6,394 ft)**, roughly 20 NM inland — which is a genuine MSA, driftdown and (where applicable) circling-approach terrain consideration for any procedure or diversion routing that tracks over the island's interior rather than staying coastal. Verify MSA sectors and any circling terrain clearance on the current chart; not a factor for a standard straight-in coastal operation.

### 3.2 Airborne conflict / traffic 🟧
GCLP carries moderate-to-high seasonal tourist and connecting traffic. **Canarias FIR/UIR (GCCC)** — a distinct oceanic-adjacent FIR, not part of mainland Madrid (LECM) airspace — mixes international jet arrivals with substantial **inter-island turboprop traffic** (Binter Canarias, Canaryfly serve the archipelago from here). **No dedicated Canarias/GCCC FIR brief exists in the OM C Airspace library** — the nearest general reference is [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md), which only touches the Canarias UIR in passing (FRA level-band context) and does not describe the Canarias-specific oceanic-adjacent character. This is flagged as a standing library gap (§18), not merely a per-field open item.

### 3.3 Runway excursion 🟧
Two **closely-spaced parallel runways** (03L/21R, 03R/21L) — exact centreline separation and independent-vs-dependent operational status are not confirmed from a primary source this pass; verify on the current AIRAC before assuming simultaneous independent operations. The persistent NE trade wind can produce a strong, gusty crosswind component on some configurations — a genuine excursion consideration on gusty days. No displaced-threshold data was found in reachable sources.

### 3.4 Weather threat 🟥
The defining hazard is the **persistent NE trade wind (alisios)** — routinely strong and often gusty, and the climatological driver of the dominant RWY03 configuration. The adjacent mountainous interior can generate local turbulence and wind-shear under certain wind strength/direction combinations — a characteristic shared across Canary Islands airports generally (most notably documented at Tenerife, but relevant here too given the proximity of Gran Canaria's own volcanic massif). Seasonal **Saharan dust intrusions ("calima")** are a well-documented Canary Islands-wide hazard, capable of sharply reducing visibility for multiple days at a time — not independently quantified for GCLP specifically in reachable sources this pass. 🟧

### 3.5 Operational considerations 🟧
Three durable planning items stand out: (1) the **CAT III capability** reported via VAMSYS/company data, whose sub-category and equipment specifics are not confirmed from a primary AIP table; (2) the **closely-spaced parallel-runway pair**, whose independent/dependent operating status needs current-AIRAC confirmation; and (3) the **missing Canarias (GCCC) FIR brief** — a library gap that should be closed ahead of any Canary Islands network expansion.

---

## 4. Cautions & Warnings

- **Persistent NE trade winds (alisios)** — expect a strong, often gusty crosswind/headwind component; **RWY 03 is the climatologically dominant configuration**.
- **Interior terrain rises to ~1,949 m (Pico de las Nieves)** within about 20 NM of the field — respect MSA on any routing that tracks over the island's interior, even though the field itself is coastal/flat.
- **Seasonal Saharan dust ("calima")** can cut visibility sharply across the Canary Islands, sometimes for days at a time — monitor NOTAM/METAR trend, especially in the shoulder seasons. 🟧
- **Two closely-spaced parallel runways (03L/21R, 03R/21L)** — confirm independent/dependent approach status and the correct runway assignment; do not assume simultaneous independent operations without verifying the current AIRAC.
- **No dedicated Canarias (GCCC) FIR brief exists** in the library — the field sits in a distinct oceanic-adjacent FIR, not the mainland Madrid (LECM) sector; treat local airspace structure as an open item (§18) pending a dedicated brief.
- **CAT III capability (VAMSYS)** — confirm current equipment status, runway designator and sub-category before planning a low-vis approach.
- **Canary Islands time zone is one hour behind mainland Spain (UTC+0/+1)** — a scheduling trap worth flagging explicitly for any crew/dispatch planning against a mainland-based schedule.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** **K Global VAMSYS category S.** Not independently categorised as a restricted-crew "special airport" in reachable public sources — CAT III currency and persistent trade-wind crosswind/gust awareness are the standing briefing items. 🟧
- **Crew-qualification gate:** CAT II/III currency expected for any low-vis approach into the CAT III-equipped runway; confirm crew/aircraft currency. 🟧
- **Operating restrictions / bans:** None identified in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen entry; the Canary Islands carry a special VAT/customs regime (outside the EU VAT area) but this has no bearing on flight-operations permits. 🟩
- **Operations notes:** ANSP — **ENAIRE** (Canarias FIR/GCCC); airport operator — **AENA**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not confirmed | 🟧 |
| AD operating hours | Not confirmed — likely H24 given international/tourist demand, not sourced | 🟧 |
| Night / curfew restrictions | Not confirmed | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed (major AENA international field); supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE confirmed by route network/hub role; desk hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 03L | 3,100 × 45 m | Asphalt / PCN not published 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Part of a closely-spaced parallel pair — confirm independent/dependent ops status |
| 21R | 3,100 × 45 m | Asphalt / PCN not published 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Reciprocal of 03L |
| 03R | 3,100 × 45 m | Asphalt / PCN not published 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | CAT III capability reported somewhere in this runway pair (VAMSYS) — specific designator not confirmed 🟧 |
| 21L | 3,100 × 45 m | Asphalt / PCN not published 🟧 | Not published / verify | Not published / verify | Not published / verify | Not published / verify | Reciprocal of 03R |

*Source: OurAirports and Wikipedia (runway dimensions/surface — "two 3,100 m runways," retrieved 2026-07-26); ENAIRE eAIP AD 2 GCLP not directly reachable this pass (JavaScript-frameset access issue) — declared distances, PCN and closely-spaced-parallel operating status are open items (§18).*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Gran Canaria ATIS | 118.6 | Not confirmed | 🟧 |
| Delivery | Not confirmed | — | — | 🟧 |
| Ground | Gran Canaria Ground | 121.7 | Not confirmed | 🟧 |
| Tower | Gran Canaria Tower | 118.3 | Not confirmed | 🟧 |
| Approach | Gran Canaria Aproximación | 120.9 | Not confirmed | 🟧 |
| Centre / FIR | Canarias (GCCC) FIR/UIR (ENAIRE) | Per current AIRAC | H24 (assumed) | No dedicated Canarias FIR brief exists — see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) for the nearest general reference and §18 for the flagged gap |

*Source: OurAirports frequency data (retrieved 2026-07-26) — treat as 🟧 pending a live-AIRAC/primary-AIP cross-check; Delivery frequency not found in reachable sources.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| ILS (CAT III) | Not confirmed | Not confirmed | Not confirmed | Reported via VAMSYS/company data on one runway of the pair; ident, frequency and exact runway not confirmed from a primary source 🟧 |
| VOR/DME | Not confirmed | Not confirmed | Not confirmed | 🟧 |

*No navaid table was found in reachable public sources this pass — pull the current-AIRAC navaid list at planning; see §18.*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) assumed — confirm no local override.
- **Preferential runway logic:** Persistent **NE trade wind (alisios)** climatologically favours **RWY 03** operations; RWY 21 used when wind dictates. Not sourced from a primary AIP configuration table. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | Notes |
|---|---|---|
| 03L | Not confirmed 🟧 | Pull current-AIRAC approach list at planning |
| 03R | ILS CAT III reported (VAMSYS) — not confirmed from primary source 🟧 | Pull current-AIRAC approach list; confirm sub-category |
| 21L | Not confirmed 🟧 | Pull current-AIRAC approach list at planning |
| 21R | Not confirmed 🟧 | Pull current-AIRAC approach list at planning |

- **STARs (names only):** Not confirmed in reachable research pass. 🟧
- **LVP:** CAT III trigger conditions not detailed this pass — likely tied to calima/dust or low-cloud events; not independently sourced. 🟧
- **Missed approach watch-items:** The interior massif (~1,949 m, ~20 NM inland) is the relevant terrain consideration for any routing that isn't a direct coastal transition; otherwise the driver is traffic re-sequencing among mixed international-jet and inter-island-turboprop traffic.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed. 🟧
- **ATC slot / CTOT & clearance:** Not confirmed — not expected to carry heavy EUROCONTROL flow regulation at this traffic profile, but not independently sourced. 🟧
- **De-icing:** **NIL** — the sub-tropical Canary Islands climate makes de-icing a non-factor at this field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed. 🟧
- **Night noise / dB limits:** Not confirmed. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not confirmed — no widebody/Code-E-specific stand data found in reachable sources. 🟧 | 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not confirmed — the closely-spaced parallel-runway pair likely affects taxi routing between stands and the active runway; confirm with Ground/Apron on the day.
- **Hot spots / tight taxiways:** Not confirmed in detail; the closely-spaced parallel-runway crossing/taxi interaction is a plausible caution point pending confirmation. 🟧
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Sub-tropical, trade-wind-moderated climate with very stable year-round temperatures (typically 18–27°C); **persistent NE trade wind (alisios)** dominates the wind climatology.
- **Seasonal hazards:** **Persistent NE trade winds** with seasonal intensity variation; periodic **Saharan dust intrusions ("calima")** that can sharply reduce visibility, general Canary-Islands-wide phenomenon not independently dated for GCLP this pass 🟧; terrain-induced turbulence/gust potential under strong-wind conditions given the adjacent volcanic massif.
- **Local effects:** Bay of Gando coastal exposure combined with wind channelling/acceleration effects from the adjacent interior massif.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. given the closely-spaced parallel pair), navaid U/S, CAT III equipment status, lighting, obstacle/crane, RFF downgrade, calima/visibility advisories, GPS/RAIM. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Destination / network spoke** — not a K Global base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates **GCFV** (Fuerteventura), **GCRR** (Lanzarote), **GCTS** (Tenerife South) `[VAMSYS mirror 2026-07-26]` — no OM C briefs exist yet for any of these fields. Note: as fellow Canary Islands fields, these alternates are potentially subject to the **same regional trade-wind/calima weather system simultaneously** — a systemic weather-correlation risk worth flagging at planning rather than assuming independent alternate weather. 🟧
- **Fuel-uplift notes:** Jet A-1 assumed available as a major AENA international field; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (3,100 m per runway) non-limiting for any K Global type at normal weights. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No type-specific field-length or elevation consideration for any K Global type at GCLP's 3,100 m runway pair. The relevant fleet-aware note is **CAT III equipage/currency** for any type/crew planning a low-visibility approach here — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **ENAIRE eAIP AD 2 GCLP** was not directly reachable this pass (JavaScript frameset) — nearly every AIP-primary figure below (declared distances, PCN, frequencies beyond ATIS/Ground/Tower/Approach, navaid idents, RFF category, hours, SIDs/STARs/approaches, take-off minima) needs a live-AIP or current-AIRAC cross-check.
- **No dedicated Canarias (GCCC) FIR brief exists** in the OM C Airspace library — this is a standing library gap that should be closed ahead of further Canary Islands network build-out, not merely a per-field open item.
- **CAT III sub-category and specific runway designator** — reported via VAMSYS/company data but not confirmed from a primary AIP table.
- **Closely-spaced parallel-runway independent/dependent operating status** — not confirmed.
- Curfew/slot-coordination status, RFF category, PCN, and navaid idents/frequencies.
- SID/STAR names and take-off minima — pull the live current-AIRAC procedure list before use.
- Handling agent(s) and stand/gate assignment for our operation.
- Seasonal calima (Saharan dust) timing/frequency specific to GCLP — general Canary Islands phenomenon, not independently dated for this field.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP España (ENAIRE), AD 2 GCLP** — landing page https://aip.enaire.es/AIP/ attempted 2026-07-26; renders as a JavaScript frameset in a raw fetch and could not be retrieved directly this pass. Flagged for a future browser-based re-attempt per the source register guidance on JS-gated eAIPs.
- OurAirports — https://ourairports.com/airports/GCLP/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency cross-check.*
- Wikipedia — "Gran Canaria Airport" — https://en.wikipedia.org/wiki/Gran_Canaria_Airport (retrieved 2026-07-26). *Runway history/count, hub role (West Africa/Atlantic isles), base carriers.*
- AENA — Gran Canaria Airport — https://www.aena.es/en/gran-canaria.html (retrieved 2026-07-26). *Operator reference — not deep-linked to AIP data this pass.*
- [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) (retrieved 2026-07-26). *Confirms Canarias UIR FL305–FL660 exists within ESPORTFRA but does not brief the Canarias/GCCC FIR itself — cited to substantiate the flagged library gap.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
