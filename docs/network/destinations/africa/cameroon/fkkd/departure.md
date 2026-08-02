# FKKD — Douala · Departure Page

**FKKD / DLA** · Douala, Littoral Region, Cameroon · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [FKKD Briefing](index.md), Dispatch and Arrival pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | 12 or 30 — single runway, wind-selected 🟧 |
| Config logic | Wind-driven (no published preferential rule found) |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | None found — assumed uncoordinated 🟧 |
| De-icing on departure | NIL |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not published / verify — no taxiway hot-spot data found in reachable sources. 🟧
- **Runway crossings / read-back-required points:** Not confirmed — single-runway field, crossing traffic pattern not published.
- **Low-vis taxi caveats:** Not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway (12/30) — direction determined purely by wind, no published preferential-runway program.
- **By departure direction:** Not published / verify. 🟧
- **Noise / preferential-runway program:** None found — likely NIL for this traffic profile. 🟧
- **Interaction with arrivals:** Single runway — arrivals and departures share the one strip; sequencing detail not published.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not published / verify | 12/30 | 🟧 Not confirmed | No SID inventory found in reachable public sources this pass |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not published / verify — standard ICAO climb/speed schedule assumed. 🟧
- **Noise-abatement departure procedure (NADP):** None found — likely NIL. 🟧
- **Early turn / altitude constraints:** Not published / verify. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** Not published / verify. 🟧
- **Close-in / distant obstacles:** No close-in high terrain at the field itself (Briefing §3.1); Mount Cameroon (~13,255 ft) lies well to the WSW and is not a close-in departure obstacle from FKKD's normal traffic pattern.
- **Special DP / obstacle DP:** Not published / verify. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify — no confirmed low-visibility capability at this field (Briefing §9/§10). 🟧
- **De-icing:** NIL — equatorial/tropical field, non-issue. 🟩

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not published / verify — cross-ref [Briefing §8](index.md). 🟧
- **Frequency sequence:** Delivery → Ground → Tower (119.7 MHz, tier-4) → Departure — full sequence not confirmed; only a Tower frequency and one A/G channel found publicly.
- **CTOT / slot handling:** None found — assumed uncoordinated. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 🟧 Single 2,850 m runway (Briefing §7) may be **limiting for our heaviest widebody types at high departure weight**, particularly on a long-range sector — verify current takeoff performance against the current [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) before planning.
- **Density altitude / temperature:** Sea-level field — not a factor.
- **Contamination / wet-runway:** 🟥 Heavy wet-season convective rain (Jul–Sep peak) drives a real wet/contaminated-runway braking-action consideration on departure planning — see [Briefing §3.3/§3.4](index.md).
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-specific field-length/weight numbers.

---

## 10. Gotchas

- **Single runway, no reciprocal escape** — a disabled aircraft or obstruction on 12/30 stops all movement.
- **Wet-season CB/wind-shear risk on departure** (Jul–Sep peak) — brief the initial-climb attitude/instrument discipline; see the Kenya Airways Flight 507 (2007) reference in [Briefing §3.4](index.md) as a cautionary case for a dark, rain-affected departure.
- **No confirmed ILS/RNP procedure** — do not assume instrument-approach capability exists for a return/diversion back to FKKD shortly after departure.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID inventory, take-off minima, transition altitude, initial-climb/NADP detail — none confirmed.
- Full ATC frequency sequence (Delivery/Ground/Departure) — only Tower + one A/G channel found.
- Taxiway hot spots and standard taxi routings — not published.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status (N/A here). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/FKKD/ , /runways.html , /frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Douala International Airport" — https://en.wikipedia.org/wiki/Douala_International_Airport (retrieved 2026-07-26). *Kenya Airways Flight 507 accident reference.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP/ASECNA; K Global fields from live VAMSYS; 4-page pack. |
