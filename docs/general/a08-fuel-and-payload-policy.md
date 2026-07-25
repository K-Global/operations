# A08 — Fuel and Payload Policy · OM A

Company fuel and payload policy — owned here; applied operationally in OM E `Fuel Policy.md`.

**Version** v1.0 · **Updated** 2026-07-25 · **Status** Verified

> Read-me: **OM A owns the fuel and payload policy.** This chapter states the company fuel scheme, the approved operator values, the planning/alternate-minima principle, the mass & balance / loadsheet policy, and the low-fuel declaration policy. **OM E `Fuel Policy.md` operationalises it** — the two must stay consistent; where a number appears in both, it is stated once here as policy and applied there as method. No live figures are stored — the actual taxi/trip/contingency/alternate/reserve figures come from the OFP at dispatch. Flag legend: 🟥 restriction/hazard/hard requirement · 🟧 caution/unverified · 🟩 normal.

---

## 1. Policy statement

Every K Global flight carries fuel sufficient for the intended flight with a safe margin for contingency, diversion and holding, and is loaded within all weight and balance limits. The **commander** is responsible for ensuring that sufficient fuel is carried and that the aircraft is correctly loaded; the **operational-control / dispatch** function (OM A02) builds and releases the plan. This chapter sets the policy; **OM E `Fuel Policy.md`** applies it as the operating method, and the OFP produced by SimBrief carries the day's figures.

- 🟩 **Plan the OFP fuel unless there is a reason not to.** The OFP fuel figure is loaded unless the commander identifies sound operational or economic reasons to add discretionary fuel (§2). Extra fuel is not free — every additional tonne carried burns fuel to carry it — so it is a judgement, not a default.

---

## 2. The company fuel scheme

The minimum required block fuel is the **sum** of the components below. This is the K Global scheme; OM E `Fuel Policy.md` §3 defines each component in operating detail.

| Component | What it covers | K Global rule |
|---|---|---|
| **Taxi fuel** | APU, start, taxi-out before takeoff | Airport/type estimate 🟩 |
| **Trip fuel** | Takeoff → landing at destination (climb, cruise, descent, approach) | From the OFP profile at planned level / cost index / winds 🟥 |
| **Contingency fuel** | Hedge against route/wind/level/performance deviation | 🟥 **5% of trip fuel (default), or 3% of trip fuel with a suitable en-route alternate (ERA)** 🟩 [K Global OpsSpec 2026-07-25] |
| **Alternate fuel** | Missed approach at destination → land at the destination alternate | Destination MAP → alternate approach & land; size to the more distant of two alternates 🟥 |
| **Final reserve** | The untouchable floor | 🟥 **30 minutes holding at 1,500 ft** over the alternate (or destination if no alternate), ISA, at estimated landing weight 🟩 [K Global OpsSpec 2026-07-25] |
| **Additional fuel** | The binding worst case (isolated aerodrome, EDTO critical fuel, OEI / depressurised to alternate) | 🟥 As required so the limiting scenario completes with final reserve intact |
| **Discretionary / PIC extra** | Commander's judgement (weather, ATC, tankering) | 🟩 **PIC discretion, no fixed cap, within MTOW/MLW/MZFW and the CG envelope** 🟩 [K Global OpsSpec 2026-07-25] |
| **Minimum block fuel** | Sum of the above | Taxi + Trip + Contingency + Alternate + Final Reserve + Additional + Extra |

- 🟥 **Contingency — the higher-of rule.** K Global's approved default is **5% of trip fuel**, with the **3%-with-ERA** option enabled when a suitable en-route alternate lies within the defined circle. No statistical contingency-fuel (SCF) method is currently approved. [K Global OpsSpec 2026-07-25]
- 🟥 **Final reserve is untouchable.** Final reserve is **30 minutes** and is planned never to be consumed. It is the number the low-fuel terminology hangs on (§5).
- 🟩 **Discretionary fuel is bounded by weight/CG.** PIC extra fuel is at the commander's discretion with no fixed cap, but may never push the aircraft above MTOW/MLW/MZFW or outside the CG envelope, and must respect runway/climb performance and structural limits (§4).

