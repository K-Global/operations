<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  E35L Embraer Legacy 650 (EMB-135BJ)
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# E35L — Embraer Legacy 650 · Sim-Model

**E35L / EMB-135BJ Legacy 650** · represented in-sim by the model below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on K Global **candidates** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **X-Crafts ERJ Family** (bundles ERJ-135/140/145 + Legacy 600/650) | X-Plane 11 `[VERIFY — K Global test]` | mid–high (custom FMC facsimile of Primus Elite; not a certified-data study model) | 🟧 Conditional — only identified candidate; approval pending |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11 ships no Legacy-class or ERJ-heritage business jet |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** K Global has not run a formal in-house test-and-approve pass on the X-Crafts ERJ Family for the Legacy 650 specifically. It is the only publicly identified XP11 product covering this type (Intro §2). Until tested and confirmed, the Intro §2 mapping line stays `[VERIFY]` and this file, the Checklist and the QRH are written to this candidate with every model-specific figure flagged.

## 2. Type ↔ model fidelity note 🟧

- The X-Crafts product is a **single family model covering several distinct real aircraft** — the ERJ-135/140/145 regional jets and the Legacy 600/650 business-jet derivatives. Confirm the **Legacy 650 variant specifically** is selected (correct interior/paint/weight set), not an ERJ-145 regional shell flown under a Legacy livery — the two share an airframe lineage (Intro §1) but not an identical fit-out or weight schedule.
- **Engine variant match:** the ERJ regional family typically uses Rolls-Royce AE 3007A1/A1E; the Legacy 650 uses the **AE 3007A2** (Intro §1). Confirm the modelled engine performance corresponds to the A2 rating and not a regional-jet A1 dataset carried over inside the same product — this affects climb/cruise fuel-flow comparisons against any Dispatch OFP figure.
- **SimBrief profile gap (Intro §2):** if no dedicated E35L SimBrief profile exists and a substitute is used, the substitute's fuel/performance model may not match whatever the X-Crafts model itself flies — a second, independent mismatch risk layered on top of the model-fidelity question. Cross-ref Dispatch §2.

## 3. Systems-depth caveats

- **X-Crafts ERJ Family:** custom FMC representing the Primus Elite layout and workflow, not a certified-data study replication. CAS-message-style annunciations approximate real Primus Elite crew-alerting, but the depth of underlying failure logic (engine fire, hydraulic/electrical reversion, pressurisation) has **not been independently verified for this pack** 🟧 — confirm each QRH item actually triggers/resolves as written before relying on it for training.
- **General:** the model does not reproduce certified AFM performance data. Do not describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| FMC depth | 🟧 | X-Crafts | Custom FMC likely simplified vs a real Primus Elite FMS | Cross-check dispatch figures externally; don't treat FMC output as certified |
| Variant selection (Legacy 650 vs ERJ shell) | 🟧 | X-Crafts | Product bundles multiple real aircraft under one add-on | Explicitly select the Legacy 650 variant/weight set in the product's config manager |
| Engine dataset (A2 vs A1/A1E) | 🟧 | X-Crafts | Regional-jet engine data may carry over incorrectly | Verify modelled climb/cruise burn against Dispatch §1 figures before trusting fuel planning in-sim |
| Failure/CAS depth | 🟧 | X-Crafts | Not confirmed to full study-level; some QRH items may be unmodelled | Use for normal-ops line flying; treat 🟧 QRH items as procedural reference, not proven systems fidelity |
| Navdata / AIRAC | 🟧 | X-Crafts | FMC routing/procedures depend on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle |
| Perf realism | 🟧 | X-Crafts | Modelled performance is approximate, not certified data | Use the Dispatch/OFP figures as the planning authority |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests the X-Crafts ERJ Family (Legacy 650 variant) and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`.
- **Twin-engine, not single-engine 🟩.** Unlike the PC12 in the same Executive group, the E35L is a genuine twin — an engine-out event is a controllability/driftdown/diversion case, not a forced-landing case (contrast the PC12 Sim-Model/QRH). Confirm asymmetric-thrust handling and one-engine-inop performance are modelled credibly before using this add-on for engine-failure training.
- **No ETOPS/EDTO modelling requirement.** Per Dispatch §5 the type sits outside K Global's OpsSpec EDTO scope, so there is no EDTO-fidelity caveat to carry here (unlike the mainline widebody packs).
- **AIRAC/navdata dependency.** Long-range Executive sectors approaching the ~3,900 NM structural range should carry a current navdata cycle.
- **Steep-approach/LCY candidacy (Intro §1, §7).** This remains an open certification/approval question, not a sim-modelling one — do not infer LCY suitability from in-sim glidepath behaviour.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- X-Crafts — ERJ Family product page — https://www.xcrafts.com/erj-family
- X-Plane.Org Store — Embraer Legacy 650 by X-Crafts — https://store.x-plane.org/Embraer-Legacy-650-by-X-Crafts_p_996.html
- Wikipedia — Embraer Legacy 600 (incl. Legacy 650 variant table) — https://en.wikipedia.org/wiki/Embraer_Legacy_600
- fstc.eu — Embraer EMB-135BJ Legacy 600/650 type-rating course reference — https://fstc.eu/flight-crew-pilots/typeratings/airplane/embraer-emb-135bj-legacy-600-650/

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — single candidate model (X-Crafts ERJ Family, Legacy 650 variant) identified for XP11; approved-model decision left open `[VERIFY]`; variant/engine-dataset mismatch risk (Legacy 650 vs bundled ERJ regional-jet shell) flagged. |
