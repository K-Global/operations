# A14 — Definitions, Abbreviations and References · OM A

**Scope:** The manual-wide **definitions register** (the standard aerodrome/alternate, EDTO/ETOPS, fuel, procedure and special-operations terms used consistently across OM A–E), the **abbreviations register** (the acronyms used throughout the manual), and the **index of public regulatory references** (ICAO Annexes/Docs, EASA Parts, FAA Advisory Circulars, NAT Doc 007) that the OM leans on. This chapter defines terms once so operational chapters and OM B/C/E files can use them without re-deriving them; where a term has a dedicated OM E procedure, this chapter cross-links to it rather than duplicating the method.
**Version** v1.0 · **Updated** 2026-07-25 · **Status** Verified

> **Read-me:** K Global is a virtual airline operated in a flight-simulation environment (VATSIM, dispatched through VAMSYS); the definitions below restate real-world ICAO/EASA/FAA regulatory concepts for operational realism and a shared vocabulary — they do not assert a real-world certificate or approval. Flag legend: 🟥 restriction/hazard/hard requirement · 🟧 caution/unverified/to-ratify · 🟩 normal.

---

## 1. Definitions

### 1.1 Aerodromes, alternates & diversion planning

- **Adequate aerodrome** 🟩 — An aerodrome the operator judges fit for the planned operation once performance limits and runway characteristics are taken into account, and which is expected to be open at the time of use with the supporting services a diversion needs: air traffic service, sufficient lighting, communications, weather reporting, navigation aids and rescue/fire-fighting cover. "Adequate" is a durable, structural property of the field — it does not by itself say the field is usable *today*.
- **Suitable aerodrome** 🟩 — An adequate aerodrome that additionally, for the specific time window it might be used, has forecast weather, wind/runway condition and NOTAM status acceptable for the operation. A field must be **adequate** to be nominated as an alternate and **suitable** at the anticipated crossing time to actually be counted on the day. See the adequate/suitable test as applied to EDTO alternates: the relevant OM section §5.
- **Isolated aerodrome** 🟩 — A destination aerodrome that may be treated as isolated (relaxing the usual destination-alternate requirement in favour of extra fuel) when the fuel needed to divert to the nearest adequate alternate, plus final reserve, would exceed a set threshold — broadly two hours at normal cruise consumption for turbine types (a shorter piston-engine equivalent applies to reciprocating types). Typically applies to remote oceanic/island destinations with no reasonably close alternate.
- **En-route alternate (ERA)** 🟩 — An adequate aerodrome along the planned track that the flight plan may need to nominate at the planning stage, for use if a diversion becomes necessary before the destination is reached.
- **3% ERA** 🟩 — An en-route alternate nominated specifically so the contingency-fuel requirement can be reduced from the standard 5% of trip fuel to 3%, reflecting that a shorter potential diversion is available. See contingency fuel (§1.3) and the relevant OM section.

### 1.2 EDTO / ETOPS

- **ETOPS / EDTO** 🟩 — ETOPS (Extended-range Twin-engine Operations) and EDTO (Extended Diversion Time Operations) describe the same regulatory concept under two labels: operation of a multi-engine turbine aeroplane on a route with a point farther, in flying time, from an adequate en-route alternate than a defined threshold, which requires a specific operator approval. ICAO now uses EDTO (broadened beyond twins to any turbine type); FAA/EASA and most day-to-day usage still say ETOPS. K Global treats the two as synonyms; the full method (threshold vs rule time, area of operations, critical fuel, EDTO-significant systems) is defined in the relevant OM section.
- **Adequate EDTO en-route alternate** 🟩 — An adequate aerodrome that, at the time it might be needed, additionally provides an air traffic service and at least one instrument approach procedure — the qualifying bar for a field to be nominated as an EDTO/ETOPS alternate specifically (as distinct from a routine en-route alternate).
- **Approved one-engine-inoperative (OEI) cruise speed** 🟩 — The OEI cruise speed, within the aircraft's certificated limits, selected by the operator and approved by the regulator for a given EDTO area of operations. It is the speed used to convert the approved diversion time into the distance that defines the area of operations.
- **EDTO/ETOPS area** 🟩 — The airspace lying beyond the flying-time threshold from an adequate en-route alternate, measured in still air at the approved OEI cruise speed — the zone within which EDTO/ETOPS alternate-planning and en-route-alternate rules apply.
- **Dispatch** 🟩 — The moment an aircraft first moves under its own power with the intention of taking off. EDTO/ETOPS planning minima apply up to this point; once dispatched, the flight moves to en-route monitoring and re-evaluation of alternate suitability.

