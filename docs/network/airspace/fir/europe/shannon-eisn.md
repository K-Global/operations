# Shannon (EISN) — FIR Briefing

**Scope:** single FIR — the Republic of Ireland, and the key **NE-Atlantic gateway to Shanwick oceanic** · **Parent area brief:** [Europe (Continental)](../../europe.md) · [North Atlantic (NAT)](../../north-atlantic.md) — the primary cross-link for this FIR · **Adjacent FIRs:** London (EGTT) E · Scottish (EGPX) NE · Shanwick Oceanic (EGGX) W (primary interface) · Brest (LFRR) SE
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — built from public AirNav Ireland AIP/Wikipedia sources; exact Dublin/Shannon internal sector split flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Shannon FIR is a **fully radar/surveillance-controlled domestic FIR** — no procedural segment on the domestic side. Its defining operational role is as the **NE-Atlantic gateway**: the FIR contains the **SOTA and NOTA oceanic transition areas**, delegated pieces of the Shanwick Oceanic Control Area that AirNav Ireland operates as one consolidated block together with the Shannon FIR proper. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances. Terminal procedures for the aerodrome inside the FIR (EIDW) live in the airport briefing (§9). Live restrictions are pulled at planning (§11). Cross-link the **North Atlantic** briefing for everything beyond the oceanic boundary. Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **EISN** — Shannon FIR, **surface to FL660** (single FIR, no separate UIR split published) |
| Controlling ATSU / ANSP | **AirNav Ireland** — operationally split between **Dublin ACC** (eastern Ireland / Dublin TMA) and **Shannon ACC** (western Ireland, incl. the SOTA/NOTA oceanic-transition areas) 🟧 exactsector geometry not independently verified here |
| Airspace class & vertical limits | 🟧 **Class G** outside CTRs/CTAs up to FL75; CTRs Class C; CTAs Class A & C. The **SOTA/NOTA transition areas are Class A, FL55–FL660**. 🟩 Above Donegal, the **high-level airspace FL245–FL660 is controlled by Scottish Control (EGPX)** — a cross-border delegation to NATS |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO EUR RVSM) — see OM E §5 |
| PBN environment | **RNAV 5** enroute · **RNP 1** terminal (SID/STAR) · **RNP APCH** arrivals — EU PBN Implementing Rule (Ireland, EU member state) — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar/ADS-B** surveillance domestically; 🟧 **CPDLC above FL285** for equipped aircraft (domestic mandate) — distinct from the **oceanic FANS-1/A CPDLC+ADS-C** used once transferred to Shanwick |
| Primary language & comms | 🟩 **VHF throughout, 8.33 kHz mandatory**; **English** |
| Key hazard(s) | Low, benign Irish terrain; Atlantic frontal weather (fog, wind, low pressure systems) drives seasonal diversions; the FIR's core operational identity is the **SOTA/NOTA oceanic-transition function** feeding Shanwick — traffic density and procedural complexity concentrate at that boundary, not over the Irish landmass itself |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/surveillance-controlled domestically. The **SOTA/NOTA transition areas remain within NAT HLA** (FL285–FL420 requirements still apply there) even though AirNav Ireland provides ATS as one consolidated operation. |
| Communication coverage & language | 🟩 | Continuous VHF domestically; 🟥 **8.33 kHz mandatory** (Ireland, EU member state). English. NOTA comms are via VHF unless otherwise advised by Shanwick, Scottish or Shannon ACC. |
| Datalink / surveillance requirement | 🟧 | CPDLC above FL285 domestically (EU mandate, directly applicable — Ireland remains an EU member state, unlike the UK). NAT HLA/FANS-1/A requirements apply once in SOTA/NOTA — see NAT briefing. |
| Terrain / MORA / driftdown | 🟩 | Low. Highest point in Ireland is **Carrauntoohil (~3,406 ft)** — not a cruise-level factor. §8. |
| Diversion-aerodrome coverage | 🟧 | **Dublin (EIDW)** is the only OM C-curated brief; **Shannon (EINN)** and **Cork (EICK)** are the other major Irish diversion fields but have no brief yet. §9. |
| Special-use airspace (military / danger) | 🟩 | Ireland has no significant domestic military-airspace complexity comparable to the UK; minor danger areas near training ranges — confirm at planning. |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **RVSM FL290–410 · RNAV 5 · RNP 1 · 8.33 kHz · Mode S + ADS-B Out.** All defined in OM E. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Shannon FIR covers **the Republic of Ireland** and extends westward into the Atlantic to include the **SOTA (Shannon Oceanic Transition Area)** and **NOTA (North Oceanic Transition Area)** — designated pieces of the Shanwick Oceanic Control Area delegated to AirNav Ireland by international agreement. AirNav Ireland provides ATS across NOTA, SOTA and the Shannon FIR proper as **one consolidated operation**.
- **Vertical split:** 🟩 the FIR runs **surface to FL660** with no separate published UIR split (unlike the London/Scottish FIR+UIR pattern). 🟩 Notably, the **high-level airspace above the area around Donegal (northern Ireland border region) is controlled by Scottish Control (EGPX)**, not by Shannon/Dublin ACC — a cross-border delegation worth noting for any route transiting the north-west.
- **Adjacent FIRs (by boundary):**
  - **E — London (EGTT, NATS).** Across the Irish Sea / Celtic Sea.
  - **NE — Scottish (EGPX, NATS).** Across the North Channel; also the FIR that owns the Donegal-area high-level airspace noted above.
  - **W — Shanwick Oceanic (EGGX).** The **primary interface** for this FIR — Shannon's entire western identity is built around feeding traffic into (and receiving it from) the Shanwick OCA via SOTA/NOTA.
  - **SE — Brest (LFRR, DSNA).** Across the Celtic Sea.
