<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  GLF5 Gulfstream G550
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# GLF5 — Gulfstream G550 · Sim-Model

**GLF5 / Gulfstream GV-SP family** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **AKD Studio GLF550 — "Ultimate Business Jet" (v2)** | X-Plane 11 / 12 (initial release ~2022, v2 Aug 2023, updated since) `[VERIFY — K Global test]` | study-class | 🟧 Conditional — leading candidate; approval pending |
| **Gulfstream G550 (X-Hangar store)** | X-Plane 11 / 12 (currently listed/purchasable) `[VERIFY — K Global test]` | basic–mid | 🟧 Conditional — fallback; see §2 |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships **no** G550/GV-SP-family aircraft |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as with every other pack in this fleet, K Global has **not** run a formal in-house test-and-approve pass on any G550 add-on. The table lists genuine, publicly available candidates and what each would cost operationally. The Intro §2 mapping line resolves **here** once a model is tested and management confirms it — until then this file, the Checklist and the QRH are written to whichever candidate is flown and every model-specific figure stays `[VERIFY]`.

**Why AKD Studio's GLF550 leads:** independent flight-sim trade press (FSElite) confirms this large-cabin business-jet add-on was released for X-Plane in late 2022 and substantially reworked in an August 2023 "V2" release, with continued updates since — the developer markets it generically (not under the Gulfstream trademark, for licensing reasons) but the type, engines and mission profile match the GLF5 directly. Its own product listing documents independent captain/first-officer flight-management displays, which maps naturally onto this type's two-pilot crew concept.

**Fallback still genuinely available:** unlike the equivalent GLF6 legacy candidate, the X-Hangar Gulfstream G550 (same publisher family as the G650 product referenced in the GLF6 pack) was confirmed live on the developer's storefront at the time of this draft — a real, currently-purchasable, lower-cost alternative.

## 2. Type ↔ model fidelity note 🟧

- **AKD Studio GLF550** represents the same real-world type as the GLF5 (twin BR710 turbofans, large-cabin ultra-long-range layout, 14–19 pax) — no variant mismatch. It is a **third-party recreation**, not an OEM-licensed product, and does not carry certified Gulfstream performance data; treat all in-sim figures as approximate until cross-checked against a reference OFP (Dispatch §2). 🟧
- **X-Hangar Gulfstream G550** is confirmed currently live and purchasable (public store listing, checked at draft time). Its own public product description states X-Plane v11.55/v12.1.1+ compatibility, modelled crew/passengers, an internal camera system, a manoeuvrable retractable 3D head-up display, and multiple included liveries — but it uses X-Plane's **default checklist/systems framework** rather than a custom failure/CAS simulation. 🟧
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2–§3** (profile + fuel). Any burn comparison against the Dispatch reference figures must be validated against whichever model is actually flown.

## 3. Systems-depth caveats

- **AKD Studio GLF550 (study-class):** independent trade coverage and the product's own listing describe fully simulated electrical, hydraulic, fuel, fire-protection and air-conditioning systems, a custom TCAS and GPWS, a custom inertial-reference system, a fully custom flight-control system, and custom display controllers with CAS messaging. The flight-management/VNAV system is described as running **independent captain and first-officer displays** — a detail that maps directly onto this type's two-pilot crew concept — with SID/STAR procedures, RNAV/LPV approaches, an autotune ILS-frequency feature, and a custom autopilot/autothrottle with an EPR/FLEX thrust-rating system. An EFB adds take-off/landing performance calculators, refuelling/load management, and SimBrief/Avitab integration. This is enough depth that the Checklist and QRH in this pack can largely be flown as written — **but every item must still be verified against the actually-installed build/version before relying on it in training** `[VERIFY]`. 🟧
- **X-Hangar model (basic–mid):** built around X-Plane's default systems/checklist rather than a custom failure/CAS simulation; the manufacturer's own materials note it is intended for straightforward line-flying rather than deep systems training. Adequate for visual/procedural familiarisation; not for abnormal/emergency training depth. Where the QRH marks a procedure 🟧 "model-dependent," this is the likely model for which it will not trigger or resolve as written.
- **General:** neither candidate reproduces real certified performance data, and neither is an OEM-licensed product. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| Licensing / naming | 🟧 | AKD Studio GLF550 | Marketed generically, not under the Gulfstream trademark — cosmetic only | None needed; note in any pilot-facing material |
| Failure/CAS depth | 🟧 | X-Hangar G550 | Default-systems level; abnormal-training value limited | Use for normal-ops familiarisation; prefer AKD Studio candidate for QRH training |
| HUD interaction | 🟧 | X-Hangar G550 | 3D HUD stows automatically when the aircraft is powered off; behaves differently from a real EFVS-equipped HUD | Brief pilots that this is a visual-fidelity approximation, not an EFVS-certified representation |
| Certified data | 🟧 | Both | No add-on reproduces certified Gulfstream performance figures | Use SimBrief OFP (Dispatch) as the planning authority, not the sim's own figures |
| Navdata / AIRAC | 🟧 | Both | FMS routing/procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities/missing SIDs-STARs |
| Independent dual-CDU depth | 🟩 | AKD Studio GLF550 | Documented independent captain/FO flight-management displays — a genuine fit for this type's crew-of-two model | None needed — a fidelity strength, not a caveat |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests a candidate and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`. Priority: run the test pass on the **AKD Studio GLF550 (XP11/12)** given its documented systems depth and dual-CDU crew-of-two fit.
- **Steep-approach / LCY 🟥.** As with the GLF6, any in-sim steep-approach capability on a candidate model is a **training aid only** — it has no bearing on whether K Global's Executive unit is operator-approved for steep/LCY-class approaches on the real aircraft, which remains the OM E Steep Approach Operations deferred decision (Dispatch §6). Keep the two strictly separate in any pilot-facing communication.
- **No ETOPS/EDTO modelling requirement 🟩.** Per Dispatch §5, this unit is not dispatched under a rule-time framework, so unlike the mainline widebody packs there is no EDTO-fidelity gate on this Sim-Model file.
- **AIRAC/navdata dependency 🟧.** Long intercontinental VIP sectors may route through oceanic/polar tracks; an out-of-date AIRAC cycle breaks FMS routing. Pilots must maintain current navdata before flying a GLF5 leg.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- X-Plane.Org Store — GLF550 v2 "Ultimate Business Jet" by AKD Studio (product/version page) — https://store.x-plane.org/GLF550-v2--Ultimate-Business-Jet-by-AKD-Studio_p_1655.html
- FSElite — AKD Studio Updates the GLF550 to V2 — https://fselite.net/content/akd-studio-updates-glf550-to-v2/
- X-Hangar.com — Gulfstream G550 (product listing) — https://www.x-hangar.com/store/gulfstream-g550.html
- SKYbrary — Gulfstream Aerospace G550 (GLF5) — https://skybrary.aero/aircraft/glf5

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate models researched (AKD Studio GLF550 v2 XP11/12 lead, X-Hangar G550 confirmed-live fallback); approved-model decision left open `[VERIFY]`; independent dual-CDU depth on lead model noted as a crew-of-two fit. |
