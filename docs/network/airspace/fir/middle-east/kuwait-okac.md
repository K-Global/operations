# Kuwait (OKAC) — FIR Briefing

**Scope:** single FIR — the State of Kuwait plus a compact northern-Gulf sector, containing **Kuwait Intl (OKKK)** · **Parent area brief:** [Middle East](../../middle-east.md) 🟩 · **Adjacent FIRs:** Baghdad (ORBB) N/NW (Iraq — sensitive boundary) · Bahrain (OBBB) SE · Jeddah (OEJD) SW (Saudi Arabia) · Tehran (OIIX) E (across the Gulf) 🟧

**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — FIR structure/adjacency corroborated vs the K Global Middle East area brief and public tier-4 sources; **this is currently the highest-risk FIR of the four in this build — overflight is prohibited and the field itself has been struck; flagged 🟥 live/perishable, re-check at planning**; ANSP unit name and per-band class letters flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Kuwait is a **small, compact FIR** wedged between Iraq, Saudi Arabia and Iran at the head of the Persian Gulf. **As at build date, OKAC overflight is prohibited outright — arrivals and departures to OKKK only, subject to approval** — routing must go around Kuwait via the southern or northern option (see the Middle East area brief §6). Terminal procedures for OKKK live in the airport briefings (§9), but note the field itself has been directly affected by the conflict (§10). **This FIR sits immediately south of the Baghdad FIR boundary — a historically sensitive line — and under an active EASA conflict-zone advisory.** Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR ident | **OKAC** — Kuwait FIR/UIR. Compact FIR covering the State of Kuwait and an adjoining northern-Gulf sector |
| Controlling ATSU / ANSP | 🟧 **Kuwait area control** (Kuwait Intl/OKKK). Authority/regulator: **Directorate General of Civil Aviation (DGCA), Kuwait** |
| Airspace class & vertical limits | 🟧 **Class A** upper controlled airspace; Kuwait TMA (Class C/D) beneath. Confirm exact class per band at **Kuwait AIP ENR 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (MID region RVSM) in principle — see OM E §5. 🟥 **Moot for transit planning while overflight is prohibited** (§10) |
| PBN environment | **RNAV 5** enroute · **RNAV 1/RNP 1** terminal · **RNP APCH** arrivals — see OM E §5 |
| Surveillance & datalink | 🟩 **Radar + ADS-B** surveillance normally; 🟧 **CPDLC** coverage not confirmed for this FIR |
| Primary language & comms | 🟩 **VHF**; **English** (ICAO). **25 kHz** channel spacing (no 8.33 kHz mandate) |
| Key hazard(s) | 🟥 **Active conflict exposure — the most severe of the four Gulf FIRs in this build.** OKAC is currently **overflight-prohibited**; **Kuwait Intl (OKKK) itself sustained missile/drone damage in March 2026**; the FIR has closed and reopened multiple times during 2026. Also sits immediately south of the **Baghdad FIR (ORBB)** boundary — itself a CZIB "avoid" FIR — compounding the risk picture on Kuwait's northern flank |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Radar/ADS-B-surveillance-controlled in normal operation; no procedural/oceanic segment — compact continental FIR. |
| Communication coverage & language | 🟩 | VHF, English (ICAO), 25 kHz spacing, in normal operation. |
| Datalink / surveillance requirement | 🟧 | Radar + ADS-B in principle; **CPDLC not confirmed**. Largely academic while overflight is prohibited. |
| Terrain / MORA / driftdown | 🟩 | Flat desert terrain — no significant terrain factor in this FIR. |
| Diversion-aerodrome coverage | 🟥 | **Only one K Global field (OKKK) inside the FIR, and it has itself been struck** — treat as an unreliable/degraded alternate; see §9. |
| Special-use airspace (military / **conflict zone, overflight prohibition**) | 🟥 | **The headline fact for this FIR.** Overflight prohibited; EASA CZIB avoid-all-levels; France NOTAM avoid entire airspace; OKKK airport damaged by strikes. **Live and perishable — re-check at planning (§10/§11).** |
| Equipment / approval (RVSM, PBN, transponder) | 🟧 | Standard MID equipment requirements apply in principle (§5) but are **not the binding constraint** here — the binding constraint is the overflight prohibition itself. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** the Kuwait FIR covers the **State of Kuwait** — a small country at the head of the Persian Gulf — plus an adjoining sector of northern Gulf waters. It is one of the smallest MID-region FIRs by area, but sits at a geographically pivotal point between Iraq, Saudi Arabia and Iran.
- **Confirmed containment:** 🟩 **Kuwait Intl (OKKK)** — Kuwait's sole international gateway — sits inside the Kuwait FIR (OKAC).
- **Vertical structure:** 🟧 controlled airspace to the upper limit — **Class A** upper band, Class C/D Kuwait TMA beneath, in normal operation. Confirm the exact Class-A floor at Kuwait AIP ENR 2.1.
- **Adjacent FIRs (by boundary):**
  - **N/NW — Baghdad (ORBB, Iraq).** 🟥 **The sensitive boundary named in this brief's build instructions** — Kuwait sits immediately south of a FIR that is itself under an active EASA "avoid at all levels" CZIB (per the Middle East area brief §9), with reported missile/drone activity, air-defence misidentification risk and heavy GNSS interference in northern Iraq. The Kuwait/Baghdad boundary is historically an entry/exit-point pairing (e.g. TASMI/SIDAD in the Baghdad-FIR route structure) but is currently not usable for transit given both FIRs' status.
  - **SE — Bahrain (OBBB).** The compact central-Gulf FIR, itself under an active avoid-all-levels CZIB — see the [Bahrain (OBBB) FIR brief](bahrain-obbb.md).
  - **SW — Jeddah (OEJD, Saudi Arabia).** The largest MID-region FIR; Kuwait's long land boundary runs along Saudi Arabia's northern edge.
  - **E — Tehran (OIIX, Iran).** 🟥 Across the northern Gulf waters — the other flank of the conflict-zone core (per the Middle East area brief, Iranian retaliatory strikes have targeted US facilities in Kuwait directly).
