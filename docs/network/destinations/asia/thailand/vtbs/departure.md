# VTBS — Suvarnabhumi Intl · Departure Page

**VTBS / BKK** · Bangkok (Samut Prakan Province), Thailand · Asia
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Thailand (AEROTHAI)-derived, Asia network build

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [VTBS Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **19/20L/20R** configuration by default (southbound); **02R/20L is departures-only** per operational cross-check; **01/02R/02L** used when tailwind exceeds ~5 kt |
| Config logic | Wind-driven; NE-monsoon season more often forces the reciprocal (northbound) configuration |
| Transition altitude | 11,000 ft MSL |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Not confirmed; plausible ATFM-style flow during monsoon convective events 🟧 |
| De-icing on departure | **NIL** — tropical field, not required |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From the main terminal (A–G gates) or SAT-1, Ground Control routes toward the assigned departure runway via the apron-sector-specific frequency (East 121.65 / Main 121.75 / West 121.95 MHz — see [Briefing §8/§13](index.md)); confirm the exact taxi routing with Ground on the day.
- **Hot spots / tight taxiways:** 🟥 **Taxiways T8, T9, T10, T11, T12 are prohibited for A380-class (Code F) aircraft** — a wingspan-limited constraint; any Code F movement must be routed around these five taxilanes.
- **Runway crossings / read-back-required points:** With three parallel/near-parallel runways now in service (01/19, 02R/20L, 02L/20R), expect explicit runway-crossing instructions and read-back requirements when routing between apron areas and the assigned departure runway, particularly for stands positioned on the far side of an active runway from the required departure end.
- **Low-vis taxi caveats:** SMGCS/low-vis taxi routing is plausible given the monsoon convective/heavy-rain risk; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** The southbound **19/20L/20R** configuration is the default; the reciprocal **01/02R/02L** (northbound) configuration is used once the tailwind component on the default configuration exceeds roughly 5 kt — more common during the NE-monsoon (dry, cool) season.
- **By departure direction:** Per operational cross-check, **RWY 02R/20L is assigned departures-only**, **RWY 02L/20R is assigned arrivals-only** (it is RNP-served, non-precision, and was commissioned specifically to add arrival capacity), and **RWY 01/19 handles both arrivals and departures**. 🟧 Confirm current runway-role assignment against ATIS/ATC on the day — this is an operational pattern, not a hard AIP rule.
- **Noise / preferential-runway program:** No named noise-abatement departure routing was found in reachable sources (§Open items).
- **Interaction with arrivals:** With RWY 02L/20R now dedicated to arrivals and RWY 02R/20L to departures in the default operational pattern, departures and arrivals are substantially runway-segregated during normal three-runway operations — a material change from the pre-2024 two-runway mixed-use environment. Expect closer interaction (shared/mixed-use runways) whenever the field reverts to a two-runway configuration.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 01/19, 02R/20L, 02L/20R | RWY 02L/20R is RNP-served by design (no ILS) — expect an RNP departure requirement there; verify gradient/equipage per SID on current chart | The prior SID set (including named departures such as the former "KIGOB"/"GORSI") was retired with the 3 Oct 2024 AIRAC cycle — pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard initial climb reported at **6,000 ft** per operational cross-check 🟧 (not independently confirmed from the AIP); 250 KT or less below 10,000 ft applies as the local speed rule.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources — no named NADP found. 🟧
- **Early turn / altitude constraints:** Published per SID; verify constraints on the current chart. All speed/level restrictions on a SID apply unless explicitly cancelled by ATC.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Chao Phraya delta plain — no significant close-in terrain. The AIP's aerodrome-obstacle table lists only urban obstacles (the on-field ATC tower at 475 ft/145 m AMSL and scattered city towers/buildings in the 130–390 ft AMSL range around the approach/circling areas) — routine city-airport obstacle awareness, not a departure-path constraint at normal climb gradients.
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Given the field's CAT II (not CAT III) approach ceiling and no CAT III infrastructure anywhere on field, monsoon-season heavy rain is the relevant low-visibility trigger for takeoff planning; specific LVTO RVR minima not confirmed this pass. 🟧
- **De-icing:** **NIL** — tropical field, no de-icing facilities or season.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Suvarnabhumi Delivery **128.7 / 133.8 MHz** (H24).
- **Frequency sequence:** **Delivery 128.7/133.8 MHz → Ground 121.65 MHz (East apron) / 121.75 MHz (Main apron) / 121.95 MHz (West apron), per stand → Tower 118.2/274.5 MHz (RWY 01/19) or 119.0 MHz (RWY 02R/20L) → Suvarnabhumi Departure 119.25 MHz → Bangkok Approach (sector-specific, 122.35/124.35/125.2/128.95/119.1/120.3/125.8 MHz).** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8; RWY 02L/20R tower assignment not independently confirmed 🟧.)
- **CTOT / slot handling:** Not confirmed in reachable sources; comply with any assigned CTOT/flow instruction issued by ATC, particularly during monsoon convective events. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 01/19 (4,000 m) and RWY 02R/20L (3,700 m) are non-limiting for any K Global type; RWY 02L/20R (4,000 m, arrivals-only in normal operation) is not a departure runway under the standard operational pattern.
- **Density altitude / temperature:** Non-issue at 4.6 ft AMSL in a tropical climate — no hot-and-high penalty; the relevant thermal consideration is standard tropical performance planning (temperature/humidity on takeoff performance), not elevation.
- **Contamination / wet-runway:** **RWY 02R/20L is grooved; RWY 01/19 is not** — factor this surface-friction difference into wet-runway takeoff performance planning during the SW-monsoon season (May–Oct). 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty expected for any K Global type at VTBS.

