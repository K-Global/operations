# A04 — Crew Composition · OM A

Flight crew complement policy, allocation of duties, long-range augmentation, and the personal flying log — expressed for a single-network-pilot VATSIM operation.

**Version** v1.0 · **Updated** 2026-07-25 · **Status** Verified

> Flag legend: 🟥 restriction/hazard/hard requirement · 🟧 caution/unverified/to-ratify · 🟩 normal.

## Scope

- Minimum flight crew complement for the K Global fleet.
- How a multi-crew certified aeroplane is operated by one network pilot on VATSIM — stated honestly.
- Allocation of duties between Pilot Flying (PF) and Pilot Monitoring (PM).
- Augmented-crew and in-flight rest policy for long-range and ultra-long-range sectors.
- Optional shared-cockpit (two live pilots) operation and the handling limits that apply to the operating co-pilot.
- The personal flying log book.

---

## 1. Minimum flight crew

🟩 Every mainline K Global type is certified for **multi-pilot (two-crew) operation** — a flight deck of a **Commander (Captain)** and a **co-pilot (First Officer)**. The Fleet Capability Matrix keys each type by ICAO designator and confirms the two-pilot certification basis; no mainline type is single-pilot certified. See [the relevant OM section](../fleet/capability-matrix.md).

The **minimum flight crew for dispatch of any mainline sector is therefore two pilots** in the certified sense: the aeroplane is designed, checklisted and normally flown as a two-crew machine, and K Global procedures (SOP calls, cross-checks, challenge-and-response) assume two seats occupied. 🟩

Business-jet and single-pilot-certified types in the wider Executive fleet may carry a lower certified minimum; those are addressed in the relevant airframe pack and are out of scope of this mainline policy. 🟧

## 2. The single-pilot VATSIM reality — stated honestly

K Global is a **VATSIM virtual airline**: in the overwhelming majority of cases **one network pilot flies the whole sector alone**, occupying a flight deck built for two. This is the normal condition, not an exception, and the manual does not pretend otherwise. 🟩

How K Global treats it:

- The **single connected pilot is the Commander** for the sector and carries full command authority and responsibility (see [[A01 — Organisation and Responsibilities](a01-organisation-and-responsibilities.md)](a01-organisation-and-responsibilities.md), Command authority). There is no split of legal responsibility because there is only one person on the network.
- The pilot **flies both roles** — PF and PM — sequentially, working the SOP flows and checklists for both seats as far as workload and automation allow. Realism is the aim: run the two-crew flows, make the calls, use the automation the way a crew of two would, rather than treating the aeroplane as a single-seat machine. 🟩
- Where a procedure in this manual or in OM E is written for "the crew" or references PF/PM duties, the **solo pilot performs both parts**. Nothing in the two-crew wording removes a requirement; it simply describes how the task is split when two pilots are present.
- The pilot must also meet the **online network's own minimum-presence rules** — VATSIM expects the connected pilot to be at the controls and contactable, and long unattended absences from the flight deck are not permitted beyond the in-flight-rest provision below. 🟥

This honest framing matters: the composition rules that follow (augmentation, shared cockpit, co-pilot limits) are **available realism options**, not daily obligations. The baseline is one competent pilot flying a two-crew aeroplane well.

## 3. Allocation of duties — PF and PM

🟩 K Global operates the standard two-role split used across the industry:

- **Pilot Flying (PF)** — controls flight path and thrust (manually or through the automation), and directs configuration changes.
- **Pilot Monitoring (PM)** — works radios, actions the PF's configuration and checklist calls, monitors the PF and the flight path, and cross-checks.

Role allocation is decided at briefing. When two live pilots are present, either seat may be PF for a given sector subject to the co-pilot handling limits in §6. When one pilot flies solo, that pilot **is** both PF and PM and manages the workload accordingly, leaning on automation during high-workload phases. Detailed per-phase PF/PM flows live in Flight Management and Operational Flows.

## 4. Command and deputy

The Commander holds ultimate responsibility for the safety, security and conduct of the flight throughout the period of command. Where a second pilot is carried, the **operating co-pilot is the Commander's nominated deputy**. The pilot who acts as Commander signs (files) the flight regardless of personal rank or seniority. Full command-authority policy is held in [[A01 — Organisation and Responsibilities](a01-organisation-and-responsibilities.md)](a01-organisation-and-responsibilities.md); this chapter covers only who sits where.

## 5. Augmented crew and in-flight rest (long-range / ULR)

Long and ultra-long-range sectors in a major full-service network group are flown by an **augmented crew** (three or four pilots) so that each pilot takes a rest period in a crew rest facility and no pilot is at the controls for the whole sector. K Global models this as a **realism option** for long sectors:

- **Trigger.** The augmentation/rest option applies to **long-haul sectors** — as a working threshold, planned sector length **over 5 hours**. 🟩 Below that, the sector is flown without a rest period.
- **In-flight rest for the solo pilot.** On a qualifying long sector the connected pilot may take an **off-duty (rest) period** in the cruise, reflecting the real handover to a relief pilot. As a discipline: 🟩
  - remain at the controls for at least the **first portion of the sector** (guideline: the first ~30 minutes after gear-up) before going off-duty;
  - resume duty and be back on the flight deck in good time before descent (guideline: at the latest **within ~60 minutes of destination**);
  - respect the online network's presence and position-reporting requirements throughout — an off-duty period does **not** authorise abandoning the connection in a way the network forbids. 🟥
