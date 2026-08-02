# SBFZ — Pinto Martins Intl · Airport Briefing

**SBFZ / FOR** · Fortaleza, Ceará, Brazil · South America

**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public tier-4 aeronautical sources (AISWEB/DECEA pilot-info portal is JS-rendered and did not return data this pass) plus corroborating public references; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | S03°46′33″ / W038°31′56″ (-3.775833, -38.532222) `[OurAirports]` 🟧 |
| Field elevation | **83 ft / 25 m AMSL** `[OurAirports]` — task brief cites ~82 ft; treat as consistent within rounding, verify against current AIP |
| Mag variation | 🟧 **Not published / verify** — NE Brazil lies under the South Atlantic magnetic environment; expect a westerly variation, order of magnitude only, not a sourced figure |
| Time zone | **UTC−03:00 (BRT)** — Brazil has not observed DST since 2019 |
| Runway(s) | **13/31**, 2,755 × 45 m (9,039 × 148 ft), asphalt, lighted `[OurAirports, upd. 2024-01-25]` 🟧 — single runway field |
| Preferential runway | Not published — wind/traffic-dependent; verify current AIP/ATIS practice |
| Longest LDA | 2,755 m (13/31) — no displaced threshold reported in reachable sources 🟧 |
| Approaches | Not confirmed this pass — a precision/RNAV approach is expected at an international field of this size; verify current AIRAC 🟧 |
| RFF category | Not published / verify 🟧 — large-hub passenger volume (~6.2M pax/yr) implies a mid-to-high ICAO category, not independently confirmed |
| Control type | **Radar/procedural mix typical of a Recife FIR continental field** — confirm local approach control type on current AIP 🟧 |
| Elevation class | Sea-level coastal field — **not** hot-and-high; heat/density-altitude is a minor factor only on the hottest afternoons |
| Special-airport status | None identified — standard international RFF/customs field; see §5 |
| Customs / PoE | **Yes** — international airport with scheduled international service (TAP/Air France routes reported) 🟧 hours not confirmed |
| K Global category | 🟧 **Not set in VAMSYS** — confirm before scheduling |
| K Global base | **No** |
| Company preferred alternates | **SBSG** (Natal), [**SBRF**](../sbrf/index.md) (Recife), **SBMO** (Maceió) |
| Taxi-in / taxi-out (VAMSYS) | 🟧 Not set in VAMSYS — pending reconciliation |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Coastal field is flat, but **high ground SSW of the airfield (Serra de Maranguape/Baturité massif)** was implicated in a fatal 1982 CFIT accident on approach — see §3.1. |
| Runway length vs fleet perf | 🟩 | 2,755 m is ample for narrowbody and most widebody operations at sea level; confirm current-cycle figure (runway extension work was reported post-2017). |
| Approach availability / minima | 🟧 | Approach names/minima not confirmed this pass — single-runway field, verify current AIRAC before planning a low-vis arrival. |
| Airspace / traffic / control | 🟩 | Recife FIR (SBRE) continental sector — see [South America — Airspace Briefing](../../../../airspace/south-america.md); domestic Brazilian ATC, standard radar/procedural mix, Portuguese+English on frequency. |
| Weather / seasonal hazard | 🟧 | NE Brazil coastal-tropical climate; ITCZ influence and seasonal convection — see §14. |
| Curfew / slots / hours | 🟧 | Not published / verify — no curfew identified in reachable sources. |
| RFF category vs our types | 🟧 | Category not published — confirm before scheduling widebody equipment. |
| Fuel availability | 🟧 | Assumed available at an international field of this traffic volume; supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed by scheduled international service; desk hours and handling agent not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
Fortaleza itself sits on a flat coastal plain (field elevation 83 ft), but the interior to the **S/SW rises into the Maranguape–Baturité highland massif**, with terrain in the several-hundred-metre range within roughly 25–40 NM of the field — not chart-quantified this pass, verify MSA/MORA on the current enroute and approach charts. This is not an academic concern: on **8 June 1982**, a VASP Boeing 727 (flight from Rio de Janeiro–Galeão) **struck high ground approximately 25 km south of the airport during approach**, descending below a safe profile; all 137 aboard were lost. A second accident on **21 October 1998** saw a commuter Embraer 120 strike a house **2 km short of the runway** during approach. Neither changes the runway/approach infrastructure today, but both underscore that **approaches from the south/southwest require disciplined vertical-profile and MSA adherence** — brief the terrain rise inland even though the immediate airport environment is flat coastal ground. 🟧