---

## 3. Planning and alternate-minima principle

The fuel scheme is only valid against a sound alternate and planning-minima assessment. The policy principle is below; the operating method (thresholds, add-on tables, isolated-aerodrome case) is in **OM E `Fuel Policy.md` §4**.

- 🟥 **Alternates — 0, 1 or 2.** **At least one** destination alternate is the normal requirement. It may be omitted only in the defined good-weather / multiple-runway case, or when the destination is an **isolated aerodrome**. **Two** alternates are required when the destination forecast is marginal, below minima, or uncertain over the applicable time window. A take-off alternate is required when departure weather is below landing minima or a return is otherwise not possible. An **en-route alternate (ERA)** enables the reduced (3%) contingency option (§2).
- 🟥 **Planning minima are more conservative than approach minima.** An aerodrome may be *planned* as an alternate only if its **forecast** over the use window is at or above minima that add a margin to its own approach minima — a hedge against forecast error. Where minimum values established by an overflown State are higher than the company standard, the **higher** value applies.
- 🟥 **Isolated aerodrome.** Where no suitable alternate exists, the flight plans as isolated: instead of alternate fuel, carry **additional fuel for 2 hours at normal cruise** above the destination, including final reserve, and compute and continuously update a **Point of No Return** that is not passed unless a safe landing at the ETA is assured.

---

## 4. Mass, centre of gravity and the loadsheet

- 🟥 **The commander is responsible for correct loading.** Before each flight the commander must be satisfied that the aircraft is loaded within all **weight and centre-of-gravity limits** — Maximum Take-Off Weight (MTOW), Maximum Landing Weight (MLW), Maximum Zero-Fuel Weight (MZFW) and the CG envelope. The airframe's certified maximum weights are the OM B limits for the type (which may be set below the manufacturer's structural maxima); the type limits govern.
- 🟩 **Weights build up predictably.** Dry Operating Weight + traffic load = Zero-Fuel Weight; ZFW + reserves = Landing Weight; Landing Weight + trip fuel = Take-Off Weight. The OFP/dispatch plan is built so the weight limitations are respected for the assigned registration.
- 🟩 **Loadsheet — provisional then final.** The weights on the OFP/dispatch plan are the **provisional loadsheet** used for planning and performance. Where a **final loadsheet** with actual figures is provided, it must be **received, checked and acknowledged before takeoff**; a last-minute change (LMC) within the fleet tolerance may be handled by the type's critical-data procedure, otherwise the full critical-data entry is done before takeoff (OM B). In sim operation, load the aircraft to the specified **Zero-Fuel Weight** so results are consistent across add-ons.
- 🟥 **Fuel on board is cross-checked.** The total fuel indicated must be checked against the fuel required by the OFP before departure, allowing for known small discrepancies (APU burn, indication/uplift tolerance). A shortfall against the OFP requirement is resolved before departure.

---

## 5. Tankering and low-fuel declaration policy

- 🟩 **Tankering.** Carrying extra fuel from a cheaper station to avoid buying at an expensive one is authorised as a **commercial** judgement, bounded by safety. K Global's **guideline trigger is a ≥10% fuel-price differential** between departure and destination, weight/CG permitting. [K Global OpsSpec 2026-07-25] Tankered fuel may **never** breach MTOW/MLW/MZFW, the CG envelope, or runway/climb-performance and structural limits, and never substitutes for any required minimum fuel. Tankering is not advised when a contaminated/icy runway is anticipated. The per-leg decision is made against the actual price differential and the weight/CG state (OM E `Fuel Policy.md` §6).
- 🟥 **In-flight fuel management and low-fuel terminology.** Actual fuel is monitored against the OFP plan at each checkpoint; the aircraft must stay above the **minimum diversion fuel** (fuel to reach the nearest suitable alternate + final reserve) until a landing is assured.
  - 🟧 **"MINIMUM FUEL"** is an **advisory** — the flight is committed to a specific aerodrome and any further delay may result in landing below final reserve. It does not confer priority; it warns ATC.
  - 🟥 **"MAYDAY FUEL"** is an **emergency**, declared when the predicted usable fuel on landing at the nearest suitable aerodrome is **less than final reserve**. Protect final reserve — if the prediction crosses below it, declare **MAYDAY FUEL without delay**; do not manage down into the reserve.