---

## 10. Gotchas

- **No CAT III fallback at this field** — 01/19 and 02R/20L are ILS Z CAT II only; RWY 02L/20R has no ILS at all.
- **Runway/procedure renumbering (3 Oct 2024)** — former 01R/19L is now **01/19**; former 01L/19R is now **02R/20L**; the new third runway is **02L/20R**. Confirm any older chart/navdata reflects current designators; the prior SID/STAR set is entirely retired.
- **Taxiways T8–T12 are prohibited for A380-class aircraft** — confirm alternate routing for any Code F movement.
- **RWY 02R/20L is grooved; RWY 01/19 is not** — a real wet-runway performance/braking-action difference in the monsoon season.
- **Mode S transponder/TCAS ground procedures are mandatory** for the field's Mode S multilateration surface movement radar — ensure correct configuration before taxi.
- **ILS DME is offset from the threshold** (historically ~2.2–2.3 NM) — do not expect a zero DME read at the runway threshold on departure-adjacent navigation.
- **RWY 02R/20L departures-only / RWY 02L/20R arrivals-only is an operational pattern, not a guaranteed AIP rule** — confirm active runway assignment against ATIS/ATC rather than assuming it holds in every configuration.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima exact figures.
- Noise-abatement departure procedure (NADP), if any.
- CTOT/flow-control specifics (ATFM-equivalent applicability).
- EOSID/engine-out procedure detail per runway.
- Tower frequency assignment for RWY 02L/20R departures (if used off-pattern).

> **Live data — pull at planning:** wx/METAR/TAF (esp. monsoon convective activity), NOTAM (runway/taxiway/navaid/lighting, esp. given the still-recent third-runway commissioning), CTOT/flow status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **AIP Thailand, AD 2 VTBS**, AEROTHAI/CAAT eAIP, 2023-04-20 AIRAC cycle — https://aip.caat.or.th/2023-04-20-AIRAC/html/eAIP/VT-AD-2.VTBS-en-GB.html (retrieved 2026-07-26). *Runway/declared-distance data, communications, obstacle table, ground-movement/Mode-S procedures.*
- **AIRAC AIP SUP A 42/24 — VTBS aerodrome-information update for new runway designations**, AEROTHAI/CAAT, effective 2024-10-03 — https://aip.caat.or.th/2024-10-03-AIRAC/html/eSUP/VT-eSUP-24-42-A-en-GB.html (retrieved 2026-07-26). *Third-runway (02L/20R) RNP/non-precision status.*
- VATSIM Thailand vACC — "VTBS - Suvarnabhumi Airport" pilot briefing — https://wiki.vacc-tha.org/books/pilot-briefings-charts/page/vtbs-suvarnabhumi-airport (retrieved 2026-07-26). *Network-sim document, not regulatory — preferential-runway/runway-role and initial-climb-altitude cross-check.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
