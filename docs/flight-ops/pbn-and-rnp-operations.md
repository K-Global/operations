# PBN & RNP Operations — OM E Procedure

**Scope:** Location-agnostic capability/procedure policy for **Performance-Based Navigation (PBN)** — the PBN concept (specifying navigation performance rather than sensors), the distinction between **RNAV** and **RNP** (RNP = area navigation **plus** on-board performance monitoring & alerting), the **navigation-specification ladder** (RNAV 10 / RNP 10, RNAV 5, RNAV 1/2, RNP 1/2, RNP 4, RNP APCH → LNAV / LNAV-VNAV / LPV, RNP AR APCH) and where each is used (oceanic/remote, en-route, terminal, approach), the sensors/equipage (GNSS/SBAS/RAIM/ABAS, DME-DME/IRU), **RF legs**, **RNP AR** special authorisation, **RAIM/GNSS prediction & outages**, and the approval-matrix concept. Applies to K Global's PBN-capable widebody fleet. An airspace or airport brief *applies* a spec to a place; this file *defines* the framework. Sim context: X-Plane 11 / SimBrief.
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — public-source-verified (ICAO Doc 9613 / Annex 6 · FAA AC 90-105A / AC 90-101A · EASA · SKYbrary); type-, sensor- and approval-specific numbers flagged 🟧.

> **Read-me — regime & scoping (read first):** This is an **OM E Operations** procedure (capability/method), **not** a clearance, a chart, or an operator PBN authorisation. It states the PBN *framework* and how K Global applies it. **Which navigation specification applies in a given piece of airspace, and the specific RNP value / minima for a procedure, come from the AIP, the chart and the operator's PBN approval — pulled at planning.** Live inputs (the RAIM/GNSS-prediction result, current NOTAM'd GNSS outages, whether an RF-capable or RNP-AR procedure is available) are pulled at dispatch and in flight; this file is durable policy only. Aircraft PBN capability (which specs are certified, GNSS/SBAS fit, RF-leg and RNP-AR eligibility) is type-specific — verify against the AFM/FCOM and the operator PBN OpsSpec, not this page. Flag legend: 🟥 hard requirement/hazard · 🟧 caution/unverified/type- or approval-specific · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| What PBN is | Navigation defined by **required performance** (accuracy, integrity, continuity, functionality) for a phase of flight — **not** by naming specific sensors (ICAO Doc 9613) |
| RNAV vs RNP — 🟥 | **RNP** = area navigation **plus mandatory on-board performance monitoring & alerting** (the aircraft tells the crew if it cannot meet the required performance). **RNAV** has the accuracy but **no** self-monitoring — the two are not interchangeable |
| The nav-spec ladder | Oceanic/remote **RNAV 10 (a.k.a. RNP 10) · RNP 4 · RNP 2** → en-route **RNAV 5 · RNP 2** → terminal **RNAV 1/2 · RNP 1** → approach **RNP APCH (LNAV / LNAV-VNAV / LPV) · RNP AR APCH** (§4) |
| Primary sensor | **GNSS** underpins most modern specs (RNP everywhere, RNAV 1/2 terminal, RNP APCH); **DME-DME/IRU** supports some RNAV 1/2; **IRS + GNSS hybrid** for oceanic RNP 4/10 🟧 |
| SBAS / LPV | **SBAS (e.g. WAAS/EGNOS)** enables **LPV** (angular, ILS-like) minima within RNP APCH — coverage is regional; **pull at planning** 🟧 |
| Integrity monitoring | **ABAS/RAIM** (GNSS self-check) or **SBAS** provides the integrity; a **RAIM/GNSS-availability prediction** is required where continuity is not otherwise assured (§7) 🟥 |
| RF legs | **Radius-to-Fix** curved path legs — need RF capability, and (RNP AR sub-0.3 or RF) an **engaged autopilot/flight-director** (§5) 🟥 |
| RNP AR APCH | **Authorisation Required** — the most demanding approach spec (RNP down to 0.1, RF legs, obstacle-rich): needs a **specific operator authorisation** + aircraft & crew qualification (§6) 🟥 |
| Illustrative context | Any GNSS-equipped K Global widebody flying an RNP APCH or RNP 4 oceanic leg via SimBrief; the operative spec/value pulled from AIP + chart at planning |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| PBN concept (performance not sensor) | 🟩 | Sourced (ICAO Doc 9613; SKYbrary PBN). Two components: nav application + nav specification, supported by the nav infrastructure. |
| RNAV vs RNP (on-board monitoring & alerting) | 🟥 | The defining distinction. RNP includes performance monitoring & alerting; RNAV does not. Sourced. |
| Nav-spec ladder & phase-of-flight mapping | 🟧 | Ladder sourced; **the spec that actually applies in a given airspace comes from the AIP/State AIP**, not this page. Naming (RNAV 10 = RNP 10 legacy) noted. |
| GNSS / SBAS / RAIM / ABAS | 🟧 | GNSS is the primary sensor; SBAS enables LPV (regional). RAIM/ABAS integrity + prediction required where continuity not assured. Type/fit-specific. |
| DME-DME / IRU | 🟧 | Supports some RNAV 1/2 where GNSS not used/available; oceanic uses IRS+GNSS. Confirm the type's sensor set. |
| RF legs | 🟥 | Curved-path legs; require RF capability and (sub-0.3 RNP / RF) autopilot or FD engaged. Sourced (FAA AC 90-101A). |
| RNP AR APCH | 🟥 | Special authorisation; aircraft + crew + procedure-validation requirements; RNP to 0.1; autopilot/FD mandatory. Sourced (FAA AC 90-101A). |
| RAIM/GNSS prediction & outages | 🟥 | Prediction required (HPL < RNP; mask ≥ 5°); NOTAM'd outages checked at planning. Sourced (AC 90-105A). |
| Approval matrix | 🟧 | Each spec needs its own operator authorisation + demonstrated aircraft capability; matrix is operator/state-specific — verify. |

