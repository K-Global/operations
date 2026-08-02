# Tokyo / Fukuoka (RJJJ) — FIR Briefing

**Scope:** single FIR — **RJJJ is the Fukuoka FIR, the one FIR covering all of Japan** and a vast surrounding oceanic block; the **Tokyo ACC** sector within it contains **Haneda (RJTT) and Narita (RJAA), the NE Asia node** · **Parent area brief:** [Asia](../../asia.md) 🟩 · **Adjacent FIRs / oceanic:** Incheon (RKRR) W · Shanghai (ZSHA) SW · Taipei (RCAA) SW · Manila (RPHI) S · Anchorage Oceanic (PAZA) E/NE · Oakland Oceanic (KZAK) E/SE · Petropavlovsk (UHPP) NE · Magadan/Vladivostok (UHMM/UHWW) N
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — verified vs JCAB AIP ENR structure + ICAO APAC/ISPACG framework; exact ACC sector geometry and the Tokyo/Kobe upper split flagged 🟧

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. **"Tokyo FIR" is a common shorthand — the single ICAO FIR covering Japan is the Fukuoka FIR (RJJJ)**; Tokyo ACC is the sector containing the RJTT/RJAA hubs. RJJJ is a **mixed FIR** — radar/ADS-B-controlled over the Japanese landmass and near seas, and **procedural oceanic** in the large Fukuoka Oceanic block to the east/south-east (FANS datalink, Oakland-based procedures). Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC clearances. Terminal procedures for the in-FIR aerodromes (RJTT, RJAA …) live in the airport briefings (§9). Live restrictions (NOTAMs, danger areas, typhoon/volcanic disruption) are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR / UIR ident | **RJJJ** — Fukuoka FIR (all Japan + oceanic); worked by **Sapporo, Tokyo, Fukuoka and Naha ACCs** with **Fukuoka ATMC** as the Air Traffic Management Centre / Oceanic Control |
| Controlling ATSU / ANSP | **JCAB — Japan Civil Aviation Bureau** (MLIT). Domestic ACCs (radio "Tokyo Control" etc.) + **Fukuoka Oceanic Control** for the oceanic sectors |
| Airspace class & vertical limits | 🟧 Predominantly **Class A/C/E** in the controlled structure (domestic); oceanic block is procedural controlled airspace. Confirm exact class per band at **AIP ENR 2.1** |
| RVSM | 🟥 Applicable **FL290–FL410** inclusive (ICAO APAC RVSM, domestic + oceanic) — see OM E §5 |
| PBN environment | **RNP 4 / RNP 10** oceanic · **RNAV/RNP** enroute · **RNP 1** terminal · **RNP APCH** arrivals — see OM E §5 |
| Surveillance & datalink | 🟩 **Radar + ADS-B** over Japan and near seas; 🟥 **FANS 1/A CPDLC + ADS-C** in the Fukuoka Oceanic block — see OM E §5 |
| Primary language & comms | 🟩 **VHF (domestic); HF + SATVOICE/CPDLC (oceanic)**; **English** (ICAO; Japanese also used domestically) |
| Key hazard(s) | **Significant terrain** (Japanese Alps ~3,000 m, Mt Fuji 3,776 m); **typhoon season (~Jun–Oct)**; **active volcanoes / ash**; winter **jet-stream turbulence**; a long **oceanic procedural** transition on Pacific routes |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟧 | **Mixed** — radar/ADS-B over Japan/near seas; **procedural oceanic** (Fukuoka Oceanic) to the E/SE. A Pacific transit crosses both. §3–4. |
| Communication coverage & language | 🟧 | VHF domestic; **HF + SATVOICE + CPDLC oceanic**. English (ICAO); Japanese domestically. §6. |
| Datalink / surveillance requirement | 🟥 | Domestic radar+ADS-B; **FANS 1/A CPDLC + ADS-C required for oceanic** RNP 4/10 tracks. §5. |
| Terrain / MORA / driftdown | 🟥 | **High interior terrain** — Japanese Alps/Fuji; MORA and driftdown/escape matter over the mountainous spine. §8. |
| Diversion-aerodrome coverage | 🟩 | Dense over Japan (RJTT/RJAA/RJBB/RJGG/RJCC/ROAH…); **sparse over the ocean** — long over-water legs are ETOPS/EDTO-driven. §9. |
| Special-use airspace (military / danger) | 🟧 | Extensive US/JASDF training and danger/restricted areas; activation AIP/NOTAM-published. §10. |
| Equipment / approval (RVSM, PBN, oceanic) | 🟥 | **RVSM FL290–410 · RNP 4/RNP 10 oceanic · RNP 1 · FANS CPDLC/ADS-C oceanic · Mode S + ADS-B Out.** All defined in OM E. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** RJJJ (**Fukuoka FIR**) covers **the entire Japanese archipelago from Hokkaido to Okinawa and a vast surrounding oceanic block** — a huge FIR combining dense inland/near-sea airspace with a large Pacific oceanic area (order of ~4,000 flights/day). It is the NE-Asia gateway between the Asian mainland, the North Pacific and the Americas.
- **Internal ACC division:** the FIR is worked by **four domestic ACCs — Sapporo, Tokyo, Fukuoka, Naha** — with **Fukuoka ATMC** as the Air Traffic Management Centre performing flow management and **Oceanic Control**. 🟧 Upper-airspace control has been consolidated regionally (Tokyo and Kobe control the high sectors); the **Tokyo/Kobe upper-airspace lateral split** is not asserted here — confirm against current sector charts. **Tokyo ACC** is the sector containing the RJTT/RJAA hubs and the Kanto terminal system.
- **Vertical split:** 🟧 domestic ACC sectors run surface/low to the upper control limit with an upper-sector consolidation; the cruise band for our transits sits in the RVSM upper airspace (FL290–410). Confirm the exact band split at **AIP ENR 2.1**.
- **Adjacent FIRs / oceanic (by boundary):**
  - **W — Incheon (RKRR, Korea)** across the Sea of Japan / East China Sea; the Korea/China trunk.
  - **SW — Shanghai (ZSHA) and Taipei (RCAA)** toward the East China Sea and the SE-Asia trunk.
  - **S — Manila (RPHI)** at the southern oceanic edge (near Naha ACC's area).
  - **E / NE — Anchorage Oceanic (PAZA)** and **NE — Petropavlovsk (UHPP)** across the North Pacific; the North America / great-circle trunk.
  - **E / SE — Oakland Oceanic (KZAK)** across the Central Pacific; the trans-Pacific trunk. **Fukuoka Oceanic procedures are based on those for Oakland Oceanic.**
  - **N — Magadan / Vladivostok (UHMM / UHWW, Russia)** to the north — note current overflight-sensitivity considerations (re-check live, §11).
- **Sectorisation:** 🟧 each ACC is divided into multiple sectors that combine/split with traffic; the transit-relevant fact is the **domestic radar ACC block feeding the terminal areas + the procedural Fukuoka Oceanic block** on Pacific routes.

---

## 4. Control & ATSU

- **Domestic ATSU:** 🟩 **Sapporo, Tokyo, Fukuoka, Naha ACCs** (JCAB) provide radar/ADS-B control over Japan and the near seas; **Tokyo ACC** works the Kanto/Tokyo sector containing RJTT/RJAA.
- **Oceanic ATSU:** 🟥 **Fukuoka Oceanic Control (Fukuoka ATMC)** provides **procedural** control in the oceanic sectors (five oceanic sectors adjacent to Petropavlovsk, Anchorage, Oakland and Manila FIRs) via **FANS 1/A CPDLC/ADS-C and HF**; the oceanic contingency and weather-deviation constructs of OM E apply here.
- **FIS / FSS:** flight information service is provided by the ACCs/ATMC; oceanic FIS is procedural.
- **Surveillance basis:** 🟩 radar + **ADS-B** over Japan/near seas; 🟥 **ADS-C (contract)** surveillance in the oceanic block — no ground radar there.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in the Fukuoka FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410 inclusive** — ICAO APAC RVSM, domestic and oceanic. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟥 **RNP 4 / RNP 10** on the oceanic tracks; **RNAV/RNP** enroute; **RNP 1** terminal; **RNP APCH** arrivals. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **Datalink (CPDLC) & oceanic:** 🟥 **FANS 1/A CPDLC + ADS-C required in the Fukuoka Oceanic block** (Oakland-based procedures); domestic CPDLC available over Japan. The oceanic weather-deviation, SLOP/lateral-offset and contingency method are in OM E. See [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md).
- **Transponder / ADS-B:** 🟥 **Mode S** transponder required; **ADS-B Out** over Japan/near seas (JCAB mandate) — the domestic surveillance backbone.
- **ETOPS / EDTO:** 🟥 the Pacific legs off Japan are **long over-water, diversion-sparse** — an ETOPS/EDTO planning driver. See [`OM E — ETOPS-EDTO Procedures`](../../../../flight-ops/etops-edto.md).
- **8.33 kHz:** not an APAC requirement; standard 25 kHz VHF spacing (domestic) plus HF (oceanic).

---

## 6. Communications & frequencies

- **Domestic ACC sectors / frequencies:** a transit is worked sequentially by the relevant **domestic ACC (e.g. "Tokyo Control")** across its sectors and handed to the adjacent-FIR ACC at the boundary; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/AIP frequencies, not a stored table.
- **Oceanic comms:** 🟧 **Fukuoka Oceanic** on **HF and CPDLC (FANS)**; the published oceanic voice frequency family (e.g. 126.8 MHz VHF near the boundary, with HF beyond) per the AIP — use the current-AIRAC/AIP data.
- **FIS / lower airspace:** provided by the ACCs/ATMC.
- **Language:** 🟩 **English** (ICAO standard); Japanese also used domestically.
- **Emergency / guard:** **121.5 MHz** guard; **123.45 MHz** air-to-air; oceanic emergency per the oceanic HF/CPDLC procedure.

---

## 7. Route structure & entry/exit

- **Free Route Airspace (FRA):** 🟧 not a continental FRA; Japan is **fixed ATS-route / airway-structured** domestically. The oceanic block uses the **North Pacific (NOPAC) and Pacific Organised Track System (PACOTS)** structured routes plus user-preferred routes where available — the trans-Pacific trunk. Confirm current PACOTS/NOPAC and any flex-track programme at planning.
- **Airway spine:** the FIR is the **NE-Asia/North Pacific crossroads** — the great-circle North Pacific tracks to North America (via NOPAC toward Anchorage) and the Central Pacific tracks (via PACOTS toward Oakland/Honolulu), plus the mainland-Asia trunks (via Incheon/Shanghai/Taipei) and the domestic Tokyo–Osaka–Fukuoka–Sapporo/Okinawa spine.
- **Major fixes / entry-exit points:** the NOPAC/PACOTS entry/exit gateways and the domestic terminal transition fixes feeding the Tokyo (RJTT/RJAA), Osaka (RJBB/RJOO), Nagoya (RJGG), Sapporo (RJCC) and Okinawa (ROAH) terminal areas; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance).
- **Hubs & aerodromes inside the FIR:** 🟩 **Haneda (RJTT) and Narita (RJAA)** (Tokyo/Kanto), plus **Kansai (RJBB), Nagoya/Chubu (RJGG), New Chitose/Sapporo (RJCC), Fukuoka (RJFF), Naha (ROAH)** and many more — all inside RJJJ. Terminal detail is in the airport briefings (§9).

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟥 **significant** — the **Japanese Alps** (Hida/Kiso/Akaishi ranges, peaks ~3,000 m / ~10,000 ft) form a high spine through central Honshu, and **Mt Fuji (3,776 m / 12,388 ft)** sits just SW of the Kanto/Tokyo terminal area. Grid MORA over the interior is high; cruise clears it, but it drives emergency-descent and driftdown planning.
- **Boundary/near terrain:** volcanic peaks throughout the archipelago (Hokkaido, Kyushu, the Izu/Ogasawara chain) and high terrain in Korea across the western boundary.
- **Driftdown / depressurisation escape:** 🟥 a real consideration over the **mountainous interior** — an emergency-descent/driftdown corridor must clear the Alps/Fuji terrain; the **dense diversion-field network over Japan** provides escape options, but the route-specific MORA and escape airport must be checked. Over the **oceanic Pacific** the constraint shifts to **ETOPS/EDTO** diversion range, not terrain.
- **Cold-temperature altitude corrections:** 🟥 applied at the northern/mountain terminals (RJCC and others) in winter — a terminal driver; see the airport briefings and OM E cold-weather.

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Tokyo–Haneda | **RJTT** | In-FIR NE-Asia node / primary dep-return alternate (Tokyo) | Brief to build 🟧 |
| Tokyo–Narita | **RJAA** | In-FIR NE-Asia node / Tokyo alternate | [RJAA brief](../../../destinations/asia/japan/rjaa/index.md) |
| Osaka–Kansai | **RJBB** | In-FIR alternate (Kinki region) | Brief to build 🟧 |
| Nagoya–Chubu | **RJGG** | In-FIR alternate (Chubu) | Brief to build 🟧 |
| Sapporo–New Chitose | **RJCC** | In-FIR northern alternate (Hokkaido; winter ops) | Brief to build 🟧 |
| Incheon | **RKSI** | Adjacent-FIR alternate — **in Incheon FIR (RKRR)**, W | [RKSI brief](../../../destinations/asia/south-korea/rksi/index.md) |

