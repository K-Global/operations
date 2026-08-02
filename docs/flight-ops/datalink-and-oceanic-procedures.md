# Datalink & Oceanic Procedures — OM E Procedure

**Scope:** Location-agnostic *method* for **datalink communications and procedural oceanic / remote-airspace operations** — CPDLC & ADS-C (FANS 1/A vs ATN B1, logon/AFN, connection management); datalink & surveillance **mandates** and exemptions; the **oceanic clearance** request/read-back; **procedural position reporting** and ADS-C contracts; the **Mach Number Technique**; the **Strategic Lateral Offset Procedure (SLOP)**; the **oceanic in-flight contingency** and **weather-deviation** procedures; **RCP240/RSP180 PBCS**; HF/SELCAL and comms-failure. This file *defines* the method; each airspace brief (NAT, Arctic, and any other oceanic/remote sector) *applies* it to a place. Where a brief and this file appear to differ, the **current AIP / ICAO source and the day's clearance** govern — this file stores no live data.
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — public-source-verified (ICAO Doc 4444 / NAT Doc 007 / FAA AIP ENR 7.3 / SKYbrary / GOLD Doc 10037); region- and equipage-specific values flagged 🟧.

> **Read-me — regime & scoping (read first):** This is an **OM E Operations** procedure (method/how-to), **not** a chart, a clearance, or an equipage certificate. It states the *procedures* for talking to ATC by datalink and flying procedural (non-radar) oceanic/remote airspace; the **actual mandate band, exemptions, HF frequencies, oceanic-entry points, assigned track/level/Mach and the day's contingency detail come from the current AIP, the airspace brief and the oceanic clearance**, pulled at planning/in flight. Numbers here are the durable ICAO/regional defaults — where a value is region- or equipage-specific it is flagged 🟧 and must be verified against the AIP/NAT Doc 007, not read off this page. Flag legend: 🟥 hard requirement/hazard · 🟧 caution/unverified/region- or type-specific · 🟩 normal. Sim context: X-Plane 11 / SimBrief dispatch; datalink is simulated where the add-on/network supports it, else the equivalent voice procedure is flown.

---

## 1. Snapshot

| Field | Value |
|---|---|
| What this covers | The **procedural method** for oceanic/remote airspace: datalink logon & connection, oceanic clearance, position reporting, Mach Number Technique, SLOP, contingency, weather deviation, comms |
| Datalink applications | **AFN** (logon/notification) → **CPDLC** (controller–pilot text messaging) + **ADS-C** (automatic position/intent contracts). Together the ATS datalink suite. |
| Two datalink "flavours" | 🟥 **FANS 1/A** (ACARS-based, over Inmarsat/Iridium/HF-DL) — the **oceanic/remote** standard, carries CPDLC **and** ADS-C · **ATN B1** (VDL Mode 2, VHF-range) — the **continental** standard (e.g. European CPDLC), **CPDLC only, no ADS-C** |
| Typical oceanic mandate | 🟥 **CPDLC + ADS-C (FANS 1/A) required in the mandate band** — e.g. **NAT datalink mandate FL290–FL410** across NAT HLA; exemptions §4 |
| Longitudinal separation basis | **Mach Number Technique** — maintain the assigned Mach exactly; advise ATC before any change of **±0.01/±0.02** or more (region-specific 🟧) |
| SLOP | 🟩 **Right of centreline only**, **0.1 NM increments to a maximum 2 NM right**; **automatic — no ATC clearance required**, ATC need not be advised. Left offset **prohibited**. |
| Contingency (no clearance) | 🟥 Turn **≥30°** off track to acquire a **5 NM (9.3 km) same-direction offset**; squawk **7700**; lights on; broadcast **121.5 / 123.45 MHz**; then a **level offset** (§7) |
| PBCS specs | 🟥 **RCP 240** (comm performance) + **RSP 180** (surveillance performance), with **RNP 4**, for reduced-separation (e.g. 23 NM lateral) tracks — State authorization required |
| Comms redundancy | 🟥 Two long-range comm systems, **≥1 HF**, outside VHF coverage; **SELCAL** check after first HF contact; CPDLC primary where mandated; **north of 80°N Iridium required** |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| CPDLC / ADS-C / AFN definitions & FANS vs ATN split | 🟩 | Sourced (SKYbrary, GOLD Doc 10037). FANS 1/A = ACARS, oceanic, CPDLC+ADS-C; ATN B1 = VDL2, continental, CPDLC only. |
| Datalink mandate band & exemptions | 🟥 | NAT DLM FL290–FL410 sourced; **band and exemption list are region-specific** — verify against the applicable AIP / NAT Doc 007. |
| Oceanic clearance request/read-back | 🟩 | Request ≥ ~40 min (region-specific) before OEP; **full read-back mandatory**; report a **≥3 min** change to the entry estimate. Sourced (SKYbrary / NAT Doc 007 Ch.6). |
| Position reporting (procedural + ADS-C) | 🟩 | ADS-C periodic/event/waypoint-change contracts replace voice at contracted points; voice/CPDLC position reports elsewhere. |
| Mach Number Technique | 🟩 | Maintain assigned Mach; advise before ±0.01/±0.02 change. **Exact trigger is region-specific** 🟧. |
| SLOP | 🟩 | Right-only, 0.1 NM to 2 NM, automatic. Sourced (NAT Doc 007 / SKYbrary). |
| In-flight contingency & weather deviation | 🟥 | Globally standardised (in force 5 Nov 2020); NAT Doc 007 Ch.10 = FAA AIP ENR 7.3. Reproduced in §7/§8. |
| RCP240/RSP180 PBCS | 🟥 | Formal State authorization required to file/claim; enables reduced separation. Sourced (ICAO PBCS guidance / ops.group). |
| Comms-failure procedure | 🟧 | Continue per last/expected clearance; detailed HF-loss wording is edition-specific (NAT Doc 007 Ch.5) — verify at planning. |

