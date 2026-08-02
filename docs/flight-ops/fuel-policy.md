# Fuel Policy — OM E Procedure

**Scope:** The core **fuel planning and in-flight fuel-management method** that every K Global flight builds on and that ETOPS/EDTO, Polar and the airframe Dispatch files lean on. Defines the **fuel scheme** (taxi, trip, contingency, alternate, final reserve, additional/EDTO-critical, discretionary/PIC extra); the **alternate-requirement and planning-minima logic** (when one alternate, when two, the isolated-aerodrome case); **in-flight fuel management** (minimum diversion fuel, the commit/decision point, monitoring vs plan); the **redispatch / decision-point** technique; **tankering** economics; and the **low-fuel terminology** — the **MINIMUM FUEL** advisory vs the **MAYDAY FUEL** emergency and its trigger (final reserve). This file *defines* the method; the airframe Dispatch files and airport briefs *apply* it with type/field numbers. It stores **no live fuel figures** — those come from the OFP.
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft — public-source-verified (ICAO Annex 6 Part I Ch.4.3.6 / Doc 9976 / EASA CAT.OP.MPA fuel scheme / FAA / SKYbrary); operator- and type-specific values flagged 🟧.

> **Read-me — regime & scoping (read first):** This is an **OM E Operations** procedure (planning method), **not** a load sheet, an OFP, or an authority OpsSpec. It states *how* fuel is built and managed; the **actual taxi/trip/contingency/alternate/reserve figures, the chosen contingency option, and the tankering decision come from the current OFP** at dispatch — this file stores no numbers that vary by day. Where a value is operator-, authority- or type-specific it is flagged 🟧 and must be verified against the OpsSpec/AFM/OFP. The EASA fuel-scheme regulation was **renumbered CAT.OP.MPA.150 → .180** (new fuel/energy scheme effective 30 Oct 2022); both are cited. Flag legend: 🟥 hard requirement/hazard · 🟧 caution/unverified/operator- or type-specific · 🟩 normal. Sim context: X-Plane 11 / SimBrief dispatch — SimBrief builds the scheme; the crew validates it.

---

## 1. Snapshot

| Component | What it is | Default rule |
|---|---|---|
| **Taxi fuel** | Fuel for APU, start, taxi-out before takeoff | Airport/type-specific estimate 🟧 |
| **Trip fuel** | Takeoff → landing at destination (climb, cruise, descent, approach) | From OFP profile at planned CI/route/winds 🟥 |
| **Contingency fuel** | Hedge against route/wind/level/performance deviation | 🟥 **Higher of: 5% of trip** (or **3% with a suitable en-route alternate / ERA**), **20 min** at holding, or an approved **statistical** method — min floor **5 min** at 1,500 ft over destination. **K Global's approved default is 5% of trip fuel, with the 3%-with-ERA option enabled** 🟩 [K Global OpsSpec 2026-07-25] |
| **Alternate fuel** | Missed approach at destination → land at destination alternate | Destination MAP → alternate approach & land 🟥 |
| **Final reserve** | The untouchable floor | 🟥 **30 min holding at 1,500 ft** over the alternate (or destination if no alternate) at ISA, at estimated landing weight (some authorities **45 min**). **K Global's approved final reserve is 30 minutes** 🟩 [K Global OpsSpec 2026-07-25] |
| **Additional fuel** | Covers the binding worst case (isolated aerodrome, EDTO critical fuel, one-engine/depressurised to alternate) | 🟥 As required so the flight can meet the limiting scenario with final reserve intact |
| **Discretionary / PIC extra** | Commander's judgement (weather, ATC, tankering) | 🟩 **PIC discretion, above the required minimum, within MTOW/MLW/MZFW/CG and structural limits** 🟩 [K Global OpsSpec 2026-07-25] |
| **Minimum block fuel** | Sum of the above | Taxi + Trip + Contingency + Alternate + Final Reserve + Additional + Extra |
| **Low-fuel terms** | Advisory vs emergency | 🟧 **"MINIMUM FUEL"** = advisory (committed to one aerodrome, no more delay); 🟥 **"MAYDAY FUEL"** = emergency, declared when predicted landing fuel < **final reserve** |

