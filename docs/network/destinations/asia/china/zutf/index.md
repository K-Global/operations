# ZUTF — Chengdu/Tianfu · Airport Briefing

**ZUTF / TFU** · Chengdu (Jianyang), Sichuan, China · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional, AIP China gated; **not in VAMSYS**

> **Read-me:** Planning aid for the sim, not a chart. Static data is cross-checked from public sources (AIP China / CAAC-AISC is subscription-gated and was not directly reachable this pass); approaches/SIDs/STARs are listed **by name/category only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). **This field is not present in the VAMSYS fleet/route mirror** — category, base flag, taxi times and preferred alternates are all 🟧 pending reconciliation. Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 30.3125, 104.4413 `[OurAirports]` 🟧 (primary-AIP ARP not confirmed) |
| Field elevation | **~1,440–1,476 ft / ~439–450 m AMSL** — public sources vary slightly (OurAirports 1,440 ft; Navigraph-derived stub figure 1,452 ft); not independently cross-checked against a primary AIP table 🟧 |
| Mag variation | Not published / verify 🟧 |
| Time zone | UTC+8 (China Standard Time, no DST) 🟩 |
| Runway(s) | **01/19** 4,000 × 60 m (concrete) · **02/20** 3,200 × 45 m (concrete) · **11/29** 3,800 × 45 m (concrete) — **three runways**, an unusual triangular/star layout (01/19 and 02/20 near-parallel N–S orientated, 11/29 oblique, crossing the pattern) `[OurAirports]` |
| Preferential runway | Not published / verify 🟧 |
| Longest LDA | ~4,000 m (01/19) — exact declared-distance table not confirmed 🟧 |
| Approaches | **ILS reported on all runway ends, with CAT II/CAT III capability** (tier-4 corroboration only — per-runway assignment and sub-category not confirmed from a primary AIP table) 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Radar (assumed, consistent with the continental-China pattern in the [Asia airspace brief](../../../../airspace/asia.md)) 🟧 |
| Elevation class | Near sea-level field (~1,450 ft) in the Sichuan (Chengdu) Basin — **not** hot-and-high itself, but the region's defining terrain (Tibetan Plateau/Hengduan Shan) rises sharply to the west — see §3.1 |
| Special-airport status | None found in reachable sources; standing crew-briefing item is the **westbound high-plateau terrain environment** and the **unusual three-runway crossing geometry**, not a formal category restriction 🟧 |
| Customs / PoE | Yes — Chengdu's primary international/cargo gateway since opening (2021); exact desk hours not confirmed 🟧 |
| K Global category | **Not in VAMSYS** 🟧 |
| K Global base | **Not in VAMSYS** 🟧 |
| Company preferred alternates | **Not in VAMSYS** 🟧 |
| Taxi-in / taxi-out (VAMSYS) | **Not in VAMSYS** 🟧 |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Field itself sits in the flat Chengdu Basin; westbound/plateau-facing routing is the region's genuine terrain concern — see §3.1 (shared with [ZUUU](../zuuu/index.md)). |
| Runway length vs fleet perf | 🟩 | 01/19 (4,000 m) and 11/29 (3,800 m) are ample for any K Global widebody; 02/20 (3,200 m) is the shorter of the three — non-limiting but confirm assignment logic. |
| Approach availability / minima | 🟧 | CAT II/III reported across all runway ends but not confirmed from a primary AIP table this pass. |
| Airspace / traffic / control | 🟧 | New (2021) purpose-built superhub intended to absorb most of Chengdu's international/cargo growth from ZUUU; a genuinely unusual **three-runway crossing layout** — sequencing/dependency logic not confirmed. |
| Weather / seasonal hazard | 🟧 | Sichuan Basin fog/haze pattern (shared regional climatology with ZUUU) — field-specific frequency data not found. |
| Curfew / slots / hours | 🟧 | Not confirmed in reachable public sources. |
| RFF category vs our types | 🟧 | Category not published/verified this pass. |
| Fuel availability | 🟧 | Assumed available at a new major international gateway; supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | International PoE assumed as Chengdu's primary international gateway; desk hours not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
ZUTF sits at roughly 1,450 ft in the same flat **Sichuan (Chengdu) Basin** as its sister field ZUUU, about 34 NM to the WNW — no close-in high terrain at the field itself. As with ZUUU, the operative regional terrain threat is **west/northwest of Chengdu**, where ground rises sharply toward the **Hengduan Shan and the Tibetan Plateau edge**. This governs westbound routing/diversion/contingency planning, not a normal arrival/departure here. See the [ZUUU Briefing §3.1](../zuuu/index.md) (shared regional terrain picture) and the [Asia airspace brief §7](../../../../airspace/asia.md).

