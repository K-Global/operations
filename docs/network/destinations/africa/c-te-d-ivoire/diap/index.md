# DIAP — Félix-Houphouët-Boigny International · Airport Briefing

**DIAP / ABJ** · Port-Bouët, Abidjan, Côte d'Ivoire · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid, not a chart. Static data is drawn from public aeronautical sources (OurAirports, corroborating public references); the ASECNA/national eAIP for Côte d'Ivoire was not machine-reachable this session (JS-frameset/portal gating — see the source register) and primary-tier figures (declared distances, RFF, PCN, exact minima) are flagged 🟧 pending a direct AIP pull. Approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 5°15′41″N / 3°55′33″W (5.2614, -3.9263) `[OurAirports, retrieved 2026-07-26]` |
| Field elevation | **21 ft / 6 m AMSL** `[OurAirports; matches Navigraph navdata]` 🟧 — one Wikipedia infobox entry shows 95 ft/29 m; two independent tier-4 sources agree on 21 ft, treated as primary (§18) |
| Mag variation | Not published / verify 🟧 |
| Time zone | **UTC+0** (GMT, no DST — Côte d'Ivoire) |
| Runway(s) | **03/21 — 3,000 × 50 m** (9,843 × 164 ft), asphalt, lighted `[OurAirports]` — single runway |
| Preferential runway | None published 🟧 — single runway, wind-driven reversal only |
| Longest LDA | Not published / verify 🟧 — runway length 3,000 m; exact declared-distance breakdown not confirmed |
| Approaches | Not confirmed this pass 🟧 — verify current AIRAC for RWY 03 and 21 procedures |
| RFF category | Not published / verify 🟧 |
| Control type | 🟧 Not independently confirmed — Abidjan is a major West African gateway; regional pattern (per [Africa airspace brief](../../../../airspace/africa.md)) is terminal radar/ADS-B at major fields over a largely procedural en-route structure |
| Elevation class | Sea-level (21 ft), flat coastal/lagoon site — not hot-and-high 🟩 |
| Special-airport status | None published 🟧 |
| Customs / PoE | **Yes** — major international gateway; exact desk hours not confirmed 🟧 |
| K Global category | **R** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **DGAA** (Accra), **DNMM** (Lagos) `[VAMSYS mirror 2026-07-26]` — cross-country, plain-text reference only |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Flat coastal/lagoon site at Port-Bouët; no close-in high terrain. |
| Runway length vs fleet perf | 🟩 | 3,000 m is ample for narrow/medium-body network types; exact declared-distance table not yet confirmed (§7). |
| Approach availability / minima | 🟧 | Not confirmed this pass — pull current-AIRAC procedure list at planning. |
| Airspace / traffic / control | 🟧 | Major single-runway international gateway (21 airlines, ~2.3M pax/yr, 2023) — single-runway capacity constraint is the operative traffic-flow issue; control type not independently confirmed. |
| Weather / seasonal hazard | 🟧 | Tropical coastal climate — heavy wet-season rainfall/convection and harmattan dust haze (regional, milder here than inland Sahel) are the seasonal drivers (§14). |
| Curfew / slots / hours | 🟧 | No published slot-coordination or curfew regime found — not independently confirmed. |
| RFF category vs our types | 🟧 | Not published — confirm before planning. |
| Fuel availability | 🟧 | Jet A-1 assumed available as a major international gateway; supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed; exact hours and ground-handling agents not confirmed. Field is operated by a private concessionaire (Aeria) under a long-term concession. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
DIAP sits at 21 ft AMSL on the flat, low-lying Port-Bouët coastal/lagoon strip southeast of Abidjan. There is no close-in high terrain relevant to arrival, departure or missed-approach paths — CFIT is not the operative threat at this field. Verify the MSA ring on the current chart as routine practice.

### 3.2 Airborne conflict / traffic 🟧
Félix-Houphouët-Boigny is the principal hub for Air Côte d'Ivoire and one of the busier gateways on the West African coast (21 airlines, over 30 destinations, ~2.3 million passengers in 2023) — but it operates on a **single runway (03/21)**, so the operative traffic-flow constraint is runway-occupancy/sequencing capacity rather than airspace complexity. Control type (procedural vs radar) is not independently confirmed this pass; per the regional pattern (see [Africa airspace brief](../../../../airspace/africa.md)), expect terminal-area radar/ADS-B at a field of this size within an otherwise largely procedural West African en-route environment. Confirm current ATS provision at planning.

### 3.3 Runway excursion 🟧
Single asphalt runway, 3,000 × 50 m. No displaced-threshold or declared-distance detail confirmed this pass. Historical precedent is instructive: a scheduled DC-9 (Ghana Airways, 1997) veered off the runway on a second landing attempt in heavy rainfall and poor visibility, its undercarriage collapsing — all aboard survived, but it is a documented real-world precedent for **wet-runway excursion risk in the West African wet season** at this field. Treat braking-action reporting and go-around discipline in heavy rain as a standing watch-item.

### 3.4 Weather threat 🟧
Two hazard signatures matter: **tropical wet-season convection** (Abidjan's climate carries a primary rains period around Apr–Jul and a secondary one around Oct–Nov, with heavy short-duration downpours reducing visibility and runway friction — see §3.3) and **harmattan dust** (roughly Dec–Mar), which reaches the Gulf of Guinea coast in an attenuated form compared with the Sahel interior but can still reduce visibility. Re-check both at the §14 pull.

### 3.5 Operational considerations 🟧
The single-runway configuration is the field's defining operational constraint — there is no crosswind/alternate-runway option, so a runway-availability disruption (excursion, disabled aircraft, wet-runway closure) has an outsized network impact. The airport is managed by a private concessionaire (Aeria) under a long-term (20-year, from 2010) concession that has funded successive terminal/apron expansion phases; expect periodic construction-driven NOTAMs. No special-airport/crew-qualification designation was found in reachable sources.

---

## 4. Cautions & Warnings

- **Single runway (03/21)** — no configuration flexibility; a runway-availability disruption has a full-field impact.
- 🟧 **Heavy wet-season rainfall** reduces visibility and braking action — a real-world wet-runway excursion occurred here in 1997 (heavy rain, second landing attempt).
- 🟧 **Harmattan dust haze** (roughly Dec–Mar) can reduce visibility on the coast, though generally less severely than in the Sahel interior.
- 🟧 **Field elevation source conflict** — use 21 ft (two-source agreement: OurAirports + Navigraph navdata); a Wikipedia infobox entry showing 95 ft/29 m is not corroborated and not used here (§18).
- 🟧 Exact declared distances, RFF category, PCN, navaid idents/frequencies and current ATC frequencies were **not confirmed from a primary AIP** this pass — the ASECNA/Côte d'Ivoire eAIP was not machine-reachable this session. Verify before relying on any of these for planning.
- 🟧 Coastal/lagoon proximity (Port-Bouët) — no confirmed bird-strike history in reachable sources, but treat wetland-adjacent wildlife activity as a standing caution pending local confirmation.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** None found in reachable sources — treat as not categorised. 🟧
- **Crew-qualification gate:** None published/confirmed. 🟧
- **Operating restrictions / bans:** None found in reachable sources; no RNP AR or circling restriction confirmed. 🟧
- **Overflight / entry / permits:** Standard Côte d'Ivoire state overflight/landing-permit requirements apply — confirm current lead-time on the OFP; see also the [Africa airspace brief](../../../../airspace/africa.md) §9 on regional overflight-permit practice. 🟧
- **Operations notes:** Airport operator is **Aeria** (private concessionaire, concession effective 1 Jan 2010 for 20 years); civil aviation regulator is Côte d'Ivoire's ANAC. The field has historically also served military/evacuation roles during periods of civil unrest (2004, 2011) — no current operational restriction stems from this, noted as background context only.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not confirmed — assumed H24 given international-gateway status | 🟧 |
| AD operating hours | Not confirmed | 🟧 |
| Night / curfew restrictions | None found in reachable sources | 🟧 |
| RFF category | Not published | 🟧 |
| Fuel | Jet A-1 assumed available; supplier/hours not confirmed | 🟧 |
| PCN | Not published | 🟧 |
| Customs | Yes (international PoE); exact hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed — multiple ground handlers likely at a field this size | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 03 | 3,000 × 50 m | Asphalt / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Single runway; lighted |
| 21 | 3,000 × 50 m | Asphalt / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Reciprocal end |

*Source: OurAirports (physical runway dimensions/surface only, retrieved 2026-07-26). Declared-distance breakdown requires a primary AIP pull — not reachable this session.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | — | 126.6 MHz | Not confirmed | 🟧 tier-4 sourced |
| Delivery | — | Not published | — | 🟧 |
| Ground | — | Not published | — | 🟧 |
| Tower | Abidjan Tower | 118.1 MHz | Not confirmed | 🟧 tier-4 sourced; also listed against a "MISC/VHF-DF" entry in the same source — data-quality flag, verify against primary AIP |
| Approach | — | Not published | — | 🟧 |
| Centre / FIR | Abidjan (per task-level designation; not independently cross-verified against the regional FIR table) | Listed as 121.1 MHz (ACC) in tier-4 source | Not confirmed | 🟧 — see §18 |

*Source: OurAirports frequencies page (tier-4, retrieved 2026-07-26). None of the above is independently confirmed against a primary AIP this pass — treat all as provisional.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| — | Not published / verify | — | — | No navaid data confirmed from a reachable primary or corroborating source this pass 🟧 |

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** None published — single runway, wind-driven reversal only.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 03 | Not confirmed this pass | — | — | 🟧 Verify current AIRAC |
| 21 | Not confirmed this pass | — | — | 🟧 Verify current AIRAC |

- **STARs (names only):** Not confirmed — pull current-AIRAC inventory at planning. 🟧
- **LVP:** Not published 🟧 — heavy wet-season rain is the plausible low-vis driver (§3.4).
- **Missed approach watch-items:** Terrain is not the driver (flat coastal site); re-sequencing on a single-runway field with sustained international traffic is the operative concern.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed this pass — pull current-AIRAC inventory. 🟧
- **RNP / climb-gradient requirements:** Not published/verify. 🟧
- **Take-off minima:** Not published/verify. 🟧
- **Start-up / push-back:** Not confirmed — verify locally. 🟧
- **ATC slot / CTOT & clearance:** No published slot-coordination regime found — not independently confirmed. 🟧
- **De-icing:** NIL — tropical coastal field, no de-icing requirement.

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published — no residential noise regime confirmed. 🟧
- **Night noise / dB limits:** None found.
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not confirmed — apron/stand suitability for network narrow/medium-body types not published this pass. 🟧
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Not confirmed. 🟧
- **Hot spots / tight taxiways:** None published/confirmed. 🟧
- **Follow-me:** Not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Tropical coastal (Guinea Gulf) climate — hot, humid, with a primary wet season (roughly Apr–Jul) and a secondary wet period (roughly Oct–Nov); prevailing onshore/sea-breeze influence at the coastal/lagoon site.
- **Seasonal hazards:** **Wet-season convective rainfall** — heavy short-duration downpours reduce visibility and runway friction (§3.3/§3.4). **Harmattan dust** (roughly Dec–Mar) reaches the coast in an attenuated form relative to the Sahel interior but is a recognised regional visibility hazard — see the [Africa airspace brief](../../../../airspace/africa.md) §11.
- **Local effects:** Coastal/lagoon location — sea-breeze and possible early-morning mist/haze near the lagoon; not independently confirmed as a recurring operational factor this pass.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (construction/expansion activity is ongoing at this field historically), navaid U/S, lighting, RFF downgrade, GPS/RAIM, overflight-permit status. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / regional connection point on the West African Gulf-of-Guinea coast.
- **Nearest suitable alternates:** **DGAA** (Accra, Ghana), **DNMM** (Lagos, Nigeria) `[VAMSYS mirror 2026-07-26]` — both cross-country; confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available as a major international gateway; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 3,000 m runway length is non-limiting for network narrow/medium-body types. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type range/performance reference.

---

## 17. Fleet-specific notes (optional)

- No type-specific consideration identified beyond the generic single-runway/wet-season-braking watch-items above (§3.3/§3.4). See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Primary AIP not reached this session** — the ASECNA/Côte d'Ivoire eAIP was not machine-reachable (portal/JS-frameset gating); declared distances, RFF, PCN, navaids, ATC frequencies, approaches, SIDs/STARs and take-off minima are all unconfirmed pending a direct pull.
- **Field elevation conflict** — 21 ft (OurAirports + Navigraph navdata, two-source agreement, used here) vs a single Wikipedia infobox entry of 95 ft/29 m (not corroborated, not used).
- **FIR designation** — this brief names "Abidjan" per task-level input; the ident/authority has not been independently cross-verified against the FIR table in the [Africa airspace brief](../../../../airspace/africa.md), which does not separately enumerate an Abidjan FIR alongside its ASECNA/national FIR list. Reconcile at next update.
- **Control type (procedural vs radar)** — not independently confirmed.
- **Slot/curfew regime** — none found; not independently confirmed as "none exists."
- **Wet-runway excursion precedent (1997)** — historical illustration, not a standing NOTAM; confirm current runway grooving/friction-maintenance state is not a live factor.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/DIAP/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP, elevation, runway dimensions/surface, frequencies (tier-4).*
- Wikipedia — "Félix-Houphouët-Boigny International Airport" — https://en.wikipedia.org/wiki/F%C3%A9lix-Houphou%C3%ABt-Boigny_International_Airport (retrieved 2026-07-26). *History, operator (Aeria), traffic figures, historical accident record (1997 wet-runway excursion).*
- ASECNA — eAIP portal — https://aim.asecna.aero/ (attempted 2026-07-26, not machine-reachable this session — JS-frameset/portal gating). Primary AD 2 DIAP data not yet obtained; re-attempt at next update.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP/ASECNA; K Global fields from live VAMSYS; 4-page pack. |