---

## 2. Validation summary

| Domain | Flag | Note |
|---|---|---|
| Fuel scheme components | 🟩 | Taxi/trip/contingency/alternate/final-reserve/additional/discretionary sourced (ICAO Annex 6 4.3.6 / EASA CAT.OP.MPA / SKYbrary). |
| Contingency options (5% / 3%-with-ERA / statistical / 20 min) | 🟥 | Sourced (AMC1 CAT.OP.MPA.150(b)). Statistical method needs approval + recorded data history; ERA must sit within the defined circle. |
| Final reserve = 30 min @ 1,500 ft | 🟩 | ICAO/EASA baseline; **some authorities require 45 min**. **K Global's approved final reserve is confirmed at 30 min** 🟩 [K Global OpsSpec 2026-07-25]. |
| Destination-alternate requirement (0/1/2) | 🟥 | Weather/approach-dependent; two alternates when destination forecast marginal or unavailable; isolated-aerodrome case = 2 h additional. |
| Isolated aerodrome (no alternate) | 🟥 | Additional fuel = **2 h at normal cruise** above the isolated destination incl. final reserve; PNR monitored in flight. Sourced (ICAO Doc 9976). |
| In-flight minimum diversion fuel / commit point | 🟥 | Continuous check: usable fuel must stay ≥ alternate + final reserve until commit; below that = advisory/emergency terminology. |
| Redispatch / decision-point technique | 🟧 | Reduces contingency by re-planning to a nearer initial destination; approval/OpsSpec-specific — confirm K Global uses it. |
| Tankering | 🟩 | **Guideline trigger: ≥10% fuel-price differential between departure and destination, weight/CG permitting** 🟩 [K Global OpsSpec 2026-07-25], subject to weight/CG limits (MTOW/MLW/structural/CG) and the carry-cost of fuel-to-carry-fuel. Never below required minima. |
| MINIMUM FUEL vs MAYDAY FUEL | 🟥 | Standardised since ICAO Annex 6 / Doc 4444 amendment (eff. 15 Nov 2012). MAYDAY FUEL trigger = predicted landing fuel < final reserve. |

---

## 3. The fuel scheme — component by component

The minimum required block fuel is the **sum** of the components below (ICAO Annex 6 Part I §4.3.6; EASA CAT.OP.MPA.150/.180). SimBrief builds them from the route/winds/CI; the crew validates each line.

- **Taxi fuel — 🟩:** fuel burned before takeoff — APU, engine start, and taxi-out — based on the departure airport's typical taxi time and any expected holding/de-ice. Not part of trip fuel. Adjust up for known long taxi routings or de-ice.
- **Trip fuel — 🟥:** fuel from **takeoff at the departure aerodrome to landing at the destination** — take-off/climb, cruise (at planned level(s), Cost Index and forecast winds/temps), descent, approach and landing. The single largest component; driven by route, level, weight, CI and wind. A cleared re-route/level change in the oceanic clearance can move it (see Datalink & Oceanic §5).
- **Contingency fuel — 🟥 (the hedge):** covers **unforeseen deviations** from the plan — winds worse than forecast, a lower/higher level than planned, ATC re-routes, an individual-aircraft performance shortfall. The required amount is the **highest** of:
  1. **5% of the planned trip fuel** (the standard case); **or**
  2. **3% of trip fuel** if a suitable **en-route alternate (ERA)** is available — the ERA must lie within a circle of radius **20% of the total trip distance**, centred on a point **25% of the trip distance back from destination** along the route (a nearer legal diversion justifies the smaller hedge); **or**
  3. an amount from an approved **statistical contingency-fuel (SCF)** method giving appropriate statistical coverage of the plan-vs-actual trip-fuel deviation (needs a recorded fuel-monitoring history, typically ~2 years, and authority approval); **or**
  4. **20 minutes** of flying time based on trip-fuel consumption, where the operator has an approved fuel-monitoring programme.
  With a **floor** of the fuel to fly **5 minutes at holding speed at 1,500 ft** above the destination in ISA. **K Global's approved default is 5% of trip fuel, with the 3%-with-ERA option enabled** 🟩 [K Global OpsSpec 2026-07-25]; no statistical contingency-fuel (SCF) method is currently approved.