- **Coverage note:** 🟧 **dense over Japan** — RJTT/RJAA give a two-field Tokyo pairing, with RJBB/RJGG/RJCC/RJFF/ROAH spread down the archipelago; **ETP/critical-point planning is not a driver over the landmass**. It **becomes a driver on the oceanic Pacific legs**, where diversion fields are sparse (Japan behind, Aleutians/Midway/Hawaii/US west coast ahead) and **ETOPS/EDTO** governs — see §5 and OM E.

---

## 10. Special-use airspace

- **Military / danger areas:** 🟧 extensive **US Forces Japan and JASDF training areas, danger and restricted areas** across Japan and the surrounding seas; activation is **AIP/NOTAM-published** and can affect domestic and near-sea routeing. The SimBrief route is validated against the current structure — confirm active areas at planning.
- **Overflight-permit / diplomatic considerations:** 🟧 standard ICAO operation for a normal Japan transit; note **North Pacific / Sea of Japan sensitivities** and current **Russian (Magadan/Vladivostok) airspace considerations** on northern/great-circle routes — re-check live bulletins (§11).
- **Restricted/prohibited pockets:** named areas and status are AIP/NOTAM-published — pull live at planning.

> **SUA currency:** re-check active danger/restricted/training-area status and any North Pacific / Sea of Japan bulletins at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** ICAO comms-failure procedure — squawk **7600** (domestic), continue per the last acknowledged clearance / filed route and levels, and attempt contact on the previous/adjacent frequency and 121.5. In the **oceanic block** follow the **oceanic comms-failure / lost-comms procedure** (CPDLC/HF, position broadcasts) per OM E. 🟧 Confirm any Japan refinement at **AIP ENR 1.8 / GEN**.
- **Weather-deviation / in-flight contingency:** radar-tactical over Japan (request the deviation from ATC); over **Fukuoka Oceanic** apply the **ICAO oceanic weather-deviation procedure** (offset, level change with position broadcast on the oceanic frequency/CPDLC) per OM E. Squawk **7700** and declare for emergencies.
- **Seasonal hazards (durable):**
  - **Typhoon season (~Jun–Oct, peak Aug–Sep)** — 🟥 tropical cyclones tracking up from the SW Pacific regularly affect Okinawa, Kyushu, and the Tokyo/Kanto area, forcing terminal closures, holding and large re-routes; plan weather-independent alternates and extra fuel in season.
  - **Winter jet-stream turbulence** — 🟥 the powerful winter **subtropical/polar jet over Japan** produces severe **clear-air turbulence**, especially over/near the mountains and off the Pacific coast — a routine winter enroute hazard.
  - **Volcanic ash** — 🟥 Japan has **many active volcanoes** (e.g. Sakurajima, plus Kyushu/Hokkaido/Izu-Ogasawara systems); eruptions can close terminal areas and airways. **VAAC Tokyo** is the responsible advisory centre — pull VA advisories at planning.
  - **Winter snow / low visibility** at the northern and mountain terminals (RJCC and others) — a terminal driver; cold-temperature corrections and de-ice apply.
  - **Seismic / tsunami** — 🟧 major earthquakes can disrupt terminals and NAVAIDs at short notice; a live-NOTAM consideration, not a routine planning driver.

