# LFML — Marseille-Provence · Arrival Page

**LFML / MRS** · Marignane, Bouches-du-Rhône, Provence-Alpes-Côte d'Azur, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — SIA France eAIP-derived

> **Read-me:** Tactical arrival aid for the sim, not a chart. Companion to the [LFML Briefing](index.md), [Dispatch](dispatch.md) and [Departure](departure.md) pages. STARs/approaches are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; minima shown are pointers, always verify on the current chart. Static data only; live wx/NOTAM are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual landing runway(s) | **31R** in the prevailing northwesterly wind (incl. Mistral); **13L** in the reciprocal config; night "calm-air" config uses **13L** for landing 2300–0600L when wind is <5 kt |
| Usual approach | ILS CAT III (13L) / ILS CAT I (13R, 31R); **RNP AR is preferential on 31L/31R** — 31L has **no ILS at all** |
| Config logic | Wind-driven; the two runways are **dependent** — no simultaneous takeoff/landing ops on both |
| Transition level | By QNH; transition altitude 5,000 ft — Provence Approach calculates the TL |
| LVP trigger | Not confirmed this pass 🟧; low-visibility events are comparatively infrequent given the Mistral's clearing effect |
| Missed-approach driver | Airspace/traffic sequencing within the dependent-runway environment, not terrain |

---

## 2. STAR / transition selection

- **STARs (names only — verify current AIRAC):** BALSI 1R/1D, LERGA 1R/1D, MTL 1R/1D (RNAV, IAF RISKI for the 13-config or DOLIV for the 31-config, FL080 min at the IAF); FJR 1L (IAF LIPSU or SALIN, FL070 min); TINOT 1L; NIDEV 1L; SOSUR 1L; LANKO 1G (IAF GEMKO). 🟧 Sourced to the IVAO France division MANEX (network-sim reference, not the primary AIP text extract reached this pass) — pull the current-AIRAC STAR list at planning.
- **Selection by arrival direction / runway:** The **31-configuration** (land on 31R) is dominant whenever wind is northwesterly, including Mistral episodes; the **13-configuration** (13L primary) is the reciprocal. Provence Approach assigns the STAR-to-runway transition for the active configuration.
- **Transition to approach:** Expect an RNAV-STAR-to-ILS or RNAV-STAR-to-RNP transition with vectoring onto final depending on the active configuration and assigned runway; verify the charted transition.
- **Speed / flow constraints on the STAR:** Published speed/altitude gates are pointers only — verify chart; the FL080/FL070 minimum-at-IAF constraints noted above are IVAO-sourced pointers, not confirmed from a primary table this pass. 🟧

---

## 3. Descent & energy plan

- **Top-of-descent trigger:** Standard descent-profile planning; plan TOD to meet the first STAR altitude gate.
- **Speed control:** STAR speed gates and 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Altitude constraints:** Key STAR crossing constraints are pointers — fly the charted altitudes.
- **Energy traps:** A **late runway/configuration change driven by a sudden Mistral onset** is the principal energy trap at this field — a 13↔31 config swap can arrive with little warning as the wind builds; brief a go-around/re-route contingency accordingly. Re-sequencing within the dependent-runway environment (§5) during a configuration change is the secondary energy/traffic trap.

---

## 4. Approach selection by runway

*Names only — verify minima on current AIRAC charts.*

| RWY | Approach (name) | LVP / CAT note | Minima pointer (verify AIRAC) |
|---|---|---|---|
| 13L | ILS Y/Z | **CAT III** 🟩 — preferential in the 13-config | verify current chart |
| 13R | ILS Y/Z / LOC Y/Z | **CAT I** 🟩 | verify current chart |
| 31R | RNP X (AR) [preferential, PBN/T1 required]; ILS Z/LOC; RNP Z; RNP Y | **CAT I** on the ILS alternate 🟩; RNP AR requires aircraft/crew authorisation 🟧 | verify current chart |
| 31L | RNP X (AR) [preferential, PBN/T1 required]; RNP Z | **No ILS published** 🟧 — RNP AR authorisation required for the preferential procedure | verify current chart |