### 1.3 Fuel

- **Contingency fuel** 🟩 — An allowance carried to absorb the ordinary unpredictability of a flight — an individual aircraft burning more than the flight-planning assumption, weather differing from forecast, or a re-route/re-level — rather than fuel reserved against one specific known risk. See the full fuel scheme (taxi/trip/contingency/alternate/final reserve/additional/discretionary) and the MINIMUM FUEL / MAYDAY FUEL terminology: the relevant OM section.

### 1.4 Flight phase & operating procedure

- **Critical phases of flight** 🟩 — The portions of a flight demanding the crew's full attention and freedom from non-essential distraction: the take-off roll, the take-off flight path, the final approach, and the landing including the landing roll — plus any other phase the commander judges warrants the same discipline (e.g. an abnormal procedure).
- **Separate runways** 🟩 — Two runways at the same aerodrome that, even if they cross or overlap, each carry their own approach procedure keyed to a different navigation aid, arranged so that blocking one does not prevent the planned operation continuing on the other.
- **Equivalent position** 🟩 — An independently derived fix — established by a DME distance, a suitably placed NDB or VOR, a surveillance/precision-radar fix, or another suitable means — located roughly three to five miles from the runway threshold, used to confirm aircraft position on approach without relying solely on the primary approach aid.
- **Stabilised approach** 🟥 — An approach flown, from a defined gate (commonly 1,000 ft AAL in IMC / 500 ft AAL in VMC) to landing, on the correct lateral and vertical flight path and target speed, in landing configuration, with an appropriate rate of descent and power setting. Any parameter outside tolerance below the gate requires an immediate go-around — one of the few 🟥 hard SOP gates in the manual. See `A07 — Standard Operating Procedures — Philosophy and Structure.md`.
- **PF / PM (Pilot Flying / Pilot Monitoring)** 🟩 — The task-based crew-role model used in place of the older "handling/non-handling pilot" language. PF manages the flight path and aircraft handling; PM manages checklists, radio/datalink, monitoring and cross-checking the PF's actions. Either seat may hold either role; the roles — not the seat — define the task split.
- **TEM (Threat and Error Management)** 🟩 — The operating philosophy of anticipating operational threats before they materialise, trapping the errors those threats (or normal human performance) may induce, and managing any resulting aircraft-state deviation before it becomes consequential. TEM underlies K Global's SOP structure and CRM model; see `A07 — Standard Operating Procedures — Philosophy and Structure.md`.

### 1.5 Airspace, navigation & performance

- **PBN / RNP (incl. RNP AR)** 🟩 — Performance-Based Navigation (PBN) specifies the accuracy, integrity and functional performance an aircraft and crew must achieve on a given route, procedure or in given airspace, rather than mandating specific equipment. RNP (Required Navigation Performance) is the PBN family that additionally requires onboard performance monitoring and alerting. RNP AR (Authorisation Required) procedures need a specific operator and crew approval because they permit tighter lateral accuracy and/or curved (RF-leg) paths flown with reduced obstacle margins. Full method: the relevant OM section.
- **RVSM (Reduced Vertical Separation Minima)** 🟩 — The airspace regime, generally FL290–FL410, in which standard 2,000 ft vertical separation is reduced to 1,000 ft, requiring approved aircraft height-keeping performance and a specific operator/crew RVSM approval. Full method: the relevant OM section.
- **NAT HLA (North Atlantic High Level Airspace)** 🟩 — The organised oceanic airspace over the North Atlantic, broadly FL285–FL420, where reduced ATC radar/direct-VHF coverage requires mandated navigation performance, communication (CPDLC/HF) and surveillance (ADS-C) capability plus a specific NAT HLA operational approval. Full method: the relevant OM section.
- **SLOP (Strategic Lateral Offset Procedure)** 🟩 — A procedure letting aircraft in designated oceanic/remote airspace fly a small lateral offset (typically up to 2 NM right of centreline, in defined increments) from the cleared track without an individual ATC clearance for the offset, reducing collision risk from navigational and altimetry errors. See the relevant OM section.
- **LVO / LVP (Low Visibility Operations / Procedures)** 🟩 — The additional aircraft/crew qualification, aerodrome infrastructure (e.g. CAT II/III ILS, protected sensitive areas) and ground procedure (low-visibility taxi routings, protection of critical/sensitive areas) required to take off or land in visibility/ceiling conditions below standard operating minima. Full method: the relevant OM section.

### 1.6 Airworthiness & dispatch policy

