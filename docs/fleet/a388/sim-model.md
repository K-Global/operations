<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  A388 Airbus A380-800
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# A388 — Airbus A380-800 · Sim-Model

**A388 / A380 family** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **Peters Aircraft Airbus A380-800 Collection** | X-Plane 11 (also packaged for XP12) `[VERIFY — K Global test]` | basic–mid (Planemaker-era airframe, dating to ~2013) | 🟧 Conditional — only payware A380 on the market; approval pending |
| **riviere Airbus A380-800** (freeware) | X-Plane 11 | basic (2D/3D cockpit, rendered cabin, default-level systems) | 🟧 Conditional — visual/procedural stand-in only |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships **no** A380 of any kind |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟥 `[VERIFY]`:** unlike the A330neo/A350 lines, **no study-level A380 add-on exists for X-Plane** as of this draft. Both public candidates are dated or shallow: Peters Aircraft's model is Planemaker-based, originally released in the X-Plane 10 era, and reviews of even its XP12 repackaging note an unreliable FMC and dated lighting; riviere's freeware A380 is a popular, well-modelled airframe visually but ships default-level systems depth, intended to "fly A to B" rather than simulate real Airbus FBW logic. **Neither is a systems-authentic FBW trainer.** K Global has **not** run a formal in-house test-and-approve pass on either, so nothing here is 🟩 Approved. The Intro §2 mapping line (`Sim model: X-Plane 11 A380 add-on [VERIFY]`) resolves **here** once a candidate is tested and management confirms it — until then this file, the Checklist and the QRH are written to the generic Airbus FBW procedure and every model-specific figure stays `[VERIFY]`.

**Watch-item — emerging study-level candidates 🟧:** independent developer previews of a study-level X-Plane A380 (flight-deck systems modelling shown publicly) have circulated since 2023, and a separate payware A380 project was announced by another third-party developer in 2024; neither had shipped as of this draft. Re-check the market at the next pack review (Instructions §5 trigger) — a study-level release would materially change this section. `[VERIFY]`

## 2. Type ↔ model fidelity note 🟧

- **Neither current candidate matches the real four-engine FBW architecture at systems depth.** Both airframes visually represent the A380-800 shape and dimensions reasonably well, but neither reproduces genuine ECAM failure logic, four-engine FADEC modelling, or the real FBW normal/alternate/direct law degradation that the Checklist and QRH describe. Treat both as **procedural/visual trainers**, not systems-accurate simulators — a materially different posture from the A339 pack, where a genuine neo-generation study aircraft (ToLiss) exists.
- **Engine variant is not separately modelled** on either candidate — neither product distinguishes Trent 900 vs GP7200 fit; K Global's own engine-choice decision (Intro §1, Dispatch §2) has **no in-sim effect** on either model. 🟧
- **Peters Aircraft package:** older Planemaker-based flight model; publicly reviewed FMC reliability issues persist even in the newer XP12 wrapper (same core aircraft, "basically the same" per public review) — expect FMS/routing quirks and treat automation as unreliable. 🟧
- **riviere package:** well-regarded exterior/cabin modelling and a large user base (120,000+ downloads, multiple liveries), but the systems are explicitly basic/default-level — fine for route-familiarisation and visual/procedural flying, not for abnormal/emergency systems training. 🟧
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping, engine choice open) and **Dispatch §2–§5** (profile, fuel, EDTO). SimBrief models the real A380-800 profile correctly regardless of which sim add-on is flown — the fidelity gap sits entirely in the sim model, not the OFP.

## 3. Systems-depth caveats