---

## 3. The PBN concept — performance, not sensors

- **The core idea — 🟩:** PBN specifies **how well** an aircraft must navigate (accuracy, integrity, continuity, availability, functionality) for a given airspace or procedure, **instead of** mandating particular ground aids or on-board boxes. It replaces the old "must have two VORs and a DME" style of requirement with a stated performance the aircraft must meet **by whatever approved means it has**. (ICAO Doc 9613, the PBN Manual.)
- **Three building blocks — 🟩:** PBN rests on (1) the **navigation application** (the route/procedure in the airspace concept), (2) the **navigation specification** (the RNAV/RNP requirement the aircraft & crew must meet, e.g. RNP 4, RNP APCH), and (3) the **navigation infrastructure** (GNSS, DME, VOR, SBAS) that supports it.
- **Accuracy is a "95%" statement — 🟧:** a spec's number is the lateral accuracy the system must keep **for 95% of the flight time** — e.g. **RNP 1** = stay within **±1 NM** of centre-line 95% of the time; **RNP 4** = ±4 NM. The **containment** (the total-system-error bound the monitoring protects against, roughly 2× the value) is what keeps the aircraft inside protected airspace — which is why the RNP monitoring-and-alerting function matters.
- **Why it matters operationally — 🟥:** more airspace, routes and approaches are being built **PBN-only**; carrying the right, correctly-approved capability is a **dispatch gate**, not a nicety. A missing spec (or an out-of-limits GNSS prediction) can bar a routing or an approach even in fair weather.

---

## 4. RNAV vs RNP and the navigation-specification ladder

- **RNAV vs RNP — the defining line — 🟥:** both are **area navigation** (fly any desired path, not just station-to-station). The difference:
  - **RNAV** specifications require the **accuracy** but include **no requirement for the aircraft to monitor and alert** on its own navigation performance. Integrity is provided externally / by procedure.
  - **RNP** specifications add **on-board performance monitoring and alerting** — the system continuously checks its own performance and **warns the crew** if it cannot (or may not be able to) meet the required RNP. This self-awareness is why RNP supports tighter containment, curved paths and approaches.
  - **They are not interchangeable:** an "RNP" airspace/procedure may not be flown on RNAV-only capability, and vice-versa where a spec is named.
