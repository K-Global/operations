<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  B789 Boeing 787-9 Dreamliner
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# B789 — Boeing 787-9 Dreamliner · Sim-Model

**B789 / 787 family** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **Magknight Boeing 787-9** | X-Plane 11 / 12 `[VERIFY — K Global test]` | mid–deep (custom FMC/CDU, EICAS, VNAV; not full study) | 🟧 Conditional — leading candidate; approval pending |
| **X-Plane 11 default Boeing 787-9** (Laminar Research) | X-Plane 11 (ships with sim) | mid (default systems/FMC) | 🟧 Conditional — fallback; always available, lighter fidelity |
| Other freeware 787 conversions | X-Plane 11 | low–mid, variable | 🟥 Not recommended — inconsistent systems/FMC depth |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as of this draft K Global has **not** run a formal in-house test-and-approve pass on any 787 add-on, so nothing here is 🟩 Approved. The table lists genuine, publicly available candidates and what each would cost operationally. The Intro §2 mapping line (`Sim model: X-Plane 11 — Magknight 787 (or default Laminar 787) [VERIFY]`) resolves **here** once a model is tested and management confirms it — until then this file, the Checklist and the QRH are written to whichever candidate is flown and every model-specific figure stays `[VERIFY]`.

**Why Magknight 787 leads:** unlike the Airbus widebody line, XP11 **does** ship a default Boeing 787-9 (Laminar Research), so there is a guaranteed baseline. The Magknight 787-9 is the community's most-developed payware 787 for XP11/12, with a custom FMC/CDU, EICAS, LNAV/VNAV autoflight and progressively deepened systems — enough that the Boeing normal checklist and most QRH recall/read-and-do items map credibly. The default Laminar 787 remains as a no-cost fallback for any pilot without the payware, at lighter systems fidelity 🟧.

## 2. Type ↔ model fidelity note 🟧

- **Magknight 787-9** *is* a 787-9 airframe and matches the real type family, the SimBrief B789 dispatch profile (Dispatch §2) and the Intro §2 mapping directly. Cruise burn, ceiling and FMC behaviour should track the OFP without a variant correction, **subject to the engine-option question below**. This is the fidelity-preferred path. 🟩 (airframe) / 🟧 (approval still pending)
- **Default Laminar 787-9** is the correct variant but a lighter systems/FMC simulation — acceptable as a visual/procedural stand-in and for normal-ops line flying; weaker for detailed abnormal work. 🟧
- **Engine option 🟧 `[VERIFY]`:** the real 787-9 is offered with **GEnx-1B (General Electric)** *or* **Trent 1000 (Rolls-Royce)**. Add-on 787 models and the SimBrief B789 profile default to one engine option (commonly GEnx-1B); if the flown model's engine and the SimBrief engine do **not** match the confirmed K Global fit, cruise burn, thrust ratings and N1 references will differ from the OFP and any burn comparison must correct for it. Resolve K Global engine fit (Intro §1, Dispatch §2) before treating in-sim burn as OFP-representative.
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2–§3** (profile + fuel).

## 3. Systems-depth caveats

- **Magknight 787 (mid–deep):** custom FMC/CDU with LNAV/VNAV, EICAS with a message set, autothrottle/autoflight, electrical (no-bleed) architecture, hydraulics/fuel/pressurisation modelled, engine start and a growing non-normal/EICAS set — enough that the Checklist and much of the QRH can be flown largely as real. **Limits:** it is an evolving payware, not a certified-fidelity study sim; several EICAS non-normals in the QRH will be **partially or not modelled** 🟧, and behaviour changes across updates. Verify each abnormal is actually simulated before relying on the QRH recall items against it `[VERIFY]`.
- **Default Laminar 787 (mid):** functional default FMC and systems, good for normal-ops flows, but **not** a full EICAS non-normal simulation — most QRH abnormals will not trigger as real EICAS messages 🟧. Fine for normal line flying; weak for abnormal/emergency training.
- **General:** neither XP11 model reproduces real certified Boeing performance data. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| Engine option | 🟥 | Both | Model/SimBrief engine (GEnx-1B vs Trent 1000) may not match confirmed K Global fit — burn/thrust/N1 differ | Confirm fit; align SimBrief engine; correct any burn comparison |
| EICAS non-normal depth | 🟧 | Magknight 787 | Evolving payware; some EICAS non-normals not fully modelled | Use for normal-ops; treat 🟧 QRH items as reference only |
| EICAS non-normal depth | 🟧 | Default Laminar 787 | Default systems do not reproduce most EICAS non-normals | Use for normal flying; QRH abnormals largely reference-only |
| Weather radar | 🟧 | Both | XP11 weather-radar behaviour is degraded vs XP12 | Cross-check MET/SIGMET externally; don't rely solely on WXR |
| Navdata / AIRAC | 🟧 | Both | FMC routing/procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle; mismatch breaks SIDs/STARs/oceanic points |
| Perf realism | 🟧 | Both | Modelled performance is approximate; not certified data | Use SimBrief OFP (Dispatch) as the planning authority, not the sim's figures |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests a candidate and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`. Priority: run the test pass on **Magknight 787 (XP11)**, with the default Laminar 787 documented as fallback.
- **Engine-fit decision is open 🟥 `[VERIFY]`.** GEnx-1B vs Trent 1000 drives thrust ratings, N1 references and burn; it must be confirmed before any in-sim burn is treated as OFP-representative (§2, Dispatch §2).
- **ETOPS/EDTO modelling fidelity 🟥.** The B789 is an EDTO backbone (Dispatch §5, type certified 330 min / K Global approved 180 min). **No add-on simulates operator EDTO approval, critical-fuel scenarios or en-route-alternate adequacy** — those are dispatch/OFP disciplines, not sim features. The sim can fly the routing and a single-engine driftdown (Magknight approximates engine-out; default 787 lighter 🟧), but the **decompression + engine-out critical-fuel check remains an OFP/OM E task** and must not be inferred from in-sim behaviour. 🟥
- **AIRAC/navdata dependency 🟥.** Long thin trunks (intercontinental references) route through oceanic/near-polar tracks that demand a **current AIRAC cycle**; an out-of-date cycle breaks the FMC route, waypoints and ETOPS entry/exit points. Pilots must maintain current navdata before dispatching a B789 leg. 🟥
- **XP11 vs XP12 divergence 🟧.** If the fleet later moves to XP12, re-test and re-baseline the Checklist/QRH at that point (improved weather/lighting; check the flown model's XP12 feature set). Instructions §5 trigger: "Approved sim model / version / new AIRAC".

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Magknight — Boeing 787-9 for X-Plane (developer site) — https://magknight.com/
- Magknight 787-9 (X-Plane.Org Store) — https://store.x-plane.org/787-9_p_1132.html
- X-Plane — default aircraft (Laminar Research 787) — https://www.x-plane.com/desktop/aircraft/
- SKYbrary — Boeing 787-9 (B789) — https://skybrary.aero/aircraft/b789
- Wikipedia — General Electric GEnx / Rolls-Royce Trent 1000 (engine options) — https://en.wikipedia.org/wiki/General_Electric_GEnx

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate models (Magknight 787 XP11/12 lead, default Laminar 787 fallback); approved-model and engine-fit decisions left open `[VERIFY]`. |
