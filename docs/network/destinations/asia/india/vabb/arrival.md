# VABB — Chhatrapati Shivaji Maharaj International · Arrival Page

**VABB / BOM** · Mumbai, Maharashtra, India · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP India-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [VABB Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name/category only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY 09 or 27** (main pair); **RWY 14/32 only when 09/27 is unavailable** |
| Usual approach | **ILS CAT I (RWY 09)**, **ILS CAT II (RWY 27)**, **ILS CAT I (RWY 14)**, **visual/simple, no ILS (RWY 32)** |
| Config logic | 09/27 is the default pair under MIAL's single-runway-at-a-time policy (since mid-2013); RWY 14/32 substituted in only when 09/27 is unavailable |
| Transition level | Not confirmed this pass — verify current chart 🟧 |
| LVP trigger | Monsoon/fog-driven low-visibility events; ILS CAT II on RWY 27 is the standing mitigation — exact RVR trigger not confirmed 🟧 |
| Missed-approach driver | Traffic/sequencing density (single-effective-runway environment), not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** RWY 09/27 is the default arrival pair; Mumbai Approach assigns the STAR-to-runway transition for the active configuration. RWY 14/32 is used only when 09/27 is unavailable.
- **Transition to approach:** Expect radar vectoring onto final under Mumbai Approach/Radar (ASR-equipped); exact STAR-to-ILS transition structure not confirmed this pass. 🟧
- **Speed / flow constraints on the STAR:** Not confirmed this pass; expect additional flow speed control given the field's structural capacity ceiling (~44 ATMs/hr) and sustained high traffic density. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate (not confirmed this pass — verify chart). Monsoon-driven reduced-rate arrivals can compress the descent — brief an early-descent/holding contingency in season.
- **Speed control:** 250 KIAS below FL100 (ICAO/India norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers only — fly the charted altitudes.
- **Energy traps:** Late runway/config changes (09↔27, or a substitution onto 14/32 if 09/27 becomes unavailable), and holding/resequencing during monsoon weather events, are the main energy traps at this field. The dense close-in obstacle field on the RWY 09/27 approach path (§5) also argues against any visual shortcut below the published profile.

---

## 4. Approach selection by runway

*Names/categories only — verify minima on current AIRAC charts.*

| RWY | Approach (name/category) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 09 | ILS CAT I; VOR (CAT A/B and CAT C/D minima published) | Standard CAT I 🟩 | verify current chart |
| 27 | ILS **CAT II**; VOR | **Deepest low-vis capability at the field** 🟧 (not corroborated from a primary AIP minima table this pass — see Briefing §18) | verify current chart |
| 14 | ILS CAT I; VOR (CAT A/B and CAT C/D minima published) | Standard CAT I 🟩 — crossing runway, used only when 09/27 unavailable | verify current chart |
| 32 | **No ILS** — visual/simple approach; VOR published | 🟧 No published low-vis capability on this end | verify current chart |

- **LVP triggers:** Monsoon/fog-driven low-visibility events are the routine VABB trigger; CAT II on RWY 27 is the standing mitigation. Exact RVR/trigger figures not confirmed this pass. 🟧 See [`OM E — Low Visibility Operations`](../../../../../flight-ops/low-visibility-operations.md).

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟧 Coastal/flat at 40 ft AMSL — no mountainous terrain. However, the AIP obstacle register lists a dense field of buildings, trees and electrical/antenna structures (roughly 35–220 ft) within the RWY 09/27 approach/take-off surfaces, plus a lit ~1,018 ft TV mast and an isolated ~272 ft hill obstacle further out in the circling area. Historically, the RWY 32 approach passed near Trombay Hill (~4.5 NM) and the Bhabha Atomic Research Centre nuclear complex, at one point subject to a no-fly restriction — current status not independently reconfirmed. Fly the charted obstacle/MSA profile; this is a low-level obstacle-rich environment, not a classic mountainous-CFIT field.
- **Specific threats:** 🟥 The RWY 09/27 × RWY 14/32 **runway intersection** means the field cannot run fully independent dual-runway arrivals — traffic density and sequencing pressure (not parallel-approach wake/closely-spaced-parallel geometry) is the dominant specific threat here. RWY 32's lack of ILS is a threat multiplier if 14/32 is substituted in during marginal weather (no instrument approach available on that end).
- **Airspace / traffic:** 🟥 Very high density under Mumbai Approach/Radar; expect re-sequencing and extended vectoring, especially in monsoon-season weather or during a substitution onto RWY 14/32.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the primary driver (coastal/flat) — fly the published missed-approach profile and verify climb-gradient/turn constraints on the current chart, mindful of the RWY 09/27 close-in obstacle field.
- **Re-sequencing environment:** A go-around drops you back into a very high-density, structurally capacity-constrained (~44 ATMs/hr) single-effective-runway radar environment — expect extended vectoring and possible holding before re-sequencing, especially during a monsoon-weather event or a 14/32 substitution.
- **Go-around traps:** Traffic/config awareness given the intersecting-runway geometry; if RWY 14/32 is active, remember RWY 32 has no ILS, so a missed approach there may require a visual/simple-approach re-attempt rather than a coupled instrument re-approach.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** RWY 09 ≈3,308 m / RWY 27 ≈2,965 m (computed from displaced-threshold data, RWY 09/27 physical length 3,448 m); RWY 14 ≈2,471 m / RWY 32 ≈2,673 m (physical length 2,871 m) — 🟧 all figures computed from tier-4 displaced-threshold sources, **not confirmed against a primary AD 2.13 declared-distance table this pass**; two tier-4 sources (SkyVector, IFATC) give slightly different displaced-threshold values — verify current AIRAC. RWY 09/27 is ample for any K Global widebody; RWY 14/32 is materially shorter and carries smaller published RESAs (14: 90 × 90 m; 32: 150 × 100 m, both below the ICAO-recommended 240 × 150 m).
- **Braking / vacate:** Rapid-exit taxiways are published for both runway pairs (4 on RWY 09/27, 3 on RWY 14/32) — exact rapid-exit taxiway identifiers/locations not confirmed this pass. 🟧
- **Runway-excursion watch:** 🟧 A Boeing 747-400 hydroplaned and sustained gear damage landing on RWY 14/32 in 2005 — a documented historical example of the wet-runway/contamination risk on the shorter runway. Monsoon-season (Jun–Sep) waterlogging is the standing seasonal contamination/braking-action consideration for both runway pairs.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned 09/27 (or, exceptionally, 14/32) runway, taxi in to **Terminal 2** per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **15 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 The **RWY 09/27 × RWY 14/32 intersection** south of the terminal buildings is the field's principal ground/runway-crossing hot spot. **Taxiway M (west side)** and the dual-use **Taxiway Zulu** (taxiway by day, stand by night) are flagged in MIAL's own 2025 capital programme as active reconfiguration/congestion points — confirm current taxiway status against NOTAMs. The published primary isolation bay (TWY E9) and secondary isolation bay (near TWY N11/RWY 27 threshold) may also affect routing when active.
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Terminal 2's MARS stands take either a single widebody or two narrowbodies; exact gate assignment confirmed with handling on the day.

---

## 9. Arrival frequency sequence

- **Sequence:** **Mumbai Approach/Radar 119.30/120.35/127.90 (sector-specific) → Mumbai Tower 118.10/122.50 → Mumbai Ground 121.75/121.85/121.90.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8 — sourced to a tier-4 aggregator, not cross-checked against the primary AD 2.18 table.) 🟧
- **Approach/Departure control:** **Mumbai Approach/Radar** is the facility for Mumbai's terminal approach (ASR + SMR equipped); **Mumbai ACC (Mumbai FIR, VABF)** hands off en route inbound — see [Asia airspace general brief](../../../../airspace/asia.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **RWY 09/27 and RWY 14/32 physically intersect** — never assume independent simultaneous arrival streams on both pairs; RWY 14/32 is the fallback only.
- **RWY 32 has no ILS** — a substitution onto 14/32 in marginal weather may leave you with a visual/simple approach only on that end.
- **Monsoon-season (Jun–Sep) weather can drop achievable arrival rate quickly** — brief a holding/diversion contingency in season; heavy rain/waterlogging is the routine trigger, not fog/inversion.
- **Dense close-in obstacle field on the RWY 09/27 approach** — fly the published profile; do not shortcut visually below MSA/obstacle clearance.
- **No hard curfew, but a hard capacity ceiling** — expect vectoring/holding as routine, especially during peak banks or monsoon weather, rather than a clock-time cutoff risk.
- **RWY 14/32's shorter length and smaller RESAs** make it the less-forgiving runway if ever substituted in — treat wet-runway braking action with particular care (a 2005 hydroplaning/gear-damage event occurred on this runway pair).
- **Ground-handling agent assignment is in transition (2025)** — confirm gate/stand coordination with the current handler on taxi-in.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway.
- Confirmation of CAT II (vs a commonly assumed CAT III) status on RWY 27 against a primary AD 2 minima table.
- Exact LVP/CAT II trigger RVR values.
- Rapid-exit taxiway identifiers/locations and vacate detail.
- Transition level.
- Current status of any RWY 32 approach restriction relative to Trombay Hill/BARC.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting, esp. ILS CAT II serviceability on RWY 27 and RWY 14/32 availability), ATIS config, monsoon-season ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **Airports Authority of India — eAIP India, AD 2 VABB** (2023-cycle mirror) — https://aim-india.aai.aero/eaip-v2-01-2023/eAIP/IN-AD%202.1VABB-en-GB.html (retrieved 2026-07-26). *Obstacle register, taxiway index, isolation bays.*
- **AERA — CSMIA Fourth Control Period Stakeholder Consultation**, 25 March 2025 — https://aera.gov.in/uploads/stack_holder/17436568126440.pdf (retrieved 2026-07-26). *ILS category per runway, RESA figures, runway capacity.*
- SkyVector — https://skyvector.com/airport/VABB/Chhatrapati-Shivaji-International-Airport (retrieved 2026-07-26). *Displaced-threshold/communications cross-check.*
- IFATC — https://www.ifatc.org/appr_info?code=VABB (retrieved 2026-07-26). *Displaced-threshold/approach-type cross-check (network-sim reference, not regulatory).*
- Wikipedia — "Chhatrapati Shivaji Maharaj International Airport" — https://en.wikipedia.org/wiki/Chhatrapati_Shivaji_Maharaj_International_Airport (retrieved 2026-07-26). *Single-runway-operation policy, 2005 hydroplaning incident, Trombay Hill/BARC note.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP India (AAI); K Global fields from live VAMSYS; 4-page pack. |