---

## 3. Datalink applications — CPDLC, ADS-C, AFN & the FANS/ATN split

- **The three ATS datalink applications — 🟩:**
  - **AFN (ATS Facilities Notification)** — the **logon/handshake** that connects the aircraft to a named ground facility. The crew enters the destination facility's address (its four-letter ICAO code) and the aircraft flight-plan identity, and sends the logon; a successful AFN establishes the address book so CPDLC and ADS-C can run. Often described as the "logon" step.
  - **CPDLC (Controller–Pilot Data Link Communications)** — controller and pilot exchange **text messages** (clearances, requests, reports, free text) instead of voice. Removes read-back errors and HF workload; each message is displayed, actioned and formally responded to (WILCO / UNABLE / ROGER / STANDBY).
  - **ADS-C (Automatic Dependent Surveillance – Contract)** — the aircraft **automatically down-links** position, altitude, track and intent under a **contract** agreed with the ground system. Contract types: **periodic** (every n minutes), **event** (e.g. waypoint change, level change, lateral-deviation) and **on-demand**. ADS-C provides the surveillance that lets ATC reduce procedural separation where no radar exists.
- **FANS 1/A vs ATN B1 — 🟥 know which the airspace uses:**
  - **FANS 1/A** — the **oceanic/remote** standard. Runs **CPDLC and ADS-C over ACARS** (Inmarsat/Iridium SATCOM, or HF-DL, or VHF/VDL where available). This is what North Atlantic, Pacific and most remote-continental airspace require. FANS 1/A+ / PM-CPDLC are compatibility upgrades.
  - **ATN B1 (Baseline 1)** — the **continental** standard. Runs **CPDLC only over VDL Mode 2** (VHF datalink), **no ADS-C**. This is the European continental CPDLC (Link 2000+) service used within radar coverage.
  - **Practical rule:** oceanic = **FANS 1/A (CPDLC + ADS-C)**; continental radar = **ATN B1 (CPDLC only)**. A long-haul leg typically uses ATN B1 over Europe, then logs onto **FANS 1/A** for the ocean. Multi-link avionics ("FANS 1/A–ATN B1") switch automatically by airspace.
- **Connection management — 🟩:**
  - **Log on ~10–25 min before** the oceanic control area (OCA) boundary to the entering OAC (region-specific timing 🟧). One **active CPDLC connection** at a time; the current controlling authority holds it (CDA — Current Data Authority). A **Next Data Authority (NDA)** is nominated so the transfer to the next OCA is automatic ("address forwarding").
  - Confirm the connection is **established and ACTIVE** before relying on CPDLC; if the logon fails or is rejected, revert to **voice** (HF/SATVOICE) and retry. Do not assume a message was received without the CPDLC response.
  - **On exit / transfer:** the connection is handed to the next authority; verify the new active connection after transfer. Terminate cleanly at the end of the datalink segment.

