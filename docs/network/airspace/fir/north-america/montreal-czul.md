# Montreal FIR (CZUL) — FIR Briefing

**Scope:** single FIR — the entire province of Quebec (excl. the Bagotville Military TCA), parts of eastern Ontario, the eastern shore of James Bay and Hudson Bay, western Newfoundland & Labrador, and the Nunavut region including Iqaluit, containing **Montréal–Trudeau (CYUL)** · **Parent area brief:** [North America (Canadian Domestic + Western US)](../../north-america.md) · oceanic continuation in [North Atlantic](../../north-atlantic.md) · **Adjacent FIRs:** Toronto (CZYZ, NAV CANADA) W · Winnipeg (CZWG, NAV CANADA) W · Edmonton (CZEG, NAV CANADA) N · Moncton (CZQM, NAV CANADA) E · Gander Domestic (NAV CANADA) E · Gander Oceanic (CZQX, NAV CANADA) E · Boston ARTCC (KZBW, FAA) S
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Strategic transit reference for the sim, not a chart or clearance. Montreal FIR is a **fully radar/ADS-B-controlled continental FIR** operated by **NAV CANADA** — no procedural segment. Its defining role is as the **eastbound feeder into the Gander domestic/oceanic and Moncton FIR system**, i.e. the last fully-radar domestic segment before traffic enters the Gander/Moncton NAT-track handoff — and, on the return leg, the first domestic radar contact after the North Atlantic crossing. Routings and levels here are planning context; file and fly the SimBrief/current-AIRAC-validated route and comply with tactical ATC clearances. Terminal procedures for the aerodrome inside the FIR (CYUL) live in the airport briefing (§9). Live restrictions are pulled at planning (§11). Open 🟧 items are in §12. Flag legend 🟥 hard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| FIR ident | **CZUL** — Montreal FIR / Montreal Area Control Centre ("Montreal Centre"), one of NAV CANADA's seven ACCs |
| Controlling ATSU / ANSP | **NAV CANADA** — Montreal ACC. Underlying terminal unit: **Montreal Terminal** for the CYUL metro |
| Airspace class & vertical limits | Canadian domestic structure: **Class A** high-level, **Class B/C** terminal at the Montreal metro, **Class E/G** below — terminal detail in the airport brief (§9) 🟧 (exact class-letter/base VERIFY vs current AIP Canada ENR) |
| RVSM | 🟥 Applicable **FL290–FL410** (Canadian domestic RVSM, TP1820 Designated Airspace Handbook) — see OM E §5 |
| PBN environment | RNAV enroute (domestic high/low-level airway structure) · RNAV SID/STAR + RNP APCH at the metro — see OM E §5 |
| Surveillance & datalink | 🟩 Continuous **radar + ADS-B** domestically; CPDLC/ADS-C (FANS 1/A) picks up only once traffic passes into Gander Domestic/Oceanic or Moncton's NAT interface — see [North Atlantic](../../north-atlantic.md) |
| Primary language & comms | 🟩 **VHF throughout; English and French** (Montreal FIR is NAV CANADA's principal bilingual-service ACC) |
| Key hazard(s) | 🟧 **Winter continental storm systems** (Quebec Lows, freezing rain, heavy snow) driving de-icing/flow constraints; 🟩 the **Gander/Moncton NAT hand-off** is procedurally significant but not itself a hazard |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Control type (radar / procedural) | 🟩 | Fully radar/ADS-B-controlled; the procedural/oceanic regime begins downstream at Gander Domestic/Oceanic — not in CZUL itself. |
| Communication coverage & language | 🟩 | Continuous VHF; English and French (bilingual — Quebec). |
| Datalink / surveillance requirement | 🟩 | Radar/ADS-B continuous; domestic CPDLC not required. NAT CPDLC/ADS-C requirement begins downstream — see [North Atlantic](../../north-atlantic.md) §4. |
| Terrain / MORA / driftdown | 🟩 | Low-to-moderate — Laurentian foothills; not a cruise/driftdown factor at RVSM levels. |
| Diversion-aerodrome coverage | 🟧 | Only CYUL has a curated brief in this tree; wider Quebec field set uncurated — see §9. |
| Special-use airspace (military / danger) | 🟧 | **Bagotville Military TCA** is expressly carved out of CZUL coverage — confirm current boundary/activation at planning. |
| Equipment / approval (RVSM, PBN, transponder) | 🟥 | RVSM FL290–410 · RNAV domestic structure · Mode S/ADS-B — all defined in OM E; confirm current-AIRAC route. §5. |

---

## 3. FIR structure & lateral/vertical boundaries

- **Lateral extent:** Montreal FIR covers the **entire province of Quebec** (with the exception of the **Bagotville Military Terminal Control Area**, which is carved out), **parts of eastern Ontario**, the **eastern shore of James Bay and Hudson Bay**, the **western section of Newfoundland and Labrador**, and the **Nunavut region including Iqaluit**. 🟧 (exact lateral boundary decimals — verify AIP Canada ENR 2.1.)
- **Vertical structure:** one facility works the full column, as with other Canadian ACCs; NAV CANADA documents a **LOW sector (below FL290)** and a **HIGH sector (FL290 and above)** for CZUL. 🟧 (sector-band figure corroborated only via a network-sim boundary reference — verify against AIP Canada ENR 1.6.)
- **Adjacent FIRs (by boundary):**
  - **W — Toronto (CZYZ, NAV CANADA).** Handoff toward the Great Lakes / southern-Ontario metro (see [Toronto (CZYZ)](toronto-czyz.md)).
  - **W — Winnipeg (CZWG, NAV CANADA).** Prairies handoff.
  - **N — Edmonton (CZEG, NAV CANADA).** Handoff toward western Canada and the Arctic/NDA system (see [Edmonton (CZEG)](edmonton-czeg.md)).
  - **E — Moncton (CZQM, NAV CANADA)** and **Gander Domestic (NAV CANADA).** The principal eastbound feeder toward the Atlantic Canada / Gander system.
  - **E — Gander Oceanic (CZQX, NAV CANADA).** The NAT oceanic handoff further east — see [North Atlantic](../../north-atlantic.md).
  - **S — Boston (KZBW, FAA).** Northeast-US handoff.
- **Sectorisation:** LOW (below FL290) / HIGH (FL290+) sector split feeding Montreal Terminal at the metro end and Moncton/Gander Domestic eastbound. 🟧 (current real-world sector count/boundaries — verify AIP Canada ENR 1.6; the LOW/HIGH split cited here is corroborated from a network-sim source only.)

---

## 4. Control & ATSU

- **Enroute ATSU:** 🟩 **Montreal ACC (CZUL, NAV CANADA)** — radar/ADS-B control of the full column, feeding Montreal Terminal westbound-arrival and Moncton/Gander Domestic eastbound.
- **Terminal facility inside the FIR:** 🟩 **Montreal Terminal** sequences the CYUL metro. Terminal procedures are in the airport briefing (§9).
- **FIS / FSS:** NAV CANADA **Flight Information Centre (FIC)** for advisory service outside controlled airspace.
- **Surveillance basis:** 🟩 continuous radar + ADS-B; no procedural pockets on a normal domestic IFR routing within CZUL itself.

---

## 5. Equipment & approvals

*Requirements below are DEFINED in OM E — Operations; this section states which apply in Montreal FIR and references the OM E doc. It does not re-derive them.*

- **RVSM:** 🟥 **FL290–FL410** — Canadian domestic RVSM per **TP1820 Designated Airspace Handbook**. See [`OM E — RVSM Operations`](../../../../flight-ops/rvsm-operations.md).
- **PBN / RNP:** 🟩 RNAV enroute on the domestic high/low-level airway structure; **RNAV SID/STAR** and **RNP APCH** at the Montreal metro. See [`OM E — PBN and RNP Operations`](../../../../flight-ops/pbn-and-rnp-operations.md).
- **Datalink (CPDLC):** 🟩 not required domestically within CZUL — VHF voice continuous. The **CPDLC + ADS-C (FANS 1/A)** oceanic datalink mandate applies downstream once traffic reaches the Gander Domestic/Oceanic or Moncton NAT interface — see [`OM E — Datalink and Oceanic Procedures`](../../../../flight-ops/datalink-and-oceanic-procedures.md) and [North Atlantic](../../north-atlantic.md) §4.
- **Transponder / ADS-B:** 🟥 **Mode S with ADS-B Out** required under the Canadian ADS-B mandate. 🟧 (exact CARs citation/effective date — verify Transport Canada CARs 605.35 / AIC.)

---

## 6. Communications & frequencies

- **ACC sectors / frequencies:** a metro transit is handed sequentially through **Montreal Centre** LOW/HIGH sectors and onward to the adjacent FIR (**Toronto / Winnipeg / Edmonton / Moncton / Gander Domestic**) or to **Montreal Terminal** at the terminal end; the exact sector split and frequencies are AIRAC-dependent — fly the current-AIRAC/chart frequencies, not a stored table.
- **FIS / advisory:** NAV CANADA FIC for flight-information/advisory service in uncontrolled airspace.
- **Language:** 🟩 **English and French** — Montreal is NAV CANADA's principal bilingual-service ACC; confirm language of the working frequency on initial contact.
- **Emergency / guard:** **121.5 MHz** guard (monitor); **123.45 MHz** air-to-air.

---

## 7. Route structure & entry/exit

- **Enroute network:** 🟩 Canadian domestic high/low-level airway (RNAV) structure; CZUL is the principal **eastbound feeder toward the Gander Domestic/Oceanic and Moncton FIR NAT-track system**, and correspondingly the first domestic radar FIR westbound-inbound traffic reaches after an eastern Atlantic crossing.
- **Major fixes / entry-exit points:** metro arrival gates at CYUL and the eastern-boundary transition fixes toward Moncton/Gander Domestic; the SimBrief/current-AIRAC route provides the exact string (planning context, not a clearance). 🟧 (exact current STAR/entry-fix set by AIRAC/runway config — pull on the day.)
- **Hubs & aerodromes inside the FIR:** 🟩 **Montréal–Trudeau (CYUL)** — the only curated brief in this FIR (§9). CYUL sits within the wider Quebec/Nunavut CZUL coverage (Iqaluit CYFB, for example, is also inside this FIR) but no additional OM C briefs are built.

---

## 8. Terrain & MORA

- **Grid MORA / high terrain belts:** 🟩 generally low-to-moderate — the Laurentian foothills north of the St. Lawrence Valley are the principal relief; not a cruise-level factor at RVSM levels. The Nunavut/Baffin portion of CZUL's far-northeast reach carries higher terrain (Baffin Island, ~5,000–7,000 ft) — see [Arctic](../../arctic.md) §7 for the Baffin terrain detail relevant near CYFB. 🟧 (per-quadrant grid-MORA — take from NAV CANADA ENR charts.)
- **Boundary terrain:** none of operational significance across the southern/western boundaries; the Baffin terrain sits within CZUL's own far-northeast extent rather than across a boundary.
- **Driftdown / depressurisation escape:** not terrain-limited for a normal CYUL transit; the dense southern-Quebec/adjacent-FIR field set removes any terrain-limited escape concern for that portion of the FIR.
- **Cold-temperature altitude corrections:** applied at CYUL in winter — see the airport briefing (§9) and [`OM E — Cold Weather Operations`](../../../../flight-ops/cold-weather-operations.md).

---

## 9. Diversion aerodromes within the FIR

| Aerodrome | ICAO | Role | Brief |
|---|---|---|---|
| Montréal–Trudeau | **CYUL** | Montreal metro hub / primary dep-return alternate | [CYUL brief](../../../destinations/north-america/canada/cyul/index.md) |
| Iqaluit | **CYFB** | Far-northeast Arctic alternate (Baffin) | Brief to build 🟧 — see also [Arctic](../../arctic.md) §8 |

- **Coverage note:** 🟧 principal curated coverage is CYUL only; the wider Quebec/Atlantic-Canada field set gives real-world redundancy in the southern part of the FIR but has no OM C brief yet.

---

## 10. Special-use airspace

- **Military TRA / TSA:** 🟥 **Bagotville Military Terminal Control Area** is explicitly excluded from CZUL's civil coverage — a CYBG-area transit needs the current activation/boundary status.
- **Danger / restricted / prohibited areas:** 🟧 none of further note identified for a standard CYUL transit in this pass; pull live NOTAMs at planning.
- **Overflight-permit / diplomatic considerations:** 🟩 none — Canadian domestic operation.

> **SUA currency:** re-check Bagotville TCA status and current NOTAMs at planning — this list is durable context, not live clearance.

---

## 11. Contingency & seasonal / live-data pointer

- **Comms-failure:** apply Canadian domestic **lost-comms** procedure (route/altitude per last clearance / expected / filed, per TC CARs/AIP Canada RAC); squawk **7600**.
- **Weather-deviation / in-flight contingency:** radar-tactical — request the deviation from ATC and comply with the vector/level issued. Squawk **7700** and declare for emergencies. Once past the Gander Domestic/Oceanic or Moncton NAT boundary, the standardised NAT contingency procedures apply instead — see [North Atlantic](../../north-atlantic.md) §10.
- **Seasonal hazards (durable):**
  - **Winter — Quebec Lows / freezing rain / heavy snow:** intense continental winter storm tracks through the St. Lawrence Valley drive deicing load, reduced runway acceptance and flow constraints at the Montreal metro.
  - **Summer — convection:** frontal thunderstorms typical of the St. Lawrence Valley air mass.

> **Pull at planning (T-2h):** enroute NOTAMs, SIGMET/AIRMET (convection, icing), Bagotville TCA activation status, and the validated SimBrief route with assigned levels. Not stored here.

---

## 12. Open items (🟧 — confirm)

- Exact CZUL lateral boundary decimals (Quebec / eastern-Ontario / James-Hudson Bay shore / western Newfoundland-Labrador / Nunavut extent) — verify AIP Canada ENR 2.1.
- Real-world LOW/HIGH sector split and boundary (FL290 cited from a network-sim source only) — verify AIP Canada ENR 1.6.
- Airspace class letter per band / terminal shelves at the Montreal metro — not individually re-verified.
- Canadian ADS-B mandate CARs citation/effective date.
- Bagotville Military TCA current boundary/activation.
- No OM C airport brief yet for CYFB (Iqaluit) — build if planned as a far-northeast alternate.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts may inform content but are not listed here.*

- **NAV CANADA — AIP Canada (ICAO) / Designated Airspace Handbook (TP1820)** — Canadian domestic RVSM FL290–410, airspace classification, ADS-B mandate — https://www.navcanada.ca/ (retrieved 2026-07-26). 🟧 exact ENR sub-section numbers not individually re-verified in this pass.
- **Montreal Area Control Centre — facility overview (public reference)** — CZUL coverage of Quebec (excl. Bagotville TCA) + eastern Ontario + James/Hudson Bay shore + western Newfoundland-Labrador + Nunavut/Iqaluit, adjacent Moncton/Gander/Boston/Toronto/Winnipeg/Edmonton — https://en.wikipedia.org/wiki/Montreal_Area_Control_Centre (retrieved 2026-07-26).
- **Montreal virtual FIR (VATCAN/VATSIM)** — corroboration only for boundary framing and the LOW (below FL290) / HIGH (FL290+) sector split; not an authoritative real-world AIP source — https://czul.ca/en/boundaries/ (retrieved 2026-07-26). *Tier-4 network-sim corroboration only.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Initial FIR brief; built from public/AIP sources. |
