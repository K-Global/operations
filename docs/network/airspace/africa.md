# Africa — Airspace Briefing

**Scope:** the African continent and its oceanic margins — the transit picture across the ICAO **AFI** region (WACAF + ESAF) plus the Maghreb, from the Maghreb/Mediterranean edge to the Cape and out to the SW Indian Ocean · **FIRs / OCAs covered (principal):** Kano (DNKK) · Accra (DGAC) · Roberts (GLRB) · Dakar Oceanic + Terrestre (GOOO) · Niamey (DRRR) · N'Djamena (FTTT) · Brazzaville (FCCC) · Kinshasa (FZZA) · Cairo (HECC) · Khartoum (HSSS) · Juba (HSSJ) · Addis Ababa (HAAA) · Nairobi (HKNA) · Dar es Salaam (HTDC) · Mogadishu (HCSM) · Johannesburg continental (FAJA) + Johannesburg Oceanic (FAJO) · Cape Town (FACA) · Gaborone (FBGR) · Luanda (FNAN) · Windhoek (FYWF) · Lusaka (FLFI) · Beira (FQBE) · Antananarivo (FMMM) · Mauritius (FIMM) · Seychelles (FSSS) · Tripoli (HLLL) · Algiers (DAAA) · Tunis (DTTC) · Casablanca (GMMM)
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — AFI structure/RVSM/PBN/FRA and comms verified against public ICAO-AFI, ASECNA, IATA and OPS sources; **conflict-zone geometry is a live picture (§9/§11)** and several FIR idents / exact ACC splits are flagged 🟧

