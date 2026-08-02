# LFQQ — Lille-Lesquin · Departure Page

**LFQQ / LIL** · Lille, Hauts-de-France, France · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LFQQ Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 26** (west-facing configuration, preferred) |
| Config logic | Wind/minima/noise-driven; Tower selects the runway-in-use and will accommodate a request for RWY 08/02/20 as conditions allow |
| Transition altitude | 5,000 ft — 🟧 not independently AIP-confirmed this pass |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | None identified — assumed uncoordinated/Level 1 🟧 |
| De-icing on departure | Available — two remote units, no dedicated pad location confirmed 🟧 |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From Parking B, Ground routes traffic via the P2–P5/T2–T5/V1–V5 taxiway system toward the assigned departure runway (26 preferred, or 08/02/20 as conditions dictate); confirm the exact taxi with Ground on the day.
- **Hot spots / tight taxiways:** 🟥 **Published AIP hot spot** on the taxiway leading to RWY 02/20 near holding point **P5** — explicit runway-incursion risk if P5 is not respected. Width/wingspan restrictions apply: **TWY T3** (day-only, aircraft <2.5 t, wingspan <15 m), **TWY V4/P5** (wingspan <36 m), **TWY V6/V7** (wingspan <24 m).
- **Runway crossings / read-back-required points:** A departure crossing between the 08/26 and 02/20 runway pairs should expect explicit crossing/hold-short instructions, particularly around the P5 hot-spot area.
- **Low-vis taxi caveats:** In LVP conditions (RVR ≤550 m / ceiling ≤200 ft), **TWY T3 and T4 become unusable** and **TWY P5 is reserved for Parking E access only** — expect an amended taxi routing. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** West-facing configuration (RWY 26 for both arrival and departure) is preferred; the reciprocal (RWY 08) and the crossing pair (RWY 02/20) are used when wind/traffic dictate.
- **By departure direction:** No directional departure-runway split beyond the standard preferential-config logic was found in reachable sources.
- **Noise / preferential-runway program:** Engine-run-up restrictions apply outside 0600–2100 (see [Briefing §12](index.md)); no separate noise-preferential SID routing beyond the charted procedure was found in reachable sources. 🟧
- **Interaction with arrivals:** RWY 26 departures share the runway with the preferred-configuration arrival stream; RWY 02/20 use interacts with the P5 hot-spot taxiway crossing described above.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| ABB, BNE, CIV, VERMA, MATIX, TRACA, CMB series | 08 / 26 | RNAV variants preferred over conventional | 🟧 Sourced to a network reference, not the primary AIP — pull the live current-AIRAC SID list before use. |
| Omnidirectional departure | 08 / 26 | Climb runway heading to a published altitude, then direct/en-route | Published for both runway directions per the network reference; verify current chart. |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed in reachable sources beyond the general engine-run-up hour restriction (§3). 🟧
- **Early turn / altitude constraints:** Published per SID — verify constraints on the current chart. The omnidirectional-departure procedure for RWY 26 (network reference) includes an early turn constraint (do not turn before a published radial) — verify current chart before relying on this.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** No published EO/emergency-turn specifics confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Flanders-plain terrain — no significant close-in high terrain. The AIP's own obstacle chart references only routine man-made obstacles within the standard survey area; a specific obstacle note applies to the north end of the 02/20 runway pair, where a network reference recommends a full-length takeoff on RWY 01 due to obstacles north of the runway. 🟧
- **Special DP / obstacle DP:** Not confirmed in reachable sources — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** LVP applies when RVR ≤550 m and/or ceiling ≤200 ft; **RWY 08 LVTO** is the specified low-visibility takeoff configuration per the network reference. Exact LVTO RVR minima not confirmed from a primary AIP table this pass. 🟧
- **De-icing:** Two remote de-icing units (FMC-SMD1200-type); fluid Type I (50/50 hot/warm) and Type II (100%/75-25%); no dedicated pad location confirmed. 🟧 See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** **Lille Ground** issues both start-up/pushback approval and the departure clearance — there is no separate Delivery position at this field.
- **Frequency sequence:** **Ground 121.85 (2014 cycle) / 121.855 (2026 reference) → Tower 118.55 / 118.555 → Approach 120.275/126.475/134.825 (sector-specific) or 126.480 (single-frequency reference).** Take the assigned frequency and confirm current chart. (Frequencies from [Briefing §8](index.md).)
- **CTOT / slot handling:** No slot-coordination level identified — treat any CTOT exposure as standard EUROCONTROL Network Manager practice for a European regional field. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 08/26 (2,825 m) is non-limiting for typical Category-R narrowbody/regional types; RWY 02/20 (1,580 m) is limiting for larger types — check the assigned type's performance before planning a departure from it.
- **Density altitude / temperature:** Non-issue at 157 ft, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter low-cloud/fog season is the more relevant seasonal consideration here; no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — confirm field-length margin for the assigned type on RWY 02/20 specifically if that runway is in use.

---

## 10. Gotchas

- **RWY 26 has a displaced threshold** (LDA 2,545 m) — relevant primarily to arrivals but confirm you have the correct declared-distance picture for the field before departure planning too.
- **Published hot spot near taxiway holding point P5** (RWY 02/20 access) — expect crossing instructions and read-back-heavy ground handling near this point.
- **RWY 02/20 is materially shorter (1,580 m)** than RWY 08/26 — do not assume it is available for every type/weight combination.
- **Engine run-up restricted outside 0600–2100**, with a narrow exception (commercial departure before 0800, Tower permission) — do not plan an unscheduled engine test outside these hours without coordination.
- **Winter RFF downgrade (CAT 7→CAT 5, 2200–0500, Nov–Mar)** — verify current RFF NOTAM status before an overnight winter departure.
- **A current network reference designates the 02/20 runway pair as 01/19** — verify the current runway designator on the live AIRAC chart (see [Briefing §18](index.md)).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / LVTO RVR exact figures.
- NADP preference and any noise-preferential departure routing beyond the charted SID.
- EOSID/engine-out procedure detail per runway.
- Exact obstacle detail at the north end of the 02/20 runway pair.
- Dedicated de-icing pad location(s).

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, esp. the P5 hot-spot area), CTOT/ATFM (if any), de-icing status, current RFF-level NOTAM. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SIA France eAIP, AD 2 LFQQ** (extract, amendment dates 2012–2015) — runway/declared-distance data, communications, noise/engine-run-up hours, de-icing provisioning — https://beardsell.com/flying/Italy_2015/Fairoaks-LeTouquet/LFQQ-lille-text.pdf (retrieved 2026-07-26).
- IVAO France Documentation — "LFQQ - Lille Lesquin" (AIRAC 2603) — https://wiki.ivao.fr/books/manex-aeroports-civils/page/lfqq-lille-lesquin (retrieved 2026-07-26). *SID names, LVP parameters, preferential-config detail — network sim document, not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SIA France eAIP; K Global fields from live VAMSYS; 4-page pack. |
