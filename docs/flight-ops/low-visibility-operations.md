# Low Visibility Operations — OM E Procedure

**Scope:** Location-agnostic capability/procedure policy for **Low Visibility Operations (LVO)** — the definition and aerodrome triggers for **Low Visibility Procedures (LVP)**, the precision-approach categories (**CAT I / II / IIIA / IIIB / IIIC**) and the *concepts* of their decision-height (DH) and RVR minima, fail-passive vs fail-operational autoland, RVR reporting (TDZ/MID/rollout) and the RVR↔met-visibility relationship, **Low Visibility Take-Off (LVTO)**, the **approach ban**, aerodrome LVP protection (ILS sensitive/critical areas, stop bars, localiser guarding), and the aircraft/crew/aerodrome prerequisites & currency that gate the whole operation. Applies to K Global's autoland-capable widebody types. An airport brief *applies* these minima to a place; this file *defines* the method. Sim context: X-Plane 11 / SimBrief.
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — public-source-verified (ICAO Annex 6 / Doc 9365 · EASA CAT.OP.MPA / SPA.LVO / AMC-20 · FAA AC 120-28 / 120-29A · SKYbrary); type- and state-specific numbers flagged 🟧.

> **Read-me — regime & scoping (read first):** This is an **OM E Operations** procedure (capability/method), **not** a chart, a clearance, or an operator low-visibility approval. It states the LVO *concepts* and how K Global gates a low-visibility approach, autoland or take-off. The **actual DH/RVR minima for a given runway come from the approach chart and the operator's approved aerodrome operating minima (AOM), pulled at planning** — this file tabulates no state minima. Live data (current RVR, whether LVP is *active* at the field, serviceability of ground aids) is pulled at dispatch and in flight; this file is durable policy only. Aircraft autoland certification (fail-passive vs fail-operational, the tested DH, wind/system limits) is type-specific — verify against the AFM/FCOM, not this page. Flag legend: 🟥 hard requirement/hazard · 🟧 caution/unverified/type- or state-specific · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| What LVO is | Operations in visibility/cloud-base too low for normal ops — ICAO-typed as an **approach with RVR < 550 m and/or DH < 60 m (200 ft)**, or a **take-off in RVR < 400 m** 🟥 |
| What LVP is | The **aerodrome's** procedures that protect and safeguard CAT II/III approaches and LVTO — activated by the ANSP/aerodrome, **not** by the crew (§3) |
| LVP activation trigger | State/aerodrome-specific — typically when **RVR falls to ≈550–800 m and/or ceiling ≈200–300 ft**, or as published in the AIP; **confirm at the field — pull the ATIS** 🟧 |
| Approach categories | **CAT I** (DH ≥ 200 ft, RVR ≥ 550 m) · **CAT II** (DH 100–200 ft, RVR ≥ 300 m) · **CAT IIIA/B/C** (DH < 100 ft or no DH, RVR to zero) — concepts only; **read the chart** (§4) |
| Radio-altimeter basis | 🟥 CAT II/III DH is flown against the **radio altimeter** (height above terrain in the undershoot), never baro |
| Autoland integrity | **Fail-passive** (no significant out-of-trim on a single failure — still needs a DH) vs **fail-operational** (completes the landing after a single failure — enables CAT IIIB/no-DH) 🟥 (§5) |
| RVR reporting | Up to three positions — **Touchdown (TDZ) · Mid · Rollout**; **TDZ is controlling**; MID/rollout become controlling as the roll proceeds (§6) |
| LVTO | Take-off in **RVR < 550 m**; below **400 m** needs a **specific approval** and LVP active; low-end LVTO needs RVR reporting + additional lighting/RCLM (§7). **K Global's approved LVTO minimum RVR is 125 m** 🟩 [K Global OpsSpec 2026-07-25] |
| Approach ban | 🟥 May not continue an approach **past the outer marker / ~1000 ft** (or the applicable fix) if the **controlling RVR is below minimum** (§8) |
| Illustrative context | Any autoland-capable K Global widebody dispatched to a CAT II/III field via SimBrief; specific minima pulled from the arrival chart at planning |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| LVO / LVP definitions (RVR 550 m / DH 200 ft / TO 400 m) | 🟩 | Sourced (ICAO Annex 6 / Doc 9365; SKYbrary LVP). LVP = the aerodrome's safeguarding procedures for CAT II/III & LVTO. |
| Approach category DH/RVR bands | 🟧 | Category *definitions* sourced; the **operative minima for a runway come from the chart + operator AOM** — not tabulated here. State/operator credit varies. |
| Radio-altimeter DH basis (CAT II/III) | 🟥 | CAT II/III always flown to a radalt DH referenced to the undershoot terrain. Sourced (SKYbrary Precision Approach). |
| Fail-passive vs fail-operational autoland | 🟥 | Distinction sourced (FAA AC 120-28/120-29A). Fail-operational (or a fail-operational HUD) is the enabler for CAT IIIB / no-DH. Type-specific — verify AFM. |
| RVR positions & controlling rule | 🟩 | TDZ/MID/rollout; TDZ controlling for the approach. Sourced. |
| RVR ↔ met-visibility | 🟧 | RVR is instrument-measured along the runway and is **not interchangeable** with met/reported visibility; conversion factors are for planning only, not for the approach ban. |
| LVTO thresholds (550 / 400 m + approval) | 🟩 | Sourced (EASA SPA.LVO / CAT.OP.MPA; SKYbrary). Sub-400 m needs specific approval; low-end needs RVR + lighting. |
| Approach ban | 🟥 | Continue past ~1000 ft / OM only if controlling RVR ≥ minimum. State-specific fix/height — verify. |
| LVP aerodrome protection (sensitive/critical areas, stop bars) | 🟥 | ILS-protected areas must be clear; illuminated stop bars must not be crossed. Sourced (SKYbrary LVP / ILS). |
| Crew/aircraft/aerodrome prerequisites & currency | 🟧 | Three-legged gate (aircraft cert + crew qual/recency + aerodrome LVP & aids). Numeric recency intervals operator-specific — verify. |

