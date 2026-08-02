# LSGG — Geneva · Airport Briefing

**LSGG / GVA** · Le Grand-Saconnex, Geneva, Switzerland · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from AIP Switzerland (Skyguide eAIP) where reachable, corroborated by public tier-4 sources where the eAIP could not be fetched this pass; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | N46°14′15″ / E006°06′33″ (46.238, 6.109) `[Wikipedia; OurAirports — consistent across sources]` |
| Field elevation | **1,411 ft / 430 m AMSL** |
| Mag variation | 🟧 Not published / verify — not found in any reachable source |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) 🟧 |
| Runway(s) | **04/22**, single runway, **3,900 × 50 m**, concrete — the longest runway in Switzerland (renamed from 05/23 in Sept 2018 for magnetic drift) |
| Preferential runway | **RWY22 preferred by default** (calm-wind case); **RWY04 used when wind exceeds ~4 kt from a roughly 320°–140° arc** — see §10/§11 |
| Longest LDA | 🟧 RWY22 ~3,900 m; RWY04 reduced by a displaced threshold (~330 m) — see §7, not independently AIP-confirmed |
| Approaches | **ILS CAT III on RWY22**; **ILS CAT I only on RWY04** (no CAT II/III) — see §9/§10 |
| RFF category | 🟧 Not published / verify |
| Control type | **Radar** — Geneva Tower/Approach on the field; **Switzerland FIR (LSAS)** en route — no dedicated FIR brief exists in-library; see [Europe airspace briefing](../../../../airspace/europe.md) 🟧 |
| Elevation class | Near sea-level-adjacent (1,411 ft) — **not** hot-and-high; the defining threat is surrounding Jura/Alpine terrain, not density altitude |
| Special-airport status | 🟥 **Single-runway field bordered by France** — part of the airport boundary runs along the Swiss–French border, with a historical French-sector arrangement (Pier F) allowing cross-border passenger movement; surrounded by the **Jura mountains (N)** and the **Alps/Mont Blanc massif (S/SE)** — see §5 |
| Customs / PoE | Yes — international processing on field, including a dedicated business-aviation terminal with private customs/immigration; exact commercial-terminal desk hours 🟧 not confirmed |
| K Global category | **H** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | [LSZH](../lszh/index.md), LFSB, LFML `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **13 min / 16 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟥 | Jura ridge ~6 NM north (~5,700 ft AMSL); Mont Salève ~8 NM south (~4,500 ft AMSL); Alps/Mont Blanc massif further SE (MSA reported on the order of 10,600 ft to the SE) — two historical Mont Blanc CFIT accidents on Geneva descents predate modern terrain-awareness equipment. See §3.1. |
| Runway length vs fleet perf | 🟩 | 3,900 m single runway is ample for any K Global Category H type; the displaced-threshold reduction on RWY04 is not limiting at typical arrival weights. |
| Approach availability / minima | 🟧 | CAT III only on RWY22; **RWY04 has no CAT II/III fallback** — a real constraint when wind forces the RWY04 configuration in low visibility. |
| Airspace / traffic / control | 🟧 | Single runway with no reciprocal-heading alternative; surrounding terrain constrains routing options. Switzerland FIR (LSAS) has no dedicated brief in-library. |
| Weather / seasonal hazard | 🟧 | Reported mechanical turbulence and misleading radio-altimeter readings on final, consistent with terrain-driven local effects (bise/foehn-type flow); frequent fog/haze season reported. |
| Curfew / slots / hours | 🟧 | A night curfew is reported (unofficial source only, historically cited around 00:30–06:00) — not independently AIP-confirmed. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟩 | Confirmed on-field, including dedicated business-aviation fuel providers. |
| Customs / handling / security | 🟩 | Confirmed present, including a dedicated private customs/immigration facility at the business-aviation terminal; commercial-terminal desk hours not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟥
Geneva sits in the Rhône valley/Lake Geneva basin between two significant terrain masses: the **Jura mountain chain to the north** (terrain reaching roughly **5,700 ft AMSL ~6 NM north**) and the **Alps to the south/southeast**, including **Mont Salève** (~4,500 ft AMSL, ~8 NM south) and, further out, the **Mont Blanc massif**. A tier-4 operational source cites an MSA on the order of **10,600 ft to the southeast**, consistent with the Alpine massif's proximity. Two historical CFIT accidents on descent toward Geneva struck the Mont Blanc massif (in 1950 and 1966, both long before GPS/EGPWS-era terrain awareness) — no longer representative of the current safety environment but illustrative of why terrain awareness on this approach is a standing, real threat, not a formality. Exact MSA sector boundaries should be confirmed against the AIP. 🟧

### 3.2 Airborne conflict / traffic 🟧
Geneva operates a **single runway (04/22) with no reciprocal-orientation alternative** — all traffic funnels through one axis, and the surrounding Jura/Alpine terrain constrains vectoring options compared with a flat, open-terrain field. **Switzerland FIR (LSAS)** governs en route control; no dedicated Switzerland FIR brief exists in-library yet — cross-ref the general [Europe airspace briefing](../../../../airspace/europe.md) for continental context and flag the FIR-specific gap. 🟧

### 3.3 Runway excursion 🟧
**RWY04's threshold is displaced** (on the order of ~330 m per a cross-corroborated tier-4 figure), reducing usable landing distance below RWY22's full length. Given the single-runway configuration, a runway-excursion event has no immediate alternate-runway fallback on field. Exact current LDA figures are not independently AIP-confirmed (§7).

### 3.4 Weather threat 🟧
A tier-4 operational source flags **misleading radio-altimeter readings on final approach** and **mechanical turbulence at the airport**, both consistent with terrain-channelled local wind effects (regional **bise**/**foehn**-type flow off the Jura/Alps, not independently named for LSGG in reachable sources). The same source reports frequent fog/haze (on the order of ~21 days/month in season) — treat as indicative seasonal climatology, not an AIP-grade statistic.

### 3.5 Operational considerations 🟥
Three durable characteristics define this field: (1) **single-runway operation** with no reciprocal-heading fallback if RWY22's CAT III capability is needed but wind or a closure forces RWY04 (CAT I only); (2) **surrounding Jura/Alpine terrain** driving higher-than-usual departure climb gradients and a real, quantified CFIT threat on the approach; and (3) the **historical French-sector/border arrangement** (§5) — a customs/ground-operations quirk rather than a safety one, but a standing planning item for any leg touching French-origin passengers or ground transport.

---

## 4. Cautions & Warnings

- **RWY04 has no CAT II/III fallback** — if wind or another factor forces the RWY04 configuration during low visibility, there is no reciprocal-runway alternative on this single-strip field.
- **Terrain is close on both sides** — Jura ridge to the north, Mont Salève/Alps/Mont Blanc massif to the south/southeast — brief the MSA and do not treat this as a flat-terrain field.
- **Misleading radio-altimeter readings on final** have been reported operationally — cross-check barometric altitude, don't rely on RadAlt alone in the terminal area.
- **RWY04's displaced threshold** reduces usable landing distance versus RWY22 — verify current LDA before assuming full-length availability.
- **No alternate runway orientation exists** — a single-runway closure (obstruction, disabled aircraft, contamination) has no on-field fallback; plan diversion awareness accordingly.
- **Historical French-sector (Pier F) arrangement** — a ground-operations/customs quirk from the airport's cross-border history; confirm current relevance for any France-connected routing.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the single-runway/no-CAT-III-on-RWY04 limitation and the surrounding terrain. 🟥
- **Crew-qualification gate:** CAT II/III currency required for a low-visibility arrival — but **only on RWY22**; RWY04 has no CAT II/III fallback. 🟧
- **Operating restrictions / bans:** A night curfew is reported by a single unofficial (non-AIP) source, historically cited around 00:30–06:00 local — **not independently AIP-confirmed**, treat as 🟧 pending verification. No RNP AR ban or circling restriction found in reachable sources. 🟧
- **Overflight / entry / permits:** Standard Schengen/non-Schengen international arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **Skyguide**; airport operator — Geneva Airport (Aéroport International de Genève); the field's **historical French-sector arrangement** (Pier F) allowed cross-border passenger movement without transiting Swiss customs/territory, a legacy of a 1960s France/Canton-of-Geneva agreement, largely superseded in practical passport-control terms since Switzerland's 2008 Schengen accession but physically retained.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Reported H24 by a tier-4 (business-aviation) source; not independently AIP-confirmed | 🟧 |
| AD operating hours | As above | 🟧 |
| Night / curfew restrictions | Night curfew reported (single unofficial source, ~00:30–06:00 historically cited) | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 confirmed on field; multiple business-aviation fuel providers named in a tier-4 source | 🟩 |
| PCN | Not published / verify | 🟧 |
| Customs | Confirmed present, including a dedicated private customs/immigration facility at the business-aviation terminal; commercial-terminal hours not confirmed | 🟧 |
| Handling / FBO | Multiple named FBOs confirmed on field (business-aviation side); primary handler for our (commercial) operation not confirmed | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 04 | 3,900 × 50 m | Concrete / PCN not published 🟧 | 3,900 m 🟧 | 3,960 m 🟧 | 3,900 m 🟧 | ~3,570 m 🟧 | **Threshold displaced** (~330 m); CAT I only |
| 22 | 3,900 × 50 m | Concrete / PCN not published 🟧 | 3,900 m 🟧 | 3,960 m 🟧 | 3,900 m 🟧 | 3,900 m 🟧 | CAT III capable |

*Figures reproduced from a tier-4 AIP-style extract (not the primary Skyguide eAIP, which was unreachable this session — JS/frameset, see Sources); the RWY04 displaced-threshold magnitude is cross-corroborated by two independent tier-4 sources. Runway threshold elevations reported: RWY04 THR 1,411 ft, RWY22 THR 1,365 ft (i.e. the runway slopes down toward 22) — single-source, not AIP-confirmed. All distances in metres; treat every figure in this table as needing a live-AIRAC/eAIP cross-check before operational use.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Geneva ATIS | 135.580 (secondary source also lists 124.75) 🟧 | H24 (assumed) | |
| Delivery | Geneva Delivery | 121.680 | H24 (assumed) | |
| Ground | Geneva Ground/Apron | 121.855 (secondary source: 121.75/121.85 apron split) 🟧 | HX | |
| Tower | Geneva Tower | 118.700 (secondary freqs reported: 119.70, 119.90) 🟧 | Mixed | |
| Approach / Arrival | Geneva Departure 119.530 · Geneva Arrival 136.255 · Final 120.305 🟧 | Mixed | Sector-specific — take the assigned frequency |
| Centre / FIR | Switzerland FIR (LSAS) — per current AIRAC | H24 | No dedicated FIR brief exists in-library — see [Europe airspace briefing](../../../../airspace/europe.md) 🟧 |

*Two independently-reachable tier-4 frequency sets (a public nav-data aggregator and a virtual-ATC training manual reproducing AIP-style tables) agree closely but not exactly. Treat every frequency here as 🟧 pending a live-AIRAC cross-check.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | GVA (Geneva) | 115.75 | H24 (assumed) | On field |
| VOR | PAS (Passeiry) | 116.60 | H24 (assumed) | ~6 NM |
| VOR | SPR (Saint-Prex) | 113.90 | H24 (assumed) | |
| VOR | LDL (La Dôle) | 115.90 | H24 (assumed) | ~11 NM |
| NDB | GLA (Gland) | 375 kHz | H24 (assumed) | |
| ILS 04 | INE | 110.90 | H24 | **CAT I only** — not CAT II/III suitable |
| ILS 22 | ISW | 108.70 (LVP configuration reported at 109.90) 🟧 | H24 | **CAT III** capable |

*All idents/frequencies sourced to a tier-4 AIP-style extract (virtual-ATC training manual), cross-checked against a public nav-data aggregator; not independently confirmed against the primary Skyguide eAIP this pass. 🟧*

---

## 10. Arrival

- **Transition altitude / level:** Transition altitude reported as **7,000 ft** in a tier-4 source — flagged 🟧 pending AIP confirmation.
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm); a tier-4 business-aviation source separately flags **"strict speed control"** on the approach — confirm current chart.
- **Preferential runway logic:** **RWY22 is the default/preferred configuration** when wind is calm; **RWY04 is used when wind exceeds roughly 4 kt from a 320°–140° arc** (a single-source figure — treat the exact threshold as 🟧 pending AIP confirmation). Because this is a single-runway field, this wind logic is the airport's only tool for minimising headwind/tailwind component — it does not address crosswind, which is structurally unavoidable given the fixed 044°/224° orientation.
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 22 | ILS (ISW) | Not confirmed 🟧 | ~4,000 ft (reported) 🟧 | CAT III |
| 04 | ILS (INE) | Not confirmed 🟧 | ~6,000 ft (reported) 🟧 | CAT I only, not CAT II/III suitable |

- **STARs (names only):** Not enumerated in reachable sources this pass — a STAR section was identified in a tier-4 source's structure but specific names were not captured; pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** CAT III capability exists on **RWY22 only** (reported minima on the order of 0–50 ft ceiling; RVR figure disputed between tier-4 sources, either ~75 m or ~200 m — flag for AIP confirmation); **RWY04 is CAT I only.** 🟧
- **Missed approach watch-items:** Terrain to the north (Jura) and south/southeast (Mont Salève, Alps/Mont Blanc massif) are the relevant considerations — fly the published MAP and verify climb-gradient/turn on the current chart.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Reported names include **BELUS, DEPUL, MEDAM, ROCCA** (RWY04 departures) and **KONIL, MEDAM, ROCCA, MOLUS** (RWY22 departures, with MOLUS restricted for Light/Medium aircraft due to arrival-stream conflict, unrestricted for Heavy) — a tier-4 source also notes SID suffixes vary by QNH band. **Some SIDs are runway-specific** (published for only one of the two runway ends), a distinctive feature of this field. Pull the current-AIRAC SID list before use. 🟧
- **RNP / climb-gradient requirements:** A tier-4 business-aviation source explicitly flags **"climb gradients higher than usual"** — consistent with the surrounding Jura/Alpine terrain. Confirm gradient/equipage per SID on the current chart. See [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md).
- **Take-off minima:** Not confirmed this pass. 🟧
- **Start-up / push-back:** Not confirmed this pass — confirm procedure locally. 🟧
- **ATC slot / CTOT & clearance:** Not independently confirmed; treat as a non-fully-coordinated regime pending verification. 🟧
- **De-icing:** Confirmed available; general de-icing procedures triggered in cold/moist conditions per a tier-4 source; no dedicated-pad location/capacity figure found. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** A tier-4 business-aviation source flags **"noise-sensitive areas — watch out for them"** and references a noise-abatement procedure/turn (abbreviation not expanded in source); the wind-based runway-selection logic (§10) is the field's primary noise/config-management tool given the single-runway constraint.
- **Night noise / dB limits:** Not confirmed; the airport's noise footprint is separately described in public sources as a recurring subject of local political dispute. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** Main commercial terminal (Terminal 1) is organised into multiple piers (including the historical French-sector Pier F, §5); a purpose-built long-haul/widebody wing opened in December 2021 with fixed contact-stand power (eliminating diesel-GPU apron buses for that wing) and capacity for several widebody long-haul aircraft simultaneously at contact stands. 🟧 Exact current stand allocation for our operation not confirmed.
- **Push-back:** Not confirmed. 🟧
- **Standard taxi routes:** Confirm with Ground/Apron on the day; a tier-4 source flags at least one taxiway restricted to Medium aircraft in CAT I conditions only.
- **Hot spots / tight taxiways:** A tier-4 source flags **narrow taxiways requiring oversteer for larger aircraft** — treat as a caution pending AIP/current-chart confirmation. 🟧
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Lake Geneva/Rhône valley basin climate, bordered by the Jura (N) and Alps (S/SE); wind reported as variable through the year, averaging roughly 7–10 kt in a tier-4 seasonal summary. 🟧
- **Seasonal hazards:** Fog/haze reported frequently in season (on the order of ~21 days/month per a tier-4 source); mechanical turbulence and misleading radio-altimeter readings on final are reported operationally, consistent with terrain-channelled local wind effects.
- **Local effects:** Terrain-driven turbulence on final is the standout local effect at this field.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway closure (no on-field alternate exists at this single-runway field), navaid U/S, CAT III equipment status on RWY22, lighting, obstacle/crane, RFF downgrade, GPS/RAIM for RNP procedures. Source: official AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / alternate — **not** a K Global base. `[VAMSYS mirror 2026-07-26]`
- **Nearest suitable alternates:** Company preferred alternates [**LSZH**](../lszh/index.md), **LFSB**, **LFML** `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 confirmed available on field, including named business-aviation fuel providers; commercial-side supplier not independently confirmed. See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** The 3,900 m single runway is non-limiting for any K Global Category H type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- Category H crews should note **RWY04's CAT-I-only limitation** and the **single-runway, no-fallback-orientation** structure of this field when planning around low visibility or a runway obstruction. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) and [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **Skyguide eAIP** could not be fetched this session (JS/frameset) — every figure below should be re-verified against it or a current AIRAC chart when reachable.
- **Magnetic variation, RFF category, PCN, exact TORA/TODA/ASDA/LDA figures** — not found in any reachable primary source; the LDA/displacement figures used here are cross-corroborated tier-4 estimates only.
- **Night curfew hours (~00:30–06:00 reported)** — single unofficial source, not AIP-confirmed.
- **ATC frequencies** — two tier-4 sources disagree in detail; reconcile against current AIRAC.
- **SIDs/STARs (current names)** — partial, tier-4-sourced SID list obtained; STAR names not obtained at all.
- **ILS22 LVP RVR minimum** — conflicting tier-4 figures (~75 m vs ~200 m).
- **MSA sector altitudes** — only a single indicative figure (10,600 ft SE) found; not a full sector table.
- **Customs/immigration desk hours (commercial terminal), fuel supplier (commercial side), handling agent for our operation, widebody stand/apron chart, taxiway hot-spot specifics, engine run-up/reverse-thrust policy, slot-coordination status** — none confirmed in reachable sources.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP Switzerland (Skyguide eAIP)** — https://www.eaip.skyguide.ch/ — attempted 2026-07-26; JS/frameset, not reachable via automated fetch this session. Nominal primary source of record; not yet used to verify this pack.
- en.wikipedia.org/wiki/Geneva_Airport (retrieved 2026-07-26). *ARP/elevation/runway, French-sector/Pier F history, wind-based runway logic, terminal/wing structure, historical CFIT-accident context.*
- OurAirports — https://ourairports.com/airports/LSGG/ (retrieved 2026-07-26). *ARP/elevation cross-check.*
- SkyVector — https://skyvector.com/airport/LSGG/Geneve-Airport (retrieved 2026-07-26). *Runway/navaid cross-check, displaced-threshold corroboration.*
- OPSGROUP — Geneva airport operational lowdown (business-aviation briefing) (retrieved 2026-07-26). *Terrain/turbulence caution, curfew/hours notes, FBO/handling contacts, climatology summary.*
- IVAO Switzerland — Geneva Air Traffic Management Manual (AIP-style reproduction) (retrieved 2026-07-26). *Runway/nav/frequency/SID/LVP detail — network-sim training document, not regulatory; used only for corroboration, flagged throughout.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Switzerland (Skyguide); K Global fields from live VAMSYS; 4-page pack. |
