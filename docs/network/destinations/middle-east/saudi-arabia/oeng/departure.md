# OENG — Nejran · Departure Page

**OENG / EAM** · Najran, Najran Province, Saudi Arabia · Middle East
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [OENG Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. **This field carries an active regional NOTAM-closure/security watch-item — see Briefing §2/§5.** Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | 06 or 24 — no published preferential rule; wind-driven |
| Config logic | Wind-driven; asymmetric circuit design (see §3) |
| Transition altitude | 13,000 ft |
| Take-off minima | Published — not confirmed this pass 🟧 |
| CTOT / flow regime | None identified; note Tower control only 03:00–19:00 UTC (AFIS outside) |
| De-icing on departure | NIL (published) |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Via TWY A/B/C/D (26 m, asphalt PCN 60/F/A/X/T) from Apron 1 or Apron 2. Confirm the day's routing with Ground.
- **Hot spots / tight taxiways:** None flagged in reachable AIP data. 🟩
- **Runway crossings / read-back-required points:** Not independently confirmed. 🟧
- **Low-vis taxi caveats:** Not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** No preferential-runway rule published; runway in use follows wind, with RWY 06 favoured when the ILS is operationally desirable (§Briefing §3.5).
- **By departure direction:** RWY 06 and RWY 24 each have a dedicated named SID chart (§4).
- **Noise / preferential-runway program:** AIP publishes a general below-10,000-ft speed limit (200 KT circuit / 250 KT elsewhere) under its noise-abatement heading — a standard speed restriction rather than a routing-based NAP.
- **Interaction with arrivals:** Single-runway field — arrivals and departures share the one strip; sequencing is by Tower (03:00–19:00 UTC) or AFIS advisory outside those hours.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| SID RWY 06 | 06 | 🟧 Not confirmed — verify given the field's hot-and-high profile | AIP-published named chart; exact track/altitude not confirmed this pass |
| SID RWY 24 | 24 | 🟧 Not confirmed — verify given the field's hot-and-high profile | AIP-published named chart; exact track/altitude not confirmed this pass |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not independently confirmed beyond the named SID charts (§4) — verify current chart. Below 10,000 ft, standard AIP speed limit applies (200 KT circuit / 250 KT elsewhere).
- **Noise-abatement departure procedure (NADP):** None published beyond the speed restriction above. 🟧
- **Early turn / altitude constraints:** Not independently confirmed — verify current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not independently confirmed — verify current chart. 🟧 Given the field's hot-and-high profile (the most demanding in this pack), one-engine-inoperative climb performance is a critical planning item.
- **Close-in / distant obstacles:** No obstacle-table entries returned in this pass; the rich multi-variant approach set on both runways is an indirect signal of terrain-constrained procedure design — cross-ref [Briefing §3.1](index.md). Verify current MSA/area chart.
- **Special DP / obstacle DP:** Not confirmed. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed this pass — verify current chart. 🟧
- **De-icing:** NIL — not published; highland winter nights can be cool, but no de-icing infrastructure is published.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Via Nejran Tower (03:00–19:00 UTC) or AFIS advisory (19:00–03:00 UTC) — cross-ref [Briefing §8](index.md).
- **Frequency sequence:** Ground (121.900) → Tower/AFIS (118.500) — single combined frequency for Tower/AFIS at this field.
- **CTOT / slot handling:** No ATFM/CTOT programme identified; **plan clearance timing around the Tower/AFIS hours split**.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,050 m at 3,983 ft elevation — length is workable for narrowbody types; **hot-and-high performance is the binding constraint**, the most demanding case in this five-field pack. 🟥
- **Density altitude / temperature:** 3,983 ft field elevation + 38.2°C reference temperature. See [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md).
- **Contamination / wet-runway:** No seasonal contamination pattern identified; note the stopway surface is published as "other surface" rather than asphalt on both ends.
- **Link to OM B:** No fleet assignment; validate hot-and-high performance against [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) once a type is assigned.

---

## 10. Gotchas

- 🟥 **The field's most demanding hot-and-high case in this pack** — 3,983 ft elevation, 38.2°C reference temperature; validate weight/performance for the assigned type before any departure.
- 🟥 **Tower control is 03:00–19:00 UTC only** — outside that window, only AFIS advisory service is available on the same frequency; do not expect a full Tower clearance service overnight.
- 🟧 **RWY 24 has no precision approach and no reciprocal ILS** for a low-weather return.
- 🟧 Circuit direction is asymmetric (right-hand not available RWY 06, left-hand not available RWY 24) — brief accordingly if a circuit departure/return is flown.
- 🟥 **Field carries an active regional NOTAM-closure/security watch-item** — confirm current status before planning any departure from this field (Briefing §2/§5).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- **Field closure/security status** — highest-priority item; re-confirm live.
- Exact SID tracks/gradients, take-off minima, LVTO minima, engine-out/emergency-turn procedure — none confirmed from a primary chart this pass.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status (not applicable), and the field's current open/closed status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- **SANS/GACA eAIP Kingdom of Saudi Arabia, AD 2 OENG — Nejran**, AIRAC AMDT cycle retrieved (2026-01-23 amendment series) — https://aimss.sans.com.sa/assets/FileManagerFiles/AIP%20AMDT%2009_26_2026_01_23/eAIP/AD%202%20OENG%20NEJRAN-en-GB.html (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from SANS/GACA AIP (GACA); K Global fields not in VAMSYS (flagged); 4-page pack. |