---

## 4. Datalink & surveillance mandates and exemptions

- **The mandate concept — 🟥:** designated airspace requires the aircraft to be **datalink-equipped and connected** (CPDLC + ADS-C, FANS 1/A) to operate in a core level band. The mandate exists to enable reduced procedural separation and to cut the HF-voice load. Operating in the band without a working, connected datalink capability is **not permitted** unless an exemption applies.
- **Reference band — 🟥 (NAT):** the **NAT datalink mandate (DLM)** requires **CPDLC + ADS-C, FANS 1/A, FL290–FL410** throughout NAT HLA. **The band, and the exemption list, are region-specific** — the same *method* applies in the Pacific, over remote Africa/Asia and elsewhere, but with different levels/limits. Verify against the applicable AIP / NAT Doc 007 at planning. 🟧
- **Typical exemptions (NAT model) — 🟧 confirm per region:**
  - Airspace **north of 80°N** (SATCOM geometry — see comms redundancy §9).
  - Certain FIRs/corridors that are **surveilled with VHF voice** (e.g. Iceland–Greenland corridor, Azores corridor, Bodø corridor, published Tango routes) and specified excluded FIRs (e.g. New York Oceanic East).
  - **Aircraft-status categories:** STS/FFR (fire-fighting), HOSP, HUM, MEDEVAC, SAR, STATE.
  - Flight **outside the mandate level band** (below/above it) — but note the band and the airspace/RVSM ceiling may differ, so check both.
- **Relationship to other approvals — 🟥:** the datalink mandate sits alongside (does not replace) **RVSM**, **PBN/RNP** and the airspace approval (e.g. **NAT HLA**). A PBCS reduced-separation track additionally needs **RCP240/RSP180** (§6). Screen all four (datalink, RVSM, RNP, HLA/PBCS) at dispatch.
- **Operator approvals — 🟩 [K Global OpsSpec 2026-07-25]:** K Global holds operator approval for **NAT High Level Airspace (HLA)** operations for the long-haul widebodies, and for **CPDLC/ADS-C (FANS 1/A) datalink** for FANS-equipped widebodies — the two approvals that gate entry to the NAT DLM band and equivalent mandated oceanic/remote airspace. Applicability is aircraft-fit-dependent — confirm the specific airframe carries the FANS 1/A datalink fit before filing/relying on either capability.

---

## 5. Oceanic clearance & position reporting

- **Oceanic clearance — why it exists 🟩:** in procedural (non-radar) oceanic airspace ATC cannot see the aircraft continuously, so it issues a **specific oceanic clearance** — the **track/route, flight level and Mach number** the aircraft must fly across the OCA. This is separate from the domestic clearance and must be obtained **before** the oceanic entry point (OEP).
- **Requesting the clearance — 🟩:**
  - Request in the window before the OEP — **~30–90 min prior depending on region** (NAT model: request generally **≥ ~40 min** before the OEP; datalink logon ~10–25 min prior). 🟧
  - Provide the **oceanic entry point and estimate**, requested **flight level**, requested **Mach**, and the **maximum FL acceptable** at the boundary. Notify the OAC of any change to the filed oceanic level/track/Mach **as early as practicable**.
  - Request via **CPDLC (oceanic clearance request), datalink (OCL/where provided), or voice (HF/VHF via the radio station)** as the region provides.
- **Read-back — 🟥:** the oceanic clearance **must be read back in full** (route/track, level, Mach) — the single most error-prone step in oceanic ops. On CPDLC, the formal **WILCO** acknowledges receipt but the crew still cross-checks route/level/Mach against the flight plan and reprogrammes the FMS to the **cleared** track (which may differ from the filed route). A cleared re-route/level/Mach **supersedes** the OFP.
- **Entry-estimate discipline — 🟥:** after clearance, monitor the estimate for the OEP; if it changes by **3 minutes or more**, pass the revised estimate to ATC. Accurate entry timing underpins longitudinal (Mach-technique) separation.
- **Position reporting — procedural & ADS-C 🟩:**
  - **ADS-C-contracted segments:** the periodic/event contracts satisfy position reporting automatically — **no voice position report** at contracted waypoints. Maintain the ADS-C contract; an event contract fires on waypoint/level/lateral-deviation change.
  - **Non-ADS-C / voice or CPDLC segments:** make a **position report** at each compulsory reporting point — **present position (lat/long or named fix) and time and level; next position and estimate; the ensuing significant point** ("PTA" format). Report by CPDLC position report or HF/SATVOICE via the radio station.
  - **Radio stations relay only** — the NAT radio operators (and equivalents) pass messages to/from the OAC and hold **no executive ATC authority**; a *clearance* comes from the OAC, not the radio operator.