- **Sectorisation:** 🟧 not confirmed publicly at the sector level for a FIR of this size; expect a small area-sector set feeding the Kuwait TMA in normal operation. Currently **moot** given the arrivals/departures-only restriction (§10).

---

## 4. Control & ATSU

- **Enroute ATSU:** 🟧 **Kuwait area control** — radar/ADS-B surveillance control of the FIR in normal operation, based at Kuwait Intl (OKKK).
- **Terminal ATSU:** 🟧 Kuwait approach control serves OKKK; precise unit name/AoR split to confirm at Kuwait AIP.
- **FIS / FSS:** Kuwait **AIS/FIS** (DGCA).
- **Surveillance basis:** 🟩 radar + ADS-B in normal operation. 🟧 **GNSS integrity is degraded by reported GPS spoofing/jamming** in the wider region — a surveillance/navigation caveat (§10) even for the arrivals/departures currently permitted.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Kuwait FIR and references the OM E doc. It does not re-derive them. 🟥 Note: these requirements are presently secondary to the overflight prohibition in §10 — an equipped, compliant aircraft still cannot overfly OKAC.*

- **RVSM:** 🟥 **FL290–FL410** — MID region RVSM, applicable in principle. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNAV 5** enroute; **RNAV 1/RNP 1** terminal; **RNP APCH** arrivals, applicable in principle. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md). 🟧 With GPS spoofing/jamming reported region-wide, confirm GNSS/RNP integrity monitoring for any permitted arrival/departure.
- **8.33 kHz channel spacing:** 🟩 **not applicable** — the MID region uses **25 kHz** VHF spacing.
- **Datalink (CPDLC):** 🟧 **not confirmed** for this FIR — plan on VHF voice for any permitted operation. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out** underpins the surveillance service in normal operation. Confirm equipage on the OFP.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** in normal operation, a transit would be handed across the Kuwait area-control sectors and the Kuwait approach unit; the exact sector split and frequencies are AIRAC-dependent. **Currently only arrivals/departures to OKKK are relevant** — fly the current-AIRAC/AIP frequencies, not a stored table.
- **FIS / lower airspace:** Kuwait **AIS/FIS** (DGCA).
- **Language:** 🟩 **English** (ICAO).
- **Channel spacing:** 🟩 **25 kHz** VHF (no 8.33 kHz mandate).
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **not implemented** in the European sense — a fixed ATS-route network in normal operation, tactically vectored around the Kuwait TMA.
- **Airway spine:** 🟥 **overflight of the OKAC/Kuwait FIR is currently prohibited outright.** Per the Middle East area brief §6, this is "the mid-Gulf gap" in the regional routing structure — traffic must route around Kuwait via the southern (Jeddah/Oman/Emirates) or northern (Caucasus/Central Asia) bypass, not through it. Only arrivals/departures to OKKK are permitted, subject to approval.
- **Major fixes / entry-exit points:** the historical Baghdad-FIR entry/exit fixes toward Kuwait (e.g. TASMI/SIDAD) are **not currently usable for transit** given both FIRs' conflict status; any arrival/departure fix set for OKKK is planning context, not a clearance — fly the SimBrief/current-AIRAC string.
- **Hubs & aerodromes inside the FIR:** 🟩 **Kuwait Intl (OKKK)** — the sole K Global-served field, and Kuwait's only international gateway. Terminal detail is in the airport briefings (§9), but note the field's current operational status (§10).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 flat desert terrain — no significant terrain factor anywhere in this FIR.
- **Boundary terrain:** none of note across any adjacent FIR boundary.
- **Driftdown / depressurisation escape:** 🟩 not a terrain-limited problem; 🟥 the binding constraint here is **not terrain but airspace availability** — with overflight prohibited and OKKK itself struck, this FIR offers essentially **no reliable diversion capability** at present (§9).
- **Cold-temperature altitude corrections:** 🟩 not relevant — hot climate; the operational temperature driver is **high-temperature/density-altitude** performance in summer, not cold-temperature correction.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Kuwait Intl | **OKKK** | Sole in-FIR field — 🟥 **currently degraded**: airport itself sustained missile/drone damage (March 2026); treat as an unreliable alternate pending confirmed operational status | [OKKK brief](../../../destinations/middle-east/kuwait/okkk/index.md) |