- **LVP triggers:** Not confirmed from a primary table this pass. 🟧 Low-visibility events are comparatively infrequent at this Mediterranean field — the Mistral tends to clear cloud rapidly rather than produce fog — but confirm current LVP status before relying on that assumption.

---

## 5. Approach hazards (terrain / CFIT / specific threats)

- **CFIT / terrain:** 🟩 None. Flat coastal plain beside the Étang de Berre at 70 ft AMSL — no close-in high terrain relevant to any arrival path.
- **Specific threats:** 🟥 **The two parallel runways are dependent** — simultaneous takeoff and landing operations on both are prohibited by the AIP's local traffic regulations, so expect a segregated-mode sequence rather than independent parallel arrivals. 🟥 **The Mistral** can force a rapid runway-configuration change with associated crosswind/gust exposure, particularly relevant to the RWY 31L 12 kt/wet-runway takeoff limit and to general handling on approach in gusty conditions.
- **Airspace / traffic:** 🟧 Provence Approach controls the TMA/CTA with delegated sub-sectors (Orange Approach, Salon Approach); several military restricted areas ring the CTR and can further constrain routing when active — cross-ref [Briefing §3.2](index.md).

---

## 6. Missed approach watch-items

- **Terrain-driven MAP notes:** Terrain is not the driver (flat coastal plain) — fly the published MAP and verify climb-gradient/turn on the current chart.
- **Re-sequencing environment:** A go-around returns you into the dependent-runway sequencing environment (§5) — expect vectoring and possible holding before re-sequencing, especially during a Mistral-driven configuration change.
- **Go-around traps:** If the missed approach is flown off RWY 31L (RNP AR), confirm the go-around does not require re-establishing RNP AR containment without appropriate equipage/currency; traffic/config awareness on the parallel runway pair is the other standing consideration.

---

## 7. Landing runway / LDA & braking / vacate

- **LDA by runway:** 13L **3,160 m**; 31R **2,780 m**; 13R **2,370 m**; 31L **2,265 m**. The 3,500 m main pair is ample for any K Global type in the 13L direction; the 31R LDA (2,780 m, reflecting the 60 m stopway note in [Briefing §7](index.md)) remains comfortable for standard arrival weights. The 2,370 m secondary pair is comfortable for narrowbody equipment — confirm widebody suitability before planning a landing there.
- **Braking / vacate:** After landing RWY 31R, exit **at the latest via TWY D1** to protect the LOC critical area (notify control if an exceptional exit beyond D1 is required); **A330 and B767 aircraft are specifically prohibited from exiting via TWY D2** after a 31R landing. **No runway exit signage exists on either runway pair** — maintain positive taxiway awareness on rollout. 🟥
- **Runway-excursion watch:** 🟧 **RWY 31L takeoff is prohibited above 12 kt crosswind (incl. gusts) on a wet runway** — while framed as a takeoff limit, it signals the same runway's Mistral-driven crosswind/contamination exposure is relevant to a landing decision there too; brief accordingly if 31L is ever assigned for arrival.

---

## 8. Taxi-in routing to terminal & hot spots

- **Typical taxi-in by runway → terminal:** After landing on the assigned 13/31-config runway, taxi in toward **Terminal 1 Hall A** (expected international arrivals hall) per Ground/Tower assignment; RWY 13L/31R traffic uses TWY C1/D1–D4/D6–D9, RWY 13R/31L traffic uses TWY E2/E3/E7/E9/F3/F7. VAMSYS mirror gives a planning taxi-in time of **12 min** `[VAMSYS mirror 2026-07-26]`.
- **Hot spots / tight taxiways:** 🟥 **No runway exit signage exists on either runway pair** — a standing gotcha on rollout. The **TWY D1 exit requirement after a 31R landing** (to protect the LOC critical area) and the **A330/B767 prohibition on the TWY D2 exit** are runway-specific hot items. **Reduced wingtip clearance between TWY G1 and TWY L4** requires reduced taxi speed; TWY entries **G3/G4 via TWY C5** have insufficient wheel/edge margin for certain Code D aircraft (B757-200/300, B767-200/300, A310) — use an over-steering technique through the turn if assigned one of these types. Cross-ref [Briefing §13](index.md).
- **Stand/gate notes:** See [Dispatch §3](dispatch.md) — Code E access to the thresholds only via TWY G3/G4; specific widebody stand cluster not confirmed. Apron slope caution applies at stands 71–78 (locally >2% at 74/75 near the nosewheel).