---

## 6. Mach Number Technique & PBCS (RCP240 / RSP180)

- **Mach Number Technique (MNT) — 🟥:** on same-track, same-direction traffic ATC assigns each aircraft a **Mach number** and uses the **relative Mach** to hold longitudinal separation without radar. The crew must **maintain the assigned Mach precisely** (true Mach, FMS-managed) and **advise ATC before changing it** — the reporting trigger is region-specific: commonly notify a change of **±0.01 Mach**, or **±0.02 Mach** where variable/ECON speeds are permitted (e.g. some NAT trials). Do not change Mach without coordination; a speed change without notice erodes the separation of following traffic.
- **Step-climb interaction:** request level changes via CPDLC as weight reduces; a new level may come with a new assigned Mach — read back and fly both.
- **Performance-Based Communication & Surveillance (PBCS) — 🟥:** PBCS attaches **measurable performance specifications** to the communication and surveillance means so ATC can safely apply **reduced separation**:
  - **RCP 240 (Required Communication Performance 240)** — the CPDLC transaction (e.g. a level-change instruction) must complete within a **240-second** nominal performance, with monitored actual delivery.
  - **RSP 180 (Required Surveillance Performance 180)** — the ADS-C position must be delivered within a **180-second** performance.
  - Combined with **RNP 4**, RCP240+RSP180 enable reduced-separation tracks — e.g. NAT **PBCS lateral 23 NM** between designated OTS tracks (and reduced longitudinal). **Formal State authorization is required** to file/claim RCP240/RSP180 and use PBCS tracks; unauthorized aircraft are held to the larger legacy minima (see the NAT brief §4). **K Global's operator PBCS (RCP 240 / RSP 180) authorisation is now set — authorised for RNP4 + FANS-equipped widebodies** 🟩 [K Global OpsSpec 2026-07-25], enabling the reduced-separation NAT tracks for that subset of the fleet.
- **Cross-link:** RNP 4 itself is defined in `./PBN and RNP Operations.md`; RVSM (the vertical piece of the same reduced-separation picture) in `./RVSM Operations.md`.

---

## 7. Oceanic in-flight contingency

Globally-standardised oceanic contingency (in force since **5 Nov 2020**), per **ICAO Doc 4444** and **NAT Doc 007 Ch.10**, reproduced verbatim in **FAA AIP ENR 7.3**. Applies when the aircraft cannot maintain assigned level/track/speed (e.g. sudden descent, driftdown, turn-back) in procedural oceanic airspace.

- **Obtain a revised clearance first — 🟥** whenever practicable, **before** deviating. If ATC contact is available, request and fly a revised clearance and none of the "no-clearance" actions below are needed.
- **General contingency (no clearance obtainable) — 🟥:**
  1. **Turn at least 30° left or right** to acquire and maintain a **same-direction offset of 9.3 km (5.0 NM)** from the assigned track centreline.
  2. **Squawk 7700**; **exterior lights ON**; **ACAS/TCAS to RA (TA/RA) mode**.
  3. **Broadcast** position, intentions and level on **121.5 MHz** (and **123.45 MHz** air-to-air), at suitable intervals.
  4. **Advise ATC as soon as possible.**
- **Level offset once established on the 5 NM offset — 🟥:** to vertically separate from same-track traffic:
  - If **descending / unable to maintain assigned level:** where able, descend **below FL290** and establish a **150 m (500 ft) vertical offset** from the levels in use; **or**
  - Establish a **150 m (500 ft) vertical offset** from the normal band, or **300 m (1000 ft) if above FL410** (RVSM does not apply above FL410).