- **Coverage note:** 🟥 **this FIR should not be relied upon for diversion planning at present.** Only one field exists in-FIR, it has itself been directly affected by the conflict, and the FIR is overflight-prohibited in any case. Treat Kuwait as **outside the usable alternate set** for any K Global routing until the conflict-zone picture clears (§10) — plan alternates in the adjacent Bahrain/Jeddah/Emirates fields instead.

---

## 10. Special-use airspace

> 🟥 **CONFLICT-ZONE / LIVE-SECURITY AIRSPACE — HIGHEST-RISK FIR IN THIS BUILD. This section is perishable. Re-check the current CZIB/NOTAM picture at planning (§11); the state of the Gulf situation changes rapidly.**

- **Overflight prohibition (the headline fact):** 🟥 as at build date, **overflights through the OKAC/Kuwait FIR remain prohibited** — the FIR is open **for arrivals and departures only**, and even those are subject to approval. This is a **harder restriction than the other three FIRs in this build** (Bahrain, Doha and Emirates remain open to overflight under a CZIB advisory; Kuwait does not).
- **Direct strikes on Kuwait:** 🟥 Kuwait has been **directly affected by the conflict** — reported **missile and drone strikes damaged Kuwait Intl (OKKK) and other military targets in the country in March 2026**. The OKAC FIR **closed and reopened several times** during Feb–Jul 2026 during the Iran conflict.
- **CZIB / NOTAM status:** the current **EASA CZIB 2026-07R1 advises operators not to operate in the OKAC/Kuwait FIR at any altitude or flight level**, following renewed military activity in the Gulf after the US-Iran ceasefire broke down. France has issued a NOTAM (LFFF F1580/26, current as at build date) requesting French operators not to enter Kuwait's airspace at all — a blanket restriction, matching the overflight prohibition already in force operationally.
- **Primary risk:** missile and drone activity linked to the wider Iran conflict, air-defence misidentification, and falling intercept debris — Kuwait's proximity to major US military facilities in the country is cited as a specific driver of the risk level. *(This is durable awareness that OKAC is presently the most restricted FIR in the K Global Middle East network; the specific advisory reference, validity dates and the overflight-prohibition status are live data — confirm the current CZIB/NOTAM state at planning before relying on any information in this file.)*
- **Military restricted / danger / prohibited:** 🟧 Kuwait publishes restricted/danger/prohibited areas per the AIP; activation and status are AIP/NOTAM-published — confirm active at planning, though currently secondary to the overflight prohibition.
- **Overflight-permit / diplomatic considerations:** 🟥 **moot while overflight is prohibited outright.** Any arrival/departure to OKKK requires prior approval per current NOTAM — confirm before planning.

> **SUA / conflict currency:** re-check the **EASA CZIB, French/state NOTAMs, ICAO Conflict Zone Information Repository, safeairspace.net and operator routing policy** at planning — the §10 picture is durable awareness, not live clearance, and this FIR's status is the most volatile of the four in this build.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** ICAO standard — squawk **7600**, continue per the last acknowledged clearance/filed route and levels (where any permitted operation applies), attempt the previous/adjacent frequency and 121.5. 🟧 Confirm any Kuwaiti AIP refinement at ENR 1.8/GEN.
- **Weather-deviation / in-flight contingency:** radar-tactical — request the deviation from ATC, where any permitted operation applies. No oceanic offset table applies.
- **GNSS degradation contingency:** 🟧 with **GPS spoofing/jamming reported** region-wide, be prepared for FMS position drift/spurious terrain or nav alerts on any permitted arrival/departure — cross-check with DME/DME/IRU, advise ATC, and follow OM E guidance.
- **Seasonal hazards (durable):**
  - **Summer heat & density altitude (Jun–Sep)** — extreme temperatures; a hot-and-high performance driver at OKKK.
  - **Shamal dust and reduced visibility** — blowing dust events can trigger LVO; a terminal driver.
  - **Volcanic ash / space weather:** not a planning driver at these latitudes.

