# Short & Limited Runway Operations — OM E Procedure

**Scope:** Location-agnostic capability/procedure policy for **field-length-limited takeoff & landing** — the declared-distance framework (TORA/TODA/ASDA/LDA), the **balanced field / V₁ accelerate-stop–accelerate-go** concept, wet & contaminated **landing-distance factoring** and the **operational (in-flight) landing-distance assessment** at time of arrival, LDA-limited approaches and displaced thresholds, autobrake vs max-manual braking, flap and speed-additive discipline, reduced payload/fuel to meet field limits, overrun protection (RESA / EMAS), LAHSO, and go-around / rejected-landing discipline. Applies wherever runway length — not thrust or climb gradient — is the binding constraint; the *distance* counterpart to High-Elevation Aerodrome Operations. An airport brief lists a field's **declared distances** (its §7); this file *defines how they are used*.
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — public-source-verified (ICAO Annex 6 & Annex 14 / FAA AC 91-79A / EASA / SKYbrary); type- and field-specific numbers flagged 🟧.

> **Read-me — regime & scoping (read first):** This is an **OM E Operations** procedure (capability/method), **not** a chart, a clearance, or a performance table. It defines the **declared-distance and landing-/takeoff-distance framework** and how K Global applies it; the **actual TODR, ASDR, balanced-field V₁, factored and operational landing distances come from the AFM/QRH/OFP for the type, weight, runway, wind and surface state** — computed at dispatch and re-assessed at arrival, never read off this page. A field is a "limited-runway" operation whenever **runway length (TORA/TODA/ASDA/LDA) — not thrust/climb gradient — sets the weight or the go/no-go**; short fields, contaminated runways, displaced thresholds, and LDA-limited approaches all qualify. The reconciled declared-distance sets in the **KSFO** and **BGTL** airport briefs (§7 in each) are the worked references. Where a figure is type-/field-/surface-specific it is flagged 🟧 and must be verified against the AFM/OFP and the current AIRAC. Flag legend: 🟥 hard requirement/hazard · 🟧 caution/unverified/field- or type-specific · 🟩 normal. Sim context: X-Plane 11 / SimBrief dispatch.

---

## 1. Snapshot