- **Why the 5 NM offset + level offset:** it removes the aircraft from the exact track and level where opposite/same-direction traffic is separated procedurally, minimising conflict while ATC re-establishes a plan.
- **Comms-failure — 🟧:** continue in accordance with the **last received and acknowledged**, or the **expected**, clearance; squawk as directed; **broadcast blind on 121.5/123.45** with position/level/intentions; attempt to restore contact (alternate HF family, SATVOICE, CPDLC, relay via another aircraft). Detailed HF-loss wording is edition-specific — verify **NAT Doc 007 Ch.5** at planning.

---

## 8. Weather-deviation procedure

Per the same **ICAO Doc 4444 / NAT Doc 007 Ch.10 / FAA AIP ENR 7.3** standard — used when weather (usually convective) forces a lateral deviation in procedural oceanic airspace.

- **Request first — 🟥:** request a **weather deviation** from ATC via CPDLC/voice, stating heading/distance and, if urgent, **"WEATHER DEVIATION REQUIRED"** (or **PAN PAN ×3**). Fly the cleared deviation if granted.
- **If a clearance cannot be obtained in time — 🟥:** advise ATC, then:
  - **Broadcast** intentions on **121.5 / 123.45 MHz**; exterior lights on; watch for conflicting traffic; TCAS active.
  - For a deviation **less than 5 NM** from track — **remain at the assigned level**.
  - For a deviation of **5 NM or more** from track — at approximately **5 NM** from centreline apply a **90 m (300 ft) level change** per the direction table below, and **return to the assigned level** before rejoining to within 5 NM of centreline.

  | Cleared track direction | Deviating LEFT of track | Deviating RIGHT of track |
  |---|---|---|
  | **EASTbound** (000°–179° cleared track) | **DESCEND 300 ft** | **CLIMB 300 ft** |
  | **WESTbound** (180°–359° cleared track) | **CLIMB 300 ft** | **DESCEND 300 ft** |

- **Mnemonic logic:** the small (300 ft) offset gives vertical clearance from same-track traffic during the lateral excursion; direction is chosen so opposite-direction and same-direction traffic are separated. Note this is the **300 ft** weather-deviation offset — distinct from the **500 ft** contingency level offset in §7.

---

## 9. Communications — HF, SELCAL, SATVOICE & redundancy

- **Long-range comm requirement — 🟥:** outside VHF coverage, carry **two long-range communication systems (LRCS)**, at least **one HF**. VHF works only near landmasses and in surveilled corridors; over open ocean it is unavailable.
- **CPDLC primary where mandated — 🟩:** in datalink-mandate airspace **CPDLC is the primary ATS communication** and ADS-C the primary surveillance; HF/SATVOICE are the **backup** for datalink loss and for non-routine/urgent exchanges.
- **HF families & SELCAL — 🟥:** HF is organised into regional **families/networks** with rotating, AIP-published frequency allocations (e.g. NAT families A–F). After first contact on the assigned family, perform a **SELCAL check** — the ground station tones the aircraft's four-character **SELCAL code** — then **silent-monitor** (no continuous listening watch) until called or until a report is due. Exact frequencies are pulled with the day's flight documents 🟧.
- **SATVOICE — 🟩:** may serve as the **second LRCS** (route-dependent) and for priority calls. **North of 80°N, Iridium is required** (Inmarsat geostationary coverage does not qualify at those latitudes) — this drives comms fit on high-latitude/polar routings.
- **Emergency & air-to-air VHF — 🟩:** **121.5 MHz** emergency (guarded); **123.45 MHz** air-to-air/inter-pilot — both are the contingency/weather-deviation broadcast frequencies (§7/§8).
- **HF degradation hazard — 🟥:** high-latitude **space weather** (solar proton events → polar-cap absorption) can black out HF over the polar cap and degrade GNSS; carry HF **+ SATCOM** redundancy and monitor NOAA SWPC advisories (detail in the NAT/Arctic briefs §11).

---

## 10. SLOP — Strategic Lateral Offset Procedure