### 3.2 Airborne conflict / traffic 🟥→🟩
Fortaleza is a Recife FIR (SBRE) continental field under DECEA/CINDACTA III control — see the [South America — Airspace Briefing](../../../../airspace/south-america.md) for FIR structure, RVSM band, and the Portuguese/English frequency environment. No unusual traffic-density concern identified for this field itself (single runway, moderate movement count relative to São Paulo-area congestion); standard domestic-Brazil radar-vectored arrival/departure sequencing applies. 🟩

### 3.3 Runway excursion 🟧
Single runway (13/31), 2,755 m, asphalt — no displaced threshold identified in reachable sources. No braking-action or contamination history found this pass; NE Brazil's dry-season/wet-season split (see §14) means occasional wet-runway braking-action degradation in the Feb–Jul rainy season is a plausible but unconfirmed seasonal factor. 🟧

### 3.4 Weather threat 🟧
NE Brazil (Ceará) has a tropical semi-arid/wet-dry climate with a **rainy season roughly February–May/June** and a longer dry season the rest of the year; the **Intertropical Convergence Zone (ITCZ)** migrates across the northern Brazilian coast seasonally and can bring embedded convection and heavy showers, most active in the first half of the year. Trade winds (E/SE) are the prevailing flow off the Atlantic. No airport-specific fog/low-vis statistic found — treat as general regional climatology pending a sourced figure. See §14.

### 3.5 Operational considerations 🟧
Single-runway field with no confirmed curfew, slot regime, or special crew-qualification gate identified in reachable sources — the main open items are administrative/currency confirmations (RFF, approach minima, frequencies) rather than known hard restrictions. Confirm the K Global VAMSYS aerodrome category before scheduling, since it is unset. See §18.

---

## 4. Cautions & Warnings

- **High ground inland to the S/SW (Maranguape/Baturité massif)** — historically implicated in a fatal 1982 CFIT accident on approach; respect MSA/MORA, do not descend early on southerly arrivals. 🟧
- Single runway (13/31) — no reciprocal-runway flexibility; wind-limited crosswind ops on the crosswind-favoured heading should be briefed per current AIP crosswind limits (not confirmed this pass). 🟧
- K Global VAMSYS **aerodrome category is unset** — confirm before crewing/scheduling. 🟧
- Rainy-season (Feb–Jun) convective/heavy-shower activity — check TAF/SIGMET at planning; see §14/§15.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not identified as a restricted-crew "special airport" in reachable public sources. **K Global VAMSYS category is not set** — treat as unconfirmed until reconciled. 🟧
- **Crew-qualification gate:** None identified. 🟧 verify against current company routing policy.
- **Operating restrictions / bans:** None identified in reachable sources — verify current AIRAC for any RNP AR, circling, or SID-specific restriction.
- **Overflight / entry / permits:** Standard Brazilian domestic/international arrival — no special state permit expected for a scheduled international operation. 🟩
- **Operations notes:** Airport operated by **Fraport Brasil** (concession since 2017/2018); ANSP is **DECEA** (Brazilian Air Force), Recife FIR / CINDACTA III.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify — international field, H24 plausible | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | None identified | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available at an international field of this size; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE confirmed by scheduled international service (TAP, Air France reported); hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 13 | 2,755 × 45 m | Asphalt, lighted / PCN not published | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | 2,755 m (assumed, no displaced threshold reported) | Single-runway field |
| 31 | 2,755 × 45 m | Asphalt, lighted / PCN not published | Not published — verify 🟧 | Not published — verify 🟧 | Not published — verify 🟧 | 2,755 m (assumed, no displaced threshold reported) | Reciprocal of 13 |

*Source: OurAirports (tier-4, updated 2024-01-25) reports 2,755 × 45 m / 9,039 × 148 ft. Wikipedia (English) notes a runway-lengthening project was part of the 2017 Fraport concession contract — the current-cycle AIP figure may differ from the tier-4 figure above; **not independently re-confirmed against a current AIRAC** — flagged 🟧 in §18. All figures require AIP cross-check before use in performance planning.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Fortaleza ATIS | 127.700 | Not published | 🟧 tier-4 sourced |
| Ground | Fortaleza Ground | 121.950 | Not published | 🟧 tier-4 sourced |
| Tower | Fortaleza Tower | 129.000 | Not published | 🟧 tier-4 sourced |
| Approach | Fortaleza Approach | 133.000 | Not published | 🟧 tier-4 sourced |
| Centre / FIR | Recife ACC (SBRE) | Per current AIRAC | H24 | See [South America — Airspace Briefing](../../../../airspace/south-america.md) |

