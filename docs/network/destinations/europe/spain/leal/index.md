# LEAL — Alicante-Elche Miguel Hernández · Airport Briefing

**LEAL / ALC** · Alicante, Valencian Community, Spain · Europe
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — AIP España (ENAIRE)-derived

> **Read-me:** Planning aid for the sim, not a chart. Static data is drawn from the AIP España (ENAIRE) AD 2-LEAL plus standard public aeronautical data; approaches/SIDs/STARs are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version. Live weather/NOTAMs are pulled at planning (§14/§15). Open 🟧 items are listed in §18. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| ARP (lat/long) | 38°16′56″N 000°33′29″W (38.28222, -0.55806) `[AIP España AD 2-LEAL]` |
| Field elevation | **43 m / 142 ft AMSL** |
| Mag variation | 1° E (2020 epoch); annual change not re-confirmed this pass 🟧 |
| Time zone | UTC+1 (CET) / UTC+2 (CEST, EU DST) |
| Runway(s) | **10/28** — single runway, 3,000 × 45 m, asphalt |
| Preferential runway | Wind-dependent: **RWY10 preferred** (onshore/easterly component — ILS CAT I available); **RWY28** used with offshore/westerly component (VOR-only approach) |
| Longest LDA | 3,000 m (both directions) |
| Approaches | **ILS CAT I RWY10 only** (ident IAT); **RWY28 — VOR approach only, no ILS/LOC** (via the offshore POLOP fix) |
| RFF category | **CAT 9**, reducing to **CAT 7 daily 1600–2000 LT** unless CAT 9 is requested by PPR ≥20 min ahead 🟧 |
| Control type | **Radar** — Alicante TWR on the field; **Valencia Control** provides approach; en-route presumed **Barcelona ACC (LECB)** — no dedicated Spanish FIR brief exists in-library, see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 |
| Elevation class | Near sea-level (142 ft) — **not** hot-and-high |
| Special-airport status | Not operator-categorised; standing brief items are the **RWY10/RWY28 approach asymmetry** and the **RFF CAT 7 daily reduction window** — see §5 |
| Customs / PoE | **Yes** — H24 `[AIP España AD 2-LEAL]` |
| K Global category | **S** `[VAMSYS mirror 2026-07-25]` |
| K Global base | **No** `[VAMSYS mirror 2026-07-25]` |
| Company preferred alternates | **LEBL, LEMD, LEMG** `[VAMSYS mirror 2026-07-25]` |
| Taxi-in / taxi-out (VAMSYS) | **10 min / 12 min** `[VAMSYS mirror 2026-07-25]` |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Terrain / CFIT | 🟩 | Low, rolling terrain inland/west of the field; no significant close-in high ground. Standard MSA applies. |
| Runway length vs fleet perf | 🟩 | 3,000 m is ample for any K Global narrowbody; Code E is routine at 3 stands and Code F (up to A380/An-124) is accommodated exceptionally with prior coordination — non-limiting for the network's normal use of this field (leisure narrowbody destination). |
| Approach availability / minima | 🟧 | **ILS CAT I exists on RWY10 only** — RWY28 has no ILS/LOC, VOR approach only via the offshore POLOP fix. In a westerly-wind + low-vis scenario the only available approach carries materially higher minima than the RWY10 ILS. |
| Airspace / traffic / control | 🟩 | Moderate-to-high seasonal density (major Costa Blanca leisure gateway); **Valencia Control** provides approach, radar environment throughout. |
| Weather / seasonal hazard | 🟧 | Levante (easterly) wind episodes bring gusty/crosswind conditions and swell; no major structural hazard confirmed. |
| Curfew / slots / hours | 🟩 | No standing jet-traffic curfew found; a piston-engine-only VFR/IFR hour restriction applies (not relevant to jet ops); note a temporary 2026 nightly-maintenance runway closure (§6). |
| RFF category vs our types | 🟧 | CAT 9 normally (above any K Global type's requirement) but **drops to CAT 7 for a fixed daily window (1600–2000 LT)** unless CAT 9 is requested by PPR — a real planning caution for afternoon/evening operations. |
| Fuel availability | 🟧 | Assumed available as a major leisure gateway; specific supplier/hours not confirmed in reachable sources. |
| Customs / handling / security | 🟩 | Customs and Immigration confirmed H24. |

---

## 3. Threat & Error Management (TEM)

### 3.1 CFIT / Terrain 🟩
LEAL sits at 142 ft AMSL on the coastal plain; low-to-moderate terrain rises inland/west of the field. This is not a significant CFIT driver for normal arrival/departure/missed-approach paths — verify the current MSA ring as routine practice, but terrain is a minor factor here relative to the field's other threats.

### 3.2 Airborne conflict / traffic 🟩
Alicante is one of Spain's busiest airports by passenger count (5th nationally; ~19.95 M passengers in 2025, +8.5% YoY, 126,081 movements) with a pronounced summer leisure peak `[Wikipedia; Travel And Tour World, 2025]`. **Valencia Control** provides approach; en-route is presumed **Barcelona ACC (LECB)** — no dedicated Spanish FIR brief exists in-library yet, see the general [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) for regional context 🟧. Expect sustained radar-vectored sequencing during summer peak banks.

### 3.3 Runway excursion 🟧
Single runway, no displaced thresholds, declared distances symmetric both directions (3,000 m TORA/TODA/ASDA/LDA). The standing caution is **gusty crosswind exposure during Levante (easterly) wind episodes** — one documented METAR showed 300°/27 kt gusting 39 kt `[metar-taf.com sampling]`. No contamination/braking-action data specific to LEAL was found this pass.

### 3.4 Weather threat 🟧
The **Levante** — a regional easterly wind — brings cloud, rain and swell and can produce gusty crosswind conditions depending on exact runway alignment versus wind direction. No quantified crosswind-limit or frequency statistic specific to LEAL was found; treat as a standing regional caution rather than a rare event. See §14.

### 3.5 Operational considerations 🟥
The field's defining operational asymmetry: **RWY10 carries the only ILS (CAT I)**; **RWY28 has no ILS/LOC at all**, served solely by a VOR approach via the offshore **POLOP** fix. In marginal visibility with a westerly wind component, RWY28's VOR-only approach carries materially higher minima than RWY10's ILS — this is a real go/no-go and alternate-planning driver, not a paperwork item. Secondary items: the **RFF CAT 7 daily reduction window (1600–2000 LT)** unless PPR is filed for CAT 9, and the **exceptional/coordinated nature of Code F operations** (only one Code F aircraft normally accommodated at a time, per §13).

---

## 4. Cautions & Warnings

- **RWY28 has no ILS/LOC** — only a VOR approach via the offshore POLOP fix is published; in low visibility with a westerly wind, this is the only option and carries higher minima than RWY10's ILS CAT I.
- **RFF category reduces from CAT 9 to CAT 7 daily 1600–2000 LT** unless CAT 9 is requested by PPR ≥20 minutes ahead — confirm before planning ops that specifically require CAT 9 cover in that window.
- **Levante (easterly) wind** can bring gusty/crosswind conditions and swell with little notice.
- **Code F operations (up to A380/An-124) require prior coordination** — normally only one Code F aircraft is accommodated at a time (except a specific An-124 provision); do not assume ad-hoc Code F acceptance.
- **A346, A35K and B77W are restricted to TWY C8 only** — confirm current taxiway routing before planning any of these types into LEAL.
- Aena has run temporary **nightly runway closures (00:00–05:00 LT)** for maintenance/expansion works in past seasons (e.g. 2–29 March 2026) — a scheduled/temporary event, not a standing curfew; check current NOTAMs.

---

## 5. Aerodrome category, restrictions & crew qualification

- **Special-airport / category:** Not operator-categorised as a restricted-crew "special airport"; the standing crew-briefing items are the **RWY10/RWY28 ILS/VOR asymmetry** and the **RFF CAT 7 window**. 🟧
- **Crew-qualification gate:** None specific identified; standard line-qualified crew. Confirm currency on the RWY28 VOR-only approach before planning ops with a westerly wind forecast and marginal visibility. 🟧
- **Operating restrictions / bans:** Piston-engine aircraft are restricted (VFR 0700–2400 LT, IFR 0800–2200 LT) — not relevant to jet operations. No RNP AR ban or circling restriction found in reachable sources — verify current AIRAC. 🟧
- **Overflight / entry / permits:** Standard EU/Schengen arrival; no special state permit required. 🟩
- **Operations notes:** ANSP — **ENAIRE**; airport operator — **Aena**.

---

## 6. General / hours / services

| Item | Value | Flag |
|---|---|---|
| ATS hours | ATIS/TWR H24 per AIP `[AIP España AD 2-LEAL]` | 🟩 |
| AD operating hours | Not stated as an explicit blanket "H24" line in the reachable extract; implied by H24 ATC/customs coverage | 🟧 |
| Night / curfew restrictions | No standing jet curfew found. Piston-only VFR 0700–2400 LT / IFR 0800–2200 LT. Temporary nightly runway closures 00:00–05:00 LT ran 2–29 Mar 2026 for maintenance (Aena, one-off) | 🟧 |
| RFF category | **CAT 9**, reducing to **CAT 7 daily 1600–2000 LT** unless PPR ≥20 min for CAT 9 | 🟧 |
| Fuel | Jet A-1 assumed available; supplier/hours not confirmed | 🟧 |
| PCN | Segmented along RWY10/28: 0–289 m from THR10 = PCN 51/F/A/W/T; 289–2,411 m = PCN 85/F/A/W/T; 2,411–3,000 m = PCN 68/F/B/W/T | 🟩 |
| Customs | H24 | 🟩 |
| Handling / FBO | Not confirmed in reachable sources | 🟧 |

---

## 7. Runways & declared distances

| RWY | Dimensions | Surface / PCN | TORA | TODA | ASDA | LDA | Notes |
|---|---|---|---|---|---|---|---|
| 10 | 3,000 × 45 m | Asphalt / PCN segmented — 51/F/A/W/T (0–289 m from THR), 85/F/A/W/T (289–2,411 m), 68/F/B/W/T (2,411–3,000 m) | 3,000 m | 3,060 m | 3,000 m | 3,000 m | **ILS CAT I** (ident IAT); intersection take-offs published (e.g. INT A4) |
| 28 | 3,000 × 45 m | Same physical runway, reciprocal | 3,000 m | 3,060 m | 3,000 m | 3,000 m | **VOR approach only — no ILS/LOC**; intersection take-offs published (e.g. INT C5, INT C7) |

*Source: AIP España AD 2-LEAL, current AIRAC (retrieved 2026-07-26). No displaced thresholds published. All distances in metres.*

---

## 8. Communications

| Service | Callsign | Frequency | Hours | Notes |
|---|---|---|---|---|
| ATIS | Alicante Information | 120.080 | H24 | D-ATIS also available via datalink |
| Delivery | Alicante TWR | 119.855 (marked "CLR") | H24 | Clearance delivery — combined with TWR unit |
| Ground | — | — | — | No separate published Ground frequency — Alicante TWR combines tower/ground functions 🟧 |
| Tower | Alicante TWR | 118.155 (primary) · 121.500 (EMERG) · 122.100 (NATO/military backup) | H24 | |
| Approach | Valencia Control | 118.800 / 119.075 | — | Confirms the Barcelona-side FIR/ACC context for the eastern-Spain seaboard |
| Centre / FIR | Presumed **Barcelona ACC (LECB)** | Per current AIRAC | H24 | No dedicated Spanish FIR brief exists in-library — see [Europe (Continental) Airspace Briefing](../../../../airspace/europe.md) 🟧 |

*Source: AIP España AD 2-LEAL (retrieved 2026-07-26).*

---

## 9. Navaids

| Aid | Ident | Freq | Hours | Notes |
|---|---|---|---|---|
| VOR | ALT | 113.800 (1° E) | H24 | Terminal-area VOR |
| VOR | ATE | 114.650 (1° E) | H24 | Terminal-area VOR |
| ILS/DME RWY10 | IAT | 110.300 / CH40X | H24 | **CAT I**, LOC course 100° MAG |
| — RWY28 | — | — | — | **No ILS/LOC published** — VOR approach only, via the offshore **POLOP** fix |

*Source: AIP España AD 2-LEAL (retrieved 2026-07-26).*

---

## 10. Arrival

- **Transition altitude / level:** Not confirmed this pass — verify current chart. 🟧
- **Speed:** Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm no local override on current chart.
- **Preferential runway logic:** **RWY10** preferred with onshore/easterly wind component (ILS CAT I available); **RWY28** used with offshore/westerly component (VOR approach only).
- **Approaches (names only — verify minima on current AIRAC charts):**

| RWY | Approach | IAF | FAF/FAP alt | Notes |
|---|---|---|---|---|
| 10 | ILS CAT I (IAT) | Not confirmed 🟧 | Not confirmed 🟧 | Primary precision approach |
| 28 | VOR (via POLOP) | POLOP (offshore fix) | Not confirmed 🟧 | No ILS/LOC on this end — higher minima than RWY10 |

- **STARs (names only):** Not confirmed in reachable research pass — pull current-AIRAC STAR list at planning. 🟧
- **LVP:** 🟥 No CAT II/III capability at LEAL — RWY10 is CAT I only, RWY28 has no ILS at all. In low-visibility conditions with an unfavourable wind for RWY10, diversion risk rises materially — plan alternates accordingly.
- **Missed approach watch-items:** Low-to-moderate terrain inland/west — verify chart. The RWY28 missed approach tracks toward the coast/sea given the VOR-via-POLOP routing.

---

## 11. Departure

- **SIDs (names only — fly the charted version):** Not confirmed in reachable research pass — pull the current-AIRAC SID list at planning. 🟧
- **RNP / climb-gradient requirements:** Not confirmed this pass. 🟧
- **Take-off minima:** Not confirmed this pass. 🟧
- **Start-up / push-back:** Alicante TWR combines tower/ground functions; specific cross-bleed/APU notification procedure not confirmed. 🟧
- **ATC slot / CTOT & clearance:** No standing IATA slot-coordination level confirmed for LEAL in reachable sources — treat as non-coordinated pending VAMSYS/Aena confirmation. 🟧
- **De-icing:** Not typically required at this mild Mediterranean-coastal field; availability/procedure not independently confirmed. 🟧

---

## 12. Noise & Environmental

- **Noise abatement (NAP):** Not confirmed in reachable sources. 🟧
- **Night noise / dB limits:** Not confirmed. The piston-engine hour restriction (§5/§6) is the only published operating-hours-style constraint found. 🟧
- **Engine run-up restrictions:** Not confirmed. 🟧
- **Reverse thrust / idle-reverse policy:** Not confirmed. 🟧

---

## 13. Ground operations

- **Stands for our types:** 🟧 **Code E** accepted at PRKG 200, PRKG 2 and PRKG 4C. **Code F** accepted at PRKG 2 (max B744, B748, A342, A124/An-124 or A388/A380) and PRKG 4C (max B744, A342 or A124). PRKG 200 max B744 or A342. Code F operations require airport coordination; simultaneous stopover of two or more Code F aircraft is not normally cleared (except a specific An-124 provision).
- **Push-back:** Mandatory-vs-self-manoeuvre policy not confirmed. 🟧
- **Standard taxi routes:** RWY10 landing traffic via TWY C2/C4/C5 (Code C or below) or C4 (Code D/E/F). RWY28 landing traffic via TWY A2/A4/A5/A6 (A4 restricted to Code C or below). Stand nose-orientation convention flips with the active runway (aircraft nosed West when RWY10 is in use; nosed East when RWY28 is in use).
- **Hot spots / tight taxiways:** 🟧 **A346, A35K and B77W are restricted to TWY C8 only.** No formally charted "hot spot" list was located in reachable sources — not confirmed whether one exists.
- **Follow-me:** Availability not confirmed. 🟧

---

## 14. Weather & seasonal (durable)

- **Climate / prevailing wind:** Mediterranean coastal climate — mild, generally low rainfall, warm dry summers.
- **Seasonal hazards:** The **Levante** (easterly regional wind) periodically brings cloud, rain, swell and gusty conditions — a documented METAR sample showed 300°/27 kt gusting 39 kt. No major seasonal storm/fog climatology specific to LEAL was found this pass.
- **Local effects:** Coastal location; standard sea-breeze effects possible, not otherwise flagged.

> **Live weather — pull at planning (T-2h):** METAR, TAF, TREND, SIGMET/AIRMET. Not stored here.

---

## 15. NOTAMs

> **Pull at planning (T-2h).** Perishable — not stored here. Check: runway/taxiway closures (note past temporary nightly-maintenance closures), navaid U/S (especially the single ILS on RWY10), lighting, obstacle/crane, RFF category status (CAT 7/9 window), GPS/RAIM. Source: AIS / OFP NOTAM block.

---

## 16. Fuel & alternate planning notes

- **Typical role for us:** Leisure/tourist destination in the network — **VAMSYS category S, not a base**.
- **Nearest suitable alternates:** Company preferred alternates **[LEBL](../lebl/index.md)** (Barcelona), **[LEMD](../lemd/index.md)** (Madrid), **[LEMG](../lemg/index.md)** (Málaga) `[VAMSYS mirror 2026-07-25]` — confirm suitability, runway/RFF adequacy and current minima per leg.
- **Fuel-uplift notes:** Jet A-1 assumed available as a major leisure gateway; specific into-plane provider/hours not confirmed. 🟧 See [`OM E — Fuel Policy`](../../../../../flight-ops/fuel-policy.md).
- **Range/perf flags for our fleet:** Field length (3,000 m) non-limiting for any K Global narrowbody or widebody type. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md). Code F acceptance (incl. A380) is real but exceptional/coordinated only (§13) — do not plan routine Code F ops here.

