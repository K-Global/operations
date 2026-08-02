# Middle East / Gulf — Airspace Briefing

**Scope:** the ICAO **MID region** transit picture — the Arabian Peninsula, the Persian/Arabian Gulf, the Gulf of Oman and the northern Arabian Sea, the Red Sea / Bab-el-Mandeb approaches and the surrounding conflict-affected FIRs · **FIRs / OCAs covered:** Emirates (**OMAE**) · Bahrain (**OBBB**) · Jeddah (**OEJD**, Saudi Arabia) · Kuwait (**OKAC**) · Baghdad (**ORBB**, Iraq) · Tehran (**OIIX**, Iran) · Muscat (**OOMM**, Oman — incl. Arabian Sea oceanic) · Sanaa (**OYSC**, Yemen — incl. Arabian Sea oceanic) · Damascus (**OSTT**, Syria) · Amman (**OJAC**) · Beirut (**OLBB**) · Doha/Qatar (**OTDF**)
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — structure/procedures AIP/ICAO-MID-verified where reached; **the conflict-zone / overflight-risk picture (§9) is live and perishable — 🟥 re-check at planning (§11)**; per-FIR class letters, some boundary decimals and datalink coverage 🟧 (see §12)

> **Read-me:** Strategic transit reference for X-Plane 11, not a chart or clearance. Routings and levels here are planning context — file and fly the SimBrief/current-AIRAC-validated route and comply with tactical radar-ATC clearances and any active managed-corridor / temporary-route restrictions. **This region is the network's single most conflict-zone-critical area:** several FIRs sit under active EASA Conflict Zone Information Bulletins (CZIBs), the airspace opens and closes at short notice, and **GNSS jamming/spoofing is pervasive**. The §9 conflict-zone picture is **durable context, re-check-live** — the specific advisories, closures and NOTAMs MUST be pulled fresh at planning (§11); nothing perishable is stored here. Single-FIR terminal/structure detail for the bridge hub is in the **[Emirates (OMAE) FIR brief](fir/middle-east/emirates-omae.md)**; aerodrome detail is in the airport briefs (§8). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIRs / control authorities | **Continental Gulf/Arabian**: Emirates (OMAE, GCAA) · Bahrain (OBBB) · Jeddah (OEJD, GACA — the largest MID FIR) · Kuwait (OKAC) · Doha/Qatar (OTDF) · Muscat (OOMM, incl. **Arabian Sea oceanic**) · Amman (OJAC) · Beirut (OLBB). **Conflict-affected**: Baghdad (ORBB) · Tehran (OIIX) · Damascus (OSTT) · Sanaa (OYSC, incl. **Arabian Sea oceanic**, parts delegated to Muscat ACC) |
| Controlling ATSU(s) & type | 🟩 **Radar + ADS-B surveillance** across the developed Gulf/Arabian continental FIRs (dense, tactical-vectoring environment feeding the world's busiest widebody hubs). 🟧 **Procedural / remote** over the **Arabian Sea oceanic** portions of Muscat and Sanaa FIRs, and degraded surveillance in conflict-affected FIRs |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO MID region RVSM). Defined in **OM E**, applied here |
| Separation standard | Radar/ADS-B vectored separation over the continental FIRs; **RNAV10 (RNP10)** procedural separation over the Muscat/Sanaa Arabian Sea oceanic areas |
| Datalink | 🟧 **CPDLC available** in the **Jeddah (OEJD)** FIR (+ DCL at major Saudi towers) and the **Emirates upper airspace** for equipped aircraft; VHF voice primary elsewhere. FANS/oceanic datalink relevant only to the Arabian Sea remote portions |
| Primary comms | 🟩 **VHF continuous** across the continental FIRs (English, **25 kHz**); **HF / SATVOICE** for the Arabian Sea oceanic legs (Muscat/Sanaa) |
| Key hazard(s) | 🟥 **CONFLICT ZONES — the defining feature**: active-risk / CZIB airspace over **Iran, Iraq, Syria, Yemen, the Red Sea / Bab-el-Mandeb**, plus **avoid-all-levels CZIBs over the Gulf FIRs** and **pervasive GNSS jamming & spoofing** across the Gulf and Eastern Mediterranean. Also: extreme **traffic density** on the surviving corridors; **shamal dust / extreme heat / hot-and-high**; Asir/Hajar **terrain** on the southern bypass |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Overflight / conflict-zone risk | 🟥 | **The headline hazard.** Multiple FIRs under active EASA CZIB "avoid at all levels" (Iran, Iraq, Lebanon, Bahrain, Kuwait, Qatar, UAE, Gulf of Oman W of 58°E); Kuwait (OKAC) **overflight-prohibited**; Yemen (OYSC) HIGH at all levels; Syria (OSTT) high-risk. Missile/drone activity, intercept-debris, misidentification. **Live & perishable — re-check at planning (§9/§11).** |
| Communication coverage (VHF/HF/SATVOICE) | 🟩/🟧 | Continuous VHF (English, 25 kHz) across continental FIRs; **HF/SATVOICE** for the Muscat/Sanaa Arabian Sea oceanic legs. 🟧 Severe **ATC congestion / blocked transmissions** reported on the overloaded southern-bypass corridors (Jeddah/Cairo). |
| Datalink / surveillance requirement | 🟧 | Radar + ADS-B over the continental Gulf; **CPDLC** in Jeddah FIR and Emirates upper airspace (equipped). Surveillance **degraded** in conflict FIRs (Iran) and **procedural** over the Arabian Sea. Confirm active band/login at planning. |
| Terrain / MORA / driftdown | 🟧 | Mostly low desert/sea, but the **southern bypass** crosses the **Asir/Sarawat highlands** (SW Saudi, ~3,000 m near the Yemen border) and the **Hajar Mountains** (Oman/UAE east); **Zagros** underlies the avoided Iran corridor. Arabian Sea legs are **long over-water**. §7. |
| Diversion-airfield coverage | 🟧 | Dense, high-quality fields on the **Gulf and northern-Saudi** trunks — but the **conflict picture removes many nominal diverts** (Iran/Iraq/Yemen/southern-Saudi closures), and the **Red Sea / Arabian Sea** crossings are ETP-driven. §8. |
| Seasonal / environmental | 🟧 | **Shamal winds & blowing dust** (summer + winter NW shamal, haboob), **extreme heat / density altitude**, **hot-and-high** on the Asir highlands, and the **Arabian Sea SW monsoon** (Jun–Sep; Salalah khareef) on the southern oceanic legs. §11. |
| Equipment / approval (RVSM, PBN, oceanic) | 🟥 | **RVSM FL290–410 · RNAV 5 enroute · RNAV 1 / RNP 1 terminal · RNP APCH · RNAV10 (RNP10) over the Arabian Sea oceanic areas · Mode S + ADS-B Out.** Defined in **OM E** — referenced, not re-derived. §4. |

---

## 3. Airspace structure

- **A region defined by its FIR mosaic, not one system.** Unlike an oceanic brief, the Middle East is a **tight patchwork of national FIRs** funnelling the Europe–Asia and Europe–Gulf–Africa trunk flows through a shrinking set of politically-usable corridors. The **operational picture is dominated by which FIRs are open**, not by airway design. 🟥
- **Continental Gulf/Arabian FIRs (radar/ADS-B, Class A upper):**
  - **Jeddah (OEJD, Saudi Arabia — GACA):** the **largest FIR in the MID region**, spanning the whole Kingdom and the eastern Red Sea; the **backbone of the surviving southern bypass** (Egypt ↔ Saudi ↔ Oman/UAE). Very high traffic; **CPDLC introduced in the Jeddah FIR** with DCL at the major Saudi towers. 🟩
  - **Emirates (OMAE, UAE — GCAA):** the K Global **bridge hub** FIR (OMAA/OMDB/OMDW). Dense multi-sector "U.A.E. Radar" from FL150. Full structure/terminal detail in the **[Emirates (OMAE) FIR brief](fir/middle-east/emirates-omae.md)** — not repeated here. 🟩
  - **Muscat (OOMM, Oman):** continental radar airspace over Oman **plus a large Arabian Sea oceanic sector (RNAV10/RNP10, procedural)** — a key **southern-bypass exit** toward the Indian Ocean/South Asia and the **oceanic gateway** on that flank. 🟧
  - **Bahrain (OBBB), Kuwait (OKAC), Doha/Qatar (OTDF):** the compact, dense central-Gulf FIRs over the western Gulf trunk — all currently CZIB-affected (§9). 🟧
  - **Amman (OJAC, Jordan) · Beirut (OLBB, Lebanon):** the Levant continental FIRs bridging the Eastern Mediterranean to the Gulf; Beirut is CZIB-affected. 🟧
- **Conflict-affected FIRs (degraded/closed — see §9):** **Tehran (OIIX)**, **Baghdad (ORBB)**, **Damascus (OSTT)** and **Sanaa (OYSC)** form the **closed/high-risk core** the surviving corridors route *around*. Sanaa additionally contains **Arabian Sea oceanic airspace, with ATS on portions of certain airways temporarily delegated to Muscat ACC**, and **72-hour prior permission** required for any Sanaa-FIR operation. 🟥
- **Classes & level bands:** 🟧 controlled airspace to the upper limit — **Class A** in the upper bands over the developed FIRs; controlled TMAs (Class C/D) over the hub terminal complexes. Confirm exact class-per-band per state AIP ENR 2.1.
- **Entry/exit & transition points:** the flyable route set is currently **smaller than the published network** and **changes by NOTAM / temporary-route bulletin**. The filed route is the **SimBrief/current-AIRAC-validated string**; oceanic entry fixes apply on the Muscat/Sanaa Arabian Sea flank. 🟧

---

## 4. Equipment, approvals & separation

*Capability topics (RVSM, PBN/RNP, CPDLC/ADS-C, oceanic separation) are **defined once in OM E — Operations**; this section states which apply across the region and references OM E — it does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — ICAO **MID region RVSM**. See [`OM E — RVSM Operations`](../../flight-ops/rvsm-operations.md). MID collision-risk monitoring (MIDRMA) remains within the ICAO Target Level of Safety, though large-height-deviation reporting across MID states is an ongoing data gap.
- **PBN / RNP:** 🟥 **RNAV 5** enroute (MID RNAV 5 implementation completed) · **RNAV 1 / RNP 1** terminal in the dense hub TMAs · **RNP APCH** arrivals · **RNAV 10 (RNP 10)** over the **Muscat and Sanaa Arabian Sea oceanic** areas. See [`OM E — PBN and RNP Operations`](../../flight-ops/pbn-and-rnp-operations.md). 🟧 With **GNSS spoofing/jamming pervasive** (§9), confirm RNP integrity monitoring and conventional-navaid (DME/DME/IRU) fallback at planning.
- **Datalink (CPDLC/ADS-C):** 🟧 **CPDLC available in the Jeddah (OEJD) FIR** (with **DCL** departure-clearance at the major Saudi towers) and in the **Emirates upper airspace** for equipped aircraft; VHF voice remains primary region-wide. **FANS-1/A datalink** is relevant to the **Arabian Sea oceanic** portions of Muscat/Sanaa. See [`OM E — Datalink and Oceanic Procedures`](../../flight-ops/datalink-and-oceanic-procedures.md). Confirm active band/sectors/login at planning.
- **Transponder / ADS-B:** 🟥 **Mode S** required; **ADS-B Out** underpins the continental surveillance service. Confirm equipage on the OFP.
- **Oceanic / remote approval (Arabian Sea):** 🟧 RNAV10 (RNP10) navigation approval and HF/SATVOICE for the procedural Muscat/Sanaa over-water sectors on the southern flank — the only non-radar segments a MID transit normally meets.

---

## 5. Communications

- **VHF — continuous, primary:** 🟩 the continental Gulf/Arabian FIRs are worked on **VHF throughout**, **English** (ICAO), **25 kHz** channel spacing (the 8.33 kHz mandate is European — not applicable here).
- **HF / SATVOICE:** 🟧 required for the **Arabian Sea oceanic** legs (Muscat OOMM / Sanaa OYSC) where VHF/radar end; SATVOICE may serve as a long-range backup. Not required on the continental Gulf trunks.
- **Datalink comms:** CPDLC in Jeddah / Emirates upper airspace (§4) as an alternative to voice for equipped aircraft.
- **Congestion — a live operational caveat:** 🟧 with traffic concentrated on the surviving **southern bypass**, OPSGROUP member reports describe **severe frequency congestion and blocked transmissions in the OEJD/Jeddah and adjacent HECC/Cairo FIRs** — crews have reported being **unable to raise ATC** for extended segments. Keep TCAS/anti-collision lights active and consider a **PAN** broadcast if an un-cleared deviation becomes necessary. §11.
- **Emergency / interpilot VHF:** guard **121.5 MHz** (monitor); air-to-air **123.45 MHz**.
- **Position reporting:** radar/ADS-B on the continental FIRs; **procedural (voice/CPDLC) reports** over the Arabian Sea oceanic sectors.

---

## 6. Routing & levels

- **Three surviving corridors — the practical picture.** With the central Europe–Asia corridor broken by the Iran/Iraq closures, transit flows have consolidated onto **three routes** (durable pattern; the flyable detail is by NOTAM):
  - 🟩 **Southern bypass** — via **Egypt (Cairo) ↔ Jeddah (OEJD, Saudi Arabia) ↔ Muscat (OOMM, Oman)/Emirates (OMAE)**: the main Gulf-connecting flow, keeping clear of Israeli/Lebanese and Iranian airspace but crossing the **Red Sea** and passing the **Houthi/Bab-el-Mandeb threat arc** (§9). High traffic, flow control, congestion.
  - 🟧 **Central route** — via **eastern Iraq (ORBB) on UM860 / UM688**, parallel to (but clear of) Iranian airspace, into Turkey: historically the primary Baghdad-FIR entry and still flyable, but **ORBB is CZIB "avoid" and subject to sudden closure**, with **heavy GNSS interference in northern Iraq** that has led aircraft toward inadvertent Iranian-airspace entry (§9). Most operators avoid it.
  - 🟧 **Northern bypass** — via the **Caucasus (Armenia/Azerbaijan) and the uncontrolled Kabul (OAKX) FIR** (TIBA/contingency routes): the longest, avoiding the Gulf core entirely — noted here only as the alternative that connects to the region's northern edge; detail belongs to the adjacent Europe / Central-Asia briefs.
- **Airway spine (Gulf):** the **P/L/M/G/N upper-airway network** (e.g. the **P-, L-, M- and N-series** UL/UM routes) forms the dense Gulf trunk feeding the hub TMAs. 🟥 The usable set is **currently reduced to managed corridors and temporary RNAV routes** linking Saudi/Egypt with Oman/UAE — confirm at planning; the published network overstates what is flyable.
- **Kuwait — the mid-Gulf gap:** 🟥 **overflight of the OKAC/Kuwait FIR is prohibited** (arrivals/departures to OKKK only, with approval; restriction extended). Traffic must route **around Kuwait** via the southern or northern option — a hole in the middle of the Gulf routing structure.
- **Free Route Airspace (FRA):** 🟩 **not implemented** in the European sense — a fixed ATS-route network with tactical vectoring; some Gulf states publish direct/RNAV routings but plan the published structure.
- **Typical level/flow:** RVSM **FL290–FL410**; note the **FAA SFAR** for Iraq permits N-registered free-routing overflight of the Baghdad FIR **only at or above FL320** — a floor to be aware of on the central route. Over the Arabian Sea oceanic sectors, procedural level allocation applies.

---

## 7. Terrain, MORA & driftdown

- **Mostly benign, with three terrain belts that matter on the surviving corridors:**
  - **Asir / Sarawat Mountains (SW Saudi Arabia)** — the **southern bypass** skirts high ground rising to ~**3,000 m (Jabal Sawda ~3,133 m / ~10,280 ft)** near the Yemen border; a **hot-and-high** terminal/enroute-descent driver for the SW-Saudi fields (several currently closed — §9). 🟧
  - **Hajar Mountains (Oman/UAE east)** — to **~1,900 m+ (Jebel Jais ~1,934 m)** on the Muscat/Emirates boundary; a terminal/eastern consideration (see the Emirates FIR brief §8). 🟧
  - **Zagros Mountains (Iran)** — high terrain underlies the **avoided** Tehran-FIR corridor; a driftdown consideration only if the central/Iran routing is ever used, which it currently is not. 🟧
- **Grid MORA / high terrain belts:** 🟧 elsewhere the region is **low desert and sea** — very benign across the central Gulf and the interior. Take per-quadrant grid-MORA from current ENR charts.
- **Driftdown / depressurisation escape:** 🟥 the binding constraint is **not terrain** but **where you are permitted to divert** — over the **Red Sea, the Bab-el-Mandeb arc and the Arabian Sea oceanic legs**, an engine-out/decompression descent must reach a **usable, non-conflict field** (§8). Plan the escape route against the current CZIB/closure map, not just terrain clearance.
- **Cold-temperature altitude corrections:** 🟩 not relevant — the operational temperature driver is **high-temperature / density altitude** in summer (see OM E hot-and-high context and the airport briefs), not cold-temperature correction.

---

## 8. Diversion & enroute alternates

Dense, high-quality fields exist on the **Gulf and northern-Saudi** trunks — but the **conflict picture strips out many nominal diverts** (Iran, Iraq, Yemen and the closed SW-Saudi fields), and the **Red Sea / Arabian Sea** crossings are **ETP-driven**. Confirm each field's availability against the live NOTAM/CZIB picture at planning.

| Airfield | ICAO | Sector / FIR | Role | Notes |
|---|---|---|---|---|
| Abu Dhabi / Zayed Intl | **OMAA** | Emirates (OMAE) | Bridge hub / primary Gulf alternate | H24, full-service. [OMAA brief](../destinations/middle-east/united-arab-emirates/omaa/index.md) |
| Dubai Intl | **OMDB** | Emirates (OMAE) | Major Gulf alternate | H24. [OMDB brief](../destinations/middle-east/united-arab-emirates/omdb/index.md) |
| Al Maktoum / DWC | **OMDW** | Emirates (OMAE) | Long-runway / cargo alternate | H24. [OMDW brief](../destinations/middle-east/united-arab-emirates/omdw/index.md) |
| Hamad Intl | **OTHH** | Doha/Qatar (OTDF) | Central-Gulf alternate | Major hub; FIR CZIB-affected — confirm. [OTHH brief](../destinations/middle-east/qatar/othh/index.md) |
| Bahrain Intl | **OBBI** | Bahrain (OBBB) | Central-Gulf alternate | FIR CZIB-affected — confirm. [OBBI brief](../destinations/middle-east/bahrain/obbi/index.md) |
| Muscat Intl | **OOMS** | Muscat (OOMM) | Southern-bypass exit / Arabian Sea coast-in | Gateway to the oceanic flank. [OOMS brief](../destinations/middle-east/oman/ooms/index.md) |
| Salalah | **OOSA** | Muscat (OOMM) | Southern / Arabian Sea alternate | Khareef monsoon (Jun–Sep) low ceilings. [OOSA brief](../destinations/middle-east/oman/oosa/index.md) |
| King Abdulaziz Intl | **OEJN** | Jeddah (OEJD) | Red Sea / southern-bypass alternate | Very high traffic; congestion. [OEJN brief](../destinations/middle-east/saudi-arabia/oejn/index.md) |
| King Khaled Intl | **OERK** | Jeddah (OEJD) | Interior-Saudi alternate | H24, full-service. [OERK brief](../destinations/middle-east/saudi-arabia/oerk/index.md) |
| King Fahd Intl | **OEDF** | Jeddah (OEJD) | Eastern-Saudi / Gulf-side alternate | H24. [OEDF brief](../destinations/middle-east/saudi-arabia/oedf/index.md) |
| Queen Alia Intl | **OJAI** | Amman (OJAC) | Levant alternate | Open/normal. [OJAI brief](../destinations/middle-east/jordan/ojai/index.md) |
| Baghdad Intl | **ORBI** | Baghdad (ORBB) | ⚠ **Conflict-zone — treat as unavailable** for planning | ORBB CZIB "avoid"; crew/passenger-safety risk on the ground. [ORBI brief](../destinations/middle-east/iraq/orbi/index.md) |
| Sanaa / Aden | **OYSN / OYAA** | Sanaa (OYSC) | ⚠ **Active conflict-zone — do not plan** | OYSN runway struck Jul 2026; Yemen HIGH risk all levels. Briefs: [OYSN](../destinations/middle-east/yemen/oysn/index.md) · [OYAA](../destinations/middle-east/yemen/oyaa/index.md) |

- **ETP / equal-time-point considerations:** the developed Gulf/Saudi trunks put a field within short range, so ETP is not a driver *there* — but the **Red Sea crossing, the Bab-el-Mandeb arc and the Muscat/Sanaa Arabian Sea oceanic legs** are genuine **no-good-divert windows** (over-water plus conflict exclusion). Identify the critical-point alternate on each OFP against the current closure map. **OMFJ/Fujairah** (Gulf-of-Oman side) and **OOMS/OOSA** are useful when Gulf/Strait-of-Hormuz routing is constrained.
- **Fuel-freeze / cold-soak:** 🟩 not a regional driver — warm climate; the temperature concern is hot-and-high performance, not Jet A-1 freeze.

---

## 9. Special-use airspace & overflight — 🟥 CONFLICT-ZONE CORE (the point of this brief)

> 🟥 **CONFLICT-ZONE / LIVE-SECURITY AIRSPACE — this section is perishable and is the defining feature of the region. It is DURABLE CONTEXT, re-check-live: the specific advisories, closures, temporary routes and NOTAMs MUST be re-verified against the ICAO Conflict Zone Information Repository, the EASA CZIBs, state NOTAMs and OPSGROUP/safeairspace at planning (§11). The state of the region changes at short notice — never treat this file's snapshot as current clearance.**

- **Iran (Tehran FIR, OIIX) — 🟥 avoid all levels.** Under an active **EASA CZIB (avoid at all levels)**. The FIR **closed** following large-scale strikes and Iranian missile/drone retaliation; only **partial, eastern** reopening for some overflights above FL285 via **specific temporary routes**, western Iran heavily restricted, several radar systems degraded, many western airports closed or daytime-only. Primary hazard: **misidentification of civil aircraft by air-defence systems** during heightened tension (the UIA PS752 shoot-down over Tehran, Jan 2020, is the reference case). Effectively avoided by all operators.
- **Iraq (Baghdad FIR, ORBB) — 🟥 avoid all levels.** Under an active **EASA CZIB (avoid at all levels)**. **Open for overflight** but **most operators consider it too high risk**. If ever used, the **UM860 / UM688** airways in **eastern Iraq** (parallel to Iran) are the historically-safer track; the **FAA SFAR** permits N-registered free-routing overflight **only at or above FL320**. Hazards: **missile/drone activity, misidentification by air-defence, MANPADS/terrorist threat to aircraft at lower levels or on the ground**, and **sudden ORBB closure** when Israel–Iran fighting flares (it is geographically sandwiched between Iran, Syria, Jordan and the Gulf). **Heavy GPS interference in northern Iraq** has nearly driven aircraft into Iranian airspace without clearance.
- **Syria (Damascus FIR, OSTT) — 🟥 high risk.** Reopened to some regional overflight after years of near-zero traffic and is quietly back in the routing picture as an Iran/Iraq alternative — but **remains high risk**: periodic **Israeli airstrikes**, limited ATC capability, and several states **prohibit or discourage** entry (US operators prohibited; caution within ~200 NM of Syria). Mostly regional carriers only; a workaround, not a mainstream corridor.
- **Yemen (Sanaa FIR, OYSC) & the Red Sea / Bab-el-Mandeb — 🟥 avoid; HIGH at all levels.** Yemeni airspace is assessed **HIGH risk at all altitudes**; **72-hour prior permission** required and ATS on parts of certain Sanaa-FIR airways is **delegated to Muscat ACC**. **Houthi ballistic-missile and UAS campaign** targets Israel (infringing the Jeddah FIR) and Red Sea shipping; **defensive intercepts** create the airborne hazard. The dominant risks to overflight are **debris fields from in-flight break-ups / successful interceptions** and **misidentification**, with **ballistic missiles from western Yemen intercepted on descent** raising the risk over **northern Saudi Arabia** and the **Red Sea corridor**. **Four SW-Saudi airports (OEAB/Abha, OEGN/Jizan, OENG/Najran, OESH/Sharurah) have been NOTAM-closed** after Houthi missile/drone attacks. The **southern bypass crosses this threat arc** — the trade-off for avoiding Iran/Iraq.
- **Gulf FIRs under CZIB — 🟥 avoid all levels (with the region still transiting them under managed corridors).** EASA advises **avoid at all levels** for **Bahrain (OBBB), Kuwait (OKAC), Qatar/Doha (OTDF), UAE/Emirates (OMAE)** and the **Gulf of Oman west of 58°E within Muscat (OOMM)**. **Kuwait overflight is prohibited outright.** Iranian retaliatory strikes have targeted US facilities in **Kuwait, Qatar, Bahrain and Oman**, with air-defence interceptions over Doha. A separate EASA **Information Note** (take-risk-into-account, not avoid) covers **Israel, Jordan, Oman and Saudi Arabia**. The hubs remain **open and working under temporary RNAV corridors and flow management** — but under formal advisory. See the **[Emirates (OMAE) FIR brief](fir/middle-east/emirates-omae.md) §10** for the bridge-hub detail.
- **GNSS jamming & spoofing — 🟥 pervasive, region-wide.** One of the **biggest operational issues** across the Gulf and Eastern Mediterranean. Member reports describe **complete GPS loss on arrival/departure** at Gulf hubs (Bahrain, Doha, Sharjah, Abu Dhabi, Dammam) and **interference continuing into neighbouring FIRs**; controllers now routinely issue **runway-heading departures and radar vectors** to compensate. **Northern Iraq, the Turkey (Ankara LTAA) border, the Eastern Mediterranean (Nicosia LCCC / Damascus) and the Black Sea** all show sustained interference; spoofed positions frequently **centre on Sevastopol (Crimea)**, 120–250 NM from the true position, with symptoms of **un-commanded turns, position errors and multiple GPWS warnings**. There is concern aircraft may be **spoofed before entering oceanic airspace** off Abu Dhabi. Expect it; brief the DME/DME/IRU cross-check and conventional-navaid fallback (OM E), and notify ATC early.
- **Military / restricted / danger areas & overflight permits:** 🟧 extensive **restricted/danger/prohibited areas** (military ranges, sensitive sites) across every state; activation is AIP/NOTAM-published. **Overflight permits** and state-specific routing directives apply (e.g. Syria overflight via a local permit agent, Afghanistan flat-fee on the northern bypass) — confirm at planning.

> **Conflict-zone currency:** re-check the **ICAO Conflict Zone Information Repository, the EASA CZIBs (Middle East / per-state), state NOTAMs, and OPSGROUP/safeairspace** and operator routing policy at planning — the §9 picture is **durable awareness, not live clearance**. This is the mission-critical planning item for the region.

---

## 10. Contingency procedures

- **Radar/tactical environment (continental FIRs):** 🟩 not an oceanic-procedural leg over the Gulf — follow **ATC vectors/clearances**; request weather deviations from ATC and comply with the vector/level issued. No oceanic offset table applies on the continental trunks.
- **Arabian Sea oceanic (Muscat/Sanaa):** 🟧 over the procedural over-water sectors apply the **ICAO Doc 4444 in-flight contingency** method (strategic offset, weather deviation, comms-fail) as for any oceanic/remote airspace — see [`OM E — Datalink and Oceanic Procedures`](../../flight-ops/datalink-and-oceanic-procedures.md).
- **Comms-failure:** ICAO standard — squawk **7600**, continue per the last acknowledged clearance / filed route and levels, attempt the previous/adjacent frequency and **121.5**. 🟥 In the current security environment, **deviating from a cleared/managed corridor without coordination carries elevated misidentification risk** — comply with ATC and any published contingency routing; where frequency congestion prevents contact (§5), broadcast intentions on **121.5 / 123.45** and squawk appropriately.
- **GNSS-degradation contingency:** 🟥 with **spoofing/jamming pervasive** (§9), expect FMS position drift and spurious terrain/GPWS alerts — **cross-check DME/DME/IRU**, advise ATC, request **radar vectors** (the reliable fail-safe), and follow OM E GNSS-interference guidance.
- **Conflict-driven diversion:** 🟥 plan every divert against the **current CZIB/closure map** — the nearest field may be in avoid-airspace. Pre-brief usable alternates on the actual corridor (§8).

---

## 11. Seasonal, environmental & live data

- **Seasonal hazards (durable):**
  - **Shamal winds & blowing dust** — the **summer shamal** (Jun–Jul, persistent NW wind) and **winter shamal** (strong NW frontal wind), plus **haboob** dust walls, reduce visibility across the Gulf and Arabian interior and can trigger LVO / rapid RVR collapse at the hubs.
  - **Extreme heat & density altitude (Jun–Sep)** — a **hot-and-high performance driver** at the Gulf and interior/Asir fields (see OM E and the airport briefs); Jet A-1 freeze is not a factor.
  - **Arabian Sea SW monsoon (Jun–Sep)** — affects the **Muscat/Sanaa oceanic** flank and southern Oman; **Salalah khareef** brings low ceilings, drizzle and reduced visibility; convective build-ups over the Arabian Sea.
  - **Convection** is generally limited over the arid interior but occurs seasonally (spring/autumn) and along the coasts; **tropical-cyclone** landfalls on the Oman/Arabian Sea coast are rare but possible (late spring / post-monsoon).
  - **Volcanic ash / space weather:** not planning drivers at these latitudes.

> **Pull at planning (T-2h):** the **current conflict-zone picture — ICAO CZIR, EASA CZIBs (Middle East / per-state), state NOTAMs, OPSGROUP/safeairspace, operator routing policy** (the mission-critical item for this region), the **usable managed-corridor / temporary-route NOTAMs and FIR-closure state**, **GNSS-interference advisories**, enroute NOTAMs and active restricted/danger areas, **SIGMET/AIRMET** (dust, convection, Arabian Sea monsoon), CPDLC active-band/login status, and the validated SimBrief route with assigned levels. **Not stored here.**

---

## 12. Open items (🟧 — confirm)

- **The entire §9 conflict-zone / overflight-risk picture is live** — advisories, closures, managed corridors and NOTAMs must be re-verified at planning; do not treat this file's snapshot as current.
- **Kuwait (OKAC) overflight-prohibition** end-date and any Gulf-FIR CZIB withdrawals/updates — confirm the current EASA CZIB set and per-state NOTAMs.
- Exact **class-per-band / Class-A floors** and **FIR-boundary decimals** across the MID FIRs (state AIP ENR 2.1) — stated at summary level.
- **CPDLC** active FL band / participating sectors in Jeddah (OEJD) and Emirates upper airspace, and any wider MID CPDLC rollout — confirm at planning.
- **Arabian Sea oceanic** (Muscat/Sanaa) RNAV10 track structure, HF families and the **Sanaa-to-Muscat ATS delegation** extent — confirm current AIP/NOTAM.
- **Usable Gulf airway set** (P/L/M/N-series UL/UM routes) vs the temporary managed-corridor overlay — pull the day's NOTAMs.
- No dedicated **Bahrain / Jeddah / Muscat / Tehran / Baghdad FIR briefs** yet in `Airspace/FIR/Middle East/` — only **Emirates (OMAE)** exists; build the high-traffic ones (Jeddah, Muscat) as routes require.
- Several referenced airport briefs (OMDW, OTHH, OOSA, OEJN, OERK, OEDF, OJAI, ORBI, OYSN, OYAA) — verify each link resolves as the airport set fills out.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **ICAO MID Region PBN Implementation Plan (MID Doc 007) & MIDANPIRG ATM Sub-Group material** — MID RNAV 5 enroute completion, RNAV 10 (RNP 10) over Muscat/Sanaa Arabian Sea oceanic, RNAV 1/RNP 1 terminal; CPDLC/DCL introduction in the Jeddah FIR and Saudi towers — https://www.icao.int/sites/default/files/MID/Documents/MID-Doc-007-MID-Region-PBN-Implementation-Plan-May-2023.pdf and https://www.icao.int/sites/default/files/MID/MeetingDocs/2025/Eleventh%20Meeting%20of%20the%20MIDANPIRG%20Air%20Traffic%20Management%20Sub-Group%20(ATM%20SG-11)/6-%20Report/ATM-SG11-Report.pdf (retrieved 2026-07-25).
- **ICAO MID RVSM / MIDRMA Board material** — MID region RVSM FL290–410 collision-risk monitoring within ICAO Target Level of Safety; large-height-deviation reporting gap — https://www.icao.int/sites/default/files/MID/MeetingDocs/2026/MIDRMA%20Board21%20Meeting/2-%20Documentation/WP08.pdf (retrieved 2026-07-25).
- **EASA — Conflict Zone Information Bulletins (CZIBs), Middle East / per-state** — avoid-all-levels advisories for Iran, Iraq, Lebanon, Bahrain, Kuwait, Qatar, UAE and the Gulf of Oman west of 58°E; Information Note for Israel/Jordan/Oman/Saudi Arabia — https://www.easa.europa.eu/en/domains/air-operations/czibs (retrieved 2026-07-25). *Advisory/live source — re-check at planning; §9/§11 currency depends on it.*
- **Safe Airspace (OPSGROUP) — Conflict Zone & Risk Database** (Iran, Iraq, Syria, Yemen, per-state risk briefings; Red Sea / Houthi threat) — https://safeairspace.net/ (Iran https://safeairspace.net/iran/ · Iraq https://safeairspace.net/iraq/ · Yemen https://safeairspace.net/yemen/ · Syria https://safeairspace.net/syria/) (retrieved 2026-07-25). *Advisory/live source — re-check at planning.*
- **OPSGROUP — Middle East Airspace: Current Operational Picture** (15–17 Jul 2026 update; Gulf FIR open/closed state, Kuwait overflight prohibition, temporary RNAV corridors, SW-Saudi airport closures, GNSS jamming/spoofing, Jeddah/Cairo congestion) — https://ops.group/blog/middle-east-airspace-current-operational-picture/ (retrieved 2026-07-25). *Advisory/live source.*
- **OPSGROUP — Dodging Danger: The Three Routes Through the Middle East** (southern via Saudi/Egypt, central via E-Iraq UM860/UM688, northern via the Stans/Caspian; Houthi/Red Sea and Jeddah-FIR infringement; FAA SFAR FL320 for Iraq; GPS interference N-Iraq/Turkey/Black Sea, Sevastopol spoof centre) — https://ops.group/blog/dodging-danger-the-three-routes-through-the-middle-east/ (retrieved 2026-07-25). *Advisory/live source.*
- **State AIP ENR sections (GCAA/UAE, GACA/Saudi Arabia, and neighbouring MID states)** — FIR structure, airspace classes, ATS routes, RVSM/PBN, restricted/danger/prohibited areas, comms-failure. Primary source of record for structure and routes; access notes in the shared the source register.
- **Companion OM C files:** [`../FIR/Middle East/Emirates (OMAE).md`](fir/middle-east/emirates-omae.md) (bridge-hub FIR) ·  airport briefs (§8) · sibling area briefs [`Europe.md`](europe.md) and [`EUR-SAM Corridor.md`](eur-sam-corridor.md) where the Europe/Africa routing connects.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build from `_Airspace Briefing Template.md` — the MID-region / Gulf area brief, parent to the Emirates (OMAE) FIR brief. FIR mosaic (Jeddah/Emirates/Muscat/Bahrain/Kuwait/Qatar/Amman/Beirut + conflict core Iran/Iraq/Syria/Yemen); RVSM FL290–410 / RNAV 5 / RNP 1 / RNP APCH / RNAV10 Arabian Sea referenced to OM E; three-corridor routing (southern/central/northern), Kuwait mid-Gulf gap, P/L/M/N airway spine; Asir/Hajar/Zagros terrain; conflict-affected diversion set. **§9 conflict-zone core built as the defining feature — Iran/Iraq/Syria/Yemen/Red Sea + Gulf-FIR CZIBs + pervasive GNSS jamming/spoofing — all flagged 🟥 live/perishable, re-check at planning.** Shamal/heat/hot-and-high + Arabian Sea monsoon seasonal. Built from ICAO MID PBN/RVSM docs + EASA CZIBs + OPSGROUP/safeairspace + state AIP ENR. |
</content>
</invoke>
