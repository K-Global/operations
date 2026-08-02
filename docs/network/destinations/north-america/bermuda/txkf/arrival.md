# TXKF — L F Wade Intl · Arrival Page

**TXKF / BDA** · Hamilton, Bermuda · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical arrival aid, not a chart. Companion to the [TXKF Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. Approaches are listed by name only where confirmed — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **12 or 30** — single runway, wind-dependent |
| Usual approach | VOR/DME and/or RNAV(GNSS) assumed; **ILS presence not confirmed** — verify current AIRAC 🟧 |
| Config logic | Wind-driven; northern-quadrant surface wind >15 kt brings **light-to-moderate turbulence/wind-shear risk on approach to both RWY 12 and RWY 30** 🟧 |
| Transition level | Not confirmed — verify current chart 🟧 |
| LVP trigger | No CAT II/III capability found — treat LVPs as **not available** 🟧 |
| Missed-approach driver | Not terrain — TXKF is the **only airfield on the island**; a missed approach has no local diversion option beyond the hold or a genuine oceanic/mainland diversion |

---

## 2. STAR / transition selection

- **STARs (names only):** Not confirmed in reachable sources — pull current AIRAC at planning. 🟧
- **Selection by arrival direction / runway:** Not separately documented; single runway 12/30 selected by wind.
- **Transition to approach:** Not confirmed. 🟧
- **Speed / flow constraints on the STAR:** Not confirmed — verify chart. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not confirmed — standard distance/altitude planning applies; no field-specific override found.
- **Speed control:** Standard 250 KIAS below FL100 assumed (no local override found).
- **Altitude constraints:** Not confirmed — verify chart. 🟧
- **Energy traps:** With no reciprocal runway and no on-island alternate, a late runway change or missed approach carries more consequence here than at a multi-runway field — build in extra energy/fuel margin rather than planning a tight arrival.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 12 | VOR/DME and/or RNAV(GNSS) assumed — **not confirmed by name** | No CAT II/III found 🟧 | Verify current chart |
| 30 | VOR/DME and/or RNAV(GNSS) assumed — **not confirmed by name** | No CAT II/III found 🟧 | Verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 Non-issue — low reclaimed-island site with no high terrain (see [Briefing §3.1](index.md)). The real close-in hazard is **water**, not terrain: the runway occupies a narrow reclaimed peninsula with open ocean/harbour close to several ends.
- **Specific threats:** **Light-to-moderate turbulence and/or wind shear on approach to both RWY 12 and RWY 30** when surface wind is from the northern quadrants and exceeds 15 kt — this is a published, both-runway-ends caution, not a single-runway-end quirk. 🟧
- **Airspace / traffic:** Low density, but note the layered control structure — local Tower/Ground handing to a remote FAA "Bermuda Radar" position, feeding New York Oceanic (KZWY) beyond the terminal area — see [Briefing §3.2](index.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not applicable — terrain is not the driver here.
- **Re-sequencing environment:** Low traffic density; re-sequencing is not expected to be a significant factor.
- **Go-around traps:** The defining go-around consideration at TXKF is that **there is no alternate airfield on the island** — a missed approach commits to either holding for a re-attempt or a genuine diversion off the island (mainland US or another oceanic field). Plan fuel and decision points accordingly, especially on any EDTO/ETOPS-related arrival.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 9,669 ft / 2,947 m each direction per tier-4 cross-check (see [Briefing §7](index.md)) — **a 579 ft displaced threshold is reported against RWY 12 in the same source without a corresponding LDA reduction; this inconsistency is unresolved against the primary AIP** — do not treat as audit-grade until verified. 🟧
- **Braking / vacate:** RWY 30 landing — exit right via Taxiway E, F or B. RWY 12 landing — exit left via Taxiway C. No rapid-exit/high-speed-turnoff designation confirmed. 🟧
- **Runway-excursion watch:** No reciprocal runway if blocked; **180° turns on RWY 12/30 are prohibited unless instructed by ATC** — do not plan a self-initiated back-taxi. Given the reclaimed-island setting, an excursion off either end has genuine prospect of departing prepared surface toward water. 🟧

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** **RWY 30** — exit right on Taxiway E, F or B, contact Ground on 124.5, then right on Taxiway A, left on Taxiway H, to Apron IV. **RWY 12** — exit left on Taxiway C, contact Ground on 124.5.
- **Hot spots / tight taxiways:** None specifically named in reachable sources beyond the routing above. 🟧
- **Stand/gate notes:** See [TXKF Dispatch §3](dispatch.md) — widebody/Code E-F stand count and layout not confirmed.

---

## 9. Arrival frequency sequence

- **Sequence:** Approach/Departure ("Bermuda Radar," remote FAA New York position, 119.1) → Tower (Bermuda Tower, 118.1, when staffed) → Ground (124.5). Outside tower hours (~0700–2300 LT), the field is uncontrolled and lighting is pilot-activated on **CTAF/UNICOM 122.8** (7/5/3 microphone clicks).
- **Approach/Departure control:** "Bermuda Radar" is not a Bermuda-based facility — it is delivered remotely by FAA New York-facility controllers (confirmed independently via FAA training material and a VATSIM New York Oceanic reference showing matching 119.10/128.50 assignments) — see [Briefing §3.2](index.md). 🟧 exact real-world frequency table not independently confirmed against the primary AIP.

---

## 10. Gotchas

- **Both runway ends** — not just one — carry the northern-quadrant wind-shear/turbulence caution; don't assume the "downwind" runway end is automatically the calmer choice.
- **No reciprocal runway and no on-island alternate** — treat any approach here with a larger-than-usual fuel/decision margin.
- **Tower/RFF are not H24** — an arrival outside ~0700–2300 LT lands into an uncontrolled field with pilot-controlled lighting and a ~20-minute ARFF callout if needed.
- **Hurricane season (Jun–Nov, peak late Aug–mid Oct)** can close the field entirely for 1–2 days with real, recent precedent (October 2025) — check NOTAM/advisory status before planning any arrival in season.
- **Aircraft movements on the apron are uncontrolled** — maintain own-separation awareness after vacating the runway.
- **Wildlife control service is unavailable 0300–1100Z** — factor this into any night arrival. 🟧

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- STARs, transition level, approach names/minima, LVP trigger, top-of-descent guidance, rapid-exit taxiway designation — none confirmed in reachable sources this pass.
- Displaced-threshold/LDA inconsistency on RWY 12 (§7) unresolved.
- "Bermuda Radar" real-world frequency table cross-checked only against a VATSIM (network-sim) reference and FAA training material, not the primary AIP.
- Primary Bermuda AIP AD 2 TXKF section could not be rendered this pass — see [TXKF Briefing §18](index.md).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting/R-3017), ATIS config, hurricane-season advisory status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- SkyVector — TXKF / L F Wade International Airport (FAA-sourced foreign-airport data, effective 2026-06-11) — https://skyvector.com/airport/TXKF/L-F-Wade-International-Airport (retrieved 2026-07-26). *Declared distances, taxi-exit routing, frequencies, wind-shear remark.*
- Virtual New York ARTCC (VATSIM) — "New York Oceanic Pilot Briefing" — https://zny-uploads.s3.us-east-1.amazonaws.com/documents/Oceanic%20Pilot%20Briefing.pdf (retrieved 2026-07-26). **VATSIM cross-check** — network-sim document, not regulatory; corroborates "Bermuda Radar" naming/frequencies.
- AP / local news — "Hurricane Imelda rumbles toward Bermuda as airport, schools and government offices close", 2025-10-01/02 — https://abcnews.go.com/International/wireStory/hurricane-imelda-rumbles-bermuda-airport-schools-government-offices-126110756 (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national/territory AIP; K Global fields from live VAMSYS; 4-page pack. |
