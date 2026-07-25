<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  B738 Boeing 737-800
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# B738 — Boeing 737-800 · Sim-Model

**B738 / 737 Next Generation family** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **Zibo 737-800X mod** (community freeware, built on the XP11 default 737-800) | X-Plane 11 `[VERIFY — K Global test]` | deep (custom FMC/CDU, systems, optional failure set) | 🟧 Conditional — leading candidate; approval pending |
| **X-Plane 11 default Boeing 737-800** (Laminar Research, unmodded) | X-Plane 11 (ships with sim) | light–mid (default systems/FMC) | 🟧 Conditional — fallback; always available, lighter fidelity |
| Other freeware 737NG conversions | X-Plane 11 | low–mid, variable | 🟥 Not recommended — inconsistent systems/FMC depth |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as of this draft K Global has **not** run a formal in-house test-and-approve pass on any 737-800 add-on, so nothing here is 🟩 Approved. The table lists genuine, publicly available candidates and what each would cost operationally. The Intro §2 mapping line (`Sim model: freeware Zibo 737-800X (X-Plane 11) [VERIFY]`) resolves **here** once a model is tested and management confirms it — until then this file, the Checklist and the QRH are written to whichever candidate is flown and every model-specific figure stays `[VERIFY]`.

**Why Zibo 737-800X leads:** it is a community-maintained freeware modification layered on the X-Plane 11 default Boeing 737-800, widely regarded as one of the deepest freeware airliner systems simulations available for XP11 — a custom FMC/CDU, a modelled electrical/hydraulic/pneumatic/fuel system, realistic engine start and an optional failure-injection set, at no add-on cost. Because it starts from the default 737-800, a baseline is always present even without the mod applied — the unmodded default is the natural no-cost fallback. 🟧

## 2. Type ↔ model fidelity note 🟧

- **Zibo 737-800X** *is* a 737-800 with **CFM56-7B** — it matches the real type, the SimBrief B738/CFM56-7B dispatch profile (Dispatch §2) and the Intro §2 mapping directly. There is **no variant-family mismatch** to correct for (unlike, e.g., a ceo-vs-neo widebody substitution) — cruise burn, ceiling and FMC behaviour should track the OFP without a variant correction, once the approval itself is closed. 🟩 (fidelity) / 🟧 (approval still pending)
- **Default XP11 Boeing 737-800 (unmodded)** is the same airframe/engine at lighter systems depth — acceptable as a visual/procedural stand-in and for normal-ops line flying; weaker for detailed abnormal work because its FMC and system logic are simpler than Zibo's. 🟧
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2–§3** (profile + fuel).

## 3. Systems-depth caveats

- **Zibo 737-800X (deep, freeware):** custom FMC/CDU with route/PERF init, an alert/annunciator system driving Master Caution and the RECALL function, hydraulics (System A / System B / Standby), electrical, pneumatics/pressurization, fuel system, realistic engine start, autopilot/autothrottle, and an **optional failure-injection module** that can trigger a meaningful subset of the non-normals below — enough that the Checklist and much of the QRH can be flown largely as real. **Limits:** it is community-maintained freeware, not a certified-fidelity study sim or a vendor product with an SLA; update cadence and behaviour can shift release to release, and several QRH non-normals will be **partially or not modelled** 🟧. Verify each abnormal is actually simulated — and that the failure module is switched on — before relying on the QRH against it `[VERIFY]`.
- **Default XP11 Boeing 737-800 (light–mid):** functional default FMC and systems, fine for normal-ops flows, but **not** a deep non-normal simulation — most QRH abnormals will not trigger as modelled alerts 🟧. Fine for normal line flying; weak for abnormal/emergency training.
- **General:** neither XP11 model reproduces real certified Boeing 737-800 performance data. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on (including matching it to a current AIRAC-compatible navigation database) and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| No confirmed XP12 build | 🟥 | Zibo 737-800X | Zibo is built specifically against the **XP11** default 737-800; there is no confirmed, authoritative XP12 port on file as of this draft | Fly XP11 for this type; re-baseline the whole pack if/when a maintained XP12 build is confirmed |
| Failure-injection module | 🟧 | Zibo 737-800X | Non-normal behaviour depends on the optional failure module being enabled and configured — off by default in some setups | Confirm the failure module is active before training to any QRH non-normal `[VERIFY]` |
| Freeware support model | 🟧 | Zibo 737-800X | Community-maintained; no vendor SLA, behaviour can change across mod updates | Re-verify Checklist/QRH figures after any Zibo version update |
| Non-normal depth | 🟧 | Default XP11 737-800 | Default systems do not reproduce most non-normal alerts | Use for normal-ops flying; treat 🟧 QRH items as reference only |
| Weather radar | 🟧 | Both | XP11 weather-radar behaviour is degraded vs XP12 | Cross-check MET/SIGMET externally; don't rely solely on WXR returns |
| Navdata / AIRAC | 🟧 | Both | FMC routing/procedures depend on the pilot's installed AIRAC-compatible navigation database | Keep a current cycle; mismatch causes discontinuities/missing SIDs-STARs |
| Fail-operational autoland / LVO | 🟥 | Both | Neither model can validate real fail-operational autoland certification — K Global operator minima stay **CAT I** regardless of in-sim autoland behaviour (see Intro/Dispatch, matrix Table C) | Do not infer LVO capability from in-sim autoland; treat as a dispatch/OpsSpec question, not a sim feature |
| Perf realism | 🟧 | Both | Modelled performance is approximate; not certified data | Use SimBrief OFP (Dispatch) as the planning authority, not the sim's own figures |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests a candidate and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`. Priority: run the test pass on **Zibo 737-800X (XP11)**, with the unmodded default 737-800 documented as fallback.
- **ETOPS/EDTO modelling fidelity 🟥.** The B738 carries an approved EDTO rule time of 120 min (Dispatch §5). **No add-on simulates operator EDTO approval, critical-fuel scenarios or en-route-alternate adequacy** — those are dispatch/OFP disciplines, not sim features. The sim can fly a single-engine driftdown (Zibo approximates it with its systems model 🟧; default lighter), but the **decompression + engine-out critical-fuel check remains an OFP/OM E task** and must not be inferred from in-sim behaviour. 🟥
- **AIRAC/navdata dependency 🟥.** Short/medium-haul trunk and secondary-market sectors still depend on a **current AIRAC-compatible cycle** for SIDs/STARs and RNP procedures; an out-of-date cycle breaks the FMC route and approach data. Pilots must maintain current navdata before dispatching a B738 leg. 🟥
- **XP11-only status 🟥.** Unlike the widebody packs (A339/B789), whose lead candidates already have some XP12 presence, Zibo 737-800X has **no confirmed XP12 build**. If K Global standardises on XP12 fleet-wide, this pack's model choice will need re-examination from scratch, not just a re-test.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- X-Plane.Org Forum — Zibo Mod (community freeware 737-800 modification) file page — https://forums.x-plane.org/files/file/40803-zibo-b738-for-xp11/
- X-Plane — default aircraft (Laminar Research 737-800) — https://www.x-plane.com/desktop/aircraft/
- SKYbrary — Boeing 737-800 (B738) — https://skybrary.aero/aircraft/b738
- Wikipedia — Boeing 737 Next Generation — https://en.wikipedia.org/wiki/Boeing_737_Next_Generation
- Wikipedia — CFM International CFM56 — https://en.wikipedia.org/wiki/CFM_International_CFM56

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate models (Zibo 737-800X freeware lead, default XP11 737-800 fallback); approved-model decision left open `[VERIFY]`; XP11-only status of Zibo flagged as a distinct constraint vs the widebody packs. |