---

## 17. Fleet-specific notes (optional)

- LEAL functions as a narrowbody leisure destination in normal K Global operations (VAMSYS Category S, non-base). Code E stands are routine (PRKG 200/2/4C); Code F — including the A380 — is formally accommodated at PRKG 2 but only via prior airport coordination, not ad-hoc. See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-by-type reference; no field-length or field-elevation performance penalty applies to any type here.

---

## 18. Open items (🟧 — confirm against AIP / current AIRAC)

- Transition altitude/level, take-off minima and exact SID/STAR/IAF names — not obtained this pass; pull the live current-AIRAC procedure/chart set before use.
- Blanket airport operating-hours statement (H24 assumed via ATC/customs coverage, not independently stated as such).
- Slot-coordination level for LEAL — not confirmed; treated as non-coordinated pending VAMSYS/Aena confirmation.
- De-icing availability/procedure — assumed rare/NIL given climate, not independently confirmed.
- Noise-abatement procedure (NADP), night dB limits, engine run-up restriction, reverse-thrust/idle-reverse policy, follow-me availability, push-back mandatory-vs-self-manoeuvre policy — none confirmed in reachable sources.
- Formally AIP-charted taxiway hot spots — not confirmed to exist or not exist.
- Fuel supplier(s) and into-plane hours — assumed available, not individually confirmed.
- RFF CAT 7 window (1600–2000 LT) and mag variation (1° E, 2020 epoch) — sourced to the AIP extract retrieved this pass; recommend a live-AIRAC cross-check before treating as current.
- En-route FIR/ACC identity (presumed Barcelona ACC/LECB) — APP unit name ("Valencia Control") is confirmed; the ACC/FIR identifier itself was not independently re-verified against an ENR chart this pass.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim material (current-AIRAC charts) informs content but is not listed here.*

