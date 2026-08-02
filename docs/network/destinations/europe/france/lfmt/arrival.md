# LFMT — Montpellier-Méditerranée · Arrival Page

**LFMT / MPL** · Montpellier (Mauguio), Hérault, Occitanie, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — SIA France eAIP-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LFMT Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **30R** preferred (until an 8 kt tailwind component, day and night); **12L** used when wind dictates |
| Usual approach | **ILS CAT I** on 30R (also RNP/VOR); **RNP/VOR only** on 12L — no precision approach on 12L |
| Config logic | Noise/environmental-preference driven — sea-facing 30R approach preferred; tailwind-component threshold triggers the 12L reciprocal |
| Transition level | By QNH; transition altitude 5,000 ft (TMA Montpellier), determined by Montpellier Approach |
| LVP trigger | RWY 12L/30R authorised for LVP use; **30R is the only CAT I/precision-equipped end** — exact RVR trigger not confirmed this pass 🟧 |
| Missed-approach driver | Not terrain-driven (flat coastal plain); published radio-failure/EAT procedure references holding fix **ESPIG** and IAF **MT502** (RNP 12L) |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** A combined RNAV/conventional STAR set serves **all runways** — pull the current-AIRAC STAR list at planning.
- **Selection by arrival direction / runway:** RWY 30R is the default preferred landing runway (sea-facing, ILS-equipped); RWY 12L is used once the RWY 30R tailwind component reaches 8 kt. Montpellier Approach assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Expect a STAR-to-ILS transition on 30R (or STAR-to-RNP/VOR transition on 12L) with radar vectors as required from Montpellier Approach; verify the charted transition.
- **Speed / flow constraints on the STAR:** **250 kt is a hard TMA-wide limit** (not just below FL100) — confirm current chart for any further published speed gate.

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning to meet the first STAR altitude gate; plan for the AIP's own visual-approach altitude guidance on RWY 30R (maintain 4,000 ft until the coastline on the left-hand pattern via named fixes GIGNA/BALRU, or until 4 NM from FJR on the right-hand pattern via SIMAR, with La Grande-Motte overflight not below 2,000 ft) where a visual approach is flown.
- **Speed control:** 250 kt hard limit throughout TMA Montpellier; RWY 12L approaches must be flown at an angle **equal to or greater than the PAPI descent angle (6.4%/3.7°)** — a published local constraint, not just a recommendation.
- **Altitude constraints:** Key STAR/visual-approach altitude gates are pointers — fly the charted/published values; at night, the visual-approach guidance requires maintaining 4,000 ft until the coastline on both traffic patterns.
- **Energy traps:** Late runway/config changes (30R↔12L ahead of a Tramontane-driven wind shift) and the coastal visual-illusion effect (§5) are the principal energy/situational-awareness traps at this field.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 30R | ILS/LOC (Y and Z variants); RNP; VOR | **CAT I precision** 🟩 — LVP-authorised end | verify current chart |
| 12L | RNP; VOR (Y and Z variants) | **No precision approach** 🟧 — non-precision minima apply | verify current chart, incl. named IAF **MT502** for the RNP procedure |

- **LVP triggers:** RWY 12L/30R is authorised for LVP operation, but RWY 30R is the field's only CAT I-equipped end (ILS + approach lighting). If a tailwind component forces a change to 12L during low-visibility conditions, brief the non-precision minima implication early. 🟧

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat Mediterranean coastal plain at 17 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟥 The **Étang de l'Or lagoon** sits immediately off both runway ends — a September 2022 nighttime storm landing on RWY 12L overran into the lagoon roughly 180 m beyond the runway end (occupants evacuated without injury; BEA investigation opened) — brief a strict stabilised-approach and early-go-around discipline, especially in convective/Tramontane conditions. The AIP separately flags that the **coastline near the field is not perpendicular to the runway axis** — a documented source of misleading visual-approach cues. The adjacent Natura 2000 wetland is also a significant **bird-strike/wildlife-hazard environment** (year-round and migratory bird population).
- **Airspace / traffic:** 🟩 Moderate density under Montpellier's own dedicated approach control (Class D CTR); not a high-workload TMA.

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Not terrain-driven — fly the published missed approach and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** Moderate traffic density; expect standard re-sequencing from Montpellier Approach rather than extended holding, except potentially during a Tramontane/convective-weather event affecting the wider Gulf of Lions corridor.
- **Go-around traps:** The published **radio-failure/missed-approach reference procedure** ties a second missed approach on RWY 12L to a climb to 4,000 ft and a hold at fix **ESPIG**, then a rejoin via IAF **MT502** (RNP 12L); on RWY 30R, a second attempt follows the charted IAC missed approach. A third consecutive missed approach requires clearing the TMA via published FJR VOR radial tracking to seek VMC. Verify the full current-chart procedure before relying on any of this operationally.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 30R and 12L both **2,600 m** full length, no displaced threshold on either — ample for any Code C K Global type. (RWY 12R carries a displaced threshold reducing its LDA to 1,000 m, but this runway is not usable by K Global under any circumstance — see Briefing §5/§7.)
- **Braking / vacate:** Rapid-exit taxiway detail not confirmed in reachable sources — confirm with Ground/Tower on the day. 🟧
- **Runway-excursion watch:** 🟥 See §5 — the September 2022 RWY 12L overrun into the adjacent lagoon during a nighttime convective storm is the standing reference case for this field; treat wet/gusty-wind landings with a firm go-around threshold.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing, taxi in to the commercial apron (B/C/D series stands) per Ground/Apron assignment; VAMSYS mirror gives a planning taxi-in time of **6 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 Several taxiways (J, M, T1–T6, V, W1, W2, Y) are restricted to aircraft with undercarriage width < 9 m; **TWY W1** carries a documented "no entry" sign with a known **"no-entry-bar" lighting gap** — a specific night/low-vis taxi-discipline caution — see [Briefing §13](index.md).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — commercial-class stands B2/B3, C2/C3, D1/D3/D4–D8 are rated to A321-Neo/737-800 class; stands D2 and D9 are geometrically larger but their movement-area access is **not** certified for widebody traffic.

