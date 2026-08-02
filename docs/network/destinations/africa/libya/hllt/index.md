# HLLT — Tripoli International · Airport Briefing

**HLLT / TIP** · Qasr bin Ghashir, Tripoli, Libya · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> 🟥 **STANDING CAUTION — NON-OPERATIONAL AERODROME.** Tripoli International (HLLT) has been **closed / non-operational since 2014** following conflict damage; Libyan civil and commercial traffic uses **Mitiga International (HLLM)** instead. This field is carried in the pack as **reference/standby data only — not a normally usable aerodrome**. Libya remains a conflict-affected state with restricted and changing airspace (EASA Conflict Zone Information Bulletin, FAA advisories, reported GPS interference in the wider region) — **current airspace status, NOTAMs, overflight/landing permits and security guidance must be independently verified before any planning that touches Libyan territory or the Tripoli FIR (HLLL)**, regardless of anything stated below. See the [Africa Airspace Briefing](../../../../airspace/africa.md) §9 for the Tripoli FIR conflict-zone geometry.

> **Read-me:** Planning aid for the sim, not a chart. The primary state source (AIP Libya / LYCAA) was not reachable during this build; static data below is cross-checked public data (OurAirports, SkyVector, Wikipedia) plus public conflict-zone advisories — treat every figure as 🟧 pending primary-source and current-status verification. Approaches/SIDs/STARs, where referenced, are historical/by-name only. Live weather/NOTAMs are never stored here (§14/§15). Open 🟧 items are in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 32°39′49″N 13°09′33″E (32.6636, 13.1592) `[Wikipedia/GCM; SkyVector: N32°39.82′/E13°9.55′ — consistent]` 🟧 |
| Field elevation | **263 ft / 80 m AMSL** `[Wikipedia; SkyVector]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+2 (EET) year-round — Libya has observed no DST since 2013 🟧 |
| Runway(s) | **09/27** 3,600 × 45 m (11,811 × 148 ft), hard surface · **18/36** 2,524 × 45 m (8,281 × 148 ft), surface not confirmed `[SkyVector]` — **reference geometry only, see §7** |
| Preferential runway | Not applicable — field non-operational; no current preferential-runway logic published |
| Longest LDA | Not published / verify — assume ≤3,600 m on 09/27 pending confirmation 🟧 |
| Approaches | Not published / verify — historical navaid set at §9 is of unconfirmed current serviceability 🟧 |
| RFF category | Not published / verify — no current RFF service confirmed 🟥 |
| Control type | Not published / verify — no current live ATS confirmed 🟥 |
| Elevation class | Near sea-level coastal plain — not hot-and-high; not a performance driver **if** the field were ever usable |
| Special-airport status | 🟥 **CLOSED / non-operational since 2014** — standby/reference only, see §5 |
| Customs / PoE | Not applicable — no current civil operation |
| K Global category | **Not set** 🟧 `[VAMSYS mirror 2026-07-26]` |
| K Global base | No |
| Company preferred alternates | **HLLM, DTTJ, LICD** `[VAMSYS mirror 2026-07-26]` — plain-text reference, see §16 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat coastal plain at the field itself; no close-in high terrain reported. Not independently re-verified against a primary chart. |
| Runway length vs fleet perf | 🟥 | **Moot while the field is closed** — the aerodrome is not usable regardless of runway length. If ever reactivated, the reported 09/27 (3,600 m) would be non-limiting for K Global widebody types on paper, but current pavement condition post-2014 damage (and reported 2025 partial resurfacing) is unverified. |
| Approach availability / minima | 🟧 | No current approach/minima data found; historical navaid set (§9) of unconfirmed serviceability. |
| Airspace / traffic / control | 🟥 | **Tripoli FIR (HLLL) is an active conflict-zone advisory area** — EASA CZIB restricts operations below FL320 in transit; Safe Airspace lists Libya at its highest risk tier. See §3.2 and the [Africa Airspace Briefing](../../../../airspace/africa.md) §9. |
| Weather / seasonal hazard | 🟧 | Mediterranean coastal climate; seasonal **ghibli (sirocco)** hot dry southerly wind brings dust/sand and reduced visibility — general regional climatology, not field-specific confirmed. |
| Curfew / slots / hours | 🟥 | Not applicable — no scheduled operations; field closed. |
| RFF category vs our types | 🟥 | Not published — no current RFF service confirmed. |
| Fuel availability | 🟥 | Not published — assume **unavailable** given closure; do not plan uplift here. |
| Customs / handling / security | 🟥 | Not published — assume **non-functional** given closure and conflict-affected status of the country. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
HLLT sits at 263 ft AMSL on the flat coastal plain south of Tripoli city (Qasr bin Ghashir); the Jabal Nafusa highlands lie well inland/south of the field. No close-in high terrain is reported near the aerodrome itself. This is not independently re-verified against a primary MSA chart — treat as a non-factor pending confirmation, not as a cleared item.

### 3.2 Airborne conflict / traffic 🟥
The field lies within the **Tripoli FIR (HLLL)**, which is carried as a **conflict-zone advisory area**: the EASA Conflict Zone Information Bulletin for Libya (CZIB-2017-02R20, extended to 31 JAN 2027) states **no operations below FL320**, with transit permitted only at/above FL320 via the bi-directional routes M999 (ZARZAITINE–SEBHA) and G655/M214 (SEBHA–GARIN); Safe Airspace carries Libya at its highest ("do-not-fly") risk tier. Coastal-airport operations (which would include any approach/departure at HLLT) are described as viable only under strict military/ATC coordination conditions that are not independently confirmed here. GPS interference has been reported across parts of the wider Eastern Mediterranean/North Africa conflict theatre — treat GNSS-dependent procedures with caution and cross-check conventional navaids where usable. See the [Africa Airspace Briefing](../../../../airspace/africa.md) §9 for the full picture; **re-verify live at every planning cycle**.

### 3.3 Runway excursion 🟧
Reported historical dimensions (09/27: 3,600 × 45 m hard surface; 18/36: 2,524 × 45 m, surface unconfirmed) are pre-2014 reference figures. The airport sustained heavy damage in the 2014 Battle of Tripoli Airport (reported ~90% of facilities and ~20 aircraft destroyed); pavement condition, lighting, and any subsequent partial resurfacing work (a 2025 press report describes a first asphalt layer being laid) are **unconfirmed and not usable as current declared-distance data**.

### 3.4 Weather threat 🟧
Mediterranean coastal climate with hot, dry summers and mild, wetter winters. The regional **ghibli (sirocco)** — a hot, dry, dust-laden southerly wind — is the standout seasonal hazard across Libya, capable of dropping visibility sharply; no HLLT-specific frequency/severity statistic was found in this pass. See §14.

### 3.5 Operational considerations 🟥
The dominant operational fact is that **HLLT is not a usable aerodrome under current conditions**. Do not plan it as a live destination, alternate, or technical stop without (a) independently verified reopening/reactivation, (b) current overflight/landing permits, and (c) current security clearance through company/state channels. The secondary consideration is Libya's standing conflict-zone/overflight-risk status generally, which governs any operation anywhere near Libyan airspace, not just at this specific field.

---

## 4. Cautions & Warnings

- 🟥 **HLLT is closed / non-operational since 2014** — do not plan it as a working aerodrome. Tripoli traffic uses **Mitiga (HLLM)** instead.
- 🟥 **Tripoli FIR (HLLL) is a conflict-zone advisory area** — EASA CZIB restricts transit below FL320; confirm current status before any routing near Libyan airspace.
- 🟧 Reported GPS interference in the wider conflict-affected region — do not rely solely on GNSS; cross-check conventional navaids where available and current.
- 🟧 All runway, navaid and frequency data below is **pre-closure / historical reference** — none of it is confirmed current or serviceable.
- 🟥 No confirmed fuel, customs, handling, or RFF service — do not plan any operational dependency on this field.
- 🟧 Overflight/landing permits and security clearance for Libya generally carry lead-time and are subject to change — confirm current requirements every operation.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** 🟥 **CLOSED / non-operational since 2014** — not operator-categorised as an active special airport; the standing category here is "reference/standby only, do not plan for use." VAMSYS route register carries HLLT for Tripoli with category **not set** 🟧.
- **Crew-qualification gate:** Not applicable while the field is closed. Any future reactivation would require a dedicated conflict-zone/special-airport briefing and command-level approval before crewing a Libyan operation.
- **Operating restrictions / bans:** Do not plan HLLT as an operational destination/alternate absent verified reopening, current overflight/landing permits, and current security clearance. Tripoli FIR (HLLL) transit is restricted below FL320 per EASA CZIB — see §3.2. 🟥
- **Overflight / entry / permits:** 🟥 Libya generally requires overflight/landing permits with lead-time in normal circumstances; conflict-zone status adds a security-clearance layer. Confirm the current requirement and validity before any operation touching Libyan airspace or territory — a permit or clearance gap is a no-go.
- **Operations notes:** Libyan Civil Aviation Authority (LYCAA) is the state authority of record; its public AIP was not reachable for this build (§ Sources). VAMSYS mirror preferred alternates for this destination: **HLLM, DTTJ, LICD** `[VAMSYS mirror 2026-07-26]`.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify — no current live ATS confirmed | 🟥 |
| AD operating hours | Not applicable — field closed to scheduled civil ops | 🟥 |
| Night / curfew restrictions | Not applicable | 🟥 |
| RFF category | Not published / verify | 🟥 |
| Fuel | Not published / verify — assume unavailable | 🟥 |
| PCN | Not published / verify | 🟧 |
| Customs | Not applicable — no current civil operation | 🟥 |
| Handling / FBO | Not published / verify — assume unavailable | 🟥 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 09 | 3,600 × 45 m (11,811 × 148 ft) | Hard surface (composition not confirmed); PCN not published | Not published | Not published | Not published | Not published | Pre-2014 reference geometry; current pavement condition unverified 🟧 |
| 27 | 3,600 × 45 m (11,811 × 148 ft) | Hard surface (composition not confirmed); PCN not published | Not published | Not published | Not published | Not published | Same runway, reciprocal end |
| 18 | 2,524 × 45 m (8,281 × 148 ft) | Surface not confirmed | Not published | Not published | Not published | Not published | Secondary runway; existence/orientation per SkyVector only, not cross-checked against a primary source 🟧 |
| 36 | 2,524 × 45 m (8,281 × 148 ft) | Surface not confirmed | Not published | Not published | Not published | Not published | Same runway, reciprocal end |

*Source: SkyVector airport data page (retrieved 2026-07-26); OurAirports (retrieved 2026-07-26, page did not return runway-level detail at this pass). No declared distances (TORA/TODA/ASDA/LDA) or PCN were found in any reachable public source — treat all as unpublished pending a primary AIP. The task brief describes a "single 09/27" runway with 18/36 to be verified; public data corroborates **both** runways existing, but 18/36's surface and current usability are unconfirmed. All distances in metres/feet as shown.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Tripoli ATIS | 127.00 | Not published / historical only | 🟧 Pre-closure reference figure — no current live service confirmed |
| Delivery | Not published | — | — | 🟧 |
| Ground | Tripoli Ground | 120.10 | Not published / historical only | 🟧 |
| Tower | Tripoli Tower | 118.10 / 120.10 | Not published / historical only | 🟧 |
| Approach | Tripoli Approach | 124.00 | Not published / historical only | 🟧 |
| Centre / FIR | Tripoli FIR (HLLL) | Per current AIP — not sourced this pass | — | See [Africa Airspace Briefing](../../../../airspace/africa.md) §9 |

*Source: SkyVector airport communications data (retrieved 2026-07-26) — these are legacy/historical entries carried in a public database; given the field's closure since 2014, **none of these frequencies are confirmed current or staffed**. Do not rely on them for any live operation.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | TPI (Tripoli) | 114.50 | Not published / historical only | 🟧 A public crowd-comment (SkyVector, 2020) disputes a since-superseded 114.60 figure seen in some databases — **114.50 is the value on the current SkyVector record**, unconfirmed against a primary source |
| VOR | ABU (Abu Argub) | 115.10 | Not published | 🟧 ~12 NM from field |
| VOR | MTG (Mitiga) | 113.40 | Not published | 🟧 ~15 NM from field — serves HLLM |
| VOR | ZAW (Zawia) | 117.70 | Not published | 🟧 ~27 NM from field |
| NDB | G (Tripoli) | 365 kHz | Not published | 🟧 |
| NDB | D (Tripoli) | 435 kHz | Not published | 🟧 |
| NDB | PE (Gazala Tripoli) | 390 kHz | Not published | 🟧 |
| NDB | TW (Ghararah Tripoli) | 301 kHz | Not published | 🟧 |

*Source: SkyVector airport navaid data (retrieved 2026-07-26). No ILS or other precision-approach navaid was found published for HLLT in reachable sources. Given the field's non-operational status since 2014, current serviceability of any of the above is unconfirmed — treat as historical reference only.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Not applicable — no current published procedure.
- **Preferential runway logic:** Not applicable — field non-operational.
- **Approaches (names only — verify minima on current AIRAC charts):** No approach procedure could be confirmed in reachable public sources for this pass. 🟧

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| — | Not published / verify | — | — | No current procedure confirmed |

- **STARs (names only):** Not published / verify. 🟧
- **LVP:** Not applicable.
- **Missed approach watch-items:** Not applicable — no current procedure to reference.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify. 🟧
- **RNP / climb-gradient requirements:** Not published / verify.
- **Take-off minima:** Not applicable — no current procedure.
- **Start-up / push-back:** Not applicable — field non-operational.
- **ATC slot / CTOT & clearance:** Not applicable.
- **De-icing:** Not applicable — Libyan coastal climate; not a relevant consideration even were the field active.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not applicable / not published.
- **Night noise / dB limits:** Not applicable.
- **Engine run-up restrictions:** Not published / verify.
- **Reverse thrust / idle-reverse policy:** Not published / verify.

---

## 13. Ground operations

- **Stands for our types:** Not applicable — the passenger terminal (a five-storey, ~33,000 m² building) was reported ~90% destroyed with roughly 20 aircraft destroyed in the 2014 fighting; current apron/stand condition is unverified. 🟥
- **Push-back:** Not published / verify.
- **Standard taxi routes:** Not published / verify.
- **Hot spots / tight taxiways:** Not published / verify.
- **Follow-me:** Not applicable.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean coastal climate — hot, dry summers; mild, wetter winters.
- **Seasonal hazards:** The **ghibli (sirocco)** — a hot, dry, dust-laden southerly wind affecting Libya and the wider Maghreb, capable of sharply reducing visibility — is the standout seasonal hazard; general regional climatology, no field-specific frequency data found this pass.
- **Local effects:** None field-specific confirmed beyond the general coastal-plain/ghibli picture above.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here — and in any case, no confirmation was found this pass that HLLT currently issues live METAR/TAF given its closed status.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. For Libya specifically, also check: **ICAO Conflict Zone Information Repository (CZIR), EASA CZIB, Safe Airspace, OPSGROUP conflict-zone bulletins, and any FAA prohibition/restriction notice for Libyan airspace** — these govern whether any operation near HLLT or the Tripoli FIR is viable at all, ahead of the normal runway/navaid/lighting NOTAM check. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** **Not used** — reference/standby entry only. HLLT is **not planned as a live destination, alternate, or technical stop** under current conditions; it appears in the K Global route register (VAMSYS lists HLLT for Tripoli) as a mapped point, not an operational field.
- **Nearest suitable alternates:** Company preferred alternates **HLLM, DTTJ, LICD** `[VAMSYS mirror 2026-07-26]` — plain ICAO reference, not independently distance/suitability-verified this pass. Mitiga (HLLM) is the airport actually serving Tripoli traffic (~15 NM from HLLT per SkyVector bearing/distance data); DTTJ (Djerba-Zarzis, Tunisia) and LICD (Lampedusa, Italy) sit across the western/northern Mediterranean approach to Libya. Confirm suitability, runway/RFF adequacy and current minima before ever planning against any of these.
- **Fuel-uplift notes:** Not published / verify — assume **no fuel uplift available** at HLLT under current conditions. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Not applicable while the field is non-operational; see [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference should the field ever be reactivated.

---

## 17. Fleet-specific notes (optional)

- No fleet-specific consideration applies while the field is closed/non-operational. If HLLT is ever reactivated and considered for network use, re-run this brief against the primary AIP and reassess type-by-type against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) before any operational commitment.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Current operational status** — confirm whether HLLT remains fully closed, partially reactivated, or under active reconstruction (a September 2025 press report describes a first asphalt layer being laid on the runway; status since is unconfirmed).
- **Primary AIP source** — AIP Libya (LYCAA) was not reachable during this build; re-attempt via a browser session and update all sourced fields once available.
- **Declared distances (TORA/TODA/ASDA/LDA) and PCN** — not found in any reachable public source.
- **RWY 18/36 existence/orientation/surface** — carried from SkyVector only; not cross-checked against a primary source.
- **All communications frequencies and navaid idents/frequencies** — legacy/historical entries of unconfirmed current serviceability.
- **RFF category, ATS hours, fuel, customs, handling** — none confirmed; all assumed unavailable given closure.
- **Current Tripoli FIR (HLLL) conflict-zone status** — re-check live every operation per the [Africa Airspace Briefing](../../../../airspace/africa.md) §9 (EASA CZIB, Safe Airspace, ICAO CZIR, OPSGROUP).
- **FAA-specific restriction/prohibition notice for Libyan airspace** — referenced generically in this pass; exact current wording/scope not independently retrieved.
- **GPS interference reports for the Libya/Mediterranean area** — referenced generically; no field-specific incident data retrieved this pass.
- **Overflight/landing permit current requirements and lead-time** — not independently sourced this pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- **AIP Libya (LYCAA)** — not reachable during this build; primary source of record once accessible. 🟧
- Wikipedia — "Tripoli International Airport" — https://en.wikipedia.org/wiki/Tripoli_International_Airport (retrieved 2026-07-26). *Closure history, 2014 Battle of Tripoli Airport, terminal damage, reconstruction status.*
- OurAirports — https://ourairports.com/airports/HLLT/ (retrieved 2026-07-26). *Cross-check — ARP/elevation; runway-level detail did not return at this pass.*
- SkyVector — https://skyvector.com/airport/HLLT/Tripoli-International-Airport (retrieved 2026-07-26). *Runway dimensions, communications frequencies, navaid data.*
- EASA — Conflict Zone Information Bulletin, Libya, CZIB-2017-02R20 — https://www.easa.europa.eu/en/domains/air-operations/czibs/czib-2017-02r20 (retrieved 2026-07-25, via companion Africa Airspace Briefing build). *No-ops-below-FL320 transit restriction.*
- Safe Airspace — Conflict Zone & Risk Database, Libya — https://safeairspace.net/libya/ (retrieved 2026-07-25, via companion Africa Airspace Briefing build). *Highest-risk-tier listing — re-check live.*
- [Africa Airspace Briefing](../../../../airspace/africa.md) — companion OM C document, Tripoli FIR (HLLL) conflict-zone geometry (§9).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from public data (closed/conflict field, verification pending); 4-page pack. |
