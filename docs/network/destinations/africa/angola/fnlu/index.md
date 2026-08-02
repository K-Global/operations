# FNLU — 4 De Fevereiro · Airport Briefing

**FNLU / LAD** · Luanda, Angola · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public-source/VAMSYS build; **field closed to scheduled commercial operations since 1 March 2026** — see §1/§5

> **Read-me:** Planning aid for the sim, not a chart. 🟥 **FNLU is CLOSED to scheduled commercial/civil traffic as of 1 March 2026** — all airline operations transferred to **FNBJ (Dr. António Agostinho Neto International Airport)**, ~40 km SE of Luanda. This brief is built anyway per the assigned task (the field remains a real, recently-active airport with a long operating history, and legacy VAMSYS/route data may still reference it) — **every operational use of FNLU must be reconciled against current VAMSYS and the closure status before being relied on.** Static data is drawn from public cross-check sources — a primary Angola AIP (ENANA) page was not independently reachable this pass. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed**. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| **Operational status** | 🟥 **CLOSED to all scheduled commercial/civil airline operations since 1 March 2026** — transfer of all airline operations to **FNBJ (Dr. António Agostinho Neto Intl)**, ~40 km SE of Luanda in Icolo e Bengo Province, completed that date, per a public Angolan news source. See §5 and §18. |
| ARP (lat/long) | 8°51′30″S / 13°13′52″E (-8.85837, 13.23120) `[OurAirports, retrieved 2026-07-25]` |
| Field elevation | **243 ft / 74 m AMSL** `[OurAirports]` |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+1 (WAT, no DST) |
| Runway(s) | 🟧 **Two runways found in public data — corrects the task's "single 05/23" anchor:** **05/23**, 3,716 × 45 m asphalt, lighted, **RWY 23 threshold displaced 500 ft (152 m)**; **07/25**, 2,600 × 60 m asphalt, lighted `[OurAirports, retrieved 2026-07-25]`. Given the field's closure to scheduled commercial ops (above), current usable/open runway status is unconfirmed and effectively moot for planning purposes. |
| Preferential runway | Not published / verify; not applicable given closure 🟧 |
| Longest LDA | 3,716 m (05/23) minus the 152 m RWY 23 displacement where landing on 23; 07/25 shorter at 2,600 m — not independently split TORA/TODA/ASDA this pass, see §7 🟧 |
| Approaches | Not confirmed in reachable sources this pass 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Not confirmed — procedural/non-radar is the continental default assumption (see [Africa Airspace brief](../../../../airspace/africa.md) §3) 🟧 |
| Elevation class | Near sea-level (243 ft) — **not** hot-and-high |
| Special-airport status | 🟥 **Closed to scheduled commercial traffic** (above) is the field's defining current-day status — this supersedes any other category consideration. |
| Customs / PoE | Historically yes (Angola's former principal gateway, 5.6M pax in 2018); current PoE function has moved to FNBJ. Not applicable for planning a new operation to FNLU. 🟧 |
| K Global category | **Not set** `[VAMSYS mirror 2026-07-26]` — 🟧 VAMSYS `category` field is null for this airport. Note this is doubly moot: (a) the H/L/M/S/R category scheme is not yet defined project-wide (the company Knowledge base B-008), and (b) the field is closed to commercial ops (above), so a category assignment has no near-term operational meaning. |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| K Global suitable alternate | 🟥 **Not usable** — a closed field cannot function as a suitable alternate; if VAMSYS still carries FNLU as an active alternate/destination anywhere in the K Global network, that is stale data requiring correction (see §18). |
| Company preferred alternates | **FNBJ** (Dr. António Agostinho Neto Intl, Angola — Luanda's current operating gateway), **FZAA** (Kinshasa, DRC), **FCBB** (Brazzaville, Republic of the Congo) `[VAMSYS mirror 2026-07-26]` — 🟧 note FNBJ is not really a peer "alternate" to FNLU so much as **the field that has replaced it entirely** as Luanda's operating gateway; see §5. |
| Taxi-in / taxi-out (VAMSYS) | Not published / verify 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Operational status | 🟥 | **Closed to scheduled commercial ops since 1 March 2026.** This is the single most important fact in this brief — see §5. |
| Terrain / CFIT | 🟩 | Luanda sits on the Atlantic coast at low elevation; no close-in high terrain relevant to the field. |
| Runway length vs fleet perf | 🟧 | 3,716 m (05/23) would be adequate for most K Global narrowbody/regional-widebody types **if the field were open** — not applicable given closure. |
| Approach availability / minima | 🟧 | Not confirmed; not applicable given closure. |
| Airspace / traffic / control | 🟧 | Luanda FIR (FNAN) per the [Africa Airspace brief](../../../../airspace/africa.md); not independently confirmed for FNLU specifically. |
| Weather / seasonal hazard | 🟧 | Coastal Angola — Benguela-current-moderated climate, cacimbo (cool, hazy dry season) fog/haze risk (§14); durable context only given closure. |
| Curfew / slots & operating restrictions | 🟥 | **The field's own "restriction" is total closure to scheduled commercial traffic**, not a curfew/slot regime in the conventional sense. |
| RFF category vs our types | 🟧 | Not applicable given closure. |
| Fuel availability | 🟧 | Not applicable given closure — see FNBJ for current Luanda fuel/handling planning. |
| Customs / handling / security | 🟧 | Historic PoE function has transferred to FNBJ; not applicable to FNLU. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
FNLU sits at 243 ft AMSL on the Angolan Atlantic coast at Luanda. There is no close-in high terrain bearing on arrival, departure or missed-approach paths. This is a non-issue field for terrain, but the point is moot in any case given the field's current closure to scheduled commercial operations (§5).

### 3.2 Airborne conflict / traffic 🟧
Not independently assessed this pass — historically Luanda's principal international gateway (5.6M passengers in 2018) would have carried substantial traffic density, but **all scheduled commercial traffic has now moved to FNBJ** (§5), so current traffic density at FNLU itself is presumed minimal/residual (non-scheduled, GA, or state use only) and unconfirmed.

### 3.3 Runway excursion 🟧
Public data records a **displaced threshold of 500 ft (152 m) on RWY 23** of the 05/23 runway — a genuine distance-usability consideration **if the field is ever used**. No contamination data found. This item is secondary to the field's overriding closure status (§5).

### 3.4 Weather threat 🟧
Coastal Angola sits in the cooler, drier belt created by the **Benguela current** (unlike the more classically equatorial climate of the DRC/Congo-Brazzaville fields in this pack); the defining seasonal feature is the **cacimbo** — a cool, persistently overcast/hazy dry season (roughly May–September) associated with coastal fog/mist and reduced visibility, contrasted with a warmer, wetter season (roughly October–April). No FNLU-specific fog-frequency statistic was found this pass. See §14.

### 3.5 Operational considerations 🟥
**The overriding operational consideration at this field is that it is closed.** Per a public Angolan news source (GiraNoticias, 2 March 2026, reporting the completion of the airline-operations transfer), **all airline operations were transferred to FNBJ (Dr. António Agostinho Neto International Airport) by 1 March 2026**, following a gradual, multi-year phase-out that began with the new airport's 2023 inauguration (first cargo flights December 2023, first scheduled passenger flight November 2024, and a steadily rising share of departures through 2025 as successive carriers — TAAG, Ethiopian, Qatar Airways, Air France, TAP, Turkish, Royal Air Maroc, ASKY and others — relocated their Luanda operations). **Any planning reference to "Luanda (FNLU)" in older route material, legacy stubs, or cached VAMSYS data is presumptively stale** and should be corrected to **FNBJ**. This brief is built to the assigned scope (FNLU specifically) but its primary operational message is the redirect to FNBJ.

---

## 4. Cautions & Warnings

- 🟥 **FNLU IS CLOSED TO SCHEDULED COMMERCIAL/CIVIL TRAFFIC (since 1 March 2026).** Do not plan, dispatch, or file for FNLU as an operating destination or alternate. The current Luanda gateway is **FNBJ**.
- **The task anchor of "single runway 05/23" does not match public data** — OurAirports/Wikipedia both record a **second runway, 07/25 (2,600 × 60 m)** — flagged as a discrepancy rather than silently corrected without note (§18).
- **RWY 23 has a 500 ft (152 m) displaced threshold** on the 05/23 runway — relevant only if the field is ever reactivated for any purpose.
- If any K Global VAMSYS record still shows FNLU as an active destination, alternate, or base, **treat it as stale and flag for correction** — see §18.
- Angola's coastal **cacimbo season (roughly May–September)** brings persistent haze/overcast and reduced visibility — durable regional context, not currently operationally relevant to a closed field.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** 🟥 **Closed to scheduled commercial operations since 1 March 2026** — this is the field's defining status, not a conventional "special airport" category. All airline traffic, per public sources, transferred progressively to **FNBJ (Dr. António Agostinho Neto International Airport)**, located ~40 km SE of Luanda in Icolo e Bengo Province (Bom Jesus municipality). FNBJ was officially inaugurated 10 November 2023; the transfer proceeded gradually (first cargo flight 19 Dec 2023; first scheduled passenger connection 10 Nov 2024; TAAG's international services moved Oct 2025; other carriers — Ethiopian (16 Dec 2025), Qatar Airways, Air France, TAP (1 Dec 2025 target), Turkish, Royal Air Maroc/ASKY (2 Feb 2026) — followed through late 2025/early 2026) and **completed by 1 March 2026**, per a public Angolan news report dated 2 March 2026.
- **Crew-qualification gate:** Not applicable — field closed to scheduled commercial ops.
- **Operating restrictions / bans:** 🟥 **Total closure to scheduled commercial/civil airline traffic.** Any residual use (state, GA, cargo-charter, emergency) is not confirmed in reachable sources.
- **Overflight / entry / permits:** Angola overflight/landing permit requirements are a standing item across African operations generally (see [Africa Airspace brief](../../../../airspace/africa.md) §9) — not specific to FNLU given its closure; confirm current requirements for **FNBJ** instead.
- **Operations notes:** ANS and airport operation historically provided by **ENANA E.P.** (Empresa Nacional de Exploração de Aeroportos e Navegação Aérea), Angola's state airports/ANS operator — Luanda FIR (FNAN) per the [Africa Airspace brief](../../../../airspace/africa.md). FNBJ was built primarily by Chinese contractors (initially China International Fund with Odebrecht, later Aviation Industry Corporation of China) and is described as the largest airport ever built by a Chinese enterprise outside China, designed for 15M passengers/year and 130,000 metric tons of cargo capacity; only one of its two runways (4,000 × 60 m and 3,800 × 60 m, 2.2 km apart) was reported in active use as of December 2025.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify; not applicable given closure | 🟧 |
| AD operating hours | Not applicable — field closed to scheduled commercial traffic | 🟥 |
| Night / curfew restrictions | Not applicable | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Not applicable — see FNBJ for current Luanda fuel planning | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | Historic PoE function transferred to FNBJ | 🟥 |
| Handling / FBO | Not applicable | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 05 | 3,716 × 45 m | Asphalt, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | |
| 23 | 3,716 × 45 m | Asphalt, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | ~3,564 m (3,716 m − 152 m displacement) 🟧 | **Threshold displaced 500 ft (152 m)** `[OurAirports]` |
| 07 | 2,600 × 60 m | Asphalt, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | 🟧 Not anticipated by the task's "single runway" anchor — see §18 |
| 25 | 2,600 × 60 m | Asphalt, lighted / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Reciprocal of 07 |

*Source: OurAirports (retrieved 2026-07-25), cross-checked against Wikipedia's "Quatro de Fevereiro Airport" article (both list two runways). No primary Angola AIP (ENANA) declared-distance table was reachable this pass. All distances in metres; note the field is closed to scheduled commercial operations regardless of runway data (§5).*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| Air/Ground | A/G Voice RDO | 129.5 MHz | Not published 🟧 | `[OurAirports]` |
| Approach | Not published | 119.1 MHz | Not published 🟧 | `[OurAirports]` |
| Ground | Not published | 121.9 MHz | Not published 🟧 | `[OurAirports]` |
| Tower | Not published | 118.1 MHz | Not published 🟧 | `[OurAirports]` |
| Centre / FIR | Luanda (FNAN), ENANA | Per current AIRAC | H24 (assumed) | See [Africa Airspace brief](../../../../airspace/africa.md) |

*Source: OurAirports frequency table (retrieved 2026-07-25) — tier-4. Given the field's closure to scheduled commercial ops, treat all values as historical/reference only, not operationally current. 🟧*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR-DME | VNA (Luanda) | 112.70 MHz | Not published 🟧 | On field, ~1.2 NM NE `[OurAirports]` |
| NDB | LU (Luanda) | 258 kHz | Not published 🟧 | ~5.8 NM NE |

*No ILS/approach-aid data found in reachable sources. Given the field's closure, current navaid serviceability is unconfirmed and should not be assumed. 🟧*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Not applicable — field closed to scheduled commercial arrivals.
- **Preferential runway logic:** Not applicable. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 05/23/07/25 | Not confirmed in reachable sources 🟧 | — | — | Not applicable — field closed to scheduled commercial ops (§5) |

- **STARs (names only):** Not confirmed; not applicable given closure. 🟧
- **LVP:** Not published / verify; not applicable. 🟧
- **Missed approach watch-items:** Not applicable given closure.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed; not applicable given closure. 🟧
- **RNP / climb-gradient requirements:** Not confirmed for FNLU specifically — see the general [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) and the [Africa Airspace brief](../../../../airspace/africa.md) §4 for the continental default; not applicable given closure. 🟧
- **Take-off minima:** Not applicable. 🟧
- **Start-up / push-back:** Not applicable. 🟧
- **ATC slot / CTOT & clearance:** Not applicable — field closed to scheduled commercial traffic. 🟧
- **De-icing:** **NIL** — tropical/subtropical coastal field.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify; not applicable given closure. 🟧
- **Night noise / dB limits:** Not applicable. 🟧
- **Engine run-up restrictions:** Not applicable. 🟧
- **Reverse thrust / idle-reverse policy:** Not applicable. 🟧

---

## 13. Ground operations

- **Stands for our types:** Historically a major international gateway (5.6M pax in 2018) with a corresponding stand/terminal footprint; not applicable for current dispatch planning given the closure. 🟧
- **Push-back:** Not applicable. 🟧
- **Standard taxi routes:** Not applicable. 🟧
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Follow-me:** Not applicable. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Coastal Angola, moderated by the cold **Benguela current** — cooler and drier than the classically equatorial climate of the DRC/Congo-Brazzaville fields in this pack.
- **Seasonal hazards:** **Cacimbo** (cool, persistently hazy/overcast dry season, roughly May–September) brings coastal fog/mist and reduced visibility; the warmer, wetter season runs roughly October–April. No FNLU-specific fog-frequency statistic found this pass. Durable regional context only, given the field's closure.
- **Local effects:** Coastal setting on the Atlantic; sea breeze/coastal fog interaction plausible but not independently confirmed for this field.

> **Live weather — pull at planning (T-2h):** not applicable to FNLU given closure; see FNBJ for current Luanda weather planning.

---

## 15. NOTAMs

> **Not applicable in the durable sense** — FNLU is closed to scheduled commercial operations. If any residual/emergency use of the field is ever contemplated, pull current NOTAMs and confirm actual field status (runway serviceability, navaid status, any partial reopening) before relying on anything in this brief. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** 🟥 **None — the field is closed to scheduled commercial operations and is not usable as a destination, alternate, or diversion field.** Any K Global route/alternate planning for Luanda should reference **FNBJ**.
- **Nearest suitable alternates:** As carried in VAMSYS for this build: **FNBJ** (Angola — the actual current Luanda gateway, not a true "alternate"), **FZAA** (Kinshasa, DRC), **FCBB** (Brazzaville, Republic of the Congo) `[VAMSYS mirror 2026-07-26]` — all cross-country; confirm suitability, runway/RFF adequacy and current minima per leg if genuinely needed.
- **Fuel-uplift notes:** Not applicable given closure. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Not applicable given closure. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for general reference if FNBJ planning is needed instead.

---

## 17. Fleet-specific notes (optional)

- Not applicable given the field's closure to scheduled commercial operations. Any Luanda-specific fleet/performance planning should be built against **FNBJ**, which is outside the scope of this brief.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- 🟥 **Confirm FNLU's closure status is reflected everywhere it should be in K Global's VAMSYS/route data** — if any active route, alternate list, or schedule still references FNLU rather than FNBJ, that is stale data requiring correction. This is the single highest-priority open item in this pack.
- **Runway count discrepancy** — the assigned task anchor stated "single 05/23"; public data (OurAirports, Wikipedia) both show **two runways** (05/23 and 07/25). Flagged and corrected in this brief with sourcing; not silently overridden.
- **Primary Angola AIP (ENANA AD 2 FNLU) could not be reached this pass** — declared distances beyond the displaced-threshold figure, RFF category, ATS hours, navaid/approach detail, SIDs/STARs and mag variation are all unconfirmed.
- **VAMSYS category field is null** — doubly moot given (a) the undefined H/L/M/S/R scheme (B-008) and (b) the field's closure.
- **A separate build for FNBJ (Dr. António Agostinho Neto Intl) does not exist in this pack** — if K Global's network requires an active Luanda gateway brief, it should be built against FNBJ, not FNLU; flagged here as a network-completeness gap, not addressed by this task.
- **Current physical/legal status of FNLU beyond "closed to scheduled commercial ops"** — e.g. whether any GA, state, or cargo-charter activity continues — not confirmed in reachable sources.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material may inform content but is not listed here.*

- OurAirports — https://ourairports.com/airports/FNLU/ , /runways.html , /frequencies.html , /closest-navaids.html (retrieved 2026-07-25). *ARP/elevation/runway/frequency/navaid cross-check — tier-4.*
- Wikipedia — "Quatro de Fevereiro Airport" — https://en.wikipedia.org/wiki/Quatro_de_Fevereiro_Airport (retrieved 2026-07-25). *History, runway data, closure date (1 March 2026), replacement by FNBJ.*
- Wikipedia — "Dr. António Agostinho Neto International Airport" — https://en.wikipedia.org/wiki/Dr._Ant%C3%B3nio_Agostinho_Neto_International_Airport (retrieved 2026-07-25). *FNBJ construction/opening/transfer timeline, runway data.*
- GiraNoticias — "Concluída transferência das operações das companhias aéreas para o novo aeroporto" (in Portuguese), 2 March 2026 — https://www.giranoticias.com/economia/2026/03/28136-concluida-transferencia-das-operacoes-das-companhias-aereas-para-o-novo-aeroporto-internacional.html (retrieved via Wikipedia citation, 2026-07-25). *Primary basis for the 1 March 2026 completion-of-transfer date.*
- [Africa Airspace brief](../../../../airspace/africa.md) — Luanda FIR (FNAN), RVSM/PBN, procedural/non-radar picture, seasonal hazards.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. Flags field closure to scheduled commercial operations (1 March 2026) and the runway-count discrepancy against the assigned task anchor. |