- **The ladder, by phase of flight — 🟧 (the airspace/AIP names the spec that applies, not this table):**

  | Phase | Spec(s) | Typical use |
  |---|---|---|
  | **Oceanic / remote** | **RNAV 10 (legacy "RNP 10")**, **RNP 4**, **RNP 2** | Oceanic tracks & remote continental; RNP 4 supports reduced (30/30 NM) oceanic separation with CPDLC/ADS-C; RNAV 10 needs no on-board monitoring (time-limited on IRS). **Operator authorisation — RNP 4 + RNAV 10/RNP 10 are authorised for capable widebodies** 🟩 [K Global OpsSpec 2026-07-25] |
  | **En-route (continental)** | **RNAV 5** (B-RNAV legacy), **RNP 2** | Continental/remote en-route airways |
  | **Terminal (SID/STAR)** | **RNAV 1 / RNAV 2**, **RNP 1** | Departures & arrivals; RNP 1 (with RF) for closely-spaced/obstacle terminal design |
  | **Approach** | **RNP APCH** → **LNAV**, **LNAV/VNAV**, **LPV**; **RNP AR APCH** | Instrument approaches; LPV (SBAS) gives ILS-like angular minima; RNP AR for the most demanding (§6) |

- **Naming caveats — 🟧:** **RNAV 10 is still labelled "RNP 10"** on many charts for legacy reasons even though it has **no on-board monitoring** (it is an RNAV spec) — do not read "RNP 10" as an RNP spec. **RNP APCH** was formerly "RNAV(GNSS)"; its minima lines are **LNAV** (lateral only, MDA), **LNAV/VNAV** (baro-VNAV vertical guidance, DA) and **LPV** (SBAS angular guidance, DA, lowest of the three).
- **Where each is used — 🟩:** the **airspace briefs** state which spec is required in each FIR/oceanic region, and the **airport briefs** state the approach specs available (and any "RNP AR not authorised" note) — this file defines the specs; the briefs place them. Do not carry a spec across from another region.
- **GLS (GBAS Landing System) — 🟩 [K Global OpsSpec 2026-07-25]:** **GLS approaches are authorised where both the aircraft type and the field support them.** GLS uses a **Ground-Based Augmentation System (GBAS)** ground station broadcasting differential-GPS corrections and integrity to fly an **ILS-like precision approach** (a coded procedure, selected from the database like any other approach, not hand-built) — currently CAT I-equivalent minima at most GBAS-equipped fields, with CAT II/III GBAS available at a small number. GLS is a **separate approach technology from RNP APCH/PBN** (it is not an RNP specification) and is listed here for approach-capability continuity; **per-type GLS receiver fit and per-field GBAS service availability remain type-/field-specific — verify before planning one** 🟧.

---

## 5. Sensors, equipage & RF legs

- **GNSS — the backbone — 🟥:** modern PBN (all RNP specs, RNAV 1/2 terminal, RNP APCH) is **GNSS-based**. The FMS blends GNSS with IRS and, where used, DME/DME to produce the navigation solution, but **GNSS provides the accuracy and (via ABAS/RAIM or SBAS) the integrity** for most specs. **GNSS availability is therefore a dispatch input** (§7).
- **ABAS / RAIM — 🟥:** **Aircraft-Based Augmentation System** — the receiver's own integrity check. **RAIM (Receiver Autonomous Integrity Monitoring)** uses redundant satellites to detect (and, with enough satellites, exclude — FDE) a faulty signal and to compute a **protection level**; if the protection level exceeds the required limit, RAIM annunciates loss of integrity. RAIM/ABAS is what lets a bare GNSS receiver meet an RNP integrity requirement.
- **SBAS — 🟧:** **Satellite-Based Augmentation System** (WAAS in the US, EGNOS in Europe, and others) broadcasts corrections + integrity, enabling **LPV** (angular, ILS-like vertical guidance) and improving availability. **SBAS coverage is regional** — LPV may be unavailable outside a covered region; confirm at planning.
- **DME-DME / IRU — 🟧:** where GNSS is not used or is unavailable, some **RNAV 1/2** operations are supported by **DME/DME** (two or more DMEs) and/or **inertial (IRU)** updating, provided the infrastructure supports the required accuracy. Oceanic **RNP 4/RNAV 10** rely on **IRS + GNSS**; RNAV 10 has an **inertial time limit** without GNSS updating. Confirm the type's approved sensor set.
- **RF legs — 🟥:** a **Radius-to-Fix** leg is a **defined constant-radius curved path** between two fixes (a precise arc, not a fly-by turn). It enables terrain/obstacle-avoiding curved approaches and closely-spaced routes. RF capability must be **certified**; per FAA guidance, **RF legs require an engaged autopilot or flight director** driven by the RNAV system, and RF is generally limited to **RNP 1 (and RNP AR)** procedures. Not all FMS/aircraft are RF-capable — **verify per type before planning an RF procedure.**
- **Functional requirements — 🟩:** specs also demand **functionality** — e.g. path-definition (fly-by/fly-over/RF), parallel-offset, holding, and (for RNP AR) specific display/alerting and dual-system architecture. A type can have the accuracy yet lack a required function.