| Field | Value |
|---|---|
| What this regime is | **Field-length-limited** takeoff & landing — the case where **runway declared distances**, not thrust or climb gradient, set the limiting weight or the go/no-go |
| Declared distances | 🟥 **TORA** (take-off run avail) · **TODA** (take-off distance avail = TORA + clearway) · **ASDA** (accelerate-stop distance avail = TORA + stopway) · **LDA** (landing distance avail). Published per runway end in the AIP / airport-brief §7 |
| Balanced field | 🟩 The **V₁** at which **accelerate-stop distance = accelerate-go distance**; the balanced-field length is the shortest field that satisfies both. V₁ is a **decision speed**, not a target 🟥 |
| Takeoff go/no-go at V₁ | 🟥 **Reject before V₁, continue at/after V₁.** The RTO must stop within **ASDA**; the continued takeoff must clear the screen height within **TODA** and meet the OEI net flight path |
| Landing distance (dispatch) | 🟥 Dry LDR factored to **LDA ≥ 1.67 × unfactored dry landing distance** (≈60% rule); **wet ≥ 1.92×** (wet = 1.15 × dry factored). Applied at planning |
| Landing distance (arrival) | 🟥 **Operational / in-flight landing-distance assessment (LDA at time of arrival)** using the **actual** weight, wind, surface state (RWYCC/braking action) and config, with a safety margin — mandatory when conditions differ from dispatch |
| Contaminated factoring | 🟥 Standing water/slush/snow/ice **greatly extend** landing (and accelerate-stop) distance and cut braking action; assess via **GRF / RWYCC / RCAM** (see Cold Weather Ops) |
| Displaced threshold / LDA limit | 🟧 **LDA < physical length** on displaced-threshold runways — brief the **LDA for the landing direction, not the runway length** (e.g. KSFO displaced thresholds; KRNO 17R/35L) |
| Overrun protection | 🟩 **RESA** (runway end safety area) and, where fitted, **EMAS**; last-line mitigations — never planning credit 🟥 |
| Techniques | 🟧 Autobrake vs max-manual, landing-flap selection, speed additives (wind/gust), full-reverse, aiming-point discipline, **go-around / rejected-landing** decision |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Declared distances (TORA/TODA/ASDA/LDA) | 🟩 | ICAO Annex 14 definitions; clearway→TODA, stopway→ASDA. Worked sets in KSFO/BGTL briefs §7 (note BGTL TORA/TODA genuinely blank in the AIP). |
| Balanced field / V₁ concept | 🟩 | V₁ where accelerate-stop = accelerate-go; balanced field = shortest satisfying both. Unbalanced fields (clearway/stopway) give a V₁ range. Sourced. |
| RTO within ASDA / continue within TODA | 🟥 | Reject decision must be made **by** V₁; late reject is the classic overrun. Actual distances from AFM — compute, don't assume. |
| Landing-distance factoring (dispatch) | 🟥 | Dry 1.67× (60% rule), wet 1.92× (1.15× on dry factored) to LDA at planning. Authority/type detail — verify. |
| Operational landing-distance assessment (arrival) | 🟥 | FAA AC 91-79A / TALPA: assess actual LDA at time of arrival with a margin (commonly +15%) when conditions differ from dispatch. Mandatory discipline. |
| Contaminated / wet factoring | 🟥 | Braking action & distance from GRF RWYCC/RCAM; cross-ref Cold Weather Ops. Very large distance penalties. |
| Displaced thresholds / LDA-limited approaches | 🟧 | LDA < physical length; brief per-direction LDA. Field-specific (KSFO, KRNO). |
| RESA / EMAS / LAHSO / go-around | 🟥 | Overrun areas are mitigations not credit; LAHSO reduces available distance; go-around/rejected-landing discipline is the primary excursion defence. |

---

## 3. Declared distances — the framework

- **The four declared distances — 🟥 (ICAO Annex 14):**
  - **TORA — Take-Off Run Available:** the runway length declared available and suitable for the ground run of a take-off.
  - **TODA — Take-Off Distance Available:** TORA **+ clearway** (an obstacle-free area beyond the runway over which the aeroplane may make its initial climb to screen height).
  - **ASDA — Accelerate-Stop Distance Available:** TORA **+ stopway** (a paved area beyond the runway able to support the aeroplane during an RTO).
  - **LDA — Landing Distance Available:** the runway length declared available and suitable for the ground run of a landing (reduced by a **displaced threshold**).
- **Why they differ per end — 🟧:** clearway lengthens TODA over TORA; stopway lengthens ASDA over TORA; a displaced threshold shortens LDA below the physical length; occasionally ASDA > TORA/TODA/LDA where stopway/clearway margins differ (documented at KRNO RWY 08). **Read all four per runway end** — they are not interchangeable.
- **Worked network references:**
  - **KSFO** — field elevation 13 ft, **displaced thresholds on all four primary ends** (28R/28L +300 ft, 01R +560 ft, 01L +640 ft) → the LDA is **below** the physical length; longest LDA ~11,870 ft (RWY 10L, undisplaced). Reconciled set in the brief §7.
  - **BGTL — Pituffik** — LDA **3,047 m both ends**, **ASDA 3,355 m** both ends (stopway margin), and **TORA/TODA genuinely blank in the AIP itself** (a real data gap, not a K Global omission) — a worked example of an incomplete declared-distance set requiring caution.
- **Where the numbers live:** the **airport-brief §7** holds each field's declared distances; this file defines their *use*. Always fly the **current-AIRAC** declared distances — they change with works, displaced-threshold NOTAMs and reconstruction.