- **Alternate fuel — 🟥:** fuel from the **missed-approach point at destination** through the missed approach, climb, cruise, descent, approach and **landing at the destination alternate**. Zero when no alternate is required (§4). When two alternates are carried, size to the **more distant** one.
- **Final reserve fuel — 🟥 (the untouchable floor):** the minimum fuel to fly **30 minutes at holding speed at 1,500 ft** above the **alternate** aerodrome (or the **destination** if no alternate is required) in **ISA**, at estimated landing weight. This is the number the low-fuel terminology hangs on (§7): **planned to arrive with final reserve intact; predicted to land below it = MAYDAY FUEL.** Some authorities specify 45 minutes; **K Global's approved final reserve is 30 minutes** 🟩 [K Global OpsSpec 2026-07-25] — do not plan to consume it.
- **Additional fuel — 🟥:** carried when a **specific scenario** would otherwise leave the aircraft short — the **isolated-aerodrome** 2-hour case (§4), the **EDTO critical-fuel** scenario (depressurisation + OEI driftdown to the limiting alternate — see ETOPS-EDTO §6), a **one-engine-inoperative or depressurised** cruise to the en-route alternate from the critical point, or an approach/landing at the alternate below planning minima requirement. Sized so the limiting scenario completes with **final reserve intact**. On long oceanic/near-polar EDTO legs, additional (critical) fuel can be the binding constraint.
- **Discretionary / PIC extra fuel — 🟩 [K Global OpsSpec 2026-07-25]:** fuel the **commander** elects to add above the required minimum for anticipated weather, ATC delay, a congested destination, tankering economics (§6) or airmanship. **Operator policy: this is at PIC discretion, with no fixed extra-fuel cap, provided the aircraft stays within MTOW/MLW/MZFW and the CG envelope** (and structural/runway-performance limits, §4). Discretionary — but every extra tonne carried costs fuel to carry (§6) and may itself bite a weight/CG limit.

---

## 4. Alternates & planning minima — when 0, 1 or 2

- **When is a destination alternate required — 🟥:**
  - **At least one** destination alternate is the **normal requirement**. It may be **omitted** only when both (a) the flight time is within a defined limit **and** the destination forecast (over the ETA window, typically ±1 h) is **at/above** specified good-weather minima (e.g. ceiling ≥ ~2,000 ft or circling+500 ft, visibility ≥ ~5 km/3 SM), **and** (b) the destination has ≥2 separate usable runways/approaches — **or** the destination is an **isolated aerodrome** (below). Authority-specific thresholds 🟧.
  - **Two** destination alternates are required when the destination forecast is **marginal or below minima** over the ETA window, or the weather/availability is **unforecast/uncertain** — so a legal landing option always exists.
- **Alternate planning minima — 🟥:** an aerodrome may be **planned** as an alternate only if its **forecast** (over the use window) is **at/above** minima that are **more conservative than its own approach minima** — an add-on hedging forecast error. Typical add-on (authority-specific 🟧):

  | Approach available at the alternate | Add to ceiling (DH/MDH) | Add to visibility/RVR |
  |---|---|---|
  | **Precision (CAT I / equivalent)** | **+200 ft** | **+800 m** |
  | **Non-precision** | **+400 ft** | **+1,500 m** |
  | **Circling** | Circling minima | Circling minima |

  (Note: the **EDTO en-route-alternate** add-on is *larger/different* — e.g. +400 ft / +1,600 m for a single-precision field — because of the longer forecast lead; see ETOPS-EDTO §5. Do not confuse the two tables.)
