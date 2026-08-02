# LTFJ — İstanbul Sabiha Gökçen Intl · Arrival Page

**LTFJ / SAW** · Pendik/Kurtköy, İstanbul, Türkiye · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — DHMİ AIP-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LTFJ Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **RWY 06** preferred (06L or 06R) per the Preferential Runway System, wind/braking-action permitting |
| Usual approach | ILS CAT I (06L, 24R, 24L) or **ILS CAT II** (06R) by assigned runway |
| Config logic | Wind/braking-action/weather-driven Preferential Runway System (PRS); default preference RWY 06 |
| Transition level | By QNH; TA 12,000 ft — TL not independently confirmed 🟧 |
| LVP trigger | Not confirmed — CAT II infrastructure confirmed on 06R 🟧 |
| Missed-approach driver | Traffic/re-sequencing (not terrain — no close-in high terrain reported) |

---

## 2. STAR / transition selection

- **STARs (names only):** Not confirmed in reachable research pass — pull the current-AIRAC STAR list at planning. 🟧
- **Selection by arrival direction / runway:** Not confirmed in reachable sources; expect ATC/ATIS assignment per the Preferential Runway System.
- **Transition to approach:** During the approach phase, arriving traffic uses the **LTBA QNH/TL** issued by Yeşilköy APP; Gökçen TWR issues the local LTFJ QNH at first contact. Confirm current-chart RNAV-to-ILS transition and expected vectoring.
- **Speed / flow constraints on the STAR:** Not confirmed — pointer only, verify chart.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Not confirmed in reachable sources — plan per standard distance/altitude rule of thumb pending chart confirmation.
- **Speed control:** Standard 250 KIAS below FL100 (ICAO norm) expected; STAR-specific speed gates not confirmed.
- **Altitude constraints:** Not confirmed — pointer only, verify chart.
- **Energy traps:** Confirm the actual assigned runway (06 vs 24, and 06L/06R vs 24R/24L) on ATIS before committing to an approach briefing — the PRS default (RWY 06) can be overridden by wind/braking-action/weather criteria.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 06L | ILS (ISAB) | CAT I confirmed; approach lighting rated CAT II/III — verify 🟧 | Verify current chart |
| 24R | ILS (ISBH) | CAT I | Verify current chart |
| 06R | ILS (ISGN) | **CAT II** confirmed — new wide-body-capable runway | Verify current chart |
| 24L | ILS (ISGB) | CAT I confirmed; approach lighting rated CAT II/III — verify 🟧 | Verify current chart |

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟥 No close-in high terrain identified in reachable sources, 35 km SE of İstanbul on the Asian side — cross-ref [Briefing §3.1](index.md). Not independently cross-checked against a current MSA chart this pass.
- **Specific threats:** Two closely spaced parallel runway pairs (06L/24R and 06R/24L) under a capacity-constrained field — confirm dependent/independent approach status and wake-turbulence spacing on the current chart. Shared Yeşilköy APP structure with LTFM across the strait adds sequencing complexity.
- **Airspace / traffic:** High density given LTFJ's role as İstanbul's second airport and the explicit capacity constraints in its own local traffic regulations (§Briefing §3.2) — cross-ref the [Middle East airspace brief](../../../../airspace/middle-east.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not a terrain-driven field per reachable sources — pointer only, verify chart.
- **Re-sequencing environment:** Capacity-constrained field with two runway pairs sharing approach control with LTFM — expect prompt vectoring on a go-around given the traffic-management regime described in §Briefing §3.2/§5.
- **Go-around traps:** Not individually confirmed — brief the standard go-around procedure.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 3,540 m (06R, 24L — new runway), 2,910 m (06L) / 3,000 m (24R) — cross-ref [Briefing §7](index.md). Note the reduced LDA on 06L (2,910 m vs 3,000 m TORA) due to a geometry offset at the TWY A11/24L junction.
- **Braking / vacate:** Not individually confirmed — confirm rapid-exit taxiways on current chart.
- **Runway-excursion watch:** 🟧 No displaced thresholds published; 06R/24L carries meaningful longitudinal-slope variation along its length (a surface-profile note) — see [Briefing §7](index.md).

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** Not individually confirmed — extensive lettered taxiway system (A–V) serving the passenger apron, cargo apron and General Aviation apron; confirm routing with Ground on the day.
- **Hot spots / tight taxiways:** 🟥 **MRO and stands 301–308 areas are not visible from Tower** — taxiing/push-back/towing there is under pilot responsibility; cross-ref [Briefing §13](index.md). TWY F4 carries a noted slope caution.
- **Stand/gate notes:** Cross-ref [Dispatch §3](dispatch.md).

---

## 9. Arrival frequency sequence

- **Sequence:** Approach (Yeşilköy APP, sector SAG, or Gökçen TWR when required/transferred) → Tower (118.800 main) → Ground (121.750 main) — reference the field's actual frequencies in [Briefing §8](index.md).
- **Approach/Departure control:** Yeşilköy APP (sector SAG) primary; Gökçen TWR takes over when required/transferred. Sector/STAR-specific frequencies — verify current chart. 🟧

---

## 10. Gotchas

- **Confirm the active runway/configuration on ATIS before briefing the approach** — the Preferential Runway System defaults to RWY 06 but is subject to override; do not assume without checking.
- **06R carries the confirmed CAT II ILS** — the newer, wide-body-capable runway; if assigned 06L, 24R or 24L, brief for CAT I and verify current chart minima (approach lighting on some of these shows CAT II/III capability that is not matched by the confirmed navaid category — treat cautiously).
- **LTFJ's own AIP acknowledges heavy traffic and constrained capacity** — expect a busier-than-expected sequencing environment for a "secondary" airport.
- **06L has a reduced LDA (2,910 m) relative to its TORA (3,000 m)** due to a taxiway-junction geometry offset — confirm before planning a tight-margin landing on that runway.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- STAR names and transitions — not obtained this pass.
- Transition level (by QNH).
- LVP trigger conditions and exact RVR minima.
- Confirmation of the approach-lighting-vs-ILS-category discrepancy on 06L and 24L.
- Named taxiway hot spots beyond MRO/301–308 and TWY F4.
- Dependent/independent approach status between the two parallel runway pairs.

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config, ground-delay/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **DHMİ AIP Türkiye, AD 2 LTFJ** (current AIRAC extract, cycles through AMDT 04/26) — https://dhmi.gov.tr/AIPDocuments/LT_AD_2_LTFJ_en.pdf (retrieved 2026-07-26).
- DHMİ AIP Türkiye, AD 2 LTFJ (2015–2016 legacy cycle, separation-minima detail) — https://silo.tips/download/ad-2-ltfj-1-turkey-12-nov-15-ltfj-ad-21-aerodrome-location-indicator-and-name-lt (retrieved 2026-07-26). **Superseded cycle — flagged 🟧 where used.**

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS (not yet reconciled for this field); 4-page pack. |