> **Pull at planning (T-2h):** enroute NOTAMs, active danger/restricted/training-area status, tropical-cyclone and turbulence SIGMET/AIRMET, **VAAC Tokyo** volcanic-ash advisories, current **PACOTS/NOPAC** tracks, North Pacific / Sea of Japan / Russian-airspace bulletins, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact **airspace class letter per band** (AIP ENR 2.1) — stated as Class A/C/E predominant domestically; not individually re-verified.
- **Tokyo / Kobe upper-airspace lateral split** and the current ACC/sector geometry — confirm against current sector charts.
- **Fukuoka Oceanic** frequency families (VHF boundary / HF), CPDLC/ADS-C login and the exact oceanic-sector boundaries — confirm at the JCAB AIP.
- **Domestic ADS-B Out mandate** wording and any exemptions — confirm at the JCAB AIP.
- **RJTT (Haneda), RJBB (Kansai), RJGG (Chubu), RJCC (Sapporo)** have no OM C airport briefs yet — build RJTT (in-FIR NE-Asia node) as a priority if it becomes a planned hub/alternate.
- **North Pacific / Russian-airspace** overflight sensitivities — re-check live before planning northern great-circle routes.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **JCAB AIP Japan — ENR sections** (Japan Civil Aviation Bureau / Japan AIS): ENR 2.1 (FIR/ATS airspace — Fukuoka FIR RJJJ and the domestic ACC structure), ENR 1.8 (regional supplementary / RVSM, RNP 4/10, datalink), ENR 3.x (ATS routes, NOPAC/PACOTS). Primary source of record for FIR structure, RVSM (FL290–410) and oceanic PBN — https://aisjapan.mlit.go.jp/ (retrieved 2026-07-25).
- **JCAB / MLIT — ATM Center (Fukuoka ATMC) and Oceanic Control** (four ACCs: Sapporo, Tokyo, Fukuoka, Naha; five oceanic sectors adjacent to Petropavlovsk, Anchorage, Oakland, Manila; Oakland-based oceanic procedures) — corroborated via JCAB/ICAO APAC material, e.g. *ATMC in Japan* (JCAB) and **FAA/ISPACG** North Pacific documentation — https://www.faa.gov/air_traffic/publications/us_restrictions/media/Sea_of_Japan_Fukuoka_FIR_Background_Notice_12_Sep_2017.pdf (retrieved 2026-07-25).
- **ICAO Doc 7030 (APAC) / Doc 4444 / ISPACG** — regional RVSM/PBN supplementary and oceanic weather-deviation/contingency (Pacific) procedures.
- **VATSIM Japan (VATJPN)** — division site and **Tokyo ACC (RJTG) / Kobe ACC (RJBG) SOP** for the Fukuoka FIR, incl. the Tokyo (Haneda/Narita) terminal system — https://vatjpn.org/document/public/om/sop/acc/rjtg-rjbg_acc (retrieved 2026-07-25). *Tier-4 corroboration only — the Tokyo ACC sector containing RJTT/RJAA, the domestic ACC structure within the single Fukuoka FIR, and the RVSM/route picture cross-checked here.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial build from `_FIR Briefing Template.md`. Fukuoka FIR (RJJJ) — clarified that "Tokyo FIR" is the single Japan-wide Fukuoka FIR, with Tokyo ACC the sector containing RJTT/RJAA. Four domestic ACCs (Sapporo/Tokyo/Fukuoka/Naha) + Fukuoka ATMC/Oceanic; mixed radar-domestic / procedural-oceanic (FANS CPDLC/ADS-C, Oakland-based); adjacent FIRs/oceanic (Incheon/Shanghai/Taipei/Manila + Anchorage/Oakland/Petropavlovsk/Magadan); RVSM FL290–410 / RNP 4-10 oceanic / ETOPS referenced to OM E; NOPAC/PACOTS trunk; Japanese Alps + Fuji terrain and driftdown; RJTT/RJAA + Japan network diversions, RKSI adjacent; USFJ/JASDF SUA; typhoon + winter-jet CAT + volcanic-ash (VAAC Tokyo) seasonal. VATSIM Japan (VATJPN) cross-checked and cited. Parent area brief: Asia (to build). |
