<!--
================================================================================
  K Global — AIRFRAME PACK · SIM-MODEL  ·  AT46 ATR 42-600
  Approved & tested models, quirks and limitations. NOT an install guide —
  users are assumed competent to install and configure their own add-ons.
  FLAG LEGEND  🟥 hard constraint/blocker   🟧 caution/limitation   🟩 normal/confirmed
================================================================================
-->

# AT46 — ATR 42-600 · Sim-Model

**AT46 / ATR-600 series** · **TURBOPROP** · **no confirmed candidate model identified** 🟥 `[VERIFY]` · sim = X-Plane 11
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** Which add-on(s) K Global **approves and has tested** to represent this ICAO type, and the quirks, constraints and limitations that matter in operation. Not an installation guide — setup is the pilot's responsibility. **This is the one pack in the OM B tree with no genuine candidate model at all** 🟥 — read this file as a gap analysis and an open question for K Global management, not a settled (even conditionally) recommendation. Flag legend 🟥 hard constraint · 🟧 limitation · 🟩 normal.

---

## 1. Approved & tested models

| Model (developer + product) | Sim / ver tested | Systems depth | Status |
|---|---|---|---|
| *No dedicated ATR 42 (any sub-variant) product identified* | — | — | 🟥 **Gap** — no purpose-built ATR 42-600, ATR 42-500, or any earlier ATR 42 product was found in the public X-Plane 11/12 payware or freeware market as of this draft `[VERIFY]` |
| X-Plane 11 / 12 default fleet | X-Plane 11 / 12 | — | 🟥 Not recommended — neither XP11 nor XP12 ships a default ATR 42 |
| *(cross-family reference only, not a candidate)* [AT76 — Aerosoft/McPhat ATR 72-500](../at76/sim-model.md) | X-Plane 11 | Moderate (documented in the AT76 pack) | 🟧 **Not this type** — a different airframe (72 vs 42), a different sub-variant generation (-500 vs -600), and different weights/dimensions; listed here only so the gap is not silently worked around by substitution without a documented decision |

*Status key: 🟩 Approved — tested, cleared for line use · 🟧 Conditional — usable with the noted limitations · 🟥 Not recommended / Gap — known blocker or absence, avoid or flag for decision.*

**Honest position on the gap 🟥 `[VERIFY]`:** a structured public-market search (developer storefronts, X-Plane.Org Store, simMarket, general X-Plane add-on aggregators, and open-source project repositories) did not surface a purpose-built ATR 42 product for X-Plane 11 or 12 of **any** sub-variant. This contrasts with the AT76 pack, where at least a mismatched sub-variant (-500 vs -600) candidate exists — for the AT46 there is currently **no candidate at all**. This is stated plainly rather than papered over with a forced substitution; the options below are presented as an open decision for K Global management, not a resolved answer.

## 2. Options under consideration (none yet a K Global decision) 🟥

1. **Await a market product.** Revisit periodically — turboprop add-on development is active in the broader flight-sim market (MSFS in particular has seen recent ATR 42/72-600 development per public sources), and an X-Plane-native product could appear. No timeline can be asserted `[VERIFY]`.
2. **Substitute the AT76's ATR 72-500 candidate, scaled/derated for planning purposes only.** This is **not** a fidelity match — it is a different airframe (72 vs 42) with different weights, dimensions and field performance, on top of the same -500-vs--600 cockpit-generation gap already flagged in the AT76 pack (see [AT76 Sim-Model §2](../at76/sim-model.md)). If adopted as a stopgap, it must be explicitly logged as a cross-family substitution in any training record, and normal/abnormal flows in this pack's Checklist/QRH should still be treated as the reference (they are written for the real AT46), not whatever the substituted model actually simulates.
3. **Leave the type sim-unsupported pending a decision.** Document normal/abnormal procedures against the real airframe (as this pack does) for ground-school/reference use, without asserting any in-sim training capability, until either option 1 or 2 is resolved.

No option above has been selected by K Global management as of this draft — this section exists to make the decision visible, not to make it.

## 3. Type ↔ model fidelity note 🟥

