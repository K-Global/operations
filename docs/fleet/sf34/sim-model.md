<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  SF34 Saab 340B
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# SF34 — Saab 340B · Sim-Model

**SF34 · Saab 340B — TURBOPROP** · represented in-sim by the model(s) below · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **No model here is yet formally approved by K Global — that is a management decision still open** 🟧 `[VERIFY]`. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| **Carenado Saab 340B** | X-Plane 11 (native); unofficial community X-Plane 12 compatibility patch exists on the X-Plane.Org forum `[VERIFY — K Global test]` | high for its era — custom EADI/EHSI instruments, custom FMS with detachable pop-up, custom APS-85-style autopilot with detachable pop-up, "librain" wiper/ice-effect support, 4K PBR textures | 🟧 Conditional — leading candidate; approval pending |
| X-Plane 11 / 12 default fleet | X-Plane 11 / 12 | — | 🟥 Not recommended — **neither XP11 nor XP12 ships a default Saab 340**; no factory fallback exists for this type |
| Airnation Saab 340B | X-Plane 11 `[VERIFY]` | Not assessed by K Global | 🟧 Not evaluated — a second public Saab 340B product exists (per public storefront/download listings); K Global has not tested it and takes no position on its depth or fidelity `[VERIFY]` |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended — known blocker, avoid.*

**Honest position on the "approved model" gap 🟧 `[VERIFY]`:** as of this draft K Global has **not** run a formal in-house test-and-approve pass on either public Saab 340B add-on, so nothing here is 🟩 Approved. The Carenado Saab 340B is the more established, purpose-built product with a public developer track record (a payware release with its own systems manual and flight tutorial per public storefront/review listings) — it is the leading candidate. The Intro §2 mapping line (`Sim model: Carenado Saab 340B [VERIFY]`) resolves **here** once a model is tested and management confirms it — until then this file, the Checklist and the QRH are written to the Carenado product as the candidate, and every model-specific figure stays `[VERIFY]`.

## 2. Type ↔ model fidelity note 🟧

- **Single-sub-type family:** unlike the Bombardier CRJ700/900/200 or ATR 72/42 pairs in this group, the Saab 340 series (340A / 340B / 340B Plus) is documented here as a single K Global pack (SF34, the 340B production block) — there is no sibling turboprop pack to cross-check fidelity against within this manufacturer group. The main fidelity risk is **generation/production-block drift**: confirm any candidate add-on models the **340B** (CT7-9B engines, 340B systems fit) rather than the lower-thrust 340A or the later 340B Plus (active noise/vibration control, some extended wingtips) — cross-ref Intro §1.
- **Carenado Saab 340B** targets the 340B production block per its public product description (custom EADI/EHSI, APS-85-style autopilot) — no known sub-type mismatch 🟩 (fidelity) / 🟧 (approval still pending).
- **Flight-deck generation match:** the Carenado product's custom EADI/EHSI instruments and pop-up FMS/autopilot are consistent with the real aircraft's early-generation CRT-based EFIS (Intro §7) — this is a meaningful fidelity point, since a product built to a later "full glass" mental model would misrepresent this type's actual flight deck.
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping) and **Dispatch §2** (SimBrief setup). No K Global reference OFP exists yet for this type (Dispatch §7 watch-item) — burn/fidelity comparisons cannot yet be validated against a flown mission.

## 3. Systems-depth caveats

- **Carenado Saab 340B:** custom EADI/EHSI (CRT-style, matching the real early-EFIS flight deck), custom FMS with a detachable pop-up window, custom APS-85-style autopilot with a detachable pop-up window, "librain" plugin support (wiper animation, visual ice-accretion effects on windows), 4K PBR exterior/interior textures, and a developer-published systems manual plus flight tutorial. **Known limitation:** the product dates to a 2018-era release built natively for X-Plane 11; the X-Plane 12 compatibility path is an **unofficial, community-produced patch** published on the X-Plane.Org forum, not a developer-supported XP12 release — verify behaviour carefully if flown on XP12 🟧 `[VERIFY]`. Depth of autofeather, prop de-ice, and pressurisation-panel simulation is not independently confirmed by K Global — verify each Checklist/QRH item is actually simulated **in the installed version** before relying on it 🟧 `[VERIFY]`.
- **General:** the product does not reproduce certified real-world performance data. Do **not** describe installation here — pilots are assumed competent to install, configure and update their own add-on and navdata.

## 4. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| No default/factory Saab 340 | 🟥 | XP11/12 | Neither sim ships a default Saab 340 — there is no fallback if the payware product is unavailable | Standardise on the Carenado Saab 340B; no confirmed alternative exists |
| Unofficial XP12 path | 🟧 | Carenado | Product is XP11-native; XP12 support is a community, not developer, patch | Prefer XP11 for this type until a developer-supported XP12 release exists, or accept the community-patch caveat |
| Production-block match | 🟧 | Carenado | Must represent the **340B** (CT7-9B), not the 340A (CT7-5A2, lower thrust) or 340B Plus (ANVS, extended wingtips) | Confirm product listing/manual states 340B before relying on performance figures |
| Second product not evaluated | 🟧 | Airnation | A second public Saab 340B add-on exists; K Global has not tested it, quality/depth unknown | Do not substitute without a K Global test-and-approve pass |
| Autofeather/de-ice simulation depth | 🟧 | Carenado | Not independently confirmed by K Global (§3) | Re-verify against the installed version before training to the QRH memory items |
| Perf realism | 🟧 | Carenado | Modelled performance is approximate; not certified data | Treat public Saab/Wikipedia/EASA figures (Intro/Dispatch) as the planning authority, not the sim's own figures |
| No reference OFP | 🟧 | Carenado | No K Global SF34 OFP flown yet (Dispatch §7) | Burn/CI validation against a flown mission remains open |

## 5. Constraints that affect dispatch or procedures 🟥

- **Approved-model decision is open 🟥 `[VERIFY]`.** Until K Global tests the Carenado Saab 340B (the leading candidate) and management confirms it, the pack cannot go Verified and the Intro §2 sim line stays `[VERIFY]`.
- **Production-block confusion 🟥.** The commonest real-world error this pack must guard against is treating a 340A or 340B Plus figure/handling note as representing this 340B fleet — thrust (CT7-5A2 vs CT7-9B), MTOW, and cabin/system fit all differ across the production run. Confirm the production block before any figure is trusted.
- **XP11-vs-XP12 dependency 🟧.** Given the unofficial nature of the XP12 compatibility path, standardise the fleet on one X-Plane version and confirm the Checklist/QRH against whichever version is actually flown.
- **No shared type rating 🟩.** Unlike the Bombardier and ATR packs in this group, the SF34 has no common-rated sibling to cross-check candidate models against — every fidelity judgement here is made against public Saab/Wikipedia data alone.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- X-Plane.Org Store — Saab 340 XP11 (Carenado) — https://store.x-plane.org/Saab-340-XP11-_p_951.html
- Threshold — Carenado Releases Saab 340B for X-Plane — https://www.thresholdx.net/news/cs340b
- X-Plained — Aircraft Review: Carenado Saab 340 — https://www.x-plained.com/aircraft-review-carenado-saab-340/
- Wikipedia — Saab 340 — https://en.wikipedia.org/wiki/Saab_340

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — candidate model identified (Carenado Saab 340B, X-Plane 11 native, unofficial XP12 patch; no default/factory Saab 340 exists); production-block matching (340B vs 340A/340B Plus) flagged as the type's fidelity trap; second unevaluated product (Airnation) noted but not endorsed; approved-model decision left open `[VERIFY]`. |
