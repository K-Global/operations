# DNKA — Kaduna · Departure Page

**DNKA / KAD** · Kaduna, Kaduna State, Nigeria · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — AIP Nigeria (NCAA)-derived, provisional

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [DNKA Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | 05 or 23 — wind-driven, no published preferential rule found 🟧 |
| Config logic | Wind-driven; single runway, no crosswind alternative |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | None identified — standard procedural clearance |
| De-icing on departure | **NIL** — tropical field (harmattan dust, not ice, is the seasonal hazard here) |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published — confirm with Tower/Ground on the day; possible interaction with military-side ground movements given the field's Nigerian Air Force association (Briefing §5), not independently confirmed. 🟧
- **Hot spots / tight taxiways:** None identified in reachable sources.
- **Runway crossings / read-back-required points:** None identified.
- **Low-vis taxi caveats:** 🟥 **Harmattan-season low-visibility taxi discipline is a genuine priority here** — this field carries the most severe harmattan exposure of the four in this build (Briefing §3.4/§14).

---

## 3. Runway / SID selection logic

- **By wind / config:** Runway 05 or 23 selected by prevailing wind; no published preferential-runway rule found.
- **By departure direction:** Not applicable — single runway serves both directions.
- **Noise / preferential-runway program:** None identified.
- **Interaction with arrivals:** Non-radar, likely low-to-moderate density field — no dependent-configuration interaction identified; possible military-traffic interaction not independently confirmed.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 05 / 23 | Not confirmed — see [`OM E — PBN and RNP Operations`](../../../../../flight-ops/pbn-and-rnp-operations.md) | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** None identified. 🟧
- **Early turn / altitude constraints:** Not published — verify current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** No close-in high terrain or obstacle identified for the northern Nigerian plateau/savanna surrounds — not independently AIP-confirmed as "none exist."
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published — 🟥 **harmattan-season visibility reduction is this field's most severe seasonal driver of the four in this build**; exact LVTO minima not confirmed.
- **De-icing:** **NIL** — tropical field.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately published — Approach frequency (below) may cover delivery function; not AIP-confirmed. 🟧
- **Frequency sequence:** **Kaduna Approach 122.3** (reported frequency; Tower frequency not reached this pass) → **Kano ACC / Lagos ACC** per routing (see Briefing §8). Take the assigned frequency and confirm current chart.
- **CTOT / slot handling:** None identified.

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 3,000 m is non-limiting for any narrowbody type.
- **Density altitude / temperature:** 🟧 At 2,073 ft, this is the **highest-elevation field of the four in this build** — a modest density-altitude margin worth checking per type on a hot day, though not a classic hot-and-high profile. See [`OM E — High-Elevation Aerodrome Operations`](../../../../../flight-ops/high-elevation-aerodrome-operations.md) for the general framework if a closer evaluation is warranted.
- **Contamination / wet-runway:** Wet-season (Apr–Oct) rain is the relevant seasonal consideration; no specific contamination/braking-action data confirmed this pass. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length performance penalty identified; check density-altitude margin per type given the field's elevation.

---

## 10. Gotchas

- **Most severe harmattan exposure of the four fields in this build (Nov–Mar)** — visibility can degrade rapidly; treat as the standing dry-season watch-item.
- **No crosswind runway alternative** — a strong crosswind on 05/23 has no other geometry on the field; brief the divert option early.
- **Mixed civil/military field** — confirm current access/PPR and any military ground-traffic interaction before planning.
- **Documented security incident (2022 armed attack)** — maintain live awareness of the current northern-Nigeria security picture before every operation.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics.
- Take-off minima / DVA exact figures.
- Transition altitude.
- EOSID/engine-out procedure detail.
- Tower frequency (not reached this pass).
- Current security/access status.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting, security/access), harmattan visibility trend. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/DNKA/runways.html , /frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Kaduna International Airport" — https://en.wikipedia.org/wiki/Kaduna_Airport (retrieved 2026-07-26).

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Nigeria (NCAA); K Global fields from live VAMSYS; 4-page pack. First build — no prior stub existed for DNKA. |
