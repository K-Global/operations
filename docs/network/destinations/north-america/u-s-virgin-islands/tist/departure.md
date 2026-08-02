# TIST — Cyril E King · Departure Page

**TIST / STT** · Charlotte Amalie, U.S. Virgin Islands · North America
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [TIST Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | **RWY 10** primary (full length, into prevailing easterly trades); **RWY 28** used when wind/traffic dictate — reduced-performance considerations apply if departing on 28 given its geometry (see §9) 🟧 |
| Config logic | Wind-driven — no crosswind-alternative runway exists at this field (single RWY 10/28) |
| Transition altitude | **18,000 ft MSL** (U.S. national standard) |
| Take-off minima | Special takeoff minimums published for this field — verify current chart 🟧 |
| CTOT / flow regime | None identified — non-coordinated U.S. domestic field |
| De-icing on departure | **Not applicable** — tropical sea-level field |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Single terminal apron to the single runway; exact taxiway naming/routing not confirmed in reachable sources this pass. 🟧
- **Hot spots / tight taxiways:** 🟥 A standing FAA-sourced caution applies field-wide: **"be alert to runway crossing clearances — readback of all runway holding instructions is required."** Treat every runway crossing at this field as a discrete, briefed event.
- **Runway crossings / read-back-required points:** All runway crossings — see above. Aircraft back-taxiing for a RWY 28 departure must make their 180° turn **counter-clockwise** (published local remark).
- **Low-vis taxi caveats:** No SMGCS/low-visibility taxi routing found; not a high-priority item at a field with no published CAT II/III infrastructure. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** RWY 10 is the primary, fully-equipped direction (ILS/LOC, RNAV, PAPI, REIL) and is favoured by the prevailing easterly trade-wind flow; RWY 28 is the shorter-LDA, circling-approach-only reciprocal, used when the wind or other factors require it.
- **By departure direction:** Not itemised beyond the runway choice — this is a single-runway field with no independent departure-corridor selection beyond RWY 10 vs RWY 28.
- **Noise / preferential-runway program:** No formal noise-preferential program found beyond the standing avoid-overflight guidance for the Water Island noise-sensitive area (~2 NM SE) — route around it where the departure profile allows a choice.
- **Interaction with arrivals:** Single runway — departures and arrivals share the one runway; sequencing is managed by St. Thomas Tower (in hours) or San Juan CERAP.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| PALCO SEVEN | Not itemised by runway in reachable sources 🟧 | Not confirmed — verify current chart, especially given close-in terrain to the north 🟥 | Named departure procedure per the FAA procedure index |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Standard U.S. domestic speed restrictions apply (e.g. 250 KIAS below 10,000 ft MSL); no airport-specific override found.
- **Noise-abatement departure procedure (NADP):** None published beyond the standing Water Island avoid-overflight guidance (§3). 🟧
- **Early turn / altitude constraints:** RWY 10 departures must **maintain runway heading until reaching the departure end of the runway** before turning on course or an assigned heading, unless otherwise authorised by the tower (published local remark) — a direct, sourced early-turn constraint.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed as a named/charted procedure in reachable sources this pass — verify current chart. 🟥 (verify — genuinely relevant given close-in terrain north of the field)
- **Close-in / distant obstacles:** High terrain is recorded close north of the RWY 10/28 extended centreline; a ~50 ft AGL sailboat mast sits ~100 ft west of the RWY 10 approach end and a 28 ft pole (3:1 slope to clear) sits near the RWY 28 approach — brief these as close-in obstacles regardless of departure direction. See [Briefing §3.1/§7](index.md).
- **Special DP / obstacle DP:** Special takeoff minimums/departure procedures are published for this field (name only) — verify on the current chart before accepting a departure, particularly on a reduced-performance day. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** No published low-visibility takeoff infrastructure/procedure found for this field — treat any marginal-visibility departure conservatively pending chart verification. 🟧
- **De-icing:** **Not applicable** — tropical sea-level field.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Via St. Thomas Ground/Tower during ATCT hours (0700–2230, closing 1 hour earlier during Daylight Saving Time); via San Juan CERAP directly when the tower is closed — see [Briefing §8](index.md).
- **Frequency sequence:** Ground (121.9) → Tower (118.1; north-of-island 118.8/257.6) → San Juan CERAP Approach/Departure (128.65/279.6) — see [Briefing §8](index.md) for the full table.
- **CTOT / slot handling:** None identified — non-coordinated U.S. domestic field.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 10 offers the full 7,000 ft TORA/TODA; RWY 28 is undiminished for **departure** distances (TORA/TODA 7,000 ft — the displaced threshold only affects landing distance), so a RWY 28 departure is not distance-constrained the way a RWY 28 **landing** is. Confirm this per current performance data before relying on it operationally. 🟧
- **Density altitude / temperature:** Sea-level field; not hot-and-high, but routine tropical temperatures (commonly 28–32°C) are a secondary performance factor on a full-length but still single, terrain-bounded runway — factor into takeoff performance calculations rather than assuming a cool-climate margin. 🟧
- **Contamination / wet-runway:** Tropical convective showers are routine — factor wet-runway performance into every departure; there is no crosswind-runway alternative if contamination coincides with a wind shift.
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-specific field-length margins; see also [`OM E — Short and Limited Runway Operations`](../../../../../flight-ops/short-and-limited-runway-operations.md).

---

## 10. Gotchas

- **Single runway, no crosswind alternative** — a wind shift outside comfortable limits is a real go/no-go factor, not a manageable inconvenience.
- **Runway-crossing discipline** — standing FAA caution; treat every crossing clearance as a discrete, briefed readback event.
- **RWY 10 early-turn constraint** — maintain runway heading to the departure end before turning, unless the tower authorises otherwise.
- **RWY 28 back-taxi 180° turn must be counter-clockwise** — a specific, sourced local procedure, not a generic assumption.
- **Close-in obstacles both ends** — sailboat mast near the RWY 10 approach end, pole near the RWY 28 approach end; both are low-height but genuinely close-in.
- **Currently active nightly construction runway closure (2200–0500 AST, 01 Dec 2025–31 Dec 2026)** — verify live NOTAM before planning any departure near the edges of the operating day.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- PALCO SEVEN SID — runway applicability, climb-gradient and full routing not confirmed this pass; pull the current-AIRAC chart.
- Named engine-out/obstacle departure procedure, if any — not confirmed.
- Take-off minima figures — published as "special," exact values not reproduced here.
- Current status of the nightly construction runway closure.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, construction-closure status), CTOT/ATFM (not expected at this field, confirm). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **FAA airport data (effective 14 May 2026), mirrored via AirNav.com** — https://www.airnav.com/airport/TIST (retrieved 2026-07-26). *Local remarks — runway-crossing caution, back-taxi turn direction, RWY 10 early-turn constraint, special takeoff minimums/PALCO SEVEN naming.*
- **FAA current airport diagram (AL-5005)**, mirrored via a Caribbean FBO — https://sttfbo.com/wp-content/uploads/2020/09/stt-airport-diagram.pdf (retrieved 2026-07-26).
- Full source register — see [TIST Briefing §Sources](index.md).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national/territory AIP; K Global fields from live VAMSYS; 4-page pack. |
