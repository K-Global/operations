# A10 — Dangerous Goods and Special Loads · OM A

Acceptance, handling, and carriage policy for dangerous goods and special loads.

**Version** v1.0 · **Updated** 2026-07-25 · **Status** Verified

> Read-me: framework chapter. K Global is a VATSIM virtual airline and applies the **principles** of the dangerous-goods regime for realism — it holds no real cargo and no regulator DG approval. Policy follows the ICAO Doc 9284 / Annex 18 framework. Flags: 🟥 restriction/hazard/hard requirement · 🟧 caution/unverified · 🟩 normal.

## 1. Purpose and scope

This chapter sets K Global's policy for carrying dangerous goods (DG) and special loads. It follows the international framework of **ICAO Annex 18 (The Safe Transport of Dangerous Goods by Air)** and the detailed regime of the **ICAO Technical Instructions (Doc 9284)** — operationalised industry-side by the **IATA Dangerous Goods Regulations (DGR)**. The Technical Instructions are the only authentic legal source for DG carriage by air; K Global mirrors their structure so that its simulated cargo and load handling is realistic. 🟩

## 2. Dangerous goods — carriage policy

- **Approval scope.** DG carriage is permitted only within the operation's declared scope and only where the item is *permitted for transport by air* under the Technical Instructions. Anything **forbidden under any circumstances** by Doc 9284 is not carried. 🟥
- **Classification.** DG are handled by their **nine UN hazard classes** (explosives; gases; flammable liquids; flammable solids; oxidizers/organic peroxides; toxic/infectious substances; radioactive material; corrosives; miscellaneous incl. lithium batteries and magnetized material). Each consignment is identified by UN number, proper shipping name, class/division, and packing group. 🟩
- **Cargo vs passenger aircraft.** Some items are permitted on **cargo aircraft only** (CAO) and are forbidden on passenger flights. The carriage limit and the "Cargo Aircraft Only" restriction must be honoured against the actual aircraft/role for the flight (see the Fleet Capability Matrix for freighter identity, e.g. `B77F`). 🟥
- **State and operator variations.** Real carriage is further constrained by State and operator variations filed against the Technical Instructions; at VA scale these are represented as company policy where relevant. 🟧 [operator variations not maintained — treat Doc 9284 baseline as the rule]

## 3. Acceptance

- DG are **accepted** only when properly classified, packed, marked, labelled, and documented per the Technical Instructions, and an **acceptance check** against the DG checklist has been completed. 🟥
- **Hidden / undeclared DG** awareness applies to general cargo, mail, and passenger/crew baggage — the acceptance principle is to identify and refuse anything mis- or undeclared. 🟩
- Quantities are kept within the per-package and per-aircraft limits set by the Technical Instructions. 🟩

## 4. Prohibitions

The following are not carried other than under the specific provisions of the Technical Instructions:

- Items classed as **forbidden for transport by air** under any circumstances. 🟥
- DG in quantities or configurations exceeding the Technical Instructions limits for the aircraft role. 🟥
- **Cargo Aircraft Only** items on a passenger service. 🟥
- Undeclared or mis-declared dangerous goods (refused on acceptance). 🟥

## 5. Special loads

Beyond DG proper, K Global applies realistic handling principles for special loads:

- **Live animals (AVI)** — accepted per the IATA Live Animals Regulations principle: suitable container, environment, and loading position. 🟩
- **Human remains (HUM)** — carried with appropriate documentation and dignity of handling. 🟩
- **Weapons / munitions of war / security items** — subject to authorisation and to the security regime (see A11); firearms and ammunition follow both DG (ammunition = Class 1) and security handling. 🟥
- **Outsize / heavy cargo** — loaded within structural and centre-of-gravity limits, with any spreader/restraint requirement respected; drives load-planning, not just acceptance. 🟩
- **Perishables, valuables, and other special commodities** — handled per their category. 🟩

## 6. Crew notification — NOTOC

- When DG or notifiable special loads are on board, the **NOTOC (Notification to Captain)** informs the operating crew of what is carried, where, and the emergency response reference. Providing accurate information to the Pilot-in-Command is a hard requirement of the DG regime. 🟥
- The PIC uses the NOTOC to inform any in-flight response and any report to ATC in an emergency. 🟩

## 7. Training principle

- Dangerous-goods competence is a **role-based training** requirement in the real regime, refreshed periodically (the "recurrent" cycle). K Global represents this as a **DG-awareness training** pointer: anyone accepting, handling, or carrying DG/special loads should understand the classes, the acceptance principle, undeclared-DG awareness, and the NOTOC. Delivery sits in **OM D Training**; this chapter owns the *policy*. 🟩

## Cross-references

- **OM A11 — Security** (weapons, security items, cargo/mail screening interface). See [A11 — Security](a11-security.md).
- **OM A12 — Occurrence Reporting and Investigation** (DG incidents/undeclared-DG findings are reportable occurrences). See [A12 — Occurrence Reporting and Investigation](a12-occurrence-reporting-and-investigation.md).
- **OM D Training** — dangerous-goods / special-loads training delivery.
- **OM B — Fleet Capability Matrix** (freighter vs passenger role, e.g. `B77F`): the relevant OM section.

## Sources & References
*Public URLs only. Retrieved 2026-07-25. Frameworks cited, not reproduced; VA carries no real cargo.*

- ICAO — Dangerous Goods / Technical Instructions (Doc 9284) — https://www.icao.int/Dangerous-Goods/Technical-Instructions
- ICAO — Doc 9284 (document series page) — https://www.icao.int/publications/doc-series/doc-9284
- SKYbrary — Technical Instructions (Doc 9284) — https://skybrary.aero/articles/technical-instructions
- SKYbrary — Dangerous Goods — https://skybrary.aero/articles/dangerous-goods
- IATA — Dangerous Goods Regulations (DGR) — https://www.iata.org/en/publications/dgr/

## Change Log

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-07-25 | Ratifications applied (A01 appointments, A03 safety policy, A04 co-pilot limits, A05 rank/categorisation, A06 flight-hours); real-world airline references neutralised per governance §1.8; QA nits swept. Promoted to Verified. |
| v0.1 | 2026-07-25 | Initial draft — framework from ICAO/EASA public material (+ source investigations for A12), VA-scaled. |