- **AIP España (ENAIRE), AD 2-LEAL**, current AIRAC — https://aip.enaire.es/AIP/contenido_AIP/AD/AD2/LEAL/LE_AD_2_LEAL_en.html (retrieved 2026-07-26). *ARP/elevation/mag-var, runway/declared distances/PCN, ATC frequencies, navaids/ILS, RFF category, local stand/taxiway regulations.*
- OurAirports — https://ourairports.com/airports/LEAL/ , /runways.html , /frequencies.html (retrieved 2026-07-26). *Cross-check.*
- Wikipedia — "Alicante–Elche Miguel Hernández Airport" — https://en.wikipedia.org/wiki/Alicante–Elche_Miguel_Hernández_Airport (retrieved 2026-07-26). *Traffic figures, base-carrier detail.*
- Travel And Tour World — "Alicante-Elche Airport on Track for Twenty Million Passengers in 2025" — https://www.travelandtourworld.com/news/article/alicante-elche-airport-on-track-for-twenty-million-passengers-in-2025-as-winter-flights-surge-with-new-routes/ (retrieved 2026-07-26). *2025 traffic/base-carrier detail.*
- Euro Weekly News — "Alicante-Elche airport to close runway at night for maintenance works" — https://euroweeklynews.com/2026/03/01/alicante-elche-airport-to-close-runway-at-night-for-maintenance-works/ (retrieved 2026-07-26). *Temporary 2026 nightly closure.*
- PPRuNe forum thread on LEAL RWY10/28 approach selection — https://www.pprune.org/archive/index.php/t-339152.html (retrieved 2026-07-26). *Tier-4 operational corroboration only — not independently verified against the primary approach chart.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Built from AIP España (ENAIRE); K Global fields from live VAMSYS; 4-page pack. |