---

## 6. RNP AR APCH — authorisation required

- **Type capability vs authorisation — 🟩:** **RNP AR APCH *capability* is a type fact** for all mainline K Global types — recorded 🟩 in the **Fleet Capability Matrix** (`../OM B Fleet/Fleet Capability Matrix.md`, Table B, "RNP AR APCH capable (type)"). The **operational authorisation** to fly RNP AR is now set by **OpsSpec batch 1 (2026-07-25)**: K Global is **authorised to RNP 0.3** for RNP-AR-capable types, where appropriate 🟩 [K Global OpsSpec 2026-07-25] — recorded in the matrix's "Operator RNP AR authorisation" column. Baseline **RNP APCH (LNAV / LNAV-VNAV)** is likewise type-baseline 🟩 across the fleet; the **operator RNP APCH authorisation is full — LNAV / LNAV-VNAV / LPV — for SBAS-equipped types** 🟩 [K Global OpsSpec 2026-07-25] (the underlying SBAS-fit fact per airframe stays 🟧, verify per tail). Cite the matrix for the per-type capability rather than restating it.
- **What makes it "AR" — 🟥:** **RNP Authorisation Required Approach** is the most demanding approach spec — it exploits **low RNP values (down to RNP 0.3 and, on the final/missed segments, as low as 0.1)**, **RF legs**, and paths threading terrain/obstacle-rich environments where there is **little or no margin for navigation error**. Because the containment is so tight and the consequences of exceedance so severe, it requires a **specific authorisation** — the aircraft, the crew and often the individual procedure must be qualified, not just "RNP-capable in general."
- **Aircraft requirements — 🟥:** dual (or fault-tolerant) GNSS/FMS with the required RNP monitoring & alerting, **RF-leg capability**, and — mandatory on RNP AR — an **engaged autopilot or flight director** flying the lateral (and where required vertical) path; specific display, alerting and go-around functionality. A single-thread navigation failure must not silently corrupt the path.
- **Crew requirements — 🟧:** **specific RNP AR training and qualification** (procedure characteristics, RNP-value monitoring, contingency for GNSS/RNP loss, missed-approach RNP), and briefing of the particular procedure's RNP, RF legs and go-around. Recency may apply — operator-specific.
- **Procedure & operator qualification — 🟥:** the operator holds an **RNP AR authorisation** (EASA Part-SPA / FAA OpsSpec/LOA per AC 90-101A), and specific procedures may require **individual validation**. **If K Global is not authorised for RNP AR at a given field, the RNP-AR procedure may not be flown** — many airport briefs will carry an explicit "RNP AR **not** authorised" note (§Cross-references). Fall back to the RNP APCH (LNAV/LNAV-VNAV/LPV) or conventional procedure.
- **Authorisation model — 🟩 [K Global OpsSpec 2026-07-25]:** K Global's RNP AR authorisation is administered as a **per-field authorisation list** — the operator is authorised to RNP 0.3 (§ above) **at named fields only**, with fields **added to the list as routes require** rather than a blanket network-wide grant. Confirm a destination/alternate is on the current authorised-field list (and that any individual procedure validation is complete) before planning an RNP AR approach there; absent a field, treat RNP AR there as **not authorised** and plan the RNP APCH/conventional fallback.
- **Contingency — 🟥:** loss of the required RNP (RNP alert, GNSS loss, an inability to hold the value) on an RNP AR segment demands an **immediate, pre-briefed go-around/missed** — the missed approach itself is often an RNP procedure, so the crew must know the RNP-loss missed-approach plan before commencing.

---

## 7. RAIM / GNSS prediction & outages

