<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  PC12 Pilatus PC-12
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# PC12 — Pilatus PC-12 · Sim-Model

**PC12 / Pilatus PC-12** · represented in-sim by the model below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on K Global **candidates** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. **This is a single-engine turboprop, not a jet** — the fidelity questions that matter most here (feathering/glide behaviour, electric gear/flap actuation, stall-protection system) are different in kind from every other Executive-unit Sim-Model file. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **Carenado PC-12 HD Series** | X-Plane 11 `[VERIFY — K Global test]` | mid (payware visual/systems facsimile; not a certified-data study model) | 🟧 Conditional — only identified candidate; approval pending |
| X-Plane 11 default fleet | X-Plane 11 | — | 🟥 Not recommended — XP11's stock general-aviation/turboprop set does not include a PC-12 |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** K Global has not run a formal in-house test-and-approve pass on the Carenado PC-12 HD Series. It is the only publicly identified XP11 product for this type (Intro §2). Until tested and confirmed, the Intro §2 sim line stays `[VERIFY]` and this file, the Checklist and the QRH are written to this candidate with every model-specific figure flagged.

## 2. Type ↔ model fidelity note 🟧

- **Avionics/variant match:** the real PC-12 fleet spans an analogue/early-glass panel (PC-12/45) through to the Honeywell **Primus Apex** integrated glass suite on the current NG/NGX-generation aircraft (Intro §1, §5 delivered sub-variant `[VERIFY]`). Carenado's product line historically represents a Garmin/steam-gauge-style general-aviation panel rather than a Primus Apex replication — **confirm which panel the Carenado product ships with** before assuming it matches K Global's actual delivered sub-variant.
- **The single most operationally important fidelity question for this type is glide/feather behaviour, not avionics.** Carenado add-ons are generally built around a custom flight-dynamics file rather than a certified PT6A-67P performance dataset; whether the model degrades credibly (reduced drag with the propeller feathered vs windmilling, a realistic glide ratio) on a simulated engine failure is **not confirmed** 🟥 — this is the type's core non-normal (Intro §3, Checklist/QRH) and if the model does not represent it, in-sim engine-failure training has limited value.
- **Electric gear/flap actuation:** the real PC-12 uses electrically-actuated landing gear and flaps rather than a hydraulic system (a genuine point of difference from most aircraft in its class) — confirm the Carenado model represents an electric actuation failure mode (motor/actuator fault) rather than a generic hydraulic-style failure borrowed from another product line 🟧 `[VERIFY]`.

## 3. Systems-depth caveats

- **Carenado PC-12 HD Series:** custom systems modelling to a mid-fidelity, payware standard — not a certified-data study aircraft. Presence and fidelity of the stall-protection system (dual-computer stick-shaker/pusher, a feature unusual for this aircraft class — see QRH Ch 1) is **not confirmed** 🟧; verify before using the model for stall-recovery training.
- Manual propeller feathering via the condition lever (used both for a normal shutdown and, critically, for establishing best glide after an engine failure — QRH Ch 2) should be checked for correct drag/glide-performance modelling before relying on it 🟥.
- **General:** no addon reproduces certified AFM glide-performance or best-glide-speed data. Use the published performance figures in the Checklist/QRH as the reference, not the sim's own glide-rate readout.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| Avionics/panel variant | 🟧 | Carenado | May not match the Primus Apex NG/NGX glass suite | Confirm the modelled panel against the delivered K Global sub-variant; treat FMS/avionics behaviour as approximate |
| Feather/glide modelling | 🟥 | Carenado | Manual-feather drag reduction and glide ratio may be simplified or absent | Do not train engine-failure/glide procedures in-sim without first confirming credible degradation; use published performance data as the reference |
| Electric gear/flap failure modes | 🟧 | Carenado | May be modelled as a generic (e.g. hydraulic-style) fault rather than the real electric-actuator failure mode | Verify before relying on an in-sim gear/flap-fault scenario |
| Stall-protection system (shaker/pusher) | 🟧 | Carenado | Presence and correct triggering logic not confirmed | Verify before stall-recovery training; do not assume absence means the real aircraft lacks it (it does not — see QRH Ch 1) |
| Navdata / AIRAC | 🟧 | Carenado | FMS/GPS routing depends on the pilot's installed AIRAC cycle | Keep a current AIRAC cycle |
| Perf realism | 🟧 | Carenado | Modelled performance is approximate, not certified data | Use the published performance figures (Checklist/QRH) as the planning authority |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests the Carenado PC-12 HD Series and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`.
- **Feather/glide fidelity is a 🟥 open item, not a routine 🟧 caution.** Because the type's defining non-normal is a single-engine forced landing (Intro §3, Dispatch §5), an add-on that does not credibly model feathered-prop drag reduction and glide performance materially limits what in-sim training can validate. Flag this explicitly to the OM open-items roll-up alongside the OM E single-engine commercial-ops policy gap already noted in the Intro/Dispatch.
- **No twin-engine EDTO/ETOPS modelling question applies** — the type has no such concept in the first place (Dispatch §5), so unlike the A339/E35L Sim-Model files there is nothing to reconcile here.
- **AIRAC/navdata dependency** for any route planning, though the type's short/regional range (~1,845 NM) makes this a lighter burden than for the long-range Executive types.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Just Flight / X-Plane Store — Carenado PC-12 HD Series (X-Plane 11) — https://www.justflight.com/product/carenado-pc12-hd-series-xplane-11
- Pilatus Aircraft — PC-12 Technical Data — https://www.pilatus-aircraft.com/en/pc-12/technical-data
- SKYbrary — Pilatus PC-12 (PC12) — https://skybrary.aero/aircraft/pc12
- Wikipedia — Pilatus PC-12 — https://en.wikipedia.org/wiki/Pilatus_PC-12

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — single candidate model (Carenado PC-12 HD Series) identified for XP11; approved-model decision left open `[VERIFY]`; feather/glide-performance fidelity flagged 🟥 as the type's core non-normal-training question, distinct from routine model-fidelity cautions elsewhere in the fleet. |
