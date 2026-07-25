<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  A21N Airbus A321neo family
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# A21N — Airbus A321neo family · Sim-Model

**A21N / A320 family** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type — across all three variants (neo/LR/XLR) — and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **ToLiss Airbus A321** (base package) **+ A321neo engine-option expansion** | X-Plane 11 / 12 `[VERIFY — K Global test]` | study | 🟧 Conditional — leading candidate; approval pending |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships **no** A321neo-family aircraft |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as of this draft K Global has **not** run a formal in-house test-and-approve pass on the candidate add-on, so nothing here is 🟩 Approved. The Intro §2 mapping line (`Sim model: ToLiss A321 [VERIFY]`) resolves **here** once the model is tested and management confirms it — until then this file, the Checklist and the QRH are written to the candidate flown, and every model-specific figure stays `[VERIFY]`.

**Two-package structure — read this before dispatching a tail 🟥:** the developer sells the A321 as a **base package** (classic-engine A321) plus a **separately purchased "New Engine Option" expansion**. The expansion is what adds the **LEAP-1A / PW1100G engine choice** and, importantly, **distinct A321neo, A321LR and A321XLR fuel-tank and weight-envelope configurations** — it is *not* a single generic "neo skin" over the base jet. **Both packages must be installed** for the model to represent any K Global A21N tail correctly; the base package alone represents a classic-engine A321, which is a type this fleet does not operate and must not be used to dispatch or train against. 🟥 `[VERIFY — confirm both packages installed on every workstation before line use]`

## 2. Type ↔ model fidelity note 🟧

- With the expansion installed, the model **does distinguish neo / LR / XLR** at the fuel-system and weight-envelope level — the pilot selects the sub-variant/fuel configuration in the model's own setup, and this **must be matched to the tail and mission actually being flown** (VAMSYS assignment), not left on a default. A mismatch (e.g. flying an XLR-coded route on a neo fuel configuration) will misstate available fuel/range and is an operational-integrity risk, not just a cosmetic one. 🟥
- Engine choice (LEAP-1A vs PW1100G) is also model-selectable and drives distinct fuel-burn and start/cooldown behaviour (§4) — select to match the tail's real powerplant where that is tracked; where it is not yet tracked in VAMSYS, treat engine choice as `[VERIFY]` and default to the type-generic burn figures in Dispatch.
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2–§6** (profile, fuel, LR/XLR overrides). SimBrief carries only a base A21N profile (Dispatch §2) — the sim model's own LR/XLR fuel-tank selection is a separate, model-side setting and does not automatically follow the SimBrief OFP; both must be set consistently by the pilot before an LR/XLR dispatch.

## 3. Systems-depth caveats