> **Pull at planning (T-2h):** the **current overflight-prohibition and conflict-zone picture — EASA CZIB, French/Kuwaiti NOTAMs, ICAO CZIR, safeairspace.net, operator routing policy** (the single most mission-critical item for this FIR), OKKK's confirmed operational/damage status, enroute NOTAMs and active restricted/danger areas, SIGMET/AIRMET (dust), GNSS-interference advisories. Not stored here.

---

## 12. Open items (🟧 — confirm)

- **Overflight-prohibition and OKKK operational status are live** — the §10 picture (prohibition end-date, airport repair/reopening status, CZIB validity) must be re-verified at planning; do not treat this file's snapshot as current under any circumstances.
- Exact **ANSP unit name** (Kuwait area control) and the **Class-A floor/class per band** (Kuwait AIP ENR 2.1) — stated at summary level; confirm.
- **CPDLC** availability/coverage in this FIR — not confirmed either way; likely moot given current restrictions.
- **Baghdad-FIR boundary** entry/exit-point set (TASMI/SIDAD) and whether any is usable once/if both FIRs normalise — confirm current AIP/NOTAM.
- **GNSS spoofing/jamming** current extent — confirm at planning.
- Given the severity of the current restriction, **treat Kuwait as excluded from K Global routing** until the operational picture is reassessed — a network-planning flag, not just an OM item.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **Kuwait AIP — ENR sections (DGCA)**: ENR 2.1 (FIR/UIR & control-area structure, airspace classes), ENR 1.x (RVSM, PBN, comms-failure), ENR 3.x (ATS routes), ENR 5.x (restricted/danger/prohibited areas). Primary source of record for FIR structure, classes and routes — https://www.dgca.gov.kw (retrieved 2026-07-26).
- **ICAO MID regional supplementary procedures (Doc 7030)** — MID RVSM (FL290–410), regional route/comms/PBN procedures.
- **Safe Airspace (OPSGROUP) — Kuwait** (Risk Level 3-Caution; overflight prohibited, arrivals/departures only; EASA CZIB 2026-07R1 avoid-all-levels; France NOTAM LFFF F1580/26; March 2026 strikes on OKKK; Feb–Jul 2026 closures/reopenings) — https://safeairspace.net/kuwait/ (retrieved 2026-07-26). *Advisory/live source — re-check at planning; §10/§11 currency depends on it.*
- **OPSGROUP — Middle East Airspace: Current Operational Picture** (Kuwait overflight prohibition context, "mid-Gulf gap" routing) — https://ops.group/blog/middle-east-airspace-current-operational-picture/ (retrieved 2026-07-26). *Advisory/live source.*
- **Baghdad FIR entry/exit-point material** (TASMI/SIDAD Kuwait-boundary fixes, tier-4 corroboration) — https://www.yumpu.com/en/document/view/8178673/baghdad-fir (retrieved 2026-07-26). *Tier-4 corroboration only.*
- **Companion K Global file:** [`../../General/Middle East.md`](../../middle-east.md) (area brief — FIR mosaic, Kuwait "mid-Gulf gap" routing note) · [`Bahrain (OBBB).md`](bahrain-obbb.md) · [`Doha (OTDF).md`](doha-otdf.md) · [`Emirates (OMAE).md`](emirates-omae.md) (adjacent FIR briefs).
- Companion OM C file: [`../../../Airports/Middle East/Kuwait/OKKK — Kuwait Intl/OKKK — Briefing.md`](../../../destinations/middle-east/kuwait/okkk/index.md).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial build from `_FIR Briefing Template.md`. Kuwait FIR (OKAC) containing OKKK; adjacent FIRs (**Baghdad N/NW — sensitive boundary, itself CZIB-avoid**, Bahrain SE, Jeddah SW, Tehran E); DGCA/Kuwait area control referenced; RVSM/RNAV5/RNP1/RNP APCH/ADS-B referenced to OM E as the in-principle standard; CPDLC not confirmed; flat terrain, no significant belt; **flagged as the highest-risk FIR of the four in this build — overflight prohibited (arrivals/departures only), OKKK itself struck March 2026, treated as an unreliable diversion field**; EASA CZIB avoid-all-levels + France NOTAM avoid entirety; hot-and-high + dust seasonal. |
