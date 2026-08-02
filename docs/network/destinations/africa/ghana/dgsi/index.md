# DGSI — Kumasi · Airport Briefing

**DGSI / KMS** · Kumasi, Ashanti Region, Ghana · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — Ghana GCAA AIP/public-source build; **new field — route endpoint not previously in this tree**

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from public aeronautical sources (Ghana GCAA-adjacent public reporting; no primary eAIP page was reachable this pass); approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N06°42′52″ / W001°35′26″ (6.714560, -1.590820) `[OurAirports]` |
| Field elevation | **942 ft / 287 m AMSL** |
| Mag variation | 🟧 Not published / verify against current AIRAC |
| Time zone | UTC+0 (GMT, no DST) |
| Runway(s) | **02/20** — 2,320 × 45 m (7,612 × 148 ft), asphalt, paved, lighted. Extended from a former 1,981 m length under a phased upgrade reportedly completed ~Sept 2024 |
| Preferential runway | 🟧 Single-runway field — no preferential-runway choice; wind-dependent config only |
| Longest LDA | 🟧 Not published / verify — no displaced threshold reported in reachable sources |
| Approaches | 🟧 An ILS is reported to have been installed ahead of the field's 2014 phased-upgrade programme; ident/frequency and current status not confirmed — verify current AIRAC |
| RFF category | 🟧 Not published / verify |
| Control type | 🟧 Not confirmed — a domestically-oriented regional field; treat as procedural/non-radar pending confirmation |
| Elevation class | **942 ft — moderate elevation**, not classically "hot-and-high" but materially higher than the coastal Ghanaian gateway (DGAA, 205 ft); factor into performance planning for warm-day departures 🟧 |
| Special-airport status | 🟧 Not operator-categorised as restricted in reachable sources; historically a military air base (RAF WWII-era, later Ghana military use) before full civil conversion in 1999 |
| Customs / PoE | 🟧 Reported to hold international status since 2014 with customs/immigration/security staff in place, but public reporting as of 2023 described the field as serving domestic traffic only; recent (2026) public reporting references new long-haul international service — **role is in transition, verify current status before planning** 🟧 |
| K Global category | **Not set** `[VAMSYS mirror 2026-07-26]` 🟧 |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **DGAA, DIAP, DXXX** `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | 🟧 Not published — confirm at planning |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Ashanti-region interior plateau at 942 ft — higher and further inland than the coastal Ghanaian gateway; no specific high terrain identified in reachable sources but not independently cleared — verify MSA on current chart. |
| Runway length vs fleet perf | 🟧 | 2,320 m (post-extension) is adequate for narrowbody types; **materially limiting for larger widebody types** — confirm against the planned type's field-length performance before scheduling. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md). |
| Approach availability / minima | 🟧 | An ILS is reported present but not confirmed current/serviceable; verify current AIRAC before relying on an instrument approach here. |
| Airspace / traffic / control | 🟧 | Regional domestic-oriented field; control type (radar/procedural) not confirmed. |
| Weather / seasonal hazard | 🟧 | Interior Ghana — **harmattan dust haze (Nov–Mar)** and wet-season convective activity both apply; inland location may see different fog/haze behaviour than the coast — not independently sourced. |
| Curfew / slots / hours | 🟧 | No curfew/slot regime found in reachable sources — not independently confirmed as "none." |
| RFF category vs our types | 🟧 | Not published — confirm adequacy before planning any widebody service. |
| Fuel availability | 🟧 | Not confirmed — a domestically-focused regional field; do not assume major-gateway fuel provisioning without verification. |
| Customs / handling / security | 🟧 | International-status designation reported since 2014, but the field's actual traffic mix and current international-service extent is **unclear and in transition** — treat as the single biggest open item for this field (§18). |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
DGSI sits at 942 ft AMSL on the Ashanti-region interior plateau, materially higher than the coastal Ghanaian gateway (DGAA, 205 ft) and further from the coast. No specific close-in high terrain was identified in reachable public sources, but this has **not been independently confirmed against an MSA chart** — treat as an open item and verify the current MSA ring before planning an arrival/departure here.

### 3.2 Airborne conflict / traffic 🟧
DGSI is a domestically-oriented regional field, historically serving Ghana's second-largest passenger volume after the national gateway. Control type (radar vs procedural) is not confirmed in reachable sources — treat as procedural pending confirmation, consistent with the general character of regional West African fields. Name the controlling FIR — **Accra (DGAC)** — in all planning; cross-ref the [Africa airspace brief](../../../../airspace/africa.md).

### 3.3 Runway excursion 🟧
No displaced threshold or excursion history was found in reachable sources for this field specifically. The runway underwent a phased length extension (from a former ~1,981 m to the current 2,320 m) completed around September 2024 — **confirm the extension is fully reflected in current-AIRAC declared distances** before planning against the longer figure, since public reporting on completion timing has been inconsistent.

### 3.4 Weather threat 🟧
Interior Ghana is subject to the same regional **harmattan dust haze (approx. Nov–Mar)** as the coast, though inland visibility/haze behaviour can differ from the coastal pattern — not independently sourced for DGSI specifically. The wet season brings standard West-African convective/thunderstorm risk. No DGSI-specific frequency or severity statistic was found this pass. See §14.

### 3.5 Operational considerations 🟧
This is a **newly-added route endpoint with materially thinner public source coverage than the coastal gateway** — nearly every operational parameter beyond basic runway/position data (RFF category, approaches, navaid detail, ATS hours, handling) is unconfirmed and listed in §18. The runway-length extension's completion status and the field's actual current international-service extent are the two open items most likely to affect a go/no-go decision — **do not treat this brief as verified for scheduled operations until both are closed.**

---

## 4. Cautions & Warnings

- **Materially thinner data coverage than other network fields** — treat every unflagged figure with extra caution; this is a newly-built brief for a field not previously carried in this tree.
- **Runway-length extension (to 2,320 m) completion status is not independently confirmed against current AIRAC** — verify before planning against the longer figure.
- **RFF category is not published** — confirm adequacy for the planned type before scheduling.
- **International-service status is unclear and reportedly in transition** — confirm current customs/immigration/security coverage before planning an international arrival.
- **942 ft elevation** is a step up from the coastal gateway — factor into warm-day performance planning even though this is not a classic hot-and-high field.
- Harmattan dust haze (Nov–Mar) applies regionally — confirm current visibility trend before a marginal-weather operation.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources. Given the thin data coverage (§3.5), treat this field as requiring **extra dispatch scrutiny** pending closure of the open items in §18. 🟧
- **Crew-qualification gate:** 🟧 Not confirmed — no specific crew-currency requirement identified, but confirm against current company route-qualification data before scheduling.
- **Operating restrictions / bans:** 🟧 None identified in reachable sources — not independently confirmed as "none."
- **Overflight / entry / permits:** 🟧 Not confirmed — verify current Ghana domestic/international routing requirements for this specific field.
- **Operations notes:** Airport operator — **Ghana Airports Company Limited (GACL)**. The field was a **military air base** (RAF-era WWII origin, later Ghana military use) before conversion to a fully civil domestic airport in 1999.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | 🟧 Not published / verify | 🟧 |
| AD operating hours | 🟧 Not published / verify | 🟧 |
| Night / curfew restrictions | 🟧 None found in reachable sources — not independently confirmed | 🟧 |
| RFF category | 🟧 Not published / verify | 🟧 |
| Fuel | 🟧 Not confirmed — do not assume major-gateway provisioning | 🟧 |
| PCN | 🟧 Not published / verify | 🟧 |
| Customs | 🟧 Reported present since 2014 but current international-service extent unclear (§1) | 🟧 |
| Handling / FBO | 🟧 Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 02 | 2,320 × 45 m | Asphalt, paved, lighted / PCN not published 🟧 | 🟧 not published | 🟧 not published | 🟧 not published | 🟧 not published — no displacement reported | Extended from ~1,981 m; completion timing not independently confirmed against current AIRAC |
| 20 | 2,320 × 45 m | Asphalt, paved, lighted / PCN not published 🟧 | 🟧 not published | 🟧 not published | 🟧 not published | 🟧 not published — no displacement reported | Same runway, reciprocal direction |

*Source: OurAirports runway extract (retrieved 2026-07-26), corroborated by public reporting of a phased runway-extension programme (former length ~1,981 m) with completion targeted around September 2024. TORA/TODA/ASDA and PCN are **not confirmed from a primary AIP table this pass**. All distances in metres unless noted.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | 🟧 Not published / verify | — | — | |
| Delivery | 🟧 Not published / verify | — | — | |
| Ground | 🟧 Not published / verify | — | — | |
| Tower | 🟧 Not confirmed — Tower reported | 118.1 | 🟧 not confirmed | |
| Approach | 🟧 Not published / verify | — | — | |
| A/G (advisory) | 🟧 Reported | 658.6 | 🟧 | **This frequency falls outside the standard 118–137 MHz VHF aviation band and is very likely a data-entry artifact in the source — do not treat as reliable; verify current AIRAC.** |
| Centre / FIR | Accra (DGAC) | Per current AIRAC | 🟧 | See [Africa airspace brief](../../../../airspace/africa.md) — no dedicated Accra FIR brief exists yet in this tree (§18) |

*Source: OurAirports frequency extract (retrieved 2026-07-26). Treat as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | 🟧 Not published / verify | 🟧 | 🟧 | Reported installed and commissioned in 1993; ident/frequency not confirmed |
| ILS | 🟧 Not published / verify | 🟧 | 🟧 | Reported installed ahead of the field's 2014 phased-upgrade programme; runway assignment, ident/frequency and current serviceability not confirmed |

---

## 10. Arrival

- **Transition altitude / level:** 🟧 Not published / verify current chart.
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Single-runway field — landing runway is wind-direction-driven only (02 vs 20).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 02 | 🟧 Not confirmed this pass — an ILS is reported present | 🟧 | 🟧 | Verify current AIRAC and serviceability |
| 20 | 🟧 Not confirmed this pass | 🟧 | 🟧 | |

- **STARs (names only):** 🟧 Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning.
- **LVP:** 🟧 Not published / verify.
- **Missed approach watch-items:** 🟧 Terrain not independently cleared for this field (§3.1/§10) — treat with extra caution pending MSA confirmation.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** 🟧 Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning.
- **RNP / climb-gradient requirements:** 🟧 Not confirmed — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** 🟧 Not published / verify.
- **Start-up / push-back:** 🟧 Not confirmed.
- **ATC slot / CTOT & clearance:** 🟧 None identified — assumed non-coordinated.
- **De-icing:** **NIL** — tropical field. 🟩

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** 🟧 Not published / verify.
- **Night noise / dB limits:** 🟧 Not published / verify.
- **Engine run-up restrictions:** 🟧 Not published / verify.
- **Reverse thrust / idle-reverse policy:** 🟧 Not published / verify.

---

## 13. Ground operations

- **Stands for our types:** 🟧 A new two-storey terminal (reported ~7,000 m², ~400 passengers/hour design capacity, three boarding gates) was targeted under the field's phase-2 upgrade programme; exact stand count/allocation by code letter not sourced. | 🟧
- **Push-back:** 🟧 Not confirmed.
- **Standard taxi routes:** 🟧 Not confirmed — confirm with local ATS/Ground on the day.
- **Hot spots / tight taxiways:** 🟧 None identified in reachable sources — not independently confirmed as "none."
- **Follow-me:** 🟧 Not confirmed.

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Interior Ashanti-region plateau climate, 942 ft AMSL — warmer/more humid tropical-forest-belt conditions than the coast; prevailing wind not sourced.
- **Seasonal hazards:** **Harmattan dust haze (approx. Nov–Mar)** applies regionally; wet-season convective activity is the standard West-African counterpart. No DGSI-specific statistic found this pass.
- **Local effects:** 🟧 Not confirmed — inland/plateau location may behave differently from the coastal gateway regarding fog/haze; not independently sourced.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway-extension/works status, navaid U/S (VOR/DME, ILS), lighting, RFF status, harmattan-related visibility advisories. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination — regional Ghana route endpoint (secondary to the national gateway).
- **Nearest suitable alternates:** Company preferred alternates **DGAA** (Accra — [DGAA Briefing](../dgaa/index.md)), **DIAP** (Abidjan) and **DXXX** (Lomé) `[VAMSYS mirror 2026-07-26]` — DIAP and DXXX are cross-country from Ghana; confirm overflight/permit status before planning either as a working alternate.
- **Fuel-uplift notes:** 🟧 Not confirmed — a domestically-focused regional field; do not assume major-gateway fuel provisioning without verification. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** 🟧 The 2,320 m runway is materially shorter than DGAA — confirm field-length adequacy for the planned type, especially at the 942 ft elevation on a warm day. See [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md) and [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- **Runway length (2,320 m) is the governing constraint at this field** — plan only types with confirmed field-length performance margin at 942 ft elevation and expected warm-day temperatures; do not assume the largest K Global widebody types are suitable here without a type-specific performance check. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **This is a newly-built brief for a field not previously carried in this tree** — treat every section above as provisional pending a fuller source pass.
- **RFF category, PCN, TORA/TODA/ASDA, ATS hours** — none published in reachable sources.
- **Runway-extension (to 2,320 m) completion status** — public reporting on the exact completion date is inconsistent; confirm against current AIRAC before planning against the longer figure.
- **Current international-service status** — reported international designation since 2014, described as domestic-only traffic as of 2023, with more recent (2026) public reporting of new long-haul service; the field's actual current role is **unclear** and is the single biggest open item here.
- **ILS and VOR/DME idents/frequencies and current serviceability** — reported present but not confirmed.
- **A/G frequency 658.6 MHz** — falls outside the standard VHF aviation band; very likely a source data-entry error, do not rely on it.
- **K Global aerodrome category** — not set in VAMYS; confirm before scheduling any service to this field.
- **Accra (DGAC) FIR brief does not yet exist** as a dedicated document in this tree — only the continental [Africa airspace brief](../../../../airspace/africa.md) covers it.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/DGSI/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *ARP/elevation/runway/frequency extract.*
- Wikipedia — "Prempeh I International Airport" (formerly Kumasi Airport) — https://en.wikipedia.org/wiki/Prempeh_I_International_Airport (retrieved 2026-07-26). *History, runway-extension programme, terminal upgrade, international-status timeline — airline names in the source are not repeated here per governance.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | New build — field not previously in this tree. Built from public sources (no primary eAIP reachable this pass); K Global fields from live VAMSYS; 4-page pack. |