---

## 3. Definitions — LVO, LVP and who activates what

- **Low Visibility Operations (LVO) — the *operation* — 🟥:** ICAO/EASA type LVO as approach-and-landing operations flown in conditions where **RVR < 550 m and/or DH < 60 m (200 ft)**, plus take-offs in **RVR < 400 m**. LVO is what the *aeroplane and crew* do; it demands specific aircraft certification, crew qualification and (for CAT II/III/low-end LVTO) a protected aerodrome.
- **Low Visibility Procedures (LVP) — the *aerodrome* safeguard — 🟥:** the set of procedures **applied by the aerodrome/ANSP** to protect aircraft and vehicles during CAT II/III approaches and LVTO — increased separation on the manoeuvring area, ILS sensitive/critical-area protection, stop-bar discipline, restricted vehicle/aircraft movement, and standby-power provisions. **LVP is activated by the aerodrome, not the crew** — the crew's job is to know **whether LVP is active** (ATIS/ATC), because most low-visibility credit is unavailable when it is not.
- **The activation trigger — 🟧 (field-specific):** aerodromes publish the RVR/ceiling values at which they **prepare** and then **activate** LVP — commonly staged (e.g. "LVP in force" when RVR falls toward ~550–800 m and/or ceiling toward ~200–300 ft), with the exact figures in the AIP/AD. **Do not assume** — confirm "LVP in force" from the ATIS/ATC before planning a CAT II/III arrival, and expect reduced arrival/departure rates when it is.
- **Why LVP matters to the crew — 🟥:** without active LVP the ILS **sensitive/critical areas are not protected**, so a taxiing aircraft or vehicle can distort the localiser/glidepath beam. CAT II/III (and the lowest-RVR LVTO) credit is therefore only available with **LVP active and the required ground aids serviceable**.
- **Relationship to PBN approaches:** RNP APCH to **LPV / LNAV-VNAV** minima gives low-DH capability **without** an ILS, but the very lowest minima (CAT IIIB / no-DH) remain an **ILS + autoland** domain. LPV and CAT I are broadly comparable in the ~200 ft DH region; see `./PBN and RNP Operations.md`.

---

## 4. Approach categories & the DH/RVR minima *concept*