---

## 4. Balanced field & the V₁ decision (takeoff)

- **Balanced-field concept — 🟩:** for a given weight/config/day, **V₁** is chosen so that the distance to **reject and stop (accelerate-stop, within ASDA)** equals the distance to **continue on one engine to screen height (accelerate-go, within TODA)**. The **balanced-field length** is the shortest runway that satisfies both simultaneously; if the available field is shorter, the takeoff weight must be reduced.
- **V₁ is a decision speed, not a target — 🟥:** at or after V₁ the takeoff is **continued** even with an engine failure (stop distance no longer assured); before V₁ a reject is initiated. The reject **action** must be **started by V₁** — the classic overrun is the late reject. Brief the RTO decision and who calls it before every takeoff.
- **Unbalanced fields — 🟧:** where clearway (TODA > TORA) or stopway (ASDA > TORA) exists, the AFM may offer a **range of V₁** (a "V₁ range"): a lower V₁ favours the stop case, a higher V₁ the go case. Contaminated runways typically drive V₁ **down** (poor stopping) — verify the AFM output.
- **Field-length-limited takeoff — 🟥:** when runway length is the limit, the **field-limited take-off weight** may be below the climb/structural limit; reduce weight (payload/fuel) to fit. Do **not** conflate with the thrust/climb-gradient limit of a high-elevation field (that is High-Elevation Aerodrome Ops) — though a **short high field** is limited by **both**, and the more restrictive governs.
- **Contaminated accelerate-stop — 🟥:** standing water, slush, snow and ice **lengthen the accelerate-stop distance** and can invalidate a normal V₁; use the AFM contaminated-runway takeoff data (and see Cold Weather Ops §GRF).
- **Reduced-thrust (flex/derated) takeoff on a limiting runway — 🟧:** **operator policy — 🟩 [K Global OpsSpec 2026-07-25]:** reduced-thrust takeoff is **permitted** in two forms — **flex (assumed-temperature)** and **fixed derate, capped at a maximum of 25%** — subject in every case to the AFM/runway/obstacle limits for the day. On a field-length-limited runway those limits are typically the binding constraint — a shorter/limiting runway will often force full-rated thrust (or a lower flex/derate setting, within the 25% derate cap) to keep the balanced-field V₁ and accelerate-stop/-go distances within TORA/TODA/ASDA; verify the flex/derate case against the AFM for the specific runway before selecting reduced thrust.

---

## 5. Landing distance — dispatch factoring & the arrival assessment

- **Dispatch (pre-flight) landing-distance factoring — 🟥:** at planning, the destination (and alternate) **LDA must be ≥ the factored landing distance**:
  - **Dry:** LDA ≥ **1.67 ×** the unfactored (demonstrated) dry landing distance — the "**60% rule**" (the aeroplane must be able to land within **60%** of the LDA).
  - **Wet:** add a further **15%** → LDA ≥ **1.92 ×** unfactored dry (1.15 × the dry factored distance).
  - **Contaminated:** use the specific contaminated landing data / higher factors as required. 🟧 Exact factors are authority-/type-specific (FAA vs EASA) — verify the coded values.