- **Study-level FMGS, FBW normal/alternate/direct law, ECAM with failure logic, hydraulics/electrics/fuel/pressurisation, engine start and dual-engine-type model (LEAP-1A / PW1100G with distinct sound sets and start/cooldown quirks), autoflight/ATHR, and a fault-injection system** — deep enough that the Checklist and QRH below can be flown largely as real, once both packages (§1) are confirmed installed.
- **Sub-variant depth:** the LR/XLR fuel-tank/weight-envelope configurations are part of the paid expansion, not a separate product — confirm the installed build actually exposes the LR/XLR selection (older base-only installs will not) `[VERIFY]`.
- **XP11 vs XP12:** the product line is actively maintained for both, with newer environmental features (e.g. an upgraded weather-radar model) arriving on the XP12 track first — XP11 operation is supported but will lag the newest environmental refinements 🟧.
- **General:** the model does not reproduce certified real-world performance data. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on, expansion pack and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| Two-package requirement | 🟥 | ToLiss A321 | Base package alone = classic-engine A321, **not** a type K Global operates | Confirm both base **and** NEO expansion installed before any A21N session |
| Sub-variant fuel config | 🟥 | ToLiss A321 (NEO exp.) | Neo/LR/XLR fuel-tank & weight envelope is a **model-side selection**, independent of the SimBrief OFP | Set the in-model sub-variant to match the VAMSYS tail/mission every time; never leave on default |
| Engine-type selection | 🟧 | ToLiss A321 (NEO exp.) | LEAP-1A vs PW1100G drive different burn, start and cooldown behaviour (PW1100G has a documented dual-cooling start/shutdown cycle) | Match to tail's real engine where tracked; else `[VERIFY]` and use Dispatch generic burn |
| Weather radar fidelity | 🟧 | ToLiss A321 | Newer WXR model has shipped on the XP12 track; XP11 lags | Cross-check MET/SIGMET externally; don't rely solely on WXR returns on XP11 |
| Navdata / AIRAC | 🟧 | ToLiss A321 | FMS routing/procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch causes discontinuities/missing SIDs-STARs |
| Perf realism | 🟧 | ToLiss A321 | Modelled performance is approximate; not certified data | Use SimBrief OFP (Dispatch) as the planning authority, not the sim's own figures |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests the candidate (both packages) and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`. Priority: run the test pass on **ToLiss A321 base + NEO expansion (X-Plane 11)**.
- **Sub-variant/tail mismatch is a dispatch-integrity risk, not cosmetic 🟥.** An XLR sector flown on a neo or LR fuel/weight configuration (or vice versa) will not reflect the real range/reserve picture the OFP assumes. Pilots must confirm the model's sub-variant setting against the VAMSYS-assigned tail before every LR/XLR dispatch (Dispatch §2, §5).
- **ETOPS/EDTO modelling fidelity 🟥.** A21N (all variants) dispatches under the K Global 120-min narrowbody EDTO rule time (Dispatch §5). **No add-on simulates operator EDTO approval, critical-fuel scenarios or en-route-alternate adequacy** — those remain OFP/OM E disciplines. The sim can fly the routing and a single-engine driftdown (study-level engine-out modelling is present), but the **critical-fuel check for LR/XLR long-thin sectors remains an OFP/OM E task** and must not be inferred from in-sim behaviour. 🟥
- **AIRAC/navdata dependency 🟥.** LR/XLR long-thin sectors are more likely to route through data-sparse or oceanic-adjacent airspace than the base neo network; an out-of-date AIRAC cycle breaks the FMS route and any ETOPS/EDTO entry-exit points. Pilots must maintain current navdata before dispatching an A21N leg, LR/XLR especially. 🟥
- **XP11 vs XP12 divergence 🟧.** If the fleet later moves to XP12, the model regains the newest environmental/WXR refinements first — re-test and re-baseline the Checklist/QRH at that point (Instructions §5 trigger: "Approved sim model / version / new AIRAC").

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- X-Plane.Org Store — Airbus A321 by ToLiss (base package) — https://store.x-plane.org/Airbus-A321-by-Toliss_p_1174.html
- X-Plane.Org Store — A321-NEO add-on to the ToLiss Airbus A321 — https://store.x-plane.org/A321-NEO-ADD-ON-to-the-ToLiss-Airbus-A321_p_1351.html
- FSElite — ToLiss Releases A321Neo Expansion; Updates Existing Airbus A321 — https://fselite.net/content/toliss-releases-a321neo-expansion-updates-existing-airbus-a321/
- Threshold — ToLiss Issues Statement On X-Plane 12 Support — https://www.thresholdx.net/news/x12340
- ToLiss — news / changelog — https://toliss.com/blogs/news
- Aerosoft — ToLiss A321 for X-Plane 12/11 — https://www.aerosoft.com/en/shop/flight/x-plane/x-plane-11/aircraft/3911/toliss-a321-for-x-plane-12/11
- SKYbrary — Airbus A321 (A321) — https://skybrary.aero/aircraft/a321

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate model (ToLiss A321 base + NEO expansion, XP11/12); two-package requirement and sub-variant/tail-match flagged 🟥; approved-model decision left open `[VERIFY]` |
