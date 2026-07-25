# A09 — Minimum Equipment Policy · OM A

MEL/CDL dispatch policy — owned here; applied in the OM B per-type packs and referenced from OM E.

**Version** v1.0 · **Updated** 2026-07-25 · **Status** Verified

> Read-me: framework chapter. K Global is a VATSIM virtual airline and applies the **principles** of MEL/CDL dispatch — it holds no regulator-approved MEL. This chapter sets the company policy and baseline; the per-type detail lives in the OM B packs. Flags: 🟥 restriction/hazard/hard requirement · 🟧 caution/unverified · 🟩 normal.

## 1. Purpose and scope

This chapter owns K Global's policy on dispatching an aircraft with items of equipment inoperative. It follows the **EASA Part-ORO (ORO.MLR.105)** and **CS-MMEL / Part-MMEL** model (equivalently FAA 14 CFR 121.628 / the manufacturer MMEL): an operator may dispatch with specified equipment inoperative provided the conditions of an approved list are met. The policy is owned here; the type-specific items are applied in the OM B per-type dispatch chapters and referenced from the OM E procedure docs. 🟩

## 2. MEL baseline — manufacturer MMEL

**MEL baseline — 🟩 [K Global OpsSpec 2026-07-25].** K Global adopts the **manufacturer Master Minimum Equipment List (MMEL)** for each type as the **MEL baseline**. Under the EASA model, an operator's MEL is built from — and may be **no less restrictive than** — the applicable MMEL (ORO.MLR.105). K Global's operating position is:

- The **MMEL as published by the type's manufacturer** is the reference for what may be dispatched inoperative, and under what conditions, on each type. 🟩
- Any **operator tailoring** — more-restrictive items, procedural variations, or additional operational/maintenance conditions (O) and (M) procedures — is developed and **recorded here, in A09**, as it is built out. Until an item is tailored, the MMEL condition stands. 🟥 (never dispatch outside the MMEL condition set)
- The per-type dispatch chapters (OM B) and the OM E procedure docs (ETOPS/EDTO, Cold Weather, LVO, PBN/RNP, etc.) **reference this baseline** rather than restating it — single source of truth, no drift. 🟩

## 3. MEL vs CDL

Two distinct lists govern dispatch with something missing or inoperative — keep them separate:

- **MEL (Minimum Equipment List)** — covers **inoperative equipment/instruments/systems**. Derived from the MMEL; specifies whether dispatch is permitted, any operational (O) and maintenance (M) procedures required, and any placarding and rectification interval. 🟩
- **CDL (Configuration Deviation List)** — covers **missing secondary airframe/structural parts** (e.g. certain fairings, access panels) with which the aircraft may still be dispatched, usually with a performance/limitation penalty. The CDL is part of the type's AFM. 🟩

**Rule:** an inoperative *system* is an MEL question; a missing *structural/secondary part* is a CDL question. Both must be satisfied for a legal dispatch. 🟥

## 4. Deferred-defect handling and rectification intervals

- A defect eligible for dispatch under the MEL is a **deferred defect**: dispatch is permitted, the required (O)/(M) conditions are applied, and rectification is scheduled within the item's **rectification interval category** (the A/B/C/D categories of the MMEL — A = as specified, B = 3 days, C = 10 days, D = 120 days, in the standard scheme). 🟩
- Multiple simultaneous deferred items must be assessed for **interaction** — permitted individually does not mean permitted in combination. When in doubt, do not dispatch. 🟥
- Deferred defects are visible to the crew before dispatch and are logged. At VA scale, this is a realism/discipline practice rather than a maintenance-record obligation. 🟩

## 5. Placarding

- Inoperative items dispatched under the MEL are **placarded** to inform the crew of the inoperative condition and any associated limitation. 🟩
- Responsibility for confirming the correct placard and the associated (O) procedure before flight rests with the operating crew as part of the pre-flight/dispatch acceptance. 🟩

## 6. Dispatch under the MEL — interface with operational control

- Dispatch with inoperative equipment is a **shared decision** between the operating crew and operational control (see A02 — Operational Control and Supervision): the item must be MEL-eligible, its conditions met, and the resulting limitation compatible with the planned operation (route, ETOPS/EDTO segment, LVO, RNP, cold-weather, etc.). 🟥
- Where an inoperative item touches a **capability the operation relies on for that flight** (e.g. an autoland channel for a planned LVO arrival, an item bearing on EDTO diversion capability), the flight must be re-planned to remain within capability — cross-check the **Fleet Capability Matrix** and the relevant OM E procedure doc. 🟥
- The MEL never *extends* capability or approval; it only governs dispatch with something inoperative within existing limits. 🟩

## Cross-references

- **OM B — Fleet Capability Matrix** (per-type capability that MEL dispatch must stay within): the relevant OM section.
- **OM B per-type dispatch chapters** (type-specific MEL/CDL items): the per-type Fleet packs.
- **OM E procedure docs** referencing MEL-significant systems: the relevant OM section, the relevant OM section, the relevant OM section, the relevant OM section.
- **OM A02 — Operational Control and Supervision** (dispatch authority).

## Sources & References
*Public URLs only. Retrieved 2026-07-25. Frameworks cited, not reproduced; VA holds no approved MEL.*

- EASA — Easy Access Rules for Master Minimum Equipment List (CS-MMEL) — https://www.easa.europa.eu/sites/default/files/dfu/Easy%20Access%20Rules%20for%20CS-MMEL.pdf
- CAA (UK) Regulatory Library — ORO.MLR.105 Minimum equipment list — https://regulatorylibrary.caa.co.uk/965-2012/Content/Regs/03120_OROMLR105_Minimum_equipment_list.htm
- SKYbrary — Minimum Equipment List (MEL) — https://skybrary.aero/articles/minimum-equipment-list-mel
- UK CAA — Minimum Equipment List compliance — https://www.caa.co.uk/Commercial-industry/Aircraft/Operations/Air-operator-certificates/Minimum-Equipment-List-compliance/

## Change Log

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-07-25 | Ratifications applied (A01 appointments, A03 safety policy, A04 co-pilot limits, A05 rank/categorisation, A06 flight-hours); real-world airline references neutralised per governance §1.8; QA nits swept. Promoted to Verified. |
| v0.1.1 | 2026-07-25 | OpsSpec batch 2: operator approvals set (RVSM all mainline, oceanic RNP4+RNP10, NAT HLA, CPDLC/ADS-C FANS, PBCS, cold-temp correction crew+FMS, flex/derate takeoff, MMEL baseline, autoland currency, RNP-AR per-field). MEL baseline decision recorded: manufacturer MMEL adopted per type; operator tailoring to be built out here. |
| v0.1 | 2026-07-25 | Initial draft — framework from ICAO/EASA public material (+ source investigations for A12), VA-scaled. Expanded MMEL-baseline stub into full MEL/CDL/deferred-defect/placarding/dispatch policy; cross-linked Fleet Capability Matrix and OM B/OM E. |
