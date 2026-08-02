# LIRN — Capodichino · Departure Page

**LIRN / NAP** · Naples (Napoli), Campania, Italy · Europe
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [LIRN Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Single runway **06/24** — selection wind-driven; operator reports a "balanced" preference for take-offs oriented toward the city/sea side (RWY 24 direction) 🟧 |
| Config logic | Wind-driven, single-runway field; exact ATC criteria not confirmed |
| Transition altitude | 🟧 8,000 ft reported — not independently re-confirmed, verify current chart |
| Take-off minima | 🟧 Not confirmed — verify current AIP |
| CTOT / flow regime | 🟧 Not confirmed — treat as standard EU ATFM exposure pending confirmation |
| De-icing on departure | 🟧 Not confirmed — Mediterranean coastal field, minimal/seasonal need expected at most |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** From Terminal 1 stands, Ground routes via the north (**TN**) or south (**TS**) taxiway to the assigned runway end; confirm the exact taxi with Ground/Apron on the day.
- **Hot spots / tight taxiways:** 🟧 **TS (south taxiway, ~15 m wide)** is notably narrower than **TN (north, ~23 m)** — a caution point for any Code-D/E-equivalent aircraft; not confirmed as an AIP-flagged hot spot, but the width differential alone warrants care. Verify against current AIP hot-spot chart.
- **Runway crossings / read-back-required points:** Not confirmed — single-runway field, but taxiway connectors A–M cross active movement areas; expect standard crossing instructions.
- **Low-vis taxi caveats:** Not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway 06/24 — direction selected by prevailing wind; magnetic orientation 056°/236°.
- **By departure direction:** 🟧 Operator reporting suggests take-offs are weighted toward the city/sea (RWY 24 / 236° heading) direction as part of a noise-balancing scheme — exact current-day criteria not confirmed.
- **Noise / preferential-runway program:** See Briefing §12 — a "balanced" unidirectional-preference noise scheme is reported since circa 2005, not independently primary-sourced this pass.
- **Interaction with arrivals:** Single-runway field — departures and arrivals share the one runway; expect standard sequencing, and note the shared local airspace with the adjacent US Navy installation (Briefing §3.2).

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 06 / 24 | Given the surrounding high terrain (Vesuvius SE, Camaldoli ridge N/NW), treat any published SID climb gradient as safety-critical | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (EU/ICAO norm) — confirm current chart.
- **Noise-abatement departure procedure (NADP):** Not confirmed — the reported "balanced" runway-use scheme (§3) addresses noise via runway *direction* preference rather than a stated NADP profile; verify locally. 🟧
- **Early turn / altitude constraints:** 🟧 Not confirmed — given the close-in terrain (Vesuvius SE, Camaldoli ridge N/NW), any early-turn SID constraint should be treated as safety-critical; verify on the current chart.

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** 🟥 Not confirmed from a primary source this pass — but given the surrounding terrain (Vesuvius SE/ESE, Camaldoli ridge N/NW), an engine-out/EOSID contingency at this field is a genuine terrain-driven consideration, not a formality. Verify the type-specific EOSID for the assigned runway before departure.
- **Close-in / distant obstacles:** Camaldoli ridge (~458 m) close-in to the N/NW; Mount Vesuvius (~1,281 m / 4,203 ft) roughly 10–15 NM SE/ESE — both are relevant to any engine-out or obstacle-driven departure path depending on runway in use.
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not confirmed. 🟧
- **De-icing:** Not confirmed — Mediterranean coastal field at 294 ft; minimal/seasonal need expected at most. See [`OM E — Cold Weather Operations`](../../../../../flight-ops/cold-weather-operations.md). 🟧

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Napoli Ground Clearance Delivery **121.900** (hours not confirmed). 🟧
- **Frequency sequence:** **Ground Clearance Delivery 121.900 → Tower (Napoli Tower) 118.500 → Approach (Napoli Radar) 124.350 / Director 120.950.** Take the assigned frequency and confirm current chart. (Frequencies from Briefing §8, sourced tier-4 — cross-check against current AIRAC.)
- **CTOT / slot handling:** Not confirmed — treat as standard EU ATFM exposure pending confirmation. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** RWY 06/24 TORA 2,628 m; non-limiting for narrowbody/most widebody-twin types at typical weights. Confirm against current declared distances for any long-haul-configured type.
- **Density altitude / temperature:** Non-issue at 294 ft — no hot-and-high penalty.
- **Contamination / wet-runway:** Not confirmed — Mediterranean climate suggests limited icing/snow exposure; wet-runway braking-action data not confirmed. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length performance penalty identified for narrowbody/widebody-twin types at LIRN; the operative departure consideration is the terrain-driven engine-out/climb-gradient case (§6), not runway length.

---

## 10. Gotchas

- **Terrain on both sides of the field** — Vesuvius SE/ESE, Camaldoli ridge N/NW — brief the engine-out/obstacle case regardless of which runway is in use.
- **RWY 06 has a notably shorter LDA (2,229 m) than RWY 24 (2,438 m)** — relevant primarily to arrival planning but worth keeping in mind for any intersection/abbreviated-runway consideration.
- **Curfew window is not consistently published** (§Dispatch §4) — do not plan a late-day departure assuming the later of the two reported closure times applies.
- **Dual military/civil field** — expect possible interaction with adjacent US Navy air traffic in the local area.
- **South taxiway (TS) is notably narrower than the north taxiway (TN)** — a ground-routing caution for larger types.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics per runway.
- Take-off minima / DVA exact figures.
- Engine-out/EOSID procedure detail per runway (terrain-driven — a genuine safety item, not a formality).
- NADP/noise-routing detail beyond the reported "balanced" runway-direction preference.
- CTOT/ATFM specifics for LIRN.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status, current Etna VONA/ASHTAM status affecting South Italy airspace generally. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- Gesac (Aeroporti di Napoli) — "Runway data" — https://www.aeroportodinapoli.it/en/dati-di-pista (retrieved 2026-07-26).
- Wikipedia — "Naples International Airport" — https://en.wikipedia.org/wiki/Naples_International_Airport (retrieved 2026-07-26). *Runway/noise-scheme/terrain detail.*
- OurAirports — https://ourairports.com/airports/LIRN/frequencies.html (retrieved 2026-07-26). *Frequency cross-check, tier-4.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from AIP Italia (ENAV); K Global fields from live VAMSYS; 4-page pack. |