---

## 9. Arrival frequency sequence

- **Sequence:** **Montpellier Approach** (sector-specific: 120.375 auxiliary / 127.280 sector FB / 130.855 sector FA / 131.055 sector FE) **→ Montpellier Tower 118.200/118.775 → Montpellier Ground 121.955.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8.)
- **Approach/Departure control:** **Montpellier Approach** is the field's **own dedicated approach control facility** for TMA/CTA Montpellier — this is not a Marseille-Approach-served field. The wider en-route authority for southeast France is **Marseille ACC (LFMM)**; no dedicated Marseille FIR brief exists yet in this library — see [Europe airspace overview](../../../../airspace/europe.md) and Briefing §18. 🟧

---

## 10. Gotchas

- **RWY 30R is preferred until an 8 kt tailwind component** — a Tramontane-driven wind shift can force a late runway change to 12L; watch the ATIS wind trend closely.
- **RWY 12L has no precision approach** — a forced switch to 12L in marginal visibility means non-precision minima, not CAT I.
- **The Étang de l'Or lagoon sits immediately off both runway ends** — this is a real, documented consequence area (2022 accident); brief a firm go-around threshold in gusty/convective conditions.
- **The coastline near the field is not perpendicular to the runway axis** — a documented visual-illusion trap on a visual approach; do not let the shoreline angle bias the perceived approach path.
- **RWY 12L approaches must be flown at an angle ≥ the PAPI descent angle (6.4%/3.7°)** — a published local constraint.
- **TMA speed is a hard 250 kt limit throughout**, not just below FL100.
- **Active bird-strike/wildlife-hazard environment** — the adjacent Natura 2000 wetland supports a significant year-round and migratory bird population.
- **TWY W1's "no-entry-bar" lighting gap** remains relevant immediately after landing during taxi-in, particularly at night.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Exact LVP/CAT I RVR trigger values for RWY 30R.
- Full current-AIRAC missed-approach/radio-failure procedure detail (ESPIG hold, MT502 rejoin) — verify against the current chart before operational use.
- Rapid-exit taxiway/vacate detail.
- STAR names (beyond the combined RNAV/conventional set identified this pass).
- Marseille ACC (LFMM) FIR brief — does not yet exist in this Operations Manual (cross-ref Briefing §18).

> **Live data — pull at planning:** wx/METAR/TAF/TREND, NOTAM (runway/approach/navaid/lighting), ATIS config/wind trend, current flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP, AD 2 LFMT** (AIRAC cycle 11 JUN 2026, amendment 05/26, eff. 2026-05-14) — STAR/IAP index, runway/declared-distance data, communications, noise-abatement visual-approach guidance, radio-failure procedure — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_11_JUN_2026/FRANCE/AIRAC-2026-06-11/html/eAIP/FR-AD-2.LFMT-fr-FR.html (retrieved 2026-07-26).
- Wikipedia — "Montpellier–Méditerranée Airport" — https://en.wikipedia.org/wiki/Montpellier%E2%80%93M%C3%A9diterran%C3%A9e_Airport (retrieved 2026-07-26). *September 2022 RWY 12L runway-excursion accident summary (see Briefing page for full citation).*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