- **There is no fidelity note to make about a real candidate, because none exists.** The only fidelity comparison possible today is the explicitly-flagged-as-inadequate cross-family substitution in §2 option 2.
- **Powerplant/systems commonality with the AT76 is genuine and well-documented** 🟩 (Intro §1) — both types share the PW127-family engine lineage, the same Hamilton Standard/Ratier-Figeac six-blade propeller family, and the same Thales Suite 600 glass-cockpit avionics. This commonality is real and useful for **ground-school/procedural** training (the Checklist and QRH in this pack are written to the same turboprop-systems logic as the AT76's), but it does **not** create a usable flight-model/cockpit-visual substitute in the simulator — weights, dimensions, and field performance genuinely differ between the two airframes.
- Cross-ref: **Intro §2** (real→SimBrief→sim mapping, also flagged as a gap) and **Dispatch §2** (SimBrief setup, which is unaffected by the sim-model gap — SimBrief modelling and in-sim visual/systems modelling are separate concerns). No K Global reference OFP exists yet for this type either (Dispatch §7 watch-item).

## 4. Systems-depth caveats

- Not applicable in the normal sense — there is no model to assess. The Checklist and QRH in this pack are written from general public ATR-600/turboprop-systems knowledge (shared with the AT76 pack) as a **procedural reference**, independent of any in-sim implementation.
- If option 2 (§2) is ever adopted as a stopgap, the AT76 pack's own systems-depth caveats (condition-lever limitation, incomplete CAS simulation — see [AT76 Sim-Model §3](../at76/sim-model.md)) would apply identically to whatever cross-family substitute is used, on top of the airframe-size mismatch.

## 5. Quirks, constraints & limitations

| Area | Flag | Model | Detail / operational impact | Workaround |
|---|---|---|---|---|
| No candidate model exists | 🟥 | — | No ATR 42 product (any sub-variant) found in the public X-Plane 11/12 market | See §2 options; no fix currently available without a market development or a cross-family substitution decision |
| No default/factory ATR 42 | 🟥 | XP11/12 | Neither sim ships a default ATR 42 | No in-sim fallback exists at all for this type |
| Cross-family substitution risk | 🟥 | If AT76's -500 product is repurposed | Different airframe (72 vs 42), different weights/dimensions/field performance, on top of the -500-vs--600 cockpit gap already present in the AT76 pack | Must be explicitly logged as a substitution, not silently treated as equivalent; treat this pack's Checklist/QRH (written for the real AT46) as the training reference regardless |
| No reference OFP | 🟧 | — | No K Global AT46 OFP flown yet (Dispatch §7) | Burn/CI validation against a flown mission remains open, independent of the sim-model question |

## 6. Constraints that affect dispatch or procedures 🟥

- **No approved model exists — this pack cannot go Verified for in-sim training on its own merits** 🟥 `[VERIFY]`. Dispatch (SimBrief) and ground-school (Checklist/QRH) content in this pack remain valid as a procedural/planning reference regardless of the sim-model gap, but "flying the AT46 in X-Plane" is not currently a supported K Global activity without a management decision under §2.
- **Do not quietly fly the AT76's -500 candidate and call it the AT46** 🟥 — if a crew or trainer does this informally, it must be logged as the explicit substitution described in §2 option 2, given the genuine weight/dimension/performance differences between the two airframes.
- **Common type rating with AT76 🟩.** The real-world common ATR-600 rating (Intro §1) means the procedural content in this pack (Checklist/QRH) is deliberately written to mirror the AT76 pack's structure and turboprop-systems logic — that commonality is real and valuable for ground-school purposes even though it does not resolve the sim-model gap.

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — ATR ATR-42-600 (AT46) — https://skybrary.aero/aircraft/at46
- X-Plane.Org Store — search results, ATR 42 (market-gap reference, no listing found) — https://store.x-plane.org/
- GitHub — maxhille/atr-xplane (ATR Aircraft for X-Plane; project goal notes ATR 42/-600 series as long-term aspiration only, not yet delivered) — https://github.com/maxhille/atr-xplane
- ATR Aircraft — Cockpit / Thales avionics — https://www.atr-aircraft.com/innovation/cockpit/

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — documented the absence of any dedicated ATR 42 X-Plane product (payware or freeware) as a genuine market gap 🟥, distinct from and harder than the AT76's -500-vs--600 sub-variant mismatch; laid out three undecided options (await market, cross-family substitution from the AT76 candidate, or leave sim-unsupported pending decision); flagged that this pack cannot go Verified for in-sim training until a decision is made; procedural (Checklist/QRH) content remains valid as a ground-school/planning reference independent of the gap. |
