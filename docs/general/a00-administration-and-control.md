# A00 — Administration and Control · OM A

Control of the Operations Manual itself — its purpose and structure, amendment and version control, distribution, the K Global identity block, applicability, and how the manual relates to the platforms K Global operates on.

**Version** v1.0 · **Updated** 2026-07-25 · **Status** Verified

> Read-me: flag legend — 🟥 restriction / hazard / hard requirement · 🟧 caution / unverified / to-ratify · 🟩 normal. This chapter governs the manual as a document; the operational policy it introduces lives in A01–A14 and in OM B/C/D/E.

---

## 1. Purpose of this manual

The K Global Operations Manual (OM) is the single, controlled statement of how the airline is organised and how it operates. It exists to give every member one authoritative reference — from company policy and command authority through to the method for a specific manoeuvre at a specific airport — and to keep that reference internally consistent as it grows.

The OM is written for a **simulation environment**. K Global is a virtual airline flown on VATSIM and dispatched through VAMSYS; nothing in this manual confers any real-world airman privilege, qualification, or authority. Where the OM leans on real-world regulatory frameworks (ICAO Annex 6, EASA Part-ORO/Part-CAT), it does so to give the simulation realism and structure, not to assert real-world compliance.

The OM is the reference standard for training and assessment. Members are expected to fly to its procedures as a matter of good practice and for maximum realism; it is not a tool for policing individual flying standards.

---

## 2. The OM A–E system

The manual is published in five parts. Each part owns a different layer of the operation, and they are designed to interlock: policy is *owned* in one place and *applied* in another.

| Part | Title | Role — "what it answers" |
|---|---|---|
| **OM A** | Policy & SOP | *What we do.* Company organisation, command authority, safety policy, and the SOP philosophy the rest of the manual implements. The keystone — where a rule is **owned**. |
| **OM B** | Fleet | *How we do it on this type.* Per-type airframe packs — dispatch data, checklists, QRH, systems — applying OM A/E policy to a specific aircraft. |
| **OM C** | Routes and Destinations | *Where we do it.* Airport, airspace, and route briefings — applying OM A/E policy to a specific place. |
| **OM D** | Training | *How we build competence.* Type, recurrent, and special-qualification training — delivers the competence OM A requires. |
| **OM E** | Operations | *The method.* Location-agnostic operating procedures (ETOPS/EDTO, PBN, RVSM, fuel, LVO, etc.) — the *method* that OM B packs and OM C briefs apply, satisfying the *policy* OM A owns. |

**Consistency principle.** Where a policy owned in OM A is also expressed operationally in OM E — notably **fuel and payload** (A08 ↔ Fuel Policy) and **minimum-equipment dispatch** (A09 ↔ OM E MEL/CDL references) — OM A states the policy and OM E states how the method applies it. A change to one requires a consistency check against the other. 🟧

Within OM A, chapters are numbered **A00–A14**; A00 (this chapter) controls the document, A14 holds the definitions and abbreviations register. The chapter map lives on the [General overview](index.md).

---

## 3. Identity block

| | |
|---|---|
| **Brand** | K Global |
| **Concept** | A virtual airline modelled on a **full-service, multi-brand network-carrier group** — one brand, one callsign, one livery system, covering the full market map of a flag carrier and its group (premium long-haul through low-cost, leisure, regional, business jet, and freight) segregated internally by **business unit** rather than by separate airlines. |
| **Home / core hub** | **Frankfurt (EDDF)**, expanding across seven world regions. |
| **Operator callsign** | **KAY** — telephony "**Kayak**". A single callsign for the whole group; all nine business units operate as KAY, distinguished by flight-number band, not by separate callsigns. |
| **Business units** | Premier · Intercontinental · Regular · City · Express · Regional · Charter/Vacation · Executive · Cargo. |
| **Registration scheme** | Single German `D-AK…` scheme, allocated in per-type class blocks. |
| **Platforms** | **VATSIM** (the live network flown on) · **VAMSYS** (operations, dispatch, and roster system of record). |

> **Callsign in this manual.** The operator's own company/radio callsign **KAY "Kayak"** is stated here because A00 is the operator-identity and administration context. This is the one permitted use: the manual identifies the operator by its callsign. It does **not** license the naming of individual *flight* callsigns anywhere in OM content — those remain out of the manual (governance rule of record §3). 🟥

The full-service network-group parallel — mapping each K Global unit to a real-world analogue — and the full business-unit and network detail are held in the Company Knowledge base and summarised in A01.

---

## 4. Applicability

This manual applies to **all K Global members** as a condition of membership: it governs conduct on and use of company systems, and it is the operating reference for all flights logged under the K Global identity.