- **Isolated aerodrome (no alternate available) — 🟥:** when the destination has **no suitable alternate** (remote island/field), the flight plans as an **isolated aerodrome**: instead of alternate fuel, carry **additional fuel to fly 2 hours at normal cruise consumption** above the destination, **including the final reserve**. A **Point of No Return (PNR)** is computed and **continuously updated in flight**; the PNR **must not be passed** unless the assessment of destination weather, traffic and conditions indicates a **safe landing can be achieved at the ETA**. Guidance: ICAO Doc 9976. If normal alternate fuel *is* carried instead, the field need not be treated as isolated.
- **Take-off & en-route alternates — 🟩:** a **take-off alternate** is required when departure weather is below landing minima or return is otherwise not possible (within ~1 h/type-specific flying time). **En-route alternates** support the contingency-3% ERA case (§3) and EDTO (separate ETOPS-EDTO method).

---

## 5. In-flight fuel management

- **Monitor actual vs plan — 🟥:** at each waypoint compare **actual fuel remaining** against the **OFP plan** figure. A growing negative trend (worse winds, lower level, higher burn) is caught early — well before it threatens reserves — allowing a level/speed/route/destination change while options remain.
- **Minimum diversion fuel — 🟥:** the running floor below which the aircraft can no longer reach the chosen alternate and still land with **final reserve** intact = **fuel required to divert to the nearest suitable alternate + final reserve.** Usable fuel must stay **at or above** this until a landing is assured. Track it continuously; it moves with the nearest suitable alternate.
- **The commit / decision point — 🟥:** the point at which the aircraft **commits to the destination** (or to a specific field) because it no longer has the fuel to reach an alternate with reserves. Before commit, keep viable diversion options; **do not commit** unless the destination is assured (weather at/above minima, runway available). Committing to a single aerodrome with no remaining alternate is the trigger for the **MINIMUM FUEL** advisory (§7).
- **Re-plan triggers — 🟩:** revise the fuel plan in flight for a cleared re-route/level (oceanic clearance), deteriorating destination/alternate weather, an ATC hold, an MEL/systems event (EDTO-significant — see ETOPS-EDTO §7/§8), or fuel-freeze mitigation on polar legs (a descent to warmer air burns more — see Polar §). Recompute diversion fuel and PNR after any change.
- **Protect the final reserve — 🟥:** final reserve is **planned untouchable**. Any prediction of landing below it is not a "management" case — it is the **MAYDAY FUEL** emergency (§7). If a landing below final reserve becomes unavoidable, declare early.

---

## 6. Redispatch / decision-point technique & tankering

- **Redispatch (decision-point) fuel technique — 🟧:** a long-haul planning technique to **reduce carried contingency** legally. The flight is dispatched to a **nearer initial destination** (or with an initial/final destination pair) with a **decision point** en route; contingency is calculated only on the **shorter** initial leg, cutting fuel carried at take-off. At the decision point, if actual fuel/weather allow, the crew **re-clears (redispatches)** to the **final destination**, having confirmed the fuel from that point still meets the full scheme to the final destination + reserves. Saves take-off weight/fuel on ultra-long sectors; **requires authority approval and an OpsSpec provision** — 🟧 confirm K Global/A339 uses it before assuming reduced contingency.
- **Tankering — economics, bounded by limits — 🟩 [K Global OpsSpec 2026-07-25]:** **guideline trigger of ≥10% fuel-price differential** between the departure (tankering) station and the destination, **weight/CG permitting**.
  - **Why:** carry extra fuel from a **cheap hub** to avoid buying at an **expensive destination** — worthwhile only when the **price differential exceeds the cost of carrying the extra fuel** (burning fuel to lift fuel: roughly ~2–4% of the tankered quantity per flight hour is consumed just carrying it — type/sector-specific 🟧). **K Global's approved guideline is to consider tankering where the fuel-price differential is ≥10%**, weight/CG permitting 🟩 [K Global OpsSpec 2026-07-25]; below that threshold the carry-cost typically erodes the saving, and each leg is still assessed against the actual differential and weight/CG state before tankering.
  - **Hard limits — 🟥:** tankered fuel may **never** push the aircraft above **MTOW** (take-off), **MLW** (planned landing weight — tankering deliberately lands heavier), **MZFW**, or outside the **CG envelope**, and must respect **runway/climb performance** and **structural** limits. It **never** substitutes for any required minimum fuel and never justifies dispatching below the scheme.
  - **Decision:** SimBrief/ops tools compute the tankering benefit per leg against the **≥10% guideline**; the commander confirms it against the weight/CG/performance limits and the discretionary-fuel rationale (§3). Fuel prices are commercial/live — not stored here.

