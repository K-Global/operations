<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  CONC Concorde (supersonic transport)
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# CONC — Concorde · Dispatch

**CONC / Concorde** · Four-engine supersonic transport; single Premier-unit heritage showcase
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, diversion planning) is defined once in OM E — this file **applies** it to Concorde, which is a **non-standard, supersonic** case throughout. Capability values sit in the Fleet Capability Matrix **secondary/indicative table** (🟧 — cited, not restated). Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| OEW / MZFW / MTOW / MLW | ~78,700 / ~92,080 / ~185,070 / ~111,130 kg 🟧 `[VERIFY]` |
| Max fuel | ~95,680 kg (~119,300 L) 🟧 `[VERIFY]` — **exceeds OEW**; the type carries more fuel than airframe |
| Payload (K Global config) | ~**100 pax** (Premier unit) `[VAMSYS mirror 2026-07-25]` 🟧 `[VERIFY]` |
| Typical block burn | **Very high** — reheat takeoff + supersonic cruise; cruise fuel flow on the order of ~25 t/hr across four engines 🟧 `[VERIFY]` |
| Cost index (default) | Not a CI-driven type — flown to a **fixed supersonic cruise schedule (≈M2.0)**, not an economy Mach 🟧 |
| Reserve rule | Final reserve + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| Contingency | Per OM E fuel policy (5% / ERA baseline) 🟩 `[K Global OpsSpec 2026-07-25]` — supersonic burn makes the absolute margin large in kg |
| ETOPS/EDTO | **Four-engine heritage type — no modern twin ETOPS/EDTO regime applies** 🟥 (see §5) |

## 2. SimBrief setup
- **Airframe profile:** Concorde / CONC supersonic profile — **not a standard mainstream airframe** 🟧 `[VERIFY]`; a community/custom Concorde profile may be required to model M2.0 cruise, the FL500–600 climb-cruise and reheat/supersonic burn. Validate before dispatch use.
- **Aircraft-data overrides:** OEW / MZFW / MTOW / MLW / max fuel → VAMSYS mirror figures where they differ from any profile default 🟧 `[VERIFY]`; ceiling ~FL600; four Olympus 593 Mk 610 with reheat.
- **Dispatch overrides:** reserve rule + contingency per OM E; **cruise schedule = supersonic climb-cruise (≈M2.0, FL500→600 as fuel burns off)**, not a subsonic economy Mach; **no ETOPS threshold/rule-time selector applies** (heritage four-engine type — §5).
- **Fuel overrides:** account for **reheat takeoff burn** and **supersonic-cruise fuel flow** explicitly — the standard subsonic burn model will under-read; treat any auto-generated figure as `[VERIFY]` until validated against a supersonic profile.
- Basis: VAMSYS `simbrief_overrides` for this type `[VAMSYS mirror 2026-07-25]` 🟧 `[VERIFY]`.

## 3. Fuel policy applied
OM E's generic fuel policy resolves for Concorde as taxi + trip + contingency (5%/ERA) + alternate + final reserve + any additional/holding `[K Global OpsSpec 2026-07-25]` — **but the trip-fuel component is dominated by two type-specific costs** that no subsonic frame carries:
- **Reheat (afterburner) takeoff burn** 🟥 — all four reheats lit for takeoff and cancelled after the initial climb; a large, short-duration burn spike absent from any other fleet type.
- **Supersonic-cruise fuel flow** 🟥 — high total fuel flow at M2.0; this is why max fuel (~95.7 t) exceeds OEW and why usable range is only ~3,900 NM (§6). The **step/climb-cruise** technique (aircraft drifts up FL500→600 as it lightens) is part of the fuel plan, not optional.

**CG-driven trim fuel is not a reserve — it is an active transfer** 🟥: fuel is moved between forward and aft **trim tanks** to track the transonic CG shift (§4). This changes *where* fuel sits, not *how much* is burned, but the dispatch load/CG plan must respect the trim-tank schedule (see Checklist). **Tankering** has little practical headroom on this type — the tanks are already effectively full for range on most sectors; treat as case-by-case per OM E `[K Global OpsSpec 2026-07-25]`, but expect no meaningful tankering margin. Reserve/contingency values are defined in OM E — apply, do not restate. See `../../../OM E Operations/` fuel policy.