> **Read-me:** Strategic transit reference for X-Plane 11, not a chart or clearance. Africa is, at continental scale, a **largely procedural / non-radar en-route environment** — surveillance clusters around the major terminals and a growing space-based ADS-B footprint, but much of the AFI upper airspace is worked procedurally with **HF where VHF ends** and the **AFI In-Flight Broadcast Procedure (IFBP) listening watch on 126.9 MHz** as the separation-awareness safety net. Routings and levels here are planning context — file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC clearances and the assigned track/level. Terminal procedures for aerodromes live in the airport briefings (§8); the location-agnostic capability topics (RVSM, PBN/RNP, datalink) are **defined in OM E — Operations** and only *applied* here. **The defining planning problem of this continent is not procedure — it is the live conflict-zone / overflight-risk map** (Sudan, Libya, Sahel, Somalia, eastern DRC, periodic Ethiopia), plus **overflight permits** and **sparse diversion coverage**. Single-FIR detail for Nigeria is in the **[Kano (DNKK) FIR brief](fir/africa/kano-dnkk.md)**; the Atlantic crossing that links this continent to South America is in the **[EUR/SAM Corridor brief](eur-sam-corridor.md)**. Live restrictions (conflict-zone bulletins, NOTAMs, SIGMET, VAAC) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIRs / control authorities | **~25 continental + oceanic FIRs** worked by national ANSPs and the multinational **ASECNA** (Agency for Aerial Navigation Safety in Africa and Madagascar — six FIRs: **Dakar Oceanic + Terrestre GOOO, Niamey DRRR, N'Djamena FTTT, Brazzaville FCCC, Antananarivo FMMM**). Other majors: **NAMA** (Kano DNKK), **NANSC** (Cairo HECC), **Ethiopian CAA** (Addis HAAA), **KCAA** (Nairobi HKNA), **GCAA** (Accra DGAC), **Roberts FIR interstate agency** (GLRB — Guinea/Liberia/Sierra Leone), **ATNS** (Johannesburg FAJA + Johannesburg Oceanic FAJO, Cape Town FACA), **ONDA** (Casablanca GMMM), **ENNA** (Algiers DAAA) |
| Controlling ATSU(s) & type | 🟧 **Predominantly procedural / non-radar en-route**, with radar/ADS-B around the major terminals and a spreading **space-based ADS-B** footprint (ASECNA; Dakar Oceanic since 2022). Treat surveillance as **not guaranteed** continent-wide and confirm live |
| RVSM | 🟥 Applicable **FL290–FL410** — **AFI RVSM** (region-wide since 25 SEP 2008); RVSM approval required. Defined in **OM E**, applied here |
| Separation standard | Procedural minima in the non-radar core (time/distance, MNT on the oceanic edges); radar/ADS-B vectored separation around terminals and in ADS-B-covered upper airspace. Confirm per FIR/AIP |
| Datalink | 🟧 **Not a mature FIR-wide CPDLC/ADS-C service** across most of continental AFI; **space-based ADS-B** growing (Dakar Oceanic; ASECNA programme). **IFBP 126.9 MHz** is the mitigation where VHF/radar/datalink are thin, not a FANS service |
| Primary comms | 🟩 **English** (ICAO) with **French** widely used in ASECNA states; VHF around the majors, **HF for the remote/oceanic en-route** (AFI HF network — HF difficult, esp. Lagos/Kano/Accra); **IFBP listening watch 126.9 MHz** |
| Key hazard(s) | 🟥 **Live conflict / overflight-risk zones — Sudan, Libya, Sahel (Mali/Niger/Burkina Faso), Somalia, eastern DRC, periodic Ethiopia (re-check live)** · **overflight permits** (lead-time) · **sparse diversion coverage** (Sahara/Sahel/Congo basin) · high terrain (Ethiopian highlands, Kilimanjaro/E-African highlands, Atlas, Drakensberg) · **harmattan dust, ITCZ convection, SW Indian Ocean cyclones** |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Overflight / conflict-zone risk | 🟥 | **The headline item.** Active/closed or restricted airspace over **Sudan, Libya, Somalia, eastern DRC** and elevated risk over the **Sahel** and **periodic Ethiopia** — plus **overflight-permit** requirements across many states. Durable geometry below; **the current picture must be re-checked every operation** (§9/§11). |
| Communication coverage (VHF/HF/SATVOICE) | 🟧 | **English/French.** VHF around the majors; **HF for the remote/oceanic en-route** (AFI HF network — reliability variable, worst in the Gulf-of-Guinea belt), backed by the **AFI IFBP listening watch on 126.9 MHz**. Confirm sector frequencies from current AIP. |
| Datalink / surveillance requirement | 🟧 | CPDLC/ADS-C **not a continent-wide mature capability**; **space-based ADS-B** operational in Dakar Oceanic (2022) and expanding via ASECNA. Transponder required; confirm any ADS-B-Out requirement per state AIP. |
| Terrain / MORA / driftdown | 🟧 | High belts: **Ethiopian highlands (Ras Dashen ~14,928 ft)**, **East-African highlands (Kilimanjaro ~19,341 ft, Mt Kenya ~17,057 ft, Rwenzori ~16,763 ft)**, **Atlas (Toubkal ~13,671 ft)**, **Drakensberg (Thabana Ntlenyana ~11,424 ft)**, **Cameroon line (Mt Cameroon ~13,255 ft)**, **Tibesti (Emi Koussi ~11,204 ft)**. Not a cruise factor at RVSM levels but drives driftdown/escape and CTA corrections in those belts. §7. |
| Diversion-airfield coverage | 🟧 | **Sparse over the Sahara, Sahel and Congo basin, and over the SW Indian Ocean**; reasonable around the hub network. ETP-driven on the long over-water/over-desert stretches; several dependable fields lie in or beside conflict zones (avoid). §8. |
| Seasonal / environmental | 🟧 | **Harmattan dust (W Africa Nov–Mar)**, **ITCZ convection band** (seasonal migration, embedded/towering CB), **SW Indian Ocean tropical cyclones (Nov–Apr, peak Jan–Mar)**, **East-African Rift + Cameroon-line volcanism** (VAAC Toulouse). §11. |
| Equipment / approval (RVSM, PBN, transponder) | 🟥 | **AFI RVSM FL290–410 · RNAV 5 enroute (AFI PBN) · Mode C/S transponder.** RVSM approval mandatory. Defined in **OM E**; confirm the current-AIRAC route/levels. §4. |

---

## 3. Airspace structure

- **Continental picture:** Africa is divided into the ICAO **AFI** region — administratively the **WACAF** (Western & Central Africa) and **ESAF** (Eastern & Southern Africa) offices — plus the Maghreb states (Algeria, Tunisia, Morocco, Libya, Egypt) that sit at the AFI/EUR/MID seam. The upper airspace is a mosaic of **~25 FIRs**, a mix of large national FIRs and the six **ASECNA** FIRs that pool air-navigation service across former-French West/Central Africa and Madagascar. Much of the en-route structure is **procedural** — controlled airspace on the airway/RVSM network over lower uncontrolled airspace — with radar/ADS-B islands around the terminals.
- **ASECNA FIRs (the West/Central spine):** 🟩 **Dakar Oceanic + Terrestre (GOOO)**, **Niamey (DRRR)**, **N'Djamena (FTTT)**, **Brazzaville (FCCC)** and **Antananarivo (FMMM)** are worked by ASECNA on behalf of its 18 member states. **Dakar Oceanic (GOOO)** is the Atlantic sector that hands the **EUR/SAM Corridor** traffic to/from South America — it runs **space-based ADS-B** and is treated in depth in the **[EUR/SAM Corridor brief](eur-sam-corridor.md)**.
- **National FIRs (majors):** **Kano (DNKK, NAMA — all of Nigeria; see the [Kano FIR brief](fir/africa/kano-dnkk.md))**, **Accra (DGAC, GCAA)**, **Roberts (GLRB — multinational Guinea/Liberia/Sierra Leone RFIR)**, **Cairo (HECC, NANSC)**, **Khartoum (HSSS)**, **Juba (HSSJ)**, **Addis Ababa (HAAA)**, **Nairobi (HKNA, KCAA)**, **Dar es Salaam (HTDC)**, **Mogadishu (HCSM)**, **Kinshasa (FZZA)**, **Luanda (FNAN)**, **Lusaka (FLFI)**, **Gaborone (FBGR)**, **Windhoek (FYWF)**, **Beira (FQBE)**, **Johannesburg (FAJA continental)**, **Cape Town (FACA)**, **Casablanca (GMMM, ONDA)**, **Algiers (DAAA, ENNA)**, **Tunis (DTTC)**, **Tripoli (HLLL)**.
- **Oceanic / remote / procedural areas:**
  - 🟩 **Dakar Oceanic (GOOO)** — Atlantic; EUR/SAM corridor link (separate brief).
  - 🟧 **Johannesburg Oceanic (FAJO)** — a very large procedural **SW Indian Ocean / South Atlantic** OCA under ATNS, worked mostly procedurally with HF; the boundary between the **continental FAJA** and **oceanic FAJO** idents and their exact split is AIP-defined — confirm at planning.
  - 🟧 **Antananarivo (FMMM), Mauritius (FIMM) and Seychelles (FSSS)** cover the SW Indian Ocean island/oceanic airspace — long over-water, cyclone-exposed, procedural; ETOPS territory (see the SW Indian Ocean sector, to build).
  - The **Sahara / Sahel / Congo-basin** interior is effectively remote procedural airspace with sparse ground infrastructure.
- **Classes & level bands:** 🟧 controlled upper airspace (typically Class A/C on the airway/RVSM network) over lower Class D/E/G; exact class letters vary by state — confirm at each state's **AIP ENR 2.1**. RVSM occupies **FL290–FL410**.
- **Entry/exit & transition points:** FIR-boundary reporting points feed the airway network and the FRA point set (§6). Datalink-equipped flights should establish CPDLC/ADS-C before the oceanic boundaries (Dakar Oceanic, Johannesburg Oceanic) where the service exists; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).

