<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  GLF6 Gulfstream G650ER
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# GLF6 — Gulfstream G650ER · Sim-Model

**GLF6 / Gulfstream GVI family** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **AKD Studio GLF650 — "Ultimate Business Jet"** | X-Plane 11 / 12 (current build cycle continuing into 2025–26) `[VERIFY — K Global test]` | study-class | 🟧 Conditional — leading candidate; approval pending |
| **Gulfstream G650 (X-Hangar store)** | X-Plane 11 | basic | 🟧 Conditional — legacy fallback; see §2 caution on current availability |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships **no** G650/GVI-family aircraft |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as with every other pack in this fleet, K Global has **not** run a formal in-house test-and-approve pass on any G650 add-on. The table lists genuine, publicly available candidates and what each would cost operationally. The Intro §2 mapping line resolves **here** once a model is tested and management confirms it — until then this file, the Checklist and the QRH are written to whichever candidate is flown and every model-specific figure stays `[VERIFY]`.

**Why AKD Studio's GLF650 leads:** independent flight-sim trade press (FSElite, Threshold) confirms a dedicated ultra-long-range large-cabin business-jet add-on modelled on the real type was released for X-Plane 11/12 in October 2024 and has continued to receive updates through at least October 2025. The developer markets it generically (not under the Gulfstream trademark, for licensing reasons) but the type, engines and mission profile match the GLF6 directly. It is the deepest publicly documented candidate found for this type — see §3 for what it actually models.

## 2. Type ↔ model fidelity note 🟧

- **AKD Studio GLF650** represents the same real-world type as the GLF6 (twin BR725 turbofans, ultra-long-range large-cabin layout, 11–18 pax) — no variant mismatch of the kind flagged for some other packs. It is a **third-party recreation**, not an OEM-licensed product, and does not carry certified Gulfstream performance data; treat all in-sim figures as approximate until cross-checked against a reference OFP (Dispatch §2). 🟧
- **Legacy X-Hangar "Gulfstream G650"**: an older, lower-fidelity XP11 product from the same era/publisher family that also produces the currently-listed X-Hangar Gulfstream G550 (see GLF5 Sim-Model §2). **Caution:** at the time of this draft, a live search of the publisher's storefront surfaced only the G550 listing under its current "Business Jets" category — the G650-specific product's ongoing public availability could not be confirmed and may have been retired, merged, or renamed. Do not assume it can still be purchased new; verify before recommending it to a pilot `[VERIFY]`. 🟧
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2–§3** (profile + fuel). Any burn comparison against the Dispatch reference figures must be validated against whichever model is actually flown.

## 3. Systems-depth caveats

- **AKD Studio GLF650 (study-class):** independent trade coverage describes custom-built aircraft systems spanning electrical, hydraulic, fuel, fire protection, pressurisation/oxygen/air-conditioning, ice and rain protection, APU, and a custom flight-control system, alongside custom GPWS and TCAS modules, a custom autopilot/autothrottle with an EPR/FLEX-mode thrust-rating system, a custom head-up display, and a custom flight-management system with SimBrief flight-plan import, LNAV/VNAV, RNAV approaches and full performance-management (top-of-climb/top-of-descent, fuel and altitude predictions). An electronic flight bag (EFB) reportedly adds load/refuelling management, a performance calculator, and Avitab integration. This is enough depth that the Checklist and QRH in this pack can be flown largely as written — **but every item must still be verified against the actually-installed build/version before relying on it in training** `[VERIFY]`. 🟧
- **A notable in-sim feature directly relevant to this pack's §7/Dispatch §6 open item:** published update notes for the same developer's related product line describe a "steep approach" mode within the EFB's landing-performance tool. This is a **sim feature that can be exercised for procedural familiarisation only** — it has no bearing on whether K Global's Executive unit is operator-approved for steep/LCY-class approaches on the real aircraft, which remains the OM E Steep Approach Operations deferred decision (Dispatch §6). Do not present in-sim availability of a steep-approach mode as evidence of real-world approval. 🟥
- **Legacy X-Hangar model (basic):** built around X-Plane's default systems/checklist framework rather than a custom failure/CAS-message simulation; adequate for visual/procedural familiarisation, not for abnormal/emergency training depth. Where the QRH marks a procedure 🟧 "model-dependent," this is the likely model for which it will not trigger or resolve as written.
- **General:** neither candidate reproduces real certified performance data, and neither is an OEM-licensed product. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| Licensing / naming | 🟧 | AKD Studio GLF650 | Marketed generically, not under the Gulfstream trademark — cosmetic only, does not affect systems fidelity claims | None needed; note in any pilot-facing material |
| Steep-approach EFB mode | 🟥 | AKD Studio GLF650 | Sim tool only — **not** an operator approval; conflating the two would misrepresent K Global's approval status | Treat as a training aid only; cross-ref Dispatch §6 / OM E Steep Approach Operations before any real-world inference |
| Product availability | 🟧 | Legacy X-Hangar G650 | Current public storefront listing for this specific product could not be confirmed at draft time | Verify availability before recommending; prefer AKD Studio candidate |
| Failure/CAS depth | 🟧 | Legacy X-Hangar G650 | Basic/default-systems level; abnormal training value limited | Use for normal-ops familiarisation only |
| Certified data | 🟧 | Both | No add-on reproduces certified Gulfstream performance figures | Use SimBrief OFP (Dispatch) as the planning authority, not the sim's own figures |
| Navdata / AIRAC | 🟧 | Both | FMS routing/procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities/missing SIDs-STARs |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests a candidate and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`. Priority: run the test pass on the **AKD Studio GLF650 (XP11/12)** given its documented systems depth.
- **Steep-approach / LCY 🟥.** As above — a sim feature existing for a related product does not resolve or pre-empt the OM E Steep Approach Operations deferred decision (Dispatch §6). Keep the two strictly separate in any pilot-facing communication.
- **No ETOPS/EDTO modelling requirement 🟩.** Per Dispatch §5, this unit is not dispatched under a rule-time framework, so unlike the mainline widebody packs there is no EDTO-fidelity gate on this Sim-Model file.
- **AIRAC/navdata dependency 🟧.** Long intercontinental VIP sectors may route through oceanic/polar tracks; an out-of-date AIRAC cycle breaks FMS routing. Pilots must maintain current navdata before flying a GLF6 leg.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- X-Plane.Org Store — GLF650 "Ultimate Business Jet" by AKD Studio (product/version page) — https://store.x-plane.org/GLF650--Ultimate-Business-Jet-Aircraft-by-AKD-Studio_p_1955.html
- Threshold — AKD Studios Releases GLF650 for X-Plane — https://thresholdx.net/akd650/
- FSElite — AKD Studio GLF650 Release Date and Pricing Announced — https://fselite.net/content/akd-studio-glf650-release-date-and-pricing-announced/
- X-Plane.Org Forum — Gulfstream G650 XP11 — payware (X-Hangar) discussion thread — https://forums.x-plane.org/index.php?%2Fforums%2Ftopic%2F239553-gulfstream-g650-xp11-payware-x-hangar=
- SKYbrary — Gulfstream Aerospace G650 (GLF6) — https://skybrary.aero/aircraft/glf6

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate models researched (AKD Studio GLF650 XP11/12 lead, legacy X-Hangar G650 fallback with availability caveat); approved-model decision left open `[VERIFY]`; steep-approach EFB feature flagged as sim-only, not an operator approval. |