## 4. Payload & loading
- K Global config: ~**100 pax** Premier `[VAMSYS mirror 2026-07-25]` 🟧 `[VERIFY]` — low-density premium cabin; belly cargo minimal on this type (fuel and CG dominate the loadsheet).
- **CG is managed dynamically by fuel transfer** 🟥: forward/aft **trim tanks** are used in flight to move the CG aft for supersonic acceleration and forward again for deceleration, tracking the aerodynamic-centre shift. The dispatch CG must be set so the **in-flight transfer schedule keeps the CG within the (narrow, speed-dependent) supersonic envelope** at every phase — this is the type's defining loading discipline. Keep ZFW within MZFW (~92,080 kg) and plan the transfer sequence per the flown model/procedure.
- **Field-length / reheat penalty:** reheat is required to make existing runways at high takeoff weight; hot-and-high or short fields bite hard given the delta's field-length appetite — assess per field 🟧 `[VERIFY]`.

## 5. ETOPS / EDTO 🟥
- **No modern ETOPS/EDTO regime is applied to this type.** Concorde is a **four-engine heritage type**; the twin ETOPS diversion-time framework does not apply, and its supersonic operation sits **outside the mainline EDTO/adequate-aerodrome analysis** used for the current fleet. The Fleet Capability Matrix records it only in the **secondary/indicative table** ("legacy; supersonic ops out of scope", 🟧). Do **not** select a twin rule-time value.
- **Diversion planning is dominated by two type realities instead:** (a) **short range** (~3,900 NM) leaves thinner en-route diversion geometry than a modern long-haul twin; (b) a **descent from FL600 to a subsonic hold/approach** is a long, energy-managed manoeuvre (QRH Ch 9) — an en-route problem at Mach 2 means decelerating and descending a long way before any approach. Select adequate en-route alternates per OM E along the (largely overwater) supersonic track.
- **Critical-fuel note:** with reheat/supersonic burn and modest range, fuel-critical scenarios are tighter than on a subsonic widebody — check the OM E critical-fuel scenario against a realistic supersonic burn, not a subsonic estimate 🟧 `[VERIFY]`.

## 6. Route applicability
- **Cleared/typical:** high-yield Premier point-to-point sectors within ~3,900 NM where a **supersonic segment is permissible** — in practice **largely overwater/oceanic corridors**, since sustained supersonic overland flight is broadly restricted by boom/noise rules 🟥. The type earns its block-time advantage only where it can actually go supersonic.
- **Watch:** 🟥 **supersonic-corridor / overwater routing is the binding constraint** — plan the supersonic segment where boom rules permit and fly subsonic elsewhere; ~3,900 NM range caps sector length; reheat/noise-abatement departure procedures apply; confirm reserves against a *supersonic* burn.
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| **Reheat + supersonic fuel burn** | 🟥 | Very high block burn; range ~3,900 NM is the binding planning limit; standard subsonic burn model under-reads |
| **Transonic CG by fuel transfer** | 🟥 | Dispatch CG must let the in-flight trim-tank schedule hold CG within the narrow supersonic envelope; see §4 + Checklist |
| **Supersonic-corridor / overwater routing** | 🟥 | Supersonic segments only where boom/noise rules permit — largely oceanic; shapes every route |
| No modern ETOPS/EDTO regime | 🟧 | Four-engine heritage type; secondary/indicative matrix only; short range drives diversion geometry instead |
| Supersonic profile in OFP tooling | 🟧 | Not a standard SimBrief airframe; validate/build a supersonic profile before dispatch use `[VERIFY]` |
| Tankering headroom | 🟧 | Minimal — tanks effectively full for range; expect no meaningful tankering margin |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- SKYbrary — Aérospatiale / BAC Concorde (CONC) — https://skybrary.aero/aircraft/conc
- Heritage Concorde — fuel system & CG / trim-tank transfer — https://www.heritageconcorde.com/
- Heritage Concorde — Olympus 593 Mk 610 / reheat — https://www.heritageconcorde.com/concorde-olympus-593-mk610-engines
- Wikipedia — Concorde (performance, range, fuel) — https://en.wikipedia.org/wiki/Concorde

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public SKYbrary/Heritage Concorde/Wikipedia data + VAMSYS mirror. Reheat + supersonic burn and the transonic CG-by-fuel-transfer flagged 🟥; supersonic-corridor/overwater routing flagged 🟥 as the binding route constraint; **no modern twin ETOPS/EDTO regime** applied (heritage four-engine type — secondary/indicative matrix). Supersonic OFP profile is non-standard and marked `[VERIFY]`. No airline names per governance. |