- **Operational / in-flight landing-distance assessment (LDA at time of arrival) — 🟥:** separate from and **in addition to** dispatch factoring, crews must perform an **operational landing-distance assessment at the time of arrival** using the **actual** landing weight, wind, temperature, pressure altitude, runway slope, aeroplane configuration and — critically — the **reported surface condition / braking action (RWYCC)**, with an added **safety margin** (commonly **+15%**). This is the core lesson of the FAA runway-overrun work (AC 91-79A): the dispatch number can be optimistic by arrival. **If the actual LDA is not met, divert or hold** — do not attempt a landing that the arrival assessment fails.
- **Surface state drives the number — 🟥:** wet, and progressively contaminated (standing water, slush, wet snow, dry snow, compacted snow, ice), runways **greatly extend** landing distance and reduce braking action; assess via the **Global Reporting Format (GRF) RWYCC / RCAM** (owned in Cold Weather Ops — cross-reference, do not duplicate). A downhill slope and a tailwind each add significantly.
- **Recompute — don't reuse — 🟧:** a landing distance computed at dispatch for forecast conditions is not the arrival number; **recompute at arrival** whenever weight, wind or surface differ from plan.
- **EFB take-off/landing performance application (OPT) — 🟩 [K Global OpsSpec 2026-07-25]:** the **Electronic Flight Bag take-off and landing performance application (OPT)** is **authorised** for computing dispatch performance (RTOW, TODR/ASDR) and the **operational/in-flight landing-distance assessment** above, in place of paper AFM tables — subject to the approved EFB performance software and database being current. Run the arrival assessment on the authorised EFB tool using the **actual** landing weight, wind, and reported surface condition/RWYCC for the day; the same "divert or hold if the assessment fails" discipline applies regardless of which authorised tool produced the number.

---

## 6. LDA-limited approaches & displaced thresholds

- **Displaced threshold reduces LDA — 🟥:** a displaced landing threshold (obstacle, geometry or works) means the **LDA is less than the physical runway length** for that direction. Brief and compute against the **LDA for the landing direction**, not the runway length or the takeoff distances (which may still use the full pavement). KSFO's four displaced primary ends and KRNO's 17R/35L displaced thresholds are worked examples.
- **LDA-limited approach — 🟧:** where the usable LDA is short for the type/weight, the approach must be flown to touch down in the **touchdown zone** (no long float, no deep touchdown) — a deep or fast touchdown consumes the very margin the short LDA lacks. Aiming-point and touchdown-zone discipline is the primary defence.
- **Non-normal displaced thresholds — 🟧:** temporary displaced thresholds appear by **NOTAM** (works, lighting, obstacle) and change the LDA at short notice — pull the current NOTAM/AIRAC and use the **current** LDA, not the stored brief figure.

---

## 7. Technique — braking, flap, speed additives & reverse

- **Autobrake vs max-manual — 🟧:** on a limiting runway select an **autobrake setting appropriate to the LDA and surface** (higher setting for short/contaminated), and be prepared to transition to **maximum manual braking** if deceleration is inadequate. Do not disarm/reduce braking early on a limiting or contaminated runway.
- **Landing flap — 🟧:** select the **maximum certified landing flap** consistent with go-around performance to minimise VREF and landing distance on a limited runway (the opposite trade to the high-elevation go-around-gradient case — reconcile the two where a field is both short and high).
- **Speed additives — 🟥:** wind/gust additives **raise VREF and lengthen the landing** — they are a safety margin against windshear/gusts, **not** spare energy to carry to the flare. On a limiting runway, fly the **minimum appropriate additive** and **bleed it before touchdown**; carrying additive to a deep/fast touchdown is a primary excursion cause.
- **Reverse thrust & speedbrake — 🟥:** deploy **speedbrake/ground spoilers** immediately at touchdown (they put weight on wheels for braking) and use **reverse thrust early and fully** on a limiting or contaminated runway — reverse is most effective at high speed and is often the only deceleration force unaffected by poor braking action.
- **Aiming point / touchdown zone — 🟥:** touch down **in the touchdown zone at the correct speed**; a stabilised approach with no float. Most runway-length landing overruns trace to an **unstable approach, long/fast touchdown, or a landing attempted on a contaminated runway without the arrival assessment** — the three things this section exists to prevent.

---

## 8. Overrun protection, LAHSO & go-around discipline