---

## 7. Low-fuel terminology — MINIMUM FUEL vs MAYDAY FUEL

Standardised by ICAO (Annex 6 Part I and PANS-ATM Doc 4444, effective 15 Nov 2012) to remove ambiguity from ad-hoc "low fuel"/"emergency fuel" calls. **Two distinct states — do not conflate.**

- **"MINIMUM FUEL" — 🟧 an ADVISORY, not an emergency:**
  - **Meaning:** the flight is **committed to land at a specific aerodrome** and **any additional delay (change to the existing clearance) may result in landing with less than final reserve fuel.** All other options have been reduced to that one aerodrome.
  - **Phraseology:** advise ATC **"MINIMUM FUEL."** This is **information** — it does **not** confer priority or trigger emergency handling; it warns ATC that an emergency **could** develop if further delay occurs. ATC should advise of any expected additional delay.
  - **When:** at/after the **commit point** (§5), once diversion options are gone but the landing at the committed field is still expected to preserve final reserve **absent new delay**.
- **"MAYDAY FUEL" — 🟥 an EMERGENCY (fuel emergency):**
  - **Trigger — 🟥:** declare when the **calculated usable fuel predicted to be available on landing at the nearest aerodrome where a safe landing can be made is less than the planned final reserve fuel.**
  - **Phraseology:** **"MAYDAY MAYDAY MAYDAY FUEL."** This is a distress declaration — the crew receives **priority handling** and vectoring to the nearest suitable aerodrome.
  - **Relationship:** MINIMUM FUEL is the yellow flag (advisory); **MAYDAY FUEL is the red** (final reserve is now threatened). There is deliberately **no** intermediate "PAN fuel" state in the ICAO scheme — if final reserve will be broken, it is **MAYDAY FUEL**.
- **Crew rule — 🟥:** protect final reserve; if the prediction crosses below it, **declare MAYDAY FUEL without delay** — do not "manage down" into the reserve hoping for improvement.

---

## 8. Worked logic (reference EDDF–KSFO OFP, 2026-07-25)

Illustrative only — figures are sector/day-specific and come from the OFP, not this file. On the reference **A339 (A330-900neo)** EDDF–KSFO leg at CI 10: trip burn on the order of **~67.8 t** against usable tankage of **~111 t** (A339 Dispatch §3/§5), leaving wide margin. Because the routing crosses a near-polar EDTO segment (ETOPS 120, ENTRY→BGSF / CP-for-fuel / EXIT→CYZF), the binding fuel check is the **greater of** the normal scheme (trip + contingency + alternate + final reserve) **and** the **EDTO critical-fuel** scenario at the CP-for-fuel (depressurisation + OEI driftdown to the limiting alternate + ice/APU + hold + reserves — ETOPS-EDTO §6). The **additional fuel** line (§3) exists precisely to cover whichever of those is larger. Fuel-freeze on the high-FL polar cruise (Jet A-1 freeze −47 °C) is a **management** item, not a planning-fuel line — mitigated by descent/Mach (Polar §). The OFP's fuel lines — not this note — are authoritative.

---

## 9. Cross-references