- **What SLOP is — 🟩:** a deliberate, small **lateral offset to the right** of the cleared track/centreline, flown continuously in oceanic/remote airspace to **reduce collision risk** (from height-keeping/navigation errors that put opposite or same-track traffic exactly on centreline) and to **distribute wake turbulence** laterally.
- **The rule — 🟥:**
  - **Right of centreline only. LEFT SLOP IS PROHIBITED.**
  - Permitted offsets: **centreline, or any offset to the right in 0.1 NM increments up to a maximum of 2 NM right** ("micro-SLOP"). The legacy discrete positions (centreline / 1 NM right / 2 NM right) remain valid.
  - **Automatic — no ATC clearance required, and ATC need not be advised.** The crew selects the offset (typically FMS-programmed) at its discretion.
  - Applies to **cruise** in the designated airspace; **do not offset** on the departure/arrival transition or where SLOP is not authorised. Position reports and ADS-C are made relative to the **cleared centreline**, not the offset.
- **Choosing an offset:** distribute randomly among the available right offsets to spread traffic laterally; a common practice is to bias by aircraft (e.g. based on the last digit of a tail/flight number) so the fleet naturally spreads — but any right offset ≤ 2 NM is compliant.
- **Cross-link:** SLOP as applied on the NAT is in the NAT brief §10; the same procedure applies in other oceanic/remote SLOP-authorised airspace.

---

## 11. Cross-references

- **North Atlantic (NAT) airspace brief** — the primary *application* of this method (NAT HLA, OTS, datalink mandate FL290–FL410, PBCS/23 NM, contingency, SLOP): `../OM C Routes and Destinations/Airspace/General/North Atlantic.md`
- **Arctic / High-Latitude airspace brief** — high-latitude application (Iridium north of 80°N, HF/space-weather, procedural Greenland/Canadian NDA): `../OM C Routes and Destinations/Airspace/General/Arctic.md`
- **North America** — no standalone airspace brief yet; Canadian NDA / oceanic-adjacent content currently in the Arctic brief: `../OM C Routes and Destinations/Airspace/General/Arctic.md` 🟧
- **PBN & RNP Operations (OM E)** — RNP 4 / RNAV 10, the navigation half of oceanic reduced separation: `./PBN and RNP Operations.md`
- **RVSM Operations (OM E)** — the vertical half of oceanic reduced separation (FL290–FL410): `./RVSM Operations.md`
- **ETOPS / EDTO Procedures (OM E)** — the diversion/ETP method that runs on the same oceanic legs (comms redundancy underpins EDTO comms requirement): `./ETOPS-EDTO Procedures.md`
- **Polar & High-Latitude Operations (OM E)** — comms redundancy (Iridium) and space-weather handling for polar routings: `./Polar and High-Latitude Operations.md`

---

## Open items (🟧 — confirm)

- **Datalink mandate band & exemption list per region** — NAT DLM FL290–FL410 confirmed; confirm the equivalent band/exemptions for any other oceanic/remote sector K Global files (Pacific, Africa, Asia) before applying this method there.
- **Mach-technique change trigger** — ±0.01 vs ±0.02 Mach reporting threshold is region-specific; confirm the value for each airspace at planning.
- **Oceanic-clearance request lead time** — the ~40 min NAT figure and ~10–25 min logon window are region-specific; verify per AIP.
- **HF family frequency allocations** — rotating and AIP-published (e.g. NAT Doc 003); pulled with the day's flight docs, not stored here.
- **Comms-failure / HF-loss exact wording** — NAT Doc 007 Ch.5 edition-specific; cross-check current edition at planning.
- **SimBrief/network datalink fidelity** — confirm which oceanic sectors the X-Plane 11 add-on/online network models as CPDLC/ADS-C vs voice-only, so crews know when to fly the equivalent voice procedure.
- **PBCS authorization on file** — RESOLVED by OpsSpec batch 2 (2026-07-25): **RCP240/RSP180 authorised for RNP4 + FANS-equipped widebodies** 🟩. Confirm the specific airframe's RNP4/FANS fit before claiming a PBCS track.
- **NAT HLA / CPDLC-ADS-C operator approval** — RESOLVED by OpsSpec batch 2 (2026-07-25): **NAT HLA approved for the long-haul widebodies**; **CPDLC/ADS-C (FANS 1/A) approved for FANS-equipped widebodies** 🟩. Confirm per-airframe datalink fit before relying on either.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. Subscription/in-sim material (SimBrief, network clients, AFM) may inform content but is not listed. Durable policy — no live clearance/NOTAM/frequency data stored here.*

