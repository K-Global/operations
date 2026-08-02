# Brisbane (YBBB) — FIR Briefing

**Scope:** single FIR — the **northern & eastern half of Australia** (Queensland, Northern Territory, northern Western Australia, northern New South Wales) plus a large **oceanic area** (Coral Sea, half the Tasman Sea, upper airspace managed for Solomon Islands and Nauru under contract) · **Parent area brief:** [Oceania](../../oceania.md) 🟩 · **Adjacent FIRs:** Melbourne (YMMM) S (boundary ~45 nm N of Sydney) · Ujung Pandang/Makassar (WAAF) NW · Port Moresby (AYPM) N · Nadi (NFFF) NE/E (Coral Sea, incl. the New Caledonia/Nouméa sector delegated within it) · Auckland Oceanic (NZZO) SE (eastern Tasman handoff)
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me — reconciliation flag, verified this pass:** This build brief's premise stated "Sydney (YSSY) sits in the Brisbane FIR." **That is incorrect and is not carried forward.** Airservices Australia states plainly that **Brisbane Centre's airspace begins 45 nm (83 km) north of Sydney** — meaning Sydney lies on the **Melbourne** side of the boundary. This is also the finding already recorded (and sourced) in the [Melbourne (YMMM) FIR brief](melbourne-ymmm.md) and the [YSSY airport brief](../../../destinations/oceania/australia/yssy/index.md) — both correct as they stand. 🟥 **No K Global-served airport is currently within the Brisbane FIR** (YSSY and YPPH are both Melbourne FIR). This brief covers YBBB on its own merits as the network's northern neighbour FIR and records the boundary fact for route-planning context; see §12.
>
> Strategic transit reference for the sim, not a chart or clearance. YBBB is a **mixed continental-radar / oceanic-procedural FIR** — radar/ADS-B over the populated Queensland/NT coastal corridor and inland network, **procedural oceanic** (ADS-C / space-based ADS-B / CPDLC-FANS) over the Coral Sea and the Brisbane-worked half of the Tasman. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC clearances. Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **YBBB** — Brisbane FIR; northern half of Australia (QLD, NT, northern WA, northern NSW) + Coral Sea + half the Tasman Sea |
| Controlling ATSU / ANSP | **Brisbane Centre**, **Airservices Australia** (ANSP); regulator **CASA**. Brisbane Centre also provides contracted upper-airspace ATC for **Solomon Islands (Honiara, AGGG)** and **Nauru (ANAU)** |
| Airspace class & vertical limits | 🟧 **Class A** upper airspace (typically FL180/A100+ on the jet network) over Class **C/D/E/G** below — confirm exact steps at **Australia AIP ENR/DAP** |
| RVSM | 🟥 Applicable **FL290–FL410** (Australian RVSM) — see OM E §5 |
| PBN environment | 🟩 **RNAV/RNP** throughout — RNP 2/RNAV 5 enroute, RNP 1 terminal, RNP APCH — same national standard as Melbourne FIR; see OM E §5 |
| Surveillance & datalink | 🟩 **Radar + ground ADS-B** over the continent; **space-based ADS-B (Aireon)** + **ADS-C/CPDLC (FANS-1/A)** over the Coral Sea / eastern Tasman oceanic sectors (**CORAL, FLINDERS, LORD HOWE, TASMAN** sector volumes) |
| Primary language & comms | 🟩 **English**; **VHF** over the continent, **HF/SATVOICE/CPDLC** over the oceanic sectors |
| Key hazard(s) | **North Queensland tropical-cyclone season (Nov–Apr)**; monsoon/wet-season convection (Top End, Cape York); **Great Dividing Range** terrain in eastern Queensland; **PNG highlands** just across the AYPM boundary; sparse Coral Sea/Tasman diversions (Norfolk YSNF, Lord Howe YLHI); VAAC-Darwin volcanic ash (PNG/Vanuatu) |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Continental Queensland/NT trunk radar/ADS-B controlled; **Coral Sea and eastern-Tasman sectors procedural** (ADS-C/space-based ADS-B/CPDLC). |
| Communication coverage & language | 🟩 | English. Continuous VHF over the continent; HF/SATVOICE/CPDLC over the Coral Sea/oceanic sectors. |
| Datalink / surveillance requirement | 🟥 | **ADS-B Out mandatory** in Australian controlled airspace (CASA); **ADS-C/CPDLC (FANS-1/A)** oceanic; Aireon space-based ADS-B extends coverage. Confirm equipage. §5. |
| Terrain / MORA / driftdown | 🟧 | **Great Dividing Range** (SE Queensland hinterland) is the significant belt; Cape York/Top End generally low. Not a cruise-level factor at FL290+. Adjacent **PNG highlands** (across the AYPM boundary) are far higher — §8. |
| Diversion-aerodrome coverage | 🟧 | Dense on the Queensland/NT coastal trunk (**YBBN, YBCS, YPDN**); **sparse over the Coral Sea/eastern-Tasman oceanic sectors** — ETP/EDTO planning applies there. §9. |
| Special-use airspace (military / danger) | 🟧 | Queensland/NT military restricted/danger areas (e.g. Shoalwater Bay, Delamere) activated per AIP/NOTAM; confirm active at planning. §10. |
| Equipment / approval (RVSM, PBN, ADS-B, oceanic) | 🟥 | **RVSM FL290–410 · RNP/RNAV · ADS-B Out mandatory · ADS-C/CPDLC oceanic.** Defined in OM E; confirm current-AIRAC route/levels. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Brisbane FIR (**YBBB**) covers the **northern half of continental Australia** — Queensland, the Northern Territory, the northern part of Western Australia and the northern fringe of NSW — **plus** an extensive **oceanic area**: the **Coral Sea** and roughly **half of the Tasman Sea** (the eastern half off the NSW/Queensland coast; New Zealand's Auckland Oceanic works the other half). Brisbane Centre additionally provides **contracted upper-airspace ATC for the Solomon Islands and Nauru**.
- **Southern boundary with Melbourne (YMMM):** 🟥 **verified, not the task-brief premise** — the line runs diagonally **from near the Indonesia border in the NW down to a point ~45 nm (83 km) north of Sydney in the SE**. Recent chart-change coordinates place the boundary near **S33 16.2 E150 47.2 / S33 30.1 E150 13.2 / S32 43.1 E149 21.7 / S32 05.7 E148 49.9**. **Sydney (YSSY) sits south of this line, i.e. inside Melbourne FIR — not Brisbane.**
- **Vertical split:** 🟧 **Class A** upper airspace over the jet network; lower Class C/D around the terminals and E/G below/outside — confirm exact vertical steps at the Australia AIP ENR. RVSM applies **FL290–FL410**.
- **Adjacent FIRs (by boundary):**
  - **S — Melbourne (YMMM, Airservices).** The other Australian FIR; boundary ~45 nm N of Sydney (above).
  - **NW — Ujung Pandang/Makassar (WAAF), Indonesia.**
  - **N — Port Moresby (AYPM), Papua New Guinea.**
  - **NE/E — Nadi (NFFF), Fiji** — the Coral Sea oceanic boundary; the **New Caledonia/Nouméa sector is delegated within Nadi FIR** (see the [Nouméa brief](noum-a-nwww.md)), reached via Brisbane's Coral/Tasman oceanic sectors.
  - **SE — Auckland Oceanic (NZZO), Airways NZ.** Eastern-Tasman handoff — an east-coast-Australia-to-New-Zealand routing transits **Brisbane oceanic** before the NZZO handoff.
- **Sectorisation:** 🟧 Brisbane Centre's designated oceanic sector volumes include **CORAL, FLINDERS, LORD HOWE and TASMAN**; the continental network splits into further ACC sectors — the transit-relevant fact is **continent (radar) vs Coral Sea/Tasman (oceanic-procedural)**.

---

## 4. Control & ATSU

- **En-route ATSU:** 🟩 **Brisbane Centre (YBBB), Airservices Australia** — one of Australia's two en-route centres (the other is Melbourne Centre, YMMM). Brisbane (YBBN), Cairns (YBCS), Townsville and Darwin (YPDN) en-route traffic is worked by Brisbane Centre.
- **Oceanic control:** 🟩 the **Coral Sea and eastern-Tasman** sectors are **procedural**, supported by **ADS-C/CPDLC (FANS-1/A)** and **space-based ADS-B (Aireon)**.
- **Contracted upper-airspace ATC:** 🟧 Brisbane Centre provides upper-airspace air traffic services for **Honiara (Solomon Islands, AGGG)** and **Nauru (ANAU)** under bilateral agreement — confirm current contract scope at planning if either becomes a planned routing.
- **FIS:** Airservices flight information service; the mainland IFR trunk stays in controlled airspace throughout.
- **Surveillance basis:** 🟩 **radar + ground ADS-B** over the populated coastal corridor; **space-based ADS-B + ADS-C** over the Coral Sea/Tasman.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Brisbane FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — Australian RVSM, identical national standard to the Melbourne FIR. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 mature PBN — **RNP 2/RNAV 5** enroute, **RNP 1** terminal, **RNP APCH** arrivals per the Australian AIP. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **8.33 kHz channel spacing:** 🟩 **not applicable** — standard 25 kHz VHF applies in Australia.
- **Datalink (CPDLC/ADS-C):** 🟥 **ADS-C and CPDLC (FANS-1/A)** used across the **Coral Sea/eastern-Tasman** oceanic sectors; **space-based ADS-B (Aireon)** extends surveillance. Domestic CPDLC also used. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **ADS-B Out (1090 MHz ES) mandatory** in Australian controlled airspace (CASA); **Mode S** transponder required.

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** the continental Queensland/NT trunk is worked by **Brisbane Centre** en-route sectors; exact sector split and frequencies are AIRAC-dependent — fly the current AIP frequencies, not a stored table.
- **Oceanic:** 🟧 **HF/SATVOICE/CPDLC** for the Coral Sea/eastern-Tasman sectors where VHF ends.
- **Language:** 🟩 **English** throughout.
- **Emergency / guard:** **121.5 MHz** guard; **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Continental network:** 🟩 the Queensland/NT jet network (RNP/RNAV airways + SID/STAR) feeds Brisbane, Cairns, Townsville and Darwin under radar/ADS-B control.
- **Oceanic routes:** 🟧 the **Coral Sea** tracks toward PNG/Solomons/Nadi and the **eastern-Tasman** tracks toward New Zealand are **procedural** — flown as User Preferred Routes (UPR) with oceanic clearance, ADS-C/CPDLC and (where applicable) SLOP; see the [Oceania area brief](../../oceania.md) §6 for the AUSOTS-retirement/UPR context (region-wide, not repeated here).
- **Major fixes / entry-exit points:** the boundary fixes toward Melbourne FIR (~45 nm N of Sydney), the Coral Sea entry/exit points toward Nadi (NFFF) and Port Moresby (AYPM), and the Tasman entry/exit points toward Auckland Oceanic (NZZO); the SimBrief/current-AIRAC route provides the exact string.
- **Hubs & aerodromes inside the FIR:** Brisbane (YBBN), Cairns (YBCS), Townsville (YBTL), Darwin (YPDN) and the wider northern network. 🟥 **No K Global-served airport currently sits within this FIR** — see the read-me reconciliation note above. *Sydney (YSSY) and Perth (YPPH) are both in the **[Melbourne FIR](melbourne-ymmm.md)** — not this FIR.*

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟧 the **Great Dividing Range** running through eastern Queensland (SE Queensland hinterland, e.g. peaks to ~1,600 m/5,200 ft) is the FIR's most significant belt; Cape York and the Top End (NT) are generally low. Not a cruise-level factor at FL290+.
- **Boundary terrain:** 🟥 the **Papua New Guinea highlands** (Owen Stanley Range, Mt Wilhelm ~14,800 ft) sit just across the northern boundary in the **Port Moresby FIR (AYPM)** — of note for any routing that clips the AYPM boundary, not for a Brisbane-FIR-only transit.
- **Driftdown / depressurisation escape:** not a constraint over the continental corridor (dense diversion fields, low terrain). **Over the Coral Sea/eastern-Tasman oceanic sectors, ETP/critical-point and depressurisation-escape planning IS relevant** given sparse diversions.
- **Cold-temperature altitude corrections:** not a material factor at this FIR's terminals (tropical/sub-tropical, low elevation) — a non-issue relative to the southern Australian terminals.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Brisbane | **YBBN** | Major alternate (SE Queensland) | Brief to build 🟧 — not yet a K Global-served field |
| Cairns | **YBCS** | Alternate (far-north Queensland) | Brief to build 🟧 |
| Darwin Intl | **YPDN** | Alternate (Top End / NT gateway) | Brief to build 🟧 |
| Norfolk Island | **YSNF** | Key Tasman ETP alternate (Brisbane oceanic) | 🟧 Limited RFF/hours, weather-exposed, single runway. Brief to build 🟧 — see the [Oceania area brief](../../oceania.md) §8 |
| Lord Howe Island | **YLHI** | Tasman island field (Brisbane oceanic) | 🟧 Short runway, not a widebody alternate |

- **Coverage note:** 🟧 dense on the continental Queensland/NT corridor; **sparse over the Coral Sea/eastern-Tasman oceanic sectors**, where ETP/EDTO planning applies. 🟥 **No K Global airport brief exists within this FIR at present** — none of the network's built Oceania fields (YSSY, YPPH) are actually inside Brisbane FIR; see read-me.

---

## 10. Special-use airspace

- **Military restricted / danger areas:** 🟧 Queensland/NT restricted (R) and danger (D) areas — e.g. **Shoalwater Bay** training area, **Delamere Range** (NT), and various Defence areas — activated per AIP/NOTAM. Confirm active status at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none for normal domestic/international ops in Australian airspace; note **Papua New Guinea (AYPM)** requires an overflight permit if a routing clips that FIR (see the [Oceania area brief](../../oceania.md) §9).
- **Oceanic considerations:** 🟧 the Coral Sea/Tasman oceanic sectors carry no SUA of note but demand oceanic-clearance discipline (§7/§11).

> **SUA currency:** re-check active restricted/danger-area status (AIP/NOTAM) at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** squawk **7600**; continue per the **Australian AIP ENR 1** IFR comms-failure rules (last clearance/filed route and levels), attempt contact on the previous/adjacent frequency and 121.5. Over the Coral Sea/Tasman oceanic sectors follow the oceanic contingency procedure (CPDLC/HF, standard offset).
- **Weather-deviation / in-flight contingency:** radar-tactical over the continent — request the deviation from ATC. **Over oceanic sectors apply the ICAO oceanic weather-deviation procedure** (offset, level change, broadcast on 121.5). Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **North Queensland/Coral Sea tropical-cyclone season — 🟥 Nov 1–Apr 30 (peak Jan–Mar)** — within the Australian-region cyclone basin; drives re-routes and Coral Sea diversion wash-outs.
  - **Wet-season monsoon convection** (Top End NT, Cape York) — Nov–Apr; frequent inland thunderstorms.
  - **Volcanic ash** — **VAAC Darwin** covers the region; PNG (Rabaul, Ulawun) and Vanuatu volcanoes can propagate ash across the northern/Coral Sea upper airspace.

> **Pull at planning (T-2h):** enroute NOTAMs, restricted/danger-area status, SIGMET/AIRMET (convection, cyclones), **VAAC Darwin** volcanic-ash advisories, oceanic-clearance requirements, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- **Reconciliation — closed this pass, verified 🟥→resolved:** the task brief's premise that "YSSY sits in Brisbane FIR" is **incorrect**; Airservices Australia places the YBBB/YMMM boundary 45 nm N of Sydney, so YSSY is in **Melbourne FIR**. The YSSY airport brief already states this correctly — **no change made to it**. Recorded here for the audit trail; no downstream fix needed.
- Exact **airspace class per band** and vertical steps (Australia AIP ENR/DAP).
- **Brisbane Centre continental/oceanic sector boundaries and frequencies** (current AIP) — including the CORAL/FLINDERS/LORD HOWE/TASMAN sector split.
- **Contracted upper-airspace ATC scope** for Solomon Islands (AGGG) and Nauru (ANAU) — confirm current agreement if either becomes a planned routing.
- **Diversion briefs** for YBBN, YBCS, YPDN, YSNF, YLHI not yet built — build if/when a K Global route brings Brisbane FIR into the network.
- No K Global-served airport currently sits inside this FIR — revisit this brief's §9/§7 if the network adds a Brisbane-FIR field (e.g. YBBN).

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **Airservices Australia — "Air traffic management services"** (Brisbane & Melbourne Centre/FIR extents; Brisbane FIR begins 45 nm north of Sydney → Sydney is in the Melbourne FIR; Brisbane FIR = northern Australia + Coral Sea + half the Tasman; CORAL/FLINDERS/LORD HOWE/TASMAN sectors; contracted upper-airspace ATC for Solomon Islands/Nauru) — https://www.airservicesaustralia.com/about-us/about-our-operations/facilities/air-traffic-management-services/ (retrieved 2026-07-26). ANSP source of record for FIR ownership and boundary.
- **Wikipedia — "Flight information region"** (cites Airservices/ABC News 2014: "Brisbane's FIR covers an area including northern New South Wales, Queensland, Northern Territory and northern Western Australia plus airspace over the north and north eastern oceans") — https://en.wikipedia.org/wiki/Flight_information_region (retrieved 2026-07-26). Corroborates Brisbane FIR extent.
- **Airservices Australia — AIP (ENR)** (airspace classes, RVSM, PBN, routes, comms-failure) — https://www.airservicesaustralia.com/aip/aip.asp (retrieved 2026-07-26). Primary.
- **CASA — Communications, navigation and surveillance** (ADS-B Out mandate in Australian controlled airspace) — https://www.casa.gov.au/operations-safety-and-travel/airspace/communications-navigation-and-surveillance (retrieved 2026-07-26).
- **Aireon — space-based ADS-B** (surveillance across the Brisbane + Melbourne FIRs) — https://aireon.com/ (retrieved 2026-07-26).
- **Jeppesen — AUS-1 Australasia chart-change notices** (FIR-boundary coordinate updates near Sydney, referenced for the YBBB/YMMM boundary line) — http://www.jeppesen.com/download/chart_notams/aus04.pdf (retrieved 2026-07-26). *Tier-4 corroboration of the specific boundary coordinates; verify against current AIRAC ENR chart before operational use.*
- **Fiji Meteorological Service (RSMC Nadi) & Australian BoM — South Pacific / Coral Sea tropical-cyclone season** (Nov 1–Apr 30, peak Jan–Mar) — https://www.met.gov.fj/ and https://www.bom.gov.au/climate/cyclones/south-pacific/ (retrieved 2026-07-26).
- **VATSIM Australia Pacific (VATPAC) — Standard Operating Procedures** (Brisbane Centre sectorisation, oceanic sector structure) — https://sops.vatpac.org/ (retrieved 2026-07-26). *Tier-4 corroboration only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. Covers YBBB: northern-Australia continental radar/ADS-B + Coral Sea/eastern-Tasman procedural (ADS-C/CPDLC-FANS/space-based ADS-B); **RVSM FL290–410**; mature RNP/RNAV; **ADS-B Out mandatory**; Great Dividing Range (Qld) terrain; contracted upper-airspace ATC for Solomon Is./Nauru; adjacent FIRs Melbourne (S), Ujung Pandang (NW), Port Moresby (N), Nadi incl. delegated Nouméa/New Caledonia sector (NE/E), Auckland Oceanic (SE). **Reconciliation: the task-brief premise that YSSY sits in Brisbane FIR was checked against Airservices Australia's own boundary statement and found incorrect — YSSY is in Melbourne FIR; no downstream files changed.** No K Global-served airport currently inside this FIR. |