---

## 6. Consistency with OM E

This chapter and **OM E `Fuel Policy.md`** are deliberately aligned. The **approved operator values are identical in both**: contingency **5% / 3%-with-ERA**, final reserve **30 minutes**, discretionary fuel at **PIC discretion within MTOW/MLW/MZFW/CG**, tankering **≥10%** price-differential guideline. OM A states them as **policy**; OM E states them as **method** and adds the operating detail (component definitions, alternate thresholds, ERA circle geometry, isolated-aerodrome PNR, redispatch technique, in-flight management). If either document changes an operator value, the other is updated in the same edit so the two never diverge.

---

## Cross-references

- **OM E the relevant OM section** — operationalises this policy; the two must stay consistent (component definitions, alternate/planning-minima method, in-flight fuel management, redispatch, tankering).
- **OM A02 — Operational Control and Supervision** — the dispatch/release framework that builds and releases the fuel/load plan.
- **OM A09 — Minimum Equipment Policy** — technical-status inputs to dispatch fuel/load planning.
- **OM B airframe packs** the relevant OM section — the type weight limits, taxi-fuel and critical-data / loadsheet procedures.
- **OM E the relevant OM section** — the critical-fuel scenario that can size the *additional* fuel line on EDTO legs.

## Sources & References
*Public URLs only. Subscription/in-sim material (SimBrief, AFM) may inform content but is not cited. Durable policy — no live fuel/price/weight data stored here.*

- **ICAO Annex 6 — Operation of Aircraft, Part I, §4.3.6 (fuel requirements) & §4.3.7 (in-flight fuel management)** — fuel-scheme components, 30-min final reserve, isolated-aerodrome case, MINIMUM/MAYDAY FUEL — via SKYbrary: https://skybrary.aero/articles/fuel-regulations (retrieved 2026-07-25).
- **ICAO Doc 9976 — Flight Planning and Fuel Management (FPFM) Manual** — contingency options (5% / 3%-ERA), ERA circle, isolated-aerodrome 2-hour additional + PNR — https://www.unitingaviation.com/livecycle/Documents/ICAO_Doc_9976-1_EN.pdf (retrieved 2026-07-25).
- **EASA — CAT.OP.MPA.150 / .180 Fuel policy & CAT.POL.MAB (mass & balance)** — contingency higher-of rule, final reserve, alternate & additional fuel, mass & balance responsibility — https://www.easa.europa.eu/en/document-library/regulations (retrieved 2026-07-25).
- **SKYbrary — Fuel: Flight Planning Definitions; Fuel Emergencies: Guidance for Controllers** — component definitions; MINIMUM FUEL vs MAYDAY FUEL — https://skybrary.aero/articles/fuel-flight-planning-definitions (retrieved 2026-07-25); https://skybrary.aero/articles/fuel-emergencies-guidance-controllers (retrieved 2026-07-25).

## Change Log

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-07-25 | Ratifications applied (A01 appointments, A03 safety policy, A04 co-pilot limits, A05 rank/categorisation, A06 flight-hours); real-world airline references neutralised per governance §1.8; QA nits swept. Promoted to Verified. |
| v0.1 | 2026-07-25 | Initial draft — re-expressed from source SOP operating procedures + K Global OM E/OpsSpec; fuel/airspace policy aligned to OM E. |