- **Sectorisation:** 🟧 AirNav Ireland operationally splits Irish airspace between **Dublin ACC** (eastern Ireland, incl. the Dublin TMA) and **Shannon ACC** (western Ireland, incl. SOTA/NOTA) — the exact internal sector geometry is not independently verified here; the transit-relevant fact is that **Shannon ACC owns the oceanic-transition function** regardless of the internal Dublin/Shannon split.

---

## 4. Control & ATSU

- **Lower-airspace ATSU:** 🟩 **Shannon ACC / Dublin ACC, AirNav Ireland** — radar/surveillance control across the Shannon FIR, including the Dublin (EIDW) approach/TMA feed.
- **Upper-airspace ATSU:** 🟩 the same AirNav Ireland structure controls Irish upper airspace, **except** the Donegal-area high-level airspace delegated to **Scottish Control (EGPX)** (§3).
- **Oceanic-transition function:** 🟥 **Shannon ACC** provides ATS within **SOTA and NOTA** as part of its consolidated operation — this is the FIR's defining role. The **Prestwick Oceanic Area Control Centre ("Shanwick")** is the next authority beyond SOTA/NOTA, coordinated via a formal handoff (§11) — see the North Atlantic briefing for the oceanic side proper.
- **FIS / FSS:** domestic Irish flight information service via AirNav Ireland for uncontrolled airspace.
- **Surveillance basis:** 🟩 continuous radar + **ADS-B** domestically; the SOTA/NOTA areas are within NAT HLA (FL285–FL420) and carry the associated oceanic surveillance requirements even while ATS is provided by the same Irish unit.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Shannon FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO EUR RVSM. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5** enroute · **RNP 1** terminal SID/STAR · **RNP APCH** arrivals — EU PBN Implementing Rule (Ireland is an EU member state, so the rule applies directly, unlike the UK's post-EU-Exit assimilated-law position). See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟥 **mandatory** for IFR/GAT radios (EU 1079/2012, directly applicable).
- **Datalink (CPDLC):** 🟧 **CPDLC (ATN B1/Link 2000+)** expected/mandated above **FL285** domestically for equipped aircraft. **Distinct** from the **oceanic FANS-1/A CPDLC+ADS-C** required once transferred into SOTA/NOTA/the Shanwick OCA proper — the oceanic requirements are fully defined in the North Atlantic briefing (RNAV10/RNP10 or RNP4, RCP240/RSP180 for PBCS tracks), not re-derived here. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out (1090 MHz ES) mandatory** for aircraft above the applicable mass/speed threshold — EU SPI IR.
- **NAT HLA note:** any flight continuing west of SOTA/NOTA into the Shanwick OCA proper must hold **NAT HLA approval** in addition to the above — see the North Atlantic briefing §4.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a transit is handed through the relevant **Dublin or Shannon ACC sector** toward the adjacent-FIR ACC or, westbound, into **SOTA/NOTA** ahead of the Shanwick oceanic boundary; exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies.
- **NOTA/SOTA comms:** VHF, per current AIP ENR 2.1, unless otherwise advised by **Shanwick**, **Scottish** or **Shannon ACC**.
- **Oceanic handoff comms (adjacent, not domestic):** once transferred beyond SOTA/NOTA into the Shanwick OCA proper, **Shanwick Radio** (HF, via Ballygirreen — physically sited in Ireland, historically a joint Irish/UK operation) and **Shanwick Oceanic/Control** (VHF, Prestwick) take over — detailed in the North Atlantic briefing §5.
- **Language:** 🟩 **English**.
- **8.33 kHz:** 🟥 all enroute frequencies are **8.33 kHz-spaced** — mandatory equipage (§5).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 Ireland has operated FRA in the **Shannon UIR / SOTA since December 2009**, and **extended it into the lower airspace (below FL245) from 12 October 2017** — one of the earliest and most complete FRA implementations in Europe. Ireland's FRA is part of the pan-European **Borealis FRA Programme** (which also covers the UK, Iceland, and the Nordic/Baltic states), enabling largely direct point-to-point routeing across the whole Shannon FIR.
- **Airway spine:** minimal residual fixed-route requirement given the near-complete FRA coverage; any remaining constrained segments are AIRAC-published.
- **Major fixes / entry-exit points:** FRA entry/exit points at the FIR boundary; **oceanic entry points (OEPs)** at the SOTA/NOTA/Shanwick OCA boundary for westbound traffic — the SimBrief/current-AIRAC route provides the exact string.
- **Hubs & aerodromes inside the FIR:** 🟩 **Dublin (EIDW)** — the only OM C-served aerodrome in this brief. 🟧 Shannon (EINN) and Cork (EICK) are the other principal Irish airports but have no OM C brief yet.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 low throughout. Ireland's highest point, **Carrauntoohil (~3,406 ft / 1,038 m)** in the south-west, is well below any cruise-level concern.
- **Boundary terrain:** 🟩 none of operational significance — the higher Scottish/Highland terrain lies across the Scottish-FIR boundary to the north-east, not here.
- **Driftdown / depressurisation escape:** not a cruise-level constraint over the Irish landmass; the more relevant escape consideration for this FIR is the **oceanic no-divert window** once west of the coast — see the North Atlantic briefing §7/§8 for the Greenland/Iceland-side driftdown picture.
- **Cold-temperature altitude corrections:** applied at the terminal aerodrome in winter, not in enroute cruise — see the airport briefing (§9).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Dublin Intl | **EIDW** | Home aerodrome / primary alternate | [EIDW brief](../../../destinations/europe/ireland/eidw/index.md) |
| Shannon | **EINN** | 🟧 Major western Irish diversion field (gives its name to the FIR) — no OM C brief yet | Brief to build 🟧 |
| Cork | **EICK** | 🟧 Southern Irish diversion field — no OM C brief yet | Brief to build 🟧 |

- **Coverage note:** 🟧 sparser than the London/Scottish FIRs — Ireland has only three principal international airports; EIDW is the only one currently briefed. Verify diversion spacing on any route approaching the west coast ahead of the oceanic boundary.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟩 Ireland has no domestic military-airspace complexity comparable to the UK's; minor training areas exist but are not a significant enroute factor.
- **Danger / restricted / prohibited areas:** 🟧 minor named areas near training ranges — AIP/NOTAM-published; confirm at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — standard EU domestic operation, no permits.

> **SUA currency:** re-check active danger-area status and NOTAMs at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** per **SERA (Regulation (EU) No 923/2012)**, directly applicable as Ireland is an EU member state — squawk **7600**, continue per the last acknowledged clearance / filed route and levels. 🟧 Confirm any Irish-specific refinement at **AIP ENR 1.8/GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical domestically — **request the deviation from ATC**. Squawk **7700** and declare for emergencies. Once transferred into SOTA/NOTA/the Shanwick OCA, the **NAT oceanic contingency procedures** (SLOP, offset turns) apply instead — see the North Atlantic briefing §10.
- **Oceanic handoff note:** 🟥 for flights connected to Shannon with **Shanwick as next ATC unit**, Shannon sends a **next-data-authority (NDA) message ~18 minutes prior to the oceanic boundary** — a formal coordination procedure specific to this FIR's gateway role.
- **Seasonal hazards (durable):**
  - **Atlantic frontal weather** — fog, wind and frequent low-pressure systems off the west coast; a bigger driver of diversions here than convective weather.
  - **Winter terminal icing/fog** at Dublin (EIDW) — a terminal, not enroute, driver; see the airport brief and OM E LVO/Cold-Weather docs.
  - **Volcanic ash (strategic wildcard)** — Shannon FIR, sitting directly on the Iceland–Europe axis, is exposed early to any Icelandic ash event; **VAAC London** is the responsible advisory centre.
  - **Space weather:** more relevant here than in continental Europe given the FIR's direct function as the NAT gateway — see the North Atlantic briefing §11 for the HF/GNSS-degradation detail.

> **Pull at planning (T-2h):** enroute NOTAMs, current FRA/airway status, SIGMET/AIRMET, **VAAC London** volcanic-ash advisories, the NAT track message of the day if continuing oceanic, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **Dublin ACC / Shannon ACC internal sector split** — stated as east/west (incl. SOTA/NOTA) but not independently re-verified against the current AIP.
- **Airspace class letter per band** below FL55 outside CTR/CTA (Class G) — confirm at current AIP ENR 1.4.
- **Shannon (EINN)** and **Cork (EICK)** have no OM C airport briefs yet, despite EINN giving its name to the FIR — build if they become planned alternates.
- **Donegal-area high-level (FL245–FL660) delegation to Scottish Control** — cross-check current AIP wording and exact lateral extent.
- Precise **Shannon/London and Shannon/Scottish FIR boundary geometry** — confirm against current AIRAC charts.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **AirNav Ireland AIP — ENR / GEN sections**: ENR 2.1/2.2 (FIR/UIR & other regulated airspace, SOTA/NOTA), GEN 3.3 (air traffic services), GEN 3.4 (communication services) — https://www.airnav.ie (retrieved 2026-08-02).
- **Wikipedia — Shannon FIR** (surface–FL660, Class G/CTR/CTA structure, SOTA/NOTA Class A FL55–660, Donegal-area Scottish Control delegation) — https://en.wikipedia.org/wiki/Shannon_FIR (retrieved 2026-08-02). *Tier-4 corroboration.*
- **Wikipedia — Shanwick Oceanic Control** (SOTA/NOTA delegation to Shannon Control, NDA message timing, Ballygirreen/Shanwick Radio history) — https://en.wikipedia.org/wiki/Shanwick_Oceanic_Control (retrieved 2026-08-02). *Tier-4 corroboration.*
- **IAA (now AirNav Ireland) — "IAA Successfully Extends Shannon's Free Route Airspace into Lower Airspace"** (FRA in Shannon UIR/SOTA since Dec 2009; extended below FL245 from 12 Oct 2017; Borealis FRA Programme) — https://www.iaa.ie/media/2017/11/02/iaa-successfully-extends-shannon-s-free-route-airspace-into-lower-airspace (retrieved 2026-08-02).
- **Airport Technology — "Irish and Icelandic ANSPs implement Free Route Airspace"** (Borealis FRA Programme context) — https://www.airport-technology.com/news/irish-icelandic-ansps-implement-free-route-airspace/ (retrieved 2026-08-02).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
