<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  E145 Embraer ERJ-145
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# E145 — Embraer ERJ-145 · Sim-Model

**E145 / ERJ family (own type rating)** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **X-Crafts ERJ Family** (E145 / E145XR variant) | X-Plane 11 (v1.4.x, final XP11 release line) `[VERIFY — K Global test]` | mid–study (vendor-described custom FMS and systems depth; not independently verified by K Global) | 🟧 Conditional — leading candidate; approval pending |
| **Project-ERJ** (freeware, ERJ-135) | X-Plane 11 (community project; completion/release status unconfirmed) `[VERIFY]` | lite (visual/model project; not a study-level cockpit per its own stated aims) | 🟥 Not recommended — wrong sub-variant (135, not 145); status unverified |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships **no** ERJ-145 or comparable regional-jet type |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as of this draft K Global has **not** run a formal in-house test-and-approve pass on any ERJ-145 add-on, so nothing here is 🟩 Approved. The X-Crafts ERJ Family is the only genuine, currently-installable study/mid-fidelity candidate for X-Plane 11 that actually represents this airframe family; the freeware alternative represents the wrong sub-variant and its completion status is uncertain. The Intro §2 mapping line (`Sim model: not yet selected [VERIFY]`) resolves **here** once a model is tested and management confirms it — until then this file, the Checklist and the QRH are written to whichever candidate is flown and every model-specific figure stays `[VERIFY]`.

## 2. Type ↔ model fidelity note 🟧

- **X-Crafts ERJ Family** ships a single product covering the **ERJ-135, ERJ-140, ERJ-145, ERJ-145XR and Legacy 600/650** as one family — the E145/E145XR variant is the one that matches the K Global type. Confirm the in-sim variant/livery selector is actually set to **E145 or E145XR** before use; the shorter 135/140 fuselages and the Legacy bizjet cabin are a different weight/seat class and would misrepresent the type if flown by mistake. 🟧
- The product's FMS is a **vendor-built custom unit**, not a licensed reproduction of the real aircraft's **Honeywell Primus 1000** integrated avionics/FMS suite (Intro §1, Dispatch §2) — expect workflow and behaviour differences from the real EFIS/FMS, particularly around performance-initialisation pages and route-discontinuity handling. 🟧 `[VERIFY]`
- **Product availability 🟥:** the X-Plane 11 build of this add-on has been **discontinued from sale**, superseded by an X-Plane 12-only "next-generation" release that is **not backward-compatible with XP11**. K Global's fleet standardises on XP11 (per the pattern set across the mainline packs) — new licenses of the XP11 build can no longer be purchased through the developer's current storefront; only existing installations remain usable. This is an **acquisition/scaling constraint**, not merely a fidelity note, and should be flagged to management alongside the approval decision.
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2** (SimBrief profile). Any fuel-burn comparison between the SimBrief E145 OFP and a flown model must be validated once a model is tested and a reference OFP exists for this type.

## 3. Systems-depth caveats