- **MEL / CDL (Minimum Equipment List / Configuration Deviation List)** 🟩 — The MEL is the operator-specific list, derived from the type's MMEL, of equipment permitted to be inoperative for dispatch subject to stated conditions and limitations. The CDL lists external airframe parts, panels or fairings that may be missing for dispatch, each with any associated performance penalty. See `A09 — Minimum Equipment Policy.md`.
- **MMEL (Master Minimum Equipment List)** 🟩 — The type-design authority's baseline equipment list for a given type, from which every operator's MEL is derived; an operator's MEL may equal or tighten the MMEL but may never relax it.

---

## 2. Abbreviations

*Aviation-standard acronyms used across OM A–E. Sim-network-specific labels (e.g. network callsigns, X-Plane version tags) are not repeated here — they belong to the platform context noted in A00.*

### 2.1 Regulatory bodies, documents & approvals

| Abbrev. | Meaning |
|---|---|
| ICAO | International Civil Aviation Organization |
| IATA | International Air Transport Association |
| EASA | European Union Aviation Safety Agency |
| FAA | Federal Aviation Administration (USA) |
| AOC | Air Operator Certificate |
| ORO | Organisation Requirements for Air Operations (EASA Part-ORO) |
| CAT | Commercial Air Transport (EASA Part-CAT) |
| FCL | Flight Crew Licensing (EASA Part-FCL) |
| SPA | Specific Approvals (EASA Part-SPA) |
| AMC | Acceptable Means of Compliance |
| CS | Certification Specification (EASA) |
| AC | Advisory Circular (FAA) |
| CFR | Code of Federal Regulations (USA) |
| TCDS | Type Certificate Data Sheet |
| NAT Doc 007 | North Atlantic Operations and Airspace Manual |

### 2.2 Air traffic services & airspace

| Abbrev. | Meaning |
|---|---|
| ATC | Air Traffic Control |
| ATS | Air Traffic Service |
| ATSU | Air Traffic Service Unit |
| ANSP | Air Navigation Service Provider |
| ACC | Area Control Centre |
| UAC | Upper Area Control Centre |
| ARTCC | Air Route Traffic Control Center (USA) |
| FSS | Flight Service Station |
| FIR | Flight Information Region |
| UIR | Upper Information Region |
| CTA | Control Area |
| CTR | Control Zone |
| TMA | Terminal Control Area |
| SUA | Special Use Airspace |
| TRA | Temporary Reserved Airspace |
| AIP | Aeronautical Information Publication |
| AIRAC | Aeronautical Information Regulation and Control |
| AIS | Aeronautical Information Service |
| NOTAM | Notice to Airmen |
| ASHTAM | Special-series NOTAM for volcanic-ash activity |

### 2.3 Crew, operations & procedure

| Abbrev. | Meaning |
|---|---|
| OM | Operations Manual |
| SOP | Standard Operating Procedure |
| PF | Pilot Flying |
| PM | Pilot Monitoring |
| PIC | Pilot in Command |
| CRM | Crew Resource Management |
| TEM | Threat and Error Management |
| QRH | Quick Reference Handbook |
| FCOM | Flight Crew Operating Manual |
| FCTM | Flight Crew Training Manual |
| MEL | Minimum Equipment List |
| CDL | Configuration Deviation List |
| MMEL | Master Minimum Equipment List |
| OFP | Operational Flight Plan |
| ETA / ETD | Estimated Time of Arrival / Departure |
| UTC | Coordinated Universal Time |
| CTOT | Calculated Take-Off Time |
| EDCT | Expect Departure Clearance Time |
| GDP | Ground Delay Program |

### 2.4 Navigation, performance & special operations

| Abbrev. | Meaning |
|---|---|
| PBN | Performance-Based Navigation |
| RNP | Required Navigation Performance |
| RNP AR | RNP Authorisation Required |
| RNAV | Area Navigation |
| RVSM | Reduced Vertical Separation Minima |
| NAT | North Atlantic (track system / region) |
| HLA | High Level Airspace |
| SLOP | Strategic Lateral Offset Procedure |
| OTS | Organised Track System (NAT) |
| ETOPS | Extended-range Twin-engine Operations |
| EDTO | Extended Diversion Time Operations |
| ERA | En-Route Alternate |
| ETP / CP | Equal Time Point / Critical Point |
| OEI | One-Engine-Inoperative |
| ULR | Ultra Long Range |
| RCP / RSP | Required Communication Performance / Required Surveillance Performance |
| LVO / LVP | Low Visibility Operations / Procedures |
| RECAT | Wake-turbulence Re-categorisation |
| CFIT | Controlled Flight Into Terrain |
| GNSS | Global Navigation Satellite System |
| GPS | Global Positioning System |
| SBAS | Satellite-Based Augmentation System |
| RAIM | Receiver Autonomous Integrity Monitoring |
| VOR | VHF Omnidirectional Range |
| NDB | Non-Directional Beacon |
| DME | Distance Measuring Equipment |
| TACAN | Tactical Air Navigation |
| LOC | Localizer |
| ILS | Instrument Landing System |
| LNAV / VNAV | Lateral Navigation / Vertical Navigation |
| LPV | Localizer Performance with Vertical guidance |
| GLS | GBAS Landing System |
| SID | Standard Instrument Departure |
| STAR | Standard Terminal Arrival Route |
| IAF / FAF / FAP | Initial / Final Approach Fix / Point |
| MSA | Minimum Safe Altitude |
| MORA | Minimum Off-Route Altitude |
| MEA | Minimum En-route Altitude |
| SSA | Sector Safe Altitude |