### 3.2 Airborne conflict / traffic 🟧
ZUTF opened 27 June 2021 as a purpose-built second Chengdu superhub, designed to absorb the bulk of the city's international, cargo and eventually most domestic long-haul traffic from the older ZUUU field. The field's **three-runway layout is a genuinely unusual geometry** — two near-parallel N–S runways (01/19, 02/20) plus a third, oblique runway (11/29) crossing the pattern — a configuration that likely drives non-trivial dependent/crossing sequencing logic. No field-specific ATC procedure or sequencing description was found in reachable public sources this pass; treat as an open item pending primary-AIP confirmation. 🟧 China's standard centralised ATFM/flow-control regime (§6 of the [Asia airspace brief](../../../../airspace/asia.md)) applies as at any major PRC hub.

### 3.3 Runway excursion 🟧
No displaced-threshold or declared-distance table was found in reachable public sources. The three runways differ materially in length/width (4,000×60 m / 3,200×45 m / 3,800×45 m) — confirm the assigned runway and its declared distances before planning, particularly if a shorter runway (02/20) is assigned to a heavier movement.

### 3.4 Weather threat 🟧
Shares the Sichuan Basin's regional pattern of **persistent haze/fog and stagnant-air low-visibility episodes**, particularly in winter (see [ZUUU Briefing §3.4](../zuuu/index.md)). No ZUTF-specific frequency/statistic confirmed this pass.

### 3.5 Operational considerations 🟧
Plan around: (1) the **westbound high-plateau terrain environment** (§3.1, shared with ZUUU); (2) the **unusual three-runway crossing geometry** and its unconfirmed sequencing logic (§3.2); and (3) the fact that **this field is not yet reconciled in the VAMSYS fleet/route mirror** — category, base status, alternates and taxi times are all pending confirmation (§16/§18).

---

## 4. Cautions & Warnings

- **Three-runway crossing layout** (01/19, 02/20 near-parallel plus oblique 11/29) — an unusual geometry with unconfirmed dependent/crossing-sequencing procedures; do not assume simple independent-parallel logic.
- **Runway 02/20 (3,200 m) is materially shorter** than 01/19 (4,000 m) and 11/29 (3,800 m) — confirm the assigned runway before planning a heavy departure.
- **Terrain rises sharply west/northwest of Chengdu** toward the Hengduan Shan/Tibetan Plateau — relevant to westbound contingency/diversion routing, shared with ZUUU.
- **This airport is not in the VAMSYS mirror** — category, base flag, preferred alternates and taxi times are all open items; do not assume any VAMSYS-sourced planning figure exists for this field.
- Primary AIP (AIP China / CAAC-AISC) was not directly reachable this pass — most operational figures below are flagged 🟧 pending confirmation.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport" in reachable sources; the standing crew-briefing items are the three-runway crossing geometry (§3.2) and the regional high-plateau terrain awareness (§3.1). 🟧
- **Crew-qualification gate:** None specific to ZUTF identified. 🟧
- **Operating restrictions / bans:** Not confirmed in reachable sources — verify current AIRAC/AIP. 🟧
- **Overflight / entry / permits:** Standard PRC international arrival; China requires prior overflight/entry permit for foreign operators generally — confirm at planning per the [Asia airspace brief §9](../../../../airspace/asia.md). 🟧
- **Operations notes:** ANSP — CAAC / regional Air Traffic Management Bureau; airport operator — Sichuan Airport Group / Chengdu Tianfu International Airport Co. Since opening, ZUTF has progressively absorbed most of Chengdu's international, regional and cargo routes from [**ZUUU (Chengdu/Shuangliu)**](../zuuu/index.md), which now operates mainly domestic/regional service — confirm which field a given route uses at planning.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify (major new gateway, H24 assumed) | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not published / verify | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available at a major international gateway; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE assumed; desk hours not confirmed | 🟧 |
| Handling / FBO | Not published / verify | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 01 | 4,000 × 60 m | Concrete / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Longest of the three |
| 19 | 4,000 × 60 m | Concrete / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | |
| 02 | 3,200 × 45 m | Concrete / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Shortest of the three |
| 20 | 3,200 × 45 m | Concrete / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | |
| 11 | 3,800 × 45 m | Concrete / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Oblique runway, crosses the 01/19–02/20 pattern |
| 29 | 3,800 × 45 m | Concrete / PCN not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | Not published 🟧 | |

*Source: OurAirports (runway dimensions/surface); no declared-distance table found in reachable public sources — AIP China / CAAC-AISC gated. All distances metric.*

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