- **Membership is the trigger.** By joining, a member accepts the policies set out across OM A and agrees to operate to them.
- **One current version governs.** Only the current published version of any chapter is authoritative. A superseded copy, a local download, or a cached extract must **not** be used for operational reference once a newer version is published. 🟥
- **Precedence.** Where a genuine conflict exists between documents, the more restrictive requirement applies, and OM A (the owning policy) takes precedence over an operational expression of the same rule elsewhere; report the conflict so it can be reconciled.
- Members operating other virtual airlines is unremarkable, but conduct under the K Global identity — on the network, on company channels, and in the wider flight-sim community — is expected to uphold the airline's standing.

---

## 5. Relationship to VATSIM and VAMSYS

K Global does not operate a network of its own; it operates **on** VATSIM and **through** VAMSYS. The OM sits above both and never overrides them.

- **VATSIM** is the live environment. When flying online under the KAY callsign, a member is bound by the VATSIM Code of Conduct and by ATC instructions and network rules; those take precedence over any company preference. K Global procedures are written to be compatible with, and never more restrictive than the safe conduct of, network operations. Nothing in the OM authorises a deviation from a lawful network instruction.
- **VAMSYS** is the operations and dispatch platform and the **system of record** for the roster, fleet, routes, airports, and flight logging. Where the OM and the live VAMSYS data differ on an operational fact (a route, a registration, a field), **VAMSYS is the source of truth** and the OM is corrected to match. VAMSYS may be named in this manual as a data source; individual platform usernames may not.
- The OM adds the layer neither platform provides on its own: company policy, management structure, command authority, and the standardised method that makes K Global flying coherent across units and regions.

---

## 6. Amendment and version control

The manual is a living, controlled document. Every content chapter carries **version metadata only** — a version number, an updated date, and a status — and never records authorship, reviewer, or approver names.

**Status lifecycle.** Each chapter moves through a defined lifecycle, shown in its header:

| Status | Meaning |
|---|---|
| **Stub** | Structural placeholder — scope defined, no policy content yet. |
| **Draft v0.x** | Content built and internally coherent, not yet ratified; may contain 🟧 items awaiting a decision. |
| **Verified v1.0** | Content checked against its sources and any open items closed; the settled reference. |

**Amendment procedure.**
- A proposed change is drafted against the current version, keeping the chapter internally consistent and consistent with any partner chapter (see §2).
- Each substantive change **increments the version** and adds a dated line to that chapter's **Change Log**, which is the record of what changed and when.
- Open decisions and unverified facts are carried **in the chapter** as 🟧 flags plus an open-items note. Named appointments and other decisions awaiting sign-off are flagged **🟧 [appointment — ratify]** or **🟧 [decision — ratify]** until confirmed.

**Flag discipline.** 🟥 restriction / hazard / hard requirement · 🟧 caution / unverified / to-ratify · 🟩 normal. When the correct flag is unclear, pick the redder.

---

## 7. Distribution and access

- The controlled master of every chapter lives in the K Global OM repository; that copy is the reference. Members read the current version there rather than relying on private copies.
- **Currency check.** Before relying on a chapter, confirm it is the current version (header version/date against the repository). A newer version supersedes all earlier copies (§4). 🟥
- Company documentation is for member use in the K Global context; it is not authored for redistribution as a standalone product.

---

## 8. Definitions and abbreviations

Manual-wide definitions, abbreviations, and the reference index are held in **A14 — Definitions, Abbreviations and References**. Chapters use standard aviation terminology; where a term carries a K Global-specific meaning (business unit, flight-number band, hub, post-holder title), it is defined at first use and consolidated in A14.

---

## Cross-references

- [[A01 — Organisation and Responsibilities](a01-organisation-and-responsibilities.md)](a01-organisation-and-responsibilities.md) — management structure, post-holders, and command authority.
- **A14 — Definitions, Abbreviations and References** — manual-wide register.

## Sources & References

- ICAO, *Annex 6 — Operation of Aircraft, Part I* (International Commercial Air Transport — Aeroplanes) — operations-manual and operator-organisation framework. https://www.icao.int
- EASA, *Part-ORO* (Organisation Requirements for Air Operations), incl. ORO.MLR.100 (Operations Manual) and ORO.GEN — operations-manual structure and amendment/control principles. https://www.easa.europa.eu/en/regulations
- VATSIM Code of Conduct and network regulations — governing framework for online operations. https://vatsim.net/docs/policy/code-of-conduct
- K Global Company Knowledge — company profile, brand, callsign, and business-unit model (internal source of record).

## Change Log

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-07-25 | Ratifications applied (A01 appointments, A03 safety policy, A04 co-pilot limits, A05 rank/categorisation, A06 flight-hours); real-world airline references neutralised per governance §1.8; QA nits swept. Promoted to Verified. |
| v0.1 | 2026-07-25 | Initial draft — re-expressed from source SOP/policy + Knowledge company profile, re-based to K Global model; appointments flagged for ratification. |
