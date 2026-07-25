<!--
================================================================================
  K Global — AIRFRAME PACK · DISPATCH  ·  E35L Embraer Legacy 650 (EMB-135BJ)
  Curated layer. Anonymous · version-controlled · public sources only.
  FLAG LEGEND  🟥 hard requirement/hazard   🟧 caution/unverified   🟩 normal/confirmed
================================================================================
-->

# E35L — Embraer Legacy 650 · Dispatch

**E35L / EMB-135BJ Legacy 650** · Large-cabin business jet, Executive-unit twin
**Version** v0.1 · **Updated** 2026-07-25 · **Status** Draft

> **Read-me:** How this type is dispatched at K Global. Method (fuel policy, alternate/reserve logic) is defined once in OM E — this file **applies** it to the E35L. Capability values are held in the Fleet Capability Matrix secondary (indicative) table — cited, not restated. Flag legend 🟥 hard · 🟧 caution · 🟩 normal.

---

## 1. Snapshot (planning)

| Field | Value |
|---|---|
| BOW / MZFW* / MTOW / MLW | 14,160 🟩 / ~16,400* 🟧 / 24,300 🟩 / 🟧 `[VERIFY]` kg (*MZFW derived, not published) |
| Max fuel | 9,300 kg (~11,600 L) 🟧 `[VERIFY — volume derived]` |
| Payload (K Global config) | `[VERIFY — VAMSYS]`; manufacturer reference 13–14 pax, max payload 2,240 kg |
| Typical block burn | **~1.05 t/hr average** — derived (max fuel ÷ endurance at 3,900 NM/M0.78), not a primary OFP figure 🟧 |
| Cost index (default) | Per OM E / route economics — no E35L reference OFP CI yet 🟧 `[VERIFY]` |
| Reserve rule | Final reserve **30 min** + alternate per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| Contingency | **5% / ERA** per OM E fuel policy 🟩 `[K Global OpsSpec 2026-07-25]` |
| ETOPS/EDTO | **Not applicable** — twin business jet outside the OM B mainline/OpsSpec EDTO scope; see §5 |

## 2. SimBrief setup

- **Airframe profile:** E35L — 🟧 `[VERIFY]` **availability not confirmed.** Public flight-sim community discussion (as of early 2026, following the X-Crafts Legacy 650 release) indicates a dedicated E35L SimBrief profile may not yet exist; confirm before dispatch and, if absent, select and record a documented substitute profile (e.g. a generic large-cabin business-jet or ERJ-135-derived performance proxy) rather than dispatching on an unverified default.
- **Aircraft-data overrides:** BOW / MZFW / MTOW / MLW / max fuel — set to VAMSYS mirror figures where they differ from the SimBrief (or substitute) defaults 🟧 `[VERIFY]`; ceiling FL410; engines 2 × Rolls-Royce AE 3007A2 🟩.
- **Dispatch overrides:** reserve rule (final reserve 30 min), contingency 5%/ERA, fuel factor, cruise mode/sub, climb/descent per OM E; no ETOPS/EDTO threshold applies to this type (§5).
- **Fuel overrides:** minfob / minfod / atc / mel / wxx / added / tankering — default unless route-specific 🟧.
- Basis: VAMSYS `simbrief_overrides` for this type, where populated `[VAMSYS mirror 2026-07-25]`.

## 3. Fuel policy applied

OM E's generic fuel policy resolves for the E35L as taxi + trip + **contingency (higher of 5% of trip, or 3% with a suitable en-route alternate)** + alternate + **final reserve (30 min)** + any additional/discretionary `[K Global OpsSpec 2026-07-25]`. No primary per-hour burn figure is on file for this type; the **~1.05 t/hr** average cited in §1 is a derived sanity-check only (9,300 kg max fuel over the ~8.7 hr endurance implied by 3,900 NM at M0.78 cruise), not a substitute for a flown OFP. **Tankering:** per the current OM E Fuel Policy guideline trigger (≥10% fuel-price differential between departure and destination, weight/CG permitting) `[K Global OpsSpec 2026-07-25]` — the E35L's modest max-fuel volume (~11,600 L) limits tankering headroom on longer Executive sectors relative to the widebody fleet, but short repositioning legs can still benefit weight/CG permitting. See `../../../OM E Operations/Fuel Policy.md`.

