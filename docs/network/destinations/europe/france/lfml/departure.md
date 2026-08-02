# LFML — Marseille-Provence · Departure Page

**LFML / MRS** · Marignane, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — SIA France eAIP-derived

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LFML Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **31R** in the prevailing northwesterly wind (incl. Mistral episodes); **13L** in the reciprocal config; a night "calm-air" config uses **31R** for departure 2300–0600L when wind is <5 kt |
| Config logic | Wind-driven; the two runways are **dependent** — no simultaneous takeoff/landing ops on both |
| Transition altitude | 5,000 ft (PROVENCE TMA) |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | No LFML-specific slot/CTOT regime confirmed 🟧; standard EUROCONTROL ATFM may apply during regional flow events (esp. Mistral) |
| De-icing on departure | Available H24, in season |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** RWY 13L/31R is served by TWY C1, D1–D4, D6–D9; RWY 13R/31L is served by TWY E2, E3, E7, E9, F3, F7. Code E aircraft access the runway thresholds only via **TWY G3** (13-side) or **TWY G4** (31-side). Confirm the exact taxi routing with Ground/Delivery on the day.
- **Hot spots / tight taxiways:** 🟥 **No runway exit signage exists on either runway pair** — maintain positive taxiway awareness, especially at night or in reduced visibility, though this is primarily an arrival/rollout consideration (see [Arrival §8](arrival.md)). **Reduced wingtip clearance between TWY G1 and TWY L4** requires reduced taxi speed. TWY entries **G3/G4 via TWY C5** have insufficient wheel/edge margin for certain Code D aircraft (B757-200/300, B767-200/300, A310) — use an over-steering technique through the turn if assigned one of these types. Speed is restricted to 10 kt on several apron taxiways for wide-span aircraft (TWY G1 abeam block 50 and abeam stands 71–74; TWY L4 abeam block 80; TWY L3 abeam stand 48A; the central apron taxiway between stands 5A–10C).
- **Runway crossings / read-back-required points:** Not separately detailed in reachable sources beyond the general hot spots above — expect explicit ATC instructions at any runway-adjacent crossing.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi procedure not confirmed in reachable sources; low-visibility events are comparatively infrequent at this Mediterranean field given the Mistral's clearing effect, but confirm current conditions before taxiing in marginal visibility. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** The **RWY 31 configuration** (31R for IFR/VFR departures, ILS-equipped) is favoured whenever the wind is northwesterly, including during Mistral episodes, since the Mistral (typically ~300–330°) blows close to the reciprocal of the RWY 31 heading (314° true) — a strong headwind runway in that flow. The **RWY 13 configuration** (13L primary) is the reciprocal, with distinct "low-traffic" (13R VFR-only/circuits) and "high-traffic" (13R IFR/VFR landings + circuits) sub-variants. 🟧 (config-logic detail corroborated by the IVAO France division MANEX, network-sim reference, not regulatory.)
- **By departure direction:** Not further differentiated beyond the wind-driven 13/31 configuration choice above.
- **Noise / preferential-runway program:** A distinct **night "calm-air" configuration** applies 2300–0600L when wind is under 5 kt and traffic is light: **13L for landing, 31R for departure** — a fixed noise-optimised opposite-direction flow overriding the simple wind rule during quiet night hours.
- **Interaction with arrivals:** The two runways are **dependent** — simultaneous takeoff and landing operations on both are prohibited by the AIP's local traffic regulations; departures share the active runway's sequence with arrivals rather than running an independent parallel stream.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| MADRA 6C (omnidirectional Type B) | 13L/R | Initial altitude 4,000 ft | 🟧 IVAO-sourced, verify current AIRAC |
| MTG 6C (omnidirectional Type B) | 31R/L | Initial altitude 4,000 ft | 🟧 IVAO-sourced, verify current AIRAC |
| Named RNAV SID families (runway-specific suffixes, e.g. tied to NASIK/SOSUR/TINOT/VATIR/LUC/MTG waypoints) | 13L/R and 31R/L | Runway-in-use and initial level are implicit in the SID name per local convention | 🟧 IVAO-sourced only this pass — not confirmed against the primary AIP text extract reached; pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID; the omnidirectional Type B departures specify an initial altitude of 4,000 ft. Standard 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Specific NADP variant not confirmed in reachable sources this pass. 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat coastal plain beside the Étang de Berre — no significant close-in terrain obstacle identified in reachable sources.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass 🟧; low-visibility events are comparatively infrequent at this field given the Mistral's clearing effect, but confirm current LVP status before planning.
- **De-icing:** Available H24 in season. Two ground-handling operators run dedicated rigs: one with Type I (50/50, ~12,000 L stock) and Type IV (100%, ~1,000 L stock) fluids, a second with its own Type I (~6,000 L) and Type IV (~6,000 L) stocks. See [`OM E — Adverse Weather and Windshear`](../../../../../flight-ops/adverse-weather-and-windshear.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** **PROVENCE Prévol/Delivery — 121.730** (H24). Contact before any ground movement.
- **Frequency sequence:** **Delivery 121.730 → Ground 121.905 → Tower 133.100 (primary) / 123.725 (auxiliary) → Provence Approach 120.205 / 120.880 / 121.430 / 124.350 / 132.300 (sector-specific)**, with sub-sectors potentially delegated to Orange Approach or Salon Approach. Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **CTOT / slot handling:** No LFML-specific slot/CTOT regime confirmed 🟧; comply with any EUROCONTROL ATFM/CTOT assigned during regional flow events (esp. Mistral-driven configuration changes).

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 31R/13L (3,500 m, TORA 3,440–3,500 m depending on direction) is non-limiting for any K Global type. RWY 13R/31L (2,370 m) is comfortable for narrowbody equipment; confirm widebody suitability before planning a departure from this runway. **RWY 31L take-off is prohibited when the crosswind component (incl. gusts) exceeds 12 kt on a wet runway** 🟥 — a hard, Mistral-relevant restriction to brief before selecting this runway.
- **Density altitude / temperature:** Non-issue at 70 ft elevation; reference temperature 32.38°C is a minor summer performance consideration for heavier aircraft, not a hot-and-high penalty.
- **Contamination / wet-runway:** The RWY 31L crosswind/wet-runway restriction above is the main contamination-adjacent consideration; general winter contamination risk is lower than at northern-European fields given the Mediterranean climate, but de-icing is provisioned in season (§7).
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty for any K Global type at LFML; the operative consideration is the RWY 31L crosswind limit and RNP AR equipage on the secondary runway pair, not raw performance.

---

## 10. Gotchas

- **RWY 31L: takeoff prohibited when crosswind (incl. gusts) exceeds 12 kt on a wet runway** — a hard limit, directly Mistral-relevant.
- **The two runways are dependent** — never assume independent parallel departure/arrival streams; expect sequencing.
- **RWY 31L has no ILS** — if assigned as the departure runway in marginal conditions, note the arrival side has RNP-only approach coverage for any return/diversion planning.
- **Reduced wingtip clearance between TWY G1 and TWY L4** — maintain reduced speed.
- **Mandatory push-back start from remote stands 25D, 30A, 30D, 40A, 40D** — confirm stand assignment before requesting pushback clearance.
- **Mistral onset can force a short-notice runway/config change** — monitor ATIS wind trend closely before and during taxi, especially in winter/spring.
- **Night noise regime (2200–0600L)** restricts non-compliant aircraft from leaving the stand for takeoff in that window — confirm type compliance before scheduling a late departure.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway (IVAO-sourced only this pass).
- Take-off minima exact figures.
- NADP variant.
- LVTO minima/RVR and low-vis taxi (SMGCS) specifics.
- EOSID/engine-out procedure detail per runway.
- Slot-coordination/CTOT status for LFML.

> **Live data — pull at planning:** wx/METAR/TAF (esp. Mistral wind trend), NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP, AIP FRANCE AD 2 LFML** (AIRAC cycle effective 11 Jun 2026) — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_11_JUN_2026/FRANCE/AIRAC-2026-06-11/html/eAIP/FR-AD-2.LFML-fr-FR.html (retrieved 2026-07-26). *Runway/declared distances, local traffic regulations (dependent-runway rule, RWY 31L crosswind limit), communications, taxiway restrictions.*
- IVAO France Division — "LFML - Marseille Provence" (MANEX Aéroports Civils) — https://wiki.ivao.fr/books/manex-aeroports-civils/page/lfml-marseille-provence (retrieved 2026-07-26). **Network-sim document, not regulatory** — SID names/runway-configuration logic cross-check.
- Wikipedia (EN) — "Mistral (wind)" — https://en.wikipedia.org/wiki/Mistral_(wind) (retrieved 2026-07-26). *Mistral direction/speed climatology.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
