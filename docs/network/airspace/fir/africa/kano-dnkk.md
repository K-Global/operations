# Kano (DNKK) — FIR Briefing

**Scope:** single FIR — the **whole of Nigeria** (DNKK is the country's **only** FIR), containing the **Lagos (DNMM) home hub** plus Abuja, Kano and Port Harcourt · **Parent area brief:** [Africa](../../africa.md) 🟩 · **Adjacent FIRs:** Niamey (DRRR) N · N'Djamena (FTTT) E/NE · Douala (FKKK) SE · Accra (DGAC) W · Gulf of Guinea / Atlantic (oceanic) S
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — provisional; FIR structure/RVSM/FRA verified against public NAMA/ICAO/OPS sources, but per-band class letters, exact ACC sector split and live radar serviceability are flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Kano FIR is a **mixed radar/procedural continental FIR** — radar/surveillance around the major terminals (Lagos, Kano, Abuja, Port Harcourt) but **procedural in much of the en-route and remote structure**, in line with the ICAO AFI region. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC clearances. Terminal procedures for aerodromes inside the FIR live in the airport briefings (§9). Live restrictions — NOTAMs, radar-outage bulletins, and the fast-moving **Sahel / north-east security picture** — are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **DNKK** — Kano FIR; the **single FIR covering all of Nigeria** (worked by two ACCs — **Kano ACC** and **Lagos ACC**) |
| Controlling ATSU / ANSP | **Kano ACC** (north) and **Lagos ACC** (south), both **NAMA — Nigerian Airspace Management Agency**; regulator **NCAA** |
| Airspace class & vertical limits | 🟧 Controlled upper airspace (Class **A/C** on the airway/RVSM network) over Class **D/E/G** below; confirm exact class letter per band at **Nigeria AIP ENR 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** (ICAO **AFI RVSM**) — RVSM approval required; see OM E §5 |
| PBN environment | 🟧 **RNAV 5** enroute / RNP where published (AFI PBN) — confirm terminal RNP per current AIP; see OM E §5 |
| Surveillance & datalink | 🟧 **Radar (TRACON: PSR + MSSR)** around Lagos/Kano/Abuja/Port Harcourt; **procedural** elsewhere. Datalink limited — **AFI IFBP listening watch on 126.9 MHz** where VHF/radar thin. Radar serviceability a live watch item (§11) |
| Primary language & comms | 🟩 **English** (ICAO); VHF around the majors, **HF** for remote/oceanic edges |
| Key hazard(s) | 🟥 **Security** — Boko Haram / ISWAP in the north-east; Sahel-border tensions to the north (re-check live). **Harmattan** dust haze (Nov–Mar); wet-season squall lines; radar reliability; Jos/Mambilla-plateau terrain in the E/SE |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟧 | **Mixed.** Radar/surveillance around the TRACON terminals; **procedural en-route** over much of the FIR per AFI practice. Radar outages have been publicly reported — treat surveillance as not guaranteed and confirm live. |
| Communication coverage & language | 🟧 | **English** throughout. VHF around the majors; **HF and the AFI In-Flight Broadcast Procedure (IFBP, listening watch 126.9 MHz)** where VHF is limited. Confirm sector frequencies from current AIP. |
| Datalink / surveillance requirement | 🟧 | Datalink (CPDLC/ADS-C) **not a mature FIR-wide capability** here — unlike an oceanic/ADS-B-rich FIR. Transponder required; confirm any ADS-B requirement at planning. |
| Terrain / MORA / driftdown | 🟧 | Mostly low plains/plateau; **Jos Plateau (~5,840 ft)** in the centre and the **Mambilla/Adamawa highlands (Chappal Waddi ~7,936 ft)** on the SE Cameroon border are the high belts. Not a cruise factor; relevant to driftdown in the E/SE. §8. |
| Diversion-aerodrome coverage | 🟩 | Reasonable — **DNMM Lagos, DNAA Abuja, DNKN Kano, DNPO Port Harcourt** give national spread; curated briefs exist for the majors (§9). |
| Special-use airspace (military / danger) | 🟥 | **Conflict-zone exposure** in the north-east (Borno/Yobe/Adamawa/Bauchi/Gombe) and along the northern Sahel border. Danger/restricted areas plus a dynamic security picture — **re-check live every time** (§10/§11). |
| Equipment / approval (RVSM, PBN, 8.33, transponder) | 🟥 | **AFI RVSM FL290–410 · RNAV 5 · transponder.** RVSM approval mandatory. All defined in OM E; confirm the current-AIRAC route/levels. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Kano FIR (**DNKK**) is coterminous with **Nigeria** — it is the country's **only** FIR. Airspace responsibility is split operationally between **Kano ACC** in the north and **Lagos ACC** in the south, but they sit inside one FIR ident.
- **Vertical split:** 🟧 lower controlled airspace (terminal CTAs/CTRs and the airway network) beneath the RVSM upper band; the exact lower/upper handoff level is AIP-defined — confirm at **ENR 2.1**. RVSM applies **FL290–FL410**.
- **Adjacent FIRs (by boundary):**
  - **N — Niamey (DRRR, ASECNA/Niger).** Sahel border; overflight-sensitive (§10).
  - **E / NE — N'Djamena (FTTT, ASECNA/Chad).**
  - **SE — Douala (FKKK, Cameroon)** — the high **Mambilla/Adamawa** terrain sits astride this boundary (§8).
  - **W — Accra (DGAC, Ghana).**
  - **S — Gulf of Guinea / Atlantic**, handing to the oceanic structure over the Gulf of Guinea for southbound/over-water traffic.
- **Sectorisation:** 🟧 the transit-relevant fact is the **Kano ACC (north) / Lagos ACC (south)** split within DNKK; internal sector boundaries are AIP/AIRAC-dependent — fly the current sectorisation, not a stored one.

---

## 4. Control & ATSU

- **ATSUs:** 🟩 **Kano ACC** and **Lagos ACC**, both **NAMA (Nigerian Airspace Management Agency)**; **NCAA** is the safety regulator. The two ACCs jointly work the single DNKK FIR.
- **Surveillance basis:** 🟧 **TRACON radar** — Primary Surveillance Radar (STAR 2000) plus Monopulse Secondary Surveillance Radar (RSM-970) — is installed at **Lagos, Kano, Abuja, Port Harcourt** and several stand-alone MSSR sites, giving radar/surveillance around the majors and their airways. **Much of the en-route/remote FIR is procedural.** Public reporting has flagged **radar serviceability/obsolescence** concerns — do not assume continuous surveillance; confirm live (§11).
- **FIS:** flight information / procedural service provided by NAMA outside radar cover; the **AFI IFBP** (listening watch on **126.9 MHz**) supports separation awareness where VHF/radar is thin.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Kano FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — **ICAO AFI RVSM**; an **RVSM approval** from the State of Registry/Operator is required to plan the AFI RVSM band. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟧 **RNAV 5** enroute where the network is PBN-based; terminal RNP where published — confirm the current Nigeria AIP. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟩 **not an AFI requirement** — 8.33 kHz is an ICAO EUR mandate, not applicable here; standard 25 kHz VHF applies.
- **Datalink (CPDLC / ADS-C):** 🟧 **not a mature FIR-wide capability** in DNKK. Where VHF/radar is limited the AFI **In-Flight Broadcast Procedure (IFBP)** — a **listening watch on 126.9 MHz** with position self-broadcast — is the mitigation, **not** a FANS CPDLC service. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode C/S transponder required.** 🟧 Any ADS-B Out requirement is not asserted here — confirm the current Nigeria AIP/NOTAM at planning.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a transit is worked by **Lagos ACC** and/or **Kano ACC** depending on routing; the exact sector frequencies are AIRAC/AIP-dependent — fly the current AIP frequencies, not a stored table.
- **HF & remote:** 🟧 **HF** and the **AFI IFBP (126.9 MHz listening watch)** cover the segments beyond VHF/radar — maintain the broadcast discipline where controllers cannot see you.
- **Language:** 🟩 **English** (ICAO) throughout.
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air; **126.9 MHz** for AFI IFBP.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟩 **Nigeria has FRA available in the DNKK/Kano FIR at FL245 and above** — direct planning between defined points within the FIR, in line with the broader African FRA roll-out. Confirm the current FRA point set / conditions at planning.
- **Airway spine (where FRA not available / below floor):** the **fixed ATS-route network** feeds the Lagos, Abuja, Kano and Port Harcourt terminals and connects to the Accra, Niamey, N'Djamena and Douala boundaries.
- **Major fixes / entry-exit points:** the FRA/airway boundary fixes toward the four adjacent continental FIRs and the Gulf-of-Guinea oceanic exit; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Lagos (DNMM, home hub)**, **Abuja (DNAA)**, **Kano (DNKN)**, **Port Harcourt (DNPO)**, plus Enugu (DNEN), Calabar (DNCA), Ibadan (DNIB) and the wider Nigerian network. Terminal detail is in the airport briefings (§9).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟧 Nigeria is largely low plains and plateau. The high belts are the **Jos Plateau (~5,840 ft)** in the centre-north and the **Mambilla / Adamawa highlands** on the south-eastern Cameroon border, rising to **Chappal Waddi (~7,936 ft)** — the country's highest ground. The coastal south-west (Lagos) and the northern plains are low.
- **Boundary terrain:** 🟧 the highest terrain sits **astride the SE boundary with Douala FIR (FKKK, Cameroon)** — relevant to driftdown/escape for routings through the south-east, not for a coastal Lagos transit.
- **Driftdown / depressurisation escape:** not a cruise-level constraint over most of the FIR; relevant only to one-engine driftdown / emergency descent in the E/SE highlands. National diversion spread (Lagos/Abuja/Kano/Port Harcourt) covers most routings.
- **Cold-temperature altitude corrections:** not a factor — tropical climate; terminal cold-temperature corrections do not apply here.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Lagos — Murtala Muhammed | **DNMM** | Home hub / primary alternate (SW) | [DNMM brief](../../../destinations/africa/nigeria/dnmm/index.md) |
| Abuja — Nnamdi Azikiwe Intl | **DNAA** | Central alternate (capital) | [DNAA brief](../../../destinations/africa/nigeria/dnaa/index.md) |
| Kano — Mallam Aminu Kano Intl | **DNKN** | Northern alternate | [DNKN brief](../../../destinations/africa/nigeria/dnkn/index.md) |
| Port Harcourt — Obafemi Awolowo | **DNPO** | Southern/SE alternate | [DNPO brief](../../../destinations/africa/nigeria/dnpo/index.md) |
| Enugu — Akanu Ibiam | **DNEN** | SE alternate | [DNEN brief](../../../destinations/africa/nigeria/dnen/index.md) |
| Calabar — Margaret Ekpo | **DNCA** | SE coastal alternate | [DNCA brief](../../../destinations/africa/nigeria/dnca/index.md) |

- **Coverage note:** 🟧 adequate national spread, but **avoid the north-east** for security reasons (§10) — Lagos, Abuja, Port Harcourt and Enugu are the dependable diversions; northern fields (Kano, Maiduguri) carry the higher security/serviceability caveat.

---

## 10. Special-use airspace

- **Military / danger / restricted areas:** 🟧 danger and restricted areas are AIP/NOTAM-published across the FIR (military training, ranges) — pull the active list at planning.
- **Conflict-zone / security exposure:** 🟥 **the north-east — Borno, Yobe, Adamawa, Bauchi, Gombe — carries active insurgent (Boko Haram / ISWAP) risk**, and the **northern Sahel border** with Niger has seen inter-state airspace tension. Airports and low-level operations in the affected areas can be targets. Treat the north-east and the far-north border belt as **elevated-risk** and re-check the current advisory picture before every operation.
- **Overflight-permit / diplomatic considerations:** 🟧 Nigeria requires **overflight/landing permits** for scheduled/non-scheduled foreign operations — a real-world dispatch item; confirm current requirements.

> **SUA / security currency:** the conflict-zone and Sahel-border picture is **dynamic — re-check live every time** (Safe Airspace / state advisories); this list is durable context, not a live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** squawk **7600**; continue per the ICAO/Nigeria AIP IFR comms-failure rules (last clearance / filed route and levels), attempt contact on the previous/adjacent frequency, 121.5 and the **126.9 MHz IFBP**. 🟧 Confirm the Nigeria refinement at **AIP ENR 1.**
- **Procedural / weather-deviation contingency:** in **non-radar (procedural) airspace**, apply the AFI/ICAO weather-deviation and contingency procedures — broadcast intentions on the IFBP/HF, offset per the standard technique, and coordinate as able. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Harmattan (≈ Nov–Mar)** — north-easterly Saharan **dust haze** cutting visibility, worst in the north (Kano) — a terminal-visibility and diversion driver in the dry season.
  - **Wet season (≈ Apr–Oct)** — organised **convective squall lines / thunderstorms** and embedded CB, particularly in the afternoon/evening; tactical avoidance.
  - **Security wildcard** — the north-east insurgency and Sahel-border tension are the strategic risk that would materially reshape a routing (§10).

> **Pull at planning (T-2h):** enroute NOTAMs (incl. **radar-outage / procedural-reversion** notices), danger/restricted-area status, **Safe Airspace / state conflict-zone advisories** for the north-east and Sahel border, SIGMET/AIRMET (harmattan dust, convection), the current **FRA point set**, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **airspace class letter per band** and lower/upper handoff level (Nigeria AIP ENR 2.1).
- Precise **Kano ACC / Lagos ACC internal sector boundaries** and frequencies (current AIP).
- **Radar serviceability** across the TRACON sites — public reporting flags outages/obsolescence; treat surveillance as not guaranteed and confirm live.
- **Terminal RNP / PBN spec** and any **ADS-B Out** requirement (current Nigeria AIP).
- **Current FRA point set / conditions** for the FL245+ DNKK free-route airspace.
- **Live security picture** — north-east conflict zone and Sahel-border tension (Safe Airspace / state advisories) — re-check every operation.
- **Overflight/landing permit** requirements for the operation.
- **West Africa / Africa regional area brief** does not yet exist as a parent — build if the network expands.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **NAMA — Nigerian Airspace Management Agency** (ANSP of record for the DNKK/Kano FIR; publisher of the Nigeria AIP/AIS) — https://nama.gov.ng/ (retrieved 2026-07-25). Nigeria AIP ENR sections are the primary source for FIR structure, classes, routes, RVSM and comms.
- **ICAO Doc 7030 — Regional Supplementary Procedures (AFI)** — AFI RVSM (FL290–410), procedural-airspace practice and the **In-Flight Broadcast Procedure (IFBP, 126.9 MHz)** — https://www.icao.int (retrieved 2026-07-25).
- **OPSGROUP — "Free Route Airspace in Africa"** (Nigeria: **FRA FL245 and above in the DNKK/Kano FIR**) — https://ops.group/blog/free-route-airspace-in-africa/ (retrieved 2026-07-25).
- **metar-taf.com — DNKK / Kano FIR** and **PilotNav — DNKK Kano ACC/FIC** (FIR ident / control-unit corroboration) — https://metar-taf.com/fir/DNKK-Kano · https://www.pilotnav.com/airport/DNKK (retrieved 2026-07-25).
- **Nigerian radar (TRACON) public reporting** — PSR (STAR 2000) + MSSR (RSM-970) at Lagos/Kano/Abuja/Port Harcourt and stand-alone sites; serviceability concerns — Nigerian press coverage (retrieved 2026-07-25).
- **Safe Airspace — Conflict Zone & Risk Database** (north-east Nigeria / Sahel-border risk; **re-check live**) — https://safeairspace.net/ (retrieved 2026-07-25).
- **VATSIM West Africa vACC (VACCWAF, VATNAF division)** — the VATSIM division that provides ATC for Nigeria / the Kano FIR; controller & pilot operating information — https://www.westafricavacc.org/ (retrieved 2026-07-25). *Tier-4 corroboration only — the FIR's network ownership (VACCWAF / VATNAF, historically introduced by VATCAF) and the single-Nigeria-FIR structure cross-checked here.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build from `_FIR Briefing Template.md`. Kano FIR (DNKK) confirmed as **Nigeria's single FIR**, worked by Kano ACC + Lagos ACC (NAMA); mixed radar (TRACON PSR/MSSR at the majors) / **procedural** en-route per AFI; **AFI RVSM FL290–410**; **FL245+ FRA**; RNAV 5 / transponder referenced to OM E; HF + **AFI IFBP 126.9 MHz**; Jos/Mambilla-plateau terrain; national diversion set (DNMM/DNAA/DNKN/DNPO); **🟥 north-east conflict zone + Sahel-border security (re-check live)**; harmattan + wet-season convection; adjacent FIRs Niamey/N'Djamena/Douala/Accra + Gulf-of-Guinea oceanic. VATSIM West Africa vACC cross-checked (tier-4). Parent area brief: West Africa/Africa (to build). |