- **ICAO Doc 4444 — PANS-ATM (Procedures for Air Navigation Services – Air Traffic Management)** — oceanic clearance, position reporting, Mach Number Technique, in-flight contingency & weather-deviation procedures, CPDLC/ADS-C message procedures — summarised via SKYbrary (ICAO not freely hosted): https://skybrary.aero/articles/procedures-air-navigation-services-air-traffic-management-pans-atm-icao-doc-4444 (retrieved 2026-07-25).
- **ICAO NAT Doc 007 — North Atlantic Operations and Airspace Manual (Ch.5 comms, Ch.6 oceanic clearance, Ch.10 contingency & weather deviation, §1.7 datalink mandate, §1.9 PBCS)** — via ICAO EUR/NAT (as summarised in the NAT airspace brief) — https://www.icao.int/EURNAT/ (retrieved 2026-07-25).
- **FAA AIP ENR 7.3 — Oceanic / North Atlantic contingency, weather-deviation and datalink procedures** (harmonised with NAT Doc 007 Ch.10) — https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part2_enr_section_7.3.html (retrieved 2026-07-25).
- **ICAO Doc 10037 — Global Operational Data Link (GOLD) Manual** — FANS 1/A applications (AFN, CPDLC, ADS-C), ATN B1, connection management (CDA/NDA), RCP/RSP — https://skybrary.aero/sites/default/files/bookshelf/4134.pdf (retrieved 2026-07-25).
- **SKYbrary — Controller Pilot Data Link Communications (CPDLC)** — CPDLC definition, FANS 1/A vs ATN, message procedures — https://skybrary.aero/articles/controller-pilot-data-link-communications-cpdlc (retrieved 2026-07-25).
- **SKYbrary — Automatic Dependent Surveillance – Contract (ADS-C)** — contract types (periodic/event/on-demand), oceanic surveillance role — https://skybrary.aero/articles/automatic-dependent-surveillance-contract-ads-c (retrieved 2026-07-25).
- **SKYbrary — North Atlantic Operations: ATC Clearance** — oceanic clearance request/read-back, entry estimate discipline — https://skybrary.aero/articles/north-atlantic-operations-atc-clearance (retrieved 2026-07-25).
- **SKYbrary — Strategic Lateral Offset Procedures (SLOP)** — right-only offset, 0.1 NM to 2 NM, automatic/no clearance — https://skybrary.aero/articles/strategic-lateral-offset-procedures-slop (retrieved 2026-07-25).
- **ICAO — PBCS Operational Authorization Guidance (RCP 240 / RSP 180)** — communication/surveillance performance specs enabling reduced separation with RNP 4 — https://www.icao.int/sites/default/files/APAC/Documents/edocs/PBCS-Operational-Authorization-Guidance.pdf (retrieved 2026-07-25).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1.1 | 2026-07-25 | OpsSpec batch 2: operator approvals set (RVSM all mainline, oceanic RNP4+RNP10, NAT HLA, CPDLC/ADS-C FANS, PBCS, cold-temp correction crew+FMS, flex/derate takeoff, MMEL baseline, autoland currency, RNP-AR per-field). |
| v0.1 | 2026-07-25 | Initial draft. Third OM E — Operations location-agnostic procedure. Defines the datalink/oceanic *method* the airspace briefs apply: CPDLC/ADS-C/AFN and the FANS 1/A vs ATN B1 split; datalink mandate (NAT DLM FL290–FL410) & exemptions; oceanic clearance request/read-back and entry-estimate discipline; procedural & ADS-C position reporting; Mach Number Technique; RCP240/RSP180 PBCS with RNP 4; the globally-standardised in-flight contingency (≥30°/5 NM offset, squawk 7700, 121.5/123.45, 500 ft level offset) and weather-deviation (300 ft climb/descend-by-direction table); HF/SELCAL/SATVOICE redundancy (Iridium north of 80°N); and SLOP (right-only, 0.1 NM to 2 NM, automatic). Built from ICAO Doc 4444 / NAT Doc 007 / FAA AIP ENR 7.3 / GOLD Doc 10037 / SKYbrary. Cross-linked to NAT & Arctic briefs, PBN/RNP, RVSM, ETOPS-EDTO and Polar. Aligned with (does not contradict) the NAT brief §4/§10. Region-specific bands, Mach trigger, request lead times and HF frequencies flagged open. |
