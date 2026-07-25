<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  CRJ2 Bombardier CRJ-200
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# CRJ2 — Bombardier CRJ-200 · Sim-Model

**CRJ2 — SEPARATE type rating from the CRJ700/900** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **JRollon CRJ-200** (also distributed as an Aerosoft-branded release) | X-Plane 11 `[VERIFY — K Global test]` | high for its generation — custom FMC, modelled ice/vapour/rain visual effects, animated ground systems, multiple included liveries | 🟧 Conditional — leading candidate; approval pending |
| X-Plane 11 / 12 default fleet | X-Plane 11 / 12 | — | 🟥 Not recommended — **neither XP11 nor XP12 ships a default CRJ-200**; no factory fallback exists for this type |
| AD Simulations / DeltaWing **CRJ-700 or CRJ-900** (X-Plane) | X-Plane 11/12 | high (different type) | 🟥 Not recommended — **wrong sub-type**: these products model the slatted CRJ700/900 family (see the CRJ7/CRJ9 packs), not the hard-wing CRJ-200 this pack documents. Do not substitute. |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as of this draft K Global has **not** run a formal in-house test-and-approve pass on the CRJ-200 add-on, so nothing here is 🟩 Approved. The JRollon CRJ-200 is the well-known, long-standing purpose-built CRJ-200 product in the public X-Plane 11 market (also carried under an Aerosoft-branded storefront listing) — there is no competing developer offering for this exact sub-type that was found in the public sources surveyed. Its published feature set (custom FMC, animated systems, modelled precipitation/ice visual effects, multiple stock liveries) covers the normal-ops ground this pack needs to be usable day one. The Intro §2 mapping line (`Sim model: JRollon CRJ-200 [VERIFY]`) resolves **here** once the model is tested and management confirms it — until then this file, the Checklist and the QRH are written to this candidate and every model-specific figure stays `[VERIFY]`. **X-Plane 12 compatibility is not confirmed** for this product in the surveyed public sources — treat as XP11 only pending confirmation 🟧 `[VERIFY]`.

## 2. Type ↔ model fidelity note 🟧

- **Sub-type matching is the fidelity trap for this family**, not an engine-generation mismatch as with widebody neo/ceo pairs. The CRJ product line spans the CRJ100/200 (older, **hard wing, no leading-edge devices**) and the CRJ700/900/1000 (redesigned wing **with** leading-edge slats, larger tail, updated systems). **Confirm the flown add-on models the CRJ-200** — a CRJ700 or CRJ900 product (e.g. the AD Simulations/DeltaWing pair) would not match this pack's wing, weights, engine fit or systems section and must not be used to represent the CRJ2 documented here. Cross-ref Intro §6 (hard-wing premise).
- **JRollon CRJ-200** models the correct CRJ-200/CL-600-2B19 airframe — no sub-type mismatch. 🟩 (fidelity) / 🟧 (approval still pending)
- Unlike the CRJ700/900 pair (built by one developer, AD Simulations/DeltaWing, across both packs), the CRJ-200 candidate here is from a **different developer** (JRollon) — there is no shared-engineering-base argument to lean on for cross-pack behaviour consistency; this pack's systems depth and quirks must be assessed on their own terms (§3–§4).
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2** (SimBrief setup). No K Global reference OFP exists yet for this type (Dispatch §7 watch-item) — burn/fidelity comparisons cannot yet be validated against a flown mission.

## 3. Systems-depth caveats

- **JRollon CRJ-200:** custom FMC/route-and-performance entry, modelled precipitation/ice/vapour-condensation visual effects, animated cockpit lighting and self-shadowing, working windshield wipers, multiple included liveries — a mature, long-established product for its generation. **Known limitation:** as an older-generation add-on built to XP11-era standards, its **systems-failure/abnormal-procedure depth and EICAS-equivalent annunciation fidelity have not been independently verified** against this pack's QRH chapters — verify each Checklist/QRH item is actually simulated **in the installed version** before relying on it 🟧 `[VERIFY]`.
- **General:** the product does not reproduce certified real-world performance data. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| No default/factory CRJ-200 | 🟥 | XP11/12 | Neither sim ships a default CRJ-200 — there is no fallback if the payware product is unavailable | Standardise on the JRollon CRJ-200; no substitute exists |
| Sub-type match | 🟥 | JRollon | Must be the **CRJ-200** product, not a CRJ700/CRJ900 product built for the wrong pack (different wing, weights, systems) | Confirm product listing states CRJ-200/CL-600-2B19 before purchase/install |
| XP12 compatibility unconfirmed | 🟧 | JRollon | Public sources surveyed describe an XP11 product; XP12 support not confirmed | Treat as XP11-only pending confirmation; re-verify before any XP12 fleet-wide move |
| Systems/abnormal depth unverified | 🟧 | JRollon | Failure-mode and annunciation fidelity against this pack's QRH not independently confirmed | Re-verify each QRH/Checklist item against the installed version before line use |
| Navdata / AIRAC | 🟧 | JRollon | FMC routing and procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities/missing SIDs-STARs |
| Perf realism | 🟧 | JRollon | Modelled performance is approximate; not certified data | Treat public SKYbrary/Wikipedia figures (Intro/Dispatch) as the planning authority, not the sim's own figures |
| No reference OFP | 🟧 | JRollon | No K Global CRJ2 OFP flown yet (Dispatch §7) | Burn/CI validation against a flown mission remains open |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests the JRollon CRJ-200 (the leading purpose-built candidate found in the public sources surveyed) and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`.
- **CRJ-200 vs CRJ700/900 confusion 🟥.** The commonest real-world error this pack must guard against is treating a CRJ700/900 add-on (or its figures/handling notes) as representing this CRJ-200 fleet, or vice versa. Wing (hard wing vs slatted), weights, tail size and approach-speed handling all differ, and — unlike the CRJ7/CRJ9 pair — **this is not a common type rating**: confirm sub-type before any figure or crew qualification is trusted.
- **AIRAC/navdata dependency 🟧.** The City/Regional short-haul network (Dispatch §6) is less demanding than an oceanic trunk, but FMC routing still depends on a current AIRAC cycle at every field flown.
- **No shared-developer fidelity argument 🟧.** Unlike CRJ7/CRJ9 (same developer, same engineering base), the CRJ-200 candidate is a standalone product from a different developer — treat its systems/quirk profile independently; do not assume behaviour parity with the CRJ700/900 packs.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- X-Plane.Org Store — CRJ-200 (JRollon) — https://store.x-plane.org/CRJ-200_p_82.html
- JRollon — product site — https://jrollon.com/CRJ200.html
- Aerosoft — CRJ-200 XP (X-Plane 11) — https://www.aerosoft.com/en/shop/flight/x-plane/x-plane-11/aircraft/549/crj-200-xp
- SKYbrary — Bombardier Regional Jet CRJ-200 (CRJ2) — https://skybrary.aero/aircraft/crj2
- Wikipedia — Bombardier CRJ100/200 — https://en.wikipedia.org/wiki/Bombardier_CRJ100/200

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate model identified (JRollon CRJ-200, XP11, also Aerosoft-branded; no default/factory CRJ-200 exists; AD Simulations/DeltaWing CRJ700/900 flagged as wrong sub-type); CRJ-200-vs-CRJ700/900 sub-type matching flagged as the type's fidelity trap; noted this is a standalone-developer candidate (no shared engineering base with the CRJ7/CRJ9 pair); XP12 compatibility unconfirmed; approved-model decision left open `[VERIFY]`. |