**The categories describe how low the approach may be flown; the operative numbers for a given runway come from the chart + the operator AOM — this section states concepts, not state minima.** 🟧

- **CAT I — 🟩:** a precision approach to a **decision height not below 200 ft (60 m)** and an **RVR not less than 550 m** (or a comparable visibility). Baro or radalt DH per the procedure. Standard ILS/LPV capability; no special aerodrome LVP strictly required for CAT I, though low-end CAT I in poor vis may see LVP staged.
- **CAT II — 🟥:** a precision approach to a **DH below 200 ft but not below 100 ft**, with **RVR typically ≥ 300 m** (state/credit-dependent). **DH is flown on the radio altimeter.** Requires LVP active, a serviceable ILS to CAT II standard, and CAT II crew/aircraft qualification.
- **CAT III — 🟥 (three sub-categories):**
  - **CAT IIIA** — DH below 100 ft (or no DH) with **RVR ≥ ~200 m**.
  - **CAT IIIB** — DH below 100 ft (or no DH) with **RVR ≥ ~50–75 m** — the domain of **fail-operational autoland** (or fail-operational HUD-to-touchdown).
  - **CAT IIIC** — **no DH and no RVR limitation** (zero/zero). No aerodrome is currently authorised or equipped for routine CAT IIIC operations; treat as a **theoretical ceiling** 🟧.
- **Decision height vs alert height — 🟧:** a **no-DH** operation (parts of CAT IIIB) uses an **alert height** — a radalt height below which the approach/landing/rollout will be completed unless certain failures make the automatic system no longer fail-operational. Above the alert height, a relevant failure means go-around; below it, the landing continues. Alert height is a **fail-operational** concept.
- **RVR minima are not interchangeable between categories or states — 🟥:** the same runway can offer different minima to different operators depending on aircraft capability, crew qualification and the ground-aid/lighting fit. **Always read the specific approach chart and the operator's AOM for the runway in use — do not carry a number across from another field.**

---

## 5. Autoland — fail-passive vs fail-operational, limits & go-around

- **Why autoland — 🟥:** below CAT I minima the human cannot reliably acquire the visual segment in time to hand-fly the flare; the **automatic landing system** (or a fail-operational HUD) flies the aircraft to touchdown and, for CAT III, through the rollout. Autoland capability is **type- and configuration-specific**.
- **Lowest autoland/approach capability by type — 🟩 (type fact, per the Fleet Capability Matrix `../OM B Fleet/Fleet Capability Matrix.md`, Table C):** the fleet's **lowest certified** autoland level is a type fact — the matrix records **CAT IIIB fail-operational** for the mainline widebodies and A319/A320/A21N, **CAT IIIB (fail-operational / HUD-dependent config)** for B738 and B77W (delivered configuration to confirm 🟧), and **CAT III autoland** for BCS3 (A220). Cite the matrix for the per-type capability. The **operator's lowest approved LVO landing capability (OpsSpec batch 1, 2026-07-25)** is now set 🟩 [K Global OpsSpec 2026-07-25]: **CAT IIIB** where the type is fail-operational (most widebodies + BCS3 + the narrowbody twins), and **CAT I** where the type is not confirmed fail-operational for the delivered configuration (B738 — HUD-dependent). The **approved LVTO minimum RVR is 125 m** fleet-wide 🟩 [K Global OpsSpec 2026-07-25]. These values are set against the runway's LVP status at the field (still pulled live at dispatch); the matrix carries the per-type resolution, not this file.
- **Fail-passive (fail-soft) — 🟥:** on any single failure the automatic system causes **no significant out-of-trim or deviation**, but **does not complete** the landing — the crew must take over. A fail-passive system therefore still requires a **DH** (typically CAT II or CAT IIIA territory) so the crew can see to land or go around.
- **Fail-operational — 🟥:** after a single failure below alert height the system **completes** the approach, landing and rollout (usually via triple/dual-dual redundancy). Fail-operational (or a fail-operational HUD guidance system) is the **enabler for CAT IIIB and no-DH** operations.
- **Autoland limits — 🟥 (verify per type in the AFM/FCOM):** autoland is only valid within the **demonstrated envelope** — headwind/tailwind/crosswind limits (autoland crosswind limits are usually **tighter** than the manual limit), runway slope, glidepath angle band, required ILS category and beam quality, temperature/altitude, and system status (both APs engaged, both radalts, etc.). **Outside any of these, autoland is not authorised** — revert to a higher minimum or divert.
- **Ground effects — 🟥:** a **CAT II/III ILS beam is only guaranteed with LVP active and the sensitive/critical areas clear** (§9). An unprotected beam (traffic/vehicle in the critical area, or a Cat I-only ILS) is **not** valid for autoland to low minima.
- **Go-around from autoland — 🟥:** an automatic (or manual) go-around must be available and briefed at **any point** including after touchdown (baulked landing). Below alert height on a fail-operational approach the automatics continue the landing rather than reject; the crew briefs the specific failure logic. Rehearse the missed approach — in CAT III the initial go-around is largely head-down on instruments until climb-out.
- **Autoland-use policy — 🟩 [K Global OpsSpec 2026-07-25]:** autoland is **mandatory in CAT III** (no DH/alert-height operations require it) and is additionally **permitted for currency practice at suitable CAT I (or better) fields** — i.e. crews may fly an autoland in good weather at a field offering an adequate ILS/autoland-suitable runway, specifically to maintain autoland currency/recency, subject to the type's autoland envelope (§ above) and normal ATC/traffic considerations.