- **Peters Aircraft A380:** basic–mid systems, custom flight model, known FMC/navigation reliability issues per independent review; lighting and cockpit fidelity dated relative to current study-level standards elsewhere in the fleet. Do not rely on its FMS behaviour for procedure training without cross-checking `[VERIFY]`.
- **riviere A380 (freeware):** default-level systems — no meaningful ECAM failure logic, four-engine asymmetry modelling, or FBW law reversion to speak of. Fine for normal-ops circuit flying and route familiarisation; the QRH abnormal/emergency chapters below will **largely not trigger** on this model 🟧.
- **General:** neither XP11 candidate reproduces real certified A380 performance data or FBW systems depth. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| FMC / navigation reliability | 🟧 | Peters Aircraft | Publicly reported FMC issues persist across XP11/XP12 builds | Cross-check routing manually; don't rely solely on FMS guidance |
| Systems/failure depth | 🟥 | riviere (freeware) | Default-level systems; no real ECAM/FBW failure logic | Use for normal-ops/visual flying only; treat QRH abnormals as reference/training-only on this model |
| Four-engine FADEC/asymmetry | 🟧 | Both | Neither model distinguishes true four-engine FADEC behaviour or realistic single/dual-engine-out asymmetry | Fly the drill conceptually per QRH; do not judge real-aircraft asymmetry from either model |
| Engine variant (Trent 900 / GP7200) | 🟧 | Both | Neither model differentiates engine fit; K Global's engine decision has no in-sim effect | Treat SimBrief/Dispatch engine choice as a planning-only distinction until a systems-accurate model exists |
| Lighting / age of core model | 🟧 | Peters Aircraft | Core airframe dates to ~2013 (Planemaker); dated night lighting/visual fidelity even in newer wrapper | Accept as a visual limitation; not correctable by the pilot |
| Navdata / AIRAC | 🟧 | Both | FMS routing/procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities/missing SIDs-STARs |
| Perf realism | 🟧 | Both | Modelled performance is approximate; not certified data | Use SimBrief OFP (Dispatch) as the planning authority, not the sim's own figures |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`, and unlike the A339/A359 packs, no study-level candidate currently exists to approve.** Until a systems-accurate A380 add-on reaches the market (or K Global accepts a lower-fidelity candidate for procedural training only), the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`. Priority: monitor the market for a study-level release (§1 watch-item) before committing to either current candidate as the type standard.
- **ICAO Code F stand constraint restated 🟥.** Independent of sim fidelity, the A388's **Code F** wingspan (79.8 m) and **RFF Cat 10** requirement (Intro §4, Dispatch §7) are real, live network constraints that apply regardless of which model is flown — no add-on choice changes this. Confirm Code F stands/gates and Cat 10 RFF cover at **both** ends of every scheduled leg.
- **EDTO/adequate-aerodrome modelling fidelity 🟥.** As a quad, the A388 carries no twin-style ETOPS diversion-time limit, but the ICAO EDTO adequate-aerodrome concept still applies (Dispatch §5). **No add-on simulates operator EDTO/adequate-aerodrome planning** — that discipline lives in the OFP/OM E, not the sim. 🟥
- **AIRAC/navdata dependency 🟥.** Long trunk sectors depend on a **current AIRAC cycle**; an out-of-date cycle breaks the FMS route on either candidate. Pilots must maintain current navdata before dispatching an A388 leg. 🟥
- **Re-test trigger 🟧.** If a study-level A380 add-on is released, or K Global fixes its engine choice, re-test and re-baseline the Checklist/QRH (Instructions §5 trigger: "Approved sim model / version / new AIRAC").

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- X-Plane.Org Store — Peters Aircraft (developer product listing) — https://store.x-plane.org/Peters-Aircraft_bymfg_47-0-1.html
- X-Plane.Org Forum — Airbus A380-800 for XP11/12 (Peters Aircraft product thread) — https://forums.x-plane.org/files/file/98852-airbus-a380-800-for-xp1112/
- X-Plane Reviews — Aircraft Review: Airbus A380-842 XP12 by Peters Aircraft — https://xplanereviews.com/forums/topic/16523-aircraft-review-airbus-a380-842-xp12-by-peters-aircraft/
- Threshold X — No Money Mondays: riviere's freeware A380 contribution — https://www.thresholdx.net/article/nmmrla
- FSElite — Study Level A380 cockpit previews (watch-item, not yet released) — https://fselite.net/content/study-level-a380-cockpit-previews/
- SKYbrary — Airbus A380-800 (A388) — https://skybrary.aero/aircraft/a388

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate models surveyed (Peters Aircraft payware lead-by-default, riviere freeware alternative); **no study-level A380 exists for X-Plane 11**, both candidates flagged systems-shallow relative to A339/A359 study aircraft; approved-model decision left open 🟥 `[VERIFY]`; Code F stand constraint restated 🟥; watch-item logged for emerging study-level projects. |
