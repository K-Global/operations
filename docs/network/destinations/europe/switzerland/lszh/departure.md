# LSZH — Zurich · Departure Page

**LSZH / ZRH** · Kloten, Zurich, Switzerland · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LSZH Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY28** (Day concept) or **RWY32/34** (Morning/Evening concepts) — see §3 |
| Config logic | Time-of-day operating concept (Day/Morning/Evening) tied to the German cross-border restriction, overridden by wind for strong westerly/bise conditions |
| Transition altitude | Not confirmed this pass 🟧 |
| Take-off minima | Published per AIP; exact figures not confirmed this pass 🟧 |
| CTOT / flow regime | Not independently confirmed; slot-administered via the Swiss national coordinator 🟧 |
| De-icing on departure | Available — two dedicated pads; season not confirmed |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Confirm the exact taxi with Apron/Ground on the day; expect routing to cross the **10/28 × 16/34 intersection** for many stand-to-runway combinations.
- **Hot spots / tight taxiways:** 🟥 Reported taxiway wingspan restrictions near ILS critical/sensitive areas (protecting ILS28 in particular), and the crossing-runway geometry itself, are the recognised complex ground points — treat as tier-4 pending AIP confirmation.
- **Runway crossings / read-back-required points:** A departure crossing between the parallel and cross runways should expect explicit crossing/hold-short instructions.
- **Low-vis taxi caveats:** Not confirmed; follow-me availability not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** **Day concept** — main takeoff RWY28. **Morning / Evening concepts** — main takeoff RWY32/34. Wind overrides: strong westerly favours takeoff RWY32; bise/northeasterly favours takeoff RWY10.
- **By departure direction:** Runway assignment is driven primarily by the time-of-day operating concept rather than pure wind logic, given the German cross-border restriction on northern (14/16) *arrivals* — departures are less directly constrained by that restriction but follow the same concept-driven runway schedule.
- **Noise / preferential-runway program:** The Day/Morning/Evening concept regime **is** the noise-abatement structure at this field (see Briefing §12).
- **Interaction with arrivals:** Departures off RWY28/32/34 interact with the concurrent arrival stream on the concept-assigned landing runway — cross-ref [Briefing §10](index.md).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| VEBIT / DEGES / ZUE / WIL / GERSA families 🟧 | 28 / 32 / 34 / 10 (per concept) | Not confirmed — verify RNP/gradient on current chart | Partial, tier-4-sourced name set — pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed which NADP variant is mandated; the concept-driven runway/time regime (§3) is the primary noise-management tool at this field. 🟧
- **Early turn / altitude constraints:** Published per SID — verify on current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Hills to the S/SW/W (2,400–3,000 ft AMSL within ~7 NM) and the **Lägern ridge** (~2,841 ft) ~15 km NW are the relevant terrain features — cross-ref [Briefing §3.1](index.md).
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass. 🟧
- **De-icing:** Two dedicated pads confirmed present; exact location/season/throughput not confirmed. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md).

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Zurich Delivery — see [Briefing §8](index.md) for frequency (two tier-4 sources disagree; verify current chart).
- **Frequency sequence:** **Delivery → Ground → Tower → Zurich Arrival/Departure (sector-specific) → Switzerland FIR.** Take the assigned frequency and confirm current chart (frequencies from Briefing §8).
- **CTOT / slot handling:** Slot-administered via the Swiss national coordinator; comply with any assigned CTOT/EDCT-equivalent. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY32/34 (3,300 m / 3,700 m) are non-limiting for any K Global Category H type; RWY28/10 (2,500 m) are also non-limiting for typical departure weights.
- **Density altitude / temperature:** Non-issue at 1,417 ft, temperate climate — no hot-and-high penalty.
- **Contamination / wet-runway:** Winter season is the relevant consideration; no LSZH-specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length or field-elevation performance penalty expected for any K Global Category H type at LSZH.

---

## 10. Gotchas

- **The German cross-border restriction governs northern approaches, not departures directly** — but the concept-driven runway schedule it produces (Day/Morning/Evening) sets which runway you'll be assigned for departure too.
- **RWY28 and RWY34 have no CAT II/III fallback** — relevant if a low-vis event coincides with a Morning/Evening-concept window.
- **Crossing-runway geometry (10/28 × 16/34)** — expect explicit crossing instructions; read back carefully.
- **RWY14 and RWY34 both carry displaced thresholds** — irrelevant for takeoff distance but a reminder the runway ends are not symmetric.
- **Hard field night curfew** — a late-day departure delay risks running into the curfew tail; build buffer.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Start-up/push-back procedure detail.
- NADP variant mandated (if any).
- LVTO minima and follow-me/SMGCS specifics.
- EOSID/engine-out procedure detail per runway.
- Exact current hour bands for the Day/Morning/Evening operating concepts.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- AIP Switzerland (Skyguide eAIP) — https://www.eaip.skyguide.ch/ — attempted 2026-07-26; unreachable (JS/frameset) this session.
- Zurich Airport (Flughafen Zürich AG) — operating-concepts page (retrieved 2026-07-26). *Day/Morning/Evening runway logic.*
- IVAO Switzerland — Zurich Air Traffic Management Manual (retrieved 2026-07-26). *SID-family names, taxiway restriction detail — network-sim training document, not regulatory.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Switzerland (Skyguide); K Global fields from live VAMSYS; 4-page pack. |