## 4. Payload & loading

- K Global config: `[VERIFY — VAMSYS]`; manufacturer reference 13–14 pax in three cabin zones, max payload 2,240 kg.
- Standard pax/bag weights per OM E loading policy where applicable to Executive-unit charter-style manifests; keep ZFW within the derived MZFW (~16,400 kg 🟧) and CG within the envelope. 🟧
- No belly-cargo hold in the mainline pax+cargo sense — Executive-unit cabin/baggage-compartment loading only (286 cu ft / 8.1 m³ baggage capacity) 🟩.
- **Hot-and-high:** not researched to mainline standard 🟧 — assess per field before scheduling any high-elevation Executive sector; the AE3007 is a well-margined business-jet powerplant but no K Global-specific penalty data is on file.

## 5. ETOPS / EDTO — not applicable 🟩

The E35L is a twin business jet operated by the Executive unit; it sits **outside the OM B mainline EDTO/OpsSpec scope** (the Fleet Capability Matrix Table A EDTO treatment covers only the 14 mainline Airbus/Boeing types). No K Global EDTO rule time is assigned to this type. If an Executive-unit route were ever planned with an extended-diversion profile, the OM E ETOPS-EDTO Procedures method (`../../../OM E Operations/ETOPS-EDTO Procedures.md`) and a dedicated operator decision would need to be applied first — this is **not currently the case** and is noted for completeness, not as an active planning requirement.

## 6. Route applicability

- **Cleared/typical:** long-range Executive-unit charter/VIP sectors within the ~3,900 NM structural range; short-field performance (5,741 ft takeoff / 2,842 ft landing) gives access to a wider range of Executive-class fields than the mainline narrowbody/widebody fleet.
- **Watch — steep approach / London City (EGLC):** flagged as an **open candidacy item** (see Intro §1, §7) tied to the OM E Steep Approach Operations deferral. The E35L is **not currently approved or confirmed-certified** for steep-approach operations at K Global — do not plan an EGLC-class sector on this type until the matrix/OpsSpec question is resolved.
- **Watch — SimBrief profile:** confirm the dispatch profile (§2) before committing any E35L sector to the OFP pipeline.
- Link to OM C route briefs (planned): OM C route briefs (planned) and OM C route briefs (planned).

## 7. Dispatch watch-items

| Item | Flag | Note |
|---|---|---|
| No E35L reference OFP yet | 🟧 | Burn/CI/alternates are derived/public-sourced — replace with type OFP figures when first flown |
| SimBrief profile availability | 🟧 | Not confirmed as a native profile as of this draft — confirm or record a substitute |
| Steep approach / EGLC candidacy | 🟧 | Open item — matrix reads "No" (indicative); ties to the OM E Steep Approach Operations deferral naming Legacy-class jets as a candidate family |
| Type rating commonality (EMB-135/145) | 🟧 | Confirm whether K Global treats E35L as common-rated with the (deferred) ERJ-145-family pack |
| MZFW / MLW | 🟧 | MZFW derived, MLW not established from the public source used — confirm both against VAMSYS/AFM before use in performance planning |
| ETOPS/EDTO scope | 🟩 | Not applicable — outside OM B mainline OpsSpec EDTO scope |

---

## Sources & References
*Public URLs only. Private/OEM/add-on documents may inform content but must never be listed here.*

- Wikipedia — Embraer Legacy 600 (incl. Legacy 650 variant table) — https://en.wikipedia.org/wiki/Embraer_Legacy_600
- FlightGlobal — "USA gives thumbs-up to Legacy 650" — https://www.flightglobal.com/news/articles/usa-gives-thumbs-up-to-legacy-650-353728/
- fstc.eu — Embraer EMB-135BJ Legacy 600/650 type-rating course reference — https://fstc.eu/flight-crew-pilots/typeratings/airplane/embraer-emb-135bj-legacy-600-650/

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-25 | Initial draft — dispatch built from public Wikipedia/FlightGlobal data + VAMSYS mirror; OpsSpec values applied (contingency 5%/ERA, final reserve 30 min, tankering ≥10% guideline); no ETOPS/EDTO applicability (outside OM B mainline scope); SimBrief profile availability and steep-approach/EGLC candidacy flagged as open items; no type OFP yet (watch-item). |
