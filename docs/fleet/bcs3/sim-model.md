<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  BCS3 Airbus A220-300
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# BCS3 — Airbus A220-300 · Sim-Model

**BCS3 / A220 family — separate type rating BD-500** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **Unlike the A339 pack, this file has no leading candidate to recommend — that is the honest state of the open item** 🟥 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| Freeware A220-100 project (community developer) | X-Plane 11 / 12, publicly listed as in-development/WIP `[VERIFY]` | unknown — not evaluated | 🟥 Not usable as-is — wrong sub-variant (A220-**100**, K Global flies the **-300**) and WIP status, no K Global test pass |
| Freeware A220-300 project (community developer) | **X-Plane 12 only** at time of writing `[VERIFY]` | unknown — not evaluated | 🟥 Not usable — no X-Plane 11 support confirmed; K Global's sim baseline is XP11 |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships **no** A220/CSeries of any generation |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the gap 🟥 `[VERIFY]`:** unlike the A339 pack (which has a genuine leading XP11 candidate awaiting formal test), the BCS3 has **no candidate that clears the bar** — the two publicly known community projects are either the wrong sub-variant (-100 vs -300) or built for X-Plane 12 only. K Global has **not** identified, let alone tested, an X-Plane 11 A220-300 add-on. This is an **open item**, not a pending management decision: there is nothing yet to approve. The Intro §2 mapping line (`Sim model: no X-Plane 11 model confirmed [VERIFY]`) stays open until either (a) a suitable XP11 candidate is found, or (b) K Global accepts a freeware/WIP build with explicit fidelity caveats, or (c) the fleet moves to XP12 (Instructions §5 trigger).

## 2. Type ↔ model fidelity note 🟥

- There is currently **no model to compare against the type**. Whatever candidate is eventually adopted must be checked against: **PW1500G** geared-turbofan spool/sound/thrust behaviour (distinct from older-generation turbofans), **Collins Aerospace-style avionics** — EICAS crew-alerting + an Electronic Checklist (ECL) presented on the flight-deck displays, rather than an Airbus ECAM — and a **fly-by-wire system with two control laws (Normal mode / Direct mode)**, not the three-tier Normal/Alternate/Direct law scheme used on the Airbus A320/A330/A350 family. A candidate modelled as a generic Airbus FBW jet with a repainted livery would **misrepresent** the type. 🟥
- Cross-ref: **Intro §2** (mapping, flagged open item) and **Dispatch §2** (SimBrief profile, which correctly targets BCS3/PW1500G regardless of the sim-model gap).

## 3. Systems-depth caveats

- **No systems depth to assess.** With no model tested, K Global cannot yet state whether any candidate's crew-alerting, FBW law reversion, bleed/pressurisation, or engine-start logic will support the Checklist and QRH as written. Treat every procedure in those two files as **reference-only** until a model is confirmed and validated against it 🟥 `[VERIFY]`.
- **General:** neither known freeware project is confirmed to reach "study level" (deep systems/failure modelling); both are described publicly as community/freeware efforts, which typically trail payware study-level add-ons in systems fidelity. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata, once one is approved.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| No approved model at all | 🟥 | — | K Global cannot dispatch a "flown model" reference for BCS3 in the way the A339/A359 packs do | None available — treat Checklist/QRH as generic reference pending a model decision |
| Sub-variant mismatch | 🟥 | Freeware A220-100 project | -100 is a shorter, lighter airframe than the K Global -300 — weights, V-speeds and cabin length would not match | Do not substitute the -100 build for -300 line flying/training without a clear caveat |
| XP-version mismatch | 🟥 | Freeware A220-300 project | Built for XP12 only at time of writing — no XP11 port confirmed | Not usable on K Global's XP11 baseline until (if ever) an XP11 build appears, or K Global moves to XP12 |
| Navdata / AIRAC | 🟧 | Any future candidate | FMS routing/procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle once a model is flown |
| Perf realism | 🟧 | Any future candidate | Modelled performance would be approximate; not certified data | Use SimBrief OFP (Dispatch) as the planning authority, not the sim's own figures |

## 5. Constraints that affect dispatch or procedures 🟥

- **No sim-model decision exists yet 🟥 `[VERIFY]`.** This blocks nothing in real-world dispatch (Dispatch §1–§7 stand on their own, driven by the SimBrief BCS3/PW1500G profile), but it does mean the Checklist and QRH in this pack are **not yet tied to a specific flown model** — they are written as a generic, type-informed reference and every model-dependent step is flagged 🟧.
- **BD-500 stand-alone type rating 🟥.** The A220 is **not** cross-crew-qualified with the Airbus A320/A330/A350 family — crews need the separate BD-500 rating regardless of which sim model (if any) is used for training/familiarisation. This is a crewing fact, independent of the sim-model gap (see Intro §1, Dispatch §7).
- **A220-300 is NOT steep-approach certified 🟥.** (The A220-**100** is; the K Global fleet is -300 only.) This constrains route/approach planning, not the sim model, but is restated here for completeness — see Checklist/QRH and OM E steep-approach deferral.
- **Priority action:** before formally committing to an add-on, K Global should re-scan the X-Plane store/forum library periodically (Instructions §5 trigger: "Approved sim model / version / new AIRAC") — freeware A220 projects are actively in development and the picture may change.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- X-Plane.Org Forum — Airbus A220-100 for X-Plane 11 and X-Plane 12 (community/freeware project) — https://forums.x-plane.org/files/file/87833-airbus-a220-100-for-x-plane-11-and-x-plane-12/
- X-Plane.Org Forum — Airbus A220-300 for X-Plane 12 only (for now) — https://forums.x-plane.org/files/file/93087-airbus-a220-300-for-x-plane-12-only-for-now/
- x-plane.to — Airbus A220-100 for X-Plane 11/12 (WIP listing) — https://x-plane.to/file/944/airbus-a220-100-for-the-x-plane-11-and-x-plane-12-flightsimulator-wip
- SKYbrary — Airbus A220-300 (BCS3) — https://skybrary.aero/aircraft/bcs3
- Airbus — A220 aircraft family page — https://www.airbus.com/en/products-services/commercial-aircraft/a220-family

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — no XP11 candidate identified (two public community projects found, both disqualified: wrong sub-variant or XP12-only); flagged as an honest open item 🟥, not a pending management decision; BD-500 stand-alone rating and A220-300 steep-approach exclusion restated. |