### 2.5 Communications & surveillance

| Abbrev. | Meaning |
|---|---|
| CPDLC | Controller-Pilot Data Link Communications |
| ADS-B | Automatic Dependent Surveillance – Broadcast |
| ADS-C | Automatic Dependent Surveillance – Contract |
| FANS | Future Air Navigation System |
| PBCS | Performance-Based Communication and Surveillance |
| SATCOM | Satellite Communication |
| HF / VHF | High Frequency / Very High Frequency |
| SELCAL | Selective Calling |
| ATN | Aeronautical Telecommunication Network |
| TCAS | Traffic Collision Avoidance System |

### 2.6 Weather

| Abbrev. | Meaning |
|---|---|
| METAR | Meteorological Aerodrome Report |
| TAF | Terminal Aerodrome Forecast |
| SIGMET | Significant Meteorological Information |
| AIRMET | Airman's Meteorological Information |
| ATIS | Automatic Terminal Information Service |
| VAAC | Volcanic Ash Advisory Centre |
| ITCZ | Intertropical Convergence Zone |
| QNH / QFE | Altimeter sub-scale settings (sea-level / aerodrome-elevation reference) |
| SWPC | Space Weather Prediction Center |
| PWS | Predictive Windshear (System) |

### 2.7 Aerodrome & runway

| Abbrev. | Meaning |
|---|---|
| RWY | Runway |
| TORA / TODA / ASDA / LDA | Take-Off Run / Take-Off Distance / Accelerate-Stop Distance / Landing Distance Available |
| RESA | Runway End Safety Area |
| RWYCC | Runway Condition Code |
| GRF | Global Reporting Format (runway surface condition) |
| TALPA | Takeoff and Landing Performance Assessment |
| RCAM | Runway Condition Assessment Matrix |
| PCN | Pavement Classification Number |
| ARFF / RFFS | Aircraft Rescue and Fire Fighting (Service) |
| LAHSO | Land And Hold Short Operation |
| PAPI | Precision Approach Path Indicator |
| MALSR | Medium-intensity Approach Lighting System with Runway Alignment Indicator Lights |
| EMAS | Engineered Materials Arresting System |
| TDZ | Touchdown Zone |
| PPR | Prior Permission Required |
| H24 | Continuous (24-hour) availability |
| AD | Aerodrome (AIP/ICAO Annex 14 section reference) |

### 2.8 Fuel, weight & performance

| Abbrev. | Meaning |
|---|---|
| MTOW | Maximum Take-Off Weight |
| MZFW | Maximum Zero-Fuel Weight |
| MLW | Maximum Landing Weight |
| ZFW | Zero-Fuel Weight |
| OEW | Operating Empty Weight |
| CG | Centre of Gravity |
| CI | Cost Index |
| TAS / IAS | True Airspeed / Indicated Airspeed |
| KTAS / KIAS | Knots True Airspeed / Knots Indicated Airspeed |
| SM / NM | Statute Mile / Nautical Mile |
| FL | Flight Level |
| AGL / AAL / MSL | Above Ground Level / Above Aerodrome Level / Mean Sea Level |

### 2.9 Flight-deck instruments & systems

| Abbrev. | Meaning |
|---|---|
| FMS / FMC | Flight Management System / Computer |
| MCDU | Multipurpose (Multifunction) Control and Display Unit |
| ECAM | Electronic Centralised Aircraft Monitor |
| EICAS | Engine Indicating and Crew Alerting System |
| EGPWS | Enhanced Ground Proximity Warning System |
| TAWS | Terrain Awareness and Warning System |
| IRS / IRU | Inertial Reference System / Unit |
| APU | Auxiliary Power Unit |
| EFB | Electronic Flight Bag |
| HUD | Head-Up Display |
| FBW | Fly-By-Wire |