- **ETOPS / EDTO Procedures (OM E)** — the **critical-fuel scenario** (depressurisation + OEI driftdown) that sizes the *additional* fuel line on EDTO legs: `./ETOPS-EDTO Procedures.md`
- **Polar & High-Latitude Operations (OM E)** — **fuel freeze / cold-soak** management (a burn/route consideration, not a planning-fuel line) and cold-alternate fuel: `./Polar and High-Latitude Operations.md`
- **Datalink & Oceanic Procedures (OM E)** — a cleared re-route/level in the **oceanic clearance** changes trip fuel and diversion fuel in flight: `./Datalink and Oceanic Procedures.md`
- **A339 (A330-900neo) — Dispatch** — the type application: SimBrief fuel build, reference OFP burn/tankage figures, taxi/CI defaults: `../OM B Fleet/OM B Airbus/A339/A339 — Dispatch.md`
- **Airport briefs §16 (fuel & servicing)** — field-level fuel availability, price context, tankering inputs and isolated-aerodrome flags per destination: `../OM C Routes and Destinations/Airports/` (see each brief's §16)
- **North Atlantic / Arctic airspace briefs** — ETP/critical-point context and cold-soak notes that feed the in-flight fuel picture: `../OM C Routes and Destinations/Airspace/General/North Atlantic.md` · `../OM C Routes and Destinations/Airspace/General/Arctic.md`

---

## Open items (🟧 — confirm)

- **Final reserve value** — RESOLVED by OpsSpec batch 1 (2026-07-25): **30 min** at 1,500 ft 🟩 [K Global OpsSpec 2026-07-25] (ICAO/EASA baseline; some authorities require 45 min, not adopted).
- **Contingency default & statistical option** — RESOLVED by OpsSpec batch 1: **5% of trip fuel default, with the 3%-with-ERA option enabled** 🟩 [K Global OpsSpec 2026-07-25]. No approved statistical contingency-fuel (SCF) method at this time.
- **Redispatch/decision-point technique** — confirm whether K Global/the A339 is approved for and uses redispatch (reduced initial-leg contingency), or plans full end-to-end fuel.
- **Alternate-requirement thresholds** — the good-weather values permitting alternate omission (ceiling/visibility/runway count) and the planning-minima add-on table are authority-specific — verify against the OpsSpec (FAA 14 CFR 121 vs EASA CAT.OP.MPA).
- **Isolated-aerodrome list** — which K Global destinations are treated as isolated (2 h additional + PNR) vs alternate-served — confirm per airport brief §16.
- **Tankering** — RESOLVED by OpsSpec batch 1 (case-by-case cost-benefit, weight/CG limits) and refined by OpsSpec batch 3 (2026-07-25): **guideline trigger of ≥10% fuel-price differential, weight/CG permitting** 🟩 [K Global OpsSpec 2026-07-25]. Still open: the type/sector fuel-to-carry-fuel penalty for the A339 (and other types) needed to size each case — confirm from AFM/ops data.
- **Discretionary / PIC extra fuel** — RESOLVED by OpsSpec batch 3 (2026-07-25): **PIC discretion, no fixed cap, within MTOW/MLW/MZFW/CG and structural limits** 🟩 [K Global OpsSpec 2026-07-25].
- **EASA regulation reference** — CAT.OP.MPA.150 vs renumbered **.180** (new fuel/energy scheme, eff. 30 Oct 2022) — confirm which edition/OpsSpec K Global operates under.

---

## Sources & References
*Public URLs only. Cite origin + retrieved dates. Subscription/in-sim material (SimBrief, AFM) may inform content but is not listed. Durable policy — no live fuel/price/weather data stored here.*

- **ICAO Annex 6 — Operation of Aircraft, Part I, §4.3.6 (Fuel requirements) & §4.3.7 (in-flight fuel management)** — the fuel-scheme components (taxi/trip/contingency/alternate/final-reserve/additional/discretionary), 30-min final reserve, isolated-aerodrome case, MINIMUM/MAYDAY FUEL — summarised via SKYbrary (ICAO not freely hosted): https://skybrary.aero/articles/fuel-regulations (retrieved 2026-07-25).
- **ICAO Doc 9976 — Flight Planning and Fuel Management (FPFM) Manual, 1st Ed. 2015** — contingency options (5%/3%-ERA/statistical/20-min), ERA circle geometry, isolated-aerodrome 2-hour additional fuel and PNR, decision-point/redispatch technique — https://www.unitingaviation.com/livecycle/Documents/ICAO_Doc_9976-1_EN.pdf (retrieved 2026-07-25).
- **EASA — CAT.OP.MPA.150 Fuel policy (pre-30 Oct 2025) & AMC1 CAT.OP.MPA.150(b)** — contingency higher-of rule (5% / 3% with ERA / 20 min / statistical), final reserve 30 min @ 1,500 ft, alternate & additional fuel — https://regulatorylibrary.caa.co.uk/965-2012/Content/Document%20Amendment/Replace%20AMC%20Decision%2047/AMC1%20CAT%20OP%20MPA%20150%20b%20Fuel.htm (retrieved 2026-07-25). *Renumbered to CAT.OP.MPA.180 under the new fuel/energy scheme effective 30 Oct 2022.*
- **SKYbrary — Fuel: Flight Planning Definitions** — taxi/trip/contingency/alternate/final-reserve/additional/discretionary definitions, ERA, isolated aerodrome — https://skybrary.aero/articles/fuel-flight-planning-definitions (retrieved 2026-07-25).
- **SKYbrary — Fuel Emergencies: Guidance for Controllers** & **IFALPA 13ATSBL01 (ICAO minimum/emergency fuel changes, eff. 15 Nov 2012)** — MINIMUM FUEL advisory vs MAYDAY FUEL emergency, final-reserve trigger, phraseology — https://skybrary.aero/articles/fuel-emergencies-guidance-controllers (retrieved 2026-07-25); https://www.ifalpa.org/media/2007/13atsbl01-icao-changes-for-minimum-and-emergency-fuel.pdf (retrieved 2026-07-25).
- **FAA — 14 CFR 121.639–121.647 (fuel supply, domestic/flag/supplemental) & Advisory Circulars** — US fuel-supply requirements and reserve rules (for the FAA-side comparison of the scheme) — https://www.ecfr.gov/current/title-14/chapter-I/subchapter-G/part-121/subpart-U (retrieved 2026-07-25) 🟧 confirm exact section applicability.

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.3 | 2026-07-25 | OpsSpec batch 3: TA/TL published, GLS where supported, EFB perf authorised, derate ≤25%, PIC extra-fuel discretion, tankering ≥10% guideline. |
| v0.2 | 2026-07-25 | OpsSpec batch 1: operator-approval values set (EDTO 180/120, LVO CAT IIIB/I, LVTO 125m, RNP AR 0.3, RNP APCH+LPV, contingency 5%/ERA, final reserve 30 min, tankering case-by-case; steep approach deferred). |
| v0.1 | 2026-07-25 | Initial draft. Fourth OM E — Operations location-agnostic procedure. Defines the core fuel scheme (taxi/trip/contingency/alternate/final-reserve/additional/discretionary) and the contingency higher-of rule (5% / 3%-with-ERA / statistical / 20-min, 5-min floor); alternate-requirement logic (0/1/2 alternates, planning-minima add-ons, isolated-aerodrome 2-h additional + PNR); in-flight fuel management (monitor vs plan, minimum diversion fuel, commit/decision point, protect final reserve); redispatch/decision-point technique and tankering economics bounded by MTOW/MLW/CG; and the MINIMUM FUEL advisory vs MAYDAY FUEL emergency (final-reserve trigger). Built from ICAO Annex 6 Pt I §4.3.6 / Doc 9976 + EASA CAT.OP.MPA.150/.180 + FAA 14 CFR 121 + SKYbrary/IFALPA. Cross-linked to ETOPS-EDTO (critical fuel), Polar (fuel freeze), A339 Dispatch and airport-brief §16. Final-reserve value, contingency/statistical & redispatch approvals, alternate thresholds, isolated-aerodrome list and tankering carry-cost factor flagged open. |