- Vendor marketing describes "detailed systems tested by real pilots" for the candidate model — this is an **unverified vendor claim** until K Global runs its own test pass; do not treat it as equivalent to a completed in-house approval. 🟧
- **No autothrottle on the real aircraft.** The ERJ-135/140/145 family has **no autothrottle system** — thrust is set manually by the pilot, with the FADEC governing the selected thrust rating (idle/climb/cruise/takeoff/go-around). Verify the candidate model correctly **omits** an autothrottle rather than simulating one that does not exist on this type — a fidelity slip seen on some regional-jet add-ons that borrow autoflight logic from autothrottle-equipped types. 🟧 `[VERIFY]`
- **EICAS, not ECAM.** The ERJ-145 uses an EICAS-style crew-alerting philosophy (Master Warning / Master Caution plus a scrolling message list), not the Airbus ECAM "ordered synoptic actions" model. Confirm the add-on's caution/warning logic and message inhibit schedule reflect EICAS conventions rather than a ported ECAM abstraction. 🟧
- **Conventional (non-fly-by-wire) flight controls.** Unlike the newer Embraer E-Jet family (E170/175/190/195), the ERJ-145 is flown through a **conventional yoke** with hydraulically-boosted, cable/rod-actuated primary flight controls and manual-reversion capability — there is no fly-by-wire control law structure to model. Verify the add-on models a genuine manual-reversion/quick-disconnect flow for jammed or runaway controls rather than an FBW-style law-degradation abstraction. 🟧
- **Stall Protection System (SPS).** The real aircraft carries a dedicated stick-shaker/stick-pusher SPS, independent of any flight-control law (there is none). Verify shaker/pusher activation and the quick-disconnect/cutout logic are modelled distinctly, not folded into a generic "stall warning" package. 🟧
- **General:** neither candidate reproduces certified performance data. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| Variant selection | 🟧 | X-Crafts ERJ Family | Product bundles 135/140/145/145XR/Legacy 600/650 in one package | Confirm the flown variant is set to E145/E145XR before dispatch |
| Autothrottle | 🟧 | X-Crafts ERJ Family | Real type has none; risk the add-on simulates one anyway | Fly manual thrust throughout; treat any A/THR-like behaviour as a modelling bug, not a feature |
| Product availability | 🟥 | X-Crafts ERJ Family | XP11 build discontinued from sale; the XP12 successor does not run on XP11 | Only existing XP11 licenses are usable; no current first-party purchase path for new seats |
| FMS fidelity | 🟧 | X-Crafts ERJ Family | Custom FMS, not a licensed Primus 1000 unit | Treat FMS workflow/behaviour as an approximation, not a real-EFIS reproduction |
| Freeware fallback | 🟥 | Project-ERJ | Wrong sub-variant (ERJ-135, not 145); development/release status unconfirmed | Do not use for E145 line ops; reference only, if and when released |
| Navdata / AIRAC | 🟧 | Both candidates | FMS routing/procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities/missing SIDs-STARs |
| Perf realism | 🟧 | Both candidates | Modelled performance is approximate; not certified data | Use the SimBrief OFP (Dispatch) as the planning authority, not the sim's own figures |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests a candidate and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`. Priority: run the test pass on the **X-Crafts ERJ Family, E145/E145XR variant (XP11)**.
- **No autothrottle is a real-aircraft fact, not a sim limitation 🟥.** The Checklist and QRH are written on the assumption of manual thrust management throughout every phase of flight, regardless of which candidate is flown — do not write or fly either document as if an autothrottle exists.
- **ETOPS/EDTO modelling — not applicable.** The E145 is flown exclusively on short regional sectors (Dispatch §5); no EDTO-related sim feature is required for this type.
- **Product-availability risk 🟥.** If K Global scales the Regional-unit E145 pilot pool beyond existing XP11 licenses, there is currently **no first-party purchase path** for the XP11 build of the leading candidate — flag this to management as a sourcing risk alongside the fidelity/approval decision, not merely a technical footnote.
- **AIRAC/navdata dependency 🟧.** Short regional sectors are less exposed than oceanic/polar trunks, but FMS routing still depends on a current AIRAC cycle — maintain it before dispatching an E145 leg.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Embraer — commercial aircraft (public) — https://www.embraer.com
- SKYbrary — Embraer ERJ 145 (E145) — https://skybrary.aero/aircraft/e145
- X-Crafts — ERJ Family (product overview) — https://www.xcrafts.com/erj-family
- X-Plane.Org Store — Embraer ERJ Family by X-Crafts — https://store.x-plane.org/Embraer-ERJ-Family-by-X-Crafts_p_997.html
- X-Crafts — "What happened to the ERJ Family?" (XP11→XP12 transition notice) — https://www.xcrafts.com/news/what-happened-to-the-erj-family
- GitHub — Project-ERJ (freeware ERJ-135 project) — https://github.com/amandoescoding/Project-ERJ

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate models identified (X-Crafts ERJ Family E145/E145XR lead, freeware Project-ERJ rejected as wrong sub-variant); approved-model decision left open `[VERIFY]`; no-autothrottle and EICAS/conventional-flight-control facts flagged as real-aircraft characteristics the model must respect; XP11 product-discontinuation risk flagged 🟥. |