---

## 9. Arrival frequency sequence

- **Sequence:** **Provence Approach (120.205 / 120.880 / 121.430 / 124.350 / 132.300, sector-specific) → Provence Tower (133.100 primary / 123.725 auxiliary) → Provence Ground (121.905) → Provence Delivery/Prévol (121.730, if further coordination is needed).** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **Approach/Departure control:** **Provence Approach** is the facility for LFML's terminal approach, with sub-sectors delegated to Orange Approach and Salon Approach; **Marseille ACC (LFMM)** — a distinct en-route facility despite the shared "Marseille" name — hands off inbound traffic and delegates the MTL/MOLEN axis to Provence Approach. See [Europe airspace brief](../../../../airspace/europe.md). 🟧 Exact sector/frequency assignment is AIRAC-dependent.

---

## 10. Gotchas

- **RWY 31L has no ILS** — do not expect an ILS approach on this runway under any configuration; RNP AR (preferential, PBN/T1 required) or RNP Z only.
- **The two runways are dependent** — never expect independent parallel arrival/departure streams; expect sequencing, especially during a configuration change.
- **Mistral onset can force a rapid runway-configuration swap** — watch the ATIS wind trend closely, especially in winter/spring; brief a go-around/re-route contingency.
- **No runway exit signage on either runway pair** — maintain positive taxiway awareness on rollout.
- **TWY D1 exit requirement and TWY D2 prohibition for A330/B767** after a 31R landing — brief before landing on 31R.
- **Night noise regime (2200–0600L)** — a delayed arrival into that window risks non-compliance for aircraft below the defined noise-margin thresholds; confirm type compliance before planning a late arrival.
- **Reduced wingtip clearance between TWY G1 and TWY L4** on taxi-in — maintain reduced speed.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC STAR names and exact approach minima per runway (IVAO-sourced only this pass).
- LVP trigger RVR values.
- Rapid-exit taxiway/vacate detail beyond the D1/D2 rules already confirmed.
- Current terminal/gate assignment for our arrivals (Terminal 1 Hall A assumed).
- Exact sector/frequency assignment for Provence Approach vs. delegated Orange/Salon Approach on a given day.

> **Live data — pull at planning:** wx/METAR/TAF/TREND (esp. Mistral wind trend and gust forecast), NOTAM (runway/approach/navaid/lighting), ATIS config, current AUP/UUP or military restricted-area activation status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP, AIP FRANCE AD 2 LFML** (AIRAC cycle effective 11 Jun 2026) — https://www.sia.aviation-civile.gouv.fr/media/dvd/eAIP_11_JUN_2026/FRANCE/AIRAC-2026-06-11/html/eAIP/FR-AD-2.LFML-fr-FR.html (retrieved 2026-07-26). *Runway/declared-distance data, navaid table (confirming no ILS on 31L), local traffic regulations, communications, taxiway restrictions.*
- IVAO France Division — "LFML - Marseille Provence" (MANEX Aéroports Civils) — https://wiki.ivao.fr/books/manex-aeroports-civils/page/lfml-marseille-provence (retrieved 2026-07-26). **Network-sim document, not regulatory** — STAR/approach names and runway-configuration logic cross-check; corroborates the AIP's implicit no-ILS-on-31L finding with an explicit RNP-only approach list.
- Wikipedia (EN) — "Mistral (wind)" — https://en.wikipedia.org/wiki/Mistral_(wind) (retrieved 2026-07-26). *Mistral direction/speed climatology.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
