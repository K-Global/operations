# LIME — Orio al Serio (Milan Bergamo) · Airport Briefing

**LIME / BGY** · Orio al Serio, Bergamo, Lombardy, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Planning aid for the sim, not a chart. AIP Italia (ENAV eAIP) AD 2 LIME is the primary source of record for this field; the eAIP is delivered through an app-gated portal that does not return fetchable field-level content to a direct public fetch, so this build is drawn from public tier-4 corroboration (OurAirports, SkyVector, Wikipedia, airport-operator and public familiarisation material) cross-checked against each other. Every figure not independently corroborated across at least two public sources is flagged 🟧 *"Not published / verify."* Approaches/SIDs/STARs are listed **by name only** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | **45.66889, 9.70028** (legacy seed, corroborated by SkyVector-derived ARP N45°40.13′/E9°42.02′ ≈ 45.6688, 9.7003) 🟧 — OurAirports records a divergent 45.669362, 9.708851 (~500 m east); treat the seeded value as working ARP pending direct AIP AD 2.2 confirmation |
| Field elevation | **782 ft / 238 m AMSL** — corroborated across OurAirports, SkyVector and airport-area public sources 🟩 |
| Mag variation | Not published / verify 🟧 — no primary figure sourced this pass |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST observed) |
| Runway(s) | **10/28**, single runway, 2,874 × 45 m / 9,429 × 148 ft (SkyVector) 🟧 — one public source (bigorre.org) reports 2,937 m; discrepancy not resolved against a primary AIP table, see §18 |
| Preferential runway | Not confirmed from a primary wind-rose/preferential-runway rule; tier-4 operational material describes **RWY 28** as the more frequently used direction for commercial arrivals/departures 🟧 |
| Longest LDA | RWY 28 ≈ **2,741 m / 8,993 ft**; RWY 10 ≈ **2,655 m / 8,711 ft** — **computed** from published displaced-threshold offsets, not a directly sourced declared-distance table 🟧 |
| Approaches | ILS serves **RWY 28** (main instrument runway); category/sub-category not confirmed — conflicting unverifiable tier-4 claims (CAT I vs CAT II/III) could not be resolved to a primary source, see §18 🟧. RWY 10 approach type not confirmed (RNP/non-precision assumed, name not sourced) 🟧 |
| RFF category | Not published / verify 🟧 |
| Control type | Radar approach (**Milano Radar** sector) handing to a procedural Tower at the aerodrome for the single runway; not independently confirmed from a primary source 🟧 |
| Elevation class | Sea-level equivalent (782 ft) — **not** hot-and-high; non-issue for performance 🟩 |
| Special-airport status | Not formally categorised in reachable public sources. In practice, the operative special consideration is a **single runway carrying a very high movement rate** (109,971 movements in 2024) combining dense low-cost-carrier scheduling with a substantial cargo throughput and adjacent GA/gliding traffic — see §3.5 🟥 |
| Customs / PoE | **Yes** — international airport with Schengen and non-Schengen scheduled traffic; desk hours not confirmed 🟧 |
| K Global category | **S** `[VAMSYS mirror 2026-07-26]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-26]` |
| Company preferred alternates | **LIMC** (<../LIMC — Malpensa/LIMC — Briefing.md>), **LIPE** (<../LIPE — Borgo Panigale/LIPE — Briefing.md>), **LSZH** (<../../Switzerland/LSZH — Zurich/LSZH — Briefing.md>) `[VAMSYS mirror 2026-07-26]` |
| Taxi-in / taxi-out (VAMSYS) | **6 min / 8 min** `[VAMSYS mirror 2026-07-26]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟧 | Elevated terrain N/NE/E of the field; highest MSA sector reported to the NE at ~12,400 ft in tier-4 local-flying material. Not a close-in CFIT trap on the runway-10/28 approach corridors themselves, but relevant to circling/missed-approach and any northerly arrival routing — see §3.1. |
| Runway length vs fleet perf | 🟩 | 2,874 m is ample for narrowbody/regional K Global types typical of a Category S field; no widebody consideration expected here. |
| Approach availability / minima | 🟧 | Single ILS-served runway direction (28); RWY 10 approach type and both runways' minima not confirmed from a primary source. |
| Airspace / traffic / control | 🟥 | Single runway, very high movement count, mixed LCC/cargo/GA-adjacent traffic under Milano ACC — see §3.2. |
| Weather / seasonal hazard | 🟥 | Po Valley winter radiation fog is a recognised regional hazard; summer convective storms with hail and reported windshear in strong N/NE winds — see §3.4/§14. |
| Curfew / slots / hours | 🟧 | No specific curfew hours, noise-charge schedule or slot-coordination level could be corroborated from a citable public source this pass — treat as an open safety/commercial item, see §6/§12/§18. |
| RFF category vs our types | 🟧 | Not published / verify. |
| Fuel availability | 🟧 | Assumed available given the field's traffic volume; supplier/hours not confirmed. |
| Customs / handling / security | 🟧 | International PoE confirmed by traffic mix; desk hours and handling agent(s) for our operation not confirmed. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟧
Terrain rises to the north, north-east and east of the field; tier-4 local-flying material for the shared aerodrome reports the highest MSA sector to the north-east at approximately **12,400 ft**. This is not a close-in threat to a normal straight-in approach on RWY 28 or RWY 10, but it is directly relevant to any circling manoeuvre, a northerly arrival transition, or a go-around that turns toward high ground — maintain MSA compliance and verify the current chart's MSA ring rather than relying on this approximate figure operationally.

### 3.2 Airborne conflict / traffic 🟥
LIME operates a **single runway (10/28)** supporting one of the busiest low-cost-carrier operations in Italy — one of four largest Ryanair operating bases, plus a growing Wizz Air presence — alongside a substantial cargo throughput (reported at ~23,000 tonnes in 2024, a figure that continues to grow year-on-year even after a major integrator relocated its hub to Malpensa in 2022) and a secondary GA/training strip sharing the same aerodrome environment with its own circuit pattern. With no parallel or crossing runway, all of this traffic — passenger, cargo, and general aviation circuit activity — funnels through one runway and one approach/departure corridor under **Milano ACC (LIMM)**. Expect sustained sequencing pressure during banks, and brief for possible ATC-directed routing changes to manage the mixed traffic flow. **No dedicated Milano FIR/ACC brief exists yet in this tree** — see the interim [Europe — General airspace brief](../../../../airspace/europe.md) 🟧 pending a dedicated Milano ACC (LIMM) document.

### 3.3 Runway excursion 🟧
Both runway ends carry a published displaced threshold (RWY 10 ≈ 219 m / RWY 28 ≈ 133 m in tier-4 data), reducing usable landing distance below the full 2,874 m length on both directions — confirm the current declared-distance table before assuming full-length LDA. There is public record of at least two runway-surface/excursion-adjacent events at this field (a 2016 landing overrun on RWY 28 that came to rest beyond the airport boundary, and a 2024 tyre-failure event on landing that damaged runway pavement and closed the field temporarily) — while these are historical incidents rather than a standing hazard, they underline the importance of a conservative wet/contaminated-runway margin on a single, displaced-threshold strip with no redundancy if it closes.

### 3.4 Weather threat 🟥
The Po Valley is prone to dense **winter radiation fog**, a recognised regional low-visibility hazard — see [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md). Tier-4 local material for the shared aerodrome also reports **summer convective thunderstorms with hail** in the vicinity, surface temperatures regularly above 30°C between June and August, and **windshear reported in strong north/north-easterly wind conditions** — see [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md). See also §14.

### 3.5 Operational considerations 🟥
This is a **single-runway, very-high-movement field** with no parallel or crossing runway to absorb a closure or a slow recovery from a runway-blocking event — the 2024 tyre-debris closure is a real-world illustration of that single point of failure. The mix of high-frequency LCC quick-turns, cargo movements, and adjacent GA/training traffic compounds scheduling and workload pressure at peak banks. No curfew, slot-coordination level, or RFF category could be corroborated from a public source this pass — treat these as open safety/commercial items requiring AIP confirmation before relying on assumed operating windows (§18).

---

## 4. Cautions & Warnings

- Single runway (10/28) with **no parallel/crossing runway redundancy** — a runway-blocking event stops all commercial movements at the field.
- **Displaced thresholds on both ends** reduce usable LDA below the full published runway length — verify current declared distances, don't assume full-length landing distance.
- **Winter Po Valley radiation fog** can reduce visibility with limited warning — check current LVP status before planning.
- **Summer convective storms with hail** and reported **windshear in strong N/NE wind** — brief accordingly in season.
- Terrain rises to the **north, north-east and east** — respect MSA on any circling or non-standard routing.
- Field shares its aerodrome environment with a **secondary GA/training strip (RWY 12/30)** operated separately with its own circuit pattern — awareness item for the shared traffic environment, not a runway available to commercial ops.
- **Curfew/noise-charge regime and RFF category are unconfirmed** — do not assume an operating window or fire-cover adequacy without AIP verification (§18).

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not formally categorised in reachable public sources. 🟧 The practical special consideration is the single-runway/very-high-movement operating profile described in §3.5.
- **Crew-qualification gate:** No specific crew-qualification restriction confirmed from a public source; standard company currency requirements apply. Confirm LVP/CAT capability requirement once the RWY 28 ILS category is verified (§18). 🟧
- **Operating restrictions / bans:** No RNP AR ban, circling restriction, or specific SID/STAR non-approval found in reachable public sources — not confirmed either way. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen and non-Schengen international arrival; no special state permit identified. 🟩
- **Operations notes:** Airport operator — **SACBO S.p.A.** (partially owned by SEA – Aeroporti di Milano). ANSP — **ENAV**; approach service under **Milano ACC (LIMM)**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | Not published / verify — assumed extensive given traffic density, not independently confirmed | 🟧 |
| AD operating hours | Not published / verify | 🟧 |
| Night / curfew restrictions | Not published / verify — no citable public source found; field is understood to carry meaningful night cargo/mail movement alongside its daytime LCC schedule, but no specific hours or noise-charge schedule confirmed | 🟧 |
| RFF category | Not published / verify | 🟧 |
| Fuel | Jet A-1 assumed available given traffic volume; supplier/hours not confirmed | 🟧 |
| PCN | Not published / verify | 🟧 |
| Customs | International PoE confirmed by scheduled traffic mix; desk hours not confirmed | 🟧 |
| Handling / FBO | Not confirmed for our operation; Signature is a known FBO presence at the field per public fuel-provider listings | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 10 | 2,874 × 45 m / 9,429 × 148 ft | Hard (asphalt) / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | ≈ 2,655 m / 8,711 ft (computed from a ~219 m / 719 ft displaced threshold) 🟧 | Threshold elevation ≈ 781 ft; runway heading 102°T |
| 28 | 2,874 × 45 m / 9,429 × 148 ft | Hard (asphalt) / PCN not published 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | ≈ 2,741 m / 8,993 ft (computed from a ~133 m / 436 ft displaced threshold) 🟧 | Threshold elevation ≈ 754 ft; runway heading 282°T; more frequently used direction per tier-4 operational material |

*A secondary GA/training-only runway (12/30, ~778 m / 2,552 ft) exists at the same aerodrome under separate Aeroclub Bergamo operation with restricted hours — not usable by commercial traffic, listed here for situational awareness only, not as an operational alternative. LDA figures above are computed from published displaced-threshold offsets, not read from a primary declared-distance table — treat as 🟧 pending AIP AD 2.12/2.13 confirmation. One public source (bigorre.org) reports overall runway length as 2,937 m rather than 2,874 m — discrepancy unresolved, see §18.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Bergamo Information | Not reliably sourced — a public navdata aggregator lists a value outside the normal VHF comm band, indicating a likely data error 🟧 | Not published / verify | Verify current chart |
| Delivery | Not published / verify | Not published / verify | Not published / verify | 🟧 |
| Ground | Orio Ground | 120.50 / 134.10 (tier-4) 🟧 | Not published / verify | Verify current chart |
| Tower | Orio Tower | 125.87 / 134.10 (tier-4) 🟧 | Not published / verify | Verify current chart |
| Approach | Milano Radar | 126.30 / 126.75 (tier-4) 🟧 | Not published / verify | Sector-specific — take the assigned frequency |
| Centre / FIR | Milano ACC (LIMM) | Per current AIRAC | H24 (assumed) | **No dedicated Milano ACC (LIMM) FIR brief exists yet in this tree** — see the interim [Europe — General airspace brief](../../../../airspace/europe.md) 🟧 |

*All frequencies above are tier-4 (public navdata aggregator) sourced and not cross-checked against a primary AIP AD 2.17/2.18 table — treat as 🟧 pending live-AIRAC verification.*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR/DME | BRL (Bergamo) | 111.05 | Not published / verify | On/near field 🟧 |
| NDB | ORI (Orio al Serio Bergamo) | 376 | Not published / verify | 🟧 |
| VOR (nearby) | TZO (Trezzo) | 117.25 | Not published / verify | ~10.5 NM 🟧 |
| VOR (nearby) | LIN (Linate) | 112.25 | Not published / verify | ~21.8 NM 🟧 |

*Sourced to a public navdata aggregator (SkyVector), not cross-checked against a primary AIP ENR 4 / AD 2.9 table — treat idents/frequencies as 🟧 pending live-AIRAC verification.*

---

## 10. Arrival

- **Transition altitude / level:** Not published / verify for LIME specifically; many Italian aerodromes publish a TA of 6,000 ft, but this is not a confirmed field-specific figure — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** No primary wind-rose/preferential rule confirmed; tier-4 operational material for the shared aerodrome describes RWY 28 as the more commonly used direction, consistent with a prevailing westerly/north-westerly wind component — not confirmed against a primary source. 🟧
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 28 | ILS (name/category not confirmed) | Not published / verify 🟧 | Not published / verify 🟧 | Main instrument runway |
| 10 | Not published / verify — RNP/non-precision assumed 🟧 | Not published / verify 🟧 | Not published / verify 🟧 | Opposite direction |

- **STARs (names only):** Not confirmed in reachable research — pull the current-AIRAC STAR list at planning. 🟧
- **LVP:** Winter Po Valley radiation fog is the routine trigger risk; exact RVR/trigger figures and CAT status of the RWY 28 ILS are not confirmed. 🟧
- **Missed approach watch-items:** Terrain rises N/NE/E of the field (§3.1) — do not turn toward high ground on a go-around without a verified missed-approach track; also expect a mixed traffic environment (LCC/cargo/adjacent GA circuit) during re-sequencing.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) for general RNP departure guidance pending field-specific confirmation. 🟧
- **Take-off minima:** Not published / verify. 🟧
- **Start-up / push-back:** Not confirmed — coordinate with Orio Ground/Tower on the day. 🟧
- **ATC slot / CTOT & clearance:** Slot-coordination level not confirmed from a public source; given the field's traffic density a coordinated regime is plausible but unverified — treat as an open item. 🟧
- **De-icing:** Availability not confirmed from a public source; plausible given the Po Valley winter climate — see [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not published / verify. 🟧
- **Night noise / dB limits:** Not published / verify — no curfew or noise-charge schedule could be corroborated from a citable public source. 🟧
- **Engine run-up restrictions:** Not published / verify. 🟧
- **Reverse thrust / idle-reverse policy:** Not published / verify. 🟧

---

## 13. Ground operations

- **Stands for our types:** Terminal reported with two jet-bridge gates and a mix of remote stands; sized for narrowbody/regional operation consistent with our K Global category S at this field — exact stand assignment for our operation not confirmed. 🟧
- **Push-back:** Not published / verify. 🟧
- **Standard taxi routes:** Not published / verify — limited taxiway system typical of a single-runway field; confirm with Ground/Tower on the day. 🟧
- **Hot spots / tight taxiways:** Not confirmed from a primary source; general caution warranted given the compact single-runway/limited-taxiway layout at a very-high-movement field. 🟧
- **Follow-me:** Not published / verify. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Po Valley continental climate; tier-4 operational material suggests a westerly/north-westerly prevailing component consistent with RWY 28 being the more frequently used direction — not confirmed against a primary wind-rose.
- **Seasonal hazards:** **Winter radiation fog** is the Po Valley's defining low-visibility hazard (see [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md)). Summer brings convective thunderstorms with hail reported in the vicinity, and windshear has been reported in strong north/north-easterly wind conditions.
- **Local effects:** Basin/valley terrain to the north and east can funnel and locally modify wind and convective activity; no other notable local effect confirmed.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures, navaid U/S, lighting, obstacle/crane, RFF downgrade, GPS/RAIM, current LVP status. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Destination / spoke field (K Global base = No; category S).
- **Nearest suitable alternates:** [**LIMC**](../limc/index.md) (Milano Malpensa), [**LIPE**](../lipe/index.md) (Bologna), [**LSZH**](../../switzerland/lszh/index.md) (Zurich) `[VAMSYS mirror 2026-07-26]` — confirm suitability, runway/RFF adequacy and current minima per leg. LIMC is being built out as a companion K Global folder in this same documentation pass; if the link above does not yet resolve, the Malpensa folder build is in progress.
- **Fuel-uplift notes:** Jet A-1 assumed available given traffic volume; supplier/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Runway length (2,874 m) is non-limiting for narrowbody/regional K Global types typical of a category-S field. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 17. Fleet-specific notes (optional)

- No widebody consideration expected at this field given its category-S / narrowbody-oriented traffic profile. The operative planning consideration is the single-runway/high-movement scheduling pressure (§3.5) rather than aircraft performance. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md).

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- **AIP Italia (ENAV eAIP) AD 2 LIME direct content** — the eAIP portal is app-gated and did not yield fetchable field-level content this pass; every figure below should be cross-checked against it directly.
- **ARP coordinate discrepancy** — seeded/SkyVector value (45.66889, 9.70028) vs OurAirports (45.669362, 9.708851), ~500 m apart.
- **Runway 10/28 overall length** — 2,874 m (SkyVector) vs 2,937 m (bigorre.org), unresolved.
- **Displaced-threshold offsets and full declared-distance table (TORA/TODA/ASDA)** — not confirmed from a primary source; LDA figures in §7 are computed, not directly published.
- **RWY 28 ILS category/sub-category** — conflicting unverifiable tier-4 claims (CAT I vs CAT II/III), not resolved.
- **RWY 10 approach type and name** — not confirmed.
- **RFF category, PCN, mag variation, ATS/AD operating hours** — none confirmed.
- **Curfew hours, noise-charge schedule, and slot-coordination level** — no citable public source found despite the field's known significant night cargo/mail movement.
- **All ATC/ATIS/navaid frequencies (§8/§9)** — tier-4 (public navdata aggregator) sourced only; ATIS frequency specifically looks like a data error and needs a primary re-source.
- **SIDs/STARs (current names), take-off minima, transition altitude** — not obtained this pass.
- **Stand/gate assignment, taxi routing, hot spots, push-back/follow-me policy** — not confirmed.
- **De-icing availability and provisioning** — plausible given climate, not confirmed.
- **Fuel supplier(s) and hours, handling agent(s) for our operation** — not confirmed.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- AIP Italia (ENAV eAIP) — AD 2 LIME index — https://www.nextdigital.it/apps/aip/browse/ad?language=en (retrieved 2026-07-26). *Primary source of record; app-gated portal did not return fetchable field-level content this pass.*
- OurAirports — https://ourairports.com/airports/LIME/ (retrieved 2026-07-26). *Elevation, coordinates, general facility data.*
- SkyVector — https://skyvector.com/airport/LIME/Bergamo-Orio-Al-Serio-Airport (retrieved 2026-07-26). *Runway dimensions/displaced thresholds, communications, navaids.*
- Wikipedia — "Milan Bergamo Airport" — https://en.wikipedia.org/wiki/Milan_Bergamo_Airport (retrieved 2026-07-26). *Traffic statistics, terminal layout, operator, historical incidents.*
- Bigorre.org — Milan Bergamo airport information — https://www.bigorre.org/aero/notam/lime/en (retrieved 2026-07-26). *Cross-check on elevation/runway length (discrepancy noted).*
- Aeroclub Bergamo — LIME/BGY Familiarisation (English version) — https://www.aeroclub.bg.it/LIME_ENG.pdf (retrieved 2026-07-26). *CTR/airspace structure, terrain/MSA, shared-aerodrome traffic and seasonal-weather corroboration for the field (covers the co-located GA runway 12/30, cited here only for context applicable to the shared aerodrome environment).*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