- **RESA / EMAS — 🟩 mitigation, never credit — 🟥:** a **Runway End Safety Area (RESA)** and, where installed, an **Engineered Materials Arresting System (EMAS)** exist to reduce the consequences of an overrun; they are **last-line mitigations and must never be taken as planning credit** or as a reason to accept a marginal landing. Know whether the destination/alternate has RESA/EMAS from the brief, but plan to stop **on the LDA**.
- **LAHSO — 🟧:** a **Land And Hold Short Operation** reduces the **available landing distance** to the hold-short point — treat the **available-landing-distance-to-hold-short** as the LDA for the assessment, and **decline LAHSO** if the factored/arrival distance is not met. LAHSO acceptance is at the crew's discretion.
- **Go-around / rejected landing — 🟥 the primary excursion defence:** a **stabilised-approach gate** and a willingness to **go around** are the single most effective defences against a runway-length excursion. Go around if the approach is unstable, the touchdown will be long/fast, the runway state is worse than assessed, or the arrival landing distance is not met. A **rejected landing after touchdown** (before reverse/lift-dump commit, per type SOP) is a valid last option — brief it where the runway is limiting. The decision to go around is **never** wrong for being conservative on a limited runway.
- **Balked landing gradient — 🟧:** confirm the aeroplane meets the published/regulatory **balked-landing (go-around) climb gradient** at landing weight before committing to a limiting-runway approach — the link back to High-Elevation Aerodrome Ops where a short field is also high.

---

## Cross-references

- **High-Elevation Aerodrome Operations (OM E)** — the *thrust/climb-gradient* limit that overlays field length at a short **high** field: `./High-Elevation Aerodrome Operations.md`
- **Cold Weather Operations (OM E)** — **owns** the GRF / RWYCC / RCAM / TALPA contaminated-runway reporting and braking-action framework referenced here: `./Cold Weather Operations.md`
- **Steep Approach Operations (OM E)** — steep approaches that frequently coincide with LDA-limited/displaced-threshold runways: `./Steep Approach Operations.md`
- **ETOPS / EDTO Procedures (OM E)** — alternate suitability including runway-state/LDA acceptability in the diversion window: `./ETOPS-EDTO Procedures.md`
- **Airport-brief §7 (declared distances)** — the per-field TORA/TODA/ASDA/LDA sets this doc applies, incl. the reconciled **KSFO** and **BGTL** sets: `../OM C Routes and Destinations/Airports/North America/United States/KSFO — San Francisco Intl/KSFO — Briefing.md` (§7), `../OM C Routes and Destinations/Airports/North America/Greenland/BGTL — Pituffik Space Base.md` (§7)
- **KRNO — Reno-Tahoe** (displaced thresholds; stopway-driven ASDA on RWY 08): `../OM C Routes and Destinations/Airports/North America/United States/KRNO — Reno-Tahoe Intl.md` (§7)
- **A339 — Dispatch** — the type's landing/takeoff performance module, autobrake and flap policy: `../OM B Fleet/OM B Airbus/A339/A339 — Dispatch.md`

---

## Open items (🟧 — confirm)

- **Landing-distance factors coded for K Global** — confirm the exact dispatch factors (dry 1.67 / wet 1.92, or the EASA/authority equivalents) and the **operational (arrival) assessment margin** (assumed +15%) in the OpsSpec/AFM.
- **Balanced-field vs V₁-range policy** — confirm whether the AFM/SimBrief profile presents a balanced-field V₁ or a V₁ range (clearway/stopway) for each type, and the contaminated-runway V₁ logic.
- **RESA/EMAS inventory** — which network destinations/alternates have EMAS or non-standard RESA (record in the airport briefs, not here).
- **LAHSO policy** — confirm whether K Global permits accepting LAHSO and under what conditions.
- **Rejected-landing SOP** — confirm the type-specific reject-after-touchdown limit (before reverse/lift-dump commit) in the FCOM/QRH.
- **BGTL declared-distance gap** — TORA/TODA blank in the AIP; confirm operational treatment before planning a takeoff there.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. Subscription/in-sim material (AFM/QRH/FCOM, SimBrief performance) may inform content but is not listed. Durable policy — no live weather/NOTAM/performance data stored here.*