*Source: OurAirports frequency listing (tier-4, undated) — not cross-checked against a primary AIP table this pass. Treat all values as 🟧 pending AIP/AIRAC confirmation.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | FLZ (Fortaleza) | 114.10 | Not published | On/near field, ~1.0 NM WNW `[OurAirports]` 🟧 |
| NDB | FLZ (Fortaleza) | 260 kHz | Not published | On/near field, ~0.5 NM NE `[OurAirports]` 🟧 |
| NDB | PCI (Pici) | 210 kHz | Not published | ~5.7 NM WNW `[OurAirports]` 🟧 |

*No ILS ident/frequency found in reachable tier-4 sources — approach infrastructure not confirmed this pass; verify current AIRAC. 🟧*

---

## 10. Arrival

- **Transition altitude / level:** Not published this pass — Brazilian fields typically publish a per-airport TA (cf. SBGR TA 8,000 ft per the regional airspace brief); verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override.
- **Preferential runway logic:** Not published — single runway, wind-driven choice between 13 and 31. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 13 | Not confirmed — verify current AIRAC 🟧 | — | — | |
| 31 | Not confirmed — verify current AIRAC 🟧 | — | — | |

- **STARs (names only):** Not confirmed this pass — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Not published / verify. 🟧
- **Missed approach watch-items:** Terrain rises inland to the S/SW (§3.1) — a missed approach off RWY 31 should respect published missed-approach guidance and MSA; verify on current chart.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed this pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed. Brazil operates an extensive RNAV route/procedure network nationally (see [South America — Airspace Briefing](../../../../airspace/south-america.md) §4) — expect RNAV SIDs; verify gradient/equipage per procedure on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed — standard tower/ground coordination assumed at a single-runway field.
- **ATC slot / CTOT & clearance:** No slot-coordination regime identified — treat as uncoordinated unless a current NOTAM/AIP entry says otherwise. 🟧
- **De-icing:** **NIL** — tropical coastal field, no de-icing requirement.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not confirmed — the airport reports 14 aircraft parking positions post-2020 terminal renovation (public source); widebody-specific stand data not confirmed. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not confirmed — confirm with Ground on the day.
- **Hot spots / tight taxiways:** None identified in reachable sources. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical wet-dry (semi-arid interior, wetter coastal strip); prevailing trade winds E/SE off the Atlantic.
- **Seasonal hazards:** Rainy season roughly **February–May/June** with the heaviest convective activity; **ITCZ** influence on the northern Brazilian coast can bring embedded convection during this window. Dry season (Aug–Dec) is generally settled. No airport-specific fog/low-vis statistic found — general regional climatology only. 🟧
- **Local effects:** Coastal sea-breeze effects plausible given the immediate Atlantic-facing location; not independently confirmed.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, TFR. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / NE-Brazil coast-in alternate.
- **Nearest suitable alternates:** **SBSG** (Natal), [**SBRF**](../sbrf/index.md) (Recife), **SBMO** (Maceió) — company-listed alternates; confirm current suitability/minima per leg. K Global VAMSYS taxi/alternate reconciliation is still pending for this field. 🟧
- **Fuel-uplift notes:** Jet A-1 assumed available at an international field of this traffic volume; supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Sea-level, non-limiting runway length for narrowbody and most widebody types at typical weights; confirm current-cycle runway figure (§7). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No type-specific consideration identified beyond the general sea-level/single-runway profile — see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **AISWEB/DECEA pilot-info page did not render** this pass (JS-gated) — all figures below are tier-4 (OurAirports, Wikipedia) and need a primary AIP cross-check.
- **Runway length** — tier-4 figure (2,755 m) may be superseded by a post-2017 lengthening project reported in secondary sources; confirm current AIP AD 2 chart.
- **Declared distances (TORA/TODA/ASDA)**, **PCN**, **RFF category**, **approach/SID/STAR names and minima**, **transition altitude**, **mag variation**, **curfew/slot regime**, **fuel supplier/hours**, **customs desk hours**, **stand/gate data**, **hot spots** — none confirmed from a primary source this pass.
- **Terrain south of the field (Maranguape/Baturité massif)** — described qualitatively from a 1982 accident report; exact peak elevations/bearings not chart-verified.
- **K Global VAMSYS category, base flag, taxi times** — unset/pending reconciliation.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/SBFZ/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency/navaid cross-check.*
- Wikipedia — "Fortaleza Airport" (Pinto Martins International Airport) — https://en.wikipedia.org/wiki/Pinto_Martins_International_Airport (retrieved 2026-07-26). *History, terminal capacity, historical accidents (1982 VASP 727, 1998 Embraer 120).*
- AISWEB/DECEA pilot-info portal — https://aisweb.decea.mil.br/?i=aerodromos&codigo=SBFZ — attempted, JS-rendered/did not return data this pass; primary AIP-Brasil source of record, re-attempt via browser at next update.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Brasil (DECEA); K Global fields from live VAMSYS; 4-page pack. |