---

## 3. References

*Public regulatory documents that inform the OM. No subscription/in-sim material is cited here — see individual OM E/B/C files for how each source is applied.*

- **ICAO Annex 2 — Rules of the Air**
- **ICAO Annex 6, Part I — Operation of Aircraft (International Commercial Air Transport — Aeroplanes)**
- **ICAO Annex 13 — Aircraft Accident and Incident Investigation**
- **ICAO Annex 17 — Security**
- **ICAO Annex 19 — Safety Management**
- **ICAO Doc 4444 — Procedures for Air Navigation Services: Air Traffic Management (PANS-ATM)**
- **ICAO Doc 8168 — Procedures for Air Navigation Services: Aircraft Operations (PANS-OPS), Vols I & II**
- **ICAO Doc 9284 — Technical Instructions for the Safe Transport of Dangerous Goods by Air**
- **ICAO Doc 9613 — Performance-Based Navigation (PBN) Manual**
- **ICAO Doc 9640 — Manual of Criteria for the Qualification of Flight Simulation Training Devices** (relevant to K Global's simulation-training context)
- **ICAO Doc 10085 — Extended Diversion Time Operations (EDTO) Manual**
- **EASA Part-ORO — Organisation Requirements for Air Operations**
- **EASA Part-CAT — Commercial Air Transport Operations**
- **EASA Part-FCL — Flight Crew Licensing**
- **EASA AMC 20-6 — Extended Range Operation with Two-Engine Aeroplanes (ETOPS)**
- **FAA Advisory Circular 120-42B — Extended Operations (ETOPS and Polar Operations)**
- **FAA 14 CFR Part 121, Subpart H — Airplane Performance Operating Limitations (incl. §121.161 ETOPS area of operations)**
- **NAT Doc 007 — North Atlantic Operations and Airspace Manual**

---

## 4. Cross-references

- **OM A00 — Administration and Control** — manual structure, amendment control, distribution, the K Global identity block: `A00 — Administration and Control.md`
- **OM A07 — Standard Operating Procedures — Philosophy and Structure** — PF/PM, TEM, stabilised-approach gate: `A07 — Standard Operating Procedures — Philosophy and Structure.md`
- **OM A08 — Fuel and Payload Policy** — contingency fuel and the wider fuel scheme: `A08 — Fuel and Payload Policy.md`
- **OM A09 — Minimum Equipment Policy** — MEL/CDL/MMEL: `A09 — Minimum Equipment Policy.md`
- **OM E — ETOPS/EDTO Procedures**: the relevant OM section
- **OM E — Low Visibility Operations**: the relevant OM section
- **OM E — PBN and RNP Operations**: the relevant OM section
- **OM E — RVSM Operations**: the relevant OM section
- **OM E — Datalink and Oceanic Procedures** (NAT HLA, SLOP): the relevant OM section
- **OM E — Fuel Policy**: the relevant OM section

---

## Sources & References

- **ICAO** — Annexes 2, 6 (Part I), 13, 17, 19; Docs 4444, 8168, 9284, 9613, 9640, 10085 — https://www.icao.int/publications (retrieved 2026-07-25).
- **EASA** — Part-ORO, Part-CAT, Part-FCL, AMC 20-6 — https://www.easa.europa.eu/en/document-library/easy-access-rules (retrieved 2026-07-25).
- **FAA** — Advisory Circular 120-42B; 14 CFR Part 121 — https://www.faa.gov/regulations_policies (retrieved 2026-07-25); https://www.ecfr.gov/current/title-14/chapter-I/subchapter-G/part-121 (retrieved 2026-07-25).
- **NAT Doc 007 — North Atlantic Operations and Airspace Manual** — https://www.icao.int/EURNAT/Pages/NAT-Documents.aspx (retrieved 2026-07-25).
- **SKYbrary** — general definitions cross-check (EDTO/ETOPS, RVSM, PBN/RNP, SLOP, stabilised approach) — https://skybrary.aero (retrieved 2026-07-25).

## Change Log

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-07-25 | Ratifications applied (A01 appointments, A03 safety policy, A04 co-pilot limits, A05 rank/categorisation, A06 flight-hours); real-world airline references neutralised per governance §1.8; QA nits swept (SSA added to abbreviations). Promoted to Verified. |
| v0.1 | 2026-07-25 | Initial draft — definitions re-expressed from source glossary/EU-OPS + OM-wide term/abbreviation compilation. |
