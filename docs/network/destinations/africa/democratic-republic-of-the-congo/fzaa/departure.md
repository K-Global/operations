# FZAA — N'djili Intl · Departure Page

**FZAA / FIH** · Kinshasa, Democratic Republic of the Congo · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — public-source/VAMSYS build, primary DRC AIP not independently reachable this pass

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [FZAA Briefing](index.md), [Dispatch](dispatch.md) and [Arrival](arrival.md) pages. SIDs/procedures are listed **by name only or flagged not-yet-confirmed** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | Not published / verify — single runway 06/24, no declared preferential logic found 🟧 |
| Config logic | Not confirmed; wind-driven assumption pending local data 🟧 |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | None confirmed — treat as unregulated pending confirmation 🟧 |
| De-icing on departure | **NIL** — equatorial field |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not confirmed — confirm exact routing with Ground/Tower on the day. 🟧
- **Hot spots / tight taxiways:** Not published / verify. 🟧
- **Runway crossings / read-back-required points:** Not confirmed. 🟧
- **Low-vis taxi caveats:** Not confirmed; ITCZ convective rain is the field's sourced weather hazard ([Briefing §3.4](index.md)) — heavy-rain reduced-visibility taxi is a plausible seasonal factor. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Not confirmed — no declared preferential-runway rule found in reachable sources. 🟧
- **By departure direction:** Not confirmed. 🟧
- **Noise / preferential-runway program:** None found in reachable sources. 🟧
- **Interaction with arrivals:** Single runway, both directions serve arrival and departure — sequencing is a live-ATC matter, and the shared cross-border TMA with FCBB ([Briefing §3.2](index.md)) may add coordination complexity; confirm the day's config with Tower.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. RNP/gradient notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not confirmed in reachable research pass 🟧 | 06 / 24 | Not confirmed — DRC is outside the ASECNA PBN framework used by neighbouring Congo-Brazzaville | Pull the live current-AIRAC SID list before use |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Per SID/ATC; 250 KIAS below FL100 (ICAO norm) assumed — confirm current chart. 🟧
- **Noise-abatement departure procedure (NADP):** None found in reachable sources. 🟧
- **Early turn / altitude constraints:** Not confirmed — verify current chart. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not confirmed in reachable sources — apply the operator/type EOSID for the assigned runway. 🟧
- **Close-in / distant obstacles:** Flat Congo-basin lowland — no significant close-in terrain confirmed ([Briefing §3.1](index.md)).
- **Special DP / obstacle DP:** Not confirmed — verify on current chart. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify. 🟧 ITCZ convective rain/reduced-visibility events ([Briefing §14](index.md)) are the field's sourced seasonal low-vis driver.
- **De-icing:** **NIL** — equatorial field.

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not separately confirmed — confirm locally which of the reachable tier-4 frequencies ([Briefing §8](index.md)) is used for delivery. 🟧
- **Frequency sequence:** **Ground 121.9 MHz → Tower 118.1 MHz → Approach 119.7 MHz → Kinshasa Centre (FZZA/RVA)** per current AIRAC (frequencies from Briefing §8, tier-4-sourced — not independently confirmed). 🟧
- **CTOT / slot handling:** No ATFM/CTOT regime confirmed for FZAA. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 4,000 m — **non-limiting for any K Global type**, the longest runway of the three fields in this build.
- **Density altitude / temperature:** Near sea-level elevation; equatorial heat/humidity is a mild performance consideration but not a hot-and-high field.
- **Contamination / wet-runway:** ITCZ convective rain season ([Briefing §14](index.md)) is the relevant seasonal consideration; a sourced 2010 runway-excursion event ([Briefing §3.3](index.md)) argues for a conservative approach to wet/contaminated-runway performance margins even though field length itself is ample. 🟧
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) — no field-length performance penalty for any home-network type at this field.

---

## 10. Gotchas

- **4,000 m runway is non-limiting** for any K Global type — the longest of the three regional fields.
- **FZAA and FCBB (Brazzaville) sit ~13.7 NM apart** under a shared cross-border TMA — expect coordination workload distinct from a normal single-ANSP departure.
- **Sourced runway-excursion history (2010)** — treat wet/contaminated-runway braking margins conservatively even though field length is not the constraint.
- **DRC's active conflict is confined to the far east (Kivu/Goma) of the country** — not relevant to a normal Kinshasa departure, but re-check the live picture before any DRC-domestic routing ([Briefing §3.6](index.md)).

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- Current-AIRAC SID names and RNP/gradient specifics.
- Take-off minima / DVA exact figures.
- Frequency sequence (delivery/ground/tower split) — tier-4-sourced, not independently confirmed.
- EOSID/engine-out procedure detail.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, current cross-border TMA coordination status. Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/FZAA/frequencies.html (retrieved 2026-07-25).
- Wikipedia — "N'djili Airport" — https://en.wikipedia.org/wiki/N%27djili_Airport (retrieved 2026-07-25). *2010 runway-excursion accident.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP; K Global fields from live VAMSYS; 4-page pack. |