- **ICAO Annex 14 — Aerodromes, Vol I (declared distances: TORA, TODA, ASDA, LDA; clearway, stopway, displaced threshold; RESA)** — the declared-distance framework — summarised via SKYbrary (ICAO not freely hosted): https://skybrary.aero/articles/declared-distances (retrieved 2026-07-25).
- **ICAO Annex 6 — Operation of Aircraft, Part I (aeroplane performance operating limitations — take-off field length, accelerate-stop, landing-distance requirements)** — via SKYbrary: https://skybrary.aero/articles/aeroplane-performance (retrieved 2026-07-25).
- **FAA AC 91-79A — Mitigating the Risks of a Runway Overrun Upon Landing** — operational (in-flight) landing-distance assessment at time of arrival, safety margin, stabilised approach, contaminated-runway landing — https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1030213 (retrieved 2026-07-25).
- **SKYbrary — Balanced Field Take-off / V1 / Accelerate-Stop Distance** — balanced field, decision speed, ASDA/TODA relationship — https://skybrary.aero/articles/balanced-field-take-off and https://skybrary.aero/articles/decision-speed-v1 (retrieved 2026-07-25).
- **SKYbrary — Landing Distances / Runway Excursion** — dry/wet/contaminated landing-distance factoring, 60% rule, overrun causes and prevention — https://skybrary.aero/articles/landing-distances and https://skybrary.aero/articles/runway-excursion (retrieved 2026-07-25).
- **SKYbrary — Engineered Materials Arresting System (EMAS) / Runway End Safety Area (RESA) / LAHSO** — overrun mitigation and land-and-hold-short — https://skybrary.aero/articles/engineered-material-arresting-system-emas and https://skybrary.aero/articles/land-and-hold-short-operations-lahso (retrieved 2026-07-25).
- **EASA — CAT.POL.A (aeroplane performance — take-off, landing, dispatch landing-distance factoring)** — EU dispatch landing-distance and take-off field-length requirements — https://www.easa.europa.eu/en/document-library/regulations (Air OPS / CAT.POL.A; retrieved 2026-07-25) 🟧 confirm exact reference.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1.2 | 2026-07-25 | OpsSpec batch 3: TA/TL published, GLS where supported, EFB perf authorised, derate ≤25%, PIC extra-fuel discretion, tankering ≥10% guideline. |
| v0.1.1 | 2026-07-25 | OpsSpec batch 2: operator approvals set (RVSM all mainline, oceanic RNP4+RNP10, NAT HLA, CPDLC/ADS-C FANS, PBCS, cold-temp correction crew+FMS, flex/derate takeoff, MMEL baseline, autoland currency, RNP-AR per-field). |
| v0.1 | 2026-07-25 | Initial draft. Fourth OM E — Operations location-agnostic procedure. Defines the field-length-limited regime: declared distances (TORA/TODA/ASDA/LDA), balanced-field / V₁ accelerate-stop–accelerate-go decision, dispatch landing-distance factoring (60% / wet 1.92×) and the operational (in-flight) landing-distance assessment at time of arrival, contaminated/wet factoring (via GRF — owned by Cold Weather Ops), LDA-limited approaches & displaced thresholds, braking/flap/speed-additive/reverse technique, RESA/EMAS/LAHSO overrun protection, and go-around / rejected-landing discipline. Worked against the KSFO and BGTL declared-distance sets (incl. the BGTL TORA/TODA AIP gap) and KRNO displaced thresholds. Built from ICAO Annex 6/14 + FAA AC 91-79A + EASA CAT.POL.A + SKYbrary. Cross-linked to High-Elevation Aerodrome Ops, Cold Weather Ops, Steep Approach Ops, ETOPS/EDTO, airport §7 briefs and A339 Dispatch. Factor values, V₁-range and LAHSO policy flagged open. |