*No ATC frequency table found in reachable public sources this pass. Pull current-AIRAC values at planning.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| Not published / verify 🟧 | — | — | — | No navaid table found in reachable public sources this pass |

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify. 🟧
- **Speed:** Standard 250 KIAS below FL100 (ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** Not published / verify — confirm how the three runways (01/19, 02/20, 11/29) are allocated by wind/traffic. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 01/19 | ILS reported (CAT II/III per tier-4 corroboration) 🟧 | Not published | Not published | Verify current AIRAC |
| 02/20 | ILS reported (CAT II/III per tier-4 corroboration) 🟧 | Not published | Not published | Verify current AIRAC |
| 11/29 | ILS reported (CAT II/III per tier-4 corroboration) 🟧 | Not published | Not published | Oblique/crossing runway — verify current AIRAC |

- **STARs (names only):** Not published / verify. 🟧
- **LVP:** Not confirmed; CAT II/III capability reported (tier-4) would imply an LVP regime exists — trigger conditions not sourced. 🟧
- **Missed approach watch-items:** Terrain is not the driver at the field itself; the three-runway crossing geometry is the operative watch-item pending sequencing-procedure confirmation (§3.2).

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not published / verify. 🟧
- **RNP / climb-gradient requirements:** Not published / verify — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for the regional PBN framework. 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not published / verify. 🟧
- **ATC slot / CTOT & clearance:** China's standard centralised ATFM applies at this new major gateway (see [Asia airspace brief §6](../../../../airspace/asia.md)); field-specific regime not confirmed. 🟧
- **De-icing:** Not published / verify — Sichuan Basin winters mild/humid, season likely limited. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Not published / verify — a new (2021) purpose-built superhub, widebody capacity assumed generous but not confirmed. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify — the three-runway crossing layout implies non-trivial taxi routing; confirm with Ground on the day. 🟧
- **Hot spots / tight taxiways:** Not published / verify — the 01/19–02/20–11/29 crossing area is a plausible hot-spot candidate pending AIP confirmation. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Humid subtropical climate typical of the Sichuan Basin, shared with ZUUU; prevailing wind not independently confirmed this pass.
- **Seasonal hazards:** Shares the Sichuan Basin's **persistent haze/fog/stagnant-air low-visibility** regional pattern (see [ZUUU Briefing §14](../zuuu/index.md)). No ZUTF-specific frequency statistic confirmed. 🟧
- **Local effects:** Basin-trapped haze/fog; the significant terrain lies well west of the basin (§3.1).

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (esp. the three-runway crossing area), navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, China ATFM/flow measures, conflict-zone. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Not in VAMSYS — role (destination/alternate) pending fleet/route reconciliation. 🟧
- **Nearest suitable alternates:** **Not in VAMSYS** 🟧 — the sibling field [**ZUUU (Chengdu/Shuangliu)**](../zuuu/index.md), ~34 NM WNW, is the obvious same-city cross-check candidate pending formal reconciliation; ZUUU's VAMSYS-listed alternates (ZBAA, ZGGG) are noted for reference only, not confirmed applicable to ZUTF.
- **Fuel-uplift notes:** Jet A-1 assumed available at a major international gateway; supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length/strength (up to 4,000 m on 01/19) non-limiting for any K Global type at this elevation; confirm assignment logic if a shorter runway (02/20, 3,200 m) is used. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No fleet-specific consideration identified beyond the general westbound high-terrain awareness shared with ZUUU (§3.1) and the shorter 02/20 runway noted in §16. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **This field is not present in the VAMSYS fleet/route mirror** — category, base flag, preferred alternates and taxi times all need reconciliation before this brief can be treated as operationally complete.
- **Primary AIP (AIP China / CAAC-AISC) not directly reached this pass** — nearly every operational figure below needs primary-source confirmation.
- Mag variation, transition altitude, RFF category, curfew/slot regime.
- ATC frequencies and navaid idents/frequencies — none found in reachable public sources.
- Exact declared-distance (TORA/TODA/ASDA/LDA) table per runway.
- ILS CAT II/III report — tier-4 only, sub-category and per-runway assignment unconfirmed.
- **Three-runway crossing-sequencing logic** — no procedure description found in reachable public sources.
- Field elevation figure (~1,440–1,476 ft) varies slightly between public sources — not cross-checked against a primary AIP table.
- **Chengdu ACC (ZUUU/ZPPP)** has no dedicated Asia FIR brief built yet — only the area-level Asia brief exists.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- OurAirports — https://ourairports.com/airports/ZUTF/ and /runways.html (retrieved 2026-07-26). *ARP/elevation/runway cross-check.*
- Wikipedia — "Chengdu Tianfu International Airport" — https://en.wikipedia.org/wiki/Chengdu_Tianfu_International_Airport (retrieved 2026-07-26). *Opening date (27 Jun 2021), construction history, role as Chengdu's second superhub.*
- SkyVector — https://skyvector.com/airport/ZUTF/Chengdu-Tianfu-Airport (retrieved 2026-07-26). *Coordinates/chart pointer.*
- 42kft.com — Chengdu Tianfu International Airport profile (ILS/CAT II/CAT III capability claim) — https://42kft.com/airport-ranking/chengdu-tianfu-international-airport/ (retrieved 2026-07-26). *Tier-4 corroboration only — not an AIP-grade source.*
- **AIP China (CAAC / AISC)** — subscription-gated, not directly reachable this pass. Primary-source verification pending; treat operational figures above as provisional until cross-checked against the current AIP/AIRAC.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP China (public cross-check where gated); not in VAMSYS — all K Global fields 🟧; 4-page pack. |