- **Why predict — 🟥:** because GNSS integrity depends on satellite geometry (which changes with time and location) and on the current constellation health, a **RAIM/GNSS-availability prediction** is required where continuity/integrity is not otherwise assured (e.g. non-SBAS RNP APCH, oceanic/remote GNSS-only). The prediction confirms the required integrity (RNP) **will be available** at the destination/alternate for the ETA window.
- **What the prediction must do — 🟥 (per FAA AC 90-105A):**
  - Use the **actual GNSS constellation** (and any NOTAM'd satellite outages), and the equipment's actual augmentation/algorithm (or a **more conservative** one).
  - Not use a **mask angle below 5°** (low-elevation signals are unreliable).
  - Show the **Horizontal Protection Level (HPL) < the required RNP value** for the operation.
  - Outside the US with SBAS, determine whether the ANSP monitors SBAS performance or whether a **RAIM prediction** is the appropriate integrity check; FAA RAIM-prediction data may be used via an approved third-party interface without altering performance values.
- **GNSS outages / NOTAMs — 🟥:** **GNSS/GPS outage NOTAMs** (testing, jamming, satellite unavailability) must be checked at planning — a predicted or NOTAM'd outage over the destination/alternate/approach window can **remove RNP APCH availability** and force a conventional-approach or diversion plan. GNSS interference (jamming/spoofing) in some regions is a growing operational item — treat a loss-of-RNP as briefed contingency, not a surprise.
- **In-flight — 🟧:** an RNP/GNSS alert in flight downgrades the achievable navigation — the crew reverts to the highest still-assured capability (e.g. RNP APCH → conventional, or RNP AR → RNP APCH/missed) and advises ATC. On oceanic RNP 4/2 the loss of the required performance is a **contingency** requiring an ATC advisory and possibly a track/level adjustment.

---

## 8. The approval matrix — capability, authorisation, currency

- **Each spec is separately authorised — 🟥:** holding RNP APCH does not confer RNP 4, and neither confers RNP AR. For **each** navigation specification the operation requires (1) a **certified aircraft capability** (AFM statement of the specs/functions supported, including RF and RNP-AR eligibility), (2) an **operator authorisation** for that spec (OpsSpec/LOA/Part-SPA where required — RNP AR and, in many states, RNP 4/oceanic explicitly), and (3) **crew qualification/currency** for the more demanding specs (RNP AR especially).
- **The dispatch gate — 🟥:** at planning, confirm the routing's/approach's required spec against **what the aircraft is certified for and the operator is authorised for**, run the **GNSS/RAIM prediction** where required, and check **GNSS outage NOTAMs** — before committing. A gap forces a re-route, a different approach, or a different aircraft.
- **The airspace/airport briefs place the requirement — 🟩:** which spec applies **where** lives in the **airspace briefs** (per FIR/oceanic region) and the **airport briefs** (approach specs available + RNP-AR authorisation notes). This file defines the matrix; the briefs populate it for each place. The operator PBN "authorised" column is now largely set — **RNP AR (RNP 0.3, per-field list)**, **RNP APCH (full, incl. LPV where SBAS)**, and **oceanic RNP 4 + RNAV 10/RNP 10 (capable widebodies)** are all 🟩 [K Global OpsSpec 2026-07-25]; RNP 1 terminal authorisation remains open (§Open items).

---

## Cross-references

- **RVSM Operations (OM E)** — the vertical (altimetry) counterpart to PBN's lateral performance; both are "monitored-performance" regimes that gate airspace access: `./RVSM Operations.md`
- **Low Visibility Operations (OM E)** — RNP APCH to **LPV / LNAV-VNAV** as the non-ILS route to low-DH minima; interaction with CAT I/II/III: `./Low Visibility Operations.md`
- **Datalink & Oceanic Procedures (OM E)** — **RNP 4** with CPDLC/ADS-C enables reduced oceanic separation; oceanic RNP contingency: `./Datalink and Oceanic Procedures.md`
- **ETOPS / EDTO Procedures (OM E)** — remote/oceanic diversion planning runs on the same RNP-navigated tracks: `./ETOPS-EDTO Procedures.md`
- **Airspace briefs** — which navigation specification applies in each FIR/oceanic region (RNP 4/2, RNAV 5, RNP 1, etc.): `../OM C Routes and Destinations/Airspace/…`
- **Airport briefs — arrival/approach sections** — approach specs available (RNP APCH LNAV/LNAV-VNAV/LPV) and any **"RNP AR not authorised"** notes: `../OM C Routes and Destinations/Airports/…` 🟧
- **Fleet Capability Matrix (OM B)** — the per-type PBN capability source (Table B): RVSM, RNP APCH LNAV / LNAV-VNAV / LPV, **RNP AR APCH capable (type)** and RNP 4/2/1 — all type facts 🟩; the **operator RNP AR authorisation** (RNP 0.3, per-field list), **operator RNP APCH authorisation** (full, incl. LPV where SBAS) and **operator oceanic RNP 4 + RNAV 10/RNP 10 authorisation** (capable widebodies) are now set 🟩 [K Global OpsSpec 2026-07-25]. Cite it rather than restating per-type values: `../OM B Fleet/Fleet Capability Matrix.md`
- **Airframe navigation capability** — the type's certified PBN specs, GNSS/SBAS fit, RF-leg and RNP-AR eligibility, sensor set: `../OM B Fleet/…` (verify per type) 🟧

---

## Open items (🟧 — confirm)

- **Operator PBN authorisation matrix** — RNP AR APCH and RNP APCH RESOLVED by OpsSpec batch 1 (2026-07-25): **RNP AR authorised to RNP 0.3** for RNP-AR-capable types, and **RNP APCH authorised full (LNAV/LNAV-VNAV/LPV)** for SBAS-equipped types 🟩. **Oceanic/remote PBN RESOLVED by OpsSpec batch 2 (2026-07-25): RNP 4 + RNAV 10/RNP 10 authorised** for capable widebodies 🟩; and the **RNP AR authorisation model is confirmed as a per-field authorisation list**, built as routes require 🟩. Still open: **RNP 1 terminal** authorisation, and the actual **RNP AR authorised-field list** (§ below).
- **Per-type PBN capability** — the **type facts** (RNP APCH LNAV/LNAV-VNAV, **RNP AR APCH capable**, RNP 4/2/1, RVSM) are now in the Fleet Capability Matrix (Table B) — cite it. What remains 🟧: the **LPV/SBAS fit** (config-dependent per airframe — verify per tail before asserting LPV), the **RF-leg** fit, and the approved sensor set (GNSS-only vs DME-DME/IRU vs IRS+GNSS oceanic). The **RNP AR operational authorisation** and **RNP APCH operational authorisation** are now set (OpsSpec batch 1) — feed §5/§6/§8.
- **RAIM/GNSS-prediction tool & SOP** — the operator-approved prediction source and the dispatch procedure (HPL < RNP, ≥ 5° mask), plus the GNSS-outage-NOTAM screening step.
- **RNP AR field list** — the **authorisation model is now confirmed as per-field** (OpsSpec batch 2, 2026-07-25): fields are added to K Global's authorised-field list as routes require. The actual list of which destinations/alternates are on it, and the corresponding "RNP AR not authorised" notes in the airport briefs, remain to be populated.
- **ICAO Doc 9613 edition** — confirm the current (Fifth Edition, 2023) numbering for the spec definitions referenced from summaries.
- **Reduced-oceanic-separation eligibility** — RNP 4 + CPDLC/ADS-C for 30/30 NM — confirm fit and cross-link the datalink/oceanic doc.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. Subscription/in-sim material (SimBrief, charts, AFM/FCOM, PBN OpsSpec) may inform content but is not listed. Durable policy — no live GNSS-prediction/NOTAM data stored here.*

- **ICAO Doc 9613 — Performance-Based Navigation (PBN) Manual, 5th Ed. 2023** — PBN concept (nav application / specification / infrastructure), RNAV vs RNP (on-board performance monitoring & alerting), the navigation-specification ladder, RNP AR APCH/DP — summarised via the freely-hosted PBN Portal copy https://pbnportal.eu/dam/jcr:ca055ef7-5fa7-45e1-b4ee-7319dbc486b6/9613_unedited_en_V5.pdf and SKYbrary (retrieved 2026-07-25).
- **SKYbrary — Performance Based Navigation (PBN)** — PBN definition, RNAV vs RNP distinction, nav-spec ladder and phase-of-flight mapping — https://skybrary.aero/articles/performance-based-navigation-pbn (retrieved 2026-07-25).
- **FAA Advisory Circular 90-105A — Approval Guidance for RNP Operations and Barometric VNAV in the U.S. NAS and in Oceanic and Remote Continental Airspace** — RNP operations, RAIM/GNSS-availability prediction (HPL < RNP, ≥ 5° mask, actual constellation, NOTAM outages), baro-VNAV — https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_90-105A_Ed_Update_2.pdf (retrieved 2026-07-25).
- **FAA Advisory Circular 90-101A (CHG 1) — Approval Guidance for RNP Procedures with AR** — RNP AR APCH authorisation, aircraft/crew requirements, RF legs (autopilot/FD required; RF limited to RNP 1), low RNP (0.1) — https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC%2090-101A.pdf (retrieved 2026-07-25).
- **FAA — RNP AR Application Guide** — practical RNP AR aircraft/operator/procedure qualification detail — https://www.faa.gov/sites/faa.gov/files/about/office_org/headquarters_offices/avs/RNP_AR_AG.pdf (retrieved 2026-07-25).
- **UK CAA — Technical specifications and applications for PBN** — nav-spec applications by phase of flight (RNAV 10/RNP 4/RNP 2/RNAV 5/RNAV 1-2/RNP 1/RNP APCH/RNP AR) — https://www.caa.co.uk/commercial-industry/airspace/communication-navigation-and-surveillance/performance-based-navigation/technical-specifications-and-applications-for-performance-based-navigation/ (retrieved 2026-07-25).
- **ICAO Annex 6 — Operation of Aircraft, Part I** — PBN carriage/approval requirement framework — summarised via SKYbrary (ICAO not freely hosted) https://skybrary.aero/articles/performance-based-navigation-pbn (retrieved 2026-07-25).
- **EASA — Part-SPA Subpart PBN / AMC-20 (RNP AR, PBN)** — EU PBN & RNP AR operational-approval framework — https://www.easa.europa.eu/en/document-library (AMC-20 collection; retrieved 2026-07-25) 🟧 confirm current amendment.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1.4 | 2026-07-25 | OpsSpec batch 3: TA/TL published, GLS where supported, EFB perf authorised, derate ≤25%, PIC extra-fuel discretion, tankering ≥10% guideline. |
| v0.1.3 | 2026-07-25 | OpsSpec batch 2: operator approvals set (RVSM all mainline, oceanic RNP4+RNP10, NAT HLA, CPDLC/ADS-C FANS, PBCS, cold-temp correction crew+FMS, flex/derate takeoff, MMEL baseline, autoland currency, RNP-AR per-field). |
| v0.1.2 | 2026-07-25 | OpsSpec batch 1: operator-approval values set (EDTO 180/120, LVO CAT IIIB/I, LVTO 125m, RNP AR 0.3, RNP APCH+LPV, contingency 5%/ERA, final reserve 30 min, tankering case-by-case; steep approach deferred). |
| v0.1.1 | 2026-07-25 | Wired per-type capability facts to the Fleet Capability Matrix (operator-approval values remain pending OpsSpec). Referenced matrix Table B for **RNP AR APCH capability by type** (type fact 🟩, all mainline types) and baseline RNP APCH; RNP AR operational authorisation held 🟧 [operator — VERIFY], resolved via OpsSpec not the matrix. |
| v0.1 | 2026-07-25 | Initial draft. OM E — Operations location-agnostic procedure for PBN & RNP. Defines the PBN concept (performance not sensors; application/specification/infrastructure), the RNAV vs RNP distinction (on-board monitoring & alerting), the navigation-specification ladder mapped to phase of flight (RNAV 10/RNP 10, RNP 4, RNP 2, RNAV 5, RNAV 1/2, RNP 1, RNP APCH → LNAV/LNAV-VNAV/LPV, RNP AR APCH), sensors/equipage (GNSS/SBAS/RAIM/ABAS, DME-DME/IRU), RF legs, RNP AR special authorisation & requirements, RAIM/GNSS prediction & outages, and the approval-matrix concept. Built from ICAO Doc 9613 (5th Ed.) + FAA AC 90-105A & 90-101A + UK CAA + EASA + SKYbrary. Cross-linked to RVSM, Low Visibility, Datalink/Oceanic, ETOPS-EDTO, airspace & airport briefs and airframe nav capability. Operator PBN authorisation matrix, per-type capability, RAIM-prediction SOP and RNP-AR field list flagged open. |