---

## 6. RVR reporting & the RVR ↔ met-visibility relationship

- **What RVR is — 🟩:** **Runway Visual Range** is an **instrument-derived** value (transmissometer or forward-scatter meter, adjusted for runway-light intensity) representing the distance a pilot can see **runway markings/lights along the runway** — it is *not* a human met observation and is specific to the runway.
- **Three reporting positions — 🟥:** RVR is reported for up to three points along the runway — **Touchdown zone (TDZ) · Midpoint (MID) · Rollout (stop end)**. **TDZ RVR is controlling for commencing/continuing the approach.** As the landing roll proceeds, **MID and then rollout become controlling** for that phase; low minima usually require **all applicable positions** to be at or above their required values.
- **RVR is measured, met-visibility is reported — 🟧 (don't conflate):** RVR and the aerodrome/met "prevailing visibility" are **different quantities** and are **not interchangeable for the approach ban**. Conversion factors (met-vis → RVR, varying by day/night and light intensity) exist **for planning estimates only** — when RVR is reported, **RVR governs**; a met-vis-to-RVR conversion may **not** be used to satisfy CAT II/III or the approach ban.
- **RVR availability gates the category — 🟥:** CAT II/III (and low-end LVTO) may **not** be flown unless the required RVR reports are **available** — loss of the TDZ transmissometer can down-grade the achievable minima even if the weather itself has not changed. Confirm the reporting fit for the runway.

---

## 7. Low Visibility Take-Off (LVTO)

- **Definition — 🟥:** a take-off with **RVR below 550 m**. Unlike an approach, an LVTO has **no DH** — the constraint is seeing enough of the runway to keep straight and to reject safely.
- **Approval & RVR bands — 🟥 (concepts; operator value now set):**
  - Down to ~**400 m** RVR: typically permitted with adequate runway markings/lighting and the standard operator qualification.
  - **Below 400 m** RVR: requires a **specific low-visibility approval** (EASA Part-SPA / operator OpsSpec), **LVP active**, RVR reporting available at the relevant positions, and enhanced runway aids.
  - The lowest LVTO minima (well below 200 m) require **runway centre-line lighting and markings (RCLM)**, multiple RVR reports and, at the low end, additional guidance — exact steps are **state/approval-specific**.
  - **K Global's approved LVTO minimum RVR is 125 m** 🟩 [K Global OpsSpec 2026-07-25] — the operator floor below which no take-off may be planned or commenced, regardless of runway aids.
- **Requirements that scale down with RVR — 🟥:** as LVTO RVR reduces, the required package grows: **serviceable centre-line lights**, **runway edge lights**, **multiple RVR readouts**, **LVP in force**, and crew take-off/RTO briefing tuned to reduced visual cues (initial guidance on the ILS/localiser or the flight-director/HUD as approved).
- **Take-off alternate interaction — 🟧:** when the departure aerodrome is at/below landing minima (which an LVTO field usually is), a **take-off alternate** within the required time/distance and above its own minima must be nominated — LVTO does not remove that requirement (see the dispatch policy in the airframe brief).
- **RTO discipline — 🟥:** brief the reject; in low RVR the visual cues to detect a directional problem or to stop on the remaining runway are minimal, so decision-speed discipline and centre-line tracking are paramount.

---

## 8. The approach ban

- **The rule — 🟥:** an approach may be **commenced** in any reported conditions, but it may **not be continued below a defined point** — commonly the **outer marker / final approach fix, or ~1000 ft above the aerodrome** where no marker exists — **if the controlling RVR/visibility is below the applicable minimum** for the approach being flown. State-specific fix/height — verify against the operator AOM.
- **What "controlling" means — 🟥:** the **TDZ RVR** (and any other required position) at the moment the aircraft reaches the ban point. If it is below minimum at that point, the crew must **go around**; a subsequent improvement does not retroactively authorise the continued approach.
- **The narrow exception — 🟧:** many states allow continuation past the ban point if the aircraft was **already below it** when the RVR dropped, or grant limited relief when only a non-controlling position is momentarily low — the precise wording is **state/operator-specific** and must be taken from the AOM, not assumed.
- **Why it exists — 🟩:** it prevents "chasing" a marginal RVR down to the runway and ensures the go-around decision is made from a stabilised, briefed position rather than improvised in the flare.

---

## 9. Aerodrome LVP protection — ILS areas, stop bars, guarding the localiser

- **ILS sensitive & critical areas — 🟥:** the ILS beam can be **bent** by large reflecting objects (aircraft, vehicles). Two zones protect it:
  - **Critical area** — no vehicle/aircraft may enter while a CAT II/III approach uses the beam (guaranteed protection).
  - **Sensitive area** — a larger zone where movements are **restricted** because a taxiing widebody can still disturb the beam.
  With LVP active, ATC holds traffic clear of these areas for each low-visibility approach — which is exactly why **CAT II/III credit requires LVP in force**.
- **Stop bars — 🟥:** illuminated **red stop bars** at runway-holding positions must **never be crossed when lit**, even with a clearance — a lit stop bar in LVP is an absolute hold. Selectable stop bars and the associated lead-on lighting are part of the low-visibility taxi guidance.
- **Guard the localiser — 🟥:** flight crews and vehicles must vacate/hold **short of the ILS critical/sensitive area boundaries** (the "CAT II/III holding position") rather than the normal CAT I hold, so a preceding movement does not spoil the beam for the aircraft on approach. Follow the LVP taxi routing and lit centre-line/stop-bar guidance.
- **Standby power & serviceability — 🟧:** LVP requires the safeguarded lighting (approach, runway, taxiway, stop bars) and the ILS to be on **secured/standby power** with the required serviceability; a lighting or ILS downgrade can reduce the achievable minima even with LVP nominally active. Field-specific LVP notes (holding positions, low-vis taxi routes, downgrade behaviour) live in the **airport brief's arrival/LVP section**, not here.

---

## 10. Prerequisites & currency — the three-legged gate

A low-visibility approach or LVTO is only authorised when **all three** legs are simultaneously satisfied — remove any one and the operation reverts to the next-higher minimum.

- **Aircraft — 🟥:** the type is **certified** for the intended category (fail-passive → CAT II/IIIA; fail-operational → CAT IIIB/no-DH), the required systems are **serviceable** (both APs/FDs, radio altimeters, autothrust, relevant ILS receivers), and the operation is **within the AFM autoland envelope** (§5). Any MEL item touching the autoland/CAT III fit must be screened against the intended minima.
- **Crew — 🟧:** qualified and **current/recent** for the category — initial LVO training + recurrent checks, and a **recency requirement** (e.g. a CAT II/III approach or autoland, hand-flown/monitored, within a rolling window) beyond which the crew reverts to CAT I until re-established. Exact intervals are operator-specific — verify. Both pilots brief the specific DH/alert-height, RVR, failure and go-around logic.
- **Aerodrome — 🟥:** **LVP active**, the runway offers the intended category (ILS category, lighting fit, RVR reporting at the required positions), and the sensitive/critical areas are protected. If the field cannot provide the category (no LVP, ILS downgrade, RVR unavailable), the achievable minimum steps up.
- **Dispatch discipline — 🟥:** at planning, confirm the destination (and take-off/en-route alternates as applicable) can realistically support the forecast conditions to the intended minima, that the aircraft/crew hold the qualification, and that a suitable alternate exists for a CAT II/III destination whose weather is marginal. Pull the current ATIS/RVR at top-of-descent to confirm LVP and the controlling RVR before commencing.

---

## Cross-references

- **PBN & RNP Operations (OM E)** — RNP APCH to **LPV / LNAV-VNAV** low-DH minima as the non-ILS route to low weather, and the sensor/equipage that supports it: `./PBN and RNP Operations.md`
- **RVSM Operations (OM E)** — unrelated altimetry regime, but shares the "two independent, monitored systems" philosophy: `./RVSM Operations.md`
- **ETOPS / EDTO Procedures (OM E)** — alternate planning-minima add-ons interact with LVO alternate selection: `./ETOPS-EDTO Procedures.md`
- **Airport briefs — arrival / LVP sections** — field-specific LVP activation values, CAT II/III holding positions, low-visibility taxi routes and downgrade behaviour: `../OM C Routes and Destinations/Airports/…` 🟧
- **Fleet Capability Matrix (OM B)** — the per-type **lowest autoland/approach capability** (Table C: CAT IIIB fail-operational across most of the fleet; CAT III for BCS3; B738/B77W HUD/config-dependent) as a type fact; the **operator LVO minima** column is now set 🟩 [K Global OpsSpec 2026-07-25] (CAT IIIB fail-op / CAT I) and the LVTO minimum RVR is 125 m fleet-wide. Cite it rather than restating per-type values: `../OM B Fleet/Fleet Capability Matrix.md`
- **Airframe autoland capability** — the type's CAT II/III certification, fail-passive vs fail-operational status, autoland wind/system limits and MEL provisions: `../OM B Fleet/…` (verify per type) 🟧

---

## Open items (🟧 — confirm)

- **Per-type autoland certification** — the **lowest certified category** per type is now in the Fleet Capability Matrix (Table C) — cite it. What remains 🟧: the **B738 / B77W fail-operational detail** (HUD- vs dual-channel-dependent delivered config), and the per-type DH/alert height, autoland crosswind & tailwind limits and serviceable-systems list. Feed §5/§10.
- **Operator LVO approval scope** — RESOLVED by OpsSpec batch 1 (2026-07-25): lowest approved LVO landing capability is **CAT IIIB** (fail-operational types) / **CAT I** (B738, delivered-config not confirmed fail-operational); approved **LVTO minimum RVR is 125 m** 🟩. See the Fleet Capability Matrix Table C.
- **Crew recency intervals** — the exact CAT II/III and autoland recency window and the reversion rule; codify the SOP.
- **State/AOM approach-ban wording** — the precise ban fix/height and any continuation exception per operating state.
- **Aerodrome LVP activation values** — captured per field in the airport briefs; confirm the ATIS phraseology and staged trigger values as briefs are built.
- **RVR↔met-vis conversion table** — the operator-approved conversion (planning only) and confirmation it is barred for the approach ban.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. Subscription/in-sim material (SimBrief, charts, AFM/FCOM) may inform content but is not listed. Durable policy — no live RVR/ATIS/minima data stored here.*

- **SKYbrary — Low Visibility Procedures (LVP)** — LVO/LVP definitions (approach RVR < 550 m and/or DH < 60 m; take-off RVR < 400 m), aerodrome safeguarding, ILS sensitive/critical-area protection, stop bars — https://skybrary.aero/articles/low-visibility-procedures-lvp (retrieved 2026-07-25).
- **SKYbrary — Precision Approach** — CAT I/II/III definitions, radio-altimeter DH basis for CAT II/III, RVR requirement for CAT II/III — https://skybrary.aero/articles/precision-approach (retrieved 2026-07-25).
- **ICAO Annex 6 — Operation of Aircraft, Part I** — all-weather operations, aerodrome operating minima, LVO definitions and approval framework — summarised via SKYbrary (ICAO not freely hosted): https://skybrary.aero/articles/low-visibility-procedures-lvp (retrieved 2026-07-25).
- **ICAO Doc 9365 — Manual of All-Weather Operations** — LVO concepts, category definitions, autoland, RVR — referenced via SKYbrary summaries (retrieved 2026-07-25).
- **EASA — Part-SPA Subpart LVO (SPA.LVO) & CAT.OP.MPA (aerodrome operating minima) / AMC-20** — LVTO thresholds (550 m; specific approval below 400 m), CAT II/III approval, RVR reporting, approach ban — https://skybrary.aero/sites/default/files/bookshelf/2119.pdf (AMC1 SPA.LVO.100 extract) and EASA AMC-20 collection https://www.easa.europa.eu/en/document-library (retrieved 2026-07-25) 🟧 confirm current amendment.
- **FAA Advisory Circular 120-28D — Criteria for Approval of Category III Weather Minima for Takeoff, Landing, and Rollout** — fail-operational autoland/rollout, no-DH & alert-height concepts — https://www.faa.gov/regulations_policies/advisory_circulars (AC 120-28; retrieved 2026-07-25) 🟧 confirm current revision.
- **FAA Advisory Circular 120-29A — Criteria for Approval of Category I and Category II Weather Minima for Approach** — CAT I/II approval, fail-passive autoland, DH/RVR — https://www.faa.gov/regulations_policies/advisory_circulars (AC 120-29A; retrieved 2026-07-25).
- **SKYbrary — Instrument Landing System (ILS) / ILS Localizer / Critical & Sensitive Areas** — beam protection, LVP interaction with ILS category — https://skybrary.aero/articles/instrument-landing-system-ils (retrieved 2026-07-25).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1.3 | 2026-07-25 | OpsSpec batch 2: operator approvals set (RVSM all mainline, oceanic RNP4+RNP10, NAT HLA, CPDLC/ADS-C FANS, PBCS, cold-temp correction crew+FMS, flex/derate takeoff, MMEL baseline, autoland currency, RNP-AR per-field). |
| v0.1.2 | 2026-07-25 | OpsSpec batch 1: operator-approval values set (EDTO 180/120, LVO CAT IIIB/I, LVTO 125m, RNP AR 0.3, RNP APCH+LPV, contingency 5%/ERA, final reserve 30 min, tankering case-by-case; steep approach deferred). |
| v0.1.1 | 2026-07-25 | Wired per-type capability facts to the Fleet Capability Matrix (operator-approval values remain pending OpsSpec). Referenced matrix Table C for **lowest autoland/approach capability by type** (CAT IIIB fail-operational across the fleet; CAT III BCS3; B738/B77W HUD/config-dependent 🟧); operator LVO minima held 🟧 [operator — VERIFY], resolved via OpsSpec not the matrix. |
| v0.1 | 2026-07-25 | Initial draft. OM E — Operations location-agnostic procedure for Low Visibility Operations. Defines LVO vs LVP and the aerodrome activation trigger, the CAT I/II/IIIA/B/C category *concepts* and radio-altimeter DH basis (no state minima tabulated — chart-referenced), fail-passive vs fail-operational autoland and limits/go-around, RVR reporting (TDZ/MID/rollout) and the RVR↔met-vis distinction, LVTO thresholds & scaling requirements, the approach ban, aerodrome LVP protection (ILS sensitive/critical areas, stop bars, localiser guarding), and the aircraft/crew/aerodrome three-legged prerequisite & currency gate. Built from ICAO Annex 6 / Doc 9365 + EASA SPA.LVO / CAT.OP.MPA / AMC-20 + FAA AC 120-28/120-29A + SKYbrary. Cross-linked to PBN & RNP, RVSM, ETOPS-EDTO, airport-brief LVP sections and airframe autoland capability. Per-type autoland certification, operator LVO approval scope, crew recency and state approach-ban wording flagged open. |
