# FOOL — Léon-Mba · Departure Page

**FOOL / LBV** · Libreville, Estuaire Province, Gabon · Africa
**Version** v0.1 · **Updated** 2026-07-26 · **Status** Draft — provisional

> **Read-me:** Tactical departure aid for the sim, not a chart. Companion to the [FOOL Briefing](index.md), Dispatch and Arrival pages. SIDs/procedures are listed **by name only** — fly the charted current-AIRAC version; verify every gradient, minima and routing on the current chart. Static data only; live wx/NOTAM/CTOT are pulled at planning. Open 🟧 items are in §Open items. Flag legend 🟥 restriction/hazard · 🟧 caution/unverified · 🟩 normal.

---

## 1. Snapshot

| Field | Value |
|---|---|
| Usual departure runway(s) | 16 or 34 — single runway, wind-selected 🟧 |
| Config logic | Wind-driven (no published preferential rule found) |
| Transition altitude | Not published / verify 🟧 |
| Take-off minima | Not published / verify 🟧 |
| CTOT / flow regime | None found — assumed uncoordinated 🟧 |
| De-icing on departure | NIL |

---

## 2. Stand → runway taxi routing & hot spots

- **Typical routings by runway:** Not published / verify. 🟧
- **Hot spots / tight taxiways:** Not published / verify — no taxiway hot-spot data found in reachable sources. 🟧
- **Runway crossings / read-back-required points:** Not confirmed — single-runway field.
- **Low-vis taxi caveats:** Not confirmed. 🟧

---

## 3. Runway / SID selection logic

- **By wind / config:** Single runway (16/34) — direction determined purely by wind, no published preferential-runway program.
- **By departure direction:** Not published / verify — note the coastal alignment means one direction departs directly out over the Gulf of Guinea (Briefing §3.5). 🟧
- **Noise / preferential-runway program:** None found — likely NIL for this traffic profile. 🟧
- **Interaction with arrivals:** Single runway — arrivals and departures share the one strip; sequencing detail not published.

---

## 4. SID list (names only)

*Fly the charted current-AIRAC version. Climb-gradient / RNP notes are pointers only — verify on the chart.*

| SID (name) | Runway(s) | RNP / gradient note | Notes |
|---|---|---|---|
| Not published / verify | 16/34 | 🟧 Not confirmed | No SID inventory found in reachable public sources this pass |

---

## 5. Initial climb, speed & noise-abatement departure

- **Initial climb / speed:** Not published / verify — standard ICAO climb/speed schedule assumed. 🟧
- **Noise-abatement departure procedure (NADP):** None found — likely NIL. 🟧
- **Early turn / altitude constraints:** Not published / verify. 🟧

---

## 6. Engine-out / emergency-turn & obstacle considerations

- **Engine-out / emergency-turn procedure:** 🟥 Not published / verify — the coastal 16/34 alignment puts at least one departure direction's initial climb segment directly over the Gulf of Guinea; brief ditching/return-to-field options realistically given this geography and the two historical ditching-related accidents near this field (Briefing §3.4).
- **Close-in / distant obstacles:** No close-in high terrain (Briefing §3.1); the operative consideration on this field is over-water, not terrain.
- **Special DP / obstacle DP:** Not published / verify. 🟧

---

## 7. Low-vis takeoff & de-icing on departure

- **LVTO minima / procedure:** Not published / verify — no confirmed low-visibility capability at this field (Briefing §9/§10). 🟧
- **De-icing:** NIL — equatorial/tropical field, non-issue. 🟩

---

## 8. Clearance / CTOT & departure frequency sequence

- **Clearance delivery:** Not published / verify — cross-ref [Briefing §8](index.md). 🟧
- **Frequency sequence:** Delivery → Ground → Tower (118.7 MHz, tier-4) → Departure — full sequence not confirmed; only a Tower frequency and two possible HF/A-G channels found publicly.
- **CTOT / slot handling:** None found — assumed uncoordinated. 🟧

---

## 9. Performance watch-items for our types

- **Field-length / weight:** 🟧 Single 3,000 m runway (Briefing §7) may be **limiting for our heaviest widebody types at high departure weight**, particularly on a long-range sector — verify current takeoff performance against the current [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) before planning.
- **Density altitude / temperature:** Sea-level field — not a factor.
- **Contamination / wet-runway:** 🟥 Heavy equatorial wet-season rain drives a real wet/contaminated-runway braking-action consideration on departure planning — see [Briefing §3.3/§3.4](index.md).
- **Link to OM B:** See [`OM B — Fleet Capability Matrix`](../../../../../fleet/capability-matrix.md) for type-specific field-length/weight numbers.

---

## 10. Gotchas

- **Single runway, no reciprocal escape** — a disabled aircraft or obstruction on 16/34 stops all movement.
- **Over-water initial climb on at least one runway direction** — brief this realistically; two historical ditching-related accidents (2004, 2011) occurred near this field shortly after departure with engine/hydraulic problems.
- **No confirmed ILS/RNP procedure** — do not assume instrument-approach capability exists for a return/diversion back to FOOL shortly after departure.

---

## Open items (🟧 — confirm against AIP / current AIRAC)

- SID inventory, take-off minima, transition altitude, initial-climb/NADP detail — none confirmed.
- Full ATC frequency sequence (Delivery/Ground/Departure) — only Tower + possible HF/A-G channels found.
- Exact engine-out/emergency-turn procedure for the coastal runway alignment — not confirmed; verify current chart.

> **Live data — pull at planning:** wx/METAR/TAF, NOTAM (runway/taxiway/navaid/lighting), CTOT/ATFM, de-icing status (N/A here). Not stored in this durable file.

---

## Sources & References
*Public URLs only. Cite origin + effective + retrieved dates. Subscription/in-sim charts inform content but are not listed here.*

- OurAirports — https://ourairports.com/airports/FOOL/ , /runways.html , /frequencies.html (retrieved 2026-07-26).
- Wikipedia — "Léon-Mba International Airport" — https://en.wikipedia.org/wiki/Libreville_International_Airport (retrieved 2026-07-26). *Gabon Express Flight 221 (2004) and Solenta Aviation/DHL An-26 (2011) ditching-accident references.*

## Change Log
| Version | Date | Change |
|---|---|---|
| v0.1 | 2026-07-26 | Built from national AIP/ASECNA; K Global fields from live VAMSYS; 4-page pack. |