- **Logging.** Time spent off-duty is not logged as pilot-at-controls time even though the sector's total block time is recorded — see §7 and [[A06 — Crew Health, Fatigue and Flight-Time Limitations](a06-crew-health-fatigue-and-flight-time-limitations.md)](a06-crew-health-fatigue-and-flight-time-limitations.md).
- **Rest facilities.** The physical crew-rest provision (bunk vs seat) is a per-type fact carried in the airframe packs; it is modelled, not simulated, and imposes no additional dispatch requirement here. 🟩

Augmentation and in-flight rest interact with the flight-time / off-duty scheme in [`A06`](a06-crew-health-fatigue-and-flight-time-limitations.md) and with ETOPS/EDTO planning in [the relevant OM section](../flight-ops/etops-edto.md).

## 6. Shared-cockpit (two-pilot) flights — optional

Where two members choose to crew a single aeroplane together (shared cockpit), the flight is flown to the two-crew SOP with a genuine PF/PM split. Two points of policy apply:

- **Command is retained.** The Commander's responsibility for the safe, efficient conduct of the flight is unchanged when the co-pilot is PF. Significant decisions and actions taken by the co-pilot are supervised by the Commander, who may resume the PF role at any time. Where the co-pilot is flying a full sector as pilot-in-command-under-supervision, the pre-departure brief is given by the co-pilot and must demonstrate awareness of the actions required if an emergency arises while they hold control. 🟩
- **Co-pilot handling limits.** 🟩 ratified 2026-07-25 When the co-pilot is the operating pilot, the following handling limits apply unless the co-pilot is undergoing supervised command training (in which case Commander limits apply):
  - take-off permitted in visibility **600 m RVR or greater**;
  - landing from an approach flown to **Category I** precision or non-precision minima (no co-pilot autoland to CAT II/III minima);
  - crosswind for take-off and landing limited to **two-thirds** of the promulgated type crosswind for the prevailing conditions;
  - at "restricted" aerodromes (Category B/C — see [[A05 — Qualification Requirements](a05-qualification-requirements.md)](a05-qualification-requirements.md)), the Commander's own recency and area experience are weighed before delegating the sector.

  These limits are carried forward for realism and were **ratified 2026-07-25** alongside the rank/categorisation scheme in [`A05`](a05-qualification-requirements.md).

## 7. Personal flying log book

🟩 K Global maintains an automatic record of every filed sector on the operations platform. That record — block time, sectors, types, routes — **constitutes each pilot's personal flying log book**; there is no separate paper log. The platform is VAMSYS, which records the flight as reported by the pilot's client. Because these hours drive recency, currency and the rank/categorisation scheme, the accuracy of filed sectors matters (see [[A05 — Qualification Requirements](a05-qualification-requirements.md)](a05-qualification-requirements.md) and [[A06 — Crew Health, Fatigue and Flight-Time Limitations](a06-crew-health-fatigue-and-flight-time-limitations.md)](a06-crew-health-fatigue-and-flight-time-limitations.md)). On a sector flown with an in-flight-rest period, the log reflects time at the controls, not the off-duty portion (§5).

---

## Cross-references

- [[A01 — Organisation and Responsibilities](a01-organisation-and-responsibilities.md)](a01-organisation-and-responsibilities.md) — command authority and deputy
- [[A05 — Qualification Requirements](a05-qualification-requirements.md)](a05-qualification-requirements.md) — rank/categorisation, co-pilot limits, aerodrome categories
- [[A06 — Crew Health, Fatigue and Flight-Time Limitations](a06-crew-health-fatigue-and-flight-time-limitations.md)](a06-crew-health-fatigue-and-flight-time-limitations.md) — flight-hours / off-duty scheme
- [the relevant OM section](../fleet/capability-matrix.md) — per-type certification basis
- Flight Management and Operational Flows — PF/PM phase flows
- [the relevant OM section](../flight-ops/etops-edto.md) — long-range diversion planning
- Training that delivers two-crew SOP competence: **OM D** (🟧 not yet built)

## Sources & References
*Public URLs only. Retrieved 2026-07-25.*

- ICAO — Annex 6, Operation of Aircraft (flight crew composition; crew members at duty stations) — https://www.icao.int/safety/airnavigation/Pages/annexes-booklets.aspx
- EASA — Easy Access Rules for Air Operations (Regulation (EU) No 965/2012, Part-ORO — composition of crew) — https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-air-operations
- VATSIM — Code of Conduct (connected-pilot presence expectations) — https://vatsim.net/docs/policy/code-of-conduct

## Change Log

| Version | Date | Change |
|---|---|---|
| v1.0 | 2026-07-25 | Ratifications applied (A01 appointments, A03 safety policy, A04 co-pilot limits, A05 rank/categorisation, A06 flight-hours); real-world airline references neutralised per governance §1.8; QA nits swept. Promoted to Verified. |
| v0.1 | 2026-07-25 | Initial draft — re-expressed from source SOP/policy + type ratings, re-based to K Global; rank/qual scheme flagged for ratification; training detail deferred to OM D. |