---

## 4. Equipment, approvals & separation

*Capability topics (RVSM, PBN/RNP, CPDLC/ADS-C, transition levels) are **defined once in OM E — Operations**; this section states which apply across the AFI region and references the OM E doc — it does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — **AFI RVSM**, implemented region-wide **25 SEP 2008**; an **RVSM approval** from the State of Registry/Operator is required to plan the AFI RVSM band. Because much of the AFI band is **procedurally controlled**, ACAS/IFBP is *not* credited as a separation safety-net in the AFI collision-risk model — level discipline matters. See [`OM E — RVSM Operations`](../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟧 **RNAV 5** enroute where the network is PBN-based; terminal RNP where published — confirm the current state AIP. See [`OM E — PBN and RNP Operations`](../../flight-ops/pbn-and-rnp-operations.md).
- **Free Route Airspace:** 🟩 see §6 — WACAF FRA at **FL250 and above** is live across ASECNA airspace (25 JAN 2024) and User-Preferred Routes are being rolled out; **ESAF** trials are the 2026 focus.
- **8.33 kHz channel spacing:** 🟩 **not an AFI requirement** (an ICAO EUR mandate) — standard 25 kHz VHF applies across AFI. The Maghreb/Mediterranean edge interfaces with EUR 8.33 kHz airspace to the north.
- **Datalink (CPDLC / ADS-C):** 🟧 **not a mature FIR-wide capability** across most of continental AFI. **Space-based ADS-B** is operational in **Dakar Oceanic** (since 19 MAY 2022) and expanding through the ASECNA programme; where VHF/radar/datalink is thin the **AFI IFBP** (listening watch on **126.9 MHz** with position self-broadcast) is the mitigation — **not** a FANS CPDLC service. See [`OM E — Datalink and Oceanic Procedures`](../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode C/S transponder required.** 🟧 Any ADS-B-Out carriage requirement is state-specific — confirm the current AIP/NOTAM at planning.
- **ETOPS / long over-water & over-desert:** the SW Indian Ocean islands (Madagascar/Mauritius/Seychelles), the Gulf of Guinea and the trans-Sahara stretches are ETOPS/long-diversion segments — see [`OM E — ETOPS-EDTO Procedures`](../../flight-ops/etops-edto.md) and §8.

---

## 5. Communications

- **Language:** 🟩 **English** (ICAO) throughout; **French** is in wide operational use across the ASECNA/francophone states — expect bilingual R/T.
- **VHF coverage:** around the major terminals and their airways; thin-to-absent over the Sahara, Sahel, Congo basin and the oceanic sectors.
- **HF (where VHF ends):** 🟧 the **AFI HF network** carries the remote/oceanic en-route position reporting. HF reliability across AFI is documented as **variable and frequently poor**, notably in the Gulf-of-Guinea belt (Lagos/Kano/Accra) — maximise VHF relay and IFBP discipline. Exact per-station RDARA/MWARA kHz are AIP/AFI-published (tier-4 supplementary) — verify against state **AIP ENR 3 / GEN COM** and the day's flight docs.
- **AFI In-Flight Broadcast Procedure (IFBP):** 🟥 where communications deficiencies exist, maintain a **listening watch on 126.9 MHz** and **self-broadcast position/level/intentions** at the prescribed points — the AFI region's primary separation-awareness mitigation in non-radar airspace. This is a broadcast discipline, not an ATC surveillance service.
- **SATVOICE / CPDLC:** second long-range medium and datalink relay where equipped/available (oceanic edges, ASECNA space-based ADS-B areas).
- **Position reporting (procedural):** report over compulsory points (voice/HF or CPDLC) where surveillance does not cover; pass the next-FIR estimate before the boundary. ADS-C periodic contracts substitute where the datalink is up.
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air; **126.9 MHz** AFI IFBP.

---

## 6. Routing & levels

- **Principal route structure:** a **fixed ATS-route network** links the FIR gateways and the hub terminals, overlaid increasingly by **Free Route Airspace / User-Preferred Routes**:
  - 🟩 **WACAF FRA — FL250 and above** is available across ASECNA airspace since **25 JAN 2024** (the UTAs of Nouakchott, Bamako, Ouagadougou, Abidjan, Lomé, Niamey, Douala, Libreville, Brazzaville, and the **GOOO/Dakar, FTTT/N'Djamena and FMMM/Antananarivo** FIRs).
  - 🟩 From **30 OCT 2025** operators may plan/operate **User-Preferred Routes across West & Central Africa (WACAF)**; ANSPs commit to approving new UPR within 48 h, with approval-free UPR targeted from **mid-2026** once all 24 WACAF states finalise procedures.
  - 🟧 **Nigeria (DNKK)** publishes FRA **FL245 and above** (see the [Kano FIR brief](fir/africa/kano-dnkk.md)); **ESAF** (Eastern & Southern Africa) FRA trials are the **2026** focus — confirm current availability per FIR.
- **Below the FRA floor / where FRA not available:** the fixed airway spine feeds the terminals and the FIR boundaries; fly the current-AIRAC/SimBrief string.
- **Conflict-zone re-routing (the dominant routing driver):** 🟥 large tracts of the "natural" great-circle structure are unusable or restricted — Sudan/South Sudan force NE–SW re-routes (KFOSS routes above FL245 across South Sudan; Port-Sudan contingency corridors), Libya is transit-only at/above FL320 via narrow bi-directional routes, and Sahel/Somalia/eastern-DRC advisories reshape the map. Routing is **security-led** on this continent (§9).
- **Typical level/flow:** RVSM **FL290–FL410**; step-climb as weight reduces via the procedural/CPDLC request. Directional level allocation per the airway/FRA scheme and the oceanic-edge conventions (see the EUR/SAM brief for the Atlantic segment).

---

## 7. Terrain, MORA & driftdown

- **Grid MORA / high terrain belts:** 🟧 Africa is mostly plateau and low basin, but with several high belts that bind driftdown/escape and cold-temperature corrections locally (not a cruise factor at RVSM levels):
  - **Ethiopian highlands** — **Ras Dashen ~4,550 m (~14,928 ft)** (Simien); a broad high plateau around Addis (HAAA), high MORA and high-elevation terminals.
  - **East-African highlands** — **Kilimanjaro ~5,895 m (~19,341 ft)** (the highest in Africa, Tanzania), **Mount Kenya ~5,199 m (~17,057 ft)**, **Rwenzori/Mt Stanley ~5,109 m (~16,763 ft)** (DRC/Uganda), plus the Rift shoulders around Nairobi (HKNA).
  - **Atlas Mountains** — **Toubkal ~4,167 m (~13,671 ft)** (Morocco), the high spine behind Casablanca/Marrakech.
  - **Drakensberg** — **Thabana Ntlenyana ~3,482 m (~11,424 ft)** (Lesotho/RSA), the Southern-African escarpment behind Johannesburg (high-elevation terminal).
  - **Cameroon line** — **Mt Cameroon ~4,040 m (~13,255 ft)** (also an active volcano, §11).
  - **Tibesti** — **Emi Koussi ~3,415 m (~11,204 ft)** (Chad, central Sahara).
- **Driftdown / depressurisation escape:** relevant where a route crosses the Ethiopian/East-African highlands, the Atlas or the Drakensberg — plan the engine-out/decompression escape to clear the local high terrain and reach a capable field (§8). Over the desert/basin lowlands and the oceans the constraint is **diversion-field reach, not terrain**.
- **Cold-temperature altitude corrections:** apply at the **high-elevation terminals** (Addis, Johannesburg, Nairobi, Atlas fields) per the airport briefing and current OAT — see [`OM E — Cold Weather Operations`](../../flight-ops/cold-weather-operations.md); not a factor over the tropical lowlands.

---

## 8. Diversion & enroute alternates

🟧 **Sparse over the Sahara, Sahel, Congo basin and SW Indian Ocean; reasonable around the hub network.** ETP-driven on the long over-water (Gulf of Guinea, SW Indian Ocean) and over-desert stretches. **Several otherwise-dependable fields sit in or beside conflict zones (Khartoum, Goma, Tripoli, Mogadishu) — treat as unavailable/avoid (§9).** The set below is durable context; compute the actual ETPs and their fuel/time on the SimBrief OFP.

| Airfield | ICAO | Sector / role | Notes (brief?) |
|---|---|---|---|
| Lagos — Murtala Muhammed | **DNMM** | West Africa hub / primary | Home hub. Brief: [DNMM](../destinations/africa/nigeria/dnmm/index.md) · FIR: [Kano (DNKK)](fir/africa/kano-dnkk.md) |
| Accra — Kotoka | **DGAA** | West Africa / Gulf of Guinea | Full international. Brief: [DGAA](../destinations/africa/ghana/dgaa/index.md) |
| Roberts — Monrovia | **GLRB** | West Africa (Roberts FIR) | Regional alternate. Brief: [GLRB](../destinations/africa/liberia/glrb/index.md) |
| Dakar — Blaise Diagne | **GOBD** | West Africa coast / EUR-SAM gateway | Modern hub, long runway, H24. Brief: [GOBD](../destinations/africa/senegal/gobd/index.md) |
| Amílcar Cabral — Sal | **GVAC** | Atlantic / EUR-SAM ETP field | H24; EUR/SAM corridor gateway. Brief: [GVAC](../destinations/africa/cape-verde/gvac/index.md) |
| Cairo | **HECC / HECA** | NE Africa / Mediterranean | Full international. Brief: [HECA](../destinations/africa/egypt/heca/index.md) |
| Addis Ababa — Bole | **HAAB** | East Africa hub (high elevation) | Major hub; high-elevation terminal. Brief: [HAAB](../destinations/africa/ethiopia/haab/index.md) |
| Nairobi — Jomo Kenyatta | **HKJK** | East Africa hub | Full international. Brief: [HKJK](../destinations/africa/kenya/hkjk/index.md) |
| Dar es Salaam — Julius Nyerere | **HTDA** | East Africa coast | Full international. Brief: HTDA |
| Kilimanjaro | **HTKJ** | East Africa (near Kilimanjaro terrain) | Regional alternate. Brief: [HTKJ](../destinations/africa/tanzania/htkj/index.md) |
| Johannesburg — O.R. Tambo | **FAOR** | Southern Africa hub (high elevation) | Major hub; high-elevation terminal. Brief: [FAOR](../destinations/africa/south-africa/faor/index.md) |
| Cape Town | **FACT** | Southern Africa / South Atlantic | Full international. Brief: [FACT](../destinations/africa/south-africa/fact/index.md) |
| Brazzaville — Maya-Maya | **FCBB** | Central Africa (Congo basin) | Central-Africa alternate. Brief: [FCBB](../destinations/africa/republic-of-the-congo/fcbb/index.md) |
| Kinshasa — N'djili | **FZAA** | Central Africa (Congo basin) | ⚠ **avoid eastern DRC** (Goma/Bukavu) — §9. Brief: [FZAA](../destinations/africa/democratic-republic-of-the-congo/fzaa/index.md) |
| Antananarivo — Ivato | **FMMI** | SW Indian Ocean (cyclone-exposed) | Island/oceanic alternate. Brief: [FMMI](../destinations/africa/madagascar/fmmi/index.md) |
| Casablanca — Mohammed V | **GMMN** | Maghreb / Europe gateway | Full international. Brief: [GMMN](../destinations/africa/morocco/gmmn/index.md) |
| Algiers — Houari Boumediene | **DAAG** | Maghreb | Full international. Brief: [DAAG](../destinations/africa/algeria/daag/index.md) |
| Khartoum | **HSSK** | NE Africa | 🟥 **conflict zone — treat as unavailable** (§9). Brief: HSSK |

- **ETP / equal-time-point considerations:** 🟧 on the SW Indian Ocean island stretches and the Gulf-of-Guinea/trans-Sahara segments, identify the critical-point alternate on each OFP and confirm its weather + RFF at the planned time; the mid-ocean / mid-desert legs are the genuine no-quick-divert windows. The Atlantic ETP picture is in the **[EUR/SAM Corridor brief](eur-sam-corridor.md) §8** (GVAC/SBFZ pair).
- **Fuel-freeze / cold-soak:** 🟩 generally **not a driver** across tropical/equatorial Africa; monitor tank temperature per normal SOP on the longest high-FL legs (Jet A-1 freeze −47 °C) — the concern is a polar-route one, not an AFI one.

---

## 9. Special-use airspace & overflight

**This is the mission-critical section for Africa. The geometry below is durable context — the *current* status must be re-checked against ICAO CZIR / EASA CZIB / state NOTAMs / Safe Airspace / OPSGROUP at every planning cycle (§11).**

- **🟥 Conflict / prohibited / high-risk zones (durable geometry):**
  - **Sudan — Khartoum FIR (HSSS):** largely **closed to civil traffic since the April-2023 conflict**; **EASA CZIB-2023-01R7** (valid through 31 JUL 2026) warns of AAA / MANPADS / medium-range SAM threat, with a **reported aircraft shoot-down**. A **partial reopening** (Khartoum Intl / Port-Sudan contingency, Route CR6) was attempted May 2026 — treat as **restricted/avoid** and route around unless a specific validated contingency corridor applies.
  - **South Sudan — Juba FIR (HSSJ):** **air navigation services suspended above FL245**; **KFOSS routes above FL245** allow an east–west crossing without entering Sudan. Below FL245–260 several states warn of AAA risk. Poor ATC provision — plan the KFOSS overfly, avoid low-level.
  - **Libya — Tripoli FIR (HLLL):** **do not operate below FL320**; transit permitted only at/above **FL320** via the bi-directional routes **M999 (ZARZAITINE–SEBHA)** and **G655/M214 (SEBHA–GARIN)** (per the current regime); coastal-airport ops only under strict AAA/coordination conditions. **EASA CZIB-2017-02R20** extended to 31 JAN 2027; Safe Airspace Level-1 do-not-fly.
  - **Somalia — Mogadishu FIR (HCSM):** **avoid below FL260** (AAA-capable weapons at low level); **EASA CZIB** valid to 31 OCT 2026. **Unauthorised ATC units** have issued conflicting climb/descent instructions (TCAS-save events); a **Somaliland/Somalia PPR dispute** (from Nov 2025) adds a coordination hazard. Overfly high, comply only with Mogadishu Control, keep the IFBP watch.
  - **Eastern DRC — Kinshasa FIR (FZZA), North/South Kivu:** **active conflict** (AFC/M23) around **Goma (FZNA)/Bukavu**; credible AAA risk at low level and on the ground; drone attacks have reached **Kisangani (FZIC)**. Treat the eastern DRC as an **active conflict zone — avoid**; western/central Congo-basin overflight is the mitigated routing.
  - **Sahel — Mali, Niger (Niamey DRRR), Burkina Faso (Ouagadougou):** insurgency and inter-state tension; elevated **overflight-risk** belt and a history of ATC disruption. Treat as **elevated-risk** and confirm the current advisory/level guidance.
  - **Ethiopia — Addis FIR (HAAA), periodic:** **periodic** northern-Ethiopia (Tigray/Amhara) risk — military build-up reported (early 2026) with an Asmara-area precedent (2020). **Re-check live** each operation; not a standing closure but a watch item.
  - *(The adjacent **Red Sea / Yemen** corridor risk that affects NE-Africa routing is owned by the **Middle East** brief — cross-check when routing HECC/HSSS/HAAA eastbound.)*
- **🟥 Overflight-permit / diplomatic considerations:** **many African states require overflight and/or landing permits** with a **lead-time** — a real dispatch item. Confirm the current per-state requirement and validity before every operation; a permit gap is a no-go.
- **🟧 Danger / restricted / military areas:** AIP/NOTAM-published across the region (military training, ranges) — pull the active list at planning.

> **Conflict-zone & SUA currency:** the African conflict-zone / overflight-risk map is **dynamic — re-check live every time** (ICAO Conflict Zone Information Repository, EASA CZIB, state NOTAMs, Safe Airspace, OPSGROUP). This list is durable context, **not** a live clearance.

---

## 10. Contingency procedures

- **Procedural / non-radar contingency (the AFI default):** in the large non-radar tracts, apply the **ICAO Doc 4444 general in-flight contingency and weather-deviation procedures** — obtain a revised clearance first where possible; if not, establish the standard **same-direction lateral offset**, take the appropriate vertical offset, squawk as required, lights on, ACAS active, and **broadcast intentions on the IFBP 126.9 MHz** and 121.5/123.45 MHz. Maintain the position-report discipline.
- **Oceanic-edge contingency:** on the **Dakar Oceanic** side, follow the **South Atlantic (SAT) contingency regime** — see the **[EUR/SAM Corridor brief](eur-sam-corridor.md) §10**; on the **Johannesburg Oceanic / SW Indian Ocean** side, the standard Doc 4444 oceanic contingency applies (SW Indian Ocean sector, to build).
- **Comms-failure:** squawk **7600**; continue per the ICAO/state AIP IFR comms-failure rules (last clearance / filed route and levels), attempt contact on the previous/adjacent frequency, 121.5 and the **126.9 MHz IFBP** — critical in the HF-marginal Gulf-of-Guinea belt.
- **Weather-deviation (ITCZ):** in procedural airspace, request via HF/CPDLC, apply the Doc 4444 offset/level-change convention if no revised clearance is obtainable, and broadcast on the IFBP — the ITCZ makes weather-deviation the most likely contingency to be exercised (§11). See [`OM E — Adverse Weather and Windshear`](../../flight-ops/adverse-weather-and-windshear.md).
- **Emergency:** squawk **7700** and declare; the sparse diversion coverage (§8) and conflict-zone geometry (§9) make the divert decision a fuel- and security-planning item, not just a nearest-field one.

---

## 11. Seasonal, environmental & live data

- **Seasonal / environmental hazards (durable):**
  - **Harmattan dust (≈ Nov–Mar):** north-easterly Saharan dust haze across West Africa, worst in the north — a terminal-visibility and diversion driver in the dry season.
  - **ITCZ / equatorial convection:** the Inter-Tropical Convergence Zone migrates seasonally across the continent (north in boreal summer), producing an **embedded/towering-CB convective band** with heavy rain and turbulence at cruise levels — the dominant en-route weather hazard and the reason weather-deviation (§10) is the contingency most likely to be used.
  - **SW Indian Ocean tropical cyclones (≈ Nov–Apr, peak Jan–Mar):** affect **Madagascar, Mauritius, Réunion, the Mozambique Channel and the Seychelles/Comoros** — long over-water, thin diversion coverage, cyclone re-routing.
  - **Volcanic (East-African Rift + Cameroon line):** active volcanoes include **Nyiragongo/Nyamuragira** (near Goma, DRC), **Ol Doinyo Lengai** (Tanzania), **Erta Ale** (Ethiopian Afar) and **Mt Cameroon**; ash advisories for Africa come from **VAAC Toulouse**. See [`OM E — Volcanic Ash Avoidance`](../../flight-ops/volcanic-ash-avoidance.md).
  - **Security wildcard:** the conflict-zone / overflight-risk map (§9) is the strategic hazard that would materially reshape a routing.

> **Pull at planning (T-2h):** enroute NOTAMs (incl. **airspace-closure / conflict-zone contingency-route** notices — Sudan/South Sudan/Libya/Somalia/DRC), **ICAO CZIR / EASA CZIB / Safe Airspace / OPSGROUP conflict-zone bulletins**, **overflight-permit** status, SIGMET/AIRMET (harmattan dust, ITCZ convection, cyclones), **VAAC Toulouse** volcanic-ash advisories, the current **FRA / UPR point set**, radar-serviceability notices, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- **Live conflict-zone / overflight-risk status** — Sudan, South Sudan, Libya, Somalia, eastern DRC, Sahel, periodic Ethiopia — re-check every operation (durable geometry only in §9).
- **Overflight/landing-permit** requirements and lead-times per state for the operation.
- **Exact FIR idents / ACC splits** — Johannesburg continental **FAJA** vs Johannesburg Oceanic **FAJO** boundary and the SW Indian Ocean OCA extents; Kinshasa FIR ident (**FZZA**); confirm against state AIP ENR 2.
- **Airspace class letter per band** and lower/upper handoff levels per state (AIP ENR 2.1).
- **Current FRA / UPR availability** per FIR — WACAF FL250+ live; approval-free UPR targeted mid-2026; **ESAF** trials in 2026 — confirm on the day.
- **HF per-station kHz** (AFI RDARA/MWARA families) and current sector VHF frequencies — verify against state AIP ENR 3 / GEN COM (tier-4 supplementary).
- **Space-based ADS-B / datalink coverage** extent beyond Dakar Oceanic (ASECNA programme) and any state **ADS-B-Out** carriage requirement.
- **Per-quadrant grid-MORA** over the Ethiopian/East-African highlands, Atlas and Drakensberg — take from ENR charts; terrain elevations here are public-reference figures.
- **SW Indian Ocean sector brief** (Antananarivo/Mauritius/Seychelles/Johannesburg Oceanic — cyclone/ETOPS) does not yet exist — build if the network expands.
- No OM C airport briefs yet for several enroute alternates (e.g. GOBD/HTDA linked in §8 exist; others to build as they become planned alternates).

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **ICAO ESAF — ATC Manual for RVSM in the Africa-Indian Ocean (AFI) Region** — AFI RVSM FL290–410, procedurally-controlled AFI airspace, IFBP as safety net — https://www.icao.int/sites/default/files/ESAF/Documents/RVSM/atc_operations_manual.pdf (retrieved 2026-07-25).
- **IATA / worldairops — In-Flight Broadcast Procedure (IFBP), AFI Region** — designated frequency **126.9 MHz**, listening watch / position self-broadcast where communications deficiencies exist; HF difficulty (Lagos/Kano/Accra) — https://worldairops.com/AFI/docs/AFI_IATAInFlightBroadcastProcedure30JUL09.pdf and https://ic.iata.org/sites/default/files/iata_sih_document_attachment/PRO-001-IFBP%20Procedure.pdf (retrieved 2026-07-25).
- **ASECNA — Agency for Aerial Navigation Safety in Africa and Madagascar** (six FIRs: Antananarivo/FMMM, Brazzaville/FCCC, Dakar Oceanic+Terrestre/GOOO, Niamey/DRRR, N'Djamena/FTTT) + ASECNA eAIP (ENR, valid 19 MAR 2026) — https://en.wikipedia.org/wiki/Agency_for_Aerial_Navigation_Safety_in_Africa_and_Madagascar and https://aim.asecna.aero/html/eAIP/FR-_00ENR-0.6.eAIP-fr-FR.html (retrieved 2026-07-25).
- **OPSGROUP — Free Route Airspace in Africa** — WACAF FRA **FL250+** across ASECNA airspace eff 25 JAN 2024; Nigeria/DNKK FRA FL245+ — https://ops.group/blog/free-route-airspace-in-africa/ (retrieved 2026-07-25).
- **Aviation Week / Aerospace Global News — Free Route Airspace live across West & Central Africa** — UPR from 30 OCT 2025, approval-free targeted mid-2026, ESAF focus 2026 — https://aviationweek.com/air-transport/safety-ops-regulation/free-route-airspace-now-operational-across-west-central-africa and https://aerospaceglobalnews.com/news/free-route-airspace-african-aviation/ (retrieved 2026-07-25).
- **OPSGROUP — West Africa Ops: Routing Options and Restrictions** — Sahel routing options/restrictions, HF/comms, permit environment — https://ops.group/blog/west-africa-ops-routing-options-and-restrictions/ (retrieved 2026-07-25).
- **Safe Airspace — Conflict Zone & Risk Database** (Sudan, South Sudan, Libya, Somalia, Congo-DRC) — https://safeairspace.net/sudan/ · https://safeairspace.net/south-sudan/ · https://safeairspace.net/libya/ · https://safeairspace.net/somalia/ · https://safeairspace.net/congo-drc/ (retrieved 2026-07-25). *Re-check live.*
- **EASA — Conflict Zone Information Bulletins** — Libya **CZIB-2017-02R20** (no ops below FL320; transit routes; ext. 31 JAN 2027); Somalia **CZIB-2017-05R19** (avoid below FL260; ext. 31 OCT 2026); Sudan **CZIB-2023-01R7** (AAA/MANPADS/SAM; valid through 31 JUL 2026) — https://www.easa.europa.eu/en/domains/air-operations/czibs/czib-2017-02r20 and https://www.easa.europa.eu/en/domains/air-operations/czibs/czib-2017-05r19 (retrieved 2026-07-25).
- **ICAO MID — Khartoum FIR Contingency Plan (Amendment 6, 04 DEC 2025)** — Sudan closure, Port-Sudan/Egypt/Saudi/South-Sudan contingency corridors, South-Sudan services suspended above FL245 — https://www.icao.int/sites/default/files/MID/Documents/Khartoum-FIR-Contingency-Plan-Amendment-6-V1.0.pdf (retrieved 2026-07-25).
- **OPSGROUP — Sudan risk / Ethiopia-Tigray / Somalia ATC** — aircraft shoot-down, Ethiopia airspace watch, Somalia unauthorised-ATC/TCAS events — https://ops.group/blog/sudan-risk-update-aircraft-shot-down/ · https://ops.group/blog/tigray/ · https://ops.group/blog/somalia-atc-conflict/ (retrieved 2026-07-25).
- **Terrain elevations (public reference)** — Kilimanjaro 5,895 m/19,341 ft, Mt Kenya 5,199 m/17,057 ft, Mt Stanley/Rwenzori 5,109 m/16,763 ft, Ras Dashen 4,550 m/14,928 ft, Toubkal 4,167 m/13,671 ft, Mt Cameroon 4,040 m/13,255 ft, Thabana Ntlenyana 3,482 m/11,424 ft, Emi Koussi 3,415 m/11,204 ft — Wikipedia range/summit articles (retrieved 2026-07-25). *Per-quadrant grid-MORA to be taken from ENR charts.*
- Companion OM C briefs: **[Kano (DNKK) FIR](fir/africa/kano-dnkk.md)**, **[EUR/SAM Corridor](eur-sam-corridor.md)**; Africa airport briefs under `../../Airports/Africa/`; capability topics in `../../../OM E Operations/` (RVSM, PBN and RNP, Datalink and Oceanic, Adverse Weather and Windshear, Volcanic Ash Avoidance, ETOPS-EDTO, Cold Weather).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build from `_Airspace Briefing Template.md`. Continental AFI (WACAF + ESAF) + Maghreb area brief: ~25 continental/oceanic FIRs incl. the six ASECNA FIRs; **procedural/non-radar** en-route with terminal radar + growing space-based ADS-B; **AFI RVSM FL290–410**, **RNAV 5**, **WACAF FRA FL250+ / UPR**; **HF + AFI IFBP 126.9 MHz**; terrain belts (Ethiopian highlands, Kilimanjaro/E-African highlands, Atlas, Drakensberg, Cameroon line, Tibesti); sparse diversion coverage (Sahara/Sahel/Congo/SW Indian Ocean); **🟥 conflict/overflight-risk map — Sudan, South Sudan, Libya, Somalia, eastern DRC, Sahel, periodic Ethiopia (re-check live)**; **overflight permits**; harmattan / ITCZ / SW Indian Ocean cyclones / Rift + Cameroon-line volcanism. Cross-links: Kano (DNKK) FIR, EUR/SAM Corridor, Africa airport briefs, OM E capability topics. Built from ICAO-AFI RVSM manual, IATA IFBP, ASECNA/OPSGROUP FRA, EASA CZIB / Safe Airspace / OPSGROUP conflict-zone sources, ICAO Khartoum FIR contingency plan. |
